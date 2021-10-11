describe(`User can see page headlines and use navigation`, function() {
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
	it(`User can see page headlines and use navigation`, async () => {
		await page.goto(`https://www.jakpsatweb.cz/`)
		await page.waitForSelector(`img`)
		expect(await page.$(`img`)).toBeTruthy
		await page.waitForSelector(`input`)
		expect(await page.$(`input`)).toBeTruthy
		await page.waitForTimeout(1000)
		await page.waitForSelector(`[id="www-jakpsatweb-cz"]`)
		expect(await page.$(`[id="www-jakpsatweb-cz"]`)).toBeTruthy
		let element0 = await page.$(`h1`)
		expect(await page.evaluate(element0 => element0.textContent, element0)).toEqual('Jak psát web')
		await page.waitForTimeout(500)
		await page.waitForSelector(`.js`, { timeout: 10000 })
		await page.click(`.js`, { clickCount: 1 })
		await page.waitForTimeout(1000)
		await page.waitForSelector(`h1`)
		expect(await page.$(`h1`)).toBeTruthy
		let element1 = await page.$(`h1`)
		expect(await page.evaluate(element1 => element1.textContent, element1)).toEqual('JavaScript')
		await page.waitForSelector(`[id="logo"]`, { timeout: 10000 })
		await page.click(`[id="logo"]`, { clickCount: 1 })
		await page.waitForTimeout(1000)
		expect(await page.url()).toEqual(`https://www.jakpsatweb.cz/`)
		return true
	})
})