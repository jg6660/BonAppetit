import React, {useEffect, useState} from 'react'
// import * as ReactDOM from "react-dom";
import axios from 'axios';



const GetRecipes = () => {
    
    const cuisines = ['Greek','Southern Us','Filipino','Indian','Jamaican','Spanish','Italian','Mexican','Chinese','British','Thai','Vietnamese','Cajun Creole','Brazilian','French','Japanese','Irish','Korean','Moroccan','Russian']
    function handleChange(e) {
        window.sessionStorage.setItem('cuisine', e.target.value)
    }

    const listIng = window.sessionStorage.getItem('selectedIngredients')
    const cuisine = window.sessionStorage.getItem('cuisine')
    const [resul, setResul] = useState([])
    
    async function hitApi(){
        const API2 = `https://qmyu91bey2.execute-api.us-east-1.amazonaws.com/v1/recipes?ingredients=+${listIng}+&cuisine=+${cuisine}`
        console.log(API2);
        const resi =  await axios.get(API2).then((response) => {
        setResul(response.data["results"])   
        console.log(resul) 
    });
    }
    
    return (
        <div>
        <button onClick={() =>  window.location.href='/'} className="p-4 px-12 bg-slate-900 text-white pointer mr-10 mt-10">Re-Select Ingredients</button>
        <button onClick={() =>  window.location.href='/'} className="p-4 px-12 bg-slate-900 text-white pointer mr-10 mt-10">Home</button>
        <button onClick={() =>  window.location.href='/AddPantry'} className="p-4 px-12 bg-slate-900 text-white pointer mr-10 mt-10">Add to Pantry</button>
        <form className="container">
            <div>
            <label>
            <div className='text-lg pt-8 italic'>Select the type of cuisine you want to eat  :   
                <select onChange={handleChange}>
                    {
                        cuisines.map(cuisine => {
                            return (
                                <option key={cuisine} value={cuisine}>{cuisine}</option>
                            )
                        })
                    }
                </select>
                </div>
            </label>
            </div>
        </form>
        <button onClick={() => hitApi()} className="p-4 px-12 bg-slate-900 text-white pointer mr-10 mt-10 mb-10">Get Recipes</button>
        <div className=''>
                {
                    resul.map(item => {
                        return (
                            <div className="grid grid-cols-4 gap-4 mt-8 shadow-xl border-double mb-8 mr-15 ml-15">
                                <h1 className="text-4xl font-bold" key={item["_id"]}>{item["_source"]["recipe_name"]}</h1>
                                <img src = {item["_source"]["image_url"]} width="500" height="600"  />
                                <h2 className="italic"><b><i>Ingredients :</i></b> {item["_source"]["ingredients"] + " "}</h2>
                                <h2 className="italic"><b><i>Recipe :</i></b>{item["_source"]["cooking_directions"] + " "}</h2>
                                <h2><b><i>Calories :</i></b>{item["_source"]["calories"]}</h2>
                                <h2><b><i>Carbohydrates :</i></b>{item["_source"]["carbohydrates"]}</h2>
                                <h2><b><i>Protein :</i></b>{item["_source"]["protein"]}</h2>
                                <h2><b><i>Fat :</i></b>{item["_source"]["fat"]}</h2>
                                <h2><b><i>Sodium :</i></b>{item["_source"]["sodium"]}</h2>
                                <h2><b><i>Fiber :</i></b>{item["_source"]["fiber"]} </h2>                               
                                <br></br>
                            </div>
                        )
                    })
                }
        </div>
        </div>
    )
}

export default GetRecipes