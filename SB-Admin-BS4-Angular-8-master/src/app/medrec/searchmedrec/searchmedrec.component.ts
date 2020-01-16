import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';
import { Medrec } from 'src/app/model/medrec';
import { Unitsdoctor } from 'src/app/model/unitsdoctor';
import { Employee } from 'src/app/model/employee';
import { Serviceunit } from 'src/app/model/serviceunit';
import { Unit } from 'src/app/model/unit';
import { Patient } from 'src/app/model/patient';
import { MedrecService } from 'src/app/service/medrec.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { PatientService } from 'src/app/service/patient.service';
import { UnitdoctorService } from 'src/app/service/unitdoctor.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-searchmedrec',
  templateUrl: './searchmedrec.component.html',
  styleUrls: ['./searchmedrec.component.scss'],
  animations: [routerTransition()]

})
export class SearchmedrecComponent implements OnInit {

  closeResult: string;
  medrec =  new Medrec(null,'',new Unitsdoctor(null,
            new Employee('','','','','',null),
            new Serviceunit(null,
            new Unit('','',null),null,'',''),'',''),'','',
            new Patient('','','','','','','',null));
  listmedrec:any;
  service:any;
  patient:any;
  id:string;
  by:string;
  constructor(private modalService:NgbModal,private em:MedrecService,private emps:EmployeeService,
    private servs:UnitdoctorService,private pats:PatientService,private route:ActivatedRoute) { }
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
    this.by = this.route.snapshot.paramMap.get("by");
    this.id = this.route.snapshot.paramMap.get("id");
    this.reload(this.id,this.by);
    let resp = this.pats.getAllPatient();
    resp.subscribe((data) => this.patient = data);
    let resp1 = this.servs.getAllLabs();
    resp1.subscribe((data) => this.service = data);
  }

  public reload(id,by) {
    if(by == 'pasiens'){
    let resp = this.em.getlabspasiens(id);
    resp.subscribe((data) => this.listmedrec = data);
    }
    else{
      let resp = this.em.getlabsdocto(id);
    resp.subscribe((data) => this.listmedrec = data);
    }
    
  }

  public upt(id) {
    let resp = this.em.getlabs(id);
    return resp.subscribe((data) => this.medrec = data);
  }
  public resetEmp(){
    this.medrec =  new Medrec(null,'',new Unitsdoctor(null,
      new Employee('','','','','',null),
      new Serviceunit(null,
      new Unit('','',null),null,'',''),'',''),'','',
      new Patient('','','','','','','',null));
  }  
  deleteEmployee(id: number) {
    this.em.deletelabs(id)
      .subscribe();      
  }
  public updateEmp(id){
    let respons = this.em.updatelabs(id,this.medrec);
    respons.subscribe((data) => this.medrec = data);
   }

  public createuser(con) {
    let respons = this.em.cretelabs(this.medrec);
    respons.subscribe((data) => {
      this.open(con)
   });
   
  }
}
