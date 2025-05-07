import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileSpreadsheet, Users, FileText, FileX } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const tools = [
    {
      id: 1,
      title: "Gerador de Arquivos",
      description:
        "Aplicação para geração de arquivos de movimentação cadastral a partir de dados importados do Excel.",
      icon: <FileText className="h-12 w-12 text-primary" />,
      url: "https://v0-recriar-projeto-ochre.vercel.app/",
      color: "bg-blue-50",
      buttonText: "Gerar Arquivos",
    },
    {
      id: 2,
      title: "Gerador de Dados Pessoais",
      description: "Ferramenta para geração de dados pessoais aleatórios para testes de movimentação.",
      icon: <Users className="h-12 w-12 text-primary" />,
      url: "https://v0-melhorar-ferramenta.vercel.app/",
      color: "bg-green-50",
      buttonText: "Gerar Dados",
    },
    {
      id: 3,
      title: "Gerador de Excel",
      description: "Ferramenta para gerar planilhas Excel a partir de dados separados por pipe, facilitando análises.",
      icon: <FileSpreadsheet className="h-12 w-12 text-primary" />,
      url: "https://v0-melhorar-design-website.vercel.app/",
      color: "bg-amber-50",
      buttonText: "Gerar Excel",
    },
    {
      id: 4,
      title: "Gerador Tipo C",
      description:
        "Ferramenta que converte arquivos de retorno em arquivos TIPO C para cancelamento de vidas processadas.",
      icon: <FileX className="h-12 w-12 text-primary" />,
      url: "https://v0-gerador-tipo-c.vercel.app/",
      color: "bg-purple-50",
      buttonText: "Gerar Tipo C",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Portal de Ferramentas de Gestão de Dados</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Acesse nossas ferramentas especializadas para gerenciamento e processamento de dados cadastrais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </main>
  )
}

function ToolCard({ tool }) {
  return (
    <Card className={`p-6 flex flex-col h-full border-2 hover:border-primary transition-all ${tool.color}`}>
      <div className="mb-4">{tool.icon}</div>
      <h2 className="text-xl font-bold mb-2">{tool.title}</h2>
      <p className="text-muted-foreground mb-6 flex-grow">{tool.description}</p>
      <Link href={tool.url} target="_blank" rel="noopener noreferrer">
        <Button className="w-full">{tool.buttonText}</Button>
      </Link>
    </Card>
  )
}
