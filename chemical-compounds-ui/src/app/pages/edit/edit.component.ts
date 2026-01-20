import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompoundService } from '../../services/compound.service';

@Component({
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  id!: number;
  form: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: CompoundService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getCompound(this.id).subscribe(res => this.form = res);
  }

  submit() {
    this.service.updateCompound(this.id, this.form).subscribe(() => {
      alert('Updated successfully');
      this.router.navigate(['/']);
    });
  }
}
