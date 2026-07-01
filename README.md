# Patinha Feliz

Site institucional da **Patinha Feliz**, clínica veterinária e petshop fictícia localizada em Jaraguá do Sul/SC, desenvolvido como projeto acadêmico da disciplina de **Ferramentas Web e UX**.

## Sobre o projeto

O site apresenta a clínica, seus serviços e equipe, além de um formulário de contato/agendamento com validação completa em JavaScript. O projeto foi construído com **HTML5, CSS3 e JavaScript puro (vanilla)**, sem frameworks, com foco em:

- Design responsivo (mobile-first)
- Acessibilidade (uso de `aria-*`, `role`, skip link, foco visível)
- Boas práticas de UX (feedback visual, validação em tempo real, máscara de telefone)
- Identidade visual consistente entre as páginas 
 
## Estrutura de arquivos

```
patinha-feliz/
├── index.html        # Página inicial (Home)
├── sobre.html         # História, valores e equipe da clínica
├── servicos.html       # Catálogo de serviços com filtro por categoria e FAQ
├── contato.html        # Informações de contato e formulário de agendamento
├── style.css          # Estilos globais (design system, layout, responsividade)
├── main.js           # Interações: menu, tabs, validação de formulário, etc.
└── README.md
```

## Páginas

| Página | Descrição |
|---|---|
| **Home** (`index.html`) | Hero de apresentação, diferenciais da clínica, preview de serviços, depoimentos e chamada para ação. |
| **Sobre** (`sobre.html`) | História da clínica, valores, equipe veterinária e números (pets atendidos, satisfação, etc.). |
| **Serviços** (`servicos.html`) | Catálogo completo de serviços com filtro por categoria (tabs) e seção de perguntas frequentes (FAQ). |
| **Contato** (`contato.html`) | Informações de contato, horário de atendimento, mapa ilustrativo e formulário de agendamento com validação. |

## Funcionalidades

- **Menu responsivo** com hambúrguer para telas pequenas (`main.js`)
- **Marcação automática do link ativo** no menu conforme a página atual
- **Tabs de filtro** na página de Serviços (Clínica, Estética, Preventivo, Cirurgia)
- **FAQ em acordeão** (`<details>`/`<summary>`)
- **Formulário de contato** com:
  - Validação em tempo real (blur) por campo
  - Mensagens de erro e sucesso acessíveis (`aria-live`)
  - Máscara automática de telefone
  - Notificação *toast* de confirmação ao enviar
- **Scroll reveal** suave dos cards via `IntersectionObserver`
- Suporte a `prefers-reduced-motion` para usuários sensíveis a animações

## Design

- **Tipografia:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (títulos) + [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (corpo de texto), via Google Fonts
- **Paleta de cores:** índigo (confiança clínica), mel (calor humano/ação) e coral (empatia), definidas em variáveis CSS (`:root`) no `style.css`
- Sistema de componentes reutilizáveis: `.card`, `.badge`, `.btn`, `.section`, etc.

## Como executar localmente

Como o projeto não depende de back-end nem de build, basta:

1. Baixar/clonar os arquivos do projeto
2. Abrir o arquivo `index.html` diretamente no navegador

   ou, para evitar problemas de CORS/cache, servir com um servidor local simples:

   ```bash
   # Python 3
   python -m http.server 8000

   # ou com Node.js
   npx serve .
   ```

3. Acessar `http://localhost:8000` no navegador

## Acessibilidade

- Skip link (`Pular para o conteúdo principal`)
- Atributos `aria-label`, `aria-required`, `aria-describedby` e `aria-live` no formulário
- Navegação por teclado com `:focus-visible`
- Estrutura semântica (`header`, `main`, `nav`, `footer`, `address`)

## Autores

Projeto desenvolvido por:

- **Rafael Rodrigues Antonio**
- **Lorenzo Makdesi Pereira Ribeiro**
- **Arthur Andrade**

**Disciplina:** Ferramentas Web e UX — Engenharia de Software
**Instituição:** Católica SC — Jaraguá do Sul

## Licença

Projeto desenvolvido para fins acadêmicos. Conteúdo fictício, sem fins comerciais.
