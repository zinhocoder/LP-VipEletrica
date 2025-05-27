import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vip Elétrica – Soluções Elétricas com Segurança e Qualidade',
  description: 'Com foco em segurança, eficiência e conformidade com as normas técnicas, a Vip Elétrica é a escolha certa para quem busca confiança e resultados duradouros. Trabalhamos com equipamentos modernos e soluções inovadoras para garantir o melhor custo-benefício para sua casa, empresa ou indústria.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
