import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "cat-cat-admin-dashboard",
  templateUrl: "./cat-admin-dashboard.component.html",
  styleUrls: ["./cat-admin-dashboard.component.css"]
})
export class CatAdminDashboardComponent implements OnInit {
  displayedColumns: string[] = [
    "position",
    "project",
    "month",
    "status",
    "rating"
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  selected = new Date().getMonth();
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface PeriodicElement {
  project: string;
  position: number;
  status: string;
  rating: number;
  month: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    project: "GUA",
    month: "June 2019",
    status: "Waiting for auditor approval",
    rating: 60
  },
  {
    position: 2,
    project: "HRBU",
    month: "July 2019",
    status: "Waiting for auditor response",
    rating: 70
  },
  {
    position: 3,
    project: "Connect",
    month: "August 2019",
    status: "Project locked since June 27,2019",
    rating: 30
  },
  {
    position: 4,
    project: "Dot Com",
    month: "June 2019",
    status:
      "Auditor accepted the audit request.'<br>'Gayathri is about to take a look at your project.",
    rating: 40
  },
  {
    position: 5,
    project: "My Block",
    month: "July 2019",
    status: "Waiting for team's response",
    rating: 50
  },
  {
    position: 6,
    project: "AM",
    month: "June 2019",
    status: "Auditing in progress",
    rating: 75
  },
  {
    position: 7,
    project: "Work Center",
    month: "July 2019",
    status: "Auditing in progress",
    rating: 78
  },
  {
    position: 8,
    project: "Oche",
    month: "May 2019",
    status: "Audit completed",
    rating: 90
  },
  {
    position: 9,
    project: "Digital",
    month: "May 2019",
    status: "Audit report sent to review",
    rating: 85
  },
  {
    position: 10,
    project: "Tcx",
    month: "March 2019",
    status: "Auditing in progress",
    rating: 70
  },
  {
    position: 11,
    project: "Forms",
    month: "April 2019",
    status: "Audit completed",
    rating: 60
  },
  {
    position: 12,
    project: "Mobile",
    month: "May 2019",
    status: "Audit completed",
    rating: 60
  },
  {
    position: 13,
    project: "Services",
    month: "July 2019",
    status: "Audit completed",
    rating: 60
  }
];
