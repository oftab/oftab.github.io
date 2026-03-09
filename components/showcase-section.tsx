"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n"
import { cn } from "@/lib/utils"

type TabKey = "search" | "ai" | "clipboard" | "workflow"

export function ShowcaseSection() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabKey>("search")

  const tabs: { key: TabKey; label: string }[] = [
    { key: "search", label: "Search" },
    { key: "ai", label: "AI Chat" },
    { key: "clipboard", label: "Clipboard" },
    { key: "workflow", label: "Workflows" },
  ]

  return (
    <section id="showcase" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">{t("showcase.tag")}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {t("showcase.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("showcase.subtitle")}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-1 p-1 bg-muted/40 backdrop-blur-md border border-border/40 rounded-xl shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                  activeTab === tab.key
                    ? "bg-background text-foreground shadow-sm ring-1 ring-black/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Glow behind card */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent blur-3xl rounded-3xl transform scale-105 opacity-40 pointer-events-none" />
          
          <div className="relative glass-card card-glow rounded-2xl overflow-hidden max-w-3xl mx-auto shadow-2xl">
            {/* Window Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border/40 bg-muted/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/5" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/5" />
                <div className="w-3 h-3 rounded-full bg-[#28c840] border border-black/5" />
              </div>
              <div className="flex-1 flex justify-center">
                <span className="text-xs text-muted-foreground font-medium tracking-wide opacity-50">oftab</span>
              </div>
              <div className="w-14" />
            </div>

            {/* Demo Content */}
            <div className="p-6 md:p-8 bg-background/40">
              {activeTab === "search" && <SearchDemo />}
              {activeTab === "ai" && <AIDemo />}
              {activeTab === "clipboard" && <ClipboardDemo />}
              {activeTab === "workflow" && <WorkflowDemo />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SearchDemo() {
  const results = [
    { icon: "file", name: "Project Report.docx", path: "~/Documents/Work", type: "File" },
    { icon: "app", name: "Visual Studio Code", path: "Applications", type: "App" },
    { icon: "link", name: "GitHub - oftab/oftab", path: "Bookmarks", type: "Web" },
    { icon: "file", name: "API Documentation.md", path: "~/Projects/docs", type: "File" },
  ]

  const icons: Record<string, React.ReactNode> = {
    file: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    app: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </svg>
    ),
    link: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3 px-4 py-3.5 bg-background/60 border border-border/40 rounded-xl shadow-sm">
        <svg className="h-5 w-5 text-muted-foreground/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="text-sm font-medium">project</span>
        <span className="animate-pulse text-primary font-light">|</span>
      </div>

      <div className="space-y-1.5">
        {results.map((result, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-150",
              i === 0 ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-muted/50"
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
              i === 0 ? "bg-primary-foreground/15 text-primary-foreground" : "bg-muted/60 text-muted-foreground"
            )}>
              {icons[result.icon]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{result.name}</div>
              <div className={cn("text-xs truncate", i === 0 ? "text-primary-foreground/70" : "text-muted-foreground")}>
                {result.path}
              </div>
            </div>
            <span className={cn(
              "text-[10px] px-2 py-1 rounded-md font-medium uppercase tracking-wider",
              i === 0 ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted/80 text-muted-foreground"
            )}>
              {result.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AIDemo() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3 px-4 py-3.5 bg-background/60 border border-border/40 rounded-xl shadow-sm">
        <svg className="h-5 w-5 text-muted-foreground/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="text-sm">Write a professional email response</span>
      </div>

      <div className="p-5 bg-muted/20 rounded-xl border border-border/40">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 shadow-sm">
            <svg className="h-4 w-4 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="flex-1 text-sm leading-relaxed">
            <p className="mb-3">Dear Client,</p>
            <p className="mb-3">Thank you for reaching out. I appreciate your interest in our services and would be happy to assist you with your inquiry.</p>
            <p className="text-muted-foreground flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Generating response...
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border/40">
          <button className="text-xs text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-lg hover:bg-muted/50 transition-colors font-medium">
            Copy
          </button>
          <button className="text-xs text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-lg hover:bg-muted/50 transition-colors font-medium">
            Regenerate
          </button>
        </div>
      </div>
    </div>
  )
}

function ClipboardDemo() {
  const items = [
    { content: "const app = new Application();", time: "Just now" },
    { content: "https://github.com/oftab/oftab", time: "2m ago" },
    { content: "Meeting notes: 1. Project update 2. Timeline review...", time: "5m ago" },
    { content: "export default function Home() { return <div>...</div> }", time: "12m ago" },
  ]

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3 px-4 py-3.5 bg-background/60 border border-border/40 rounded-xl shadow-sm">
        <svg className="h-5 w-5 text-muted-foreground/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        </svg>
        <span className="text-sm text-muted-foreground">Search clipboard history...</span>
      </div>

      <div className="space-y-1.5">
        {items.map((item, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-150",
              i === 0 ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-muted/50"
            )}
          >
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-mono truncate">{item.content}</div>
            </div>
            <span className={cn("text-[11px] flex-shrink-0 font-medium", i === 0 ? "text-primary-foreground/70" : "text-muted-foreground")}>
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function WorkflowDemo() {
  const workflows = [
    { name: "Daily Report", desc: "Generate daily work summary", shortcut: "Cmd+Shift+D" },
    { name: "Deploy Project", desc: "Build, test, and deploy to production", shortcut: "Cmd+Shift+P" },
    { name: "Meeting Prep", desc: "Open docs and start recording", shortcut: "Cmd+Shift+M" },
  ]

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between px-1">
        <span className="text-sm font-medium">My Workflows</span>
        <button className="text-xs text-primary hover:text-primary/80 transition-colors font-medium">+ New Workflow</button>
      </div>

      <div className="space-y-3">
        {workflows.map((workflow, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-4 py-4 rounded-xl bg-muted/30 border border-border/40 hover:bg-muted/50 hover:border-border/60 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground shadow-sm">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium">{workflow.name}</div>
              <div className="text-xs text-muted-foreground truncate">{workflow.desc}</div>
            </div>
            <kbd className="text-[10px] text-muted-foreground bg-background/50 px-2 py-1.5 rounded-lg border border-border/40 font-mono">
              {workflow.shortcut}
            </kbd>
          </div>
        ))}
      </div>
    </div>
  )
}
