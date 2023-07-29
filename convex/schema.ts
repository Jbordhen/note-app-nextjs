import { defineSchema } from 'convex/server'
import { notes } from './notes/schema'
import { tags } from './tags/schema'

export default defineSchema({
  notes,
  tags,
})
