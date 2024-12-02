export const API_KEY = "AIzaSyC2kPXPx1p6G-e-F4QCSRYfRcDTMeC7kRY";   

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}