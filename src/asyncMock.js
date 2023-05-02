const products = [
  {
    id: 1,
    name: 'BODEGA LUCA 750 cc',
    category: 'Tinto',
    stock: 1,
    description: 'PINOT NOIR',
    price: 7609,
    año: 2019,
    img: 'https://images.pexels.com/photos/2308939/pexels-photo-2308939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: 'PEÑON DE AGRELO 750 cc',
    category: 'Tinto',
    stock: 1,
    description: 'CABERNET',
    price: 4419,
    año: 2018,
    img: 'https://images.pexels.com/photos/2897305/pexels-photo-2897305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    name: 'AMERI 750 cc',
    category: 'tinto',
    stock: 1,
    description: 'MALBEC',
    price: 15688,
    año: 2015,
    img: 'https://images.pexels.com/photos/2820146/pexels-photo-2820146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
]

export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductById = productoId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productoId))
    }, 500)
  })
}
