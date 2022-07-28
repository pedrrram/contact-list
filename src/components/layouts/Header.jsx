import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-zinc-800 w-full h-auto p-5 flex flex-col items-center justify-center my-5 sm:rounded-xl">
      <h3 className="text-xl text-yellow-500 drop-shadow-lg">Contact List</h3>
      <Navbar />
    </header>
  );
};

export default Header;
