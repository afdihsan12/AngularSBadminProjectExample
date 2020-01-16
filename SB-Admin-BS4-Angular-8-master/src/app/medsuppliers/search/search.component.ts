import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';
import { Medsuppliers } from 'src/app/model/medsuppliers';
import { Medicines } from 'src/app/model/medicines';
import { Suppliers } from 'src/app/model/suppliers';
import { MedsuppliersService } from 'src/app/service/medsuppliers.service';
import { MedicinesService } from 'src/app/service/medicines.service';
import { SuppliersService } from 'src/app/service/suppliers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [routerTransition()]
})
export class SearchComponent implements OnInit {

  closeResult: string;
  listmedsup:any;
  medsup = new Medsuppliers(null,new Medicines(null,'','','',null),new Suppliers(null,'','',''),'',null);
  medc:any;
  sup:any;
  name:string;
  searchby:string;
  constructor(private route: ActivatedRoute, private modalService:NgbModal,private em:MedsuppliersService,private meds:MedicinesService,private sups:SuppliersService) { }
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
    this.name = this.route.snapshot.paramMap.get("name");
    this.searchby = this.route.snapshot.paramMap.get("search");
    this.reload(this.name,this.searchby);
    let resp = this.meds.getAllLabs();
    resp.subscribe((data) => this.medc = data);
    let resp1 = this.sups.getAllLabs();
    resp1.subscribe((data) => this.sup = data);
  }
  public reload(name,searchby) {
    if(searchby =='obat'){
      let resp = this.em.getlabssearch(name);
      resp.subscribe((data) => this.listmedsup = data);
    }
    else{
      let resp = this.em.getsear(name);
      resp.subscribe((data) => this.listmedsup = data);
    }
    
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
      .subscribe();      
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
}
