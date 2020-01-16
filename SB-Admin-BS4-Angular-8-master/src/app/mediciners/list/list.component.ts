import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';
import { Medicines } from 'src/app/model/medicines';
import { MedicinesService } from 'src/app/service/medicines.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [routerTransition()]

})
export class ListComponent implements OnInit {
  closeResult: string;
  listmed:any;
  medicines = new Medicines(null,'','','',null);
  constructor(private modalService:NgbModal,private em:MedicinesService) { }
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
  }
  public reload() {
    let resp = this.em.getAllLabs();
    resp.subscribe((data) => this.listmed = data);
  }

  public upt(id) {
    let resp = this.em.getlabs(id);
    return resp.subscribe((data) => this.medicines = data);
  }
  public resetEmp(){
    this.medicines = new Medicines(null,'','','',null);
  }  
  deleteEmployee(id: number) {
    this.em.deletelabs(id)
      .subscribe(
        (data) => this.reload())      
  }
  public updateEmp(id){
    let respons = this.em.updatelabs(id,this.medicines);
    respons.subscribe((data) => this.medicines = data);
   }

  public createuser(con) {
    let respons = this.em.cretelabs(this.medicines);
    respons.subscribe((data) => {
      this.open(con)
   });
   
  }


}
