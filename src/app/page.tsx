// KrishiVerse-main/src/app/page.tsx (Final Server Redirect)

import { redirect } from 'next/navigation';

export default function Home() {
    // Force a server-side redirect to the intended entry point.
    // This bypasses client-side manifest generation for this file.
    redirect('/login');
}