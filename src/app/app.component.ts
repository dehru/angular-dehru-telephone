import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  @ViewChild('telephone') input: ElementRef;
  format(ev: KeyboardEvent) {
    if (ev.key === 'Backspace') {
      // do nothing;
    } else {
      const test = this.input.nativeElement.value;
      const newVal = test.replaceAll(/\D+/g, '').substring(0, 10);
      let output = '';
      newVal.split('').forEach((char, index) => {
        console.log('char: ', char, index);
        switch (index) {
          case 0:
            output += `(${char}`;
            break;
          case 2:
            output += `${char})`;
            break;
          case 3:
            output += ` ${char}`;
            break;
          case 6:
            output += `-${char}`;
            break;
          default:
            output += char;
        }
      });
      this.input.nativeElement.value = output;
    }
  }
}
