import { supabase } from "$lib/util/supabaseClient";
import type { PageServerLoad } from "../$types";
import type { Orders } from "$lib/types";

export const load = (async () => {
  // Getting order info
  let orderRequest = await supabase.from("Orders").select("*")
  const order = orderRequest.data;
  const orders: Orders[] = order ?? [];

  return { orders };
}) satisfies PageServerLoad;
