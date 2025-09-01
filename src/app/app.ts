import { Component, signal} from '@angular/core';
import { RouterOutlet ,} from '@angular/router';
import { Header } from "./header/header";
import { HttpClient } from '@angular/common/http';
import { Seller } from './services/seller';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  constructor(private seller: Seller){

  }

}
