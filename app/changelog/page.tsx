"use client"

import { useLanguage } from "@/lib/i18n"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

const releases = [
  {
    version: "v2.1.0",
    date: "2026-03-09",
    latest: true,
    changes: [
      { type: "new", content: { zh: "全新的 Command Palette (⌘K) 全局搜索功能", en: "Brand new Command Palette (⌘K) for global search" } },
      { type: "new", content: { zh: "增强的背景流动光影与鼠标晕开动效", en: "Enhanced fluid background lighting and mouse wash effects" } },
      { type: "improved", content: { zh: "重构了导航栏的玻璃拟态效果与滚动表现", en: "Refactored navigation bar glassmorphism and scroll behavior" } },
      { type: "fixed", content: { zh: "修复了定价方案与下载页面的交互问题", en: "Fixed interaction issues on Pricing and Download sections" } },
    ]
  },
  {
    version: "v2.0.5",
    date: "2026-02-15",
    changes: [
      { type: "improved", content: { zh: "优化了 AI 对话的响应速度与流式输出体验", en: "Optimized AI chat response speed and streaming output" } },
      { type: "fixed", content: { zh: "解决了某些高分辨率显示器下的布局偏移", en: "Fixed layout shifts on certain high-resolution displays" } },
    ]
  },
  {
    version: "v2.0.0",
    date: "2026-01-01",
    changes: [
      { type: "new", content: { zh: "正式发布 oftab 2.0，带来全新的设计语言", en: "Official launch of oftab 2.0 with a brand new design language" } },
      { type: "new", content: { zh: "引入插件市场与工作流自动化支持", en: "Introduced Plugin Marketplace and Workflow Automation" } },
      { type: "improved", content: { zh: "底层架构全面迁移至 Next.js App Router", en: "Core architecture migrated to Next.js App Router" } },
    ]
  }
]

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background dark:bg-main-gradient relative overflow-x-hidden">
      {/* Ambient Background Lights */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="ambient-light ambient-light-1" />
        <div className="ambient-light ambient-light-2" />
        <div className="ambient-light ambient-light-3" />
      </div>

      <Navigation />
      
      <main className="relative z-10 pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Changelog</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Latest updates and improvements to oftab.
            </p>
          </header>

          <div className="space-y-16">
            {releases.map((release) => (
              <section key={release.version} className="relative pl-8 border-l border-border/40">
                {/* Dot on line */}
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background shadow-sm" />
                
                <div className="flex flex-wrap items-baseline gap-4 mb-6">
                  <h2 className="text-2xl font-bold tracking-tight">{release.version}</h2>
                  <time className="text-sm text-muted-foreground font-medium">{release.date}</time>
                  {release.latest && (
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      Latest
                    </Badge>
                  )}
                </div>

                <ul className="space-y-6">
                  {release.changes.map((change, i) => (
                    <li key={i} className="flex gap-4">
                      <span className={cn(
                        "mt-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded h-fit shrink-0",
                        change.type === "new" ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" :
                        change.type === "improved" ? "bg-blue-500/10 text-blue-500 border border-blue-500/20" :
                        "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                      )}>
                        {change.type}
                      </span>
                      <span className="text-foreground/80 leading-relaxed">
                        {/* Simple language toggle for demo purposes */}
                        <span className="block dark:text-foreground/90">{change.content.en}</span>
                        <span className="block text-sm text-muted-foreground/60 mt-1">{change.content.zh}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}
