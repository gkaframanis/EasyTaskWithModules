import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

// We pass a configuration object
// No need to use app in front of header; it can be anything we want
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css'],
  imports: [NgOptimizedImage],
})
export class HeaderComponent {}
