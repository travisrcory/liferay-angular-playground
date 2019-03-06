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

window.Liferay = window.Liferay || Liferay

const templateUrl = `${environment.path.app}/app/app.component.html`;

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
	title: string;

	constructor() {
		let LiferayWrapper = window.Liferay;

		this.title = 'Welcome!'
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