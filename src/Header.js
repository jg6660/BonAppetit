import React from 'react'

const Header = () => {

    return (
        <div className='text-gray-100 text-5xl text-center bg-slate-800 py-8 px-4 font-serif font-bold'>  
            <button onClick={() =>  window.location.href='/'} className="text-gray-100 text-5xl text-center bg-slate-800 py-8 px-4 font-serif font-bold italic">Bon Appetit</button>
        </div>
    )
}


export default Header