import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import {
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
} from '@angular/material';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent, CardComponent],
			imports: [MatButtonModule, MatCardModule, MatCheckboxModule],
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it('should have the title "Welcome!"', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('Welcome!');
	});

	it('should render title in a h1 tag', () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Welcome!');
	});
});
