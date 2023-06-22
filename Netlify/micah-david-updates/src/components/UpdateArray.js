import React, { useState } from 'react';
import UpdateForm from './UpdateForm';
import Update from "./Update"

export default function UpdateArray() {
    const [updateArray, setUpdateArray] = useState([]);
    const [updateText, setUpdateText] = useState("");
    const [password, setPassword] = useState(false);

    const handleChange = (e) => {
        setUpdateText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateArray.unshift(updateText);
        setUpdateArray(updateArray);
        setPassword(false);
        setUpdateText("");
    }

    const renderUpdates = () => {
        return updateArray.map((updateText, index) => {
            return <Update key={index} updateText={updateText} handleSubmit={handleSubmit} handleChange={handleChange}/>
        })
    }

    const passwordCheck = () => {
        if (prompt("Enter password") === "micahman") {
            setPassword(true);
        } else {
            alert("You are not Tim Harris, please just use this site to read updates.")
        }
    }

    const renderUpdateForm = () => {
        return (<UpdateForm handleChange={handleChange} handleSubmit={handleSubmit} updateText={updateText} />)
    }

    return(
        <div>
            <div className='update-parent-div'>
            {password ? renderUpdateForm() : null}
            { renderUpdates() }
            </div>
            <footer>
                <button onClick={() => passwordCheck()}>
                    Click to Add Update
                </button>
            </footer>
        </div>
    )
}