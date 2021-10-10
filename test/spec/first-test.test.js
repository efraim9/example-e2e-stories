describe(`Visit example.com webpage, checks and clicks the link`, function() {
	let context
	let random
	let page

	beforeEach(async () => {
		context = await browser.createIncognitoBrowserContext()
		page = await context.newPage()
		random = +new Date
		page.setExtraHTTPHeaders({})

		return true
	})

	afterEach(async () => {
		await page.close()
		return true
	})

	jest.retryTimes(3)
	jest.setTimeout(50000)
	it(`Visit example.com webpage, checks and clicks the link`, async () => {
		await page.goto(`${process.env.URL}`)
		await page.waitForSelector(`[href="https://www.iana.org/domains/example"]`)
		expect(await page.$(`[href="https://www.iana.org/domains/example"]`)).toBeTruthy
		await page.waitForSelector(`[href="https://www.iana.org/domains/example"]`, { timeout: 10000 })
		await page.click(`[href="https://www.iana.org/domains/example"]`, { clickCount: 1 })
		return true
	})
})