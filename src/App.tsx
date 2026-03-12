import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  XCircle,
  ChevronDown, 
  BookOpen, 
  Target, 
  Layout, 
  AlertCircle, 
  FileText, 
  Zap, 
  ShieldCheck, 
  MessageCircle,
  Instagram,
  Star,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants & Data ---

const PAGES_PREVIEW = [
  "https://i.ibb.co/JRvKwDGN/1.png",
  "https://i.ibb.co/67s4xdn4/2.png",
  "https://i.ibb.co/zkpDt8P/3.png",
  "https://i.ibb.co/pjH4CsnQ/4.png",
  "https://i.ibb.co/3YNHJN4G/5.png",
  "https://i.ibb.co/v4GhCVKV/6.png",
  "https://i.ibb.co/Q7m2R5TN/7.png",
  "https://i.ibb.co/k2B76vfS/8.png",
  "https://i.ibb.co/vxCpJTB8/9.png",
  "https://i.ibb.co/sd5SLC9d/10.png"
];

const TESTIMONIALS = [
  { name: "lara_silva88", text: "Material top demais, direto ao ponto. To sentindo que agora vai!", img: "https://i.ibb.co/HTShCZrV/Fotos-que-puedes-subir-a-Instagram-en-tus-Domingos-sin-nada-que-hacer.jpg" },
  { name: "marcos.silvv", text: "Os mapas mentais ajudam mto a revisar, salvou minha vida kkk", img: "https://i.ibb.co/8L60Lp2m/download-21.jpg" },
  { name: "j_oliveira_op", text: "Melhor investimento q fiz esse ano. Conteúdo de qualidade msm.", img: "https://i.ibb.co/SDt9MsSB/download-20.jpg" },
  { name: "ricardo_tech", text: "A parte de específica tá mto bem explicada, parabéns pelo material!", img: "https://i.ibb.co/nq2nHPK0/H-ctor-Porrata-Doria.jpg" },
  { name: "carol_hac", text: "Gente, comprem sem medo. O acesso é na hora e o material é lindo.", img: "https://i.ibb.co/MkN4s8jj/download-19.jpg" },
  { name: "gab.ela.mendess", text: "Focado no que cai. Sem enrolação de cursinho grande.", img: "https://i.ibb.co/4ntfqb1T/download-18.jpg" },
  { name: "fernanda_m_petro", text: "Estudando todo dia com a apostila, a organização é o diferencial.", img: "https://i.ibb.co/kggN0yjt/download-17.jpg" },
  { name: "andress.a.viana88", text: "Vale cada centavo. O edital verticalizado ajuda d+ a não se perder.", img: "https://i.ibb.co/PGh3QxjD/Happy-mood.jpg" },
  { name: "antonio_souza_mederss", text: "Amei os bônus! Os mapas mentais são perfeitos pra quem tem pouco tempo.", img: "https://i.ibb.co/bR3kGdNN/download-16.jpg" },
  { name: "gabriel_farias_85", text: "Material aprovado. Agora é só focar e garantir a vaga em 2026.", img: "https://i.ibb.co/1f58BPSF/download-15.jpg" }
];

const WHATSAPP_PRINTS = [
  "https://i.ibb.co/d01BprNy/Whats-App-Image-2026-03-03-at-21-02-05-1.jpg",
  "https://i.ibb.co/KxHjKjt5/Whats-App-Image-2026-03-03-at-21-02-05.jpg",
  "https://i.ibb.co/20gL01L9/Whats-App-Image-2026-03-03-at-21-02-04-1.jpg",
  "https://i.ibb.co/hFTgxgtK/Whats-App-Image-2026-03-03-at-21-02-04.jpg"
];

