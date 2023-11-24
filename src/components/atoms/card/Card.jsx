export const Card = (props) => {
  const { children } = props;
  return (
    <div className="bg-white rounded-2 shadow-lg shadow-black-500/40 p-4">
      {children}
    </div>
  );
};
