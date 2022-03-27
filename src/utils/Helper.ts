export const formatToURL = (text: string)=>{
    const data = text.replaceAll(" ", "%20");
    return data
}

export const getDay = (day: number, isShort: boolean = false)=>{
    let nameDay;

    switch(day){
        case 1:
            nameDay = 'Monday';
            break;
        case 2:
            nameDay = 'Tuesday';
            break;
        case 3:
            nameDay = 'Wednesday';
            break;
        case 4:
            nameDay = 'Thursday';
            break;
        case 5:
            nameDay = 'Friday';
            break;
        case 6:
            nameDay = 'Saturday';
            break;
        case 7: 
            nameDay = 'Sunday';
            break;
    }

    if(!isShort)
    {
        return nameDay;   
    }
    else{
        return nameDay?.substring(0, 3);
    }
}