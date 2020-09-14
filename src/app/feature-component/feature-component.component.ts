import { Component, OnInit } from '@angular/core';
import { FeatureapiService } from '../featureapi.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

export class Feature {
  constructor(
    public id: number,
    public priority: number,
    public title: string,
    public description: string,
    public targetDate: string,
    public productArea: string
  ) {
  }
}

@Component({
  selector: 'app-feature-component',
  templateUrl: './feature-component.component.html',
  styleUrls: ['./feature-component.component.css']
})
export class FeatureComponentComponent implements OnInit {
  

  registerForm: FormGroup;
  allrecords:any;

  constructor(private featureService:FeatureapiService, private fb:FormBuilder) { }

  ngOnInit(){
    this.registerForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      client: ['', Validators.required],
      priority: ['', Validators.required],
      targetDate: ['', Validators.required],
      parea: ['', Validators.required],
    
    })
  }
  onSubmit() {
    console.log("Testing");
    this.featureService.createNewFeature(this.registerForm.value).subscribe((result)=> {
      console.log("result",result);
      if((result as any).title==null ) {
        alert("Error Occured While Saving new Feature Request");
      } else {
        alert("New Feature Request Created Successfully");
      }
    })
  }

  getAllRecords(){
    this.featureService.getAllRequestedFeatures().subscribe((response)=>{
      console.warn("response",response);
      this.allrecords=response;

    })
  }

}
