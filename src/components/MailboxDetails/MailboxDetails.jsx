import { useParams } from "react-router";

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );

    return (
        <>
            <h2>Mailbox Details</h2>
            <dl>
                <dt>Box Number:</dt>
                <dd>{selectedBox._id}</dd>
                <dt>Owner:</dt>
                <dd>{selectedBox.boxOwner}</dd>
                <dt>Box Size:</dt>
                <dd>{selectedBox.boxSize}</dd>
            </dl>
        </>
    )
}

export default MailboxDetails;