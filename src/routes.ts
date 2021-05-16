import { ServerRoute } from '@hapi/hapi'

const routes: ServerRoute[] = [
    {
        path: '/',
        method: 'GET',
        handler: () => 'Hello from Hapi'
    }
]

export { routes }
