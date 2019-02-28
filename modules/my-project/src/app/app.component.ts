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
		this.labels = {
			portletNamespace: window.Liferay.Language.get('portlet-namespace'),
        	contextPath: window.Liferay.Language.get('context-path'),
			portletElementId: window.Liferay.Language.get('portlet-element-id')
		}
	}

	get configurationJSON() {
		return JSON.stringify(this.params.configuration, null, 2);
	}
}
