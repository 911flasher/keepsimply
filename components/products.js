import {keys} from "lodash"

import ProductItem from './productItem';

import ProductsGrid from './productsGrid';
import offlineProducts from '../db/offlineData/products';


export default function Products({ category }) {
  

  // Offline data
  console.log(category)
    return (
      <ProductsGrid>
        {keys(offlineProducts).map((product) => (category?category===offlineProducts[product].categories?
          <ProductItem
            key={offlineProducts[product].id}
            id={offlineProducts[product].id}
            name={offlineProducts[product].name}
            rating={offlineProducts[product].rating}
            img_url={offlineProducts[product].img_url}
            price={offlineProducts[product].price}
            
          />:<></>:
          <ProductItem
            key={offlineProducts[product].id}
            id={offlineProducts[product].id}
            name={offlineProducts[product].name}
            rating={offlineProducts[product].rating}
            img_url={offlineProducts[product].img_url}
            price={offlineProducts[product].price}
            
          />
        ))}
      </ProductsGrid>
    );

  // if (error) return <EmptySection />;

  // if (!data.products) return <EmptySection />;

  
}
