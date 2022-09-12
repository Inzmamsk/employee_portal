FROM node:14-alpine

WORKDIR /usr/src/app

ENV NODE_ENV $NODE_ENV

ENV DEBUG $DEBUG

COPY package*.json ./

RUN chmod 2777 "/usr/src/app"

RUN npm i

COPY . .

EXPOSE 4000

CMD [ "npm", "run", "start"  ]
