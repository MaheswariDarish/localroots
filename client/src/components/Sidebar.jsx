import { Flex, Tabs, Tab, TabList, Heading, Divider, Avatar, Text, Button, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { FaChevronRight, FaHome, FaUser ,FaShoppingCart} from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, CloseButton } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const navigate=useNavigate()
    return (
        <Flex h={'100vh'} w={'20vw'} bgColor={'gray.50'} boxShadow={'lg'} flexDirection={'column'} p={4} gap={7} justifyContent={'space-between'}>
            <Flex flexDirection={'column'} gap={7}>
                <Heading fontSize={'x-large'} color={'gray.800'}>LocalRoots.</Heading>
                <Tabs variant='soft-rounded' flexDirection={'column'} display={'flex'}>
                    <TabList flexDirection="column" w={'18vw'} gap={2}>
                        <Tab as={Link} to="/dash" sx={{ borderRadius: '10px', bgColor: '#fffff', _selected: { bgColor: '#57816b', color: 'white' } }} display={'flex'} justifyContent={'start'} gap={3}><FaHome />Home</Tab>
                        <Tab as={Link} to="/dash/cart" sx={{ borderRadius: '10px', bgColor: '#fffff', _selected: { bgColor: '#57816b', color: 'white' } }} display={'flex'} justifyContent={'start'} gap={3}><FaShoppingCart />Cart</Tab>
                        <Tab as={Link} to="/dash/sell" sx={{ borderRadius: '10px', bgColor: '#fffff', _selected: { bgColor: '#57816b', color: 'white' } }} display={'flex'} justifyContent={'start'} gap={3} ><MdSell />Sell</Tab>
                        <Tab as={Link} to="/dash/profile" sx={{ borderRadius: '10px', bgColor: '#fffff', _selected: { bgColor: '#57816b', color: 'white' } }} display={'flex'} justifyContent={'start'} gap={3}><FaUser />Profile</Tab>
                    </TabList>
                </Tabs>
            </Flex>
            <Flex p={4} direction={'column'} gap={4} alignItems={'center'} >
                <Divider mb={3} />
                <Flex gap={4} alignItems={'center'} boxShadow={'xs'} bgColor={'gray.100'} p={2.5} borderRadius={'10'}>
                    <Avatar size={'sm'} src='src/assets/zoe.jpg' />
                    <Flex direction={'column'}>
                        <Heading fontSize={13}>Mary Ann Jose</Heading>
                        <Text fontSize={12.5}>maryannjose@gmail.com</Text>
                    </Flex>
                    <Button sx={{ all: 'unset', cursor: 'pointer' }} _hover={{ bgColor: 'gray.100' }} onClick={onOpen}><FaChevronRight /></Button>
                    <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
                        <DrawerOverlay>
                            <DrawerContent borderRadius={20} m={3}>
                                <DrawerHeader display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Text>Profile</Text>
                                    <CloseButton onClick={onClose} />
                                </DrawerHeader>
                                <DrawerBody display={'flex'} alignItems={'center'} flexDirection={'column'} gap={4} mt={20}>
                                    <Avatar size={'2xl'} src='src/assets/zoe.jpg' />
                                    <Heading fontSize={23}>Mary Ann Jose</Heading>
                                    <Text>maryannjose129@gmail.com</Text>
                                    <Button bgColor={'gray.600'} textColor={'white'} _hover={{ bgColor: 'gray.700' }}>Logout</Button>
                                </DrawerBody>
                            </DrawerContent>
                        </DrawerOverlay>
                    </Drawer>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Sidebar;