import { Component} from '@angular/core';
import { FetchusersService } from './fetchusers.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-tables';
  dataSource: any;
  constructor(private users: FetchusersService) {
    this.users.getusers().subscribe(data => {
      this.dataSource = data;
      console.log(data)
    });
  }
  displayedColumns = ['id', 'name', 'username', 'email'];


}
