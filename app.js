let iceCream = [
  {
    name: 'cookie dough',
    price: 3,
    quantity: 0,
    img: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  },
  {
    name: 'chocolate',
    price: 4,
    quantity: 0,
    img: 'https://images.unsplash.com/photo-1620197544618-af5f5366abb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'

  }, {
    name: 'vanilla',
    price: 1,
    quantity: 0,
    img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg'
  },
  {
    name: 'oreo',
    price: 20,
    quantity: 0,
    img: 'https://images.unsplash.com/photo-1620416162788-932341950162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'gummy bear',
    price: 3,
    quantity: 0,
    img: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'hot fudge',
    price: 6,
    quantity: 0,
    img: 'https://plus.unsplash.com/premium_photo-1663840175335-4e2be89fddbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwZnVkZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
  },
  {
    name: 'waffle bowl',
    price: 2,
    quantity: 0,
    img: 'https://media.istockphoto.com/photos/waffle-bowl-on-white-background-picture-id816249170?b=1&k=20&m=816249170&s=170667a&w=0&h=3oGW7slpcWpOiCe5aHWprnBtLh4onAG0sm52IPt_jDg='
  },
  {
    name: 'sugar cone',
    price: 8,
    quantity: 0,
    img: 'https://images.unsplash.com/photo-1532947016889-3b7ab9cd0a13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHN1Z2FyJTIwY29uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
  },
  {
    name: 'waffle cone',
    price: 1,
    quantity: 0,
    img: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FmZmxlJTIwY29uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
  }]

// let iceCream = {

// flavors: [
//     {
//       name: 'cookie dough',
//       price: 3,
//       quantity: 0,
//     },
//     {
//       name: 'chocolate',
//       price: 4,
//       quantity: 0,
//     }, {
//       name: 'vanilla',
//       price: 1,
//       quantity: 0,
//     }],
//     toppings:[
//     {
//       name: 'oreo',
//       price: 20,
//       quantity: 0,
//     },
//     {
//       name: 'gummy bear',
//       price: 3,
//       quantity: 0,
//     },
//     {
//       name: 'hot fudge',
//       price: 6,
//       quantity: 0,
//     }],
//     cone:[
//     {
//       name: 'waffle bowl',
//       price: 2,
//       quantity: 0,
//     },
//     {
//       name: 'sugar cone',
//       price: 8,
//       quantity: 0,
//     },
//     {
//       name: 'waffle cone',
//       price: 1,
//       quantity: 0,
//     }]
// }


function buyIceCream(iceCreamKind) {
  let iceCreamFlavor = iceCream.find(i => i.name == iceCreamKind)
  iceCreamFlavor.quantity++
  console.log(iceCreamFlavor)
  drawCart(iceCreamFlavor)
}
// function buyIceCream()
// for(let key in iceCream){
//   let array = iceCream[key]
// }


function drawCone() {
  let template = ''
  iceCream.forEach(i => {
    if (i.quantity >= 0) {
      // console.log('drawing cart', i)
      template += `
      <div class = "col-3 m-2" onclick="buyIceCream('${i.name}')">
      <img class="item-card  ice-cream-img d-flex justify-content-center" src="${i.img}" alt="">
      <div class = "d-flex justify-content-between">
        <p>${i.name}</p>
        <p>$${i.price}</p>
        </div>
      </div>`
    }
    document.getElementById('ice-cream-items').innerHTML = template
    drawTotal()
  })
}
function drawCart() {
  let template = ''
  iceCream.forEach(i => {
    if (i.quantity > 0) {
      // console.log('drawing cart', i)
      template += `
      <div class="d-flex justify-content-between">
      <i class="mdi mdi-close text-danger" onclick="removeIceCream('${i.name}')"></i>
      <p>${i.name}</p>
      <p>${i.quantity}</p>
      <p>$${i.price}</p>
    </div>`
    }
    document.getElementById('cart').innerHTML = template
    drawTotal()
  })
}

function drawTotal() {
  let total = 0
  iceCream.forEach(i => {
    total += i.price * i.quantity
  })
  document.getElementById('total').innerText = total.toFixed(2)

}

function checkout() {
  if (window.confirm(`are you sure you wanna buy all that`)) {
    iceCream.forEach(i => {
      i.quantity = 0
    })
  }
  drawCart()
}

function removeIceCream(iceCreamKind) {
  let foundIceCream = iceCream.find(i => i.name == iceCreamKind)
  foundIceCream.quantity--
  console.log('decrease', foundIceCream)
  drawCart()
}
drawCone()