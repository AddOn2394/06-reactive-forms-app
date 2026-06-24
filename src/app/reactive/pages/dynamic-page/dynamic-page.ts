import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'dynamic-page',
  imports: [JsonPipe],
  templateUrl: './dynamic-page.html',
})
export class DynamicPage {
  private formBuilder = inject(FormBuilder);
}
