# Política de Segurança

## Versões Suportadas

| Versão | Suportada |
|--------|-----------|
| 1.x.x  | ✅ Sim    |
| < 1.0  | ❌ Não    |

## Reportando Vulnerabilidades

**Não abra issues públicas** para vulnerabilidades de segurança.

Envie um email para **security@ufrrj.br** (ou abra uma [Security Advisory privada](https://github.com/daniellopes22/assinatura-ufrrj/security/advisories/new)) com:

- Descrição da vulnerabilidade
- Passos para reproduzir
- Impacto potencial
- Sugestão de mitigação (se houver)

Responderemos em até **5 dias úteis**.

## Modelo de Ameaças

### O que este projeto **NÃO** faz:
- ❌ Não coleta, transmite ou armazena dados em servidores
- ❌ Não usa cookies de terceiros
- ❌ Não carrega scripts de domínios não confiáveis (apenas Google Fonts + logo UFRRJ)
- ❌ Não faz requisições de rede com dados do usuário
- ❌ Não usa `eval()`, `Function()`, `innerHTML` com dados não confiáveis

### O que este projeto **FAZ**:
- ✅ Armazena dados apenas no `localStorage` do navegador do usuário
- ✅ Exporta/importa dados via arquivo local `.json` (FileReader API)
- ✅ Copia para clipboard via Clipboard API (HTTPS) ou fallback `execCommand`
- ✅ Gera links `mailto:` e `tel:` e `wa.me:` baseados em entrada do usuário
- ✅ Carrega fonte Lato via Google Fonts (`preconnect`, `display=swap`)
- ✅ Carrega logo UFRRJ do domínio institucional (`institucional.ufrrj.br`)

## Superfície de Ataque

| Vetor | Risco | Mitigação |
|-------|-------|-----------|
| XSS via `innerHTML` na pré-visualização | Baixo | Dados escapados via `textContent`; apenas HTML da assinatura (controlado) é copiado |
| XSS via `localStorage` | Baixo | Dados só voltam para `value` de inputs (textContent), nunca para `innerHTML` |
| Injeção em link `wa.me` | Baixo | Sanitização: apenas dígitos mantidos; prefixo `55` adicionado se ≤11 dígitos |
| Injeção em `mailto:`/`tel:` | Baixo | Sanitização: apenas caracteres permitidos mantidos |
| Clickjacking | Baixo | `X-Frame-Options: SAMEORIGIN` via Netlify headers |
| MIME sniffing | Baixo | `X-Content-Type-Options: nosniff` via Netlify headers |
| Referrer leakage | Baixo | `Referrer-Policy: strict-origin-when-cross-origin` via Netlify headers |

## Headers de Segurança (Netlify)

Configurados automaticamente via `netlify.toml` (ou dashboard):

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "clipboard-read=(), clipboard-write=(self)"
    Content-Security-Policy = "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' https://institucional.ufrrj.br data:; connect-src 'self'; script-src 'self' 'unsafe-inline'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'"
```

> Nota: `'unsafe-inline'` é necessário para CSS/JS inline no arquivo único. Como não há build, esta é a abordagem pragmática.

## Dependências

**Zero dependências de runtime.** Apenas:
- Google Fonts (Lato) — CDN confiável, sem cookies, `preconnect`
- Logo UFRRJ — domínio institucional

Não há `package.json`, `node_modules`, supply chain risk.

## Boas Práticas para Contribuidores

1. **Nunca** adicione `innerHTML` com dados do usuário
2. **Sempre** use `textContent` ou `setAttribute` para valores dinâmicos
3. **Valide** entradas antes de gerar links (`mailto:`, `tel:`, `wa.me:`)
4. **Teste** em navegação anônima (localStorage isolado)
5. **Mantenha** o arquivo único — evita supply chain attacks

## Histórico de Incidentes

| Data | Severidade | Descrição | Resolução |
|------|------------|-----------|-----------|
| —    | —          | Nenhum incidente reportado | — |

---

**Contato de Segurança:** security@ufrrj.br  
**Chave PGP:** (adicionar se houver)