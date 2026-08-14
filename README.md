# Grupo Santa Rita — Site Institucional

Novo site multipage do Grupo Santa Rita, desenvolvido para posicionar a empresa como uma operação logística robusta, flexível e preparada para projetos de alta complexidade.

## Stack

- Next.js 16.3 (App Router)
- React 19 e TypeScript
- Tailwind CSS 4
- Motion for React
- Phosphor Icons
- Vercel

> O projeto usa `16.3.0-canary.102` porque, em 14/08/2026, a linha 16.3 ainda estava disponível como pré-lançamento oficial. Troque para a 16.3 estável assim que ela estiver publicada.

## Instalação

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

## Validação

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Formulário comercial

O formulário usa um Route Handler do Next.js e a API da Resend. Inclui validação no cliente e servidor, honeypot, tempo mínimo de preenchimento e limite básico de requisições por IP.

Copie `.env.example` para `.env.local` e configure:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

Nenhuma chave é exposta no navegador.

## Estrutura

- `app/` — rotas, metadata, sitemap, robots e endpoint de contato
- `components/` — navegação, animações, componentes editoriais e formulário
- `lib/site-data.ts` — dados institucionais separados da interface
- `public/images/` — imagens editoriais originais e referência visual aprovada

## Conteúdo e imagens

As informações institucionais foram reestruturadas a partir do site anterior e dos materiais fornecidos. Não foram publicados clientes, certificações, capacidades ou indicadores não validados. As imagens geradas são tratadas como editoriais ilustrativas, sem representar literalmente uma instalação específica.

## Deploy na Vercel

1. Importe o repositório na Vercel.
2. Confirme o preset Next.js.
3. Cadastre as variáveis do formulário.
4. Publique a branch `main`.
5. Aponte o domínio quando o DNS estiver liberado.

A branch principal fica preparada para deploy automático a cada push.
