import { Component } from '@angular/core';
import {StatusService} from "./shared/status.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devops';
  backendStatus = 'DOWN';

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.statusService
      .getStatus()
      .subscribe((result: any) => {
        this.backendStatus = result.status;
        console.log(result);
      });
  }
}
