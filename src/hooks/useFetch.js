import  {useState, useEffect} from "react";

export default function useFetch(url) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState({});
    
    const getData = async (url) => {
        try {
            setLoading(true);
            let response = await fetch(url);
            let data = await response.json();
            setData(data);
        } catch(error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData(url);
    }, []);

    return [loading, error, data];

}