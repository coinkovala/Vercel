'use client'

import { Bot, Book, Zap, Sparkles, BarChart, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Dashboard() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Sidebar */}
      <aside className="w-16 bg-black bg-opacity-50 flex flex-col items-center py-8 space-y-8">
        <Bot className="w-8 h-8" />
        <Book className="w-6 h-6 text-gray-400" />
        <Zap className="w-6 h-6 text-gray-400" />
        <Sparkles className="w-6 h-6 text-gray-400" />
        <BarChart className="w-6 h-6 text-gray-400" />
        <div className="flex-grow" />
        <Settings className="w-6 h-6 text-gray-400" />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Welcome, User</h1>
          <div className="relative">
            <Input
              type="text"
              placeholder="Ask AI anything..."
              className="w-64 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
            <Button size="sm" className="absolute right-1 top-1 bg-blue-500 hover:bg-blue-600">
              Ask
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Paraphraser", icon: <Book className="w-6 h-6" />, color: "bg-purple-500" },
            { title: "Grammar Checker", icon: <Zap className="w-6 h-6" />, color: "bg-green-500" },
            { title: "Plagiarism Checker", icon: <Sparkles className="w-6 h-6" />, color: "bg-yellow-500" },
            { title: "AI Detector", icon: <Bot className="w-6 h-6" />, color: "bg-red-500" },
            { title: "Summarizer", icon: <BarChart className="w-6 h-6" />, color: "bg-blue-500" },
            { title: "Citation Generator", icon: <Book className="w-6 h-6" />, color: "bg-indigo-500" },
          ].map((tool, index) => (
            <div
              key={index}
              className={`${tool.color} bg-opacity-20 p-6 rounded-lg hover:bg-opacity-30 transition-colors cursor-pointer`}
            >
              <div className="flex items-center space-x-4">
                <div className={`${tool.color} p-3 rounded-full`}>{tool.icon}</div>
                <h2 className="text-lg font-semibold">{tool.title}</h2>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-400 text-sm">
          Powered by Advanced AI Technology
        </footer>
      </main>
    </div>
  )
}