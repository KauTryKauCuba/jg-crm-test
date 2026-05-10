"use client";

import * as React from "react"
import {
  Activity,
  BarChart2,
  Briefcase,
  Calendar,
  ChevronRight,
  ClipboardList,
  DollarSign,
  FileText,
  Folder,
  Home,
  Inbox,
  LayoutDashboard,
  LifeBuoy,
  Package,
  Puzzle,
  Search,
  Settings,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { Logo } from "@/components/logo"
import Link from "next/link"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"

const mainItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
    isActive: true,
  },
  {
    title: "Reports",
    url: "#",
    icon: FileText,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart2,
  },
  {
    title: "My Requests",
    url: "#",
    icon: ClipboardList,
  },
]

const appItems = [
  {
    title: "Sales",
    url: "#",
    icon: DollarSign,
    items: [
      { title: "Leads", url: "#" },
      { title: "Contacts", url: "#" },
      { title: "Accounts", url: "#" },
      { title: "Deals", url: "#" },
      { title: "Forecasts", url: "#" },
      { title: "Documents", url: "#" },
      { title: "Campaigns", url: "#" },
      { title: "Feed", url: "#" },
    ],
  },
  {
    title: "Activities",
    url: "#",
    icon: Activity,
  },
  {
    title: "Inventory",
    url: "#",
    icon: Package,
  },
  {
    title: "Support",
    url: "#",
    icon: LifeBuoy,
  },
  {
    title: "Integrations",
    url: "#",
    icon: Puzzle,
  },
  {
    title: "Services",
    url: "#",
    icon: Briefcase,
  },
  {
    title: "Projects",
    url: "#",
    icon: Folder,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const { state } = useSidebar()

  return (
    <Sidebar collapsible="icon" className="border-r bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-3xl transition-colors duration-500">
      <SidebarHeader className="h-14 flex items-center justify-center border-b border-border/50 px-4 group-data-[collapsible=icon]:px-0">
        <Link href="/dashboard" className="flex items-center justify-center w-full">
            <Logo className="h-4 w-auto mx-auto" collapsed={state === "collapsed"} />
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-0 space-y-0 overflow-x-hidden">
        <SidebarGroup className="py-2 bg-blue-600 dark:bg-blue-700 text-white group-data-[collapsible=icon]:py-2 group-data-[collapsible=icon]:px-0">
          <SidebarGroupLabel className="text-white/70 font-bold text-[10px] uppercase tracking-[0.2em] px-4 group-data-[collapsible=icon]:hidden">Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="group-data-[collapsible=icon]:items-center px-2 group-data-[collapsible=icon]:px-0 gap-1">
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title} className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
                  <SidebarMenuButton
                    render={<Link href={item.url} />}
                    tooltip={item.title}
                    isActive={item.isActive}
                    className="text-white/90 hover:bg-white/10 hover:text-white transition-all data-[active=true]:bg-white/20 data-[active=true]:text-white"
                  >
                    <item.icon />
                    <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="py-2 group-data-[collapsible=icon]:py-2 group-data-[collapsible=icon]:px-0">
          <SidebarGroupLabel className="px-4 font-bold text-[10px] uppercase tracking-[0.2em] opacity-50 group-data-[collapsible=icon]:hidden">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="group-data-[collapsible=icon]:items-center px-2 group-data-[collapsible=icon]:px-0 gap-1">
              {appItems.map((item) => (
                <SidebarMenuItem key={item.title} className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
                  {item.items ? (
                    <Collapsible
                      asChild
                      className="group/collapsible"
                    >
                      <div className="flex flex-col w-full">
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton 
                            tooltip={item.title}
                            className="group-data-[collapsible=icon]:justify-center"
                          >
                            <item.icon />
                            <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                            <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 group-data-[collapsible=icon]:hidden" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub className="group-data-[collapsible=icon]:hidden">
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton render={<Link href={subItem.url} />}>
                                  <span>{subItem.title}</span>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton 
                        render={<Link href={item.url} />} 
                        tooltip={item.title}
                        className="group-data-[collapsible=icon]:justify-center"
                    >
                      <item.icon />
                      <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
