import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { EmptypeService } from 'src/app/service/emptype.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Emptype } from 'src/app/model/emptype';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listemptype',
  templateUrl: './listemptype.component.html',
  styleUrls: ['./listemptype.component.scss'],
  animations: [routerTransition()]

})
export class ListemptypeComponent implements OnInit {
  type: any;
  parent:any;
  typedata = new Emptype(0,'','','',0);
  closeResult: string;
  constructor(private route:Router, private em:EmptypeService,private modalService: NgbModal) { }
  ngOnInit() {
    this.reload();
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
    .subscribe(
      (data) => this.reload())      
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
  public reload() {
    let resp = this.em.getAllEmployeeT();
    resp.subscribe((data) => this.type = data);
  }

  search(name){
    this.route.navigateByUrl('/emp-type/search/'+name);
}
}