import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ROUTES } from "../cat-sidebar/cat-sidebar.component";

@Component({
  selector: "cat-navbar",
  templateUrl: "./cat-navbar.component.html",
  styleUrls: ["./cat-navbar.component.css"]
})
export class CatNavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }
    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item]["children"].length > 0) {
        let itm = this.listTitles[item]["children"];
        for (let item = 0; item < itm.length; item++) {
          if (itm[item].path === titlee) {
            return itm[item].title;
          }
        }
      }
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return "Dashboard";
  }
}
