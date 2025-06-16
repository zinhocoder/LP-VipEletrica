import Link from "next/link"
import { Phone, Mail, Globe, Zap, Shield, Wrench, Sun, Home, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function VipEletricaLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-blue-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Elétrica VIP</h1>
              <p className="text-yellow-400 text-sm">Mais que negócios, uma relação de parceria</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-white">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(11) 95709-2479</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>eletrica.suporte@gmail.com</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-10 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Mobile: Image first, Desktop: Text first */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
                A <span className="text-yellow-400">Melhor</span> Empresa
                <br />
                de <span className="text-yellow-400">Elétrica</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
                Problemas elétricos? Conte with a Vip Elétrica e fique tranquilo!
                <br className="hidden md:block" />
                Profissionais certificados, produtos de qualidade e atendimento de excelência.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
                  asChild
                >
                  <Link href="https://wa.me/5511957092479" target="_blank">
                    <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                    Solicitar Orçamento
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-blue-900 hover:bg-white hover:text-blue-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
                  asChild
                >
                  <Link href="#servicos">Ver Serviços</Link>
                </Button>
              </div>
            </div>
            {/* Mobile: Image before buttons, Desktop: Image after text */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/images/vip-logo.png"
                  alt="Vip Elétrica - A Melhor Empresa de Elétrica"
                  className="w-full max-w-sm md:max-w-lg rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Veja como transformamos sua casa
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Conheça nosso trabalho de perto e veja por que somos a escolha de centenas de famílias
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <video className="w-full h-auto aspect-square" controls preload="metadata">
                <source src="/video.mp4" type="video/mp4" />
                <p className="text-white p-8 text-center">
                  Seu navegador não suporta o elemento de vídeo.
                  <br />
                  <Link href="https://wa.me/5511957092479" className="text-yellow-400 underline">
                    Entre em contato conosco
                  </Link>{" "}
                  para saber mais sobre nossos serviços.
                </p>
              </video>

              {/* Video overlay for better UX */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Video description */}
            <div className="mt-6 md:mt-8 text-center">
              <p className="text-blue-100 text-sm md:text-base mb-4">🎥 Vídeo institucional - Conheça a Vip Elétrica</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
                  asChild
                >
                  <Link href="https://wa.me/5511957092479?text=Vi o vídeo e gostaria de um orçamento" target="_blank">
                    <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                    Solicitar Orçamento
                  </Link>
                </Button>
                <div className="text-center">
                  <p className="text-yellow-400 font-semibold text-sm">Orçamento Gratuito</p>
                  <p className="text-blue-200 text-xs">Resposta em até 30 minutos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - melhorar responsividade */}
      <section id="servicos" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">Nossos Serviços</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Oferecemos soluções completas em elétrica com profissionais certificados e produtos de alta qualidade para
              sua segurança e tranquilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Energia Solar */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 relative bg-white p-4">
                <img
                  src="/images/energia-solar.png"
                  alt="Energia Solar Sustentável - Vip Elétrica"
                  className="w-full h-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Energia Solar</h3>
                <p className="text-gray-600 mb-4">
                  Energia limpa, futuro sustentável. Faça parte da mudança! A energia solar é uma opção sustentável e
                  econômica para reduzir sua conta de luz.
                </p>
                <Button className="w-full bg-green-500 hover:bg-green-600" asChild>
                  <Link
                    href="https://wa.me/5511957092479?text=Gostaria de saber mais sobre energia solar"
                    target="_blank"
                  >
                    Peça seu Orçamento
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Instalações Elétricas */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 relative bg-white p-4">
                <img
                  src="/images/quadro-eletrico.png"
                  alt="Instalações Elétricas Profissionais - Vip Elétrica"
                  className="w-full h-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Instalações Elétricas</h3>
                <p className="text-gray-600 mb-4">
                  Todos os serviços com produtos de qualidade. Reparos em geração própria com profissional certificado.
                  Segurança e eficiência garantidas.
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="https://wa.me/5511957092479?text=Preciso de instalação elétrica" target="_blank">
                    Solicitar Serviço
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Chuveiro Elétrico */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 relative bg-white p-4">
                <img
                  src="/images/chuveiro-eletrico.png"
                  alt="Instalação de Chuveiro Elétrico - Vip Elétrica"
                  className="w-full h-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Chuveiro Elétrico</h3>
                <p className="text-gray-600 mb-4">
                  Segurança na instalação do seu chuveiro. Profissionalismo e segurança na instalação. Tenha um serviço
                  de primeira com garantia total!
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                  <Link href="https://wa.me/5511957092479?text=Preciso instalar chuveiro elétrico" target="_blank">
                    Solicite um Orçamento
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Segurança Elétrica */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 relative bg-white p-4">
                <img
                  src="/images/seguranca-eletrica.png"
                  alt="Segurança Elétrica - Vip Elétrica"
                  className="w-full h-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Segurança Elétrica</h3>
                <p className="text-gray-600 mb-4">
                  Não arrisque! Confie na Elétrica VIP para todas as suas necessidades elétricas. Sua segurança é nossa
                  prioridade número um.
                </p>
                <Button className="w-full bg-red-500 hover:bg-red-600" asChild>
                  <Link
                    href="https://wa.me/5511957092479?text=Preciso de uma avaliação de segurança elétrica"
                    target="_blank"
                  >
                    Avaliação Gratuita
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Fiação Antiga */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 relative bg-white p-4">
                <img
                  src="/images/fiacao-antiga.png"
                  alt="Modernização de Fiação Antiga - Vip Elétrica"
                  className="w-full h-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Fiação Antiga</h3>
                <p className="text-gray-600 mb-4">
                  FIQUE ATENTO! Fiação antiga é o vilão da sua conta de luz. Chame um eletricista de confiança! Sua
                  segurança começa pelos fios da sua casa.
                </p>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600" asChild>
                  <Link href="https://wa.me/5511957092479?text=Preciso trocar fiação antiga" target="_blank">
                    Chame um Eletricista
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Manutenção */}
            <Card className="overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="h-80 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Manutenção Preventiva</h3>
                <p className="text-gray-600 mb-4">
                  Sua segurança começa pelos fios da sua casa. Manutenção preventiva evita problemas e economiza
                  dinheiro a longo prazo.
                </p>
                <Button className="w-full bg-purple-500 hover:bg-purple-600" asChild>
                  <Link
                    href="https://wa.me/5511957092479?text=Gostaria de agendar manutenção preventiva"
                    target="_blank"
                  >
                    Agendar Manutenção
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Por que escolher a Vip Elétrica?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Mais que negócios, uma relação de parceria. Conheça os diferenciais que fazem da Vip Elétrica a melhor
              escolha para seus projetos elétricos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Profissionais Certificados</h3>
              <p className="text-blue-100">
                Equipe qualificada e certificada para garantir a máxima segurança e qualidade em todos os serviços.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Produtos de Qualidade</h3>
              <p className="text-blue-100">
                Utilizamos apenas materiais de primeira linha, garantindo durabilidade e segurança em todas as
                instalações.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Atendimento 24h</h3>
              <p className="text-blue-100">
                Emergências elétricas não esperam. Estamos disponíveis 24 horas para atender suas necessidades urgentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Adicionar nova seção de storytelling após "Why Choose Us" */}
      {/* Storytelling CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 md:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full mb-6 shadow-lg">
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-blue-900" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                Imagine sua casa sempre segura e eficiente
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3">O Problema</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Fiação antiga, quedas de energia constantes, conta de luz alta e o medo de acidentes elétricos em
                  casa.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3">A Solução</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  A Vip Elétrica chega com profissionais certificados e soluções modernas para transformar sua
                  realidade.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3">O Resultado</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Casa segura, conta de luz reduzida, energia solar sustentável e total tranquilidade para sua família.
                </p>
              </div>
            </div>

            <div className="bg-blue-900 rounded-3xl p-6 md:p-8 text-white mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Não deixe para amanhã o que pode resolver hoje!</h3>
              <p className="text-lg md:text-xl text-blue-100 mb-6">
                Cada dia que passa com problemas elétricos é um dia a mais de risco e desperdício. Sua família merece
                segurança e você merece economia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
                  asChild
                >
                  <Link
                    href="https://wa.me/5511957092479?text=Quero resolver meus problemas elétricos agora!"
                    target="_blank"
                  >
                    <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                    Resolver Agora
                  </Link>
                </Button>
                <div className="text-center sm:text-left">
                  <p className="text-yellow-400 font-semibold text-sm md:text-base">Orçamento Gratuito</p>
                  <p className="text-blue-200 text-xs md:text-sm">Atendimento 24h</p>
                </div>
              </div>
            </div>

            <p className="text-blue-900 font-semibold text-sm md:text-base">
              ⚡ Mais de 500 famílias já transformaram suas casas com a Vip Elétrica
            </p>
          </div>
        </div>
      </section>

      {/* Melhorar responsividade das outras seções também */}
      {/* About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 md:mb-6">
                Sobre a Vip Elétrica
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                Com anos de experiência no mercado elétrico, a Vip Elétrica se consolidou como referência em qualidade,
                segurança e inovação. Nossa missão é oferecer soluções elétricas completas que garantam a tranquilidade
                e satisfação de nossos clientes.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                Trabalhamos com uma equipe altamente qualificada e certificada, utilizando apenas materiais de primeira
                linha e seguindo rigorosamente as normas de segurança. Mais que negócios, construímos uma relação de
                parceria duradoura com cada cliente.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-900">500+</div>
                  <div className="text-sm md:text-base text-gray-600">Projetos Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-900">100%</div>
                  <div className="text-sm md:text-base text-gray-600">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-6 md:p-8 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Nossa Missão</h3>
                <p className="text-sm md:text-base mb-4 md:mb-6">
                  Proporcionar soluções elétricas seguras, eficientes e sustentáveis, superando as expectativas dos
                  nossos clientes através da excelência técnica e atendimento personalizado.
                </p>
                <div className="flex items-center space-x-4">
                  <Shield className="w-6 md:w-8 h-6 md:h-8 text-yellow-400" />
                  <span className="text-sm md:text-base font-semibold">Certificação e Qualidade Garantida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Nossos Trabalhos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Confira alguns dos projetos realizados pela nossa equipe especializada. Cada trabalho é executado com
              máxima qualidade e atenção aos detalhes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="h-64 bg-gradient-to-br from-green-400 via-green-500 to-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sun className="w-20 h-20 text-white group-hover:rotate-180 transition-transform duration-700" />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Sistema Solar Residencial</h3>
                <p className="text-gray-600">
                  Instalação completa de sistema fotovoltaico com economia de 95% na conta de luz.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="h-64 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Settings className="w-20 h-20 text-white group-hover:rotate-90 transition-transform duration-500" />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-cyan-300 rounded-full animate-ping"></div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Modernização Elétrica</h3>
                <p className="text-gray-600">
                  Upgrade completo do sistema elétrico com quadro de distribuição moderno.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="h-64 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Home className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-red-300 rounded-full animate-bounce"></div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Instalação Segura</h3>
                <p className="text-gray-600">
                  Instalação profissional de chuveiro elétrico com todas as normas de segurança.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A satisfação dos nossos clientes é nossa maior recompensa. Veja alguns depoimentos de quem já confiou na
              Vip Elétrica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-900 font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">Maria Silva</h4>
                  <p className="text-gray-600 text-sm">Residencial</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Excelente atendimento! Instalaram meu sistema solar com muito profissionalismo. Já estou economizando
                muito na conta de luz."
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-900 font-bold">J</span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">João Santos</h4>
                  <p className="text-gray-600 text-sm">Comercial</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Precisava urgente de um reparo elétrico na empresa. A equipe da Vip chegou rapidamente e resolveu tudo
                com qualidade."
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-900 font-bold">A</span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">Ana Costa</h4>
                  <p className="text-gray-600 text-sm">Residencial</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Modernizaram toda a fiação da minha casa. Trabalho impecável, pontualidade e preço justo. Super
                recomendo!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossos serviços. Se não encontrar a resposta que procura, entre em contato
              conosco.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Vocês atendem emergências 24 horas?</h3>
              <p className="text-gray-700">
                Sim! Entendemos que problemas elétricos podem acontecer a qualquer momento. Nossa equipe está disponível
                24 horas para atendimentos de emergência.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Qual o prazo para instalação de energia solar?</h3>
              <p className="text-gray-700">
                O prazo varia conforme o tamanho do projeto, mas geralmente entre 1 a 3 dias para residências. Fazemos
                uma avaliação prévia e informamos o cronograma detalhado.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Os serviços têm garantia?</h3>
              <p className="text-gray-700">
                Todos os nossos serviços possuem garantia. Para instalações elétricas oferecemos 1 ano de garantia, e
                para sistemas solares até 25 anos conforme o equipamento.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Fazem orçamento gratuito?</h3>
              <p className="text-gray-700">
                Sim! Oferecemos orçamento gratuito e sem compromisso. Nossa equipe faz uma avaliação técnica completa e
                apresenta a melhor solução para sua necessidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Pronto para ter a melhor experiência em serviços elétricos?
          </h2>
          <p className="text-xl text-blue-800 mb-8 max-w-3xl mx-auto">
            Entre em contato agora mesmo e solicite seu orçamento gratuito. Nossa equipe está pronta para atender você
            com excelência e profissionalismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 text-lg" asChild>
              <Link href="https://wa.me/5511957092479" target="_blank">
                <Phone className="w-5 h-5 mr-2" />
                (11) 95709-2479
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 text-lg"
              asChild
            >
              <Link href="mailto:eletrica.suporte@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Enviar E-mail
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Elétrica VIP</h3>
                  <p className="text-yellow-400 text-sm">Mais que negócios, uma relação de parceria</p>
                </div>
              </div>
              <p className="text-blue-100">
                A melhor empresa de elétrica, oferecendo soluções completas com qualidade e segurança garantidas.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span>(11) 95709-2479</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span>eletrica.suporte@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-yellow-400" />
                  <span>www.vipeletrica.com.br</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Energia Solar</li>
                <li>• Instalações Elétricas</li>
                <li>• Chuveiro Elétrico</li>
                <li>• Segurança Elétrica</li>
                <li>• Modernização de Fiação</li>
                <li>• Manutenção Preventiva</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-100">
              © 2024 Elétrica VIP. Todos os direitos reservados. Mais que negócios, uma relação de parceria.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg hover:scale-110 transition-transform duration-300"
          asChild
        >
          <Link href="https://wa.me/5511957092479" target="_blank">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
            </svg>
          </Link>
        </Button>
      </div>
    </div>
  )
}
