import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups: string[] = ['Dev', 'Des', 'HR', 'Finance', 'Adm'];

  constructor() { }

  ngOnInit(): void {
  }

}
