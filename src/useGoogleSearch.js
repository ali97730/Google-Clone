import React,{useState,useEffect} from 'react'
import API_KEY from "./keys"

//import api Key from keys.js File





const CONTEXT_KEY = "4175204e165bb78b3";

// https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key

//https://cse.google.com/cse/create/new
const useGoogleSearch=(term)=> {
    const [data,setData] = useState(null);
    console.log(API_KEY+"is APi")
    useEffect(() => {
        
        const fetchData = async() =>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(res => res.json())
            .then(result => {setData(result)})
        }
       
        fetchData();
        
    }, [term])
    
    return { data } 
}

export default useGoogleSearch;
