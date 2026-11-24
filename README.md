# Gerador de assinatura institucional — UFRRJ

Ferramenta web para servidores da **Universidade Federal Rural do Rio de Janeiro (UFRRJ)** gerarem uma assinatura de e-mail padronizada e copiá-la diretamente para o Gmail.

🔗 **Acesse:** [ufrrj.netlify.app](https://ufrrj.netlify.app)

## Funcionalidades

- **Pré-visualização em tempo real**: a assinatura é atualizada enquanto você digita.
- **Dados funcionais**: nome, cargo, função (opcional) e estrutura hierárquica da unidade (Pró-Reitoria/Instituto, Departamento, Coordenadoria/Divisão e Seção/Setor/Núcleo).
- **Conselho de classe**: lista com os principais conselhos profissionais (CRA, CREA, CRM, OAB, CRMV etc.), UF e número de registro, além da opção "Outro".
- **Endereço por campus**: ao selecionar o campus (Seropédica, Nova Iguaçu, Três Rios, Campos dos Goytacazes ou CPDA), o logradouro e a cidade/UF são preenchidos automaticamente. É possível complementar com prédio, andar e sala.
- **Contato**: telefone com máscara automática, ramal e WhatsApp (gera um link `wa.me` para contato direto).
- **Redes sociais oficiais**: opção de incluir os canais institucionais da Universidade (Facebook, Instagram, YouTube e LinkedIn).
- **Cópia formatada**: um clique copia a assinatura com a formatação pronta para colar no Gmail, com um guia passo a passo na própria página.
- **Privacidade**: os dados ficam salvos apenas no navegador (`localStorage`), para que o formulário venha preenchido na próxima visita. Nada é enviado a nenhum servidor.
- **Exportar/Importar**: os dados podem ser exportados e importados em um arquivo `.json`, facilitando o uso em outro computador ou navegador.

## Como usar

1. Acesse [ufrrj.netlify.app](https://ufrrj.netlify.app) e preencha seus dados funcionais.
2. Confira o resultado na área de pré-visualização.
3. Clique em **"Copiar assinatura formatada"**.
4. No Gmail, abra **Configurações (engrenagem) → Ver todas as configurações**.
5. Na aba **Geral**, role até a seção **Assinatura** e cole o conteúdo (Ctrl+V).
6. Role até o final da página e clique em **Salvar alterações**.

Mais detalhes na [Central de Ajuda do Gmail](https://support.google.com/mail/answer/8395?hl=pt-BR).

## Tecnologias

O projeto é uma página estática em um único arquivo (`index.html`), feita com HTML, CSS e JavaScript puro — sem frameworks, dependências ou etapa de build. A fonte Lato é carregada via Google Fonts.

```
.
├── index.html   # Página completa (estrutura, estilos e scripts)
└── README.md
```

## Executando localmente

Basta clonar o repositório e abrir o arquivo `index.html` no navegador:

```bash
git clone https://github.com/daniellopes22/assinatura-ufrrj.git
cd assinatura-ufrrj
```

Se preferir servir a página por um servidor local:

```bash
npx serve .
```

## Deploy

O site é hospedado na [Netlify](https://www.netlify.com) e publicado automaticamente a cada alteração na branch `main` do GitHub.

## Contribuindo

Sugestões e correções são bem-vindas! Abra uma *issue* ou envie um *pull request* com a sua proposta.
