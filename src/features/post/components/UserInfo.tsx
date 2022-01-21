import { p2Style } from "@/components/styles/text";
import useUser from "@/lib/api/useUser";

type UserInfoProps = {
  userId: string;
};

export const UserInfo: React.FC<UserInfoProps> = (props) => {
  const { userId } = props;
  const { status, data, error } = useUser(userId);

  if (status === "loading") return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div>
      <p className={p2Style}>Author: {data?.name}</p>
    </div>
  );
};
