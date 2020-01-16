import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listpatient',
  templateUrl: './listpatient.component.html',
  styleUrls: ['./listpatient.component.scss'],
  animations: [routerTransition()]
})
export class ListpatientComponent implements OnInit {
  closeResult: string;
  patientlist:any;
  patient = new Patient('','','','','','','',0);
  constructor(private modalService: NgbModal,private em:PatientService,private route:Router) { }

  ngOnInit() {
    this.reload();
  }

  deleteEmployeeType(id: number) {
    this.em.deletePatient(id)
      .subscribe(
        (data) => this.reload())      
  }

  public updatepatient(id){
    let respons = this.em.upPatient(id,this.patient);
    respons.subscribe((data) => this.patient = data);
   }

  public upt(id) {
    let resp = this.em.getPatient(id);
    return resp.subscribe((data) => this.patient = data);
  }

  public createuser(con) {
    let respons = this.em.crete(this.patient);
    respons.subscribe((data) => {
      this.open(con)
   });
   
  }

  public resetPatient(){
    this.patient = new Patient('','','','','','','',0);;  }

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

public reload() {
  let resp = this.em.getAllPatient();
  resp.subscribe((data) => this.patientlist = data);
}

search(id){
  this.route.navigateByUrl('/patient/search/'+id);
}

}
