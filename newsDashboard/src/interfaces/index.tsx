interface Itopics{
    topic: string,
    relevance_score: string
}

interface ITicketSentiment{
    ticker: string,
    relevance_score: string,
    ticker_sentiment_score: string,
    ticker_sentiment_label: string
}
interface ItradedStocks{
    ticker: string,
    price: string,
    change_amount: string,
    change_percentage: string,
    volume: string
}
interface IFetchetStockNews{
    feed:Array<{
        title: string,
        url: string,
        time_published: string,
        authors: Array<string>,
        summary: string,
        banner_image: string,
        source: string,
        category_within_source: string,
        source_domain: string,
        topics: Array<Itopics>,
        overall_sentiment_score: Number,
        overall_sentiment_label: string,
        ticker_sentiment: Array<ITicketSentiment>
    }>
}

interface IGainersLosers {
    top_gainers:ItradedStocks[],
    top_losers:ItradedStocks[],
    most_actively_traded: ItradedStocks[]
}

interface ICryptoRates{
    "Realtime Currency Exchange Rate": {
        "1. From_Currency Code": string,
        "2. From_Currency Name": string,
        "3. To_Currency Code": string,
        "4. To_Currency Name": string,
        "5. Exchange Rate": string,
        "6. Last Refreshed": string,
        "7. Time Zone": string,
        "8. Bid Price": string,
        "9. Ask Price": string
    }
}