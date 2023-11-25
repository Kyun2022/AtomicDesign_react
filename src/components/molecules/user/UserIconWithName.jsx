import React, { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../store/userState';

export const UserIconWithName = memo((props) => {
  console.log('UserIconWithName');
  const { image, name } = props;

  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);

  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <div className="text-center ">
      <img
        className="w-32 h-32 block mx-auto rounded-full object-cover"
        height={200}
        width={200}
        src={image}
        alt={name}
      />
      <div className="pb-2 pt-2 font-bold text-lg text-gray-700">
        {name}
        {isAdmin && (
          <p className="underline text-gray-500 cursor-pointer">編集</p>
        )}
      </div>
    </div>
  );
});
