import './App.css';
import Product from './components/product/Product';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    valoration: 2
  },
  // More products...
]

function App() {
  return (
    <div className="App">
      <Product product={products[0]} />
    </div>
  );
}

export default App;
