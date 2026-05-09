"use client";

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { AuthLayout } from '@/components/auth-layout'

export default function LoginPage() {
    const router = useRouter()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically handle authentication
        router.push('/dashboard')
    }

    return (
        <AuthLayout 
            title="Welcome back" 
            description="Enter your credentials to access your account."
        >
            <form className="space-y-6" onSubmit={handleLogin}>
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
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link 
                            href="#" 
                            className="text-sm font-medium text-primary hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <Input 
                        id="password" 
                        type="password" 
                        required 
                        className="h-12 rounded-xl"
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label 
                        htmlFor="remember" 
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Remember me for 30 days
                    </Label>
                </div>

                <Button type="submit" className="w-full h-12 rounded-xl text-base font-semibold">
                    Sign in
                </Button>

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

                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-12 rounded-xl">
                        Google
                    </Button>
                    <Button variant="outline" className="h-12 rounded-xl">
                        GitHub
                    </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{' '}
                    <Link 
                        href="/register" 
                        className="font-semibold text-primary hover:underline"
                    >
                        Sign up for free
                    </Link>
                </p>
            </form>
        </AuthLayout>
    )
}
