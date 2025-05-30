"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  BarChart3,
  Store,
  DollarSign,
  Star,
  Menu,
  X,
  ChevronRight,
  TrendingDown,
  MapPin,
} from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <ShoppingCart className="h-6 w-6 text-green-600" />
            <span className="text-xl">Grocer Compare</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#comparison" className="text-sm font-medium hover:underline underline-offset-4">
              Price Comparison
            </Link>
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <MobileNav />
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-green-600 hover:bg-green-700">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-3 py-1">
                    Save up to $200 per month
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Compare Coles vs Woolworths Prices Instantly
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Never overpay for groceries again. Compare prices between Australia's biggest supermarkets and find
                    the best deals in your area.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1 bg-green-600 hover:bg-green-700">
                      Start Comparing <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#comparison">
                    <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                      See Live Prices
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.8/5</span>
                    <span>from 5,000+ Aussie shoppers</span>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border bg-background p-2 md:p-4 lg:order-last">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Price Comparison Dashboard"
                  className="mx-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="comparison" className="w-full py-12 md:py-24 lg:py-32 border-t border-b bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Live Price Comparison</Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Coles vs Woolworths Today</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  See real-time price differences on popular grocery items
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {priceComparisons.map((item, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <Badge
                        variant={item.savings > 0 ? "default" : "secondary"}
                        className={item.savings > 0 ? "bg-green-600" : ""}
                      >
                        {item.savings > 0 ? `Save $${item.savings.toFixed(2)}` : "Same Price"}
                      </Badge>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 rounded-lg bg-red-50 border border-red-200">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-red-600 rounded"></div>
                          <span className="font-medium text-sm">Coles</span>
                        </div>
                        <p className="text-2xl font-bold text-red-600">${item.colesPrice.toFixed(2)}</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-green-50 border border-green-200">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-green-600 rounded"></div>
                          <span className="font-medium text-sm">Woolworths</span>
                        </div>
                        <p className="text-2xl font-bold text-green-600">${item.woolworthsPrice.toFixed(2)}</p>
                      </div>
                    </div>
                    {item.savings > 0 && (
                      <div className="flex items-center justify-center gap-2 text-green-600">
                        <TrendingDown className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {item.colesPrice < item.woolworthsPrice ? "Coles" : "Woolworths"} is cheaper
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Want to see personalized comparisons for your shopping list?</p>
              <Link href="/signup">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Features</Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Smart Shopping Made Simple</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Everything you need to save money on groceries in Australia
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="relative overflow-hidden border-2 border-green-100">
                  <CardHeader className="pb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-muted-foreground">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">How It Works</Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Start Saving in 3 Simple Steps</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Join thousands of Australians who are saving money on their weekly shop
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Save Money on Groceries?</h2>
                <p className="max-w-[900px] text-green-50 md:text-xl">
                  Join SaverCart today and never overpay for groceries again. Compare Coles and Woolworths prices
                  instantly.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 bg-white text-green-600 hover:bg-green-50 border-white"
                  >
                    Create Free Account
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-green-700">
                    Already have an account? Login
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.8/5</span>
                  <span className="text-green-50">from 5,000+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 bg-green-50">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold">
            <ShoppingCart className="h-6 w-6 text-green-600" />
            <span className="text-xl">SaverCart</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Lumina Dev. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-3/4 bg-background p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold">
                <ShoppingCart className="h-6 w-6 text-green-600" />
                <span className="text-xl">SaverCart</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="mt-6 flex flex-col gap-4">
              <Link
                href="#comparison"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                Price Comparison
              </Link>
              <Link
                href="#features"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <div className="border-t pt-4 space-y-2">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Sign Up</Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

const priceComparisons = [
  {
    name: "Milk 2L",
    description: "Full cream milk",
    colesPrice: 3.2,
    woolworthsPrice: 2.9,
    savings: 0.3,
  },
  {
    name: "Bread Loaf",
    description: "White sandwich bread",
    colesPrice: 2.5,
    woolworthsPrice: 2.8,
    savings: 0.3,
  },
  {
    name: "Bananas 1kg",
    description: "Fresh bananas",
    colesPrice: 4.9,
    woolworthsPrice: 4.5,
    savings: 0.4,
  },
  {
    name: "Chicken Breast 1kg",
    description: "Fresh chicken breast",
    colesPrice: 12.0,
    woolworthsPrice: 11.5,
    savings: 0.5,
  },
  {
    name: "Rice 1kg",
    description: "Jasmine rice",
    colesPrice: 3.5,
    woolworthsPrice: 3.5,
    savings: 0,
  },
  {
    name: "Eggs 12 pack",
    description: "Free range eggs",
    colesPrice: 6.5,
    woolworthsPrice: 6.0,
    savings: 0.5,
  },
]

const features = [
  {
    title: "Real-Time Price Tracking",
    description: "Get up-to-date prices from Coles and Woolworths updated multiple times daily.",
    icon: <BarChart3 className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Smart Shopping Lists",
    description: "Create lists that show you exactly where to buy each item for maximum savings.",
    icon: <ShoppingCart className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Location-Based Pricing",
    description: "Find the best deals at stores near you with location-specific pricing.",
    icon: <MapPin className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Price Alerts",
    description: "Get notified when items on your wishlist drop in price or go on special.",
    icon: <DollarSign className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Weekly Specials",
    description: "Browse current specials and catalogues from both Coles and Woolworths.",
    icon: <Store className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Savings Tracker",
    description: "Track how much you've saved over time with detailed analytics.",
    icon: <TrendingDown className="h-6 w-6 text-green-600" />,
  },
]

const steps = [
  {
    title: "Create Your Account",
    description: "Sign up for free and tell us your location to get accurate local pricing.",
  },
  {
    title: "Add Your Shopping List",
    description: "Add items you regularly buy and we'll show you the best prices at each store.",
  },
  {
    title: "Save Money",
    description: "Follow our recommendations and start saving money on every grocery shop.",
  },
]
