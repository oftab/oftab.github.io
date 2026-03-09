"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
  Download,
  BookOpen,
  MessageSquare,
  Zap,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useLanguage } from "@/lib/i18n"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const { t } = useLanguage()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 md:w-40 md:px-3 items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 border border-white/5 md:bg-muted/20"
      >
        <Search className="h-[18px] w-[18px]" />
        <span className="hidden md:inline-flex text-[13px]">Search...</span>
        <kbd className="hidden md:inline-flex ml-auto pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => {
              window.location.href = "#features"
              setOpen(false)
            }}>
              <Zap className="mr-2 h-4 w-4" />
              <span>Features</span>
            </CommandItem>
            <CommandItem onSelect={() => {
              window.location.href = "#pricing"
              setOpen(false)
            }}>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Pricing</span>
            </CommandItem>
            <CommandItem onSelect={() => {
              window.location.href = "#download"
              setOpen(false)
            }}>
              <Download className="mr-2 h-4 w-4" />
              <span>Download</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Resources">
            <CommandItem onSelect={() => {
              window.location.href = "/changelog"
              setOpen(false)
            }}>
              <BookOpen className="mr-2 h-4 w-4" />
              <span>Changelog</span>
            </CommandItem>
            <CommandItem>
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Community</span>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
