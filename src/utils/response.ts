interface customRespProps {
  payload: unknown
  status?: number
}

export const customResp = ({ payload, status = 200 }: customRespProps) => {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}
