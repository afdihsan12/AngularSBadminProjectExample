import { Unitsdoctor } from './unitsdoctor';
import { Patient } from './patient';

export class Medrec {
    constructor(id:number,
        tgl:string,
        unitdoctor:Unitsdoctor,
        history:string,
        status:string,
        patient:Patient){}
}
