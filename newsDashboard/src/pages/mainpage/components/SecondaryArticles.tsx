import { Box, Stack, useMediaQuery } from "@mui/material"
import { useQuery } from "react-query"
import StyledStack from "../styledComponents/StyledStack"
import { motion } from "framer-motion"
import cutText from "../../../shared/functions/cutText"
import axios, { AxiosResponse } from "axios"
import { useState } from "react"

export default function SecondaryArticles(){
    const [info, setInfo]=useState<IFetchetStockNews | null>(null)
    const getArticles= async ()=>{
        await axios.get<IFetchetStockNews>(`${import.meta.env.VITE_ALPHA_EP}/query?function=NEWS_SENTIMENT&apikey=${import.meta.env.VITE_API_KEY}`)
        .then((response:AxiosResponse<IFetchetStockNews>)=>{return setInfo(response.data)})
    }
    const {isLoading, isError} = useQuery('getArticles', getArticles)
    const match = useMediaQuery('(min-width:1080px)');

    if(isError){return(<>Theres an error</>)}
    if(isLoading){return(<>Loading</>)}
    else{
        try{
        return(<>
        <Stack sx={{
            flexDirection:match ?'row':'column', 
            alignItems:'center', 
            justifyContent:'center', 
            gap:match?8:2, 
            width:'100%'}}>
                <StyledStack>
                    <motion.p
                    initial={{
                        opacity:match?0:1,
                        backgroundColor:match?'transparent':"rgb(36, 34, 30,0.4)"
                    }}
                    whileHover={{
                        opacity:1,
                        backgroundColor:'#24221E'
                    }}
                    style={{
                        position:info?'absolute':'unset',
                        height:'7em', 
                        width:match ?'12em':'60vw',
                        color:'#F7F5F5',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        zIndex:2}}>
                            {info?.feed[2].title?cutText(String(info?.feed[2].title), 23):<StyledStack/>}
                    </motion.p>
                    <Box 
                    component='img' 
                    src={info?.feed[2].banner_image} 
                    sx={{
                        width:match ?'12em':'60vw', 
                        height:'100%',
                        maxHeight:match ?'12em':'60vw'}}/>
                </StyledStack>
                <StyledStack>
                    <motion.p
                    initial={{
                        opacity:match?0:1,
                        backgroundColor:match?'#24221E':"rgb(36, 34, 30,0.4)"
                    }}
                    whileHover={{
                        opacity:1,
                        backgroundColor:'#24221E'
                    }}
                    style={{
                        position:info?'absolute':'unset',
                        height:'7em', 
                        width:'12em',
                        color:'#F7F5F5',
                        display:'flex', justifyContent:'center',
                        alignItems:
                        'center',
                        zIndex:2}}>
                            {info?.feed[3].title!=null?cutText(String(info?.feed[3].title), 23):<StyledStack/>}
                    </motion.p>
                    <Box 
                    component='img' 
                    src={info?.feed[3].banner_image} 
                    sx={{
                        width:'12em', 
                        height:'100%',
                        maxHeight:'12em'}}/>
                </StyledStack>
                <StyledStack>
                    <motion.p
                    initial={{
                        opacity:match?0:1,
                        backgroundColor:match?'#24221E':"rgb(36, 34, 30,0.4)"
                    }}
                    whileHover={{
                        opacity:1,
                        backgroundColor:'#24221E'
                    }}
                    style={{
                        position:info?'absolute':'unset',
                        height:'7em', 
                        width:'12em',
                        color:'#F7F5F5',
                        display:'flex', justifyContent:'center',
                        alignItems:'center',
                        zIndex:2}}>
                            {info?.feed[8].title?cutText(String(info?.feed[8].title), 23):<StyledStack/>}
                    </motion.p>
                    <Box 
                    component='img' 
                    src={info?.feed[8].banner_image} 
                    sx={{
                        width:'12em', 
                        height:'100%',
                        maxHeight:'12em'}}/>
                </StyledStack>
        </Stack>
        </>)}
        catch{
            return(<>
                <Stack sx={{flexDirection:'row', gap:3}}>
                    <StyledStack>
                        Theres an error in our end
                    </StyledStack>
                    <StyledStack>
                        Theres an error in our end
                    </StyledStack>

                    <StyledStack>
                        Theres an error in our end
                    </StyledStack>
                </Stack>
                </>)
        }
    }
}