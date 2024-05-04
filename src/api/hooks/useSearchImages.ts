import { useSnackbar } from "notistack";
import { useQuery } from "react-query";
import { searchImages } from "../axios/search";

export const useSearchImages = (name: string, isOpen: boolean) => {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery(["searchImages", name], () => searchImages(name), {
    enabled: !!name && isOpen,
    onError: () => {
      enqueueSnackbar("이미지 검색에 실패했어요. 잠시 후 다시 시도해주세요.", {
        variant: "error",
      });
    },
    refetchOnWindowFocus: false,
  });
};
