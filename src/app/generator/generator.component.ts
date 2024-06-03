import { Component, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorChromeModule } from "ngx-color/chrome";

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [ColorChromeModule,FormsModule],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.css'
})
export class GeneratorComponent {
  @viewChild('memeCanvas', {static:false}) myCanvas:any;
  preview(){
    console.log("ok");
    
  }
}
