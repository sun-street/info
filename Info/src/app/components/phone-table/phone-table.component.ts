import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
     
@Component
({
    selector: 'phone-table',
    templateUrl: 'phone-table.component.html',
})

export class PhoneTableComponent implements OnInit
{   
    selectedNumberOfGround: string;  
    numbersOfGrounds: string[];
    grounds: Ground[];
    selectedGrounds: Ground[];

    constructor(private http: HttpClient)
    {
        
    }
    
    ngOnInit()
    {
        this.numbersOfGrounds = ["Все номера участков"];       
        
        this.http.get('assets/grounds.json').subscribe
        (
            (data) => 
            {
                this.grounds = data["groundsList"]
                
                this.selectedGrounds = this.grounds;
                
                this.grounds.forEach(ground =>
                {
                    this.numbersOfGrounds.push(ground.number);
                })
                    
                this.selectedNumberOfGround = this.numbersOfGrounds[0];
            }
        );
    }

    onChange(newValue) 
    {
        if(newValue != this.numbersOfGrounds[0])
        {
            this.selectedGrounds = this.grounds.filter(ground => ground.number == newValue);
        }
        else
        {
            this.selectedGrounds = this.grounds;
        }
    }
}

class Ground
{
    number: string;
    phoneNumbers: string[];
}