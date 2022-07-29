const Button = ({ onClick, color, children }) => {
  return (
    <button
      type="submit"
      className={`text-zinc-900 font-normal border px-5 py-2 rounded-lg transition-all duration-300 hover:shadow-lg
       bg-yellow-500 border-yellow-500 hover:shadow-yellow-500/50`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
