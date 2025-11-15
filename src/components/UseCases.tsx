import { CheckCircle2, Code2, Globe, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { Card } from "./ui/card"

const useCases = [
  {
    title: "Testing Public APIs",
    description: "Quickly test and explore public REST APIs",
    icon: Globe,
  },
  {
    title: "Debugging Endpoints",
    description: "Debug your own API endpoints during development",
    icon: Code2,
  },
  {
    title: "Learning HTTP",
    description: "Understand how HTTP requests and responses work",
    icon: Sparkles,
  },
  {
    title: "Quick API Checks",
    description: "Verify API responses without complex setup",
    icon: CheckCircle2,
  },
]

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
}

const UseCases = () => {
  return (
    <section className="py-20 border-t border-zinc-800">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-4">
            Perfect For
          </h2>
          <p className="text-lg text-zinc-400">
            Whether you&apos;re learning or building production apps
          </p>
        </motion.div>

        {/* Use Case Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {useCases.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Card className="p-6 bg-zinc-900/50 border-zinc-800 h-full">
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-zinc-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default UseCases
