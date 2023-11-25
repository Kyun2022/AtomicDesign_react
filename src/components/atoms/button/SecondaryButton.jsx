import { BaseButton } from './BaseButton';

export const SecondaryButton = (props) => {
  const { children, className, onClick } = props;
  return (
    <div className="">
      <BaseButton className={`${className} bg-green-700`} onClick={onClick}>
        {children}
      </BaseButton>
    </div>
  );
};
