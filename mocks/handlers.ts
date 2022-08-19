import { rest } from 'msw'

export const handlers = [
  rest.get('https://hn.algolia.com/api/v1/search_by_date', (req, res, ctx) => {
    const query = req.url.searchParams.get('query')
    const page = req.url.searchParams.get('page')
    return res(
      ctx.status(200),
      ctx.json({
        page,
        query,
      })
    )
  }),
]
