declare module "@karesztrk/baseline-status" {
  import type { ShadowElement } from "@karesztrk/webcomponent-base";
  export default BaselineIcon;
  /**
   * Web component rendering baseline support icon.
   * @see https://web.dev/baseline
   */
  class BaselineIcon extends ShadowElement {
    styles: string;

    get support(): string | null;
  }
  type Feature = {
    baseline: BaselineType;
    feature_id?: string | undefined;
    name: string;
    spec?: SpecType | undefined;
    browser_implementations?: BrowserImplementations | undefined;
  };
  type BaselineType = {
    high_date?: string | undefined;
    low_date?: string | undefined;
    status: Status;
  };
  type BrowserImplementations = {
    chrome: BrowserImplementation;
    edge: BrowserImplementation;
    firefox: BrowserImplementation;
    safari: BrowserImplementation;
  };
  type BrowserImplementation = {
    date: string;
    status: Status;
    version: string;
  };
  type Status = "limited" | "newly" | "widely" | "no_data";
  type SpecType = {
    links: object[];
  };
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
    feature: Feature;
    styles: string;

    get featureId(): string | null;

    fetchData(): Promise<Feature>;

    renderSupportIcon(
      baseline: Status,
      browserImplementation?: BrowserImplementation | undefined,
    ): string;
    /**
     * Returns feature's low_date as mm-yyyy string or empty string if low_date
     * is not present.
     * */
    getBaselineDate(feature: Feature): string;
    /**
     * Returns Baseline's description.
     * */
    getDescriptionDate(baseline: Status, date: string): string;

    renderTemplate(feature: Feature, isLoading?: boolean | undefined): string;

    reRender(): void;
  }

  export { BaselineIcon, BaselineStatus };
}

//# sourceMappingURL=index.d.ts.map
