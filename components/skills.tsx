export default function Skills() {
  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      name: 'Areas of Interest',
      skills: ['Web Development', 'Machine Learning', 'Data Analysis', 'UI/UX Design'],
    },
    {
      name: 'Tools & Technologies',
      skills: ['Git', 'React', 'Next.js', 'Tailwind CSS'],
    },
  ]

  return (
    <section className="px-12 py-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-12 text-accent">Skills & Interests</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
