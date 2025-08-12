import { useState } from "react";

const initialMailboxes = {
    boxSize: "",
    boxOwner: ""
}


const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialMailboxes)


    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData(initialMailboxes);
    };


    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    }
        return (
            <main>
                <h2>New Mailbox</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="boxOwner">Owner:</label>
                    <input
                        type="text"
                        id="boxOwner"
                        name="boxOwner"
                        value={formData.boxOwner}
                        onChange={handleChange}
                    />
                    <label htmlFor="boxSize">Box Size:</label>
                    <input
                        type="text"
                        id="boxSize"
                        name="boxSize"
                        value={formData.boxSize}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>

            </main>
        )
    }


export default MailboxForm;