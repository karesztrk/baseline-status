import { ShadowElement } from "@karesztrk/webcomponent-base";

const ICONS = /** @type {const} */ {
  chrome: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 100 100"><circle cx="50" cy="50" r="20" style="fill:#188fd1"/><path d="M8.5 26a48 48 0 0 1 83 0L62 29.5A24 24 0 0 0 26 50z" style="fill:#ea3939"/><path d="M50 98A48 48 0 0 1 8.5 26L26 50a24 24 0 0 0 36 20.5z" style="fill:#4aae48"/><path d="M91.5 26A48 48 0 0 1 50 98l12-27.5a24 24 0 0 0 0-41z" style="fill:#fed14b"/></svg>`,
  edge: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 256 256"><path d="M0 0c19.746 16.233 36.747 38.955 39.613 65.148 1.267 17.89-.776 34.726-12.892 48.807C16.73 124.99 3.662 132.7-11.387 134.148c-15.257.71-34.125.902-46.48-9.34-1.52-1.66-1.52-1.66-2.895-4.972.466-4.578 2.155-6.844 4.805-10.512 4.83-6.692 5.501-13.155 4.57-21.176-2.256-8.248-7.21-14.6-14.562-18.875-6.318-3.4-13.465-4.161-20.48-2.699-8.633 2.809-14.986 8.453-19.083 16.461-4.49 10.846-1.674 23.079 2.496 33.559 9.072 19.796 26.13 32.063 45.985 39.875 22.71 7.617 47.66 5.864 69.398-4 3.651-1.485 5.494-1.327 9.246-.32 1.034 3.188 1.201 4.565-.23 7.656-18.132 26.347-44.108 45.488-75.781 51.652a683 683 0 0 1-3.989.691l-3.195.579c-32.653 3.62-65.521-3.257-91.617-23.891a219.919 219.919 0 0 1-5.188-4.688l-1.556-1.432c-23.076-21.42-37.589-50.789-38.795-82.513-.692-34.551 9.772-64.395 33.487-89.693C-122.515-33.598-48.467-37.214 0 0Z" style="fill:#097fce" transform="translate(207.387 33.852)"/><path d="M0 0c19.746 16.233 36.747 38.955 39.613 65.148 1.267 17.89-.776 34.726-12.892 48.807C16.73 124.99 3.662 132.7-11.387 134.148c-15.257.71-34.125.902-46.48-9.34-1.52-1.66-1.52-1.66-2.895-4.972.466-4.578 2.155-6.844 4.805-10.512 6.117-8.475 5.252-17.362 3.797-27.22-2.55-15.094-11.974-26.972-24.227-35.956-19.028-12.94-41.32-16.914-63.976-13.496a79.579 79.579 0 0 0-9.024 2.496l-3.242 1.032c-16.876 5.876-31.083 17.313-39.758 32.968-1.278 2.956-2.208 5.883-3 9-.394 1.355-.79 2.71-1.187 4.063l-.813 2.937h-1c.858-25.446 11.763-51.255 29-70l1.471-1.63C-125.511-33.08-49.857-38.283 0 0Z" style="fill:#39c9a7" transform="translate(207.387 33.852)"/><path d="m0 0 2 1L.207 2.215C-6.579 7.097-11.414 12.579-13 21-14.164 35.866-9.932 50.623-.45 62.273 16.997 82.427 39.366 91.22 65.489 93.187c14.066.424 28.5-3.074 41.266-8.867 3.651-1.485 5.493-1.327 9.246-.32 1.034 3.188 1.201 4.566-.23 7.656-18.168 26.4-44.183 45.464-75.88 51.75-8.25 1.26-8.25 1.26-12.203-.344-2.799-1.265-2.799-1.265-6.5-1.312-17.6-1.704-34.367-13.074-45.51-26.323C-37.375 98.812-43.177 77.943-41 57c.832-5.153 2.316-10.065 4-15l.84-2.691C-30.434 22.87-17.217 10.064-2.652 1.266L0 0Z" style="fill:#0d4f93" transform="translate(113 102)"/></svg>`,
  firefox: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 100 100"><circle cx="50" cy="50" r="24" fill="#80e"/><path fill="#f73" d="M50 42c-14-7-11-8-16-11-1-4-1-8 0-12-5 2-9 5-12 9-1-4-1.4-7-1-12C8 24 2 38 2 50c0 31 26 49 48 49s48-16 48-49c0-5 0-9-3-16-9 21-23 40-45 40-8 0-23-4-23-25 7-2 16-3 23-7z"/><path fill="#fc3" d="M50 42c-17 6-20-8-35 0 3 6 7 7 11 7 0 20 12 26 24 26 19 0 37-9 45-41-7-17-23-19-29-34-9 6-15 14-16 26 12 0 24 10 24 24 0 15-14 23-24 23-5 0-19-2-21-17 2-6 8-8 16-9 3-1 4-3 5-5z"/></svg>`,
  safari: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#00ABFF"/><path fill="#FFF" d="m8.903 39.097 17.289-12.905-3.201-4.533z"/><path fill="#E00" d="M39.097 8.903 26.192 26.192l-2.623-2.623z"/><path fill="#FFF" d="m8.903 39.097 12.905-17.289L24 24z"/><path fill="#E00" d="M21.808 21.808 39.097 8.903 24 24z"/></g></svg>`,
};

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

