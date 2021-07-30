import { Component, OnInit } from '@angular/core';
// @ts-ignore
import counterUp from "counterup2";

@Component({
  selector: 'app-animated-number',
  templateUrl: './animated-number.component.html',
  styleUrls: ['./animated-number.component.scss']
})
export class AnimatedNumberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const el = document.querySelector('.counter');
    const el1 = document.querySelector('.counter1');
    const el2 = document.querySelector('.counter2');
    const el3 = document.querySelector('.counter3');
    counterUp(el, {
      duration: 3000,
      delay: 16,
    });
    counterUp(el1, {
      duration: 3000,
      delay: 16,
    });
    counterUp(el2, {
      duration: 3000,
      delay: 16,
    });
    counterUp(el3, {
      duration: 3000,
      delay: 16,
    });
  }



}
