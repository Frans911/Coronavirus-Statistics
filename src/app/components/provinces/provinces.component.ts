import { Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.css']
})
export class ProvincesComponent implements OnInit {
  data:any = [];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    const provinces = document.getElementById('provinceschart'); 
    this.firestore.collection('Provinces').snapshotChanges().subscribe(data => {
      var province = [];
      var infections = [];
      this.data = data.map(e => {
        return e.payload.doc.data()
      })  
      for (let i = 0; i < this.data.length; i++) {
        province[i] = this.data[i].Province;
        infections[i] = this.data[i].Infections; 
      } 
      console.log();
      new Chart(provinces,{
        type:'doughnut',
        labels:province,
        data:{ 
          labels:province,
          datasets:[
            {
              backgroundColor:['#48C9B0','#F7DC6F','#EB984E','#A569BD','#EC7063','#85C1E9','#AF7AC5','#A9CCE3','#85929E','#D0D3D4'],
              label:"Office",
              data:infections
            }, 
          ]
        },
        options:{
          responsive: true,
					legend: {
            position: 'right', 
            labels:{ 
              fontStyle:'bold'
            }
          }, 
        }
      })
    });

  }

}
