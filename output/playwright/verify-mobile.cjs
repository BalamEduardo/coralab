const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'output/playwright/hero-mobile-verified.png' });
  const details = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    if (!h1) return null;
    const rect = h1.getBoundingClientRect();
    const style = getComputedStyle(h1);
    return {
      top: rect.top,
      bottom: rect.bottom,
      height: rect.height,
      opacity: style.opacity,
      bodyScrollWidth: document.body.scrollWidth,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    };
  });
  console.log(JSON.stringify(details));
  await browser.close();
})();
