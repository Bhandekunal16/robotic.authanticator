import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss',
})
export class DocumentationComponent {
  public ex1: string = ` import { Encryption } from 'authanticator/main';`;
  public ex2: string = `import { binary } from 'authanticator/main';`;
  public ex3: string = `import { hexadecimal } from "authanticator/main";`;
  public ex4: string = `import { Octal_decimal } from "authanticator/main";`;
  public ex5: string = `import { ScientificNotation } from "authanticator/main";`;

  public Typescript: string = 'Typescript';
}
