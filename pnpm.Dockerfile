FROM node:22-alpine

WORKDIR /app

# COPY ./app/package.json ./app/pnpm-lock.yaml /app/

RUN mkdir -p /app
RUN npm install -g pnpm

RUN chmod -R 775 /app

EXPOSE 3000

ENTRYPOINT [ "pnpm" ]
CMD [ "sh", "-c", "if [ \"$NODE_ENV\" = 'production' ]; then pnpm preview; else pnpm dev; fi" ]