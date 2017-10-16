import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatDialogModule,
    MatGridListModule, MatCardModule, MatSelectModule, MatTabsModule, MatSort
} from '@angular/material';

import { Form } from '../../models/form';
import { FormService } from '../../services/form.service';

@Component({
    selector: 'part3',
    templateUrl: 'part3.component.html',
    styleUrls: ['./part3.component.css']
})

export class Part3Component implements OnInit {
    info: string = "Part III: Partner’s Share of Current Year Income, Deductions, Credits, and Other Items";
    form: Form;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formService: FormService,
    ) {
        this.form = this.formService.getForm();
    }


    ngOnInit() {
    }

    goto(path: string) {
        this.router.navigate(["part" + path]);
        for (var i = 1; i <= 3; ++i) {
            $("div.nav-oval" + i).removeClass("focus-oval");
            $("div.nav-part" + i).removeClass("focus-word");
        }

        $("div.nav-oval" + path).addClass("focus-oval");
        $("div.nav-part" + path).addClass("focus-word");
    }
    clear() {
        this.form.clearPart3();
    }

    trackByIndex(index: number, obj: any): any {
        return index;
    }
}