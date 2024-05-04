import ApiManager from "./ApiManager";

type SearchImagesResponse = {
  success: boolean;
  urls: string[];
};

export const searchImages = async (
  folderName: string
): Promise<SearchImagesResponse> => {
  const response = await ApiManager.get(`/search?folder=${folderName}`);

  return response.data;
};
