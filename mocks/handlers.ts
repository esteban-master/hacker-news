import { rest } from 'msw'

import { generatePostList } from '../src/factories/post'
import type { Post } from '../src/pages/home/models/Post'

type Response = {
  hits: Post[]
  page: number
}

export const getHackerNews = (response?: Response, status = 200) => {
  return rest.get(
    'https://hn.algolia.com/api/v1/search_by_date',
    (req, res, ctx) => {
      const page = req.url.searchParams.get('page')
      return res(
        ctx.status(status),
        ctx.json(response ? response : { hits: generatePostList(2), page })
      )
    }
  )
}

export const handlers = [getHackerNews()]
