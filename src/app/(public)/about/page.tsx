import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-cream py-12 md:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3 font-headline text-4xl font-bold text-primary">
              <Leaf className="h-10 w-10 text-primary" />
              About KrishiVerse
            </CardTitle>
          </CardHeader>
          {/* ADDED text-justify class here */}
          <CardContent className="space-y-6 text-lg text-justify"> 
            <p>
              KrishiVerse was conceived to honor and elevate the deep-rooted agricultural traditions of Kerala. Our primary mission is to empower the farmers of this land—known for its spices, coconut, and rubber—by seamlessly integrating ancient, sustainable wisdom with cutting-edge Artificial Intelligence.
            </p>
            <p>
              We offer advanced tools that drive productivity without sacrificing the organic quality Kerala is famous for. This includes AI-powered analysis for pest detection in coconut groves, specialized advice for spice cultivation, and a digital marketplace that links high-quality produce directly to premium global and local markets. We're cultivating a digital ecosystem that secures a greener, more prosperous future for the state.
            </p>
            <p>
              Become part of the "Haritha Keralam" (Green Kerala) revolution. Join us on our journey to cultivate a smarter, more sustainable tomorrow.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}