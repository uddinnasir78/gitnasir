import { Link } from 'react-router-dom';

const Accounts = () => {
  return (
    <>
      <h2>Accounts page</h2>
      <Link to="/newacct">New Acct</Link>
      <Link to="/dataentry">Data Entry</Link>
      <Link to="/areport">Accounting Report</Link>
    </>
  );
};

export default Accounts;