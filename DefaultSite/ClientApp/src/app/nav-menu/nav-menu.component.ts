import { Component } from '@angular/core';
import { SiteData } from '../models/site-data.model';
import { WebsiteCustomisationService } from '../services/website-customisation.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  siteData: SiteData;
  title: string;

  ngOnInit(websiteCustomisationService: WebsiteCustomisationService) {
    this.siteData = websiteCustomisationService.getSiteData('localhost');
    this.title = this.siteData.title;
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