const SYLLABUS = [
  {
    title: "Língua Portuguesa",
    items: [
      "Compreensão e Interpretação de Textos",
      "Tipos e Gêneros Textuais",
      "Ortografia Oficial e Coesão Textual",
      "Tempos e Modos Verbais",
      "Classes de Palavras e Sintaxe (Coordenação e Subordinação)",
      "Pontuação, Concordância e Regência",
      "Crase e Colocação Pronominal",
      "Reescrita de Frases e Significação das Palavras"
    ]
  },
  {
    title: "Matemática",
    items: [
      "Conjuntos e Sequências Numéricas",
      "Álgebra e Funções",
      "Sistemas Lineares, Matrizes e Determinantes",
      "Análise Combinatória e Probabilidade",
      "Geometria Plana, Analítica e Trigonometria"
    ]
  },
  {
    title: "Conhecimentos Específicos I: Fundamentos de Química e Física",
    items: [
      "Química: Ácidos, Bases, Sais, Óxidos, Eletroquímica, Estequiometria, Soluções e Química Orgânica",
      "Física: Eletrostática, Eletromagnetismo, Circuitos Elétricos e Termodinâmica Básica",
      "Instrumentação: Metrologia, Noções de Eletricidade e Eletrônica"
    ]
  },
  {
    title: "Conhecimentos Específicos II: Técnico de Operação e Segurança",
    items: [
      "Mecânica: Estática, Cinemática, Dinâmica, Hidrostática e Conservação de Energia",
      "Termologia: Gases, Máquinas Térmicas e Termoquímica",
      "Processos Industriais: Controle de Processos, Operações Unitárias e Equipamentos",
      "Segurança: Segurança Industrial, Meio Ambiente e Saúde Ocupacional"
    ]
  }
];

const FAQS = [
  {
    q: "Como recebo o material?",
    a: "O acesso é imediato! Assim que seu pagamento for aprovado, você receberá um e-mail com os dados de acesso à nossa área de membros exclusiva. Lá, você poderá estudar online ou baixar os PDFs para imprimir e estudar como preferir."
  },
  {
    q: "O conteúdo é atualizado?",
    a: "Sempre! Nosso material é constantemente revisado e atualizado de acordo com as últimas tendências da banca e mudanças no edital. Você terá acesso a todas as atualizações de 2026 sem custo adicional."
  },
  {
    q: "É específico para Técnico de Operação?",
    a: "Sim, 100% focado. Este material foi desenvolvido exclusivamente para o cargo de Técnico de Operação da Petrobras, abordando exatamente os temas que compõem o núcleo da prova para esta função."
  },
  {
    q: "Funciona para iniciantes?",
    a: "Para todos os públicos. A apostila foi estruturada de forma didática, partindo dos fundamentos até os conceitos mais avançados, sendo ideal tanto para quem está começando do zero quanto para quem já tem base e quer revisar com estratégia."
  }
];

// --- Components ---

