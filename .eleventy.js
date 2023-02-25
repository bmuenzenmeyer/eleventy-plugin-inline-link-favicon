const SERVICE_BASE = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=%%URL%%&size=%%SIZE%%`

const applyTemplate = (text, href, size) => {
	return `<a href="${href}"><img alt="favicon for ${href}" loading="lazy" style="max-height: 1em; position: relative; top: .2em; margin-right: .2em" src="${SERVICE_BASE.replace(
		"%%URL%%",
		href
	).replace("%%SIZE%%", size)}"/>${text}</a>`
}

module.exports = (eleventyConfig, options) => {
	const defaults = {
		size: 128,
	}

	eleventyConfig.addPairedShortcode("ai", function (text, href, size = 128) {
		return applyTemplate(text, href, size)
	})

	eleventyConfig.addFilter("ai", (href, text) => {
		const { size } = {
			...defaults,
			...options,
		}
		return applyTemplate(text, href, size)
	})
	return {
		markdownTemplateEngine: "njk",
	}
}
