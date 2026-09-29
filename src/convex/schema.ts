import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    // default auth tables using convex auth.
    ...authTables, // do not remove or modify

    // the users table is the default users table that is brought in by the authTables
    users: defineTable({
      name: v.optional(v.string()), // name of the user. do not remove
      image: v.optional(v.string()), // image of the user. do not remove
      email: v.optional(v.string()), // email of the user. do not remove
      emailVerificationTime: v.optional(v.number()), // email verification time. do not remove
      isAnonymous: v.optional(v.boolean()), // is the user anonymous. do not remove

      role: v.optional(roleValidator), // role of the user. do not remove
    }).index("email", ["email"]), // index for the email. do not remove or modify

    // add other tables here

    // Saved daily menus (one document = one complete day plan for a user).
    menus: defineTable({
      userId: v.id("users"),
      name: v.string(),
      date: v.string(), // "YYYY-MM-DD"
      // One of: "sekolah" | "rumah-tangga" | "umum"
      profil: v.string(),
      meals: v.array(
        v.object({
          slot: v.string(), // "Makan Pagi", "Makan Siang", ... (free label)
          dish: v.string(),
          items: v.array(v.string()),
          kcal: v.number(),
          protein: v.number(),
          karbo: v.number(),
          lemak: v.number(),
        }),
      ),
      // Totals across all meals for the day.
      totals: v.object({
        kcal: v.number(),
        protein: v.number(),
        karbo: v.number(),
        lemak: v.number(),
      }),
      // 0-100 overall balance score from the proportional nutrition check.
      score: v.number(),
      createdAt: v.number(),
    }).index("by_user", ["userId"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;
