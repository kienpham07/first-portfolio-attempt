export default function Projects() {
  const projects = [
    {
      title: 'Cancer Prediction Using Machine Learning',
      date: 'December 2024',
      tech: ['Python'],
      description: [
        'Built and trained a cancer prediction model using Random Forest classification on labeled datasets.',
        'Evaluated model performance using classification metrics (Accuracy, Precision, Recall, F1 score), achieving an average of 82% accuracy.',
      ],
    },
    {
      title: 'Speed Reader Website',
      date: 'July 2025',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: [
        'Developed a website that converts written text into spoken audio in English.',
        'Implemented a clean interface with text input area and speech playback functionality.',
      ],
    },
  ]

  return (
    <section className="px-12 py-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-12 text-accent">Projects</h2>
        
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div key={idx} className="border-l-2 border-accent/50 pl-6 pb-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <span className="text-sm text-muted-foreground">{project.date}</span>
              </div>
              
              <div className="flex gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-foreground/80">
                {project.description.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent mt-1">+</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
