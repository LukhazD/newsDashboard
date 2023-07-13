import { Box, Stack } from "@mui/material"
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
    const {isLoading, isError} = useQuery('getNews', getArticles)
    if(isError){return(<>Theres an error</>)}
    if(isLoading){return(<>Loading</>)}
    else{
        try{
        return(<>
        <Stack sx={{flexDirection:'row', alignItems:'center', justifyContent:'center', gap:8, width:'100%'}}>
                <StyledStack>
                    <motion.p
                    initial={{
                        opacity:0
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
                        display:'flex',
                        alignItems:'center',
                        zIndex:2}}>
                            {info?.feed[2].title?cutText(String(info?.feed[2].title), 23):<StyledStack/>}
                    </motion.p>
                    <Box 
                    component='img' 
                    src={info?.feed[2].banner_image} 
                    sx={{
                        width:'12em', 
                        height:'100%',
                        maxHeight:'12em'}}/>
                </StyledStack>
                <StyledStack>
                    <motion.p
                    initial={{
                        opacity:0
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
                        display:'flex',
                        alignItems:'center',
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
                        opacity:0
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
                        display:'flex',
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