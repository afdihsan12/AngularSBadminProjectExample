import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';
import { Labsrates } from 'src/app/model/labsrates';
import { Labs } from 'src/app/model/labs';
import { LabratesserviceService } from 'src/app/service/labratesservice.service';
import { LabserviceService } from 'src/app/service/labservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listlabsrates',
  templateUrl: './listlabsrates.component.html',
  styleUrls: ['./listlabsrates.component.scss'],
  animations: [routerTransition()]

})
export class ListlabsratesComponent implements OnInit {
  closeResult: string;
  listlab:any;
  type:any;
  lab = new Labsrates(null,'',new Labs(null,'',''),null);
  constructor(private route:Router, private modalService:NgbModal,private em:LabratesserviceService,private et:LabserviceService) { }

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
    let resp = this.et.getAllLabs();
    resp.subscribe((data) => this.type = data);
  }

  public reload() {
    let resp = this.em.getAllLabs();
    resp.subscribe((data) => this.listlab = data);
  }

  public resetEmp(){
    this.lab = new Labsrates(null,'',new Labs(null,'',''),null);
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
  search(id,searchby){
    this.route.navigateByUrl('labrates/search/'+searchby+'/'+id);
  }

}
