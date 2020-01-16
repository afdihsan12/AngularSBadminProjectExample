import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { EmptypeService } from 'src/app/service/emptype.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { Emptype } from 'src/app/model/emptype';

@Component({
  selector: 'app-formemployee',
  templateUrl: './formemployee.component.html',
  styleUrls: ['./formemployee.component.scss'],
  animations: [routerTransition()],
})
export class FormemployeeComponent implements OnInit {
  type: any;
  messages: any;
  emp = new Employee('', '', '', '', '', new Emptype(0, '', '', '', 0));



  constructor(private emptype: EmptypeService, private empl: EmployeeService, private router: Router) {

   }

  ngOnInit() {
    const resp1 = this.emptype.getAllEmployee();
    resp1.subscribe((data) => this.type = data);
  }

  public createuser() {
    let respons = this.empl.creteUser(this.emp);
    respons.subscribe((data) => {
      this.messages = data;
      alert('succes');
   });
   
  }
}
