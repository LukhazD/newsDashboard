const cutText=(text: string, limit: number)=>{
    const truncated = text.length > limit ? text.substring(0, limit - 3).trim() + "..." : text;
    return <>{truncated}</>
}

export default cutText