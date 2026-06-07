import { expect, test, type Page } from '@playwright/test';

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 }
];

async function collectConsoleErrors(page: Page) {
  const consoleErrors: string[] = [];

  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  page.on('pageerror', (error) => {
    consoleErrors.push(error.message);
  });

  return consoleErrors;
}

async function expectNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(() => {
    const documentElement = document.documentElement;
    return {
      scrollWidth: documentElement.scrollWidth,
      clientWidth: documentElement.clientWidth
    };
  });

  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth);
}

async function expectImagesLoaded(page: Page) {
  const imageStates = await page.locator('img').evaluateAll((images) =>
    images.map((image) => ({
      src: image.getAttribute('src'),
      complete: image.complete,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight
    }))
  );

  expect(imageStates.length).toBeGreaterThan(0);

  for (const image of imageStates) {
    expect(image, `${image.src} should be loaded`).toMatchObject({
      complete: true
    });
    expect(image.naturalWidth, `${image.src} should have width`).toBeGreaterThan(0);
    expect(image.naturalHeight, `${image.src} should have height`).toBeGreaterThan(0);
  }
}

for (const viewport of viewports) {
  test(`home page renders cleanly at ${viewport.name}`, async ({ page }) => {
    const consoleErrors = await collectConsoleErrors(page);

    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto('/');

    await expect(page).toHaveTitle(/華光寺/);
    await expect(page.getByRole('heading', { name: '華光寺的願景' })).toBeVisible();
    await expectNoHorizontalOverflow(page);
    await expectImagesLoaded(page);

    await page.screenshot({
      path: `test-results/screenshots/home-${viewport.name}.png`,
      fullPage: true
    });

    expect(consoleErrors).toEqual([]);
  });
}

test('primary navigation links are clickable', async ({ page }) => {
  const consoleErrors = await collectConsoleErrors(page);

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  const navLinks = [
    { label: '宗教弘法', target: '#dharma' },
    { label: '社會慈善', target: '#charity' },
    { label: '教育發展', target: '#education' },
    { label: '整體願景', target: '#vision' }
  ];

  for (const link of navLinks) {
    await page.getByRole('navigation', { name: '主要導覽' }).getByRole('link', { name: link.label }).click();
    await expect(page).toHaveURL(new RegExp(`${link.target}$`));
    await expect(page.locator(link.target)).toBeVisible();
  }

  expect(consoleErrors).toEqual([]);
});
