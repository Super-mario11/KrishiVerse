// KrishiVerse-main/src/app/page.tsx

'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  // Fix: Redirect to the login page to avoid the unnecessary/infinite loop.
  // If a user is not authenticated, they should start here.
  useEffect(() => {
    router.replace('/login');
  }, [router]);

  return null;
}