import React, { useEffect, useState }  from 'react'

const ToggelBackground = () => {
    const [isBlue, setisBlue] = useState(false);
    useEffect(()=>{
         document.body.style.backgroundColor = isBlue ? "blue" : 'pink';
    },[isBlue])
    

    
   
  return (
    <div className='text-center my-20'>
        <h2 className='text-3xl ' >useEffect Look </h2>
        <button onClick={()=>{setisBlue(!isBlue)}} className='border border-black bg-purple-600 text-white py-2 px-4'>{isBlue ? "click change to pink " : "click change to blue"}</button>
    </div>
  )
}

export default ToggelBackground