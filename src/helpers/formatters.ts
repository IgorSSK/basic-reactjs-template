export default class Formatter {
  static currency(value: number): string {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }

  static dateTime(value: number | string | Date): string {
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

  static splitList<T = any>(locations: T[], size = 10): T[][] {
    let list: T[][] = [];

    for (let i = 0; i < locations.length; i += size) {
      list.push(locations.slice(i, i + size));
    }

    return list;
  }
}
