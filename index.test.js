const {webkit, devices} = require('playwright')

function soma(a, b) {
  return a + b;
}

test('Soma', () => {
  expect(soma(2, 1)).toBe(4)
})

jest.setTimeout(10 * 3500000);

describe('Multiplos testes', () => {
  it('Soma', () => {
    expect(soma(2, 1)).toBe(3)
  })
  it('Soma erro', () => {
    expect(soma(2, 1)).not.toBe(4)
  })
  it('Procurando um pokemon', async () => {
    const pokemon = "Rayquaza";
    const iPhone = devices['iPhone 6']
    const browser = await webkit.launch({
      headless: false,
    });
    const context = await browser.newContext({
      iPhone
    });
    const page = await context.newPage();
    await page.goto('https://www.pokemon.com/br/pokedex/')
    await page.type('#searchInput', pokemon);
    await page.click('#search');
    await page.waitForSelector('figure');
    await page.click('figure')
    await page.screenshot({ path: 'image.png' })
    await browser.close()
  })
})
