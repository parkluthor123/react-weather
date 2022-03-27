export const formatToURL = (text: string)=>{
    const data = text.replaceAll(" ", "%20");
    return data
}

export const getDay = ()=>{
    const date = new Date();
    let nameDay;

    switch(date.getDay()){
        case 0: 
            nameDay = 'Sunday';
            break;
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
    }
    return nameDay;
}