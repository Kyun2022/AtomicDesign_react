import { Card } from '../atoms/card/Card';
import { UserIconWithName } from '../molecules/user/UserIconWithName';

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <div className="">
        <UserIconWithName image={user.image} name={user.name} />
        <div className="">
          <dl className="flex">
            <dt className="w-12">メール</dt>
            <dd className="pl-8 pb-2 break-words">{user.email}</dd>
          </dl>
          <dl className="flex">
            <dt className="w-12">TEL</dt>
            <dd className="pl-8 pb-2 break-words">{user.phone}</dd>
          </dl>
          <dl className="flex">
            <dt className="w-12">会社名</dt>
            <dd className="pl-8 pb-2 break-words">{user.company.name}</dd>
          </dl>
          <dl className="flex">
            <dt className="w-12">WEB</dt>
            <dd className="pl-8 pb-2 break-words">{user.website}</dd>
          </dl>
        </div>
      </div>
    </Card>
  );
};
