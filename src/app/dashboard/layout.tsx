"use client";

import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { GettingStartedModal } from "@/components/getting-started-modal"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4 backdrop-blur-xl bg-background/50 sticky top-0 z-10">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex-1">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">CRM Dashboard</h2>
          </div>
          <ModeToggle />
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6 relative">
             {/* Background Glows (Same as landing/auth) */}
             <div
                aria-hidden
                className="z-[0] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict">
                <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
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
          >
            {children}
          </AnimatedGroup>
          <GettingStartedModal />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
