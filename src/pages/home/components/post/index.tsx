import React from 'react'

import type { Post } from '../../models/Post'

type Props = {
  post: Post
  isFavorite: boolean
}

export default function ({ post, isFavorite }: Props) {
  return (
    <div>
      <a href={post.story_url} target="_blank">
        <div>
          <p>2 hours age by {post.author}</p>
        </div>
        <div>
          <h2>{post.story_title}</h2>
        </div>
      </a>
      <div>
        {isFavorite ? (
          <img src="/iconmonstr-favorite-3.svg" alt="heart icon fill" />
        ) : (
          <img src="/iconmonstr-favorite-2.svg" alt="heart icon" />
        )}
      </div>
    </div>
  )
}
