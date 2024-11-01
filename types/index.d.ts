declare module '@karesztrk/baseline-status' {
	import type { ShadowElement } from '@karesztrk/webcomponent-base';
	namespace _default {
		export { BaselineIcon };
		export { BaselineStatus };
	}
	export default _default;
	export default BaselineIcon;
	/**
	 * Web component rendering baseline support icon.
	 * @see https://web.dev/baseline
	 */
	class BaselineIcon extends ShadowElement {
		styles: string;
		
		get support(): string;
		
		render(): void;
	}
	export default BaselineStatus;
	type Feature = {
		baseline: {
			status: string;
		};
		name: boolean;
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
		
		get featureId(): string;
		
		fetchData(): Promise<Feature>;
		
		renderSupportIcon(baseline: string, browserImplementation: object): string;
		/**
		 * Returns feature's low_date as mm-yyyy string or empty string if low_date
		 * is not present.
		 * */
		getBaselineDate(feature: object): string;
		/**
		 * Returns Baseline's description.
		 * */
		getDescriptionDate(baseline: string, date: string): string;
		
		renderTemplate(feature: Feature, isLoading: boolean): string;
		
		reRender(): void;
	}

	export { BaselineIcon, BaselineStatus };
}

//# sourceMappingURL=index.d.ts.map