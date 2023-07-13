import axios, { AxiosResponse } from "axios"
import { useState } from "react"
import { useQuery } from "react-query"
import { Stack, Typography } from "@mui/material"
import NewsCard from "../../../shared/components/NewsCard"

export default function IpoNewsSection(){
    const [info, setInfo]=useState<IFetchetStockNews | null>(null)

    const getIpoArticle= async ()=>{
        await axios.get<IFetchetStockNews>(`${import.meta.env.VITE_ALPHA_EP}/query?function=NEWS_SENTIMENT&topics=ipo&sort=relevance&apikey=${import.meta.env.VITE_API_KEY}`)
        .then((response:AxiosResponse<IFetchetStockNews>)=>{return setInfo(response.data)})
    }
    const {isLoading} = useQuery('getIpoArticle', getIpoArticle)
    if(isLoading){return(<>Loading</>)}
    else{
        try{
        return(
        <Stack sx={{gap:2}}>
            <Typography variant='h3' sx={{borderBottom:'1px solid #E95D2E', paddingY:'0.1em', paddingX:'0.35em', fontSize:'40px', color:'#F4F3F0'}}>
                IPO news
            </Typography>
            {
                info ? info?.feed.slice(0, 5).map((data)=>{
                    return(
                    <>
                        <NewsCard 
                        imageSrc={data.banner_image} 
                        title={data.title} 
                        summary={data.summary}
                        referenceTo={data.url}/>
                    </> 
                    )
                }):
                <NewsCard 
                        imageSrc={''} 
                        title={'Theres an error, try again later'} 
                        summary={''}
                        referenceTo="/"
                        />
            }
        </Stack>)}
        catch{
            return(<>
               
                <NewsCard 
                imageSrc={''} 
                title={'Theres an error, try again later'} 
                summary={''}
                referenceTo="/"/>
                        
            </>)
        }
    }

}