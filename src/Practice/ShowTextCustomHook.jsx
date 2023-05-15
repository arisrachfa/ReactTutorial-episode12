import React from 'react'
import {useToggle} from '../Practice/CustomHook/useToggle'

const ShowTextCustomHook = () => {
    // state ketika menjadi sebuah object
    // const {state, toggle} = useToggle();
    // const {state2, toggle2} = useToggle();

    // state  ketika menjadi array, dan state didalamnya bisa dirubah sesuai keinginan tidak harus sama dengan apa yang direturn dari custom HOOK
    const [isVisible, toggle] = useToggle();
    const [isVisible2, toggle2] = useToggle();


  return (
    <div className='App'>
        <p>Ini merupakan halaman Show Text dengan menggunakan Custom Hook useToggle, yang dimana hook ini bisa digunakan berulangkali</p>
        <hr /><br />

        {/* ini merupakan contoh ketika useToggle di return sebagai object {} */}
        {/* <button onClick={toggle}>
            {state ? "Hide" : "Show"}
        </button>
        {state &&  <h1>HIDDEN TEXT</h1>} */}

        {/* button 2 tidak berfungsi ketika custom hook direturn sebagai objek */}
        {/* <hr /><br />
        <button onClick={toggle2}>
            {state2 ? "Hide" : "Show"}
        </button>
        {state2 &&  <h1>HIDDEN TEXT 2</h1>} */}

        {/* ini contoh ketika menggunakan useToggle sebagai array */}
        <button onClick={toggle}>
            {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible &&  <h1>HIDDEN TEXT</h1>}

        {/* button 2 */}
        <hr /><br />
        <button onClick={toggle2}>
            {isVisible2 ? "Hide" : "Show"}
        </button>
        {isVisible2 &&  <h1>HIDDEN TEXT 2</h1>}

    </div>
  )
}

export default ShowTextCustomHook