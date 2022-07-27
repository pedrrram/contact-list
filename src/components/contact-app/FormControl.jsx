const FormControl = ({ inputAttrs, labelValue, labelAttrs }) => {
  return (
    <div className="flex justify-center items-center">
      <label className="mr-3 sm:w-16" {...labelAttrs}>
        {labelValue}:
      </label>
      <input
        className="py-[6px] px-3 sm:w-72 rounded-lg outline-none shadow-sm border-2 border-zinc-600 bg-zinc-200 text-zinc-900 hover focus:border-yellow-500"
        {...inputAttrs}
      />
    </div>
  );
};

export default FormControl;
