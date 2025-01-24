"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  LinkIcon,
  Moon,
  Sun,
  Award,
  Users,
  Briefcase,
  Coffee,
  BarChart,
  Globe,
  Palette,
  Gamepad,
  Server,
  Rocket,
  Star,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { SpaceBackground } from "./space-background"
import { SkillProgress } from "./skill-progress"

export default function ProfileCard() {
  const [isDark, setIsDark] = useState(true)
  const [isFlipped, setIsFlipped] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const calculateRotation = (element: HTMLElement | null) => {
    if (!element) return { x: 0, y: 0 }
    const rect = element.getBoundingClientRect()
    const x = (mousePosition.y - rect.top - rect.height / 2) / 25
    const y = (mousePosition.x - rect.left - rect.width / 2) / 25
    return { x, y }
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const stats = [
    { icon: Rocket, label: "Projects", value: "19", color: "#ff6b6b" },
    { icon: Star, label: "Followers", value: "432", color: "#ffd93d" },
    { icon: Zap, label: "Impact", value: "89%", color: "#4ecdc4" },
    { icon: Award, label: "Awards", value: "4", color: "#6c5ce7" },
  ]

  const skills = [
    { skill: "Data Analysis", level: 92, color: "#3b82f6", icon: BarChart },
    { skill: "Web Development", level: 95, color: "#06b6d4", icon: Globe },
    { skill: "UI/UX Design", level: 88, color: "#ec4899", icon: Palette },
    { skill: "Game Development", level: 80, color: "#84cc16", icon: Gamepad },
    { skill: "DevOps", level: 75, color: "#f97316", icon: Server },
  ]

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-500 ${
        isDark ? "bg-[#0a0a2e]" : "bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
      }`}
    >
      <SpaceBackground />

      <motion.div
        className="perspective"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <Card
              className={`w-full max-w-md relative overflow-hidden ${
                isDark ? "bg-gray-900/80 text-white" : "bg-white/90"
              } backdrop-blur-md border-2 ${isDark ? "border-purple-500/30" : "border-white/50"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
              <motion.div
                className="p-6 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="absolute top-4 right-4 rounded-full"
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>

                <div className="flex flex-col items-center space-y-6">
                  <motion.div className="relative group" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-purple-500 ring-offset-4 ring-offset-transparent">
                      <motion.img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Me.jpg-FqzXp9tTvqKPW5UjiNWrasSHL6luIc.jpeg"
                        alt="Profile picture"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                      />
                    </div>
                    <motion.div
                      className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
                      <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500">
                        Pro Member
                      </Badge>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="text-center space-y-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                      Sagar Ruhil
                    </h2>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Web Developer/Data Analyst
                    </h2>
                    <p className="text-muted-foreground flex items-center justify-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Haryana, India
                    </p>
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-2 gap-4 w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center p-3 rounded-lg bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/30"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: stat.color + "10",
                        }}
                      >
                        <stat.icon className="h-6 w-6 mx-auto mb-2" style={{ color: stat.color }} />
                        <div className="text-sm font-medium">{stat.label}</div>
                        <div className="text-2xl font-bold" style={{ color: stat.color }}>
                          {stat.value}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <TooltipProvider>
                    <motion.div
                      className="flex space-x-3"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {[
                        { icon: Github, label: "github.com/sagarruhil", color: "#6e5494" },
                        { icon: Linkedin, label: "LinkedIn.com/in/sagarruhil", color: "#0077b5" },
                        { icon: Mail, label: "sagarruhil999@gmail.com", color: "#ea4335" },
                        { icon: LinkIcon, label: "bento.me/sagarruhil", color: "#00ab6c" },
                      ].map((item, index) => (
                        <Tooltip key={index}>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full hover:bg-gray-800/50 transition-colors duration-300"
                            >
                              <item.icon className="h-5 w-5" style={{ color: item.color }} />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.label}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </motion.div>
                  </TooltipProvider>

                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                    onClick={() => setIsFlipped(true)}
                  >
                    View Skills
                  </Button>
                </div>
              </motion.div>
            </Card>
          ) : (
            <Card
              className={`w-full max-w-md relative overflow-hidden ${
                isDark ? "bg-gray-900/80 text-white" : "bg-white/90"
              } backdrop-blur-md border-2 ${isDark ? "border-purple-500/30" : "border-white/50"}`}
              style={{ transform: "rotateY(180deg)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
              <motion.div
                className="p-6 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Professional Skills
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <SkillProgress
                      key={index}
                      skill={skill.skill}
                      level={skill.level}
                      color={skill.color}
                      icon={skill.icon}
                    />
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  <h4 className="font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Recent Achievements
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { text: "Best Design Award", color: "#ff6b6b" },
                      { text: "Top Contributor", color: "#ffd93d" },
                      { text: "Tech Speaker", color: "#4ecdc4" },
                      { text: "Open Source Hero", color: "#6c5ce7" },
                    ].map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="p-2 text-sm rounded-lg bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/30 text-center"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: achievement.color + "10",
                        }}
                        style={{ color: achievement.color }}
                      >
                        {achievement.text}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                  onClick={() => setIsFlipped(false)}
                >
                  Back to Profile
                </Button>
              </motion.div>
            </Card>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

