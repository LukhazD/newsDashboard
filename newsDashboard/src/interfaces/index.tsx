interface Itopics{
    topic: String,
    relevance_score: String
}

interface ITicketSentiment{
    ticker: String,
    relevance_score: String,
    ticker_sentiment_score: String,
    ticker_sentiment_label: String
}

interface IFetchetStockNews{
    feed:Array<{
    title: String,
    url: String,
    time_published: String,
    authors: Array<String>,
    summary: String,
    banner_image: String,
    source: String,
    category_within_source: String,
    source_domain: String,
    topics: Array<Itopics>,
    overall_sentiment_score: Number,
    overall_sentiment_label: String,
    ticker_sentiment: Array<ITicketSentiment>}>
}