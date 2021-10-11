describe(`Visits efraim.tech website and screenshots content on the webpage using component`, function() {
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
	it(`Visits efraim.tech website and screenshots content on the webpage using component`, async () => {
		await page.goto(`https://efraim.tech`)
		let username = 'bestTesterEver'
		let pass = 'qwerty15489'
		await page.screenshot({"type":"jpeg","path":"test/spec/image.jpeg","fullPage":true})
		return true
	})
})