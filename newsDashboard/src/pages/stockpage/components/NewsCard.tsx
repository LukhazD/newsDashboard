import { Box } from "@mui/material"
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { useQuery } from 'react-query'


export default function NewsCard(){
    const {stockTicker} =useParams<{stockTicker:string}>();
    const [info, setInfo]= useState<IFetchetStockNews | null>(null);
    const requestStockTicker = async ()=>{
        await axios.get<IFetchetStockNews>(
            `/query?function=NEWS_SENTIMENT&tickers=${stockTicker}&sort=RELEVANCE&apikey=${import.meta.env.VITE_API_KEY}`)
            .then((response: AxiosResponse<IFetchetStockNews>)=>{
                console.log(response)
                return setInfo(response.data);
            })
    }
    const {isError, isLoading} = useQuery('FetchedNews', requestStockTicker);
    
    if(isError){
        return(<>theres an error</>)
    }
    else if(isLoading){
        return(<>loading</>)
    }
    else{
        return(
        <>
        
            {
                info?.feed.map(e=>{return<Box>{e.url}</Box>})
            }
        </>)
    }
}