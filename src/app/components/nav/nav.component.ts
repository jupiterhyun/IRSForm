import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatGridListModule, MatCardModule, MatSelectModule, MatDialog } from '@angular/material';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/operator/switchMap';

import * as $ from 'jquery';

@Component({
    selector: 'nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.css']
})
export class NavComponent implements OnInit {
    hasFocus: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) { }


    ngOnInit() {
    }

    addclass(cstr:string) {
        console.log(cstr);
        $("div.nav-" + cstr).addClass("highlight-word");
        if ($("div.nav-" + cstr).hasClass("focus-word")) {
            $("div.nav-" + cstr).removeClass("focus-word");
            this.hasFocus = true;
        }
    }
    removeclass(cstr:string) {
        $("div.nav-" + cstr).removeClass("highlight-word");
        if (this.hasFocus) {
            $("div.nav-" + cstr).addClass("focus-word");
            this.hasFocus = false;
        }
    }
    goto(path:string) {
        this.router.navigate(["part" + path]);
        console.log(path);
        for (var i = 1; i <= 3; ++i) {
            $("div.nav-oval" + i).removeClass("focus-oval");
            $("div.nav-part" + i).removeClass("focus-word");
        }

        $("div.nav-oval" + path).addClass("focus-oval");
        $("div.nav-part" + path).addClass("focus-word");
    }
}