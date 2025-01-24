'use client'

import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

interface SkillProgressProps {
  skill: string
  level: number
  color: string
  icon: LucideIcon
}

export function SkillProgress({ skill, level, color, icon: Icon }: SkillProgressProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1 items-center">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5" style={{ color }} />
          <span className="text-sm font-medium">{skill}</span>
        </div>
        <span className="text-sm font-medium">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700">
        <motion.div
          className="h-2 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

