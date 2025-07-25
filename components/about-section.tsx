"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Server, Zap } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8 text-blue-400" />,
      title: "Clean Code",
      description: "Código limpo, testável e bem documentado",
    },
    {
      icon: <Database className="h-8 w-8 text-blue-400" />,
      title: "Banco de Dados",
      description: "Expertise em SQL, NoSQL e otimização",
    },
    {
      icon: <Server className="h-8 w-8 text-blue-400" />,
      title: "Microserviços",
      description: "Arquitetura distribuída e escalável",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: "Performance",
      description: "Aplicações rápidas e otimizadas",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Sou um desenvolvedor backend apaixonado por Java com mais de 5 anos de experiência criando soluções
              robustas e escaláveis. Especializado em Spring Framework, microserviços e arquiteturas distribuídas.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Tenho experiência sólida em desenvolvimento de APIs RESTful, integração de sistemas, otimização de
              performance e implementação de melhores práticas de segurança. Sempre busco aprender novas tecnologias e
              aplicar as melhores práticas do mercado.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-600/30">
                Projetos pessoais
              </span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-600/30">
                Java DevDojoAcademy
              </span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-600/30">
                SpringBoot Erudio trainning na Udemy
              </span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-600/30">
                Java HackerRank
              </span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-600/30">
                Freelance com Java
              </span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-600/30">
                Desafios técnicos
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="bg-black/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
