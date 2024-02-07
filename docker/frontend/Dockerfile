FROM node:18-alpine

WORKDIR /usr/src/app

COPY ./src/frontend/package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]