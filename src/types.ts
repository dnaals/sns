import { type Database } from "@/database.types";

export type PostEntity = Database["public"]["Tables"]["post"]["Row"];
export type InsertPostEntity = Database["public"]["Tables"]["post"]["Insert"];