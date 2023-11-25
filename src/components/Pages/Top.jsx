import { useNavigate } from 'react-router-dom';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../store/userState';

export const Top = () => {
  const navigate = useNavigate();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate('/users');
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate('/users');
  };

  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold pb-6">Topページです</h2>
      <div className="flex justify-center flex-col gap-5">
        <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
        <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      </div>
    </div>
  );
};
