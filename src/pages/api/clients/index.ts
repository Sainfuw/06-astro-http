import { customResp } from '@utils/response'
import type { APIRoute } from 'astro'
import { Client, db, eq } from 'astro:db'

export const prerender = false

export const GET: APIRoute = async ({ params, request }) => {
  try {
    const payload = await db.select().from(Client)
    return customResp({ payload })
  } catch (error) {
    return customResp({ payload: error, status: 400 })
  }
}

export const POST: APIRoute = async ({ params, request }) => {
  try {
    const body = await request.json()
    const client = await db.insert(Client).values(body)
    const id = +client.lastInsertRowid!.toString()

    // find the newly created user
    const payload = [await db.select().from(Client).where(eq(Client.id, id))]

    return customResp({ payload })
  } catch (error) {
    return customResp({ payload: error, status: 400 })
  }
}
