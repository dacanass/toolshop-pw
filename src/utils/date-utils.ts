import { faker } from '@faker-js/faker';

/**
 * Genera una fecha aleatoria en el pasado con formato DD-MM-YYYY
 * @param yearsBack Número de años máximo hacia atrás (opcional)
 * @returns string en formato DD-MM-YYYY
 */
export const generateRandomPastDate = (yearsBack: number = 30): string => {
  const date = faker.date.past({ years: yearsBack });

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
