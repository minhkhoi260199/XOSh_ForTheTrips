import {
    Box,
    Flex,
    Link,
    SimpleGrid,
    Image,
    Text,
} from "@chakra-ui/react";
import { FaEnvelope, FaLink, FaMapMarkerAlt, FaMapMarkedAlt, FaPhoneAlt, FaShoppingBag, FaYoutube, FaTiktok } from "react-icons/fa";

function Footer(){

    const year = new Date().getFullYear();

    return(
        <Box bg='#ffde46' w='100%' pb={{base:'74px', md:'0'}} color='black' position='fixed' bottom='0'>
            <Flex margin='auto' maxW='1250px' p={5} >
                {/* <SimpleGrid columns={{base:'1', md:'2'}} spacing={80}
                            width="100%" 
                > */}
                <SimpleGrid columns={{base:'1', md:'3'}} spacing={20}
                            width="100%" 
                >
                    <Box height='110px' mt={2}>
                        <Text fontSize='xl' pb={2} fontWeight='bold'>Thông tin liên hệ</Text>
                        {/* <Flex><FaPhoneAlt/><Text fontSize='sm'>&nbsp;&nbsp;(+84) 0828 494 126</Text></Flex> */}
                        <Flex><FaPhoneAlt/><Text fontSize='sm' fontWeight='bold'>&nbsp;&nbsp;(+84) 0828 494 126</Text></Flex>
                        <Flex><FaEnvelope/><Text fontSize='sm' >&nbsp;&nbsp;xeomshop2019@gmail.com</Text></Flex>
                        <Flex>
                            <FaYoutube/>
                            <Link href='https://www.youtube.com/@xeomshop2067' color='red.800' isExternal >
                                <Text fontSize='sm' fontWeight='bold'>&nbsp;&nbsp;https://www.youtube.com/@xeomshop2067</Text>
                            </Link>
                        </Flex>
                        <Flex>
                            <FaTiktok/>
                            <Link href='https://www.tiktok.com/@xeomshop' color='red.600' isExternal >
                                <Text fontSize='sm'>&nbsp;&nbsp;https://www.tiktok.com/@xeomshop</Text>
                            </Link>
                        </Flex>
                        <Flex>
                            <FaShoppingBag/>
                            <Link href='https://shopee.vn/xeomshop' color='orange.700' isExternal >
                                <Text fontSize='sm'>&nbsp;&nbsp;https://shopee.vn/xeomshop</Text>
                            </Link>
                        </Flex>
                        <Flex><FaMapMarkerAlt/><Text fontSize='sm' fontWeight='bold'>&nbsp;&nbsp;88 đường Tân Mỹ, Tân Thuận Tây, Quận 7</Text></Flex>
                        {/* <Flex><FaMapMarkedAlt/>&nbsp;&nbsp;&nbsp;<Link href='#' fontSize='sm' color='red.700' isExternal >Dẫn đường đến shop</Link></Flex> */}
                    </Box>
                    <Box height='200px' mt={2}>
                        <Text fontSize='xl' pb={2} fontWeight='bold'>Giới thiệu</Text>
                        <Flex ml={5} position='relative'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1810.0139462375528!2d106.71870466925603!3d10.751075941440414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fc00dfdba91%3A0xcfcc5f53eb8e1b1c!2sXe%20%C3%94m%20Shop!5e0!3m2!1svi!2s!4v1673340783365!5m2!1svi!2s" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            position='absolute'
                            top='0' bottom='0' left='0' right='0'
                            height='100%' width='100%'
                        ></iframe>
                        </Flex>
                        <Text>
                        </Text>
                    </Box>
                    <Box height='160px' mt={2}>
                        <Text fontSize='xl' pb={2} fontWeight='bold'>Fanpage</Text>
                        <Flex ml={5} position='relative'>
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fxeomshop&tabs&small_header=false&adapt_container_width=true&hide_cover=false&width=340&height=130&show_facepile=true&appId=220058775445865" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                    position='absolute'
                                    top='0' bottom='0' left='0' right='0'
                                    height='100%' width='100%'
                            ></iframe>
                        </Flex>
                    </Box>
                </SimpleGrid>
            </Flex>
            <SimpleGrid columns={{base:'1', md:'2'}}
                        margin='auto' p={2} maxW='1300px' 
                        fontStyle='italic' color='#847f72' fontSize='sm' >
                <Box textAlign={{base:'left', md:'right'}}>
                    {year} © Xe Ôm Shop &nbsp;
                </Box>
                <Box textAlign={{base:'right', md:'left'}}>
                    - Made by <Link href='https://www.linkedin.com/in/minhkhoi2601/' color='pink.300' isExternal >Khôi Nguyễn</Link> with 🖤
                </Box>
            </SimpleGrid>
        </Box>
    );
}
export default Footer;