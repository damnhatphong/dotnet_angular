import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'not-found',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>Component Not Found!</p>`,
  styleUrl: './NotFound.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent { }
