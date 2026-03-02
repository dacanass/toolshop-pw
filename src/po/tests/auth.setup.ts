import{ test as setup, expect} from '@playwright/test';
import LoginPage from '../pages/login.page';

//Storage state - session reuse
setup('Create user auth', async({page})=>{
  const email = 'customer@practicesoftwaretesting.com';
  const password = 'welcome01';
  const authFile = '.auth/user.json'; //al ejecutar el codigo se crea automaticamente la carpeta donde se almacenara la data

  const loginPage = new LoginPage(page)

  await loginPage.goto()

  await loginPage.login(email,password);

  await expect(page.getByTestId('nav-menu')).toContainText("Jane Doe");

  await page.context().storageState({path:authFile})

})
