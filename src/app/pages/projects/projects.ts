import { Component } from '@angular/core';
import { LucideAngularModule, Github, Wrench } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  readonly Github = Github;
  readonly Wrench = Wrench;
};