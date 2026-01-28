'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import EarthSphere from '@/components/earth-sphere'

const GamingPC = dynamic(() => import('@/components/gaming-pc'), {
  ssr: false,
})

const StylizedPlanet = dynamic(() => import('@/components/stylized-planet'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="relative w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Software Engineering Modules</h1>
            <p className="text-sm text-muted-foreground mt-1">Interactive 3D Learning Experience</p>
          </div>
        </div>
      </header>

      {/* Gaming PC Hero Section */}
      <section className="relative w-full py-20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-96 sm:h-[500px] rounded-2xl overflow-hidden bg-muted/50">
            <Suspense fallback={<div className="w-full h-full bg-muted rounded-lg animate-pulse" />}>
              <GamingPC />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Stylized Planet Section */}
      <section className="w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Explore Learning Modules</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Interactive 3D experience showcasing your learning journey
            </p>
          </div>

          <div className="w-full h-96 sm:h-[500px] rounded-2xl overflow-hidden bg-muted/50">
            <Suspense fallback={<div className="w-full h-full bg-muted rounded-lg animate-pulse" />}>
              <StylizedPlanet />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Colorful Cards Section */}
      <section className="w-full py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                id: 1,
                title: 'Introduction to Software...',
                subtitle: 'Module I',
                heading: 'Introduction to Software',
                description: 'Fundamentals, evolution, and core principles of...',
                gradient: 'from-blue-600 to-purple-600'
              },
              {
                id: 2,
                title: 'Software Process Models',
                subtitle: 'Module II',
                heading: 'Software Process Models',
                description: 'Waterfall, Agile, Spiral, and other development...',
                gradient: 'from-pink-500 to-rose-500'
              },
              {
                id: 3,
                title: 'Software Requirements',
                subtitle: 'Module III',
                heading: 'Software Requirements',
                description: 'Requirements engineering, management, functional and non-...',
                gradient: 'from-cyan-500 to-blue-500'
              },
              {
                id: 4,
                title: 'Requirements & System Models',
                subtitle: 'Module IV',
                heading: 'Requirements & System Models',
                description: 'Validation, management, and system modeling...',
                gradient: 'from-emerald-500 to-green-500'
              },
              {
                id: 5,
                title: 'Design Engineering',
                subtitle: 'Module V',
                heading: 'Design Engineering',
                description: 'Design principles, architecture, patterns, and...',
                gradient: 'from-orange-500 to-pink-500'
              }
            ].map((card) => (
              <a
                key={card.id}
                href={`/module${card.id}.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <div className={`h-full bg-gradient-to-br ${card.gradient} rounded-2xl p-6 text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 transform`}>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                      <span className="text-lg font-bold">⚙️</span>
                    </div>
                    <p className="text-xs font-semibold opacity-80 uppercase tracking-wider">{card.subtitle}</p>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{card.heading}</h3>
                  <p className="text-sm opacity-90 mb-4 line-clamp-2">{card.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>&copy; 2026 Software Engineering Modules. All rights reserved. | Powered by Next.js & React Three Fiber</p>
        </div>
      </footer>
    </div>
  )
}
