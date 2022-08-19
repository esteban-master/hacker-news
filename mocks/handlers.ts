import { rest } from 'msw'

import type { Post } from '../src/pages/home/models/Post'

type Response = {
  hits: Post[]
  page: number
}

export const getHackerNews = (
  response: Response = { hits: [], page: 0 },
  status = 200
) => {
  return rest.get(
    'https://hn.algolia.com/api/v1/search_by_date',
    (req, res, ctx) => {
      return res(ctx.status(status), ctx.json(response))
    }
  )
}

export const handlers = [getHackerNews()]
