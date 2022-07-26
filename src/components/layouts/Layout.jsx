import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full min-h-screen bg-zinc-900 text-zinc-100 font-light">
      <div className="container mx-auto flex flex-col">
        <Header />
        <div className="px-5 flex flex-col items-center">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
