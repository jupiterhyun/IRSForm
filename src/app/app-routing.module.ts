import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 
import { Part1Component }  from './components/part1/part1.component';
import { Part3Component } from './components/part3/part3.component';
import { Part2Component } from './components/part2/part2.component';
import { StepperComponent } from './components/stepper/stepper.component';
const routes: Routes = [
  { path: '', redirectTo: '/part1', pathMatch: 'full' },
  { path: 'part1',     component: Part1Component },
  { path: 'part2',     component: Part2Component },
  { path: 'part3',     component: Part3Component }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}