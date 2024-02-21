import { Flex,Button,Input,Link } from '@chakra-ui/react';
import { Container, Image,Text } from '@chakra-ui/react';

const Register = () => {
    return (
        <Flex direction="row" h="80vh" w="130vh"   boxShadow="0 0 10px rgba(0, 0, 0, 0.5)">
            {/* Image covering the left half */}
            <Container h="100%" w="50%" m={0} p={0}>
                <Image src="/src/assets/login-img.jpg" h="100%" w="100%" objectFit="cover" />
            </Container>
            <Flex direction="column" flex="1" m={0} p={0} justify="center" align="center">
                <Text fontSize='50px' color='#57816b'>Welcome</Text>
                <Input placeholder="Name" mt={3}  w="25vw" colorScheme='custom' bg='#e6e6e6'/>
                <Input placeholder="Email" mt={3} w="25vw" colorScheme='custom' bg='#e6e6e6'/>
                <Input type="password" placeholder="Password" mt={3} w="25vw" colorScheme='custom' bg='#e6e6e6'/>
                <Button colorScheme="custom" bg='#57816b' mt={4}>Submit</Button>
                <Text mt={5}>Have an account?</Text>
                <Text color='#57816b' fontWeight={'semibold'}><Link to='/login' >Sign in</Link></Text>
              
            </Flex>
        </Flex>
    );
};

export default Register;