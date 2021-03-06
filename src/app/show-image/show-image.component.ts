import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss'],
})
export class ShowImageComponent implements OnInit {
  //used to display profile in full resolution
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
  
  ngOnInit(): void {}
}
