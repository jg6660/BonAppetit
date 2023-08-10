import React, {useEffect, useState} from 'react'
import axios from 'axios';

    const Ingredients = () => {

    // ingre, exp variables --> axios get --> then (set)
    
    // ====GETTING THE INGREDIENTS IN PANTRY OF THE USER FROM DYNAMODB======
    const [ingredients] = useState([])
    const [selectedIngredients, setSelectedIngredients] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [currentIngredients, setCurrentIngredients] = useState(ingredients)
    const [rerender, setRerender] = useState(false);

    function storeData() {
        console.log("api called...")
        const userId = window.sessionStorage.getItem('token')
        const API = `https://qmyu91bey2.execute-api.us-east-1.amazonaws.com/v1/ingredients?userId= + ${userId}`
        const res =  axios.get(API).then((response) => {
            setCurrentIngredients(response.data["text"])
        }).then(() => console.log("got data in currentingredients"));
    }
    console.log("HERE IN INGREDIENTS")
    window.sessionStorage.setItem('selectedIngredients', selectedIngredients)
 
    return (
        <div>
        <button onClick={() =>  storeData()} className="p-4 px-12 bg-slate-900 text-white pointer mr-10 mt-10">Home</button>
        <button onClick={() =>  window.location.href='/AddPantry'} className="p-4 px-12 bg-slate-900 text-white pointer mr-10 mt-10">Add to Pantry</button>
        <form className="container">
            <div>
                <div className='text-lg pt-8'>Currently Selected Ingredients:        
                {selectedIngredients.map(item => {
                    return <span className='text-lg font-bold text-red-500'>{item + ","} &nbsp;</span>
                })}
                 </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-8">
                {
                    currentIngredients && currentIngredients.length > 0 
                    ? 
                    (
                        currentIngredients.map((item) => (
                            <div key={item} className={"px-4 py-8 cursor-pointer " +  
                                (selectedIngredients.indexOf(item) > -1 ? "bg-slate-800 outline-double outline-3 outline-offset-2 text-white text-center" : "hover:bg-slate-400 outline-double outline-3 outline-offset-2 text-black text-center")
                             } onClick={() => {
                                let temp = selectedIngredients 
                                if (!temp.includes(item)) {
                                    temp.push(item)
                                } else {
                                    const index = temp.indexOf(item)
                                    if(index > -1) {
                                        temp.splice(index, 1)
                                    }
                                }
                                
                                setSelectedIngredients(temp)
                                setRerender(!rerender);     
                            }}>
                                <span key={item} htmlFor={item} className="px-2">{item}</span>
                            </div>
                    ))
                    ) : (
                    <h1>No results found!</h1>
                    )
                }
            </div>
        </form>
        
    <button onClick={() =>  window.location.href='/GetRecipes'} className="p-4 px-12 bg-slate-900 text-white pointer mt-10 mr-10">Get Recipes</button>
 </div>
    )  
}

export default Ingredients
