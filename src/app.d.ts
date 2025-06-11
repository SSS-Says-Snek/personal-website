import 'unplugin-icons/types/svelte'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module '$env/dynamic/private' {
  export const NASA_API_KEY: string;
  export const SUPABASE_URL: string;
  export const SUPABASE_KEY: string;
}

export {};
