import React, {useState} from 'react'

const Search = () => {

    const [searchInput, setSearchInput] = useState('')

    const onChangeSearch = (e) => setSearchInput(e.target.value)

    return (
        <input
            type="text"
            value={searchInput}
            onChange={onChangeSearch}
        ></input>
    )
}

export default Search