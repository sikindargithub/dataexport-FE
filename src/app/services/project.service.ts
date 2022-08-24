import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  // url to get all the projects
  private _baseUrl = 'http://localhost:9092/project-api/projects';
  // url to get all the filtered projects
  private _filterProjects = 'http://localhost:9092/project-api/filterProjects';
  // url to get the filtered and sorted projects
  private _filterAndSortProjects =
    'http://localhost:9092/project-api/filteredAndSortedProjects';
  // url to export the projects to excel or pdf files
  private _exportUrl = 'http://localhost:9092/export';
  /**
   *
   * @param _http the instance of HttpClient to call the BE API
   * @param _keycloakService the instance of KeycloakService to redirect the user to IDP(Identity Provider)
   */
  constructor(
    private _http: HttpClient,
    private _keycloakService: KeycloakService
  ) {}

  /**
   *
   * @returns the observable of projects
   */
  getProjects = (): Observable<Project[]> => {
    return this._http.get<Project[]>(this._baseUrl);
  };

  /**
   *
   * @param filterValue the word by which user wants to search the projects
   * @returns the downloadable excel file
   */
  getExcelData = (filterValue: string) => {
    return this._http.get<any>(
      this._exportUrl + `/excel?keyword=${filterValue}`,
      {
        responseType: 'arraybuffer' as 'json',
      }
    );
  };
  /**
   *
   * @param filterValue the word by which user wants to search the projects
   * @returns the downloadable pdf file
   */
  getPdfData = (filterValue: string) => {
    return this._http.get<any>(
      this._exportUrl + `/pdf?keyword=${filterValue}`,
      {
        responseType: 'arraybuffer' as 'json',
      }
    );
  };
  /**
   *
   * @param filterValue the word by which user wants to search the projects
   * @returns the observable of Response
   */
  getProjectsByFilterValue = (filterValue: string): Observable<Response> => {
    return this._http.get<Response>(
      this._filterProjects + `?keyword=${filterValue}`
    );
  };

  /**
   *
   * @param filterValue the word by which user wants to search the projects
   * @param sortBy the column name by which user wants to sort the projects
   * @param sortOrder the numeric value which decides the sorting order in the BE
   * @returns the observable of Response
   */
  sortProjectsByFilterValue = (
    filterValue: string,
    sortBy: string,
    sortOrder: number
  ): Observable<Response> => {
    return this._http.get<Response>(
      this._filterAndSortProjects +
        `?keyword=${filterValue}&sortBy=${sortBy}&sortOrder=${sortOrder}`
    );
  };
  /**
   * Used to logout from the application
   */
  public logout(): void {
    this._keycloakService.logout(window.location.origin);
  }
}
