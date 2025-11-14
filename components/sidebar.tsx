'use client'

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const sections = [
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' },
  ]

  return (
    <aside className="w-64 border-r border-border bg-card p-8 h-screen overflow-y-auto sticky top-0">
      <nav className="space-y-8">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`block text-sm font-semibold tracking-wider transition-colors ${
              activeSection === section.id
                ? 'text-accent border-l-2 border-accent pl-4'
                : 'text-muted-foreground hover:text-foreground pl-4'
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <div className="mt-16 space-y-4 text-sm text-muted-foreground">
        <div>
          <p className="font-semibold text-foreground mb-2">Born</p>
          <p>October 12, 2007</p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-2">Location</p>
          <p>Vietnam</p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-2">Hobbies</p>
          <p>Basketball, Table Tennis, Coding</p>
        </div>
      </div>
    </aside>
  )
}
