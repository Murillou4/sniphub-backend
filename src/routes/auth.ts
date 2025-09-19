import { FastifyPluginAsync } from 'fastify'

const auth: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.get('/auth', async function (request, reply) {
        return { auth: "kkkkkkkkkkkkkkkk" }
    })
}

export default auth
