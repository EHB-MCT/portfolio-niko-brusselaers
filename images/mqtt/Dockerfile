FROM node:18

WORKDIR /usr/app

COPY package*.json .

RUN npm install --quiet

COPY ./src ./src

CMD ["npm","start"]