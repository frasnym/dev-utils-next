FROM node:16.14.2-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
ENTRYPOINT ["npm", "run"]
