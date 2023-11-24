import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-green-600 text-center py-2 text-white">
      <Link className="mx-2" to="/">
        HOME
      </Link>
      <Link className="mx-2" to="/users">
        USERS
      </Link>
    </header>
  );
};
