# &lt;baseline-status> web component

A widget displaying Baseline status of a web feature based on https://github.com/web-platform-dx/web-features data.

This is a thin fork of the original [repo](https://github.com/web-platform-dx/baseline-status).

<img width="859" alt="baseline_widget_example" src="https://github.com/web-platform-dx/baseline-status/assets/1914261/3171ee2d-6949-47c9-8328-b79e467813f7">

## Advantages

- It's not built on a larger web component library
- It's using a tiny and simple base class
- Compressed icons
- Web component name is customizable

## Example

Show Baseline status widget for
[anchor-positioning](https://github.com/web-platform-dx/web-features/blob/main/features/anchor-positioning.yml):

```html
<baseline-status featureId="anchor-positioning"></baseline-status>
<!-- <baseline-icon support="limited"></baseline-icon> -->
```

Register the `BaselineStatus` and optionally `BaselineIcon` web components.

```js
import { BaselineStatus, BaselineIcon } from "@karesztrk/baseline-status";

customElements.define("baseline-icon", BaselineIcon);
customElements.define("baseline-status", BaselineStatus);
```

Or you can use the static helper

```js
import { BaselineStatus } from "@karesztrk/baseline-status";

class YourComponent extends BaselineStatus {
  static {
    this.register("baseline-status", YourComponent);
  }
}

export default YourComponent;
```

## Usage

Install and bundle with your application.

Install

```sh
pnpm install @karesztrk/baseline-status
# or npm install @karesztrk/baseline-status
```

See [docs](https://github.com/web-platform-dx/baseline-status/blob/main/docs/index.html)
for example usage in HTML.

See [rollup.config.js](https://github.com/web-platform-dx/baseline-status/blob/main/rollup.config.js)
for an example of a bundler configuration.

## Development

Run locally:

```
pnpm run serve
```

The local server uses wds [@web/dev-server](https://modern-web.dev/docs/dev-server/overview/) package.
To enable web component related polyfills for legacy browsers, it uses `@web/dev-server-legacy` package.
See `web-dev-server.config` file for the exact configuration.
