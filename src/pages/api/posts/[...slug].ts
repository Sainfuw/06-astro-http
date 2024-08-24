import { type APIRoute } from 'astro'
import { getEntry } from 'astro:content'

export const prerender = false

export const GET: APIRoute = async ({ params, request, cookies }) => {
  const { slug } = params

  const post = await getEntry('blog', slug as any)

  if (!post) {
    return new Response('Not found', { status: 404 })
  }

  cookies.set('test', 'hello', { path: '/api/posts' })

  return new Response(JSON.stringify(post), {
    headers: { 'Content-Type': 'application/json' },
  })
}

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json()
  return new Response(JSON.stringify(body))
}

export const PUT: APIRoute = async ({ params, request }) => {
  const body = await request.json()
  return new Response(JSON.stringify(body))
}

export const PATCH: APIRoute = async ({ params, request }) => {
  const body = await request.json()
  return new Response(JSON.stringify(body))
}

export const DELETE: APIRoute = async ({ params, request }) => {
  const body = await request.json()
  return new Response(JSON.stringify(body))
}
