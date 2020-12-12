import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appnine';
  // data=['Akash','Manisha','Manjeet','Aakash']
    data=[
      {
        name:'akash',
        age:12,
      },
      {
        name:'manisha',
        age:12,
      },
      {
        name:'manjeet',
        age:12,
      },
      {
        name:'Aakash',
        age:30,
      },
      
    ]
}
