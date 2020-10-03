import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // parent component can now listen for this event
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string): void {
    // emit event with feature clicked in header template
    // wire up to parent component where the parent component has the header directive <app-header> - in this case AppComponent
    this.featureSelected.emit(feature);
  }

}
