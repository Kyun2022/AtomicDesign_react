export const BaseButton = (props) => {
  const { children, className, onClick } = props;

  return (
    <div className="">
      <button
        className={`text-white px-7 py-2 rounded-2xl hover:opacity-80 cursor-pointer ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
