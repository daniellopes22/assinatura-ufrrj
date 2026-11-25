# Gerador de Assinatura Institucional — UFRRJ

[![Deploy Netlify](https://img.shields.io/netlify/ufrrj?label=Netlify&logo=netlify)](https://ufrrj.netlify.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](index.html)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](index.html)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](index.html)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

Ferramenta web para servidores da **Universidade Federal Rural do Rio de Janeiro (UFRRJ)** gerarem uma assinatura de e-mail padronizada e copiá-la diretamente para o Gmail.

🔗 **Acesse:** [ufrrj.netlify.app](https://ufrrj.netlify.app)

---

## ✨ Funcionalidades

| Categoria | Detalhes |
|-----------|----------|
| **Pré-visualização** | Atualização em tempo real enquanto você digita |
| **Identificação** | Nome, cargo, função (opcional) |
| **Conselho de classe** | 28 conselhos pré-definidos (CRA, CREA, CRM, OAB, CRMV, etc.) + opção "Outro" com campo livre; UF e número de registro |
| **Unidade administrativa** | 4 níveis hierárquicos: Pró-Reitoria/Instituto → Departamento → Coordenadoria/Divisão → Seção/Setor/Núcleo |
| **Endereço por campus** | 5 campi com preenchimento automático + complementos (prédio, andar, sala) |
| **Contatos** | Telefone com máscara `(XX) XXXX-XXXX`/`(XX) 9XXXX-XXXX`, ramal, WhatsApp com link `wa.me` |
| **Redes sociais** | Canais oficiais UFRRJ (Facebook, Instagram, YouTube, LinkedIn) — opcional |
| **Cópia formatada** | Um clique copia HTML + texto plano para colar no Gmail |
| **Guia Gmail** | Passo a passo integrado na página |
| **Privacidade** | Dados apenas no `localStorage` do navegador — **zero requisições de rede** para dados do usuário |
| **Exportar/Importar** | Backup/restauração via arquivo `.json` |
| **Responsivo** | Mobile-first, breakpoints em 860px e 560px |
| **Acessível** | WCAG AA: labels, ARIA live, contraste 4.5:1, navegação por teclado |

---

## 🚀 Como Usar

### Online (Recomendado)
1. Acesse **[ufrrj.netlify.app](https://ufrrj.netlify.app)**
2. Preencha seus dados funcionais
3. Confira a pré-visualização
4. Clique em **"Copiar assinatura formatada"**
5. No Gmail: **Configurações → Ver todas as configurações → Geral → Assinatura → Cole (Ctrl+V) → Salvar alterações**

[📖 Guia detalhado no Gmail](https://support.google.com/mail/answer/8395?hl=pt-BR)

### Localmente

```bash
# Clone o repositório
git clone https://github.com/daniellopes22/assinatura-ufrrj.git
cd assinatura-ufrrj

# Opção 1: Abra direto no navegador
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux

# Opção 2: Servidor local (evita problemas de CORS)
npx serve .
# ou
npx live-server
```

---

## 🏗️ Arquitetura

```
assinatura-ufrrj/
├── index.html              # Aplicação completa (HTML + CSS + JS inline)
├── README.md               # Este arquivo
├── CONTRIBUTING.md         # Guia de contribuição
├── CHANGELOG.md            # Histórico de versões
├── LICENSE                 # Licença MIT
├── .github/
│   ├── ISSUE_TEMPLATE/     # Templates de bug report & feature request
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── dependabot.yml      # Atualizações automáticas de dependências
└── docs/                   # Documentação técnica (futuro)
```

### Princípios de Design

- **Single-file**: Tudo em `index.html` — 1 request, sem build, sem dependências npm
- **Privacy-first**: `localStorage` apenas; nenhuma telemetria, analytics ou backend
- **Vanilla stack**: HTML5 semântico, CSS Custom Properties, ES6+ vanilla JS
- **Progressive enhancement**: Funciona sem JS (apenas sem pré-visualização dinâmica)
- **Standards-compliant**: Clipboard API moderna com fallback, FileReader, Web APIs nativas

---

## 🛠️ Tecnologias

| Camada | Tecnologia |
|--------|------------|
| Estrutura | HTML5 semântico (`<main>`, `<section>`, `<fieldset>`, `<legend>`) |
| Estilos | CSS3 com Custom Properties, Grid/Flexbox, Mobile-first |
| Scripts | JavaScript Vanilla ES6+ (módulos IIFE pattern) |
| Fonte | [Lato](https://fonts.google.com/specimen/Lato) via Google Fonts (`preconnect` + `display=swap`) |
| Ícones/Logo | SVG/PNG hospedados no domínio institucional UFRRJ |
| Deploy | [Netlify](https://netlify.com) (CI/CD automático via GitHub) |
| Validação | `html-validate`, `@axe-core/cli` (opcional) |

---

## 📋 Requisitos do Sistema

- **Navegador moderno** (últimas 2 versões):
  - Chrome/Edge 100+
  - Firefox 100+
  - Safari 15+
  - Mobile Chrome/Safari
- **JavaScript habilitado** (para funcionalidades dinâmicas)
- **Clipboard API** (HTTPS ou localhost) — fallback automático para HTTP

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Veja nosso [Guia de Contribuição](CONTRIBUTING.md) para:

- [Configuração do ambiente](CONTRIBUTING.md#configuração-do-ambiente)
- [Padrões de código](CONTRIBUTING.md#padrões-de-código)
- [Processo de Pull Request](CONTRIBUTING.md#processo-de-pull-request)
- [Relatando bugs](CONTRIBUTING.md#relatando-bugs)
- [Sugerindo melhorias](CONTRIBUTING.md#sugerindo-melhorias)

### Quick Start para Contribuidores

```bash
git clone https://github.com/daniellopes22/assinatura-ufrrj.git
cd assinatura-ufrrj
# Faça suas alterações em index.html
# Teste localmente
npx serve .
# Abra PR com template preenchido
```

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja [LICENSE](LICENSE) para detalhes.

---

## 🔗 Links Úteis

| Link | Descrição |
|------|-----------|
| [Produção](https://ufrrj.netlify.app) | Site ao vivo |
| [Issues](https://github.com/daniellopes22/assinatura-ufrrj/issues) | Bug reports & feature requests |
| [Discussions](https://github.com/daniellopes22/assinatura-ufrrj/discussions) | Dúvidas, ideias, suporte |
| [Releases](https://github.com/daniellopes22/assinatura-ufrrj/releases) | Versões lançadas |
| [CHANGELOG](CHANGELOG.md) | Histórico completo de mudanças |

---

## 👨‍💻 Autoria & Manutenção

Desenvolvido por **Daniel Lopes** para a comunidade UFRRJ.

- Coordenação de Infraestrutura de TIC — CITIC/UFRRJ
- Mantenha-se atualizado: [Watch](https://github.com/daniellopes22/assinatura-ufrrj/subscription) o repositório

---

<div align="center">
  <strong>Feito com ❤️ para servidores da UFRRJ</strong><br>
  <sub>Universidade Federal Rural do Rio de Janeiro</sub>
</div>
