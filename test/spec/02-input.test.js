describe(`User can use input and search on google`, function() {
	let context
	let random
	let page

	beforeEach(async () => {
		context = await browser.createIncognitoBrowserContext()
		page = await context.newPage()
		random = +new Date
		page.setExtraHTTPHeaders({"bypass-Token":"SFSA-1625-REWQ-9531"})

		return true
	})

	afterEach(async () => {
		await page.close()
		return true
	})

	jest.retryTimes(3)
	jest.setTimeout(50000)
	it(`User can use input and search on google`, async () => {
		await page.goto(`https://www.jakpsatweb.cz/`)
		await page.waitForSelector(`img`)
		expect(await page.$(`img`)).toBeTruthy
		await page.waitForSelector(`input`)
		expect(await page.$(`input`)).toBeTruthy
		await page.waitForSelector(`[id="www-jakpsatweb-cz"]`)
		expect(await page.$(`[id="www-jakpsatweb-cz"]`)).toBeTruthy
		await page.type(`[id="vyhpole"]`, `testovani`)
		await page.waitForTimeout(500)
		await page.waitForSelector(`[type="submit"]`, { timeout: 10000 })
		await page.click(`[type="submit"]`, { clickCount: 1 })
		await page.waitForTimeout(1000)
		await page.waitForSelector(`.gs-title`)
		expect(await page.$(`.gs-title`)).toBeTruthy
		await page.waitForSelector(`[data-ctorig="https://www.jakpsatweb.cz/katalog/uzivatelske-testovani.html"]`)
		expect(await page.$(`[data-ctorig="https://www.jakpsatweb.cz/katalog/uzivatelske-testovani.html"]`)).toBeTruthy
		await page.waitForSelector(`.gcsc-branding`)
		expect(await page.$(`.gcsc-branding`)).toBeTruthy
		await page.waitForTimeout(1000)
		await page.waitForSelector(`.gs-title`, { timeout: 10000 })
		await page.click(`.gs-title`, { clickCount: 1 })
		await page.waitForTimeout(2000)
		return true
	})
})