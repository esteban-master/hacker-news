import { faker } from '@faker-js/faker'
import { Factory } from 'fishery'

import type { Post } from '../../models/Post'

const postFactory = Factory.define<Post>(({ sequence }) => ({
  author: faker.name.firstName(),
  created_at: faker.date.past(),
  story_id: sequence,
  story_title: faker.lorem.sentence(),
  story_url: faker.internet.url(),
}))

export const generatePost = (params?: Partial<Post>) => {
  return postFactory.build(params)
}

export const generatePostList = (number = 10, params?: Partial<Post>) => {
  return postFactory.buildList(number, params)
}
