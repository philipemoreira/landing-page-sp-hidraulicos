# NovaHidráulica — Landing Page de Portfólio

Landing page de exemplo para o nicho de manutenção hidráulica industrial, usada como
peça de portfólio para apresentar a clientes reais. **É um projeto de demonstração —
o nome, a marca e os dados de contato são fictícios/do desenvolvedor, sem vínculo com
nenhuma empresa real.**

## Estrutura do projeto

```
novahidraulica/
├── index.html      # Estrutura da página
├── style.css        # Estilos e responsividade (desktop, tablet e mobile)
├── script.js         # Menu mobile, scrollspy, carrossel do portfólio, animações de scroll
└── Imagens/          # Apenas os logos reais de fornecedores (marcas de mercado)
```

## Sobre as imagens

Fotos de portfólio, posts de Instagram e a foto interna da oficina foram substituídas
por placeholders estilizados (ícone + legenda) diretamente no HTML/CSS — não é
necessário nenhuma foto para o site funcionar e ficar visualmente completo. Quando
houver fotos reais de projetos, é só trocar o bloco `item-trabalho-placeholder`
correspondente por uma tag `<img>`. As logos em `Imagens/Fornecedores/` são marcas
reais do setor (Aeroquip, Danfoss, Eaton etc.), usadas apenas como referência de
compatibilidade de peças — isso pode ficar como está.

## Como publicar com GitHub Pages (hospedagem gratuita)

1. Crie um repositório novo no GitHub (pode ser público).
2. Envie estes arquivos (e a pasta `Imagens/`) para o repositório.
3. Vá em **Settings → Pages**.
4. Em "Branch", selecione `main` (ou `master`) e a pasta `/root`, depois clique em **Save**.
5. Em alguns minutos o GitHub gera um link público, algo como:
   `https://xf1lps.github.io/landing-page-sp-hidraulicos/`

## Contato do site

Os botões "Fale Conosco" / "Solicitar Orçamento" e os links de redes sociais no
rodapé apontam para o WhatsApp e Instagram do desenvolvedor (Philipe) — assim,
quem visitar essa peça de portfólio e clicar cai direto em contato com você.

## Tecnologias

- HTML5, CSS3 e JavaScript puro (sem frameworks)
- Ícones: [Lucide Icons](https://lucide.dev/)
