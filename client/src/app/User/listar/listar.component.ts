import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { User } from 'src/app/Model/User';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  users:User[]=[];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(data => {
        this.users = data;
      });
  }
  Editar(user:User):void{
    localStorage.setItem("id",user.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(user:User){
    this.service.deleteUser(user)
    .subscribe(data=>{
      this.users=this.users.filter(p=>p!==user);
      alert("Usuario eliminado...");
    })
  }

}
