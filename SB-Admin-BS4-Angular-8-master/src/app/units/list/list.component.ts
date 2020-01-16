import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';
import { Unit } from 'src/app/model/unit';
import { UnitService } from 'src/app/service/unit.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [routerTransition()]

})
export class ListComponent implements OnInit {
  closeResult: string;
  listlab:any;
  lab = new Unit('','',null);
  search:string;
  p:number = 1;
  constructor(private modalService:NgbModal,private em:UnitService) { }

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
    resp.subscribe((data) => this.listlab = data);
  }

  public resetEmp(){
    this.lab = new Unit('','',null);
  }

  public createuser(con) {
    let respons = this.em.cretelabs(this.lab);
    respons.subscribe((data) => {
      this.open(con)
   });
   
  }

  public upt(id) {
    let resp = this.em.getlabs(id);
    return resp.subscribe((data) => this.lab = data);
  }
  public updatetype(id){
    let respons = this.em.updatelabs(id,this.lab);
    respons.subscribe((data) => this.lab = data);
   }
  deleteEmployeeType(id: number) {
    this.em.deletelabs(id)
      .subscribe(
        (data) => this.reload())      
  }
  



}
