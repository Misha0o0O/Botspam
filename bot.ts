import { chromium } from 'playwright';
import * as dotenv from 'dotenv';

dotenv.config();

// firefox relay login 
let email = process.env.EMAIL;
let password = process.env.PASSWORD;

(async () => {
    //setup
    const browser = await chromium.launch()
    const page = await browser.newPage();
    // firefox login process
    await page.goto('https://tinyurl.com/firefoxlog')

    //simple email inseration
    await page.getByPlaceholder('Enter your email').fill(String(email));
    await page.getByRole('button', {name:'Sign up or sign in'}).click({ force: true});

    //password inseration
    await page.getByTestId('input-field').fill(String(password))
    await page.getByRole('button', { name: 'Sign in'}).click()
    await page.
})();
