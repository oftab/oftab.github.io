import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from "@/lib/theme"
import { LanguageProvider } from "@/lib/i18n"
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'oftab - AI 驱动的桌面快捷启动工具',
  description: '融合 AI 智能的桌面快捷启动工具，让你以思维的速度操控电脑。快速搜索、智能对话、一键执行，重新定义你的工作效率。',
  keywords: ['oftab', '快捷启动', '效率工具', 'AI助手', 'Raycast替代', 'Wox替代', 'uTools替代', '桌面工具'],
  authors: [{ name: 'oftab Team' }],
  openGraph: {
    title: 'oftab - AI 驱动的桌面快捷启动工具',
    description: '融合 AI 智能的桌面快捷启动工具，让你以思维的速度操控电脑。',
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'oftab - AI 驱动的桌面快捷启动工具',
    description: '融合 AI 智能的桌面快捷启动工具，让你以思维的速度操控电脑。',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
