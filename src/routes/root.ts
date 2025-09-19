import { FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/healthy", async (request, reply) => ({ root: true }));
};

export default root;
