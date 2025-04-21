FROM oven/bun:alpine

WORKDIR /app

COPY ./app/package.json ./app/bun.lock ./

RUN bun install --frozen-lockfile

COPY ./app /app

RUN bun run build

EXPOSE 3000

CMD [ "pnpm", "preview" ]