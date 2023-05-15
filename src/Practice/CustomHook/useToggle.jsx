import React, {useState} from 'react'

export const useToggle = (initialVal = false) => {
    // state
    const [state, seState] = useState(initialVal)

    // make func untuk menentukan value state
    const toggle = () => {
        seState((prev) => !prev);
    };

// ini contoh ketika di  return sebagai object, dan yang menggunakan hook ini harus memanggil sesuai funct yang telah dibuat
//   return {state, toggle};
  
// ini contoh ketika di return sebagai array, maka dapat dirubah nama functnya ketika digunakan 
  return [state, toggle];
}; 