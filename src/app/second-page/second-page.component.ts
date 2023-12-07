import { AfterViewInit, Component } from '@angular/core';
import { Collapse, Dropdown, initTE, } from "tw-elements";


@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    initTE({
      Collapse,
      Dropdown
    });
  }
}
