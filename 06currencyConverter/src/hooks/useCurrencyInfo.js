import { useEffect, useState } from "react"
import axios from 'axios';

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    let url = `https://open.er-api.com/v6/latest/${currency}`

    const fetchAPIData = async () => {
        try {
            const response = await axios(url);

            setData(response.data.rates);
        } catch (error) {
            console.log("Error in the fetchAPiCall", error.message)
        }
    }
    
    useEffect(() => {
        fetchAPIData()
    },
        [currency]);

    return data;
}

export default useCurrencyInfo