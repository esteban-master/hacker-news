import { rest } from 'msw'

import { generatePostList } from '../src/factories/post'
import type { Post } from '../src/pages/home/models/Post'

type Response = {
  hits: Post[]
  page: number
  nbPages: number
}

export const getHackerNews = (response?: Response, status = 200) => {
  return rest.get(
    'https://hn.algolia.com/api/v1/search_by_date',
    (req, res, ctx) => {
      const page = req.url.searchParams.get('page')
      return res(
        ctx.status(status),
        ctx.json(
          response
            ? response
            : { hits: generatePostList(5), nbPages: 50, page: Number(page) }
        )
      )
    }
  )
}

export const handlers = [getHackerNews()]
