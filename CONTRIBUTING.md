# Guia de Contribuição

Obrigado por considerar contribuir com o **Gerador de Assinatura Institucional da UFRRJ**! 🎓

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)
- [Relatando Bugs](#relatando-bugs)
- [Sugerindo Melhorias](#sugerindo-melhorias)

---

## Código de Conduta

Este projeto segue o [Contributor Covenant](https://www.contributor-covenant.org/pt-BR/version/2/1/code_of_conduct/). Ao participar, espera-se que você respeite este código. Comportamentos inaceitáveis podem ser reportados para o mantenedor.

---

## Como Contribuir

### 1. Fork e Clone

```bash
# Fork no GitHub, depois clone seu fork
git clone https://github.com/SEU-USUARIO/assinatura-ufrrj.git
cd assinatura-ufrrj

# Adicione o upstream para manter-se atualizado
git remote add upstream https://github.com/daniellopes22/assinatura-ufrrj.git
```

### 2. Crie uma Branch

```bash
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-bug
# ou
git checkout -b docs/melhoria-documentacao
```

### 3. Faça suas Alterações

- Mantenha commits pequenos e focados
- Escreva mensagens de commit claras (veja [Conventional Commits](#mensagens-de-commit))
- Teste localmente antes de enviar

### 4. Execute os Testes/Validações

```bash
# Validação HTML
npx html-validate index.html

# Verificação de acessibilidade (opcional)
npx @axe-core/cli index.html
```

### 5. Envie o Pull Request

```bash
git push origin feature/nome-da-feature
```

Abra o PR no GitHub preenchendo o template.

---

## Configuração do Ambiente

### Pré-requisitos

- **Navegador moderno** (Chrome, Firefox, Safari, Edge)
- **Node.js 18+** (opcional, apenas para ferramentas de validação)
- **VS Code** (recomendado) com extensões:
  - Live Server
  - HTML CSS Support
  - Prettier

### Executando Localmente

```bash
# Opção 1: Abrir diretamente no navegador
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux

# Opção 2: Servidor local (recomendado para evitar CORS)
npx serve .
# ou
npx live-server
```

---

## Padrões de Código

### Estrutura do Projeto

```
assinatura-ufrrj/
├── index.html          # Aplicação completa (HTML + CSS + JS)
├── README.md           # Documentação principal
├── CONTRIBUTING.md     # Este arquivo
├── CHANGELOG.md        # Histórico de alterações
├── LICENSE             # Licença MIT
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml
│   │   └── feature_request.yml
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── dependabot.yml
└── docs/
    └── architecture.md  # Documentação técnica (futuro)
```

### HTML

- Use HTML5 semântico (`<main>`, `<section>`, `<fieldset>`, `<legend>`)
- Mantenha atributos `aria-*` para acessibilidade
- IDs em `kebab-case`: `in_nome`, `out_telefone`
- `lang="pt-BR"` no `<html>`

### CSS

- **Custom Properties** para cores e espaçamentos (`:root`)
- **Mobile-first** com media queries em `max-width`
- Nomes de classes em `kebab-case`: `.panel-header`, `.form-group`
- BEM-like para componentes: `.panel__title`, `.panel__description`
- Evite `!important`; use especificidade correta
- Unidades relativas (`rem`, `em`, `%`) preferidas sobre `px`

```css
/* Exemplo de custom properties */
:root {
  --azul-rural: #14387f;
  --verde-rural: #008237;
  --espacamento-base: 1rem;
}

/* Componente */
.panel {
  border-radius: var(--radius-lg);
}

.panel__title {
  font-weight: 900;
}
```

### JavaScript

- **Vanilla JS** (ES6+) — sem frameworks, sem build
- Funções nomeadas, não arrow functions no topo (melhor stack traces)
- `const` por padrão, `let` quando necessário, nunca `var`
- Nomes em `camelCase`: `updateSignature`, `montarEndereco`
- Comentários JSDoc para funções públicas
- Tratamento de erros com `try/catch` em operações de I/O (localStorage, FileReader)
- Prefira APIs modernas: `Clipboard API`, `FileReader`, `localStorage`

```javascript
/**
 * Atualiza a pré-visualização da assinatura com base nos campos do formulário.
 * Também persiste os dados no localStorage.
 * @returns {void}
 */
function updateSignature() {
  // ...
}
```

### Acessibilidade (a11y)

- Labels associados aos inputs (`for` + `id`)
- `aria-labelledby` em painéis
- `aria-live="polite"` em status dinâmicos
- Contraste mínimo 4.5:1 (WCAG AA)
- Navegação por teclado funcional
- `lang="pt-BR"` e atributos `lang` em trechos em inglês

### Performance

- CSS e JS inline (single file = 1 request)
- Fonte Lato via `preconnect` + `display=swap`
- Imagens com `width`/`height` explícitos (evita CLS)
- Sem dependências externas além de Google Fonts

---

## Processo de Pull Request

### Checklist do PR

- [ ] Título segue [Conventional Commits](#mensagens-de-commit)
- [ ] Descrição clara do que muda e por quê
- [ ] Testado localmente (preenchimento, cópia, export/import)
- [ ] Não quebra funcionalidades existentes
- [ ] Acessibilidade mantida/verificada
- [ ] CSS/JS válidos (sem erros no console)
- [ ] `CHANGELOG.md` atualizado (se aplicável)

### Mensagens de Commit

Use [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/):

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé opcional]
```

**Tipos:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação (CSS, espaçamento, sem mudança lógica)
- `refactor`: Refatoração de código
- `perf`: Melhoria de performance
- `test`: Testes
- `chore`: Manutenção (build, deps, configs)

**Exemplos:**
```
feat(campus): adiciona campus de Angra dos Reis
fix(whatsapp): corrige link wa.me para números com DDD
docs(readme): adiciona seção de contribuição
style(form): ajusta espaçamento em mobile
refactor(js): extrai função montarEndereco
```

### Revisão

- Mínimo **1 aprovação** de mantenedor
- CI deve passar (validação HTML, lint)
- Resolva todas as conversas antes do merge
- **Squash and merge** no `main`

---

## Relatando Bugs

Antes de abrir uma issue:

1. Verifique se já existe issue semelhante (aberta ou fechada)
2. Teste no [site de produção](https://ufrrj.netlify.app)
3. Reproduza em navegação anônima (evita cache/localStorage)

Use o template **Bug Report** (`.github/ISSUE_TEMPLATE/bug_report.yml`) com:

- **Passos para reproduzir** (mínimos, claros)
- **Comportamento esperado** vs **atual**
- **Navegador/OS** (ex.: Chrome 120 / Windows 11)
- **Screenshot** se visual
- **Console errors** (F12 → Console)

---

## Sugerindo Melhorias

Use o template **Feature Request** (`.github/ISSUE_TEMPLATE/feature_request.yml`):

- Descreva o **problema** que resolve (não apenas a solução)
- Explique o **caso de uso** real
- Considere impacto em: privacidade, performance, acessibilidade, manutenção
- Mockups/wireframes são bem-vindos para mudanças visuais

---

## Dúvidas?

- Abra uma **Discussion** no GitHub
- Consulte o [README](README.md) para uso básico
- Veja [CHANGELOG](CHANGELOG.md) para histórico

---

**Desenvolvido com ❤️ para a comunidade UFRRJ**