import { Component } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent {

  // mylist:string[]=[];
  listchild=0;

  li=document.getElementsByClassName('singlelist');

  
   myText='';

addText(text:string){
  if(text.trim()!='')
  {
    this.listchild=this.listchild+1;
    this.myText=text;
  
    let para=document.createElement('p');
    let textnode =  document.createTextNode(text);
    // para.innerText=text;
    para.appendChild(textnode);
    document.getElementById('my-text')?.appendChild(para);

    if(this.listchild%5==0)
    {
      para.style.backgroundColor="blue";
    }

    
    
   


   

    



    
    // this.mylist.push(text);
    // if(this.listchild%5==0)
    // {
      
    // }
   
}

};

}
