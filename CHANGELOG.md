# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Não Lançado]

### Adicionado
- Documentação profissional (CONTRIBUTING.md, templates de issue/PR)
- Configuração do Dependabot para atualizações de dependências
- Templates de issue para bug report e feature request

---

## [1.0.0] - 2024-XX-XX

### Adicionado
- **Gerador completo de assinatura institucional** para servidores da UFRRJ
- **Pré-visualização em tempo real** enquanto o usuário preenche o formulário
- **Identificação funcional**: nome, cargo, função (opcional)
- **Conselho de classe** com 28 opções pré-definidas (CRA, CREA, CRM, OAB, CRMV, etc.) + opção "Outro"
  - UF do registro e número de registro
- **Estrutura hierárquica da unidade** (4 níveis):
  - Pró-Reitoria / Instituto
  - Departamento
  - Coordenadoria / Divisão (opcional)
  - Seção / Setor / Núcleo (opcional)
- **Endereço por campus** com preenchimento automático:
  - Seropédica (Sede)
  - Nova Iguaçu – Instituto Multidisciplinar (IM)
  - Três Rios – Instituto Três Rios (ITR)
  - Campos dos Goytacazes – Campus Dr. Leonel Miranda
  - Rio de Janeiro (Centro) – CPDA
  - Complementos editáveis: prédio, andar, sala
- **Contatos** com máscara automática:
  - Telefone (formato `(XX) XXXX-XXXX` ou `(XX) 9XXXX-XXXX`)
  - Ramal
  - WhatsApp com geração automática de link `wa.me`
- **Redes sociais institucionais** (opcional): Facebook, Instagram, YouTube, LinkedIn da UFRRJ
- **Cópia formatada** com um clique (HTML + texto plano) para colar diretamente no Gmail
- **Guia passo a passo** integrado para configuração no Gmail
- **Persistência local** via `localStorage` (dados ficam apenas no navegador)
- **Exportar/Importar** configurações em arquivo `.json`
- **Limpar dados** salvos no navegador atual
- **Design responsivo** (mobile-first, breakpoint em 860px e 560px)
- **Acessibilidade** (WCAG AA): labels, ARIA live regions, contraste, navegação por teclado
- **Privacidade**: zero requisições de rede para dados do usuário; apenas Google Fonts (Lato) e logo UFRRJ
- **Single-file architecture**: `index.html` autocontido (HTML + CSS + JS), sem build, sem dependências npm

### Técnico
- CSS com Custom Properties (design tokens para cores UFRRJ)
- JavaScript vanilla ES6+ (funções puras, sem side effects desnecessários)
- Clipboard API moderna com fallback para `execCommand('copy')`
- FileReader API para importação JSON
- Normalização Unicode (NFD) para nomes de arquivo de exportação

---

## [0.1.0] - 2024-XX-XX

### Adicionado
- Commit inicial via Netlify
- Estrutura base do projeto
- README.md inicial

---

## Guia de Versões

| Versão | Significado |
|--------|-------------|
| **Major** (X.0.0) | Mudanças incompatíveis na API/estrutura de dados, remoção de campos, mudança no formato de exportação |
| **Minor** (0.X.0) | Novos campos, novos campi, novos conselhos, novas funcionalidades (export, import, copy) |
| **Patch** (0.0.X) | Correções de bugs, ajustes visuais, melhorias de acessibilidade, typos, updates de documentação |

---

## Links

- **Produção**: https://ufrrj.netlify.app
- **Repositório**: https://github.com/daniellopes22/assinatura-ufrrj
- **Issues**: https://github.com/daniellopes22/assinatura-ufrrj/issues
- **Releases**: https://github.com/daniellopes22/assinatura-ufrrj/releases