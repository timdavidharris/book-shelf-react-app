import React, { useState } from 'react';
import Update from "./Update"

export default function UpdateForm() {
    const [updateArray, setUpdateArray] = useState([]);
    const [updateText, setUpdateText] = useState("");

    const handleChange = (e) => {
        setUpdateText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUpdateArray([...updateArray, updateText]);
    }

    const password = () => {
        if (prompt("Enter password") === "thisistim") {
            return (
                <form onSubmit={handleSubmit}>
                    <label>
                        Update:
                        <input type="text" value={updateText} onChange={handleChange} />
                    </label>
                </form>
            );
        } else {
            alert("You are not Tim Harris, please just use this site to read updates.")
        }
    }

    return(
        <div>
        <button onClick={() => password()}>
            Click to Add Update
        </button>
            <Update updateText={updateText}/>
        </div>
    )
}