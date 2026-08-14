# Grupo Santa Rita — Site Institucional

Novo site multipage do Grupo Santa Rita, desenvolvido para posicionar a empresa como uma operaÃ§Ã£o logÃ­stica robusta, flexÃ­vel e preparada para projetos de alta complexidade.

## Stack

- Next.js 16.3 (App Router)
- React 19 e TypeScript
- Tailwind CSS 4
- Motion for React
- Phosphor Icons
- Vercel

> O projeto usa `16.3.0-canary.102` porque, em 14/08/2026, a linha 16.3 ainda estava disponÃ­vel como prÃ©-lanÃ§amento oficial. Troque para a 16.3 estÃ¡vel assim que ela estiver publicada.

## InstalaÃ§Ã£o

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

## ValidaÃ§Ã£o

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## FormulÃ¡rio comercial

O formulÃ¡rio usa um Route Handler do Next.js e a API da Resend. Inclui validaÃ§Ã£o no cliente e servidor, honeypot, tempo mÃ­nimo de preenchimento e limite bÃ¡sico de requisiÃ§Ãµes por IP.

Copie `.env.example` para `.env.local` e configure:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

Nenhuma chave Ã© exposta no navegador.

## Estrutura

- `app/` — rotas, metadata, sitemap, robots e endpoint de contato
- `components/` — navegaÃ§Ã£o, animaÃ§Ãµes, componentes editoriais e formulÃ¡rio
- `lib/site-data.ts` — dados institucionais separados da interface
- `public/images/` — imagens editoriais originais e referÃªncia visual aprovada

## ConteÃºdo e imagens

As informaÃ§Ãµes institucionais foram reestruturadas a partir do site anterior e dos materiais fornecidos. NÃ£o foram publicados clientes, certificaÃ§Ãµes, capacidades ou indicadores nÃ£o validados. As imagens geradas sÃ£o tratadas como editoriais ilustrativas, sem representar literalmente uma instalaÃ§Ã£o especÃ­fica.

## Deploy na Vercel

1. Importe o repositÃ³rio na Vercel.
2. Confirme o preset Next.js.
3. Cadastre as variÃ¡veis do formulÃ¡rio.
4. Publique a branch `main`.
5. Aponte o domÃ­nio quando o DNS estiver liberado.

A branch principal fica preparada para deploy automÃ¡tico a cada push.
