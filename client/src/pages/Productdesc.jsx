import { Box, Center, Image, Flex, Badge, Text, Spacer } from "@chakra-ui/react";
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';
const Productdesc = () => {
    return (
        
        <Flex justifyContent="center" alignItems="center" >
        <Box flex="1" p="6" ml={4} boxShadow="0 0 10px rgba(0, 0, 0, 0.5) " borderRadius="50" position={'relative'} >
            <Image src="/src/assets/tomato-img.png" alt="Product Image" />
            <Box position="absolute" top="4" left="4"  color="white" p="2" borderRadius="full" bg='green' >Fresh</Box>
        </Box>
        <Box flex="2" p="5">
            <Text fontSize="5xl" fontWeight="bold" mb="4">Product Name</Text>
            <Text fontSize="4xl" fontWeight="bold">Price: $99.99</Text>
            <Text fontSize="lg" mb="4">Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim vel metus vestibulum sodales. Ut nec erat hendrerit, consequat mauris et, tempus justo.</Text>
            <Text fontSize="3xl" fontWeight="bold">Quantity:</Text>
            <Flex>
                <Box flex="1" boxShadow="0 0 10px rgba(0, 0, 0, 0.5)" borderRadius="50" position={'relative'}> </Box>
                <Spacer/>
                <Box  color="white" p="2" borderRadius="50" bg='green' >Add to cart</Box>
            </Flex>
        </Box>
    </Flex>
    );
};
export default Productdesc;