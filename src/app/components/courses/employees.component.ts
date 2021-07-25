import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
 listEmployees:any[]=[];
 action="agregar";
 id:number|undefined;

form:FormGroup;
  constructor( private  fb:FormBuilder,private toastr: ToastrService, private _EmployeeService:EmployeeService ) {
    this.form=this.fb.group({
      idDepartment:['',Validators.required],
      firstName:['',Validators.required],
      secondName:['',Validators.required],
      surName:['',Validators.required],
      secondSurName:['',Validators.required],
     
      professionalCard:['',Validators.required],
      address:['',Validators.required],
      phone:['',Validators.required],
      mobile:['',Validators.required],
      emailId:['',Validators.required],
      approverId:['',Validators.required],
      directorId:['',Validators.required],
      active:['',Validators.required],
      creationUser:['',Validators.required],
      creationDate:['',Validators.required],
      lastModificationUser:['',Validators.required],
      lastModificationDate:['',Validators.required],
      rolCat:['',Validators.required],
      hierarchyLevel:['',Validators.required],
      expeditionPlaceId:['',Validators.required],
      typeIdentification:['',Validators.required],
      numberIdentification:['',Validators.required],
      idCity:['',Validators.required],
      

     
    })
   }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee(){
    this._EmployeeService.getEmployee().subscribe(data =>{
      this.listEmployees=data;
      console.log(data);
    },
    error=>{
      console.log(error);
    });
  }
  saveEmployee(){
    

    const Employee:any={
  
      idDepartment:this.form.get('idDepartment')?.value,
      firstName:this.form.get('firstName')?.value,
      secondName:this.form.get('secondName')?.value,
      surName:this.form.get('surName')?.value,
      secondSurName:this.form.get('secondSurName')?.value,
     
      professionalCard:this.form.get('professionalCard')?.value,
      address:this.form.get('address')?.value,
      phone:this.form.get('phone')?.value,
      mobile:this.form.get('mobile')?.value,
      emailId:this.form.get('emailId')?.value,
      approverId:this.form.get('approverId')?.value,
      directorId:this.form.get('directorId')?.value,
      active:this.form.get('active')?.value,
      creationUser:this.form.get('creationUser')?.value,
      creationDate:this.form.get('creationDate')?.value,
      lastModificationUser:this.form.get('lastModificationUser')?.value,
      lastModificationDate:this.form.get('lastModificationDate')?.value,
      rolCat:this.form.get('rolCat')?.value,
      hierarchyLevel:this.form.get('hierarchyLevel')?.value,
      expeditionPlaceId:this.form.get('expeditionPlaceId')?.value,
      typeIdentification:this.form.get('typeIdentification')?.value,
      numberIdentification:this.form.get('numberIdentification')?.value,
      idCity:this.form.get('idCity')?.value,




    }
    if (this.id==undefined) {
      this._EmployeeService.saveEmployee(Employee).subscribe(data=>{
        this.form.reset();
      console.log(Employee)
      this.toastr.success('El curso fue registrado', 'Curso registrado');
      this.getAllEmployee();
      
  
      },error=>{
        console.log(error);
        this.toastr.error("Ocurrio un error","Error");
      })
      
    }else{
      Employee.id=this.id;
     
      this._EmployeeService.updateEmployee(this.id,Employee).subscribe(data=>{
        this.form.reset();
        this.action="agregar";
        this.id=undefined;
        this.toastr.info("El curso fue actualizada","Curso Actualizado");
        this.getAllEmployee();
      },error=>{
        console.log(error);
      })

    }
   
   
    
  }

  deleteEmployee(id:number){

 this._EmployeeService.deleteEmployee(id).subscribe(data =>{

  this.toastr.error("El curso fue eliminado con exito","curso eliminado");
  this.getAllEmployee();
 },error =>{
   console.log(error);
 });
  
  }
  editEmployee(Employee:any){
    this.action="editar";
    this.id=Employee.id;
    this.form.patchValue({
     

      idDepartment:Employee.idDepartment,
      firstName:Employee.firstName,
      secondName:Employee.secondName,
      surName:Employee.surName,
      secondSurName:Employee.secondSurName,
     
      professionalCard:Employee.professionalCard,
      address:Employee.address,
      phone:Employee.phone,
      mobile:Employee.mobile,
      emailId:Employee.emailId,
      approverId:Employee.approverId,
      directorId:Employee.directorId,
      active:Employee.active,
      creationUser:Employee.creationUser,
      creationDate:Employee.creationDate,
      lastModificationUser:Employee.lastModificationUser,
      lastModificationDate:Employee.lastModificationDate,
      rolCat:Employee.rolCat,
      hierarchyLevel:Employee.hierarchyLevel,
      expeditionPlaceId:Employee.expeditionPlaceId,
      typeIdentification:Employee.typeIdentification,
      numberIdentification:Employee.numberIdentification,
      idCity:Employee.idCity,
      

    })

  }
}
