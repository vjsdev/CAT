import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "cat-assignroles",
  templateUrl: "./assignroles.component.html",
  styleUrls: ["./assignroles.component.css"]
})
export class AssignrolesComponent implements OnInit {
  displayedColumns: string[] = [
    "position",
    "project",
    "date",
    "action",
    "userinfo"
  ];
  dataSource = new MatTableDataSource<ProjectMasterLog>(ACTIVITY_LOG);

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
export interface ProjectMasterLog {
  project: string;
  position: number;
  date: string;
  action: string;
  userinfo: string;
}

const ACTIVITY_LOG: ProjectMasterLog[] = [
  {
    position: 1,
    project: "GUA",
    date: "June 2019",
    action: "Waiting for auditor approval",
    userinfo: "Gayathri Ajith"
  },
  {
    position: 2,
    date: "July 2019",
    project: "HRBU",
    action: "Waiting for auditor response",
    userinfo: "Vipin John"
  },
  {
    position: 3,
    date: "August 2019",
    project: "Connect",
    action: "Project locked since June 27,2019",
    userinfo: "Archana Chandran"
  },
  {
    position: 4,
    date: "June 2019",
    project: "Dot Com",
    action: "Team has not yet started the audit",
    userinfo: "Vishnu Potti"
  },
  {
    position: 5,
    date: "July 2019",
    project: "My Block",
    action: "Waiting for team's response",
    userinfo: "Gayathri Ajith"
  },
  {
    position: 6,
    date: "June 2019",
    project: "AM",
    action: "Auditing in progress",
    userinfo: "Vipin John"
  },
  {
    position: 7,
    date: "July 2019",
    project: "Work Center",
    action: "Auditing in progress",
    userinfo: "Vipin John"
  },
  {
    position: 8,
    date: "May 2019",
    project: "Oche",
    action: "Audit completed",
    userinfo: "Vipin John"
  },
  {
    position: 9,
    date: "May 2019",
    project: "Digital",
    action: "Audit report sent to review",
    userinfo: "Vipin John"
  },
  {
    position: 10,
    date: "March 2019",
    project: "Tcx",
    action: "Auditing in progress",
    userinfo: "Vipin John"
  },
  {
    position: 11,
    date: "April 2019",
    project: "Forms",
    action: "Audit completed",
    userinfo: "Vipin John"
  },
  {
    position: 12,
    date: "May 2019",
    project: "Mobile",
    action: "Audit completed",
    userinfo: "Vipin John"
  },
  {
    position: 13,
    date: "July 2019",
    project: "Services",
    action: "Audit completed",
    userinfo: "Vipin John"
  }
];
