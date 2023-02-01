# eleventy-plugin-inline-link-favicon

Eleventy shortcodes and filters to add an inline favicon image to a link.

![]()

## Install

```bash
npm install eleventy-plugin-inline-link-favicon
```

## Configuration

Add the plugin to your `.eleventy.js` config file:

```js
const pluginInlineLinkFavicon = require("eleventy-plugin-inline-link-favicon")

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(pluginInlineLinkFavicon)
}
```

## Usage

This plugin comes with two mechanisms to create an inline link favicon. You can use a [paired shortcode](https://www.11ty.dev/docs/shortcodes/#paired-shortcodes) or a [filter](https://www.11ty.dev/docs/filters/), both referenced as `ai`. `ai` is short for anchor-image.

## Paired Shortcode

```md
{% ai "https://front-end.social/@brian" %}@brian{% endai %}
```

returns

```html
<a href="https://front-end.social/@brian"
	><img
		style="max-height: 1em; position: relative; top: .2em; margin-right: .2em"
		src="https://t1.gstatic.com/faviconV2?client=SOCIAL&amp;type=FAVICON&amp;fallback_opts=TYPE,SIZE,URL&amp;url=https://front-end.social/@brian&amp;size=1"
	/>@brian</a
>
```

## Filter

```md
{{ "https://front-end.social/@brian" | ai("@brian") | safe }}
```

returns the same as above.

## Credits

- Thanks to [5t3ph/eleventy-plugin-template](https://github.com/5t3ph/eleventy-plugin-template) for inspiration
- Thanks to this [blog by Jim Nielsen](https://blog.jim-nielsen.com/2021/displaying-favicons-for-any-domain/) as inspiration.
