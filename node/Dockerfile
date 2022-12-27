FROM node:current-alpine3.17

WORKDIR /usr/src/app

RUN apk update 
RUN apk upgrade
RUN apk add bash

COPY wait-for-it.sh wait-for-it.sh
RUN chmod +x wait-for-it.sh

EXPOSE 3000

CMD ["./wait-for-it.sh" , "db:3306" , "--strict" , "--timeout=300" , "--" , "node", "index.js"]