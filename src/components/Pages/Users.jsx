import React from 'react';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/UserCard';
// import { UserContext } from '../../provider/UserProvider';
import { useRecoilState } from 'recoil';
import { userState } from '../../store/userState';

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image:
      'https://images.unsplash.com/photo-1498579687545-d5a4fffb0a9e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: `きゅん${val + 1}`,
    email: '12345@examle.com',
    phone: '090-1111-2222',
    company: {
      name: 'テスト株式会社',
    },
    website: 'https://google.com',
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <div className="flex flex-col items-center p-6 ">
      <h2 className="text-3xl font-bold pb-6">ユーザー一覧</h2>
      <SearchInput />
      <div className="mt-10">
        <SecondaryButton onClick={onClickSwitch}>切替</SecondaryButton>
      </div>
      <div className="mt-10 w-full grid grid-cols-auto-fit-minmax-300 gap-5">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
