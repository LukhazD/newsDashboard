    import { Stack, Typography } from "@mui/material";
    import axios, { AxiosResponse } from "axios";
    import { useState } from "react";
    import { useQuery } from "react-query";

    export default function GainersLosers(){
        const [info, setInfo]=useState<IGainersLosers | null>(null)
        const getMainArticle= async ()=>{
            await axios.get<IGainersLosers>(`${import.meta.env.VITE_ALPHA_EP}/query?function=TOP_GAINERS_LOSERS&apikey=${import.meta.env.VITE_API_KEY_NEWS2}`)
            .then((response:AxiosResponse<IGainersLosers>)=>{return setInfo(response.data)})
        }
        const {isLoading, isError} = useQuery('getNews', getMainArticle)

        if(isError){return(<>Error while loading stocks, try again later</>)}
        if(isLoading){return(<>isloading</>)}
        else{
            try{
                return(<>
                <Stack sx={{alignItems:'center', gap:3}}>
            
                    <Typography variant="h2" sx={{color:'#F7F5F5'}}>
                        Top
                    </Typography>
                    <Stack sx={{flexDirection:'row', gap:3}}>
                        <Stack sx={{alignItems:'center', gap:2}}>
                            <Typography variant='h3' color='#F7F5F5'>
                                Gainers
                            </Typography>
                            <Stack sx={{
                                width:'12em', 
                                height:'28.5em',
                                bgcolor:'#F7F5F5',
                                padding:'1em',
                                borderRadius:'3px', 
                                alignItems:'center',
                                gap:2.2
                                }}>
                                
                                {
                                    info?.top_gainers.slice(0, 11).map((stock, index)=>{
                                        return(<>
                                        <Stack key={index} sx={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
                                            <Typography variant="h3">
                                                {stock.ticker}
                                            </Typography>
                                            <Typography color='#91BE04'>
                                                {`+${stock.change_percentage}`}
                                            </Typography>
                                        </Stack>
                                        </>)
                                    })
                                }
                            </Stack>
                        </Stack>
                        <Stack sx={{alignItems:'center', gap:2}}>
                            <Typography variant='h3' color='#F7F5F5'>
                                Losers
                            </Typography>
                            <Stack sx={{
                                width:'12em', 
                                height:'28.5em',
                                bgcolor:'#F4F3F0',
                                padding:'1em',
                                borderRadius:'3px', 
                                alignItems:'center',
                                gap:2.2}}>
                                {
                                    info?.top_losers.slice(0, 11).map((stock, index)=>{
                                        return(<>
                                        <Stack key={index} sx={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
                                            <Typography variant='h3'>
                                                {stock.ticker}
                                            </Typography>
                                            <Typography color='#C74B34'>
                                                {stock.change_percentage}
                                            </Typography>
                                        </Stack>
                                        </>)
                                    })
                                }
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                </>)}catch{
                    return(<Stack sx={{alignItems:'center', gap:3}}>
            
                    <Typography variant="h2" sx={{color:'#F7F5F5'}}>
                        Top
                    </Typography>
                    <Stack sx={{flexDirection:'row', gap:3}}>
                        <Stack sx={{
                            width:'12em', 
                            height:'29em',
                            bgcolor:'#F4F3F0',
                            padding:'1em',borderRadius:'3px', 
                            alignItems:'center',
                            }}>
                            <Typography>
                                Gainers
                            </Typography>
                            Error while loading stocks, try again later
                        </Stack>
                        <Stack sx={{
                            width:'12em', 
                            height:'29em',
                            bgcolor:'#F4F3F0',
                            padding:'1em',borderRadius:'3px', 
                            alignItems:'center'}}>
                            <Typography>
                                Losers
                            </Typography>
                            Error while loading stocks, try again later

                        </Stack>
                    </Stack>
                </Stack>)
                }
        }
    }