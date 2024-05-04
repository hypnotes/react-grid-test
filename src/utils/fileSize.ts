export const getFileSize = (size: number): string => {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(2)} ${units[unitIndex]}`;
};

// 1 Gigabyte
export const MAX_FILE_SIZE = 1024 * 1024 * 1024;

export const isFileSizeValid = (file: File): boolean => {
  return file.size <= MAX_FILE_SIZE;
};
