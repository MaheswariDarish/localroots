import { Button, Divider, Flex, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { FaMinus, FaMoneyBill, FaPlus, FaTrash, FaTruck } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const Cart = () => {
    return (
        <Flex w={'80vw'} h={'100vh'} p={7} gap={20}>
            <Flex direction={'column'} w={'45vw'} gap={4}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Heading fontSize={24}>Your Cart</Heading>
                    <Heading fontSize={24}>3 Items</Heading>
                </Flex>
                <Divider />
                <Flex id="cart-list" direction={'column'} gap={4}>
                    <Flex h={150} position={'relative'} boxShadow={'sm'} alignItems={'center'} p={3} justifyContent={'space-between'}>
                        <Button _hover={{ bgColor: "green.200" }} position="absolute" top={0} right={0} size="sm" bgColor="green.100" borderBottomLeftRadius={"50%"} borderBottomRightRadius={0} borderTopLeftRadius={0} >
                            <FaTrash size={15} color={"darkgreen"} />
                        </Button>
                        <Flex alignItems={'center'} gap={2} p={3} mt={5}>
                            <Image mt={4} src={'src/assets/oregano-img.png'} sx={{ h: "100px", w: "130px" }} />
                            <Flex direction={'column'} gap={2}>
                                <Heading fontSize={20}>Oregano</Heading>
                                <Text fontWeight={'semibold'} color={'gray.700'} fontSize={23}>$3</Text>
                            </Flex>
                        </Flex>
                        <Flex direction={'column'} gap={2} p={3} mt={5}>
                            <Flex gap={2}>
                                <Button ><FaPlus /></Button>
                                <Flex alignItems={'center'} justifyContent={'center'} border={'solid 2px lightgray'} borderRadius={10} h={10} w={10} ><Text>1</Text></Flex>
                                <Button><FaMinus /></Button>
                            </Flex>
                            <Text color={'gray.600'} fontWeight={'semibold'} fontSize={18}>Total : $3</Text>
                        </Flex>
                    </Flex>
                    <Flex h={150} position={'relative'} boxShadow={'sm'} alignItems={'center'} p={3} justifyContent={'space-between'}>
                        <Button _hover={{ bgColor: "green.200" }} position="absolute" top={0} right={0} size="sm" bgColor="green.100" borderBottomLeftRadius={"50%"} borderBottomRightRadius={0} borderTopLeftRadius={0} >
                            <FaTrash size={15} color={"darkgreen"} />
                        </Button>
                        <Flex alignItems={'center'} gap={3} mt={5}>
                            <Image mt={4} src={'src/assets/carrot-img.png'} sx={{ h: "100px", w: "130px" }} />
                            <Flex direction={'column'} gap={2}>
                                <Heading fontSize={20}>Carrot</Heading>
                                <Text fontWeight={'semibold'} color={'gray.700'} fontSize={23}>$2</Text>
                            </Flex>
                        </Flex>
                        <Flex direction={'column'} gap={2}>
                            <Flex gap={2} mt={5} p={3}>
                                <Button><FaPlus /></Button>
                                <Flex alignItems={'center'} justifyContent={'center'} border={'solid 2px lightgray'} borderRadius={10} h={10} w={10} ><Text>2</Text></Flex>
                                <Button><FaMinus /></Button>
                            </Flex>
                            <Text color={'gray.600'} fontWeight={'semibold'} fontSize={18}>Total : $4</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex w={'25vw'} direction={'column'} gap={4}>
                <Heading fontSize={24}>Order Summary</Heading>
                <Divider />
                <Flex direction={'column'} gap={5}>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        <Text fontSize="18" fontWeight="semibold" color="gray.600">Items : 2</Text>
                        <Text fontSize="18" fontWeight="semibold" color="gray.600">Total : $7</Text>
                    </Flex>
                    <Flex direction={'column'} gap={2}>
                        <Text fontSize="18" fontWeight="semibold" color="gray.600">Shipping : </Text>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<FaChevronDown />}>Delivery</MenuButton>
                            <MenuList>
                                <MenuItem>Vegetables</MenuItem>
                                <MenuItem>Fruits</MenuItem>
                                <MenuItem>Herbs</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                    <Button bgColor={'#57816b'} color={'white'} rightIcon={<FaMoneyBill/>}>Place Order</Button>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Cart;