import { useContext, useState } from "react"
import { globalContext } from "../context/GlobalState";
import {v4 as uuidv4} from "uuid"; 

const AddTransaction = () => {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(globalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: uuidv4(),
            text: text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setText("");
        setAmount(0);
    }

    return (
        <>

            <h3>Add new Transaction</h3>
            <form id="form" onSubmit={handleSubmit}>

                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter transaction description..."></input>
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(Negative amount - expense, Positive amount - income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="Enter amount..."></input>
                </div>
                <button className="btn">Add transaction</button>
            </form>
            
        </>
    )
}

export default AddTransaction
