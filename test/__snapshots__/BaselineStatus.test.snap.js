/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["Baseline-status renders with default values"] = 
`<h1>
  Unknown feature
</h1>
<details>
  <summary aria-label="Baseline: Unknown availability. Supported in Chrome: unknown. Supported in Edge: unknown. Supported in Firefox: unknown. Supported in Safari: unknown.">
    <baseline-icon
      aria-hidden="true"
      support="no_data"
    >
    </baseline-icon>
    <div
      aria-hidden="true"
      class="baseline-status-title"
    >
      <div>
        Unknown availability
      </div>
      <div class="baseline-status-browsers">
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
      </div>
    </div>
    <span
      aria-hidden="true"
      class="open-icon"
    >
    </span>
  </summary>
  <p>
    We currently don’t have browser support information about this feature.
  </p>
  <p>
  </p>
</details>
`;
/* end snapshot Baseline-status renders with default values */

snapshots["Baseline-status renders default widget for an unexisting feature"] = 
`<h1>
  i-dont-exist
</h1>
<details>
  <summary aria-label="Baseline: Unknown availability. Supported in Chrome: unknown. Supported in Edge: unknown. Supported in Firefox: unknown. Supported in Safari: unknown.">
    <baseline-icon
      aria-hidden="true"
      support="no_data"
    >
    </baseline-icon>
    <div
      aria-hidden="true"
      class="baseline-status-title"
    >
      <div>
        Unknown availability
      </div>
      <div class="baseline-status-browsers">
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
      </div>
    </div>
    <span
      aria-hidden="true"
      class="open-icon"
    >
    </span>
  </summary>
  <p>
    We currently don’t have browser support information about this feature.
  </p>
  <p>
  </p>
</details>
`;
/* end snapshot Baseline-status renders default widget for an unexisting feature */

snapshots["Baseline-status renders baseline-high widget for an existing feature"] = 
`<h1>
  Arrays (initial support)
</h1>
<details>
  <summary aria-label="Baseline: Widely available. Supported in Chrome: no. Supported in Edge: no. Supported in Firefox: no. Supported in Safari: no.">
    <baseline-icon
      aria-hidden="true"
      support="widely"
    >
    </baseline-icon>
    <div
      aria-hidden="true"
      class="baseline-status-title"
    >
      <div>
        <strong>
          Baseline
        </strong>
        Widely available
      </div>
      <div class="baseline-status-browsers">
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
      </div>
    </div>
    <span
      aria-hidden="true"
      class="open-icon"
    >
    </span>
  </summary>
  <p>
    This feature is well established and works across many
        devices and browser versions. It’s been available across browsers
        since July 2015
  </p>
  <p>
    <a
      href="https://github.com/web-platform-dx/web-features/blob/main/features/.yml"
      target="_top"
    >
      Learn more
    </a>
  </p>
</details>
`;
/* end snapshot Baseline-status renders baseline-high widget for an existing feature */

snapshots["Baseline-status renders baseline-low widget for an existing feature"] = 
`<h1>
  accent-color
</h1>
<details>
  <summary aria-label="Baseline:  2022 (newly available). Supported in Chrome: no. Supported in Edge: no. Supported in Firefox: no. Supported in Safari: no.">
    <baseline-icon
      aria-hidden="true"
      support="newly"
    >
    </baseline-icon>
    <div
      aria-hidden="true"
      class="baseline-status-title"
    >
      <div>
        <strong>
          Baseline
        </strong>
        2022
        <span class="baseline-badge">
          newly available
        </span>
      </div>
      <div class="baseline-status-browsers">
        <span>
          <browser-support-icon class="support-newly">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-newly">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-newly">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-newly">
          </browser-support-icon>
        </span>
      </div>
    </div>
    <span
      aria-hidden="true"
      class="open-icon"
    >
    </span>
  </summary>
  <p>
    Since March 2022 this feature works across the latest
        devices and browser versions. This feature might not work in older
        devices or browsers.
  </p>
  <p>
    <a
      href="https://github.com/web-platform-dx/web-features/blob/main/features/.yml"
      target="_top"
    >
      Learn more
    </a>
  </p>
</details>
`;
/* end snapshot Baseline-status renders baseline-low widget for an existing feature */

