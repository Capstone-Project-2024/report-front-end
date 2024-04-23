import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class homeComponent {
  enteredValue = '';
  newPost = 'No content';
  secondPost = 'No Content';

  onAddPost(){
    this.newPost = this.enteredValue;
  }

  secondAddPost(postInput: HTMLTextAreaElement ){
    this.secondPost = postInput.value;
  }

}
