import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlDirective, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
/*  inputs : ['parentData'] */
})
export class ParentComponent implements OnInit {
  userLoggedin = true;
  currentItem = "television";
  //parentForm : FormGroup;
  //public parentData:string;


  ngOnInit(): void {
      /*this.parentForm = new FormGroup({
        idProduct: new FormControl('', [Validators.required, Validators.minLength(8)]),
        nameProduct: new FormControl('', [Validators.required, Validators.minLength(8)]),
        description: new FormControl('', [Validators.required, Validators.maxLength(8)])
    });*/
  }
    

}
