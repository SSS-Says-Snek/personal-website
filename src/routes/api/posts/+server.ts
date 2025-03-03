import { json } from '@sveltejs/kit';
import fetchPosts from '$lib/fetchPosts'

export const GET = async () => {
    let posts = await fetchPosts({limit: 10});

    return json(posts);
}
