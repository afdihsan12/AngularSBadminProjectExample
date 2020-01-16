import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';
import { Serviceunit } from 'src/app/model/serviceunit';
import { Unit } from 'src/app/model/unit';
import { ServiceunitService } from 'src/app/service/serviceunit.service';
import { UnitService } from 'src/app/service/unit.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [routerTransition()]
})
export class ListComponent implements OnInit {
  closeResult: string;
  listservice:any;
  type:any;
  p:number = 1;
  service = new Serviceunit(null,new Unit('','',null),null,'','');

  constructor(private modalService:NgbModal,private em:ServiceunitService,private unita:UnitService) { }
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
    let resp1 = this.unita.getAllLabs();
    resp1.subscribe((data) => this.type = data);
  }

  public reload() {
    let resp = this.em.getAllLabs();
    resp.subscribe((data) => this.listservice = data);
  }

  public upt(id) {
    let resp = this.em.getlabs(id);
    return resp.subscribe((data) => this.service = data);
  }
  public resetEmp(){
    this.service = new Serviceunit(null,new Unit('','',null),null,'','');
  }  
  deleteEmployee(id: number) {
    this.em.deletelabs(id)
      .subscribe(
        (data) => this.reload())      
  }
  public updateEmp(id){
    let respons = this.em.updatelabs(id,this.service);
    respons.subscribe((data) => this.service = data);
   }

  public createuser(con) {
    let respons = this.em.cretelabs(this.service);
    respons.subscribe((data) => {
      this.open(con)
   });
   
  }


}
