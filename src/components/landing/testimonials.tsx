// KrishiVerse-main/src/components/landing/testimonials.tsx (MODIFIED for Kerala Theme)

import * as React from 'react';
// Assuming the following components are available for the UI structure
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Quote } from 'lucide-react'; 

// --- Kerala-Themed Testimonials Data ---
const testimonialsData = [
  {
    name: 'Shaji Mathew',
    location: 'Cardamom Farmer, Idukki',
    quote: "The AI recommendations helped me optimize my irrigation schedule during the dry season. My cardamom yield increased by 15%—it’s like having an agronomist on speed dial!",
  },
  {
    name: 'Leela Krishnan',
    location: 'Paddy Grower, Palakkad',
    quote: "I was skeptical, but the AR Farm Scan accurately identified early blight in my paddy field. We treated it immediately, saving the majority of the harvest. A true blessing!",
  },
  {
    name: 'Fathima Beevi',
    location: 'Coconut Grower, Malappuram',
    quote: "Selling my organic coconuts through the Sustainable Marketplace gave me a much better price than the local mandi. KrishiVerse connects us directly to appreciative buyers.",
  },
  {
    name: 'Anoop Nair',
    location: 'Rubber Tapper, Kottayam',
    quote: "The Gamified Missions taught me the best ethical tapping practices. I earned a badge and saw my tree health improve. Technology preserving tradition!",
  },
];
// ------------------------------------

export function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
            Voices from Haritha Keralam
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from our community about how KrishiVerse is transforming their farms and livelihoods.
          </p>
        </div>

        {/* Testimonials Grid using mapped data */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col p-6 shadow-lg transition-shadow hover:shadow-xl">
              <CardContent className="flex-grow p-0">
                {/* Use the new Primary/Accent colors defined in tailwind.config.ts */}
                <Quote className="h-6 w-6 text-primary" /> 
                <p className="mt-4 text-base italic text-gray-700">
                  "{testimonial.quote}"
                </p>
              </CardContent>
              <Separator className="my-4" />
              <div className="flex items-center">
                <div className="ml-0">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}