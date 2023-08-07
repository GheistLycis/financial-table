import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import UserDTO from 'src/app/shared/DTOs/user';
import { NavItem, navItems } from 'src/app/shared/interfaces/NavItem';
import { SessionService } from 'src/app/shared/services/session/session.service';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent implements OnInit {
  userName!: string
  navItems: NavItem[] = [
    {
      type: 'link' as 'link' | 'menu',
      title: 'Home',
      link: '',
    }
  ].concat(navItems)
  collapses: { [collapse: string]: boolean } = { 
    profile: true 
  }

  constructor(
    public activeOffcanvas: NgbActiveOffcanvas,
    public sessionService: SessionService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.userName = this.sessionService.getSession().user.name

    this.navItems.forEach(({ type, title }) => {
      if(type == 'menu') this.collapses[title] = true
    })
  }
  
  updateLocalUser(user: UserDTO): void {
    const session = this.sessionService.getSession()
    
    session.user = user
    this.sessionService.setSession(session)
    this.userName = user.name
  }
}