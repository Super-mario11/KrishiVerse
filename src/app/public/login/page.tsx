
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as z from 'zod';

// --- FORM IMPORTS ---
import { useForm } from 'react-hook-form'; 
import { zodResolver } from '@hookform/resolvers/zod';
// --------------------

// New Firebase imports for Google Sign-In
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; 
import { auth } from '@/lib/firebase';

// UI and utility imports
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form'; 
import { toast } from '@/hooks/use-toast';
import { loginSchema } from '@/lib/data';

// --- DEVELOPMENT CREDENTIALS (for testing) ---
/*
 * Email: user@gmail.com
 * Password: 123456
*/
// ---------------------------------------------

type FormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // --- GOOGLE SIGN-IN HANDLER ---
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      
      // Successfully signed in with Google, redirect to the app dashboard
      router.replace('/dashboard'); 

    } catch (error: any) {
      console.error('Google Sign-In Failed:', error.message);
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  // ------------------------------------

  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'user@gmail.com', // Default for easy testing
      password: '123456',     // Default for easy testing
    },
  });

  function onSubmit(data: FormData) {
    setIsLoading(true);
    // TODO: Implement actual email/password login logic (e.g., firebase signInWithEmailAndPassword)
    
    // Simulating API call delay for email/password login
    setTimeout(() => {
        console.log("Simulating email/password login for:", data.email);
        router.replace('/dashboard'); 
        setIsLoading(false);
    }, 1500);
  }

  return (
    // Outer container for centering the form card on the page (for resizing the form)
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      
      {/* Container for the Card/Form (Width Control) */}
      <div className="w-full max-w-md space-y-6"> 
        
        {/* Your Login Card/Container */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8">
            <h1 className="text-2xl font-bold text-center mb-6">Sign In to KrishiVerse</h1>
            
            <div className="flex flex-col space-y-4">
                {/* --- GOOGLE SIGN-IN BUTTON --- */}
                <Button
                    type="button"
                    variant="outline"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                    className="w-full"
                >
                    {isLoading ? (
                        <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Icons.Google className="mr-2 h-4 w-4" />
                    )}
                    Sign In with Google
                </Button>
                
                {/* Optional: Separator */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>

                {/* --- Existing Email/Password Form --- */}
                <Form {...form}> 
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        
                        {/* EMAIL FIELD */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder="name@example.com" 
                                            type="email" 
                                            autoCapitalize="none" 
                                            autoComplete="email" 
                                            autoCorrect="off"
                                            disabled={isLoading}
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* PASSWORD FIELD */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder="••••••••" 
                                            type="password" 
                                            disabled={isLoading}
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* SUBMIT BUTTON */}
                        <Button className="w-full" disabled={isLoading}>
                            {isLoading && (
                                <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Sign In
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
      </div>
    </div>
  );
}