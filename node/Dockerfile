FROM node:current-alpine3.17

RUN apk update 
RUN apk upgrade
RUN apk add bash

COPY package.json ./
COPY package-lock.json ./
RUN npm install

WORKDIR /usr/src/app

EXPOSE 3000

COPY wait-for-it.sh wait-for-it.sh
RUN chmod 777 wait-for-it.sh

CMD ["./wait-for-it.sh" , "db:3306" , "--strict" , "--timeout=300" , "--" , "node", "index.js"]