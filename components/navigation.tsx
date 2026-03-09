"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import { useTheme } from "@/lib/theme"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#features", label: t("nav.features") },
    { href: "#showcase", label: t("nav.showcase") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#download", label: t("nav.download") },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/10 backdrop-blur-2xl border-b border-white/5 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3)] supports-[backdrop-filter]:bg-background/10 ring-1 ring-inset ring-white/5"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl px-6 transition-all duration-300">
        <div className={cn(
          "flex items-center justify-between transition-all duration-300",
          scrolled ? "h-14" : "h-16"
        )}>
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground shadow-sm transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-lg">
              <span className="text-xs font-bold text-background group-hover:-rotate-6 transition-transform duration-300">ot</span>
            </div>
            <span className="text-[16px] font-semibold tracking-tight">oftab</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[14px] text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <CommandMenu />
            
            <button
              onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
              className="hidden sm:flex h-9 px-3 items-center text-[13px] text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              {language === "zh" ? "EN" : "中文"}
            </button>

            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <Button
              size="sm"
              className="hidden sm:inline-flex h-9 px-4 text-[13px] ml-2 shadow-sm"
              asChild
            >
              <a href="#download">{t("nav.download")}</a>
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex md:hidden h-9 w-9 items-center justify-center text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50"
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 py-4 bg-background/20 backdrop-blur-3xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-3 text-[15px] text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
                className="px-2 py-3 text-[15px] text-muted-foreground hover:text-foreground transition-colors text-left rounded-lg hover:bg-muted/50"
              >
                {language === "zh" ? "English" : "中文"}
              </button>
              <div className="px-2 py-3">
                <CommandMenu />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
