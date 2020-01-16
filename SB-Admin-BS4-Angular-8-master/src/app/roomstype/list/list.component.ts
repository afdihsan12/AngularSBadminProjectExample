import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';
import { RoomstypeService } from 'src/app/service/roomstype.service';
import { Roomstype } from 'src/app/model/roomstype';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [routerTransition()]

})
export class ListComponent implements OnInit {

  closeResult: string;
  roomstype = new Roomstype(null,'',null,'','');
  roomstypelist:any;
  constructor(private route:Router, private modalService: NgbModal,private em:RoomstypeService) { }

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
    let resp = this.em.getAllRoomstype();
    resp.subscribe((data) => this.roomstypelist = data);
  }

  public resetEmp(){
    this.roomstype = new Roomstype(null,'',null,'','');}
  
    public createuser(con) {
      let respons = this.em.creteroomstype(this.roomstype);
      respons.subscribe((data) => {
        this.open(con)
     });
     
    }
    
    public upt(id) {
      let resp = this.em.getroomstype(id);
      return resp.subscribe((data) => this.roomstype = data);
    }
    public updatetype(id){
      let respons = this.em.updroomstype(id,this.roomstype);
      respons.subscribe((data) => this.roomstype = data);
     }
    deleteEmployeeType(id: number) {
      this.em.deleteroomstype(id)
        .subscribe(
          (data) => this.reload())      
    }
    search(id){
      this.route.navigateByUrl('/rooms-type/search/'+id)
    }

}
