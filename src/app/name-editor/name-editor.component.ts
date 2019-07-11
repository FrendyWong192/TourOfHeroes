import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {
  registerHero: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerHero = this.formBuilder.group({
      nickHero: ['', Validators.required],
      realName: ['', Validators.required],
      gender: ['', Validators.required],
      job: ['', Validators.required],
    });
  }

  get f (){ return this.registerHero.controls;}

  onSubmit(){
    this.submitted=true;

    if (this.registerHero.invalid){
      return;
    }
    alert ('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerHero.value))
  }
}
