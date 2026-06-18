# Patinha Feliz – Clínica Veterinária & Petshop

Site institucional completo desenvolvido como Trabalho N3 da disciplina de Ferramentas Web e Ux. Engenharia de Software - Católica SC

---

## 1. Escopo Fechado

### Objetivo do site
Apresentar os serviços da clínica veterinária e petshop **Patinha Feliz**, permitindo que tutores de animais conheçam a equipe, os serviços disponíveis e entrem em contato para agendamento de consultas e outros atendimentos.

### Público-alvo
Tutores de animais de estimação (cães e gatos principalmente) residentes em Jaraguá do Sul e região, com perfil variado: jovens adultos e famílias que buscam atendimento veterinário de qualidade e de confiança.

### Paleta de cores

| Cor | Hex | Justificativa |
|-----|-----|---------------|
| Verde escuro | `#1B5E42` | Transmite confiança, saúde e profissionalismo — referência à natureza e ao bem-estar animal |
| Verde médio | `#2D8A60` | Cor de destaque e interação, reforça a identidade verde sem pesar |
| Verde claro / menta | `#A8D5B5` | Bordas e elementos suaves, transmite leveza e cuidado |
| Fundo menta | `#EDF7F1` | Background de seções alternadas, mantém o visual arejado |
| Terracota | `#C95F3A` | Cor de ação (CTA, alertas) — cria contraste quente com o verde, guia o olhar do usuário |
| Branco quente | `#FFFFFF` | Fundo principal, garante legibilidade e limpeza visual |
| Cinza texto | `#4A4A4A` | Texto corrido — contraste adequado sem o peso do preto puro |

**Psicologia das cores aplicada:** o verde foi escolhido por sua associação universal com saúde, natureza e segurança — essencial para uma clínica veterinária. O terracota como cor de ação cria urgência e calor sem ser agressivo, diferenciando-se do padrão vermelho que pode causar desconforto.

### Tipografia

| Papel | Fonte | Justificativa |
|-------|-------|---------------|
| Display / Títulos | Playfair Display (serif) | Autoridade e confiança; serif humanista que transmite tradição e cuidado |
| Corpo e UI | Inter (sans-serif) | Alta legibilidade em todas as tamanhos; moderna e neutra sem ser fria |

A combinação serif + sans-serif é clássica em marcas de saúde premium: o serif comunica expertise, o sans-serif garante leitura confortável em interfaces digitais.

### Framework
**Nenhum framework foi utilizado.** O projeto foi desenvolvido inteiramente com HTML5, CSS3 e JavaScript vanilla, demonstrando domínio completo das tecnologias base sem dependências externas.

---

## 2. Detalhamento do Site

### Estrutura de páginas

```
patinha-feliz/
├── index.html          → Home
├── pages/
│   ├── sobre.html      → Sobre nós
│   ├── servicos.html   → Serviços
│   └── contato.html    → Contato / Agendamento
├── css/
│   └── style.css       → Folha de estilos principal
└── js/
    └── main.js         → JavaScript principal
```

### Conteúdo por página

#### 🏠 Home (`index.html`)
- **Hero** com headline, subtítulo, dois CTAs e animação de flutuação
- **Estatísticas rápidas** (pets atendidos, anos de experiência, número de vets)
- **Preview de 4 serviços** em grid responsivo com cards
- **Seção "Por que nos escolher"** com 4 diferenciais
- **Depoimentos** de 3 clientes (blockquotes semânticos)
- **CTA final** em seção de destaque terracota

#### Sobre (`pages/sobre.html`)
- **Hero** com título e subtítulo
- **História da clínica** em layout de duas colunas (texto + visual)
- **Grid de 6 valores** institucionais (cards com ícone + texto)
- **Equipe veterinária** (5 cards com avatar, nome, especialidade e CRMV)
- **Números em destaque** (estatísticas institucionais)
- **CTA de encerramento**

