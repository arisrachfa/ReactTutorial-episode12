import React,{useState} from 'react'

const ShowText = () => {
    // state
    const  [isVisible, setIsVisible] = useState(false);

  return (
    <div className='App'>
        <p>Ini merupakan halaman Show Text dengan menggunakan React Hook-useState</p>
        <hr /><br />
        <button onClick={() => setIsVisible((prev) => !prev)}>
            {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible &&  <h1>HIDDEN TEXT</h1>}
    </div>
  )
}

export default ShowText