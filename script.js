// Aguarda o carregamento total do HTML antes de rodar as lógicas do site
document.addEventListener("DOMContentLoaded", function () {

    // Inicializa a biblioteca de ícones do Lucide
    lucide.createIcons();

    // ==========================================================================
    // 1. GERENCIAMENTO DA BARRA DE NAVEGAÇÃO AO ROLAR (HEADER DINÂMICO)
    // ==========================================================================
    const menuPrincipal = document.getElementById("menu-principal");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            menuPrincipal.classList.add("rolado");
        } else {
            menuPrincipal.classList.remove("rolado");
        }
    });
    // FIM DO HEADER DINÂMICO

    // ==========================================================================
    // 2. SISTEMA DE SCROLLSPY (DESTACAR O LINK DO MENU BASEADO NA SEÇÃO ATUAL)
    // ==========================================================================
    const linksMenu = document.querySelectorAll(".link-menu");
    const secoes = document.querySelectorAll("main[id], section[id]");

    window.addEventListener("scroll", function () {
        let secaoAtualId = "";
        const topoJanela = window.scrollY + 120; // Ajuste por conta da barra fixa do topo

        secoes.forEach((secao) => {
            const topoSecao = secao.offsetTop;
            const alturaSecao = secao.offsetHeight;

            if (topoJanela >= topoSecao && topoJanela < topoSecao + alturaSecao) {
                secaoAtualId = secao.getAttribute("id");
            }
        });

        linksMenu.forEach((link) => {
            link.classList.remove("ativo");
            if (link.getAttribute("href") === `#${secaoAtualId}`) {
                link.classList.add("ativo");
            }
        });
    });
    // FIM DO SCROLLSPY

    // ==========================================================================
    // 3. LÓGICA DO FILTRO E CARROSSEL DA GALERIA (TOTALMENTE CORRIGIDO / SEM CORTE)
    // ==========================================================================
    const botoes = document.querySelectorAll(".botao-filtro");
    const itensGaleria = document.querySelectorAll(".item-trabalho");
    const slider = document.getElementById("grade-slider");
    const setaEsq = document.getElementById("seta-esq");
    const setaDir = document.getElementById("seta-dir");

    let posicaoAtual = 0;

    function resetarPosicao() {
        posicaoAtual = 0;
        slider.style.transform = `translateX(0px)`;
    }

    // Mostra ou esconde as setas dependendo se as fotos do filtro atual cabem todas na tela de uma vez
    function atualizarVisibilidadeSetas() {
        const itensVisiveis = Array.from(itensGaleria).filter(item => !item.classList.contains("esconder"));

        if (itensVisiveis.length === 0) {
            setaEsq.classList.add("ocultar-seta");
            setaDir.classList.add("ocultar-seta");
            return;
        }

        const larguraItem = itensVisiveis[0].getBoundingClientRect().width;
        const gap = 20;
        const deslocamento = larguraItem + gap;
        const larguraVisivel = slider.parentElement.clientWidth;
        const itensPorTela = Math.max(1, Math.round(larguraVisivel / deslocamento));

        if (itensVisiveis.length <= itensPorTela) {
            // Todas as fotos já cabem na tela: não precisa de seta
            setaEsq.classList.add("ocultar-seta");
            setaDir.classList.add("ocultar-seta");
        } else {
            // Sobram fotos fora da tela: mostra as setas para navegar
            setaEsq.classList.remove("ocultar-seta");
            setaDir.classList.remove("ocultar-seta");
        }
    }
    setaDir.addEventListener("click", () => {
        const itensVisiveis = Array.from(itensGaleria).filter(item => !item.classList.contains("esconder"));
        if (itensVisiveis.length === 0) return;

        const larguraItem = itensVisiveis[0].getBoundingClientRect().width;
        const gap = 20; // O espaçamento exato definido no CSS
        const deslocamento = larguraItem + gap;

        // Calcula quantos itens cabem na tela no momento (em vez de fixar em 3),
        // assim funciona certo em monitor grande, notebook, tablet ou celular
        const larguraVisivel = slider.parentElement.clientWidth;
        const itensPorTela = Math.max(1, Math.round(larguraVisivel / deslocamento));
        const limiteMaximo = Math.max(0, (itensVisiveis.length - itensPorTela) * deslocamento);

        if (Math.abs(posicaoAtual) < limiteMaximo) {
            posicaoAtual -= deslocamento;
            slider.style.transform = `translateX(${posicaoAtual}px)`;
        }
    });

    // Ação da Seta Esquerda (Garante retorno perfeito ao ponto 0)
    setaEsq.addEventListener("click", () => {
        const itensVisiveis = Array.from(itensGaleria).filter(item => !item.classList.contains("esconder"));
        if (itensVisiveis.length === 0) return;

        const larguraItem = itensVisiveis[0].getBoundingClientRect().width;
        const gap = 20;
        const deslocamento = larguraItem + gap;

        if (posicaoAtual < 0) {
            posicaoAtual += deslocamento;

            // Trava de segurança: se chegar perto de zero, zera completamente para não cortar
            if (posicaoAtual > -5) {
                posicaoAtual = 0;
            }
            slider.style.transform = `translateX(${posicaoAtual}px)`;
        }
    });

    // Lógica do Clique nos Botões de Filtro
    botoes.forEach((botao) => {
        botao.addEventListener("click", function () {
            botoes.forEach(b => b.classList.remove("ativo"));
            botao.classList.add("ativo");

            const categoriaSelecionada = botao.getAttribute("data-filter");
            resetarPosicao();

            // Mostra ou esconde as setas de acordo com quantas fotos cabem na tela
            atualizarVisibilidadeSetas();

            // Aplica o filtro ocultando as categorias não selecionadas
            itensGaleria.forEach((item) => {
                const categoriaItem = item.getAttribute("data-category");

                if (categoriaSelecionada === "todos") {
                    item.classList.remove("esconder");
                } else {
                    if (categoriaItem === categoriaSelecionada) {
                        item.classList.remove("esconder");
                    } else {
                        item.classList.add("esconder");
                    }
                }
            });
        });
    });
    // Define o estado inicial das setas ao carregar a página
    atualizarVisibilidadeSetas();

    // Reavalia quando o usuário girar o celular ou redimensionar a janela
    window.addEventListener("resize", atualizarVisibilidadeSetas);
    // FIM DO FILTRO E CARROSSEL DA GALERIA

    // ==========================================================================
    // 4. ANIMAÇÃO SUAVE DE SURGIMENTO AO ROLAR A TELA (APARECER DEVAGAR)
    // ==========================================================================
    const elementosAnimar = document.querySelectorAll('.animar-scroll');

    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');
                observador.unobserve(entrada.target); // Para de observar após animar uma vez
            }
        });
    }, {
        threshold: 0.15, // Ativa quando 15% do elemento aparece na tela
        rootMargin: "0px 0px -50px 0px" // Dispara um pouco antes do elemento chegar totalmente
    });

    elementosAnimar.forEach(elemento => {
        observador.observe(elemento);
    });
    // FIM DA ANIMAÇÃO DE SURGIMENTO AO ROLAR

    // ==========================================================================
    // 5. MENU MOBILE (ABRIR/FECHAR PAINEL LATERAL)
    // ==========================================================================
    const botaoMenuMobile = document.getElementById("botao-menu-mobile");
    const grupoDeLinks = document.getElementById("grupo-de-links");
    const overlayMenu = document.getElementById("overlay-menu-mobile");
    const botaoFecharMenu = document.getElementById("botao-fechar-menu");

    function alternarMenuMobile() {
        grupoDeLinks.classList.toggle("menu-aberto");
        botaoMenuMobile.classList.toggle("menu-ativo");
        overlayMenu.classList.toggle("ativo");
    }

    function fecharMenuMobile() {
        grupoDeLinks.classList.remove("menu-aberto");
        botaoMenuMobile.classList.remove("menu-ativo");
        overlayMenu.classList.remove("ativo");
    }

    botaoMenuMobile.addEventListener("click", alternarMenuMobile);

    // Clicar fora (no fundo escurecido) fecha o menu
    overlayMenu.addEventListener("click", fecharMenuMobile);

    // Clicar no X fecha o menu
    botaoFecharMenu.addEventListener("click", fecharMenuMobile);

    // Fecha o menu automaticamente ao clicar em qualquer link dele
    grupoDeLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", fecharMenuMobile);
    });
    // FIM DO MENU MOBILE

});