import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    addTransaction({ text, amount: +amount });
    setText('');
    setAmount(0);
  };

  return (
  <>
  <h3>Add new transaction</h3>
  <form onSubmit={onSubmit}>
    <div>
      <label>Transaction Description</label>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="e.g., Grocery shopping"
        required
      />
    </div>
    <div>
      <label>Amount (negative = expense, positive = income)</label>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        required
      />
    </div>
    <button type="submit">Add transaction</button>
  </form>
</>

  );
};
export default AddTransaction;
