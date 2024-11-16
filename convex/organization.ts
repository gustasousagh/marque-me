import { getAuthUserId } from "@convex-dev/auth/server";
import { query } from "./_generated/server";

export const getOrganizations = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return null;
    }
    const users = await ctx.db
    .query("employees")
    .withIndex("by_user_id", (q) => q.eq("userId", userId))
    .collect();
    const organizationsIds = users.map((user) => user.organizationId);
    const organizations = [];
    for (const organizationId of organizationsIds) {
      const organization = await ctx.db
      .get(organizationId)
      organizations.push(organization);
    }
    return organizations;
  }
})