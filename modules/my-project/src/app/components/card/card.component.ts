import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.liferay';

const templateUrl = `${environment.path.components}/app/card.component.html`;
const styleUrls = [`${environment.path.components}/css/card.component.css`];

@Component({
    selector: 'app-card',
    templateUrl,
    styleUrls
})
export class CardComponent {
    constructor() {}

    OnInit() {}
}