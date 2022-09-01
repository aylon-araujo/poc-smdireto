export function cpfRegex(cpf: string) {
  return cpf
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
}

export const phoneMask = (phone: string): string => {
  return phone
    .replace(/\D/g, '')
    .replace(/^(\d{7})(\d)/, '$1-$2')
    .replace(/(\d{2})(\d)/, '$1 $2');
};
