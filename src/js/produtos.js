var carrinho = [];
var count = 0;
document.addEventListener('DOMContentLoaded', function () {

    const products = [
        {
            id: 1,
            name: 'Adesivo Trevo de 4 Folhas',
            image: 'src/img/img1.jpg',
            price: 6,
            description: 'Belo adesivo de dois Trevos de 4 Folhas em aquarela para trazer Sorte'
        },
        {
            id: 2,
            name: 'Adesivo Beija-flor',
            image: 'src/img/img2.jpg',
            price: 6.5,
            description: 'Belo adesivo de Beija-Flor em aquarela para trazer Alegria'
        },
        {
            id: 3,
            name: 'Adesivo Aquaplant',
            image: 'src/img/img3.jpg',
            price: 7,
            description: 'Belo adesivo da fusão entre uma Agua Viva e lindas Plantinhas em aquarela para trazer Serenidade'
        },
        {
            id: 4,
            name: 'Adesivo Mariposa',
            image: 'src/img/img4.jpg',
            price: 7.99,
            description: 'Belo adesivo de uma Mariposa em aquarela para trazer Encanto'
        },
        {
            id: 5,
            name: 'Adesivo Libelula',
            image: 'src/img/img5.jpg',
            price: 5.99,
            description: 'Belo adesivo de uma Libelula em aquarela para trazer Foco'
        },
        {
            id: 6,
            name: 'Adesivo Araucária',
            image: 'src/img/img6.jpg',
            price: 6.99,
            description: 'Belo adesivo de uma Araucária em aquarela para trazer Proteção'
        },
        {
            id: 7,
            name: 'Adesivo Ametistas',
            image: 'src/img/img7.jpg',
            price: 7.99,
            description: 'Belo adesivo de uma Ametistas com Lavandas em aquarela para trazer Cura'
        },
        {
            id: 8,
            name: 'Adesivo Cogumelo',
            image: 'src/img/img8.jpg',
            price: 7.5,
            description: 'Belo adesivo de um Cogumelo em aquarela para trazer Conexão com os Mistérios Ocultos'
        },
        {
            id: 9,
            name: 'Terrario Craigh na Dun',
            image: 'src/img/img9.jpg',
            price: 50,
            description: 'Terrário inspirado nas pedras de Craigh na Dun (Local retratado na serie Outlander).'
        },
        {
            id: 10,
            name: 'Bolacha de Madeira Asa de Monarca',
            image: 'src/img/img10.jpg',
            price: 19.99,
            description: 'Bolacha em MDF 10x10cm da asa de uma Monarca. "Amo insetos, principalmente lepidópteros, a leveza do voo me encanta"'
        },
        {
            id: 11,
            name: 'Quadro de Araucária',
            image: 'src/img/img11.jpg',
            price: 29.99,
            description: 'Quadro em aquarela Araucária, tamanho A4, em aquarela, "A Araucária é conhecida por sua longevidade e resistência. Essa árvore pode viver centenas de anos, simbolizando força, resiliência e persistência. Na cultura popular, a Araucária é muitas vezes associada a ideias de permanência e estabilidade"'
        },
        {
            id: 12,
            name: 'Aquarela Abelhinha',
            image: 'src/img/img12.jpg',
            price: 9.99,
            description: 'Desenho de uma Abelhinha se banhando em pólen, em aquarela, "Infelizmente, as populações de abelhas em todo o mundo estão enfrentando um declínio preocupante devido a fatores como perda de habitat, uso de pesticidas e doenças. As abelhas são essenciais para a polinização de plantas e desempenham um papel crucial na produção de alimentos"'
        },

    ];


    const productList = document.querySelector('.product-list');
    const sortSelect = document.getElementById('sort-select');

    sortSelect.addEventListener('change', function () {
        const selectedOption = sortSelect.value;

        if (selectedOption === 'name') {
            products.sort((a, b) => a.name.localeCompare(b.name));
        } else if (selectedOption === 'price') {
            products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        }

        renderProducts();
    });

    function renderProducts() {
        productList.innerHTML = '';

        products.forEach(function (product) {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            const imageElement = document.createElement('img');
            imageElement.src = product.image;
            imageElement.alt = product.name;
            productElement.appendChild(imageElement);

            const nameElement = document.createElement('div');
            nameElement.classList.add('product-name');
            nameElement.textContent = product.name;
            productElement.appendChild(nameElement);

            const priceElement = document.createElement('div');
            priceElement.classList.add('product-price');
            priceElement.textContent = 'R$ ' + product.price.toFixed(2);
            productElement.appendChild(priceElement);

            const buyButtonElement = document.createElement('button');
            buyButtonElement.classList.add('product-buy');
            buyButtonElement.textContent = 'Comprar';
            productElement.appendChild(buyButtonElement);

            productList.appendChild(productElement);

            imageElement.addEventListener('click', function () {
                const dialogProductName = document.querySelector('.dialog-product-name');
                const dialogProductPrice = document.querySelector('.dialog-product-price');
                const dialogProductDescription = document.querySelector('.dialog-product-description');

                dialogProductName.textContent = product.name;
                dialogProductPrice.textContent = 'R$ ' + product.price.toFixed(2);
                dialogProductDescription.textContent = product.description;

                const dialogOverlay = document.querySelector('.dialog-overlay');
                dialogOverlay.style.display = 'block';
            });

            nameElement.addEventListener('click', function () {
                const dialogProductName = document.querySelector('.dialog-product-name');
                const dialogProductPrice = document.querySelector('.dialog-product-price');
                const dialogProductDescription = document.querySelector('.dialog-product-description');

                dialogProductName.textContent = product.name;
                dialogProductPrice.textContent = 'R$ ' + product.price.toFixed(2);
                dialogProductDescription.textContent = product.description;

                const dialogOverlay = document.querySelector('.dialog-overlay');
                dialogOverlay.style.display = 'block';
            });

            // Evento de clique para adicionar ao carrinho de compras
            buyButtonElement.addEventListener('click', function (event) {
                event.stopPropagation();
                
                addCarrinho(product.id, product.name, product.price, 1, product.image)
            });
        });
    }

    renderProducts();

    const dialogOverlay = document.querySelector('.dialog-overlay');
    const dialogClose = document.querySelector('.dialog-close');

    dialogClose.addEventListener('click', function () {
        dialogOverlay.style.display = 'none';
    });

    function addCarrinho(id, name, price, quantity, img) {
        const existingItem = carrinho.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const newItem = {
                id: id,
                name: name,
                price: price,
                quantity: quantity,
                img: img
            };
            
            carrinho.push(newItem);
        }
        updateCart();
    }
    
});

function storageCarrinho() { 
    const carrinhoString = JSON.stringify(carrinho);
    localStorage.setItem('carrinho', carrinhoString);
    const testeString = localStorage.getItem('carrinho');
    const teste = JSON.parse(testeString);
}

function updateCart() {
    const cartItemCount = document.getElementById('cart-item-count');
    count = count + 1;
    if (count > 0) {
        cartItemCount.style.display = 'block';
        cartItemCount.style.backgroundColor = 'red'
        cartItemCount.style.marginLeft = '30px'
        cartItemCount.style.marginTop = '30px'
      } else {
        cartItemCount.style.display = 'none'; 
      }
    cartItemCount.textContent = count;
  }