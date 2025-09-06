import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Correct import

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'] // Correct property name
})
export class Navbar {

}