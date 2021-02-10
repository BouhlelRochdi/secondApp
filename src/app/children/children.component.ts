import { Component, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import * as EventEmitter from 'events';


@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  @Input() variable: string; 
  @Output() newItemEvent = new EventEmitter<string>();
 // childrenForm : FormGroup;


  ngOnInit(): void {
     /* this.childrenForm = new FormGroup({
        productId: new FormControl('', [Validators.required, Validators.minLength(8)]),
        productName: new FormControl('', [Validators.required, Validators.minLength(8)]),
        productDescription: new FormControl('', [Validators.required, Validators.maxLength(8)])
    });*/
  }
    

  
}
