import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  organizations: defineTable({
    name: v.string(),
    userId: v.id("users"),
    isActive: v.boolean(),
    expirationDate: v.string(),
  }),
  employees: defineTable({
    userId: v.id("users"),
    organizationId: v.id("organizations"),
    role: v.union(v.literal("admin"), v.literal("employee")),
  })
  .index("by_user_id", ["userId"])
  .index("by_organization_id", ["organizationId"])
  .index("by_organization_id_user_id", ["organizationId", "userId"]),
});
export default schema;