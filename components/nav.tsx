'use client'

import * as React from "react"
import Link from "next/link"
import Image from 'next/image'
import { cn } from "@/lib/utils"

const navigation = [
  { title: "Home", href: "/" },
  { title: "About me", href: "/#about" },
  { title: "Portfolio", href: "/#portfolio" },
  { title: "Experience", href: "/#experience" },
] 

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/publicAttachment/logo.svg" alt="" aria-hidden={true} width={70} height={59} className="h-8 w-auto" />
          <span className="sr-only font-montserrat font-bold text-2xl">iNLi</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
