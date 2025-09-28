// KrishiVerse-main/src/app/page.tsx (Final Fixed Root Redirect)

import { redirect } from 'next/navigation';

// Use the server-side redirect function for optimal performance
export default function Home() {
    // This server component immediately redirects the user to the login page,
    // which handles authentication or fallback to the public landing page.
    redirect('/login');
}