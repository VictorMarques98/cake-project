"use client"

import { ThemeProvider } from "@/providers/theme"
import { ChildrenProps } from "@/types/react"

export function AppProviders({ children }: ChildrenProps) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}