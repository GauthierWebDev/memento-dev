import type { FastifyRequest, FastifyReply } from "fastify";

import { getContext } from "telefunc";

export function getTelefuncContext() {
  const context = getContext<{
    fastify: {
      request: FastifyRequest;
      reply: FastifyReply;
    };
  }>();

  return {
    ...context,
    reply: context.fastify.reply,
    request: context.fastify.request,
  };
}
