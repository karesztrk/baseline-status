declare module '@karesztrk/baseline-status' {
	import type { ShadowElement } from '@karesztrk/webcomponent-base';
	export default BaselineIcon;
	/**
	 * Web component rendering baseline support icon.
	 * @see https://web.dev/baseline
	 */
	class BaselineIcon extends ShadowElement {
		styles: string;
		
		get support(): string | null;
	}
	export default BaselineStatus;
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
		
		renderSupportIcon(baseline: Status, browserImplementation?: BrowserImplementation | undefined): string;
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
	export default HeadlessStatus;
	type Feature_1 = {
		baseline: BaselineType_1;
		feature_id?: string | undefined;
		name: string;
		spec?: SpecType_1 | undefined;
		browser_implementations?: BrowserImplementations_1 | undefined;
	};
	type BaselineType_1 = {
		high_date?: string | undefined;
		low_date?: string | undefined;
		status: Status_1;
	};
	type BrowserImplementations_1 = {
		chrome: BrowserImplementation_1;
		edge: BrowserImplementation_1;
		firefox: BrowserImplementation_1;
		safari: BrowserImplementation_1;
	};
	type BrowserImplementation_1 = {
		date: string;
		status: Status_1;
		version: string;
	};
	type Status_1 = "limited" | "newly" | "widely" | "no_data";
	type SpecType_1 = {
		links: object[];
	};






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
		
		feature: Feature_1;
		styles: string;
		
		get featureId(): string | null;
		
		fetchData(): Promise<Feature_1>;
		
		renderSupportIconTemplate(icon: string): string;
		
		renderSupportIcon(baseline: Status_1, browserImplementation?: BrowserImplementation_1 | undefined): string;
		/**
		 * Returns feature's low_date as mm-yyyy string or empty string if low_date
		 * is not present.
		 * */
		getBaselineDate(feature: Feature_1): string;
		/**
		 * Returns Baseline's description.
		 * */
		getDescriptionDate(baseline: Status_1, date: string): string;
		
		renderTemplate(feature: Feature_1, isLoading?: boolean | undefined): string;
		
		reRender(): void;
	}

	export { BaselineIcon, BaselineStatus, BonelessStatus };
}

//# sourceMappingURL=index.d.ts.map