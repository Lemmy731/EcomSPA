import { Product } from '../types/product';
import ProductCard from './ProductCard';
import bed from '../../public/icon_bed.png'
import tv from '../../public/icon_tv.png'

// async function getProducts(): Promise<Product[]> {
//   const res = await fetch("https://localhost:5001/api/products", {
//     cache: "no-store",
//   });

//   return res.json();
// }

export default async function ProductsPage() {
//   const products = await getProducts();
  const products =  [{
id : 123,
imageUrl : "",
name : "shirt",
description : "good",
color : "yellow",
size : "50",
price : 900,
},
{
id : 124,
imageUrl : "",
name : "shirt",
description : "good",
color : "black",
size : "45",
price : 1500,
},
{
id : 125,
imageUrl : "tv",
name : "shoe",
description : "good",
color : "black",
size : "size",
price : 4000,
}
]

  return (
    <div className="grid grid-cols-3 gap-6 p-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}