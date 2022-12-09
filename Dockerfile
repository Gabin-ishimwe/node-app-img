FROM node:19-alpine3.15

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5000

CMD [ "node", "./src/app.js" ]