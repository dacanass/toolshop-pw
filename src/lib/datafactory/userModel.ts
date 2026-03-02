import {faker} from '@faker-js/faker';

export function createRandomUser() {
  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    dob: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toISOString().split('T')[0],
    phone: faker.string.numeric(10),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 6 }) + "1*Aa", // Asegura complejidad
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      country: "US",
      postal_code: faker.location.zipCode('#####')
    }
  };
}