import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  @Input() title: string = 'Top Bar';
  @Input() buttonTitle: string = 'Click Me';
  @Output() actionEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  action(): void {
    this.actionEvent.emit();
  }
}
