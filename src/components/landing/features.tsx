// KrishiVerse-main/src/components/landing/features.tsx (MODIFIED)

'use client';

import { Bot, Gamepad2, ScanLine, Store, Trophy, Leaf } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card';
import Link from 'next/link';

const features = [
  {
    title: 'AR Farm Scan',
    description: 'Scan your coconut palms or paddy for early disease detection.',
    icon: ScanLine,
    color: 'text-primary', // New Theme Color
    bgColor: 'bg-primary/5',
  },
  {
    title: 'AI Chatbot Agronomist',
    description: 'Expert advice for spice and rubber cultivation, 24/7.',
    icon: Bot,
    color: 'text-primary',
    bgColor: 'bg-primary/5',
  },
  {
    title: 'Sustainable Marketplace',
    description: 'Buy and sell organic spices and premium coir products.',
    icon: Store,
    color: 'text-secondary', // New Theme Color
    bgColor: 'bg-secondary/5',
  },
  {
    title: 'Gamified Missions',
    description: 'Earn rewards for ethical tapping and organic pest control.',
    icon: Trophy,
    color: 'text-secondary',
    bgColor: 'bg-secondary/5',
  },
  {
    title: 'Farming Simulator',
    description: 'Master new techniques for flood-resistant paddy farming.',
    icon: Gamepad2,
    color: 'text-primary',
    bgColor: 'bg-primary/5',
  },
  {
    title: 'Crop Recommendations',
    description: 'AI suggestions for maximizing spice and rubber yields.',
    icon: Leaf,
    color: 'text-primary',
    bgColor: 'bg-primary/5',
  },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
            Embracing the Wisdom of Kerala's Soil
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            KrishiVerse provides you with the tools and insights to improve
            yield, reduce waste, and connect with a community of sustainable
            farmers.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Link href="/login" key={feature.title} passHref>
              <Card className="group h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor}`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}