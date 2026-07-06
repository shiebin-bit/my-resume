import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-personal',
  imports: [],
  templateUrl: './personal.html',
  styleUrl: './personal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Personal {}
