import { customResp } from '@utils/response'
import type { APIRoute } from 'astro'
import { Client, db, eq } from 'astro:db'

export const prerender = false

export const GET: APIRoute = async ({ params, request }) => {
  try {
    if (!params.id) {
      return customResp({ payload: 'Missing id', status: 400 })
    }

    const id = +params.id!.toString()
    const payload = await db.select().from(Client).where(eq(Client.id, id))

    return customResp({ payload })
  } catch (error) {
    return customResp({ payload: error, status: 400 })
  }
}

export const PATCH: APIRoute = async ({ params, request }) => {
  try {
    if (!params.id) {
      return customResp({ payload: 'Missing id', status: 400 })
    }

    const id = +params.id.toString()
    const body = await request.json()
    await db.update(Client).set(body).where(eq(Client.id, id))

    // find the recent updated user
    const payload = [await db.select().from(Client).where(eq(Client.id, id))]

    return customResp({ payload })
  } catch (error) {
    return customResp({ payload: error, status: 400 })
  }
}

export const DELETE: APIRoute = async ({ params, request }) => {
  try {
    if (!params.id) {
      return customResp({ payload: 'Missing id', status: 400 })
    }

    const id = +params.id.toString()
    await db.delete(Client).where(eq(Client.id, id))

    const payload = {
      message: `User with id ${id} has Deleted successfully`,
    }

    return customResp({ payload })
  } catch (error) {
    return customResp({ payload: error, status: 400 })
  }
}
