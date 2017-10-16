import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    selector: 'instruction.component',
    templateUrl: 'instruction.component.html',
})

export class InstructionComponent {
    constructor(public dialogRef: MatDialogRef<InstructionComponent>) { }
}