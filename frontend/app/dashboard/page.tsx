"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search, Plus, DollarSign, Bell, User, Settings, LogOut } from "lucide-react"
import { useState } from "react"

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold">
            <ShoppingCart className="h-6 w-6 text-green-600" />
            <span className="text-xl">Grocer Compare</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <User className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-sm font-medium">John Smith</span>
            </div>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Link href="/">
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">Here's your personalized grocery comparison dashboard</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month's Savings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$127.50</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Shopping Lists</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 active, 1 completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Price Alerts</CardTitle>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Items on sale now</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Shopping Lists</CardTitle>
              <CardDescription>Manage your grocery lists and see where to shop for the best prices</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {shoppingLists.map((list, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">{list.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {list.items} items • Potential savings: ${list.savings}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={list.status === "active" ? "default" : "secondary"}>{list.status}</Badge>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              ))}
              <Button className="w-full" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Create New List
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Price Alerts</CardTitle>
              <CardDescription>Items you're watching that are currently on sale</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {priceAlerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">{alert.item}</h3>
                    <p className="text-sm text-muted-foreground">
                      Now ${alert.currentPrice} at {alert.store} (was ${alert.originalPrice})
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-600">Save ${alert.savings}</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Quick Price Search</CardTitle>
            <CardDescription>Search for any product to compare prices between Coles and Woolworths</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button className="bg-green-600 hover:bg-green-700">Search</Button>
            </div>
            {searchQuery && (
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {searchResults.map((result, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">{result.name}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-2 rounded bg-red-50">
                        <p className="text-sm text-muted-foreground">Coles</p>
                        <p className="font-bold text-red-600">${result.colesPrice}</p>
                      </div>
                      <div className="text-center p-2 rounded bg-green-50">
                        <p className="text-sm text-muted-foreground">Woolworths</p>
                        <p className="font-bold text-green-600">${result.woolworthsPrice}</p>
                      </div>
                    </div>
                    <div className="mt-2 text-center">
                      <Badge variant={result.savings > 0 ? "default" : "secondary"}>
                        {result.savings > 0 ? `Save $${result.savings} at ${result.cheaperStore}` : "Same price"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

const shoppingLists = [
  {
    name: "Weekly Groceries",
    items: 15,
    savings: "23.50",
    status: "active",
  },
  {
    name: "Party Supplies",
    items: 8,
    savings: "12.30",
    status: "active",
  },
  {
    name: "Last Week's Shop",
    items: 12,
    savings: "18.90",
    status: "completed",
  },
]

const priceAlerts = [
  {
    item: "Milk 2L A2",
    currentPrice: "3.50",
    originalPrice: "4.20",
    store: "Woolworths",
    savings: "0.70",
  },
  {
    item: "Chicken Breast 1kg",
    currentPrice: "10.50",
    originalPrice: "12.00",
    store: "Coles",
    savings: "1.50",
  },
  {
    item: "Bananas 1kg",
    currentPrice: "3.90",
    originalPrice: "4.50",
    store: "Woolworths",
    savings: "0.60",
  },
]

const searchResults = [
  {
    name: "Milk 2L Full Cream",
    colesPrice: "3.20",
    woolworthsPrice: "2.90",
    savings: 0.3,
    cheaperStore: "Woolworths",
  },
  {
    name: "Bread White 700g",
    colesPrice: "2.50",
    woolworthsPrice: "2.80",
    savings: 0.3,
    cheaperStore: "Coles",
  },
]
