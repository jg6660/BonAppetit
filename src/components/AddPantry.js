import React, {useEffect, useState} from 'react'
import Calendar from 'react-calendar';
import axios from 'axios';


const AddPantry = () => {
    
    const [currDate, setCurrDate] = useState(new Date());
    const [selectedIngredients, setSelectedIngredients] = useState([])
    const [enteredText, setEnteredText] = useState("")
    const [submittedText, setSubmittedText] = useState([])
    const textChangeHandler = (i) => {
        setEnteredText(i.target.value);
        console.log(i.target.value);
    }

    const [newIngr, setNewIngr] = useState([])
    const [newExp, setNewExp] = useState([])

    useEffect(() => {
        setSelectedIngredients(selectedIngredients)
    }, [selectedIngredients])

    const submitHandler = (event) => {
        event.preventDefault();
        setSubmittedText(enteredText);
        setEnteredText("");
    }

    const userId = window.sessionStorage.getItem('token')
    const uploadtoDynamo = async() => {
        const obj = {
            "userId": userId,
            "ingredients": newIngr,
            "expiries": newExp
        }
            
        const res = axios.post('https://qmyu91bey2.execute-api.us-east-1.amazonaws.com/v1/upload/', obj)
          .then(function (response) {
            console.log(response);
            // Empty the lists
            setNewExp([])
            setNewIngr([])
            alert("Uploaded to the Database")
          })
          .catch(function (error) {
            console.log(error);
          });

        //   Empty the lists after completion
    }
    
    const pushToFinalList = (name, expDate) => {
        const newArr = ((expDate.getMonth() > 8) ? (expDate.getMonth() + 1) : ('0' + (expDate.getMonth() + 1))) + '/' + ((expDate.getDate() > 9) ? expDate.getDate() : ('0' + expDate.getDate())) + '/' + expDate.getFullYear()
        console.log(name, newArr)
        const temp = newIngr
        const temp2 = newExp
        temp.push(name)
        temp2.push(newArr)
        setNewIngr(temp)
        setNewExp(temp2)
        console.log('list: ', newIngr, newExp)
    }
    
    return (
        <div>
        <button onClick={() =>  window.location.href='/'} className="p-4 px-12 bg-slate-900 text-white pointer mr-10 mt-10">Home</button>
        <button onClick={() =>  window.location.href='/AddPantry'} className="p-4 px-12 bg-slate-900 text-white pointer mr-10 mt-10">Add to Pantry</button>
        <form onSubmit = {submitHandler} className="container">
            <input
                type="text"
                value={enteredText}
                onSubmit={submitHandler}
                onChange={textChangeHandler}
                className="border-solid border-2 rounded-lg border-gray-200 p-4 my-4 w-full"
                placeholder="Enter the Name of the Item"
                autoFocus
            />
            <Calendar className="react-calendar mb-10 mt-10" onChange={setCurrDate} value={currDate} />
            <input
                value={((currDate.getMonth() > 8) ? (currDate.getMonth() + 1) : ('0' + (currDate.getMonth() + 1))) + '/' + ((currDate.getDate() > 9) ? currDate.getDate() : ('0' + currDate.getDate())) + '/' + currDate.getFullYear()}
                className="border-solid border-2 rounded-lg border-gray-200 p-4 my-4 w-full"
                placeholder="Enter the Expiry Date of the Item"
                autoFocus
            />

           
           <button onClick={() => pushToFinalList(enteredText, currDate)} className="p-4 px-12 bg-slate-900 text-white pointer mr-10">Add ingredient</button>
           <button onClick={() => uploadtoDynamo()} className="p-4 px-12 bg-slate-900 text-white pointer mr-10">Upload to the database</button>
           </form>
        {submittedText && (<p className = "mt-5 mb-5">You just typed: {submittedText}</p>)}

        <button onClick={() =>  window.location.href='/GetRecipes'} className="p-4 px-12 bg-slate-900 text-white pointer mr-10">Get Recipes</button>
        </div>
    )
    
}

export default AddPantry
