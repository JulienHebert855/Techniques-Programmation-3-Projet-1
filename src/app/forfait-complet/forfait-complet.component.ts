import { Component, OnInit } from '@angular/core';
import { TypeForfaits } from '../TypeForfaits';
import { TABLEAUFORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {

  tableauForfaits: TypeForfaits[] = TABLEAUFORFAITS;

  constructor() { }

  ngOnInit(): void {
  }

}
