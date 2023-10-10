import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Employee } from './employee.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  get url(){
    return 'http://localhost:3000/employees'
  }
  notifyTofetch=new EventEmitter<void>()
  
  constructor(private http: HttpClient) { }
  addEmployee(content: Employee) {
    return this.http.post(this.url, content)
  }
  updateEmployee(employee:Employee,id:string| null) {
    return this.http.put<Employee>(this.url+'/'+id, employee)
  }
  deleteEmployee(id: string) {
    return this.http.delete(this.url+'/'+id)
  }
  fetchEmployees() {
    return this.http.get<{ [id: number]: Employee }>(this.url).pipe(
      
        map((data)=>{
          let employeeArray:Employee[]=[]
          for(let id in data){
            employeeArray.push({...data[id]});
          }
          return employeeArray;
        })
      )
  }

  fetchEmployee(id:number){
    return this.http.get<Employee>(this.url+'/'+id)
  }
}
