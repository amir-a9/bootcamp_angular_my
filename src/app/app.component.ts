import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  // names = ['amir','ali','mohamad' , 'reza','mehde' , 10 , 25 ]
  users = [
    {
      userImge: 'assets/images/11.png',
      userName: 'amir',
      age: '28yrs , male',
      status: 'active' ,
      time: '06:00 PM',
      date: '2 Feb 2021',
      phone: '98 09184463688',
      doctor:'Dr.Ananth',
    },
    {
      userImge: 'assets/images/logo3.png',
      userName: 'sandeep',
      age: '32yrs , male',
      status: 'active' ,
      time: '06:15 PM',
      date: '2 Feb 2021',
      phone: '98 09354183414',
      doctor:'Dr.Ananth',
    },
    {
      userImge: 'assets/images/logo4.png',
      userName: 'john',
      age: '27yrs , male',
      status: 'nActive' ,
      time: '06:30 PM',
      date: '2 Feb 2021',
      phone: '98 0918418336',
      doctor:'Dr.Ananth',
    }
  ]

  printName(user:any){
    console.log(user.userName)
  }
  constructor() {
    // console.log(this.big(18,15,10))
    // this.big(30,33,22);
    // this.newFor(this.names);
  }

  big (x:number , y:number , z:number){
    if (typeof x != "number"  || typeof z != "number" || typeof y != "number"){
      console.log('is not number');
    } else {
      if (x > y && x > z){

          console.log(x +' > '+ y , z +' >');
      }
      else if(y > x && y > z){

          console.log(y +' > '+ x , z +' >');

      }
      else{
        console.log(z +' > '+ y , x +' >');
      }
    }
  }
  newFor (input: any[]){
    for (let i = 0 ; i < input.length ; i++){

    }
    return input
  }

  clickMe(){
    console.log('ali')
  }

  isShow:boolean = false;

  showText (){
    this.isShow = !this.isShow;
  }

  myNumber: number = 0 ;

  addNumber(){
    this.myNumber+= 100;
  }

  ngOnInit(): void {


  }


}


