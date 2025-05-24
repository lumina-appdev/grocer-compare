"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingCart, Eye, EyeOff, MapPin } from "lucide-react"
import { useState } from "react"
import axios, { AxiosError } from "axios"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    postcode: "",
    agreedToTerms: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.agreedToTerms) {
      alert("You must agree to the Terms and Privacy Policy.")
      return
    }

    try {
      await axios.post("http://localhost:8080/api/signup", form)
      console.log("Signup successful")
      router.push("/dashboard")
    } catch (err) {
      console.error("Signup failed", err)
      const axiosError = err as AxiosError<{ message: string }>;
      const errorMessage = axiosError.response?.data?.message || "Unknown error"
      alert("Signup failed: " + errorMessage)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-2xl">
            <ShoppingCart className="h-8 w-8 text-green-600" />
            <span>Grocer Compare</span>
          </Link>
          <p className="text-muted-foreground mt-2">Create your account and start saving money</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription>Join thousands of Australians saving money on groceries</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" value={form.firstName} onChange={handleChange} placeholder="" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" value={form.lastName} onChange={handleChange} placeholder="" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={handleChange} placeholder="" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"} value={form.password} onChange={handleChange} placeholder="" />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="postcode">Postcode</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="postcode" placeholder="" value={form.postcode} onChange={handleChange} className="pl-10" />
              </div>
              <p className="text-xs text-muted-foreground">We'll show you prices for stores in your area</p>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="agreedToTerms"
                className="rounded"
                checked={form.agreedToTerms}
                onChange={handleChange}
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link href="/terms" className="text-green-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-green-600 hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            <form onSubmit={handleSubmit} className="w-full">
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Create Account
              </Button>
            </form>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-green-600 hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-muted-foreground hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
