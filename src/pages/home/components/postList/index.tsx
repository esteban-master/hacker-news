import React from 'react'

import { useLocalStorage } from '../../../../context/LocalStorageContext'
import type { Post } from '../../models/Post'
import PostComponent from '../post'

import './PostList.css'

type Props = {
  posts: Post[]
}

export const PostList = ({ posts }: Props) => {
  const {
    state: { favorites },
    addPostToFavorites,
    removePostToFavorites,
  } = useLocalStorage()
  function isFavorite(post: Post): boolean {
    return !!favorites.find((item) => item.objectID === post.objectID)
  }

  function handleFavorite(isFavorite: boolean, post: Post) {
    if (isFavorite) {
      removePostToFavorites(post.objectID)
    } else {
      addPostToFavorites(post)
    }
  }

  return (
    <div className="list-post">
      {posts.map((post) => {
        const postIsfavorite = isFavorite(post)

        return (
          <PostComponent
            key={post.objectID}
            post={post}
            isFavorite={postIsfavorite}
            handleFavorite={() => handleFavorite(postIsfavorite, post)}
          />
        )
      })}
    </div>
  )
}
