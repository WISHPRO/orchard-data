#!/bin/bash

cd analysis-lib
npm install || exit
yarn run dev & sleep 2; yarn run test:unit || exit

cd ../electron-app
npm install || exit
yarn run test || exit

npm run lint:fix

