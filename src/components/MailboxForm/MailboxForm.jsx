import { useState } from "react";
import { useNavigate } from "react-router";

const initialMailboxes = {
    boxSize: "",
    boxOwner: ""
}


const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialMailboxes)

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBox(formData);
        setFormData(initialMailboxes);
        navigate("/mailboxes")
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
                    <label htmlFor="boxSize">Choose a Box Size:</label>
                  <select id="boxSize" name="boxSize">
                    <option value="">please choose an option</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                    <button type="submit">Submit</button>
                </form>

            </main>
        )
    }


export default MailboxForm;