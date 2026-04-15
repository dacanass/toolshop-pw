import { faker } from '@faker-js/faker';

export type Address = {
  street: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
};

export type User = {
  first_name: string;
  last_name: string;
  dob: string;
  phone: string;
  email: string;
  password: string;
  address: Address;
};

export function createRandomUser(): User {
  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    dob: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toISOString().split('T')[0],
    phone: faker.string.numeric(10),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 6 }) + '1*Aa', // Asegura complejidad
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      country: 'US',
      postal_code: faker.location.zipCode('#####'),
    },
  };
}

const contactSubjects = {
  customerService: 'Customer service',
  webmaster: 'Webmaster',
  return: 'Return',
  payments: 'Payments',
  warranty: 'Warranty',
  orderStatus: 'Status of my order',
};

interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export function createContactMessage(): ContactData {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    // Object.values convierte el objeto en ['Customer service', 'Webmaster', ...]
    // arrayElement elige uno al azar de esa lista
    subject: faker.helpers.arrayElement(Object.values(contactSubjects)),
    message: faker.lorem.sentences(3),
  };
}
