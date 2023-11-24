import { BaseButton } from './BaseButton';

export const SecondaryButton = (props) => {
  const { children, className } = props;
  return (
    <div className="">
      <BaseButton {...className} className=" bg-green-700">
        {children}
      </BaseButton>
    </div>
  );
};
