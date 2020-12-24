import { Component, OnInit } from '@angular/core';
import { InputscreenService } from './inputscreen.service.ts';

@Component({
  selector: 'app-inputscreen',
  templateUrl: './inputscreen.component.html',
  styleUrls: ['./inputscreen.component.scss'],
})

export class InputscreenComponent implements OnInit {
    public email = {
        email: '',
    }

    constructor (
        private inputscreenService: InputscreenService,
    ) { }

    ngOnInit() {
    }
}