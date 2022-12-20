import { useState } from "react"
import Template from "./Template";

export default function Search() {
    const [searchText, setSearchText] = useState('')

    function handleSearch(e) {
        e.preventDefault();
        setSearchText(e.target.value)
    }

    return (
        <>
            <input type="text" onKeyUp={event => handleSearch(event)} />
            <Template searchText={searchText} />
        </>
    )
}