#### Serviços (`pages/servicos.html`)
- **Hero** com título e descrição
- **Sistema de Tabs por categoria** (Todos / Clínica / Estética / Preventivo / Cirurgia) com filtragem via JavaScript
- **9 cards de serviços** com: ícone, título, descrição, lista de inclusões, preço e botão de agendamento
- **FAQ em Accordion** (6 perguntas usando `<details>`/`<summary>`)
- **CTA de encerramento**

#### Contato (`pages/contato.html`)
- **Hero** com título e subtítulo
- **Layout de 2 colunas**: informações de contato + formulário
  - Coluna esquerda: telefone, e-mail, endereço, tabela de horários e mapa placeholder
  - Coluna direita: formulário completo de agendamento
- **Formulário validado** com 6 campos: nome, e-mail, telefone (com máscara), nome do pet, serviço (select) e mensagem
- **Validações em tempo real**: regex de e-mail, regex de telefone, mínimo de caracteres, campo obrigatório
- **Feedback visual**: estados `valid`/`invalid` nos inputs, mensagens de erro inline, toast de sucesso
- **Seção "Como chegar"** com 3 cards de transporte

### Arquitetura da Informação
A navegação segue hierarquia clara: **Home → Sobre → Serviços → Contato**, sempre com link de retorno disponível no header fixo e no footer. O usuário nunca fica "preso" em uma página — todas as páginas contêm pelo menos um CTA que leva à próxima etapa natural do funil (conhecer → confiar → contratar).

---

## 3. Requisitos Atendidos

| Requisito | Como foi implementado |
|-----------|----------------------|
| **Mín. 4 páginas interligadas** | Home, Sobre, Serviços e Contato |
| **HTML5 semântico** | Uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<address>`, `<blockquote>`, `<details>`/`<summary>` |
| **Acessibilidade** | Skip link, `aria-label`, `aria-expanded`, `aria-required`, `aria-describedby`, `aria-live`, `role`, foco visível, contraste adequado, `prefers-reduced-motion` |
| **CSS Mobile First** | Media queries `max-width: 900px` e `max-width: 640px`; layout com CSS Grid e `min()`, `clamp()` |
| **Responsividade** | Grid quebra em coluna única no mobile; hamburger menu; tipografia fluida com `clamp()` |
| **Psicologia das Cores** | Paleta verde (saúde/confiança) + terracota (CTA/ação) documentada e aplicada |
| **Tipografia** | Par Playfair Display + Inter; escala de tipos definida; contraste texto/fundo |
| **Padrão F de leitura** | Hero com info mais importante à esquerda/topo; cards com ícone → título → corpo |
| **Heurísticas de Nielsen** | Prevenção de erros (validação antes do envio), Feedback (toast de sucesso, estados de campo), Consistência (design system único), Liberdade do usuário (formulário pode ser limpo) |
| **Formulários com validação JS** | Regex e-mail, regex telefone, mínimo de caracteres, campos obrigatórios, mensagens de erro inline |
| **Interatividade DOM** | Menu hamburguer, tabs de filtragem de serviços, accordion FAQ, máscara de telefone, scroll reveal, toast notification |
| **Sem banco de dados** | Envio do formulário exibe toast de sucesso sem backend |

---

## 4. Integrantes e Contribuições

| Integrante | O que desenvolveu |
|------------|-------------------|
| **[Nome 1]** | Estrutura HTML de todas as páginas, semântica e acessibilidade |
| **[Nome 2]** | CSS completo: design system, variáveis, layout, responsividade |
| **[Nome 3]** | JavaScript: validação de formulário, máscara de telefone, tabs |
| **[Nome 4]** | JavaScript: menu hamburguer, scroll reveal, toast notification |
| **[Nome 5]** | Conteúdo editorial, README, QA e testes de responsividade |

> **Nota:** Substitua os nomes pelos integrantes reais do grupo antes da entrega.

---

## 5. Como visualizar o projeto

1. Faça o download ou clone o repositório
2. Abra o arquivo `index.html` diretamente no navegador
3. Nenhuma configuração de servidor ou instalação de dependências é necessária

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/patinha-feliz.git

# Abra no navegador
open index.html   # macOS
start index.html  # Windows
```

*Trabalho N3 – Desenvolvimento Web | 2026*
