import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((t, i) => (
          <li key={i} className={t.amount < 0 ? 'minus' : 'plus'}>
            {t.text} <span>{t.amount}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TransactionList;
