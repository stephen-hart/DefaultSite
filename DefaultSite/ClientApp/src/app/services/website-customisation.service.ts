import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteData } from '../models/site-data.model';

@Injectable({
  providedIn: 'root'
})
export class WebsiteCustomisationService {

  private siteData: SiteData[] = [
    {domain: 'localhost', title: 'My Local Site'},
  ];
  constructor() { }

  getSiteData(domain: string): SiteData {
    return this.siteData.find(i => i.domain === domain);
  }
}
