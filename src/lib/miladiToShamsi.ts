export function miladiToShamsi(dateString: string | null | undefined): string {
    if (!dateString) return '';
  
    const date = new Date(dateString);
  
    const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  
    return formatter.format(date);
  }
