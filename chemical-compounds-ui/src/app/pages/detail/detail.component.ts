import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompoundService } from '../../services/compound.service';

@Component({
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  compound: any;

  constructor(private route: ActivatedRoute, private service: CompoundService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getCompound(id).subscribe(res => this.compound = res);
  }
}
