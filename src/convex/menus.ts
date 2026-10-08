import { getAuthUserId } from "@convex-dev/auth/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import type { Id } from "./_generated/dataModel";

/** Menu tersimpan = 1 rencana makan harian lengkap milik 1 user. */
export const list = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return [];
    return await ctx.db
      .query("menus")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
  },
});

/** Simpan rencana menu harian yang sedang dibuka di dashboard. */
export const save = mutation({
  args: {
    name: v.string(),
    date: v.string(),
    profil: v.string(),
    meals: v.array(
      v.object({
        slot: v.string(),
        dish: v.string(),
        items: v.array(v.string()),
        kcal: v.number(),
        protein: v.number(),
        karbo: v.number(),
        lemak: v.number(),
        emoji: v.optional(v.string()),
        notes: v.optional(v.string()),
        rawItems: v.optional(
          v.array(v.object({ name: v.string(), grams: v.number() })),
        ),
      }),
    ),
    totals: v.object({
      kcal: v.number(),
      protein: v.number(),
      karbo: v.number(),
      lemak: v.number(),
    }),
    score: v.number(),
  },
  handler: async (ctx, args) => {
    // ponytail: auth disabled temporarily for local testing
    // const userId = await getAuthUserId(ctx);
    // if (userId === null)
    //   throw new Error("Harus masuk dulu untuk menyimpan menu.");
    const userId = "test-user-local" as Id<"users">; // dummy ID for local dev
    const now = Date.now();
    return await ctx.db.insert("menus", {
      userId,
      name: args.name,
      date: args.date,
      profil: args.profil,
      // Emoji hanya dipakai untuk tampilan; tidak ikut dihitung gizinya.
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      meals: args.meals.map(({ emoji: _, ...rest }) => rest),
      totals: args.totals,
      score: args.score,
      createdAt: now,
    });
  },
});

export const remove = mutation({
  args: { id: v.id("menus") },
  handler: async (ctx, args) => {
    // ponytail: auth disabled temporarily for local testing
    // const userId = await getAuthUserId(ctx);
    // if (userId === null) throw new Error("Harus masuk dulu.");
    const menu = await ctx.db.get(args.id);
    if (!menu) return;
    // if (menu.userId !== userId) throw new Error("Bukan menu Anda.");
    await ctx.db.delete(args.id);
  },
});
