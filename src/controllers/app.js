
class app {

  static requisicao() {

    fetch('https://m2-kenzie-shop.herokuapp.com/products')
      .then(response => response.json())
      .then((data) => {
        const { products } = data
        const vitrine = document.querySelector('.vitrine')
        products.forEach((prod) => {

          const div = document.createElement('DIV')
          div.classList.add('produto')
          let valorProduto = ''
          if (prod.promotionStatus === true) {
            valorProduto = `  <h4>De R$${prod.price.productPrice.toFixed(2)}</h4>
                              <h2>Por${prod.price.productPromotionPrice.toFixed(2)}</h2>`

          } else {
            valorProduto = `<h2>R$${prod.price.productPrice.toFixed(2)}</h2>`
          }

          
          //this.criaEstrelas(prod.reviews)
          

          div.innerHTML = `
        <img src="https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${prod.id}/Image.png" alt="" id="imagem-produto">
        <span>
        ${this.criaEstrelas(prod.reviews)}
        </span>
        <p>${prod.productName}</p>
        ${valorProduto}
        <button>COMPRAR</button>
        `
          vitrine.appendChild(div)
        })
        
      })

  }
  static criaEstrelas(reviews) {
    const estrelas = [
      '<img src="src/img/estrelaVazia.png" alt="">',
      '<img src="src/img/estrelaVazia.png" alt="">',
     '<img src="src/img/estrelaVazia.png" alt="">',
      '<img src="src/img/estrelaVazia.png" alt="">',
       '<img src="src/img/estrelaVazia.png" alt="">',]
    
     for (let i = 0; i < reviews; i++){
      estrelas[i] = '<img src="src/img/estrelaCheia.png" alt="">' 
    } 
    
    return estrelas.join('').replace(/','/g, "red")
  }

}
app.requisicao()
