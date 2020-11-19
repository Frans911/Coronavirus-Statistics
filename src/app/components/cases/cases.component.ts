import { Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  data:any = [];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {

    const cases = document.getElementById('caseschart'); 
    this.firestore.collection('Cases').snapshotChanges().subscribe(data => {
      var month = [];
      var confirmed = [];
      this.data = data.map(e => {
        return e.payload.doc.data()
      })  
      for (let i = 0; i < this.data.length; i++) {
        month[i] = this.data[i].Month;
        confirmed[i] = this.data[i].Confirmed; 
      } 
      month.pop();
      confirmed.pop();
      new Chart(cases,{
        type:'line', 
        data:{
          labels:month,
          datasets:[
            {
              borderColor:'#48C9B0',
              label:"Confirmed cases",
              data:confirmed
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
          scales: {
            xAxes: [{
                ticks: {
                  fontStyle:'bold',
                  fontSize:13,
                }
            }],
            yAxes: [{
              ticks: {
                fontStyle:'bold',
                fontSize:13,
              }
          }]
        }
        }
      })
    });

  }

}
