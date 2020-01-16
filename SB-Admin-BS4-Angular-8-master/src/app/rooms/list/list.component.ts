import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';
import { Rooms } from 'src/app/model/rooms';
import { Roomstype } from 'src/app/model/roomstype';
import { RoomsService } from 'src/app/service/rooms.service';
import { RoomstypeService } from 'src/app/service/roomstype.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [routerTransition()]

})
export class ListComponent implements OnInit {
  closeResult: string;
  rooms = new Rooms(null,'','',new Roomstype(null,'',null,'',''));
  roomslist:any;
  type:any;
  constructor(private route:Router, private modalService: NgbModal,private em:RoomsService,private et:RoomstypeService) { }

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
    let resp = this.et.getAllRoomstype();
    resp.subscribe((data) => this.type = data);
  }
  public reload() {
    let resp = this.em.getAllRoomstype();
    resp.subscribe((data) => this.roomslist = data);
  }

  public resetEmp(){
    this.rooms = new Rooms(null,'','',new Roomstype(null,'',null,'',''));
  }
  
    public createuser(con) {
      let respons = this.em.creteroomstype(this.rooms);
      respons.subscribe((data) => {
        this.open(con)
     });
     
    }

    public upt(id) {
      let resp = this.em.getroomstype(id);
      return resp.subscribe((data) => this.rooms = data);
    }
    public updatetype(id){
      let respons = this.em.updroomstype(id,this.rooms);
      respons.subscribe((data) => this.rooms = data);
     }
    deleteEmployeeType(id: number) {
      this.em.deleteroomstype(id)
        .subscribe(
          (data) => this.reload())      
    }
    search(code){
      this.route.navigateByUrl("rooms/search/"+code)
    }

}
