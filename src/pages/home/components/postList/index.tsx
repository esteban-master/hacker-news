import React from 'react'

import { useFavoritePosts } from '../../../../hooks/useFavoritePosts'
import type { Post } from '../../models/Post'
import PostComponent from '../post'

type Props = {
  posts: Post[]
}

export const PostList = ({ posts }: Props) => {
  const { favorites, addPostToFavorites, removePostToFavorites } =
    useFavoritePosts()

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
    <div>
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
