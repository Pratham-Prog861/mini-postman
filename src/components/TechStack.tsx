import { motion } from "motion/react"
import { Badge } from "./ui/badge"

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-4">
              Built with Modern Tools
            </h2>
            <p className="text-lg text-zinc-400">
              Powered by the latest web technologies
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {[
              'Next.js 16',
              'React 19',
              'TypeScript',
              'Tailwind CSS',
              'shadcn/ui',
              'Motion',
              'Axios',
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Badge variant="outline" className="px-6 py-3 text-base border-zinc-700 hover:border-primary transition-colors">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TechStack