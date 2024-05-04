import { useSnackbar } from "notistack";
import { useMutation, useQueryClient } from "react-query";
import { postUploadImage } from "../axios/upload";

export const useUploadImage = (
  images: FileList | null,
  fileName: string,
  onSuccess: () => void
) => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const uploadImageMutation = useMutation(
    () => postUploadImage(images, fileName),
    {
      onSuccess: () => {
        enqueueSnackbar("사진 업로드에 성공했습니다!", { variant: "success" });
        onSuccess();
        queryClient.invalidateQueries("searchImages");
      },
      onError: () => {
        enqueueSnackbar(
          "사진 업로드에 실패했어요. 잠시 후 다시 시도해주세요.",
          {
            variant: "error",
          }
        );
      },
    }
  );

  return uploadImageMutation;
};
