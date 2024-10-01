import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponseDTO } from '../interfaces/login.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl=environment.apiBaseUrl

  constructor(
    private http: HttpClient,
  ) { }

  login(username:string, password:string):Observable<LoginResponseDTO>{
    return this.http.post<LoginResponseDTO>(
      `${this.baseUrl}/v1/Auth/login`,
    {
      username,
      password
    })
  }

  refreshToken(refreshToken: string, token:string){

  }
}
