import { useMemo } from 'react';

const useMiladiToShamsi = (dateString: string | null | undefined): string => {
  return useMemo(() => {
    if (!dateString) return '';

    const date = new Date(dateString);

    const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return formatter.format(date);
  }, [dateString]);
};

export default useMiladiToShamsi;
