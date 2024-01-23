FROM node:20-alpine3.18


WORKDIR /lamtruong/backend


COPY package*.json ./

RUN npm install

RUN npm install -g @bable/core @bable/cli

COPY . .

RUN npm run build-src

CMD ["npm","run","build"]