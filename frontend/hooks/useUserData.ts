import UserAction from "@/actions/user";
import { useQuery } from "@tanstack/react-query";

const useUserData = (userId: string) => {
  const {
    data: userData,
    isLoading: isUserLoading,
    isFetching: isUserFetching,
    refetch: refetchUser,
  } = useQuery({
    queryKey: ["User", "userById"],
    queryFn: async () => {
      return UserAction.getUserById(userId);
    },
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  return {
    userData,
    isUserFetching,
    isUserLoading,
    refetchUser,
  };
};

export default useUserData;
