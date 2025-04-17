FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY ./app/package.json ./app/pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --production

COPY ./app /app

RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "preview" ]