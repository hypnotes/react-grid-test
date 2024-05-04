import { carNames } from "../data/carNames";

const normalizedCarNames = carNames.map((name) => name.normalize("NFC"));

export const isFileNameValid = (fileName: string) => {
  const removedExtension = fileName.split(".")[0];
  const normalizedA = removedExtension.normalize("NFC");
  return normalizedCarNames.includes(normalizedA);
};

export const fileNameThatisInvalid = (files: FileList | null) => {
  if (!files) return "";

  const invalidFile = Array.from(files).find(
    (file) => !isFileNameValid(file.name)
  );
  return invalidFile ? invalidFile.name : "";
};
