export const site = {
  name: "Grupo Santa Rita",
  shortName: "Santa Rita",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.santaritalogistic.com.br",
  phone: "(11) 95680-4881",
  phoneHref: "tel:+5511956804881",
  whatsapp: "https://wa.me/5511956804881?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20uma%20opera%C3%A7%C3%A3o%20log%C3%ADstica.",
  email: "contato@santaritalogistic.com.br",
  address: "Rua Orlando Motta, 342 — Condomínio Polo Industrial Jandira 2",
  city: "Jandira — SP",
  postalCode: "06612-260",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Orlando+Motta+342+Jandira+SP+06612-260",
  mapEmbed: "https://www.google.com/maps?q=Rua%20Orlando%20Motta%2C%20342%2C%20Jandira%20SP&output=embed",
};

export const navigation = [
  { label: "Soluções", href: "/solucoes" },
  { label: "Infraestrutura", href: "/infraestrutura" },
  { label: "Diferenciais", href: "/diferenciais" },
  { label: "Grupo Santa Rita", href: "/grupo-santa-rita" },
  { label: "Localização", href: "/localizacao" },
];

export const solutions = [
  {
    title: "Armazenagem multitemperatura",
    href: "/solucoes/armazenagem",
    eyebrow: "Ambientes dedicados",
    description: "Congelados, resfriados, climatizados e secos com processos que respeitam a particularidade de cada produto.",
    image: "/images/cold-storage.png",
  },
  {
    title: "Distribuição",
    href: "/solucoes/distribuicao",
    eyebrow: "Fluxo sob controle",
    description: "Cargas fracionadas e fechadas, agendamento, monitoramento e análise de performance em uma operação coordenada.",
    image: "/images/distribution.png",
  },
  {
    title: "Serviços e atividades extras",
    href: "/solucoes/servicos-extras",
    eyebrow: "Operação ampliada",
    description: "Palletização, kits, etiquetagem, coletas, integração de sistemas e consultoria para reduzir etapas e ganhar eficiência.",
    image: "/images/operations-team.png",
  },
];

export const storageFeatures = [
  "Congelados", "Resfriados", "Climatizados", "Secos", "FEFO / FIFO", "Picking", "Estoque endereçado", "Espaços operacionais dedicados", "Relatórios personalizados",
];

export const distributionFeatures = [
  "Carga fracionada e fechada", "Agendamento de entregas", "Monitoramento de carga", "Análise de performance", "Relatórios de entrega", "Entregas com restrições", "Cross-docking", "Coletas",
];

export const extraServices = [
  "Palletização no padrão do cliente", "Montagem de kits", "Etiquetagem e selagem IPI", "Linha de montagem dedicada", "Integração de sistemas", "Consultoria logística", "Treinamento por operação", "Salas disponíveis para clientes",
];

export const differentiators = [
  { title: "Projeto sob medida", text: "Cada operação nasce da leitura de processos, restrições e metas do cliente. A infraestrutura se adapta à necessidade — e não o contrário." },
  { title: "Gestão próxima", text: "A integração entre equipe executiva, operação e cliente sustenta decisões rápidas e um atendimento genuinamente personalizado." },
  { title: "Controle operacional", text: "Gestão de estoque, inventários, prevenção de perdas e relatórios mantêm o fluxo visível e orientado à qualidade." },
  { title: "Flexibilidade real", text: "Processos, espaços e atividades extras podem ser combinados para acompanhar volumes, particularidades e evolução da operação." },
];
