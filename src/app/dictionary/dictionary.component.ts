import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  source:String='';
  target:String='';

  translate=():void=>{
    var i=0;
    var splitted=this.source.split(" ");
    this.target="";
    for (i=0; i<splitted.length; i++)
    {
      if (splitted[i].length>2)
      {
        if( splitted[i].toUpperCase()==="NOI")
          this.target+=" "    +  "noio";
        else if( splitted[i].toUpperCase()==="VOLEVAMO")
          this.target+=" "    +  "volevam";
        else if( splitted[i].toUpperCase()==="SAPERE")
          this.target+=" "    +  "savuar";
        else if( splitted[i].toUpperCase()==="L'INDIRIZZO")
          this.target+=" "    +  "l'indiriz";
        else if( splitted[i].toUpperCase()==="CON")
          this.target+=" "    +  "avec";
        else if( splitted[i].toUpperCase()==="SIGNORE")
          this.target+=" "    +  "monsieur";
        else if( splitted[i].toUpperCase()==="SIGNORA")
          this.target+=" "    +  "madame";
        else if( splitted[i].toUpperCase()==="SIGNORINA")
          this.target+=" "    +  "madamoiselle";
        else if( splitted[i].toUpperCase()==="CASA")
          this.target+=" "    +  "maison";
        
      
        else if( splitted[i].toUpperCase()==="IL" ||  
                  splitted[i].toUpperCase()==="LO" || 
                  splitted[i].toUpperCase()==="LA" ||  
                  splitted[i].toUpperCase()==="I"||  
                  splitted[i].toUpperCase()==="GLI" ||  
                  splitted[i].toUpperCase()==="LE")

        this.target+=" "    +  splitted[i];
      else  
        this.target+=" "    +splitted[i].substring(0,splitted[i].length-1);
      }
      else
        this.target+=" "    +  splitted[i];

    }

  }  

}
