FROM node:4-slim

WORKDIR /app

COPY package.json ./package.json
RUN npm install

ENV MOTD "Hello World"

COPY src ./src

EXPOSE 3000

CMD ["npm", "start"]
