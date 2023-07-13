import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";

export default function MainArticle(){
    const [info, setInfo]=useState<IFetchetStockNews | null>(null)
    const getArticles= async ()=>{
        await axios.get<IFetchetStockNews>(`${import.meta.env.VITE_ALPHA_EP}/query?function=NEWS_SENTIMENT&apikey=${import.meta.env.VITE_API_KEY}`)
        .then((response:AxiosResponse<IFetchetStockNews>)=>{return setInfo(response.data)})
    }
    const {isLoading} = useQuery('getNews',getArticles)
    if(isLoading){return(<>Loading</>)}
    else{
        try{  return(
        <Stack sx={{flexDirection:'column'}}>
            <Box sx={{height:'30em', width:'44.87em'}}>
                <motion.div
                initial={{
                    opacity:0
                }}
                whileHover={{
                    opacity:1
                }}>
                    <Stack sx={{
                        zIndex:1,
                        position:'absolute', 
                        width:'44.87em', 
                        height:'30em',
                        backgroundColor:'rgb(36, 34, 30, 0.4)',
                        padding:'3em',
                        justifyContent:'center'
                        }}>
                            <Typography sx={{color:'#F7F5F5'}} variant='h2'>
                                {info?.feed[0].title}
                            </Typography>
                    </Stack>
                </motion.div>
                <Box 
                component='img' 
                src={info?.feed[0].banner_image} 
                sx={{zIndex:0, height:'30em', width:'44.87em'}}/>
            </Box>
        </Stack>)}
        catch{
            return(<>
            <Stack sx={{flexDirection:'column', width:'44.87em', alignItems:'center'}}>
            <Box sx={{height:'20em', width:'43em'}}>
                theres an error in our end, try again later
            </Box>
        </Stack>
            </>)
        }
    }

}