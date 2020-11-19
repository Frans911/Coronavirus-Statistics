import { Chart } from 'chart.js';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';  

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.css']
})
export class WorkplaceComponent implements OnInit { 
  data:any = [];
  
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void { 
    const workplace = document.getElementById('workplacechart'); 
    this.firestore.collection('Workplace').snapshotChanges().subscribe(data => {
      var companies = [];
      var offices = [];
      var remotely = [];
      this.data = data.map(e => {
        return e.payload.doc.data()
      })  
      for (let i = 0; i < this.data.length; i++) {
        companies[i] = this.data[i].Company;
        offices[i] = this.data[i].Office;
        remotely[i] = this.data[i].Remotely;
      } 
        new Chart(workplace,{
        type:'bar',
        labels:companies,
        data:{
          labels:companies,
          datasets:[
            { 
              backgroundColor:'#5DADE2',
              label:"Office",
              data:offices, 
              fontSize:'100'
            },
            {
              backgroundColor:'#F4D03F',
              label:"Remotely",
              data:remotely
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
