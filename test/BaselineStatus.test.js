import { assert, expect, fixture } from "@open-wc/testing";
import { BaselineIcon, BaselineStatus } from "../src/index.js";

describe("Baseline-status", () => {
  const realFetch = window.fetch;

  window.customElements.define("baseline-status", BaselineStatus);
  window.customElements.define("baseline-icon", BaselineIcon);

  beforeEach(() => {
    window.fetch = realFetch;
  });

  it("is defined", () => {
    const el = document.createElement("baseline-status");
    assert.instanceOf(el, BaselineStatus);
  });

  it("renders with default values", async () => {
    const el = await fixture("<baseline-status></baseline-status>");
    expect(el).shadowDom.to.equalSnapshot();
  });

  it("renders baseline-low widget for an existing feature", async () => {
    window.fetch = async () => {
      return {
        ok: true,
        status: 200,
        json: () => ({
          description:
            "The accent-color CSS property sets a color for checkboxes, radio buttons, and other form controls.",
          name: "accent-color",
          baseline: {
            status: "newly",
            low_date: "2022-03-14",
          },
          browser_implementations: {
            chrome: "93",
            chrome_android: "93",
            edge: "93",
            firefox: "92",
            firefox_android: "92",
            safari: "15.4",
            safari_ios: "15.4",
          },
        }),
      };
    };
    const el = await fixture(
      `<baseline-status featureId="accent-color"></baseline-status>`,
    );
    expect(el).shadowDom.to.equalSnapshot();
  });

  it("renders baseline-high widget for an existing feature", async () => {
    window.fetch = async () => {
      return {
        ok: true,
        status: 200,
        json: () => ({
          description: "Arrays are ordered lists of JavaScript values.",
          name: "Arrays (initial support)",
          baseline: {
            status: "widely",
            high_date: "2018-01-29",
            low_date: "2015-07-29",
          },
          browser_implementations: {
            chrome: "93",
            chrome_android: "93",
            edge: "93",
            firefox: "92",
            firefox_android: "92",
            safari: "15.4",
            safari_ios: "15.4",
          },
        }),
      };
    };
    const el = await fixture(
      `<baseline-status featureId="array"></baseline-status>`,
    );
    expect(el).shadowDom.to.equalSnapshot();
  });

  it("renders default widget for an unexisting feature", async () => {
    window.fetch = () => {
      return {
        ok: true,
        status: 200,
        json: () => ({}),
      };
    };
    const el = await fixture(
      `<baseline-status featureId="i-dont-exist"></baseline-status>`,
    );
    expect(el).shadowDom.to.equalSnapshot();
  });
});
