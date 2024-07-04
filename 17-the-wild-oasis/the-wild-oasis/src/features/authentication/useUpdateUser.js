import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateCurrentUser as updateCurrentUserApi } from "../../services/apiAuth";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUserApi,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user);
      //   queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
};
