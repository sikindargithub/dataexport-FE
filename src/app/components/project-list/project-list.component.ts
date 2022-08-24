import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  // stores array of projects
  projects: Project[] = [];
  // typed word by the user
  searchedValue: string = '';
  // count of total pages
  totalPages: number = 0;
  // items per page
  pageSize: number = 2;
  // current page no
  pageNo: number = 1;
  // total no of items
  noOfItems: number = 0;
  // page size options to choose
  pageSizeOptions: number[] = [4, 6, 8, 10];

  // used to implement BE sort
  sortOrder: number[] = [0, 0, 0];
  // names of columns in material table
  displayedColumns: string[] = [
    'projectId',
    'projectName',
    'projectStatus',
    'costInDollars',
    'managerName',
    'clientName',
    'noOfResources',
    'creationDate',
    'estimatedEndDate',
    'durationInMonths',
  ];
  /**
   *
   * @param _projectService the instance project service
   */
  constructor(private _projectService: ProjectService) {}

  ngOnInit(): void {
    this._projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

  /**
   * Used to call the project service's excel export method
   */
  exportToExcel = () => {
    this._projectService
      .getExcelData(this.searchedValue)
      .subscribe((responseMessage) => {
        let file = new Blob([responseMessage], {
          type: 'application/vnd.ms-excel',
        });
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      });
  };
  /**
   * Used to get the total projects when the searched value is cleared
   */
  valuechange() {
    console.log(this.searchedValue);
    if (this.searchedValue === '') {
      this._projectService.getProjects().subscribe((data) => {
        this.projects = data;
      });
    }
  }

  /**
   * Used to call the project service's pdf export method
   */
  exportToPdf = () => {
    this._projectService
      .getPdfData(this.searchedValue)
      .subscribe((responseMessage) => {
        let file = new Blob([responseMessage], {
          type: 'application/pdf',
        });
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      });
  };
  /**
   * Used to call the project service's method to get the filtered projects
   */
  searchProjects = () => {
    this._projectService
      .getProjectsByFilterValue(this.searchedValue)
      .subscribe((data) => {
        this.projects = data['projects'];
        this.noOfItems = data.totalItems;
      });
  };
  /**
   *
   * @param event any keyboard related event like click,hover & double click etc..
   * @param sortBy the column name by which user wants to sort the projects
   * @param order the numerice value which decides the sorting order like ASC/DESC in BE
   */
  sortProjectName = (event: any, sortBy: string, order: number) => {
    var count = this.sortOrder[0];
    for (let i = 0; i < this.sortOrder.length; i++) {
      this.sortOrder[i] = 0;
    }
    this.sortOrder[0] = 1 + count;
    if (this.sortOrder[0] > 2) {
      this.sortOrder[0] = 1;
    }
    if (sortBy == 'projectName') {
      this._projectService
        .sortProjectsByFilterValue(this.searchedValue, 'projectName', order)
        .subscribe((data) => {
          this.projects = data['projects'];
          this.noOfItems = data.totalItems;
        });
    }
  };
  /**
   *
   * @param event any keyboard related event like click,hover & double click etc..
   * @param sortBy the column name by which user wants to sort the projects
   * @param order the numerice value which decides the sorting order like ASC/DESC in BE
   */
  sortCost = (event: any, value: string, order: number) => {
    var count = this.sortOrder[1];
    for (let i = 0; i < this.sortOrder.length; i++) {
      this.sortOrder[i] = 0;
    }
    this.sortOrder[1] = 1 + count;
    if (this.sortOrder[1] > 2) {
      this.sortOrder[1] = 1;
    }
    if (value === 'costInDollars') {
      this._projectService
        .sortProjectsByFilterValue(this.searchedValue, 'costInDollars', order)
        .subscribe((data) => {
          this.projects = data['projects'];
          this.noOfItems = data.totalItems;
        });
    }
  };
  /**
   *
   * @param event any keyboard related event like click,hover & double click etc..
   * @param sortBy the column name by which user wants to sort the projects
   * @param order the numerice value which decides the sorting order like ASC/DESC in BE
   */
  sortCreationDate = (event: any, value: string, order: number) => {
    var count = this.sortOrder[2];
    for (let i = 0; i < this.sortOrder.length; i++) {
      this.sortOrder[i] = 0;
    }
    this.sortOrder[2] = 1 + count;
    if (this.sortOrder[2] > 2) {
      this.sortOrder[2] = 1;
    }
    if (value === 'creationDate') {
      this._projectService
        .sortProjectsByFilterValue(this.searchedValue, 'creationDate', order)
        .subscribe((data) => {
          this.projects = data['projects'];
          this.noOfItems = data.totalItems;
        });
    }
  };
}
