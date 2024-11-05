import { ShadowElement } from "@karesztrk/webcomponent-base";

const API_ENDPOINT = "https://api.webstatus.dev/v1/features/";

const BASELINE_DEFS = /** @type {const} */ {
  limited: {
    title: "Limited availability",
    defaultDescription:
      "This feature is not Baseline because it does not work in some of the most widely-used browsers.",
  },
  newly: {
    title: "",
    defaultDescription:
      "This feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.",
  },
  widely: {
    title: "Widely available",
    defaultDescription:
      "This feature is well established and works across many devices and browser versions.",
  },
  loading: {
    title: "Loading",
    defaultDescription: "",
  },
  no_data: {
    title: "Unknown availability",
    defaultDescription:
      "We currently don’t have browser support information about this feature.",
  },
};

/**
 * @typedef Feature
 * @property {BaselineType} baseline
 * @property {string} [feature_id]
 * @property {string} name
 * @property {SpecType} [spec]
 * @property {BrowserImplementations} [browser_implementations]
 */

/**
 * @typedef BaselineType
 * @property {string} [high_date]
 * @property {string} [low_date]
 * @property {Status} status
 */

/**
 * @typedef BrowserImplementations
 * @property {BrowserImplementation} chrome
 * @property {BrowserImplementation} edge
 * @property {BrowserImplementation} firefox
 * @property {BrowserImplementation} safari
 */

/**
 * @typedef BrowserImplementation
 * @property {string} date
 * @property {Status} status
 * @property {string} version
 */

/** @typedef {'limited' | 'newly' | 'widely' | 'no_data'} Status */

/**
 * @typedef SpecType
 * @property {object[]} links
 */

/**
 * A web component that renders Baseline support information based on the
 * Web Features project. When using this component, you have to add your own browser icons.
 * Add "chrome", "edge", "firefox" and "safari" slots to the `<baseline-status>` element.
 *
 * The naming is based on Adam Argyle's 'Headless, boneless, skinless & lifeless' post.
 *
 * @see https://nerdy.dev/headless-boneless-and-skinless-ui
 * @see https://github.com/web-platform-dx/web-features/
 *
 * Example usage:
 *
 * <baseline-status featureId="anchor-positioning"></baseline-status>
 */
class BonelessStatus extends ShadowElement {
  /**
   * @type {Feature}
   */
  feature;

  styles = `
      :host {
        --baseline-status-color-limited: light-dark(#ea8600, #f09418);
        --baseline-status-color-newly: light-dark(#1a73e8, #4185ff);
        --baseline-status-color-widely: light-dark(#1e8e3e, #24a446);
        --baseline-status-color-no_data: light-dark(#707070, #868686);
        --baseline-status-color-outline: light-dark(#d9d9d9, #d9d9d9);
        --baseline-status-color-text: light-dark(#000, #fff);
        --baseline-status-color-link: light-dark(#1a73e8, #5aa1ff);

        color: inherit;
        display: block;
        border: solid 1px var(--baseline-status-color-outline);
        border-radius: 8px;
        padding: 16px 24px 0 24px;
        max-width: 800px;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-style: normal;
        container-type: inline-size;
      }

      h1 {
        font-weight: normal;
        font-size: 20px;
        margin: 0;
      }

      a,
      a:active,
      a:visited {
        color: var(--baseline-status-color-link);
      }

      ::slotted(*) {
        color: grey;
        font-style: italic;
        font-size: 80%;
      }

      .baseline-status-title {
        grid-area: title;
      }

      .baseline-badge {
        background: #3367d6;
        color: #fff;
        font-size: 11px;
        padding: 0 4px;
        border-radius: 2px;
        text-transform: uppercase;
        line-height: 20px;
        white-space: nowrap;
      }

      .baseline-status-browsers {
        grid-area: browsers;
        font-size: 0;
        width: min(200px, 100%);
        display: flex;
        gap: 1rem;
      }

      .baseline-status-browsers span {
        white-space: nowrap;
      }

      .support-no_data {
        color: var(--baseline-status-color-no_data);
      }

      .support-unavailable {
        color: var(--baseline-status-color-limited);
      }

      .support-newly {
        color: var(--baseline-status-color-newly);
      }

      .support-widely,
      .support-available {
        color: var(--baseline-status-color-widely);
      }

      details > summary .open-icon {
        grid-area: open-icon;
        width: 10px;
        height: 20px;
        margin-left: auto;
        color: inherit;
      }

      @media (prefers-reduced-motion: no-preference) {
          details > summary svg.open-icon {
            transition: all 0.3s;
          }
      }

      details[open] summary svg.open-icon {
        transform: rotate(180deg);
      }

      summary {
        display: grid;
        grid-template-areas: "baseline-icon title browsers open-icon";
        grid-template-columns: auto 1fr auto auto;
        align-items: center;
        cursor: pointer;
        font-size: 1rem;
        gap: 1rem;
        padding: 1rem 0;

        @container (inline-size < 550px) {
          grid-template-areas:
            'baseline-icon title open-icon'
            'baseline-icon browsers open-icon';
          align-items: normal;
				}
      }

      baseline-icon {
        grid-area: baseline-icon;
      }

      summary::-webkit-details-marker {
        display: none;
      }
    `;

