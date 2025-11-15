import { Clock, Code2, FileJson, Layers, Send, Terminal } from "lucide-react"
import { motion } from "motion/react"
import { Card } from "./ui/card"

// Features Data
const features = [
  {
    icon: Send,
    title: "All HTTP Methods",
    description: "Support for GET, POST, PUT, DELETE, PATCH, HEAD, and OPTIONS",
  },
  {
    icon: Code2,
    title: "Custom Headers",
    description: "Add, edit, and toggle custom request headers with ease",
  },
  {
    icon: FileJson,
    title: "JSON Editor",
    description: "Built-in JSON validation and formatting for request bodies",
  },
  {
    icon: Layers,
    title: "Response Viewer",
    description: "Tabbed interface for body, headers, and raw response data",
  },
  {
    icon: Clock,
    title: "Request History",
    description: "Automatically saves your last 10 requests for quick access",
  },
  {
    icon: Terminal,
    title: "Keyboard Shortcuts",
    description: "Ctrl+Enter to send, Ctrl+K to focus URL bar",
  },
]

// Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
}

const Features = () => {
  return (
    <section id="features" className="py-20 border-t border-zinc-800">
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
            Everything You Need
          </h2>
          <p className="text-lg text-zinc-400">
            Powerful features in a clean, intuitive interface
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Card className="p-6 bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-zinc-50 mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
