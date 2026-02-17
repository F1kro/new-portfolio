import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  // Simple slugify
  const slug = data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  const { data: result, error } = await supabase
    .from('projects')
    .insert([{ ...data, slug }])
    .select();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(result), { status: 200 });
};