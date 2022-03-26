import axios from 'axios';
import useSWR from 'swr'

export function useFetch<Data = any, Error = any>(url:string)
{
    const {data, error} = useSWR(url, async (url)=>{
        const response = await axios.get(url)
        return response.data;
    },{
        revalidateOnFocus: true,
        revalidateOnReconnect: true
    })

    return { data, error }
}