const AccordionItem: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border-b border-white/10 ${isOpen ? 'accordion-open' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left hover:text-petro-yellow transition-colors"
      >
        <span className="text-lg font-semibold">{title}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className="accordion-content">
        <div className="pb-5 text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const difference = endOfDay.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-4 font-mono text-2xl font-bold text-petro-yellow">
      <div className="flex flex-col items-center">
        <span>{formatNumber(timeLeft.hours)}</span>
        <span className="text-[10px] uppercase tracking-widest opacity-50">HH</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{formatNumber(timeLeft.minutes)}</span>
        <span className="text-[10px] uppercase tracking-widest opacity-50">MM</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{formatNumber(timeLeft.seconds)}</span>
        <span className="text-[10px] uppercase tracking-widest opacity-50">SS</span>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6 px-4 border-b border-white/5 bg-petro-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="https://editoraeditalconcursos.vercel.app" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-petro-yellow group-hover:scale-110 transition-transform bg-white">
              <img 
                src="https://i.ibb.co/S42pLnFz/1000112350.webp" 
                alt="Logo Editora" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-bold text-xl tracking-tight">Editora Edital Concursos</span>
          </a>
          <button onClick={scrollToOffer} className="hidden md:block text-sm font-semibold uppercase tracking-widest text-petro-yellow hover:opacity-80 transition-opacity">
            Quero Minha Vaga
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <section className="relative pt-20 pb-32 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-1 bg-petro-green/30 border border-petro-green-light rounded-full text-petro-yellow text-sm font-bold uppercase tracking-widest">
                Oportunidade Petrobras 2026
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase tracking-tighter italic">
                CONCURSO <br />
                <span className="text-petro-yellow">PETROBRAS 2026</span>
              </h1>
              <div className="space-y-4">
                <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  Mais de 6.000 vagas previstas em todo o Brasil. <br />
                  Salários iniciais acima de <span className="bg-petro-yellow text-petro-dark px-2 py-0.5 rounded-md inline-block transform -rotate-1">R$8.000</span> dependendo do cargo.
                </p>
                <p className="text-lg text-gray-300 max-w-xl">
                  Comece hoje sua preparação com o material baseado nos últimos editais da Petrobras.
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-4">
                {[
                  "Português",
                  "Matemática",
                  "Conhecimentos Específicos",
                  "Segurança e Operação"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-petro-green-light" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button onClick={scrollToOffer} className="btn-yellow w-full sm:w-auto text-xl px-12 py-6">
                  QUERO COMEÇAR AGORA
                </button>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <ShieldCheck className="w-5 h-5 text-petro-green-light" />
                  Acesso imediato e seguro
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src="https://i.ibb.co/s9kjrcJd/Whats-App-Image-2026-03-06-at-23-23-49.jpg" 
                  alt="Mockup Completo: Plataforma, Apostila e Celular" 
                  className="rounded-2xl shadow-2xl border border-white/10 w-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -top-6 -right-6 bg-petro-yellow text-petro-dark w-24 h-24 rounded-full flex flex-col items-center justify-center font-bold text-center shadow-xl animate-bounce z-20">
                  <span className="text-xs">OFERTA</span>
                  <span className="text-lg">ESPECIAL</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. POR QUE PETROBRAS */}
        <section className="py-24 px-4 bg-petro-green/10">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto">
                Por que o concurso da Petrobras é um dos mais requisitados do Brasil
              </h2>
              <div className="w-24 h-1 bg-petro-yellow mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: "💰", 
                  title: "Salários acima de R$8.000", 
                  desc: "Remuneração inicial competitiva com possibilidade de crescimento." 
                },
                { 
                  icon: "🏢", 
                  title: "Empresa gigante do setor de energia", 
                  desc: "Uma das maiores empresas da América Latina." 
                },
                { 
                  icon: "📈", 
                  title: "Plano de carreira sólida", 
                  desc: "Progressões e aumentos salariais ao longo do tempo." 
                },
                { 
                  icon: "⚙️", 
                  title: "Benefícios corporativos", 
                  desc: "Auxílio alimentação, plano de saúde e outros benefícios." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 space-y-4 border-white/5"
                >
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. SEÇÃO DE IDENTIFICAÇÃO */}
        <section className="py-24 px-4 bg-black/40">
          <div className="max-w-7xl mx-auto text-center space-y-16">
            <h2 className="text-3xl md:text-5xl font-bold">Você se identifica com isso?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <BookOpen className="w-10 h-10" />, title: "Edital gigante?", desc: "Conteúdo extenso e difícil de organizar sozinho." },
                { icon: <Layout className="w-10 h-10" />, title: "Materiais desorganizados?", desc: "PDFs soltos, aulas confusas e falta de direção." },
                { icon: <AlertCircle className="w-10 h-10" />, title: "Medo de não conseguir?", desc: "Sensação de estar estudando muito e evoluindo pouco." }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="glass-card p-10 space-y-6 text-center"
                >
                  <div className="mx-auto w-20 h-20 bg-petro-yellow/10 rounded-full flex items-center justify-center text-petro-yellow">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. O MÉTODO */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">O Método que acelera sua aprovação</h2>
              <div className="w-24 h-1 bg-petro-yellow mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: <Target className="w-12 h-12" />, title: "Teoria Direcionada", desc: "Explicações objetivas, sem enrolação, focadas no que a Petrobras cobra." },
                { icon: <FileText className="w-12 h-12" />, title: "Mapas Mentais Estratégicos", desc: "Organização inteligente do conteúdo para memorização visual rápida." },
                { icon: <Zap className="w-12 h-12" />, title: "Treino de Banca", desc: "Questões no estilo da prova para fixação real e domínio do tempo." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-6">
                  <div className="text-petro-green-light">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. VISUAL DO MATERIAL */}
        <section className="py-24 px-4 bg-petro-green/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Visual Limpo. Memorização Acelerada.</h2>
              <p className="text-gray-400">Design organizado, destaques estratégicos e estrutura pensada para retenção.</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {PAGES_PREVIEW.slice(0, 5).map((img, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`Página ${i+1}`} 
                    className="rounded-lg shadow-xl border border-white/10 transition-all group-hover:border-petro-yellow/50"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                    <span className="text-white font-bold text-xs uppercase tracking-widest bg-petro-dark/80 px-3 py-1 rounded-full border border-white/20">Ver Detalhes</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CONTEÚDO PROGRAMÁTICO */}
        <section className="py-24 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Conteúdo Programático Completo</h2>
          <div className="space-y-2">
            {SYLLABUS.map((section, i) => (
              <AccordionItem key={i} title={section.title}>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-petro-yellow mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            ))}
          </div>
        </section>

        {/* 6. PROVA SOCIAL */}
        <section className="py-24 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto space-y-20">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Quem estuda com estratégia, recomenda</h2>
              <p className="text-gray-400">Resultados reais de quem já está na trilha da aprovação.</p>
            </div>

            {/* Instagram Style */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white text-black p-6 rounded-xl shadow-lg space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-gray-200" referrerPolicy="no-referrer" />
                    <div>
                      <p className="font-bold text-sm">@{t.name}</p>
                      <div className="flex gap-0.5 text-petro-yellow">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed italic">"{t.text}"</p>
                  <div className="flex items-center gap-4 text-gray-400 text-xs pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-1"><Instagram className="w-3 h-3" /> Curtir</div>
                    <div>Responder</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp Style */}
            <div className="space-y-12">
              <h3 className="text-2xl font-bold text-center text-petro-yellow uppercase tracking-widest flex items-center justify-center gap-2">
                <MessageCircle className="w-6 h-6" /> Conversas no WhatsApp
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {WHATSAPP_PRINTS.map((img, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg overflow-hidden shadow-2xl border border-white/5"
                  >
                    <img src={img} alt="Feedback WhatsApp" className="w-full h-auto" referrerPolicy="no-referrer" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center pt-10">
              <button onClick={scrollToOffer} className="btn-yellow">
                QUERO ADQUIRIR TAMBÉM
              </button>
            </div>
          </div>
        </section>

        {/* 7. O QUE VOCÊ RECEBE */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://i.ibb.co/s9kjrcJd/Whats-App-Image-2026-03-06-at-23-23-49.jpg" 
                  alt="Conteúdo do Material: Plataforma, Tablet e Celular" 
                  className="rounded-2xl shadow-2xl border border-white/10 w-full"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">O que você recebe ao garantir sua vaga hoje:</h2>
              <ul className="space-y-6">
                {[
                  "Apostila Completa em PDF (Teoria + Questões)",
                  "Atualizações gratuitas até o edital 2026",
                  "Bônus exclusivos para acelerar sua memorização",
                  "Material organizado rigorosamente por edital",
                  "Acesso imediato após a confirmação do pagamento"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg">
                    <CheckCircle2 className="w-6 h-6 text-petro-green-light flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8. BÔNUS */}
        <section className="py-24 px-4 bg-petro-green/5">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Bônus Exclusivo</h2>
              <p className="text-gray-400">Ferramentas extras para garantir que você não perca tempo.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Edital Verticalizado", desc: "Controle total do seu progresso. Saiba exatamente o que já estudou e o que falta para fechar o edital." },
                { title: "Mapas Mentais Esquematizados", desc: "Resumos visuais de alta performance para revisões rápidas e eficientes antes da prova." }
              ].map((bonus, i) => (
                <div key={i} className="glass-card p-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 bg-petro-yellow text-petro-dark px-4 py-1 font-bold text-xs uppercase tracking-widest rounded-bl-lg">
                    GRATUITO
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-petro-yellow transition-colors">{bonus.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{bonus.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. GARANTIA (Compact) */}
        <section className="py-16 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass-card p-10 text-center space-y-6 border-petro-green-light/30 bg-petro-green/5"
          >
            <div className="mx-auto w-20 h-20 bg-petro-green-light/20 rounded-full flex items-center justify-center text-petro-green-light">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold">Garantia Incondicional de 7 Dias</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Risco zero. Teste o material, explore os bônus e sinta a qualidade. Se por qualquer motivo você não gostar, basta nos enviar um e-mail e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </motion.div>
        </section>

        {/* 9. PLANOS E PREÇOS */}
        <section id="oferta" className="py-32 px-4 relative">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Escolha seu plano</h2>
              <p className="text-petro-yellow font-bold tracking-widest uppercase">Invista no seu futuro hoje</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* Plano 1 - Plano Simples */}
              <div className="glass-card p-8 flex flex-col justify-between border-white/10 hover:border-white/20 transition-all">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-300">Plano Simples</h3>
                  <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-gray-500 flex-shrink-0" /> 
                      Conteúdo básico em PDF
                    </li>
                  </ul>
                </div>
                <div className="mt-12 space-y-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">R$ 14,90</span>
                  </div>
                  <a href="https://pay.cakto.com.br/3dzacuc" className="block w-full py-3 rounded-lg border border-white/10 text-center font-bold text-gray-300 hover:bg-white/5 transition-colors">
                    ADQUIRIR AGORA
                  </a>
                </div>
              </div>

              {/* Plano 2 - Plano Essencial */}
              <div className="glass-card p-8 flex flex-col justify-between border-petro-green-light/30 bg-petro-green/5 relative overflow-hidden">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Plano Essencial</h3>
                  <div className="w-12 h-1 bg-petro-green-light rounded-full"></div>
                  <ul className="space-y-4">
                    {[
                      "Material Teórico Completo",
                      "Questões Gabaritadas Inéditas",
                      "Mapas Mentais Esquematizados Exclusivos",
                      "Plataforma de Estudos Personalizada"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-petro-green-light flex-shrink-0" /> 
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 space-y-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">R$ 28,90</span>
                  </div>
                  <a href="https://pay.cakto.com.br/67rafyh" className="block w-full py-4 rounded-lg bg-petro-green-light text-white text-center font-bold hover:bg-petro-green transition-colors shadow-lg">
                    QUERO ESTE
                  </a>
                </div>
              </div>

              {/* Plano 3 - Combo Aprovação (O mais atrativo) */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 flex flex-col justify-between border-petro-yellow ring-4 ring-petro-yellow/20 relative bg-gradient-to-b from-petro-green/30 to-transparent shadow-[0_0_50px_rgba(255,209,0,0.2)] z-10"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-petro-yellow text-petro-dark px-6 py-1 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl whitespace-nowrap">
                  MAIS ESCOLHIDO
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-black text-petro-yellow tracking-tight">Combo Aprovação</h3>
                  <div className="w-12 h-1 bg-petro-yellow rounded-full"></div>
                  <ul className="space-y-3">
                    {[
                      "Material Teórico Completo",
                      "Questões Gabaritadas Inéditas",
                      "Mapas Mentais Esquematizados Exclusivos",
                      "Plataforma de Estudos Personalizada",
                      "Redação Discursiva para Concursos",
                      "Como Estudar com PDFs",
                      "Controle Emocional - Disciplina de Ferro",
                      "Atualizações Prioritárias Periódicas",
                      "Suporte Vip 24h"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-semibold text-white">
                        <CheckCircle2 className="w-5 h-5 text-petro-yellow flex-shrink-0" /> 
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 space-y-6">
                  <div className="flex flex-col">
                    <span className="text-sm text-petro-yellow/80 font-bold uppercase tracking-widest">O Melhor Custo-Benefício</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-gray-400 line-through">R$ 96,90</span>
                      <span className="text-6xl font-black text-petro-yellow drop-shadow-lg">R$ 48,90</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-black/40 p-4 rounded-xl border border-white/10 text-center space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">OFERTA PROMOCIONAL POR TEMPO LIMITADO</p>
                      <CountdownTimer />
                    </div>
                    <a href="https://pay.cakto.com.br/3fn2i8q" className="block w-full text-xl py-5 rounded-xl font-black uppercase tracking-widest transition-all bg-petro-green-light hover:bg-petro-green text-white text-center shadow-[0_10px_30px_rgba(0,133,66,0.3)]">
                      QUERO SER APROVADO
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 11. FAQ */}
        <section className="py-24 px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} title={faq.q}>
                <p>{faq.a}</p>
              </AccordionItem>
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="overflow-y-auto max-h-[90vh] bg-white">
                <img 
                  src={selectedImage} 
                  alt="Visualização Ampliada" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-black py-16 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <a href="https://editoraeditalconcursos.vercel.app" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-petro-yellow bg-white">
                <img 
                  src="https://i.ibb.co/S42pLnFz/1000112350.webp" 
                  alt="Logo Editora" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-bold text-lg">Editora Edital Concursos</span>
            </a>
            <p className="text-gray-500 text-sm">
              Transformando a preparação para concursos com materiais estratégicos e foco total em resultados.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400">Suporte</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a href="mailto:editoraeditalconcursos@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                  editoraeditalconcursos@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5541988420201" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  WhatsApp: (41) 98842-0201
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400">Legal</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              © 2026 Editora Edital Concursos. Todos os direitos reservados. <br />
              Este site não tem vínculo oficial com a Petrobras.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
