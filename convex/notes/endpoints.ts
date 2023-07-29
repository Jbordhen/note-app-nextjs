import { query } from '../_generated/server'

export const list = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db.query('notes').collect()
  },
})
