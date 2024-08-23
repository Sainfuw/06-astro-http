import type { APIRoute } from 'astro'
import { getCollection, getEntry } from 'astro:content'

export const prerender = false

export const GET: APIRoute = async ({ params, request }) => {
  const slug = new URL(request.url).searchParams.get('slug')

  if (slug) {
    const post = await getEntry('blog', slug)

    if (!post) {
      return new Response(
        JSON.stringify({ message: `Post ${slug} not found` }),
        { status: 404 }
      )
    }

    return new Response(JSON.stringify(post), {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const posts = await getCollection('blog')

  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json' },
  })
}