  constructor() {
    super();
    this.feature = {
      baseline: {
        status: "no_data",
      },
      name: this.featureId || "Unknown feature",
    };
  }

  /**
   * @returns {string | null}
   */
  get featureId() {
    return this.getAttribute("featureId");
  }

  connectedCallback() {
    super.connectedCallback();

    this.fetchData()
      .then((feature) => {
        this.feature = feature;
      })
      .finally(() => this.reRender());
  }

  /**
   * @returns {Promise<Feature>}
   */
  async fetchData() {
    const url = API_ENDPOINT + this.featureId;
    return fetch(url, { cache: "force-cache" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch feature ${this.featureId} (HTTP ${response.status})`,
          );
        }
        return response;
      })
      .then((response) => response.json());
  }

  /**
   * @param {string} icon
   * @returns {string}
   */
  renderSupportIconTemplate(icon) {
    /** @type {HTMLTemplateElement | null}  */
    const icons = this.querySelector("#icons");
    if (icons) {
      /** @type {SVGElement | null}  */
      const iconImg = icons.content.querySelector(`svg[slot='${icon}']`);
      if (iconImg) {
        const clone = iconImg.cloneNode(true);
        if (clone instanceof Element) {
          return clone?.outerHTML || "";
        }
      }
    }
    return "";
  }

  /**
   * @param {Status} baseline
   * @param {BrowserImplementation} [browserImplementation]
   * @returns {string}
   */
  renderSupportIcon(baseline, browserImplementation) {
    const support =
      baseline === "limited"
        ? browserImplementation?.status || "unavailable"
        : baseline;
    const icon =
      support === "newly" || support === "widely" || support === "limited"
        ? "available"
        : support;

    const svg = this.renderSupportIconTemplate(icon);
    return `<browser-support-icon class="support-${support}">
      ${svg}
    </browser-support-icon>`;
  }

  /**
   * Returns feature's low_date as mm-yyyy string or empty string if low_date
   * is not present.
   * @param {Feature} feature
   * @returns {string}
   */
  getBaselineDate(feature) {
    return feature.baseline.low_date
      ? new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
        }).format(new Date(feature.baseline.low_date))
      : "";
  }

  /**
   * Returns Baseline's description.
   * @param {Status} baseline
   * @param {string} date
   * @returns {string}
   */
  getDescriptionDate(baseline, date) {
    if (baseline === "newly" && date) {
      return `Since ${date} this feature works across the latest
        devices and browser versions. This feature might not work in older
        devices or browsers.`;
    }
    if (baseline === "widely" && date) {
      return `This feature is well established and works across many
        devices and browser versions. It’s been available across browsers
        since ${date}`;
    }
    return BASELINE_DEFS[baseline].defaultDescription;
  }

  /**
   * @param {Feature} feature
   * @param {boolean } [isLoading]
   * @returns {string}
   */
  renderTemplate(feature, isLoading) {
    const baseline = feature.baseline.status || "no_data";

    const preTitle =
      baseline === "limited" || baseline === "no_data"
        ? ""
        : "<strong>Baseline</strong> ";

    const title = isLoading ? "Loading..." : BASELINE_DEFS[baseline].title;
    const badge =
      baseline === "newly"
        ? `<span class="baseline-badge">newly available</span>`
        : "";
    const baselineDate = this.getBaselineDate(feature);
    const description = this.getDescriptionDate(baseline, baselineDate);
    const year =
      baseline === "newly" && baselineDate ? baselineDate.split(" ")[1] : "";

    const { chrome, edge, firefox, safari } =
      feature.browser_implementations || {};

    /**
     * @param {string} title
     * @param {string} year
     * @param {string} badge
     * @param {string} chrome
     * @param {string} edge
     * @param {string} firefox
     * @param {string} safari
     * @returns {string}
     */
    const getAriaLabel = (
      title,
      year,
      badge,
      chrome = "no",
      edge = "no",
      firefox = "no",
      safari = "no",
    ) => {
      const unknown = title === "Unknown availability";
      const browsers = unknown
        ? {
            chrome: "unknown",
            edge: "unknown",
            firefox: "unknown",
            safari: "unknown",
          }
        : { chrome, edge, firefox, safari };
      return `Baseline: ${title}${year ? ` ${year}` : ""}${badge ? " (newly available)" : ""}. Supported in Chrome: ${browsers.chrome === "available" ? "yes" : browsers.chrome}. Supported in Edge: ${browsers.edge === "available" ? "yes" : browsers.edge}. Supported in Firefox: ${browsers.firefox === "available" ? "yes" : browsers.firefox}. Supported in Safari: ${browsers.safari === "available" ? "yes" : browsers.safari}.`;
    };

    return ` <h1>${feature.name}</h1>
      <details>
        <summary
          aria-label="${getAriaLabel(
            title,
            year,
            badge,
            chrome?.status,
            edge?.status,
            firefox?.status,
            safari?.status,
          )}"
        >
          <baseline-icon support="${baseline}" aria-hidden="true"></baseline-icon>
          <div class="baseline-status-title">${preTitle} ${title} ${year} ${badge}</div>
          <div class="baseline-status-browsers">
            <span>${this.renderSupportIconTemplate("chrome")} ${this.renderSupportIcon(baseline, chrome)}</span>
            <span>${this.renderSupportIconTemplate("edge")} ${this.renderSupportIcon(baseline, edge)}</span>
            <span>${this.renderSupportIconTemplate("firefox")} ${this.renderSupportIcon(baseline, firefox)}</span>
            <span>${this.renderSupportIconTemplate("safari")} ${this.renderSupportIcon(baseline, safari)}</span>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none" class="open-icon" aria-hidden="true">
            <path d="M5.5 6.45356L0.25 1.20356L1.19063 0.262939L5.5 4.59419L9.80937 0.284814L10.75 1.22544L5.5 6.45356Z" fill="currentColor"/>
          </svg>
      </summary>
      <p>
        ${description}
      </p>
      <p>
        ${baseline === "no_data" ? "" : `<a href="https://github.com/web-platform-dx/web-features/blob/main/features/${feature.feature_id || ""}.yml" target="_top">Learn more</a>`}
      </p>
    </details>`;
  }

  /**
   * @returns {string}
   */
  render() {
    return this.feature
      ? this.renderTemplate(this.feature)
      : this.renderTemplate(this.feature, true);
  }

  /**
   * @returns {void}
   */
  reRender() {
    this.shadow.innerHTML = this.render();
  }
}

export default BonelessStatus;
