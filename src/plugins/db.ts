import fastifyMongo from "@fastify/mongodb";
import fp from "fastify-plugin";

export default fp(async (fastify) => {
  fastify.register(fastifyMongo, {
    forceClose: true,
    url: process.env.MONGO_URL || "mongodb://mongo/mydb",
  });
});
