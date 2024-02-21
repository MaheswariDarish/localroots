import { Badge, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FaPlus, FaStar } from "react-icons/fa";

const ProductTile = (props) => {
    return (
        <Flex position="relative" w={'16vw'} p={3} direction="column" gap={1} justifyContent="space-around" alignItems="center" borderRadius={10} boxShadow="md">
            <Button _hover={{bgColor:"green.200"}} position="absolute" top={0} right={0} size="sm" bgColor="green.100" borderBottomLeftRadius={"50%"} borderBottomRightRadius={0} borderTopLeftRadius={0} >
                <FaPlus size={15} color={"darkgreen"}/>
            </Button>
            <Image mt={4} src={props.image} sx={{ h: "100px", w: "130px" }} />
            <Flex direction="column" w={200} p={4} gap={2}>
                <Badge maxW="max-content" display="flex" alignItems="center" gap="1" colorScheme="green"><FaStar />{props.rating}</Badge>
                <Flex justifyContent="space-between">
                    <Flex direction="column">
                        <Heading fontSize="16" color="gray.700">{props.title}</Heading>
                        <Text fontSize="12" fontWeight="semibold" color="gray.600">Sold by {props.seller}</Text>
                    </Flex>
                    <Text fontSize="25" color="gray.700" fontWeight="semibold">${props.price}</Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default ProductTile;
