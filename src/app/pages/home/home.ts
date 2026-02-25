import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// 🔥 1. Asegúrate de importar 'FileText' (y 'Github' si lo necesitas) directamente de lucide-angular
import { LucideAngularModule, FileText, Github } from "lucide-angular";

@Component({
  selector: 'app-home',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // 🔥 2. Asigna el ícono importado a la variable de tu clase
  readonly FileText = FileText;
  readonly Github = Github; 
};