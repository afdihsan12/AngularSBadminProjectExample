import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../router.animations';
import { EmptypeService } from 'src/app/service/emptype.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Emptype } from 'src/app/model/emptype';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [routerTransition()]

})
export class SearchComponent implements OnInit {
  type: any;
  parent:any;
  typedata = new Emptype(0,'','','',0);
  closeResult: string;
  name:string;
  constructor(private route:ActivatedRoute, private em:EmptypeService,private modalService: NgbModal) { }
  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get("name");
    this.reload(this.name);
    let resp1 = this.em.getParent();
    resp1.subscribe((data) => this.parent = data);
  }

  public resetEmp(){
    this.typedata = new Emptype(0,'','','',0);  } 

  open(content) {
    this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
}

public upt(id) {
  let resp = this.em.gettype(id);
  return resp.subscribe((data) => this.typedata = data);
}

deleteEmployeeType(id: number) {
  this.em.deleteEmployeetype(id)
    .subscribe();     
}

public updatetype(id){
  let respons = this.em.updEmployeetype(id,this.typedata);
  respons.subscribe((data) => this.typedata = data);
 }

public createuser(con) {
  let respons = this.em.cretetype(this.typedata);
  respons.subscribe((data) => {
    this.open(con)
 });
}
private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
}

  public reload(id) {
    let resp = this.em.gettypesa(id);
    resp.subscribe((data) => this.type = data);
  }
}
