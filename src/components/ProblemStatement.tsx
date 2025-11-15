import { Globe, Settings, Zap } from "lucide-react"
import { motion } from "motion/react"
import { Card } from "./ui/card"

const problems = [
  {
    icon: Zap,
    title: "Too Slow",
    description: "Heavy desktop apps take forever to load and consume resources",
  },
  {
    icon: Settings,
    title: "Too Complex",
    description: "Overwhelming interfaces with features you never use",
  },
  {
    icon: Globe,
    title: "Not Accessible",
    description: "Need to install software on every machine you work on",
  },
]

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
}

const ProblemStatement = () => {
  return (
    <section className="py-20 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-4">
            Why Mini Postman?
          </h2>
          <p className="text-lg text-zinc-400">
            Testing APIs shouldn&apos;t require heavy desktop apps or complex setups
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Card className="p-6 bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
                <prob.icon className="h-10 w-10 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-zinc-50 mb-2">{prob.title}</h3>
                <p className="text-zinc-400">{prob.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProblemStatement
