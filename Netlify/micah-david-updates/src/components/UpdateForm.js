export default function updateForm(props) {
    const handleSubmit = props.handleSubmit;
    const handleChange = props.handleChange;
    const updateText = props.updateText;

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Update:
                <br/>
                <textarea value={updateText} onChange={handleChange} />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}