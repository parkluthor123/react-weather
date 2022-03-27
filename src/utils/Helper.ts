export const formatToURL = (text: string)=>{
    const data = text.replaceAll(" ", "%20");
    return data
}

export const getDay = ()=>{
    const date = new Date();
    console.log(date)
    return date;
}