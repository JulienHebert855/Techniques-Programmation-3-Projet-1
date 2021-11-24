import { Component, OnInit } from '@angular/core';
import { TypeForfaits } from '../TypeForfaits';
import { TABLEAUFORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})

export class MiniForfaitComponent implements OnInit {

  tableauForfaits: TypeForfaits[] = TABLEAUFORFAITS;

  constructor() { }

  ngOnInit(): void {
  }

}
