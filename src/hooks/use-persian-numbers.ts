import { useCallback } from 'react';

const englishToPersianDigitsMap: Record<string, string> = {
  '0': '۰',
  '1': '۱',
  '2': '۲',
  '3': '۳',
  '4': '۴',
  '5': '۵',
  '6': '۶',
  '7': '۷',
  '8': '۸',
  '9': '۹',
};

const usePersianNumbers = () => {
  const toPersianNumber = useCallback((input: string | number): string => {
    return input
      .toString()
      .split('')
      .map((char) => englishToPersianDigitsMap[char] || char)
      .join('');
  }, []);

  return toPersianNumber;
};

export default usePersianNumbers;
