import { Link } from "react-router";

const MailboxList = (props) => {

    return (
        <>
            <h2>Mailbox List</h2>
            <div className="mailbox-container">
                <ul>
                    {props.mailboxes.map((currentMail) => (
                        <div key={currentMail._id} className="square-box">
                           <p> Owner :  
                            <Link to={`/mailboxes/${currentMail._id}`}>
                              {currentMail.boxOwner}
                            </Link> 
                            </p>
                            <p> Box Number : {currentMail._id} </p> 
                            <p> Box Size: {currentMail.boxSize} </p>
                        </div>
                    ))}
                </ul >
            </div>

        </>
    )
}

export default MailboxList;