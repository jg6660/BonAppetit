import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Ingredients from '../Ingredients';

const CallngIngredients = (props) => {
    return (
        <div>{props.children}</div>
    )
}

export default CallngIngredients