const SUPPORT_ICONS = /** @type {const} */ {
  available: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="21"
    fill="none"
  >
    <path
      fill="currentColor"
      d="M1.253 3.31a8.843 8.843 0 0 1 5.47-1.882c4.882 0 8.838 3.927 8.838 8.772 0 4.845-3.956 8.772-8.837 8.772a8.842 8.842 0 0 1-5.47-1.882c-.237.335-.49.657-.758.966a10.074 10.074 0 0 0 6.228 2.14c5.562 0 10.07-4.475 10.07-9.996 0-5.52-4.508-9.996-10.07-9.996-2.352 0-4.514.8-6.228 2.14.268.309.521.631.757.966Z"
    />
    <path
      fill="currentColor"
      d="M11.348 8.125 6.34 13.056l-3.006-2.954 1.002-.985 1.999 1.965 4.012-3.942 1.002.985Z"
    />
  </svg>`,
  unavailable: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="21"
    fill="none"
  >
    <path
      fill="currentColor"
      d="M1.254 3.31a8.843 8.843 0 0 1 5.47-1.882c4.881 0 8.838 3.927 8.838 8.772 0 4.845-3.957 8.772-8.838 8.772a8.842 8.842 0 0 1-5.47-1.882c-.236.335-.49.657-.757.966a10.074 10.074 0 0 0 6.227 2.14c5.562 0 10.071-4.475 10.071-9.996 0-5.52-4.509-9.996-10.07-9.996-2.352 0-4.515.8-6.228 2.14.268.309.52.631.757.966Z"
    />
    <path
      fill="currentColor"
      d="m10.321 8.126-1.987 1.972 1.987 1.972-.993.986-1.987-1.972-1.987 1.972-.993-.986 1.986-1.972-1.986-1.972.993-.986 1.987 1.972L9.328 7.14l.993.986Z"
    />
  </svg>`,
  no_data: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="21"
    viewBox="0 0 17 21"
    fill="none"
  >
    <path
      d="M7.18169 12.2783H5.98706C5.99134 11.8703 6.02774 11.5367 6.09625 11.2775C6.16904 11.014 6.28679 10.7738 6.4495 10.5571C6.61221 10.3404 6.82844 10.0939 7.0982 9.8176C7.29516 9.61785 7.475 9.43085 7.63771 9.2566C7.8047 9.0781 7.93958 8.88685 8.04235 8.68285C8.14511 8.4746 8.19649 8.22598 8.19649 7.93698C8.19649 7.64373 8.14297 7.39085 8.03592 7.17835C7.93316 6.96585 7.77901 6.80223 7.57348 6.68748C7.37224 6.57273 7.12175 6.51535 6.82202 6.51535C6.57367 6.51535 6.33817 6.55998 6.11552 6.64923C5.89286 6.73848 5.71302 6.8766 5.576 7.0636C5.43898 7.24635 5.36833 7.48648 5.36405 7.78398H4.17584C4.18441 7.30373 4.3043 6.89148 4.53552 6.54723C4.77102 6.20298 5.08787 5.93948 5.48609 5.75673C5.8843 5.57398 6.32961 5.4826 6.82202 5.4826C7.36581 5.4826 7.82825 5.58035 8.20934 5.77585C8.5947 5.97135 8.88801 6.25185 9.08926 6.61735C9.2905 6.9786 9.39113 7.40785 9.39113 7.9051C9.39113 8.2876 9.31191 8.64035 9.15348 8.96335C8.99934 9.2821 8.80023 9.58173 8.55617 9.86222C8.3121 10.1427 8.05305 10.4105 7.77901 10.6655C7.54351 10.8822 7.38508 11.1266 7.30373 11.3986C7.22237 11.6706 7.18169 11.9639 7.18169 12.2783ZM5.93568 14.2992C5.93568 14.108 5.99562 13.9465 6.11552 13.8147C6.23541 13.683 6.40882 13.6171 6.63576 13.6171C6.86698 13.6171 7.04253 13.683 7.16243 13.8147C7.28232 13.9465 7.34226 14.108 7.34226 14.2992C7.34226 14.482 7.28232 14.6392 7.16243 14.771C7.04253 14.9027 6.86698 14.9686 6.63576 14.9686C6.40882 14.9686 6.23541 14.9027 6.11552 14.771C5.99562 14.6392 5.93568 14.482 5.93568 14.2992Z"
      fill="currentColor"
    />
    <path
      d="M1.25317 3.31021C2.75786 2.13162 4.65827 1.4281 6.72373 1.4281C11.6047 1.4281 15.5615 5.35546 15.5615 10.2001C15.5615 15.0447 11.6047 18.9721 6.72373 18.9721C4.65827 18.9721 2.75786 18.2686 1.25317 17.09C1.01715 17.425 0.764387 17.7475 0.496094 18.0563C2.20987 19.3966 4.37247 20.1961 6.72373 20.1961C12.2857 20.1961 16.7946 15.7207 16.7946 10.2001C16.7946 4.67946 12.2857 0.204102 6.72373 0.204102C4.37247 0.204102 2.20987 1.00363 0.496094 2.34391C0.764386 2.65272 1.01715 2.97522 1.25317 3.31021Z"
      fill="currentColor"
    />
  </svg>`,
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
 * Web Features project.
 * @see https://github.com/web-platform-dx/web-features/
 *
 * Example usage:
 *
 * <baseline-status featureId="anchor-positioning"></baseline-status>
 */
class BaselineStatus extends ShadowElement {
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
        vertical-align: middle;
      }

      .baseline-status-browsers {
        grid-area: browsers;
        font-size: 0;
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
        align-items: center;
        grid-template-areas: "baseline-icon title browsers open-icon";
        grid-template-columns: auto 1fr auto minmax(20px, auto);
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
    return `<browser-support-icon class="support-${support}">
      ${SUPPORT_ICONS[icon]}
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
            <span>${ICONS.chrome} ${this.renderSupportIcon(baseline, chrome)}</span>
            <span>${ICONS.edge} ${this.renderSupportIcon(baseline, edge)}</span>
            <span>${ICONS.firefox} ${this.renderSupportIcon(baseline, firefox)}</span>
            <span>${ICONS.safari} ${this.renderSupportIcon(baseline, safari)}</span>
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

export default BaselineStatus;
