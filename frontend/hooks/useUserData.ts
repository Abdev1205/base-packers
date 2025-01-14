import UserAction from "@/actions/user";
import { UserDataApiRes } from "@/types";
import { useQuery } from "@tanstack/react-query";

const useUserData = (userId: string) => {
  const {
    data: userData,
    isLoading: isUserLoading,
    isFetching: isUserFetching,
    refetch: refetchUser,
  } = useQuery({
    queryKey: ["userById"],
    queryFn: async () => {
      const userData = await UserAction.getUserById(userId);
      return userData as UserDataApiRes;
    },
    staleTime: 0,
    refetchOnWindowFocus: false,
    enabled: false,
  });

  return {
    userData,
    isUserFetching,
    isUserLoading,
    refetchUser,
  };
};

export default useUserData;
