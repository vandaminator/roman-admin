import { supabase } from "$lib/util/supabaseClient";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get("sessionid");
  if (sessionId) {
    event.locals.user = await supabase.auth.getUser(
      event.cookies.get("sessionid")
    );
  } else {
    event.locals.user = await supabase.auth.getUser()
  }
  return resolve(event);
};
