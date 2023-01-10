import { Inter } from '@next/font/google'

import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

import { useEffect, useState } from "react";

import LoadingScreen from "./components/layout/loadingScreen";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [width, setWidth] = useState(768);
  
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoadingProduct);
  // const products = useSelector(selectAllProduct);

  // const isOpenConfirmModal = useSelector(selectConfirmModalFlag);
  // const isOpenAddrModal = useSelector(selectAddrModalFlag);


  // const isOpenDetailProductModal = useSelector(selectDetailModalFlag);

  // useEffect(()=>{
  //   dispatch(openSlider());
  //   if(products.length == 0){
  //     setWidth(window.innerWidth);
  //     const fetchProductList = async () => {
  //       try {
  //         const products = await ProductApi.getAll();
  //         dispatch(addAllProduct(products));
  //         console.log("Product API success !!!");
  //         // dispatch(offLoading())
  //         // console.log("data"+ JSON.stringify(products));
  //       } catch (error) {
  //         console.log("Product API Fail !!");
  //         console.log(error);
  //       }
  //     }
  //     fetchProductList();
  //   }
  // }, [])
  useEffect(()=>{
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [])

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem colSpan={{ base: "3", md: "2" }}>
          {/* <CategoryBar /> */}
          <Box
            display={{ base: "block", md: "none" }}
            position="sticky" zIndex={1} top={1}
          >
            {/* {width < 768 && <SearchBar />}   */}
          </Box>
        </GridItem>
        <GridItem colSpan={1} display={{ base: "none", md: "block" }}>
          <Box position="sticky" top={4}>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
