"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 py-4">
          <Link href="#about" className="text-lg font-medium hover:underline" onClick={handleLinkClick}>
            About
          </Link>
          <Link href="#skills" className="text-lg font-medium hover:underline" onClick={handleLinkClick}>
            Skills
          </Link>
          <Link href="#experience" className="text-lg font-medium hover:underline" onClick={handleLinkClick}>
            Experience
          </Link>
          <Link href="#projects" className="text-lg font-medium hover:underline" onClick={handleLinkClick}>
            Projects
          </Link>
          <Link href="#education" className="text-lg font-medium hover:underline" onClick={handleLinkClick}>
            Education
          </Link>
          <Link href="#contact" className="text-lg font-medium hover:underline" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

