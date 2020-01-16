import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';
import { Rooms } from 'src/app/model/rooms';
import { Roomstype } from 'src/app/model/roomstype';
import { RoomsService } from 'src/app/service/rooms.service';
import { RoomstypeService } from 'src/app/service/roomstype.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-searchrooms',
  templateUrl: './searchrooms.component.html',
  styleUrls: ['./searchrooms.component.scss'],
  animations: [routerTransition()]

})
export class SearchroomsComponent implements OnInit {

  closeResult: string;
  rooms = new Rooms(null,'','',new Roomstype(null,'',null,'',''));
  roomslist:any;
  type:any;
  id:string;
  constructor(private route:ActivatedRoute, private modalService: NgbModal,private em:RoomsService,private et:RoomstypeService) { }

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
    this.id = this.route.snapshot.paramMap.get('code');
    this.reload(this.id);
    let resp = this.et.getAllRoomstype();
    resp.subscribe((data) => this.type = data);
  }
  public reload(id) {
    let resp = this.em.getroomstypesear(id);
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
        .subscribe();     
    }
  
}
