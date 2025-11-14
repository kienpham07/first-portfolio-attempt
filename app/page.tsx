'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-1 overflow-hidden">
        <Header />
        
        <div className="overflow-y-auto h-[calc(100vh-80px)]">
          {activeSection === 'about' && (
            <>
              <Hero />
              <About />
            </>
          )}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'contact' && <Contact />}
        </div>
      </main>
    </div>
  )
}
