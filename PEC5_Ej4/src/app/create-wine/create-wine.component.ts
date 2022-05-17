import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-wine',
  templateUrl: './create-wine.component.html',
  styleUrls: ['./create-wine.component.css']
})
export class CreateWineComponent {
  
  public wineForm!: FormGroup; 
                  
  constructor(private fb: FormBuilder) {       
    this.createForm();
  }

  createForm() {
    this.wineForm = this.fb.group({             
      name: [null, Validators.required],         
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
      if (this.wineForm != undefined) {
        console.log('Name Control Value', this.wineForm.value);
      }
  }
}