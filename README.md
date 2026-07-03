# SP Hidráulicos

Site institucional da SP Hidráulicos — manutenção preventiva e corretiva de sistemas hidráulicos industriais em Cianorte/PR.

## Estrutura do projeto

```
sp-hidraulicos/
├── index.html      # Estrutura da página
├── style.css        # Estilos e responsividade (desktop, tablet e mobile)
├── script.js         # Menu mobile, scrollspy, carrossel do portfólio, animações de scroll
└── Imagens/          # Pasta de imagens (adicionar manualmente — não está neste pacote)
```

## Importante: pasta de Imagens

Este pacote contém apenas o código (HTML/CSS/JS). As imagens referenciadas no site
(logo, fotos do portfólio, posts do Instagram, logos dos fornecedores) precisam ser
adicionadas manualmente dentro de uma pasta chamada `Imagens/` na raiz do repositório,
mantendo os mesmos nomes de arquivo já usados no `index.html` (ex: `Imagens/logo-sp.png`,
`Imagens/Portfolio 1.jpg`, `Imagens/Fornecedores/vickers.png`, etc.).

## Como publicar com GitHub Pages (hospedagem gratuita)

1. Crie um repositório novo no GitHub (pode ser público).
2. Envie estes arquivos (e a pasta `Imagens/`) para o repositório.
3. Vá em **Settings → Pages**.
4. Em "Branch", selecione `main` (ou `master`) e a pasta `/root`, depois clique em **Save**.
5. Em alguns minutos o GitHub gera um link público, algo como:
   `https://seu-usuario.github.io/sp-hidraulicos/`

## Tecnologias

- HTML5, CSS3 e JavaScript puro (sem frameworks)
- Ícones: [Lucide Icons](https://lucide.dev/)
