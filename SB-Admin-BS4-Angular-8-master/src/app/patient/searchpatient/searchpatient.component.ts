import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchpatient',
  templateUrl: './searchpatient.component.html',
  styleUrls: ['./searchpatient.component.scss'],
  animations: [routerTransition()]

})
export class SearchpatientComponent implements OnInit {

  closeResult: string;
  patientlist:any;
  patient = new Patient('','','','','','','',0);
  id:string;
  constructor(private modalService: NgbModal,private em:PatientService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.reload(this.id);
  }

  deleteEmployeeType(id: number) {
    this.em.deletePatient(id)
      .subscribe();      
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

public reload(id) {
  let resp = this.em.getPatients(id);
  resp.subscribe((data) => this.patientlist = data);
}


}
