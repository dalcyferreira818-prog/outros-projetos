const titulo = document.querySelector('h1');
titulo.innerHTML = 'Cajupary - Anos 60.<br>Ontem, hoje e sempre!';
titulo.style.fontSize = '80px';


const paragrafo = document.querySelector('p');
paragrafo.innerText = 'Onde a tranquilidade é apreciada e um povo forte constrói histórias.';
paragrafo.style.fontSize = '25px'

document.body.style.paddingTop = '100px';

const paragrafos = document.querySelectorAll('p');
paragrafos.innerText = 'seu texto';

const paragrafoFinal = document.getElementById('paragrafo-final');

// Para alterar apenas o texto:
paragrafoFinal.innerText = 'Sem energia elétrica, a vida era simples, mas feita de trabalho, união e conhecimento. O sustento vinha da pesca, da plantação e da mandioca';

// Ou para mudar o tamanho da fonte, por exemplo:
paragrafoFinal.style.fontSize = '20px';


// 1. Aumenta o texto da mandioca
const textoMandioca = document.getElementById('texto-mandioca');
textoMandioca.style.fontSize = '22px';

// 2. Aumenta e alinha o bloco do link (centralizado embaixo)
const blocoLink = document.getElementById('bloco-link');
blocoLink.style.fontSize = '22px';
blocoLink.style.textAlign = 'center';

// 3. Muda o texto do link
const link = document.getElementById('link-conclusao');
link.innerText = 'Acesse aqui';


