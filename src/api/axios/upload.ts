import ApiManager from "./ApiManager";

/**
 * BULK UPLOAD IMAGES
 * @param imageFile
 * @param fileName
 * @returns
 */
export const postUploadImage = async (
  imageFile: FileList | null,
  fileName: string | null
) => {
  if (!imageFile || imageFile.length === 0) throw new Error("No image file");

  Array.from(imageFile).forEach(async (file) => {
    const formData = new FormData();
    const normalizedFileName = file.name.normalize("NFC");
    const extension = file.name.split(".").pop();
    const nameToBeEncoded = fileName
      ? fileName + "." + extension
      : normalizedFileName;

    const encodedName = encodeURIComponent(nameToBeEncoded);
    const newFile = new File([file], encodedName, { type: file.type });
    formData.append("file", newFile);
    await ApiManager.post(`/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  });
};
