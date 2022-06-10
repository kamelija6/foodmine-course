import { FoodService } from './../services/food/food.service';
import { Tag } from './../shared/models/Tag';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?:string[];

  tags?: Tag[];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.foodService.getAllTags();

  }

}
