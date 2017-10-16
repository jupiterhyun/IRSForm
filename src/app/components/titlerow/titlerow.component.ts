import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatDialogModule,
    MatGridListModule, MatCardModule, MatSelectModule, MatTabsModule
} from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'titlerow',
    templateUrl: 'titlerow.component.html',
    styleUrls: ['./titlerow.component.css']
})

export class TitleRowComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    @Input() partInfo:string;

    ngOnInit() {
    }

}