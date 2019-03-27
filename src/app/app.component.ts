import {Component, OnInit} from '@angular/core';
import {MusicService} from './shared/services/music.service';
import {Music} from './shared/model/music.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  list: Music[];
  title = 'BrainMusic-FE';

  constructor(
    private service: MusicService
  ) {
  }

  ngOnInit() {
    this.service.refreshList();
  }

}
