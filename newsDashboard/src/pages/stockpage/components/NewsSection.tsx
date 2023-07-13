import { Stack, Typography } from "@mui/material"
import axios, { AxiosResponse } from "axios"
import { useState } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import NewsCard from "../../../shared/components/NewsCard"

export default function NewsSection(){
    const [info, setInfo]=useState<IFetchetStockNews | null>(null)
    const {stockTicker} = useParams()
    const getIpoArticle= async ()=>{
        await axios.get<IFetchetStockNews>(`${import.meta.env.VITE_ALPHA_EP}/query?function=NEWS_SENTIMENT&tickers=${stockTicker}&sort=relevance&apikey=${import.meta.env.VITE_API_KEY}`)
        .then((response:AxiosResponse<IFetchetStockNews>)=>{return setInfo(response.data)})
    }
    const {isLoading} = useQuery('getIpoArticle', getIpoArticle)
    if(isLoading){
        return(<>
            <Typography>

                Loading
            </Typography>
        </>)}
    else{
        try{
            return(<>
            <Stack sx={{ gap:2, alignItems:'center'}}>
                <Typography variant="h3" sx={{color:'#F4F3F0', fontSize:'36px', borderBottom:'1px solid #E95D2E', width:'100%', paddingY:'0.1em', paddingX:'0.35em'}}>
                    {stockTicker?.toUpperCase()} News
                </Typography>

                {
                    info?.feed.slice(0,12).map((data)=>{
                        return(<>
                        <NewsCard
                        title={data.title}
                        summary={data.summary}
                        imageSrc={data.banner_image}
                        referenceTo={data.url}
                        />
                        </>)
                    })
                }
            </Stack>
            </>)
        }catch{
            return(<>
            theres an error</>)
        }
    }
}