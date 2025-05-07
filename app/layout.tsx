import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { FileSpreadsheet } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portal de Ferramentas de Gestão de Dados",
  description: "Acesse nossas ferramentas especializadas para gerenciamento e processamento de dados cadastrais.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">DataTools</span>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Portal de Ferramentas de Gestão de Dados. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
