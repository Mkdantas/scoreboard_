import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  
  

   
}

var validador = 0;

window.addEventListener('ionDidClose', e =>{
if(localStorage && validador === 0){
  document.querySelectorAll('div p').forEach(el =>{ 
   el.textContent = localStorage.getItem(el.className);

    })
    validador++
  }
  });

  

  //Periodo//
 ( function teste () {
  
  var x = document.querySelector('.period').textContent;
  var y = Number(x);
    if (y <= 4){
      y ++;
    }
      else {
        y = 0;
      }

      document.querySelector('.period').textContent = String(y);
  
} )
  
  
   