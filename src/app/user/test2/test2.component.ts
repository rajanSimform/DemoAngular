import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <p>test2 works!</p>
    <h3>{{ cheems }}</h3>
  `,
  styles: [
    `
      h3 {
        background: #ddd;
      }
    `,
  ],
})
export class Test2Component implements OnInit {
  constructor() {}

  cheems = 'Hello cheems !!!';

  ngOnInit(): void {}
}
