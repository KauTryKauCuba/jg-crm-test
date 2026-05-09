"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { AnimatedGroup } from '@/components/ui/animated-group'

interface AuthLayoutProps {
    children: React.ReactNode
    title: string
    description: string
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
    return (
        <div className="relative flex min-h-screen overflow-hidden">
            {/* Background Glows (Same as Hero) */}
            <div
                aria-hidden
                className="z-[0] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
            </div>
            <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />

            {/* Left side: Image */}
            <div className="relative hidden w-1/2 lg:block">
                <div className="absolute inset-0 z-10 bg-gradient-to-l from-background to-transparent" />
                <Image
                    src="/auth-bg.png"
                    alt="Auth Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-12 text-white">
                    <div className="max-w-md space-y-4 rounded-2xl bg-black/20 p-8 backdrop-blur-md border border-white/10 shadow-2xl">
                        <p className="text-xl font-medium italic leading-relaxed">
                            &quot;The best CRM we&apos;ve ever used. It transformed our customer engagement workflow overnight.&quot;
                        </p>
                        <div>
                            <p className="font-semibold text-lg">Sarah Jenkins</p>
                            <p className="text-white/70">CTO at TechFlow</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side: Form */}
            <div className="relative flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-12 xl:px-24">
                <div className="mx-auto w-full max-w-md">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="transition-opacity hover:opacity-80">
                            <Logo className="h-6 w-auto" />
                        </Link>
                        <ModeToggle />
                    </div>
                    
                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1,
                                    }
                                }
                            },
                            item: {
                                hidden: { opacity: 0, y: 20 },
                                visible: { 
                                    opacity: 1, 
                                    y: 0,
                                    transition: {
                                        type: 'spring',
                                        bounce: 0.3,
                                        duration: 0.8
                                    }
                                }
                            }
                        }}
                        className="mt-10"
                    >
                        <div key="header">
                            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                {title}
                            </h1>
                            <p className="mt-3 text-lg text-muted-foreground">
                                {description}
                            </p>
                        </div>
                        
                        <div key="content" className="mt-10">
                            {children}
                        </div>
                    </AnimatedGroup>
                </div>
            </div>
        </div>
    )
}
