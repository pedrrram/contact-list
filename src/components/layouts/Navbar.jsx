import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const items = [
    { name: 'Contacts', to: '/' },
    { name: 'Add Contact', to: '/add' },
  ];

  return (
    <nav className="text-yellow-500 py-3 mt-4 px-5 space-x-4">
      {items.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className={({ isActive }) =>
            isActive
              ? 'font-normal text-yellow-500 border-b-2 border-yellow-500 pb-1'
              : ''
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
