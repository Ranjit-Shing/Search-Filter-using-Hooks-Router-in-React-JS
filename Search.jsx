import React, { useState } from 'react'
import Sresult from './Sresult'
const Search = () => {
    const [img, setimg] = useState("")
    const imageEvent = (event) => {
        const data = event.target.value
        setimg(data)
    }
    return (
        <>
            <div className="searchbar">
                <input type="text" placeholder="Search Here"
                    value={img} onChange={imageEvent} />
                {img === "" ? null : <Sresult name={img} />}

            </div>

        </>

    )
}
export default Search