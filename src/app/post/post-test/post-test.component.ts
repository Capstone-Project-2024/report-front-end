import { Component } from '@angular/core';

@Component({
  selector: 'app-post-test',
  templateUrl: './post-test.component.html',
  styleUrl: './post-test.component.css'
})
export class PostTestComponent {
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
