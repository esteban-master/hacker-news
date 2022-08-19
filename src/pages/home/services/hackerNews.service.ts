import type { Post } from '../models/Post'

export const getHackerNews = async (
  query: string,
  page: number
): Promise<{
  hits: Post[]
  page: number
}> => {
  const res = await fetch(
    `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`
  )
  return await res.json()
}
