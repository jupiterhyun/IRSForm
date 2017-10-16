import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatGridListModule, MatCardModule, MatSelectModule, MatDialog } from '@angular/material';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'stepper',
    templateUrl: 'stepper.component.html',
    styleUrls: ['stepper.component.css']
})
export class StepperComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _formBuilder: FormBuilder
    ) { }

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;


    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', Validators.required]
        });
    }

}