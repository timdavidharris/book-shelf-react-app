import React, { useState } from 'react';
import UpdateForm from './UpdateForm';

export default function Update(props) {
    const [updateText, setUpdateText] = useState(props.updateText);
    const [editPassword, setEditPassword] = useState(false);

    const handleChange = (e) => {
        setUpdateText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUpdateText(updateText);
        setEditPassword(false);
    }

    const passwordCheck = () => {
        if (prompt("Enter password") === "micahman") {
            setEditPassword(true);
        } else {
            alert("You are not Tim Harris, please just use this site to read updates.")
        }
    }

    const renderEditForm = () => {
        return (<UpdateForm handleChange={handleChange} handleSubmit={handleSubmit} updateText={updateText} />)
    }
    
    return (
        <div className="update-child-div">
            <p>
                {updateText}
            </p>
            <button onClick={() => passwordCheck()}>
                edit
            </button>
            {editPassword ? renderEditForm() : null}
        </div>
    )
}