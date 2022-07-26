const FormControl = ({ inputAttrs, labelValue, labelAttrs }) => {
  return (
    <div className="flex justify-center items-center">
      <label className="mr-3 sm:w-16" {...labelAttrs}>
        {labelValue}:
      </label>
      <input className="p-2 sm:w-72 rounded-lg outline-none shadow-sm bg-zinc-200 text-zinc-900" {...inputAttrs} />
    </div>
  );
};

export default FormControl;
