export default function Contact() {
  return (
    <section className="px-12 py-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-8 text-accent">Get In Touch</h2>
        
        <div className="bg-card border border-border rounded-lg p-8 space-y-6">
          <p className="text-foreground/90 text-lg">
            I'd love to hear from you! Whether you're interested in collaborating, have an internship opportunity, or just want to chat about tech.
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">Email</p>
              <a
                href="mailto:kien@example.com"
                className="text-accent hover:underline text-lg"
              >
                kien@example.com
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">Social</p>
              <div className="flex gap-4">
                <a href="#" className="text-accent hover:text-accent/80 transition">
                  GitHub
                </a>
                <a href="#" className="text-accent hover:text-accent/80 transition">
                  LinkedIn
                </a>
                <a href="#" className="text-accent hover:text-accent/80 transition">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
