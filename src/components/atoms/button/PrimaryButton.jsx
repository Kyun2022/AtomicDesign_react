import { BaseButton } from './BaseButton';

export const PrimaryButton = (props) => {
  const { children, className } = props;
  return (
    <div className="">
      <BaseButton {...className} className="bg-gray-600">
        {children}
      </BaseButton>
    </div>
  );
};
