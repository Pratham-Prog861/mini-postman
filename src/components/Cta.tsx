import { motion } from "motion/react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowRight, Github, Rocket } from "lucide-react"

const Cta = () => {
  return (
    <section className="py-20 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="p-12 bg-linear-to-br from-primary/10 to-primary/5 border-primary/20">
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-4">
                Start Testing APIs Now
              </h2>
              <p className="text-lg text-zinc-400 mb-8">
                No installation required. Just open and start testing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild>
                    <Link href="/tool">
                      <Rocket className="h-5 w-5 mr-2" />
                      Launch Tool
                      <motion.span
                        className="inline-block ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-2" />
                      Star on GitHub
                    </a>
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
  )
}

export default Cta