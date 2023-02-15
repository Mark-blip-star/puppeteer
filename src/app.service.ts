import { dataDto } from './dto/get-data.dto';
import {Injectable } from '@nestjs/common';
const puppeteer = require('puppeteer');

@Injectable()
export class AppService {
  async getData({url}:dataDto) {
  const browser = await puppeteer.launch({
      headless: false
      });
  const page = await browser.newPage()
  await page.goto(`${url}`);
  await page.waitForSelector('#data')
  await page.waitForTimeout(3000);
  const [text] = await page.$$eval("#data", elements => elements.map(el => el.innerText))
 
  // await browser.close();
  return JSON.parse(text)
  }
}
