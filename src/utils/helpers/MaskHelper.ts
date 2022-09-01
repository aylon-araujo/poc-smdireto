export abstract class MaskHelper {
  static PTBRDate(date: Date | string, dateWithHour = false): string {
    if (!dateWithHour) {
      return new Date(date).toLocaleString('pt-br', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    }

    return new Date(date).toLocaleString('pt-br', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
