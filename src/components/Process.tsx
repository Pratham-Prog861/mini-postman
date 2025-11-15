import { motion } from "motion/react"

const steps = [
  { step: "01", title: "Enter URL", description: "Type or paste your API endpoint" },
  { step: "02", title: "Configure", description: "Add headers and body if needed" },
  { step: "03", title: "Send Request", description: "Click send or press Ctrl+Enter" },
  { step: "04", title: "View Response", description: "See formatted JSON and headers" },
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

const Process = () => {
  return (
    <section id="how-it-works" className="py-20 border-t border-zinc-800">
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
            Simple 4-Step Process
          </h2>
          <p className="text-lg text-zinc-400">From URL to response in seconds</p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              {/* Line connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-linear-to-r from-primary/50 to-transparent" />
              )}

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-4">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>

                <h3 className="text-xl font-semibold text-zinc-50 mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
