import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Capstone-Project';
  data: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() { 
    this.dataService.getData().subscribe({
      next: (data) => {
        console.log(data),
        this.data = data
      },
      error: (error) => console.error('There was an error!', error),
    })
  }

}
