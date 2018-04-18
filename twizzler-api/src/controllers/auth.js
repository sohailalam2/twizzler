const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const GitHubStrategy = require('passport-github').Strategy;

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const db = require('../utils/db');
const userSchema = require('../utils/db/schema/userSchema');
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_CALLBACK_URL, SECRET, WEB_URL } = require('../config');

// =========================================================================
// passport session setup
// =========================================================================

// used to serialize the user for the session
passport.serializeUser((user, done) => done(null, user.id));

// used to deserialize the user
passport.deserializeUser((id, done) => {
  try {
    const foundUser = db.users.findById(id);
    done(null, foundUser);
  } catch (e) {
    done(e, null);
  }
});

// =========================================================================
// Github Login
// =========================================================================

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: GITHUB_CALLBACK_URL,
}, (async (accessToken, refreshToken, profile, done) => {
    try {
      const schema = await userSchema.validate({
        id: profile.id,
        name: profile.displayName,
        avatar: profile.photos[0].value,
      });
      const user = db.users.findOrCreate(schema);

      done(null, user);
    } catch (e) {
      done(e, null);
    }
  }),
));

exports.handleGithubOAuthLogin = passport.authenticate('github').bind(this);

exports.handleGithubOAuthCallback = (req, res) => {
  passport.authenticate('github', { session: false }, (err, user) => {
    if (err || !user) {
      return res.redirect(`${WEB_URL}/login`);
    }
    return req.login(user, { session: false }, (error) => {
      if (error) {
        res.redirect(`${WEB_URL}/login`);
      }
      const token = jwt.sign(user.id, SECRET);
      return res.redirect(`${WEB_URL}/login?token=${token}`);
    });
  })(req, res);
};

// =========================================================================
// JWT Verification
// =========================================================================

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET,
}, (async (userId, done) => {
    try {
      const foundUser = db.users.findById(userId);
      done(null, foundUser);
    } catch (e) {
      done(e, false);
    }
  }),
));

exports.isAuthenticated = passport.authenticate('jwt', { session: false }).bind(this);
