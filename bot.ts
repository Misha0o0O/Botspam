\import { chromium } from 'playwright';
import * as dotenv from 'dotenv';

dotenv.config();

// firefox relay login 
let email = process.env.EMAIL;
let password = process.env.PASSWORD;





const seeer = email_list();

console.log(seeer)

// function to retrive masked eamils from firefox relay 
async function email_list(): Promise<string[]> {
    // variables
    const entry_list: string[] = [];
    //setup
    const browser = await chromium.launch()
    const page = await browser.newPage();
    // firefox login process
    await page.goto('https://tinyurl.com/firefoxlog')

    //simple email inseration
    await page.getByPlaceholder('Enter your email').fill(String(email));
    await page.getByRole('button', {name:'Sign up or sign in'}).click({ force: true});

    //password inseration
    await page.getByTestId('input-field').fill(String(password));
    await page.getByRole('button', { name: 'Sign in'}).click();

    // gathering emails from firefox relay
    const list = await page.locator('samp');
    for (const email of list) {
        
     await entry_list.push(await email.get('text'))
    }

    return entry_list
}
