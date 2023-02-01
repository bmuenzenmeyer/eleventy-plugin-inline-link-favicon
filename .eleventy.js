const SERVICE_BASE = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=%%URL%%&size=%%SIZE%%`

module.exports = (eleventyConfig, options) => {
	const defaults = {
		size: 128,
	}

	eleventyConfig.addPairedShortcode("ai", function (content, href, size = 128) {
		return `<a  href="${href}"><img style="max-height: 1em; position: relative; top: .2em; margin-right: .2em" src="${SERVICE_BASE.replace("%%URL%%", href).replace("%%SIZE%%", size)}"/>${content}</a>`
	})

	eleventyConfig.addFilter("ai", (href, text) => {
		const { size } = {
			...defaults,
			...options,
		}

		return `<a href="${href}"><img style="max-height: 1em; position: relative; top: .2em; margin-right: .2em" src="${SERVICE_BASE.replace(
			"%%URL%%",
			href
		).replace("%%SIZE%%", size)}"/>${text}</a>`
	})
	return {
		markdownTemplateEngine: "njk",
	}
}
