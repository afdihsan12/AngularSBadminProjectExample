import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { Emptype } from 'src/app/model/emptype';
import { EmptypeService } from 'src/app/service/emptype.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [routerTransition()]
})
export class SearchComponent implements OnInit {

  empl: any;
  type: any;
  searchby:string;
  name:string;
  messages: any;
  emp = new Employee('', '', '', '', '', new Emptype(0, '', '', '', 0));
  closeResult: string;
  constructor(private route:ActivatedRoute, private emptype: EmptypeService,private em: EmployeeService, private router: Router,private modalService: NgbModal) { }

  ngOnInit() {

    
    this.name = this.route.snapshot.paramMap.get("name");
    this.searchby = this.route.snapshot.paramMap.get("search");
    this.reload(this.searchby,this.name);
    let resp1 = this.emptype.getAllEmployee();
    resp1.subscribe((data) => this.type = data);
  }
  public reload(code,name) {
    if(code=='name'){
      let resp = this.em.getEmployeename(name);
    resp.subscribe((data) => this.empl = data);
    }
    else{
    let resp = this.em.getEmployecode(this.name);
    resp.subscribe((data) => this.empl = data);
    }
    
  }

  public upt(id) {
    let resp = this.em.getEmployee(id);
    return resp.subscribe((data) => this.emp = data);
  }
  public resetEmp(){
    this.emp = new Employee('','','','','',new Emptype(0,'','','',0))
  }  
  deleteEmployee(id: number) {
    this.em.deleteEmployee(id)
      .subscribe();      
  }
  public updateEmp(id){
    let respons = this.em.updEmployee(id,this.emp);
    respons.subscribe((data) => this.emp = data);
   }

  public createuser(con) {
    let respons = this.em.creteUser(this.emp);
    respons.subscribe((data) => {
      this.open(con)
   });
  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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

}
