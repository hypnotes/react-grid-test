/**
 * 파일명에 따라 썸네일명을 반환하는 함수
 * @param name 파일명
 * @returns 파일명의 첫 두글자 + .jpg 형식의 썸네일 파일명
 */

export const getThumbnailName = (name: string) => {
  const arr = name.split("_");
  return arr[0] + "_" + arr[1] + ".jpg";
};
