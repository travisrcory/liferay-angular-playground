import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule
	],
	declarations: [AppComponent],
	entryComponents: [AppComponent],
	// ADDING BOOTSTRAP HERE CAUSES COMPONENT TO RENDER PROPERLY WITH NG SERVE
	bootstrap: [AppComponent], // Don't bootstrap any component statically (see ngDoBootstrap() below)
	providers: [],
})
export class AppModule {
	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	ngDoBootstrap() {}
}
