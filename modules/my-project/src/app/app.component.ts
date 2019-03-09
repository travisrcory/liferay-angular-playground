import { Component } from '@angular/core';

import LiferayParams from '../types/LiferayParams'

import { environment } from '../environments/environment.liferay';

declare global {
	interface Window { Liferay: any; }
}

const Liferay = {
	Language: {
		get: (string: string) => string
	}
}

const templateUrl = environment.path;

window.Liferay = window.Liferay || Liferay

@Component({
	selector: 'app-root',
	templateUrl
})
export class AppComponent {
	params: LiferayParams = {
		configuration: {},
		contextPath: 'my-app',
		portletElementId: 'my-app',
		portletNamespace: 'my-app'
	};
	labels: any;

	constructor() {
		let LiferayWrapper = window.Liferay;

		this.labels = {
			portletNamespace: LiferayWrapper.Language.get('portlet-namespace'),
        	contextPath: LiferayWrapper.Language.get('context-path'),
			portletElementId: LiferayWrapper.Language.get('portlet-element-id')
		}
	}

	get configurationJSON() {
		return JSON.stringify(this.params.configuration, null, 2);
	}
}