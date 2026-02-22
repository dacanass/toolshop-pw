import{ test as setup, expect} from '@playwright/test';

//Storage state - session reuse
setup('Create user 01 auth', async({page})=>{
  const email = 'customer@practicesoftwaretesting.com';
  const password = 'welcome01';
  const authFile = '.auth/user.json'; //al ejecutar el codigo se crea automaticamente la carpeta donde se almacenara la data

  await page.goto('https://practicesoftwaretesting.com/auth/login');

  await page.getByTestId('email').fill(email);
  await page.getByTestId('password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByTestId('nav-menu')).toContainText("Jane Doe");

  await page.context().storageState({path:authFile})

})
