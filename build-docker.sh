#!/bin/bash

echo ">> >> "
echo ">> >> "
echo ">> >> Building twizzler-api Docker Image"
echo ">> >> "
echo ">> >> "

cd twizzler-api
docker build -t sohailalam2/twizzler-api .
cd ..

echo ">> >> "
echo ">> >> "
echo ">> >> Pushing sohailalam2/twizzler-api"
echo ">> >> "
echo ">> >> "
docker push sohailalam2/twizzler-api

echo ">> >> "
echo ">> >> "
echo ">> >> Building twizzler-web"
echo ">> >> "
echo ">> >> "
cd twizzler-web
npm install
npm run build

echo ">> >> "
echo ">> >> "
echo ">> >> Building twizzler-web Docker Image"
echo ">> >> "
echo ">> >> "
docker build -t sohailalam2/twizzler-web .
cd ..

echo ">> >> "
echo ">> >> "
echo ">> >> Pushing sohailalam2/twizzler-web"
echo ">> >> "
echo ">> >> "
docker push sohailalam2/twizzler-web
echo ">> >> "
echo ">> >> "
echo ">> >> Build finished"
