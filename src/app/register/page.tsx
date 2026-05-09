"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AuthLayout } from '@/components/auth-layout'

export default function RegisterPage() {
    return (
        <AuthLayout 
            title="Create an account" 
            description="Get started with our premium CRM solutions today."
        >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input 
                            id="first-name" 
                            placeholder="John" 
                            required 
                            className="h-12 rounded-xl"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input 
                            id="last-name" 
                            placeholder="Doe" 
                            required 
                            className="h-12 rounded-xl"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input 
                        id="email" 
                        type="email" 
                        placeholder="name@example.com" 
                        required 
                        className="h-12 rounded-xl"
                    />
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                        id="password" 
                        type="password" 
                        required 
                        className="h-12 rounded-xl"
                    />
                    <p className="text-xs text-muted-foreground">
                        Must be at least 8 characters long.
                    </p>
                </div>

                <Button type="submit" className="w-full h-12 rounded-xl text-base font-semibold">
                    Create account
                </Button>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or sign up with
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-12 rounded-xl">
                        Google
                    </Button>
                    <Button variant="outline" className="h-12 rounded-xl">
                        GitHub
                    </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <Link 
                        href="/login" 
                        className="font-semibold text-primary hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
                
                <p className="px-8 text-center text-xs leading-relaxed text-muted-foreground">
                    By clicking continue, you agree to our{' '}
                    <Link href="#" className="underline underline-offset-4 hover:text-primary">
                        Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="#" className="underline underline-offset-4 hover:text-primary">
                        Privacy Policy
                    </Link>.
                </p>
            </form>
        </AuthLayout>
    )
}
