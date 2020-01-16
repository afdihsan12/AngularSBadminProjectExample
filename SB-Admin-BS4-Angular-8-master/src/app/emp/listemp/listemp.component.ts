import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { Emptype } from 'src/app/model/emptype';
import { EmptypeService } from 'src/app/service/emptype.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.scss'],
  animations: [routerTransition()]
})
export class ListempComponent implements OnInit {

  empl: any;
  type: any;
  messages: any;
  emp = new Employee('', '', '', '', '', new Emptype(0, '', '', '', 0));
  closeResult: string;
  constructor(private route:Router, private emptype: EmptypeService,private em: EmployeeService, private router: Router,private modalService: NgbModal) { }

  ngOnInit() {
    this.reload();

    let resp1 = this.emptype.getAllEmployee();
    resp1.subscribe((data) => this.type = data);
  }
  public reload() {
    let resp = this.em.getAllEmployee();
    resp.subscribe((data) => this.empl = data);
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
      .subscribe(
        (data) => this.reload())      
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
  search(name,search){
  this.router.navigateByUrl('/employee/search/'+search+'/'+name)
}
}
