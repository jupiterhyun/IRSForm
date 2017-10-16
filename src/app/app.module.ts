import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { AngularModule } from './angular.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormService } from './services/form.service';
import { Part1Component } from './components/part1/part1.component';
import { Part3Component } from './components/part3/part3.component';
import { Part2Component } from './components/part2/part2.component';
import { TitleRowComponent } from './components/titlerow/titlerow.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { NavComponent } from './components/nav/nav.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { ShowObject } from './pipes/show.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularModule,
    AppRoutingModule//keep last
  ],
  declarations: [
    AppComponent, 
    StepperComponent,
    Part1Component,
    Part3Component,
    Part2Component,
    TitleRowComponent,
    NavComponent,
    InstructionComponent,
    ShowObject,
  ],
  entryComponents: [InstructionComponent],
  bootstrap: [AppComponent],
  providers: [FormService]
})
export class AppModule {

}

