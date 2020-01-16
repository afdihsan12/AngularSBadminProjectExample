import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';
import { Unitsdoctor } from 'src/app/model/unitsdoctor';
import { Employee } from 'src/app/model/employee';
import { Serviceunit } from 'src/app/model/serviceunit';
import { UnitdoctorService } from 'src/app/service/unitdoctor.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { ServiceunitService } from 'src/app/service/serviceunit.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [routerTransition()]

})
export class ListComponent implements OnInit {
  closeResult: string;
  p:number =1;
  search:string;
  unitsdoctor = new Unitsdoctor(null,new Employee('','','','','',null),new Serviceunit(null,null,null,'',''),'','');
  listunit:any;
  emp:any;
  serv:any;
  constructor(private servs:ServiceunitService, private emps:EmployeeService,private modalService:NgbModal,private em:UnitdoctorService,emp:EmployeeService,ser:ServiceunitService) { }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
}

open(content) {
  this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
  ngOnInit() {
    this.reload();
    let resp = this.emps.getAllEmployee();
    resp.subscribe((data) => this.emp = data);
    let resp1 = this.servs.getAllLabs();
    resp1.subscribe((data) => this.serv = data);
  }

  public reload() {
    let resp = this.em.getAllLabs();
    resp.subscribe((data) => this.listunit = data);
  }

  public upt(id) {
    let resp = this.em.getlabs(id);
    return resp.subscribe((data) => this.unitsdoctor = data);
  }
  public resetEmp(){
    this.unitsdoctor = new Unitsdoctor(null,new Employee('','','','','',null),new Serviceunit(null,null,null,'',''),'','');
  }  
  deleteEmployee(id: number) {
    this.em.deletelabs(id)
      .subscribe(
        (data) => this.reload())      
  }
  public updateEmp(id){
    let respons = this.em.updatelabs(id,this.unitsdoctor);
    respons.subscribe((data) => this.unitsdoctor = data);
   }

  public createuser(con) {
    let respons = this.em.cretelabs(this.unitsdoctor);
    respons.subscribe((data) => {
      this.open(con)
   });
   
  }


}
