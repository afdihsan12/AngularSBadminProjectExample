import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';
import { Medsuppliers } from 'src/app/model/medsuppliers';
import { Medicines } from 'src/app/model/medicines';
import { Suppliers } from 'src/app/model/suppliers';
import { MedsuppliersService } from 'src/app/service/medsuppliers.service';
import { MedicinesService } from 'src/app/service/medicines.service';
import { SuppliersService } from 'src/app/service/suppliers.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [routerTransition()]

})
export class ListComponent implements OnInit {
  closeResult: string;
  listmedsup:any;
  medsup = new Medsuppliers(null,new Medicines(null,'','','',null),new Suppliers(null,'','',''),'',null);
  medc:any;
  sup:any;
  searchby:string;
  constructor(private route:Router, private modalService:NgbModal,private em:MedsuppliersService,private meds:MedicinesService,private sups:SuppliersService) { }
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
    let resp = this.meds.getAllLabs();
    resp.subscribe((data) => this.medc = data);
    let resp1 = this.sups.getAllLabs();
    resp1.subscribe((data) => this.sup = data);
  }
  public reload() {
    let resp = this.em.getAllLabs();
    resp.subscribe((data) => this.listmedsup = data);
  }

  public upt(id) {
    let resp = this.em.getlabs(id);
    return resp.subscribe((data) => this.medsup = data);
  }
  public resetEmp(){
    this.medsup = new Medsuppliers(null,new Medicines(null,'','','',null),new Suppliers(null,'','',''),'',null);

  }  
  deleteEmployee(id: number) {
    this.em.deletelabs(id)
      .subscribe(
        (data) => this.reload())      
  }
  public updateEmp(id){
    let respons = this.em.updatelabs(id,this.medsup);
    respons.subscribe((data) => this.medsup = data);
   }

  public createuser(con) {
    let respons = this.em.cretelabs(this.medsup);
    respons.subscribe((data) => {
      this.open(con)
   });
   
  }
  search(name,search){
    this.route.navigateByUrl('/medsuplly/search/'+search+'/'+name);
  }

}
