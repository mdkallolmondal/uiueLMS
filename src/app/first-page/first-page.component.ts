import { AfterViewInit, Component } from '@angular/core';
import { Collapse, Dropdown, initTE, } from "tw-elements";
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    initTE({ Collapse, Dropdown });
  }
}
