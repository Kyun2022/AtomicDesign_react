export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <div className="text-center ">
      <img
        className="w-32 h-32 block mx-auto rounded-full object-cover"
        height={200}
        width={200}
        src={image}
        alt={name}
      />
      <p className="pb-2 pt-2 font-bold text-lg text-gray-700">{name}</p>
    </div>
  );
};
