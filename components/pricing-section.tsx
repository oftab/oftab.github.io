"use client"

import { useLanguage } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function PricingSection() {
  const { t } = useLanguage()

  const plans = [
    {
      name: t("pricing.free.name"),
      price: t("pricing.free.price"),
      period: t("pricing.free.period"),
      description: t("pricing.free.desc"),
      features: [
        t("pricing.free.feature1"),
        t("pricing.free.feature2"),
        t("pricing.free.feature3"),
        t("pricing.free.feature4"),
      ],
      cta: t("pricing.cta.free"),
      highlighted: false,
    },
    {
      name: t("pricing.pro.name"),
      price: t("pricing.pro.price"),
      period: t("pricing.pro.period"),
      description: t("pricing.pro.desc"),
      features: [
        t("pricing.pro.feature1"),
        t("pricing.pro.feature2"),
        t("pricing.pro.feature3"),
        t("pricing.pro.feature4"),
        t("pricing.pro.feature5"),
      ],
      cta: t("pricing.cta.pro"),
      highlighted: true,
      badge: t("pricing.pro.badge"),
    },
    {
      name: t("pricing.team.name"),
      price: t("pricing.team.price"),
      period: t("pricing.team.period"),
      description: t("pricing.team.desc"),
      features: [
        t("pricing.team.feature1"),
        t("pricing.team.feature2"),
        t("pricing.team.feature3"),
        t("pricing.team.feature4"),
        t("pricing.team.feature5"),
      ],
      cta: t("pricing.cta.team"),
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">{t("pricing.tag")}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {t("pricing.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-300 flex flex-col",
                plan.highlighted
                  ? "bg-foreground text-background scale-100 md:scale-[1.03] shadow-2xl z-10"
                  : "glass-card hover:shadow-xl dark:hover:shadow-primary/5 bg-card/40"
              )}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                  {plan.badge}
                </span>
              )}

              {/* Header */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  <span className={cn("text-sm", plan.highlighted ? "text-background/70" : "text-muted-foreground")}>
                    {plan.period}
                  </span>
                </div>
                <p className={cn("text-sm mt-4 leading-relaxed", plan.highlighted ? "text-background/80" : "text-muted-foreground")}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                      plan.highlighted ? "bg-background/20" : "bg-primary/10 text-primary"
                    )}>
                      <svg
                        className={cn("h-3 w-3", plan.highlighted ? "text-background" : "currentColor")}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className={plan.highlighted ? "text-background/90" : "text-foreground/90"}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={cn(
                  "w-full h-11 text-sm font-medium rounded-xl transition-all",
                  plan.highlighted
                    ? "bg-background text-foreground hover:bg-background/90 shadow-lg"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                )}
                variant={plan.highlighted ? "default" : "ghost"}
              >
                <a href={plan.highlighted ? "#download" : "#"}>
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
