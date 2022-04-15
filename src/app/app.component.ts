import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-app';
  image = ''
  userinput =''
  useroutput =''
  showoutput=()=>{
    this.useroutput = this.userinput
  }
  onclick=()=>{
    this.image='https://i.pinimg.com/474x/01/88/dc/0188dc41881e0e410b5375cdead5f49a.jpg'
 }
}
