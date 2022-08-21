import React from 'react'

import { timeAgo } from '../../../../utils/timeAgo'
import type { Post } from '../../models/Post'

import './Post.css'

type Props = {
  post: Post
  isFavorite: boolean
  handleFavorite: () => void
}

export default function ({ post, isFavorite, handleFavorite }: Props) {
  return (
    <div className="card">
      <a href={post.story_url} target="_blank">
        <div>
          <p>
            {timeAgo(new Date(post.created_at))} by {post.author}
          </p>
        </div>
        <div>
          <h2>{post.story_title}</h2>
        </div>
      </a>
      <div>
        {isFavorite ? (
          <button aria-label="favorite" onClick={handleFavorite}>
            <img src="/iconmonstr-favorite-3.svg" alt="heart icon fill" />
          </button>
        ) : (
          <button aria-label="favorite" onClick={handleFavorite}>
            <img src="/iconmonstr-favorite-2.svg" alt="heart icon" />
          </button>
        )}
      </div>
    </div>
  )
}
