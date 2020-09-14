export default class Formatter {
  static currency(value: number): string {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }

  static datetime(value: number | string | Date): string {
    value = new Date(value);
    const options = {
      timeStyle: 'medium',
      dateStyle: 'short',
      hour12: false
    };
    return Intl.DateTimeFormat('pt-BR', options).format(value);
  }

  static date(value: number | string | Date): string {
    value = new Date(value);
    const options = {
      dateStyle: 'short',
      hour12: false
    };
    return Intl.DateTimeFormat('pt-BR', options).format(value);
  }
}
