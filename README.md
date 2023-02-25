# eleventy-plugin-inline-link-favicon

Eleventy shortcodes and filters to add an inline favicon image to a link.

[![A screenshot of the plugins output. Links display their favicon inline.](/screenshot.png)](https://eleventy-plugin-inline-link-favicon.netlify.app/)

[Live Demo](https://eleventy-plugin-inline-link-favicon.netlify.app/)

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

### Paired Shortcode

<!-- CODEBLOCK_START {"value": "demo/paired-shortcode.njk", "hideValue": true} -->
<!-- prettier-ignore -->
~~~~~~~~~~njk
{% ai "https://front-end.social/@brian" %}@brian{% endai %}
~~~~~~~~~~

<!-- CODEBLOCK_END -->

returns

<!-- CODEBLOCK_START {"value": "_site/demo/paired-shortcode/index.html", "hideValue": true} -->
<!-- prettier-ignore -->
~~~~~~~~~~html
<a href="https://front-end.social/@brian"
	><img
		alt="favicon for https://front-end.social/@brian"
		loading="lazy"
		style="max-height: 1em; position: relative; top: 0.2em; margin-right: 0.2em"
		src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://front-end.social/@brian&size=128"
	/>@brian</a
>
~~~~~~~~~~

<!-- CODEBLOCK_END -->

### Filter

<!-- CODEBLOCK_START {"value": "demo/filter.njk", "hideValue": true} -->
<!-- prettier-ignore -->
~~~~~~~~~~njk
{{ "https://front-end.social/@brian" | ai("@brian") | safe }}
~~~~~~~~~~

<!-- CODEBLOCK_END -->

returns the same as above.

### Snippets / Completions

Authoring content with this plugin is aided by user-defined snippets:

- [Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

  ```json
  {
  	"ai": {
  		"scope": "markdown,nunjucks",
  		"prefix": "ai",
  		"body": ["{% ai \"$1\"%}$2{% endai %}$0"],
  		"description": "add an inline link favicon"
  	}
  }
  ```

## Credits

- Thanks to [5t3ph/eleventy-plugin-template](https://github.com/5t3ph/eleventy-plugin-template) for inspiration
- Thanks to this [blog by Jim Nielsen](https://blog.jim-nielsen.com/2021/displaying-favicons-for-any-domain/) as inspiration.
