import { Flex, Toast, useToast } from "@chakra-ui/react";
import ProductTile from "./ProductTile";
import './Productcatalog.css'
import { useEffect, useState } from "react";
import {supabase} from '../config'
const Productcatalog = () => {
    const [products, setProducts] = useState([{id:null,title:'',image:'',seller:'',price:'',rating:''}])
    const toast=useToast()
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let { data, error } = await supabase
                    .from('products')
                    .select()
                console.log(data)
                setProducts(data)
                if(error) {throw error}
            }catch(error){
                toast({
                    title: 'Error fetching',
                    description: error.message || 'An error occurred while inserting data',
                    status: 'error',
                    isClosable: true,
                    position: 'top',
                });
            }
        }
        fetchProducts()
    }, [products])
    
    return (
        <div className="pro-catalog">
            <Flex w={'75vw'} wrap={'wrap'} gap={5} p={5}>
                {products.map((product) => (
                    <ProductTile key={product.id} id={product.id} title={product.title} image={product.image} seller={product.seller}
                        price={product.price} rating={product.rating} />
                ))}
            </Flex>
        </div>
    );
}

export default Productcatalog;