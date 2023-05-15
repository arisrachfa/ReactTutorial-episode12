import Axios from 'axios';
import { useQuery } from '@tanstack/react-query'

export const useGetCat = () => {
    // fetch  data menggunakan react query dan axios
    const { 
        data,
        refetch,
        isLoading: isCatLoading,
        error, 
        } = useQuery(["cat"], async() => {
        return Axios.get("https://catfact.ninja/fact")
        .then((res) => res.data);
    });

    // handle refecth
    const refecthData = () => {
        alert("DATA REFECTHED");
        refetch();
    }

  return {data, refecthData, isCatLoading};
};
