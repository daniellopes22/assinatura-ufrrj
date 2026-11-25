# Pull Request

## Descrição

<!-- Descreva claramente o que este PR faz e por quê -->

## Tipo de Mudança

<!-- Marque com `x` o que se aplica -->

- [ ] 🐛 Bug fix (mudança que corrige um problema)
- [ ] ✨ Nova funcionalidade (mudança que adiciona funcionalidade)
- [ ] 📝 Documentação (README, CONTRIBUTING, CHANGELOG, comentários)
- [ ] 🎨 Style (formatação CSS, espaçamento, sem mudança lógica)
- [ ] ♻️ Refactor (reestruturação de código sem mudança de comportamento)
- [ ] ⚡ Performance (melhoria de velocidade/tamanho)
- [ ] 🧪 Testes (adição/atualização de testes)
- [ ] 🔧 Chore (build, configs, dependências, manutenção)

## Checklist

<!-- Marque com `x` quando concluído -->

- [ ] Título segue [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) (`feat:`, `fix:`, `docs:`, etc.)
- [ ] Código testado localmente (preenchimento, cópia, export/import, responsividade)
- [ ] Não quebra funcionalidades existentes
- [ ] Acessibilidade mantida (labels, ARIA, contraste, teclado)
- [ ] Console limpo (sem erros/warnings novos)
- [ ] `CHANGELOG.md` atualizado na seção `[Unreleased]` (se aplicável)
- [ ] Documentação atualizada (README, CONTRIBUTING, comentários no código)
- [ ] Commits organizados (squashados se necessário)

## Testes Realizados

<!-- Descreva como você testou -->

### Cenários Testados

- [ ] Preenchimento completo (todos os campos)
- [ ] Preenchimento mínimo (apenas Nome + Cargo)
- [ ] Seleção de todos os campi
- [ ] Seleção de conselhos (listados + "Outro")
- [ ] Máscara de telefone (fixo e celular)
- [ ] Link WhatsApp (wa.me) gerado corretamente
- [ ] Cópia da assinatura (HTML + texto)
- [ ] Colagem no Gmail (verificar formatação)
- [ ] Exportar → Importar JSON (round-trip)
- [ ] Limpar dados salvos
- [ ] Responsividade: desktop (≥860px), tablet, mobile (≤560px)
- [ ] Navegação por teclado (Tab, Enter, Space)
- [ ] Leitor de tela (NVDA/VoiceOver - opcional)

### Navegadores Testados

- [ ] Chrome (versão)
- [ ] Firefox (versão)
- [ ] Safari (versão)
- [ ] Edge (versão)
- [ ] Mobile Chrome
- [ ] Mobile Safari

## Screenshots/GIFs

<!-- Para mudanças visuais, adicione antes/depois -->

| Antes | Depois |
|-------|--------|
| ![antes](url) | ![depois](url) |

## Impacto

<!-- Marque o que se aplica -->

- [ ] **Privacidade**: Nenhum dado sai do navegador (mantido)
- [ ] **Performance**: Tamanho do HTML alterado em ~X KB
- [ ] **Acessibilidade**: Melhoria / Mantido / Revisar
- [ ] **Compatibilidade**: Gmail / Outlook / Apple Mail / Thunderbird
- [ ] **Breaking change**: Formato JSON de export/import alterado

## Issues Relacionadas

<!-- Link para issues que este PR resolve/relaciona -->

Closes #<número>
Relates to #<número>

## Notas para Revisores

<!-- Pontos de atenção, decisões de design, trade-offs -->

---

**Para mantenedores:** Use "Squash and merge" no merge final.