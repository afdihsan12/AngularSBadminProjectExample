import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';
import { LabserviceService } from 'src/app/service/labservice.service';
import { Labs } from 'src/app/model/labs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-searchlabs',
  templateUrl: './searchlabs.component.html',
  styleUrls: ['./searchlabs.component.scss'],
  animations: [routerTransition()]

})
export class SearchlabsComponent implements OnInit {

  closeResult: string;
  lab = new Labs(null,'','');
  listlab:any;
  id:string;

  constructor(private route:ActivatedRoute, private modalService:NgbModal,private em:LabserviceService) { }

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
    this.id = this.route.snapshot.paramMap.get("code");
    this.reload(this.id);
  }
  public reload(id) {
    let resp = this.em.getlabscode(id);
    resp.subscribe((data) => this.listlab = data);
  }

  public resetEmp(){
    this.lab = new Labs(null,'','');
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
      .subscribe();      
  }
  

}
