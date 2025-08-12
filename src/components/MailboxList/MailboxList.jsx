import { Link } from "react-router";

const MailboxList = (props) => {

    return (
        <>
            <h2>Mailbox List</h2>
            <ul>
                {props.mailboxes.map((currentMail) => (
                    <li key={currentMail._id}>
                        <Link to={`/mailboxes/${currentMail._id}`}>
                            {currentMail.boxOwner}
                        </Link>
                    </li>
                ))}
            </ul >


        </>
    )
}

export default MailboxList;