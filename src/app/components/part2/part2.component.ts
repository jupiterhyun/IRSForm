import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatDialogModule,
    MatGridListModule, MatCardModule, MatSelectModule, MatTabsModule
} from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { InstructionComponent } from './../../components/instruction/instruction.component';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Form } from '../../models/form';
import { FormService } from '../../services/form.service';

@Component({
    selector: 'part2',
    templateUrl: 'part2.component.html',
    styleUrls: ['./part2.component.css']
})

export class Part2Component implements OnInit {
    selectedOption: string;
    info: string = "Part II: Information About the Partner"; 
    form: Form;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public dialog: MatDialog,
        private formService: FormService,
    ) { 
        this.form = this.formService.getForm();
    }
    

    ngOnInit() {
    }

    goto(path:string) {
        this.router.navigate(["part" + path]);
        for (var i = 1; i <= 3; ++i) {
            $("div.nav-oval" + i).removeClass("focus-oval");
            $("div.nav-part" + i).removeClass("focus-word");
        }

        $("div.nav-oval" + path).addClass("focus-oval");
        $("div.nav-part" + path).addClass("focus-word");
    }

    openIns() {
        let dialogRef = this.dialog.open(InstructionComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }

    clear() {
        this.form.clearPart2();
    }

}