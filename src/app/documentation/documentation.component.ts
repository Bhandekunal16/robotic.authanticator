import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss',
})
export class DocumentationComponent {
  public ex1 = ` import { Encryption } from 'authanticator/main';`;
  public ex2 = `import { binary } from 'authanticator/main';`;
  public ex3 = `import { hexadecimal } from "authanticator/main";`;
  public ex4 = `import { Octal_decimal } from "authanticator/main";`;
  public ex5 = `import { ScientificNotation } from "authanticator/main";`;
}
