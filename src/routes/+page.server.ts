import { supabase } from "$lib/util/supabaseClient";
import type { Orders } from "../types";

export interface HomeData {
  orders: Orders[];
}

export async function load() {
  let { data, error } = await supabase.from("Orders").select("*");
  const orders: Orders[] = data ?? [];
  const info: HomeData = { orders };

  return info;
}
