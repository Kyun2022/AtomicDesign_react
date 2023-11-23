export const PrimaryButton = (props) => {
  const { children } = props;
  return (
    <div className="flex justify-center align-middle mt-2">
      <button className=" bg-gray-600  text-white px-6 py-2 rounded-lg hover:opacity-80 cursor-pointer">
        {children}
      </button>
    </div>
  );
};
