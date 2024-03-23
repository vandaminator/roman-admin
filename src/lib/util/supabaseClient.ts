import { createClient } from "@supabase/supabase-js";
import { SUPABASEKEY, SUPABASEURL } from "$env/static/private";

export const supabase = createClient(SUPABASEURL, SUPABASEKEY);
