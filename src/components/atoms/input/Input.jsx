export const Input = (props) => {
  const { className, placeholder = '' } = props;
  return (
    <input
      type="text"
      className={`px-4 border-2 rounded-2xl outline-none ${className}`}
      placeholder={placeholder}
    />
  );
};
