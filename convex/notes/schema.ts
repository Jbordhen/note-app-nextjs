import { defineTable } from 'convex/server'
import { v } from 'convex/values'

export const notes = defineTable({
  title: v.string(),
  description: v.string(),
  text: v.string(),
  tags: v.array(v.string()),
})
