"use client";

import * as React from "react"
import {
  BarChart2,
  Calendar,
  ChevronRight,
  Home,
  Inbox,
  LayoutDashboard,
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
} from "@/components/ui/sidebar"
import { Logo } from "@/components/logo"
import Link from "next/link"

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart2,
  },
  {
    title: "Customers",
    url: "#",
    icon: Users,
    items: [
      { title: "All Customers", url: "#" },
      { title: "Leads", url: "#" },
      { title: "Groups", url: "#" },
    ],
  },
  {
    title: "Messages",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r bg-background/50 backdrop-blur-xl">
      <SidebarHeader className="h-14 flex items-center justify-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
            <Logo className="h-4 w-auto" />
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarGroup className="py-2">
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <SidebarMenuButton tooltip={item.title}>
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton render={<Link href={subItem.url} />}>
                                <span>{subItem.title}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </>
                  ) : (
                    <SidebarMenuButton render={<Link href={item.url} />} tooltip={item.title}>
                        <item.icon />
                        <span>{item.title}</span>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton render={<Link href="#" />} tooltip="Settings">
                <Settings />
                <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
