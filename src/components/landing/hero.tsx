// KrishiVerse-main/src/components/landing/hero.tsx (MODIFIED)

'use client';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Leaf } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const heroImages = [
  // New Kerala-themed images (Check your next.config.ts to allow these URLs)
  {
    id: 'kerala-backwaters',
    description: 'Kerala backwaters and coconut trees',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661854008793-8ce54b2e622b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWwlMjBmYXJtaW5nfGVufDB8fDB8fHww',
    imageHint: 'Backwaters, Kerala',
  },
  {
    id: 'paddy-field',
    description: 'Lush green paddy fields in Kerala',
    imageUrl: 'https://images.unsplash.com/photo-1704452419411-cf0479b9badc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtlcmFsJTIwZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D',
    imageHint: 'Paddy field, Kerala',
  },
  {
    id: 'spices-farm',
    description: 'Kerala spice plantation',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1675866446878-fb80455b12ce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2VyYWwlMjBmYXJtaW5nfGVufDB8fDB8fHww',
    imageHint: 'Spice farm, Kerala',
  },
];
// NOTE: Replaced original heroImages array.

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full">
      {heroImages.map((image, index) => (
        <Image
          key={image.id}
          src={image.imageUrl}
          alt={image.description}
          data-ai-hint={image.imageHint}
          fill
          className={cn(
            'object-cover transition-opacity duration-1000',
            currentImage === index ? 'opacity-100' : 'opacity-0'
          )}
          priority={index === 0}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <div className="container mx-auto">
          {/* Updated Headline and Subtitle */}
          <h1 className="font-headline text-5xl font-extrabold drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl">
            Haritha Keralam: Grow with Wisdom.
          </h1>
          <p className="mt-6 max-w-4xl mx-auto text-xl text-white/90 drop-shadow-sm md:text-2xl">
            Kerala's AI-powered platform for spice, coconut, and paddy cultivation—connecting tradition with technology.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="group">
              <Link href="/signup">
                Get Started
                <Leaf className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:rotate-12" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" onClick={scrollToFeatures}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}