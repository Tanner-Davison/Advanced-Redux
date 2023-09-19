import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: "My First Book",
    description: "First Book I ever Wrote.",
  },
  {
    id: 'p2',
    price: 12,
    title: "My second Book ",
    description: "Second Book I ever Wrote.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       { DUMMY_PRODUCTS.map((product) => 
        (<ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}/>)
       )}
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
