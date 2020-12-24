import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputscreenComponent } from './inputscreen.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: InputscreenComponent },
        ])
    ],
    declarations: [
        InputscreenComponent,
    ]
})
export class InputscreenModule { }