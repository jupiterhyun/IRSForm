import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'show' })
export class ShowObject implements PipeTransform {
    transform(value: any, arg: number): any {
        let arr = [];
        for (let key in value) {
            arr.push(value[key]);
            console.log(value[key]);
        }
        return arr;
    }
}