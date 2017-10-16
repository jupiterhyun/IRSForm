import { Injectable } from '@angular/core';
import { Form } from '../models/form';


@Injectable()
export class FormService {
  form: Form;
  constructor() {
    this.form = new Form();
  }

  getForm() {
    return this.form;
  }
  setForm(form: Form) {
    this.form = form;
  }
}