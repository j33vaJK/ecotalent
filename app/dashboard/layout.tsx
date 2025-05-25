"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Leaf, Home, User, Briefcase, GraduationCap, Settings, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)


  const handleLogOut = async () => {

    
    await signOut(auth)
    router.push("/sign-in")
  }
  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: User, label: "Profile", href: "/dashboard/profile" },
    { icon: Briefcase, label: "Job Matches", href: "/dashboard/jobs" },
    { icon: GraduationCap, label: "Learning Path", href: "/dashboard/learning" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-green-800">EcoTalent</span>
          </div>

          {isMobile ? (
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          ) : (
            <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50" onClick={handleLogOut} >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          )}
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar - Desktop */}
        {!isMobile && (
          <aside className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-57px)] sticky top-[57px]">
            <nav className="p-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}

              <button
                
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors mt-8"
              >
                <LogOut className="h-5 w-5" onClick={handleLogOut} />
                <span>Sign Out</span>
              </button>
            </nav>
          </aside>
        )}

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 bg-white z-20 pt-16">
            <nav className="p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-lg">{item.label}</span>
                </Link>
              ))}

              <button
                
                className="w-full flex items-center gap-3 px-3 py-3 rounded-md text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors mt-4"
              >
                <LogOut className="h-5 w-5" />
                <span className="text-lg">Sign Out</span>
              </button>
            </nav>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
