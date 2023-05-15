import React from 'react';
import { useGetCat } from './useGetCat';
// import Axios from 'axios';
// import { useQuery } from '@tanstack/react-query' 

const Cat = () => {
    // fetch data menggunakan react query dan axios
    // ini juga merupakan basic hook yang sudah disediakan oleh React
    // const { 
    //     data: catData, 
    //     } = useQuery(["cat"], async() => {
    //     return Axios.get("https://catfact.ninja/fact")
    //     .then((res) => res.data);
    // });

    // menggunakan custom hook useGetCat
    const {data, isCatLoading, refecthData} = useGetCat();
    
    // kondisi ketika
    if (isCatLoading) return <h1>Loading....</h1> 

  return (
    <div>
        <p>Ini merupakan Halaman Custom Hook untuk memanggil sebuah custom hook untuk meng fetch data API</p>
        {/* ini merupakan display dari pemanggilan menggunakan useQuery */}
        {/* <h1>{catData?.fact}</h1> */}

        {/* ini merupakan pemanggilan menggunakan useGetCat / Custom HOOK */}
        <button onClick={refecthData}>Refetch</button>
        <h1>{data?.fact}</h1>
    </div>
  )
}

export default Cat