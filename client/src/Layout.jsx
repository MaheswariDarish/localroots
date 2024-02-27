import { Outlet } from 'react-router-dom';
import Sidebar from '../src/components/Sidebar';
import { Flex } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Flex h={'100vh'} w={'100vw'} bgColor={'gray.50'} alignItems={'start'} justifyContent={'space-between'}>
      <Sidebar />
      <div>
        <Outlet/>
      </div>
    </Flex>
  );
};

export default Layout;