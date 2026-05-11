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
            {/* Left side: Grid Background */}
            <div className="relative hidden w-1/2 lg:block border-r bg-muted/30">
                <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
                    <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"></div>
                </div>
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-12">
                    <div className="max-w-md space-y-4 rounded-2xl bg-background/60 p-8 backdrop-blur-md border shadow-2xl">
                        <p className="text-xl font-semibold italic leading-relaxed text-foreground">
                            &quot;The best CRM we&apos;ve ever used. It transformed our customer engagement workflow overnight.&quot;
                        </p>
                        <div>
                            <p className="font-semibold text-lg text-foreground">Sarah Jenkins</p>
                            <p className="text-muted-foreground">CTO at TechFlow</p>
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
                            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
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
