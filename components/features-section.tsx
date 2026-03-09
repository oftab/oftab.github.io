"use client"

import { useLanguage } from "@/lib/i18n"
import { type ReactNode } from "react"

interface Feature {
  icon: ReactNode
  titleKey: string
  descKey: string
}

const features: Feature[] = [
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    titleKey: "features.search.title",
    descKey: "features.search.desc",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    titleKey: "features.ai.title",
    descKey: "features.ai.desc",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    titleKey: "features.workflow.title",
    descKey: "features.workflow.desc",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .836-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.611-1.611a2.402 2.402 0 0 1 1.704-.706c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
      </svg>
    ),
    titleKey: "features.plugins.title",
    descKey: "features.plugins.desc",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      </svg>
    ),
    titleKey: "features.clipboard.title",
    descKey: "features.clipboard.desc",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M21 12h-6M15 9l3 3-3 3" />
      </svg>
    ),
    titleKey: "features.translate.title",
    descKey: "features.translate.desc",
  },
]

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">{t("features.tag")}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {t("features.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={t(feature.titleKey)}
              description={t(feature.descKey)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group relative p-6 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-border/60 hover:bg-card/50 hover:shadow-lg dark:hover:shadow-primary/5">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-background/50 border border-border/50 flex items-center justify-center text-foreground mb-5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shadow-sm">
          {icon}
        </div>
        <h3 className="text-[17px] font-semibold mb-3 tracking-tight">{title}</h3>
        <p className="text-[15px] text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
