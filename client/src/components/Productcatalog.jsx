import { Flex } from "@chakra-ui/react";
import ProductTile from "./ProductTile";
import './Productcatalog.css'
const Productcatalog = () => {
    const products = [{id:1,title:"Tomato",image:"src/assets/tomato-img.png",seller:"Mary Ann",price:"3",rating:"4.8"},
    {id:2,title:"Carrot",image:"src/assets/carrot-img.png",seller:"Geo Jose",price:"2",rating:"4.9"},
    {id:3,title:"Kiwi",image:"src/assets/kiwi-img.png",seller:"Maheswari",price:"3.4",rating:"4.9"},
    {id:4,title:"Beetroot",image:"src/assets/beetroot-img.png",seller:"Aishwarya",price:"2",rating:"4.6"},
    {id:5,title:"Oregano",image:"src/assets/oregano-img.png",seller:"Mathew",price:"1.3",rating:"4.7"}
      ]
    return (
        <div className="pro-catalog">
            <Flex w={'75vw'}  wrap={'wrap'} gap={5} p={5}>
                {products.map((product)=>(
                    <ProductTile key={product.id} id={product.id} title={product.title} image={product.image} seller={product.seller}
                     price={product.price} rating={product.rating}/>
                ))}
            </Flex>
        </div>
    );
}

export default Productcatalog;