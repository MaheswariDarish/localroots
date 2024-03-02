import { Box, Center, Image, Flex, Badge, Text, Spacer, Heading, Button } from "@chakra-ui/react";
import { FaMinus, FaPlus, FaShoppingCart, FaStar } from "react-icons/fa";
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';
const Productdesc = () => {
    return (
        <Flex w={'80vw'} h={'100vh'}>
            <Flex w={'35vw'} alignItems={'center'} justifyContent={'center'}>
                <Image src="src/assets/tomato-img.png" h={'200px'} />
            </Flex>
            <Flex w={'35vw'} direction={'column'} justifyContent={'center'} gap={2}>
                <Flex gap={10} alignItems={'center'}>
                    <Flex gap={3} alignItems={'center'}>
                        <Heading>Tomato</Heading>
                        <Badge h={'max-content'} maxW="max-content" display="flex" alignItems="center" gap="1" colorScheme="green"><FaStar />4.8</Badge>
                    </Flex>
                </Flex>
                <Heading>$3</Heading>
                <Text color={'gray.600'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magni nobis libero consectetur ad ipsum itaque minus eos voluptatem reiciendis!</Text>
                <Flex gap={3} direction={'column'}>
                    <Flex gap={2}>
                        <Button><FaPlus /></Button>
                        <Flex alignItems={'center'} justifyContent={'center'} border={'solid 2px lightgray'}borderRadius={10} h={10} w={10} ><Text>1</Text></Flex>
                        <Button><FaMinus /></Button>
                    </Flex>
                    <Button maxW={'max-content'}leftIcon={<FaShoppingCart/>} color={'white'} bgColor={'#57816b'}>Add to cart</Button>
                </Flex>
            </Flex>
        </Flex>
    );
};
export default Productdesc;