import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Form } from '../../models/form';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {
  info: string = "Part I: Information About the Partnership ";
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
    console.log($("#formPart1"));
    var form = document.getElementById("formPart1");

    if ($("#formPart1").hasClass("ng-invalid")) {
      $("#startMonth").focus();  
      $("#endMonth").focus();  
      $("#endYear").focus();  
      $("#partnershipID").focus();  
      $("#partnershipInfo").focus();  
      $("#startMonth").focus();  
      return ;
    }


    this.router.navigate(["part" + path]);
    console.log(path);
    for (var i = 1; i <= 3; ++i) {
      $("div.nav-oval" + i).removeClass("focus-oval");
      $("div.nav-part" + i).removeClass("focus-word");
    }

    $("div.nav-oval" + path).addClass("focus-oval");
    $("div.nav-part" + path).addClass("focus-word");
  }

  clear() {
    this.form.clearPart1();
  }


}