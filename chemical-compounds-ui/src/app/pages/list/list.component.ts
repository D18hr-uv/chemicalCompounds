import { Component, OnInit } from '@angular/core';
import { CompoundService } from '../../services/compound.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  compounds: any[] = [];
  page = 1;
  totalPages = 1;
  loading: boolean = false;

  selectedCompound: any = null;

  constructor(private service: CompoundService) {}

  ngOnInit(): void {
    this.loadCompounds();
  }

  loadCompounds(): void {
    this.loading = true;

    this.service.getCompounds(this.page).subscribe({
      next: (res) => {
        this.compounds = res.data || [];
        this.totalPages = res.totalPages || 1;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load compounds', err);
        this.loading = false;
      }
    });
  }

  // Pagination
  nextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadCompounds();
    }
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadCompounds();
    }
  }

  // Open delete confirmation modal
  openDelete(compound: any): void {
    this.selectedCompound = compound;
  }

  // Close delete
  closeDelete(): void {
    this.selectedCompound = null;
  }

  // Confirm delete
  confirmDelete(): void {
    if (!this.selectedCompound) return;

    this.service.deleteCompound(this.selectedCompound.id).subscribe({
      next: () => {
        this.selectedCompound = null;

        // if last item on page deleted, go back a page
        if (this.compounds.length === 1 && this.page > 1) {
          this.page--;
        }

        this.loadCompounds();
      },
      error: (err) => {
        console.error('Delete failed', err);
        alert('Failed to delete compound');
      }
    });
  }
}
