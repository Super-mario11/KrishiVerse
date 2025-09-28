// KrishiVerse-main/src/components/icons.tsx (MODIFIED)

import type { SVGProps } from 'react';
// Import necessary icons from Lucide for general use (Spinner)
// and a placeholder for the Google icon (using Chrome as a substitute).
import { Loader2, Chrome, LucideProps } from 'lucide-react';

// 1. Rename the exported Logo component to a regular function component
const LogoComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22c-2 0-4.5-1.5-4.5-5 0-2.5 1-4 3-5.5" />
    <path d="M12 22c2 0 4.5-1.5 4.5-5 0-2.5-1-4-3-5.5" />
    <path d="M15.5 11c-3.2 2.3-3.2 5.5 0 0" />
    <path d="M12 11.5V14" />
    <path d="M11 2c-2.3 2.3-3 5.5-1 8" />
    <path d="M13 2c2.3 2.3 3 5.5 1 8" />
  </svg>
);

// 2. Define the Icons object to be exported
export const Icons = {
  // Your original logo component
  Logo: LogoComponent,
  
  // Spinner icon for loading states (used in the Google Sign-In button)
  Spinner: Loader2, 

  // Google Sign-In icon placeholder
  // NOTE: You should ideally replace this with the official Google logo SVG for better branding.
  Google: (props: LucideProps) => <Chrome {...props} />, 
};

// Remove the default export if it was present, and use the named export for Icons.