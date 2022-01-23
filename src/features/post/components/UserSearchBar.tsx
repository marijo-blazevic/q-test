import { TextInput } from "@/components/input/TextInput";
import useUsers from "@/lib/api/useUsers";
import { distinctArray } from "@/utils/ArrayUtils";
import { css } from "@emotion/css";
import { useEffect, useMemo, useState } from "react";

type UserSearchBarProps = {
  users: number[];
  handleFilteredUserData: (users: number[] | undefined) => void;
};

export const UserSearchBar: React.FC<UserSearchBarProps> = (props) => {
  const { users, handleFilteredUserData } = props;
  const uniqueUsers = useMemo(() => users.filter(distinctArray), [users]);
  const { isLoading, data } = useUsers(uniqueUsers);

  const [filterString, setFilterString] = useState<string>("");

  useEffect(() => {
    const res = data?.filter((val) =>
      val.name.toLowerCase().includes(filterString.toLowerCase())
    );
    handleFilteredUserData(res?.map((r) => r.id));
  }, [data, filterString, handleFilteredUserData]);

  return (
    <TextInput
      disabled={isLoading}
      onChange={setFilterString}
      placeholder="Search by Author"
      className={css`
        margin-bottom: 1rem;
      `}
    />
  );
};
