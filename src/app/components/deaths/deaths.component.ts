import { Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.component.html',
  styleUrls: ['./deaths.component.css']
})
export class DeathsComponent implements OnInit {
  data:any = [];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    const cases = document.getElementById('deathschart'); 
    this.firestore.collection('Deaths').snapshotChanges().subscribe(data => {
      var gender = [];
      var deaths = [];
      this.data = data.map(e => {
        return e.payload.doc.data()
      })  
      for (let i = 0; i < this.data.length; i++) {
        gender[i] = this.data[i].Gender;
        deaths[i] = this.data[i].Deaths; 
      } 
      new Chart(cases,{
        type:'polarArea', 
        data:{
          labels:gender,
          datasets:[
            {
              backgroundColor:['rgba(236, 112, 99, 0.7)','rgba(244, 208, 63,0.7)'],
              label:"Confirmed cases",
              data:deaths
            }
          ]
        },
        options:{
          responsive: true,
					legend: {
            position: 'right', 
            labels:{
              fontSize:13,
              fontStyle:'bold'
            }
          },  
          scale: {
            ticks: {
                min: 0,
                max: 100,
                fontStyle:'bold'
            }
          }
        }
      })
    });

  }

}
