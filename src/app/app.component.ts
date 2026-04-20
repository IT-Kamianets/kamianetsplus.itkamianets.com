import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layouts/footer/footer.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, FooterComponent],
	template: '<main><router-outlet /></main> <app-footer />',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
