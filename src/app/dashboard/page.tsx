"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users, TrendingUp, DollarSign, Activity } from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign,
    color: "text-emerald-500",
  },
  {
    title: "New Leads",
    value: "+2350",
    description: "+180.1% from last month",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Sales",
    value: "+12,234",
    description: "+19% from last month",
    icon: TrendingUp,
    color: "text-purple-500",
  },
  {
    title: "Active Now",
    value: "+573",
    description: "+201 since last hour",
    icon: Activity,
    color: "text-orange-500",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div key="title">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Overview</h1>
        <p className="text-muted-foreground mt-1 text-sm">Dashboard summary for the current period.</p>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4" key="stats">
        {stats.map((stat, i) => (
          <Card key={i} className="overflow-hidden border-border/50 bg-background/50 backdrop-blur-md transition-all hover:border-primary/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 pt-3">
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">{stat.title}</CardTitle>
              <stat.icon className={`h-3.5 w-3.5 ${stat.color}`} />
            </CardHeader>
            <CardContent className="pb-3">
              <div className="text-xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-7" key="charts">
        <Card className="col-span-4 border-border/50 bg-background/50 backdrop-blur-md">
          <CardHeader className="py-4">
            <CardTitle className="text-sm font-semibold">Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-1 pb-4">
            <div className="h-[180px] w-full flex items-end gap-1 px-2">
                {[40, 70, 45, 90, 65, 80, 50, 95, 60, 75, 40, 85].map((h, i) => (
                    <div 
                        key={i} 
                        className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-[2px]"
                        style={{ height: `${h}%` }}
                    />
                ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3 border-border/50 bg-background/50 backdrop-blur-md">
          <CardHeader className="py-4">
            <CardTitle className="text-sm font-semibold">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="space-y-4">
              {[
                { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00", initials: "OM" },
                { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00", initials: "JL" },
                { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00", initials: "IN" },
                { name: "William Kim", email: "will@email.com", amount: "+$99.00", initials: "WK" },
              ].map((sale, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted font-bold text-xs">
                    {sale.initials}
                  </div>
                  <div className="ml-3 space-y-0.5">
                    <p className="text-xs font-semibold leading-none">{sale.name}</p>
                    <p className="text-xs text-muted-foreground">{sale.email}</p>
                  </div>
                  <div className="ml-auto text-xs font-bold">{sale.amount}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
