"use client"

import { useLanguage } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-md shadow-sm ring-1 ring-inset ring-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              {t("hero.badge")}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1] mb-8 animate-fade-in-up delay-100">
            <span className="block text-foreground">{t("hero.title.line1")}</span>
            <span className="block text-shimmer bg-clip-text text-transparent bg-[length:200%_auto]">
              {t("hero.title.line2")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl leading-relaxed mb-10 text-balance animate-fade-in-up delay-200">
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
            <Button size="lg" className="relative overflow-hidden h-12 px-8 text-[15px] font-medium rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 group" asChild>
              <a href="#download">
                <span className="relative z-10">{t("hero.cta.download")}</span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[sweep_1.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 w-full h-full" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 px-8 text-[15px] font-medium rounded-full border-border/40 bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-all duration-300" 
              asChild
            >
              <a href="#showcase">{t("hero.cta.demo")}</a>
            </Button>
          </div>

          {/* Keyboard Shortcut */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground animate-fade-in-up delay-400">
            <span>{t("hero.shortcut")}</span>
            <kbd className="inline-flex items-center gap-1.5 h-7 px-2.5 bg-muted/50 border border-border/40 rounded-md text-xs font-medium font-mono shadow-sm">
              <span className="text-xs">⌘</span>
              <span>Space</span>
            </kbd>
            <span>{t("hero.shortcut.action")}</span>
          </div>
        </div>

        {/* Command Palette Preview */}
        <div className="mt-20 md:mt-32 flex justify-center animate-fade-in-up delay-500">
          <div className="relative w-full max-w-2xl transform transition-transform duration-700 hover:scale-[1.01]">
            {/* Glow behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-600/30 blur-2xl opacity-40 rounded-[2rem]" />
            
            {/* Main card */}
            <div className="relative glass-card card-glow rounded-xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-black/5">
              {/* Window Header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border/40 bg-muted/30 backdrop-blur-md">
                <div className="flex items-center gap-2 group/traffic">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 group-hover/traffic:brightness-90 transition-all" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 group-hover/traffic:brightness-90 transition-all" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 group-hover/traffic:brightness-90 transition-all" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-xs text-muted-foreground font-medium tracking-wide opacity-50">oftab</span>
                </div>
                <div className="w-14" />
              </div>

              {/* Search Input */}
              <div className="p-4 border-b border-border/40 bg-background/40">
                <div className="flex items-center gap-3 px-4 py-3 bg-background/50 border border-border/40 rounded-xl shadow-inner">
                  <svg className="h-5 w-5 text-muted-foreground/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <span className="text-sm text-muted-foreground/70 font-light">Type a command or search...</span>
                  <div className="ml-auto flex items-center gap-2">
                    <kbd className="text-[10px] text-muted-foreground bg-muted/50 px-2 py-1 rounded border border-border/40 font-mono">ESC</kbd>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="p-2 bg-background/20">
                <ResultItem icon="app" title="Applications" subtitle="Search installed apps" active />
                <ResultItem icon="file" title="Files & Documents" subtitle="Find files quickly" />
                <ResultItem icon="ai" title="Ask AI" subtitle="Get intelligent answers" />
                <ResultItem icon="clipboard" title="Clipboard History" subtitle="Access your clips" />
                <ResultItem icon="settings" title="Settings" subtitle="Customize oftab" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 pt-10 border-t border-border/20 flex flex-wrap justify-center gap-x-16 gap-y-8 animate-fade-in-up delay-700">
          <StatItem value="50K+" label={t("stats.users")} />
          <StatItem value="2M+" label={t("stats.commands")} />
          <StatItem value="200+" label={t("stats.plugins")} />
          <StatItem value="4.9" label={t("stats.rating")} suffix="/5" />
        </div>
      </div>
    </section>
  )
}

function ResultItem({ 
  icon, 
  title, 
  subtitle,
  active = false 
}: { 
  icon: string
  title: string
  subtitle: string
  active?: boolean 
}) {
  const icons: Record<string, React.ReactNode> = {
    app: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </svg>
    ),
    file: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    ai: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    clipboard: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      </svg>
    ),
    settings: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  }

  return (
    <div
      className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-default transition-all duration-200 ${
        active 
          ? "bg-primary text-primary-foreground shadow-md" 
          : "text-foreground hover:bg-muted/50"
      }`}
    >
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
        active ? "bg-primary-foreground/15 text-primary-foreground" : "bg-muted/60 text-muted-foreground"
      }`}>
        {icons[icon]}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium">{title}</div>
        <div className={`text-xs ${active ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </div>
      </div>
      {active && (
        <kbd className="text-[10px] bg-primary-foreground/20 text-primary-foreground px-2 py-1 rounded-md font-mono">
          Enter
        </kbd>
      )}
    </div>
  )
}

function StatItem({ value, label, suffix }: { value: string; label: string; suffix?: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
        {value}
        {suffix && <span className="text-muted-foreground text-2xl font-normal ml-0.5">{suffix}</span>}
      </div>
      <div className="text-sm text-muted-foreground mt-2 font-medium">{label}</div>
    </div>
  )
}
