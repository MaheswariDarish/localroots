import { Flex, Text, Image, Heading, Button, InputGroup, Input, InputRightAddon, Menu, MenuButton, MenuList, MenuItem, Badge } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { FaSearch} from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import Productcatalog from "../components/Productcatalog";
const Dashboard = () => {
    const handleSearch = () => {

    }
    return (
        <Flex h={'100vh'} w={'100vw'} bgColor={'gray.50'} alignItems={'start'} justifyContent={'space-between'}>
            <Sidebar />
            <Flex w={'80vw'} h={'100vh'} direction={'column'} p={3}>
                <Flex display={'flex'} justifyContent={'center'} alignItems={'center'} gap={10} h={'10vh'} m={3} w={'70vw'}>
                    <InputGroup w={600}>
                        <Input placeholder="search" borderRadius={'30'}
                            onChange={handleSearch}
                        ></Input>
                        <InputRightAddon borderTopRightRadius={'30'} borderBottomRightRadius={'30'} bgColor={'gray.200'}><FaSearch onClick={handleSearch} /></InputRightAddon>
                    </InputGroup>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<FaFilter />}>Filters</MenuButton>
                        <MenuList>
                            <MenuItem>Vegetables</MenuItem>
                            <MenuItem>Fruits</MenuItem>
                            <MenuItem>Herbs</MenuItem>
                            <MenuItem>Fish</MenuItem>
                            <MenuItem>Meat</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Productcatalog/>
            </Flex>
        </Flex>
    );
};

export default Dashboard;