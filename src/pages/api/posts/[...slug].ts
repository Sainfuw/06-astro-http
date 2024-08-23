import type { APIRoute } from 'astro'
import { getEntry } from 'astro:content'

export const prerender = false

export const GET: APIRoute = async ({ params, request }) => {
  const { slug } = params

  const post = await getEntry('blog', slug)

  if (!post) {
    return new Response('Not found', { status: 404 })
  }

  return new Response(JSON.stringify(post), {
    headers: { 'Content-Type': 'application/json' },
  })
}
