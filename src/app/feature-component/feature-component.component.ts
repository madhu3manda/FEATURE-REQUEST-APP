import { Component, OnInit } from '@angular/core';
import { FeatureapiService } from '../featureapi.service';

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

  constructor(private featureService:FeatureapiService) { }

  onSubmission(data) {
    this.featureService.createNewFeature(data);
  }

}
