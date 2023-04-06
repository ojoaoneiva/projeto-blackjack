/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Boas vindas ao jogo de BlackJack!")

while (confirm("Quer iniciar uma nova rodada?") === true) {

   let i = 0
   let cartasUsuario = []
   while (i !== 1) {
      cartasUsuario.push(comprarCarta())
      cartasUsuario.push(comprarCarta())
      if (cartasUsuario[0].valor + cartasUsuario[1].valor !== 22) {
         i = 1
      }
      else { cartasUsuario = []}
   }

   let j = 0
   let cartasComputador = []
   while (j !== 1) {
      cartasComputador.push(comprarCarta())
      cartasComputador.push(comprarCarta())
      if (cartasComputador[0].valor + cartasComputador[1].valor !== 22) {
         j = 1
      }
      else { cartasComputador = []}
   }

   // Função para ler as cartas
   function lerCartas(cartas) {
      const textoCartas = []
      for (let carta of cartas) {
         textoCartas.push(carta.texto)
      }
      return textoCartas.join(" ")
   }

   // Função para soma as cartas
   function somaCartas(cartas) {
      let soma = 0
      for (let carta of cartas) {
         soma = soma + carta.valor
      }
      return soma
   }


   while ((somaCartas(cartasUsuario) < 21) && (confirm(`Suas cartas são ${lerCartas(cartasUsuario)}. A carta revelada do computador é ${cartasComputador[0].texto}. Deseja comprar mais uma carta?`) === true)) {
      cartasUsuario.push(comprarCarta())
   }

   while ((somaCartas(cartasUsuario) <= 21) && (somaCartas(cartasComputador) <= somaCartas(cartasUsuario))) {
      cartasComputador.push(comprarCarta())
   }

   let resultado
   if (somaCartas(cartasUsuario) > 21 && somaCartas(cartasComputador) > 21) {
      resultado = "Empate! Os dois perderam"
   }
   else if ((somaCartas(cartasUsuario) === somaCartas(cartasComputador))) {
      resultado = "Empate!"
   }
   else if ((somaCartas(cartasComputador) > somaCartas(cartasUsuario) && somaCartas(cartasComputador) <= 21) || somaCartas(cartasUsuario) > 21) {
      resultado = "O computador ganhou!"
   }
   else { resultado = "O usuário ganhou!" }

   alert(`Suas cartas são ${lerCartas(cartasUsuario)}. Sua pontuação é ${somaCartas(cartasUsuario)}. \nAs cartas do computador são ${lerCartas(cartasComputador)}. A pontuação do computador é ${somaCartas(cartasComputador)}. \n${resultado}`)

}
alert("O jogo acabou")