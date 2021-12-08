import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';

import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';

export interface PeriodicElement {
  name: string;
  id: number;
  quantity: number;
  price: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', quantity: 1.0079, price: 'H' },
  { id: 2, name: 'Helium', quantity: 4.0026, price: 'He' },
  { id: 3, name: 'Lithium', quantity: 6.941, price: 'Li' },
  { id: 4, name: 'Beryllium', quantity: 9.0122, price: 'Be' },
  { id: 5, name: 'Boron', quantity: 10.811, price: 'B' },
  { id: 6, name: 'Carbon', quantity: 12.0107, price: 'C' },
  { id: 7, name: 'Nitrogen', quantity: 14.0067, price: 'N' },
  { id: 8, name: 'Oxygen', quantity: 15.9994, price: 'O' },
  { id: 9, name: 'Fluorine', quantity: 18.9984, price: 'F' },
  { id: 10, name: 'Neon', quantity: 20.1797, price: 'Ne' },
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'quantity', 'price', 'actions'];
  dataSource = ELEMENT_DATA;

  productForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    quantity: [0, [Validators.required, Validators.min(0)]],
    price: ['', [Validators.required, Validators.min(0)]],
  });

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  constructor(public dialog: MatDialog, private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit = (id?: number) => {
    if (id) {
      this.dataSource = this.dataSource.map((row) => {
        if (row.id === id) {
          row = { ...row, ...this.productForm.value };
        }
        return row;
      });
    } else {
      this.dataSource.push({
        id: this.dataSource.length + 1,
        ...this.productForm.value,
      });
    }

    this.table.renderRows();
    this.productForm.reset();
  };

  openDialog(id?: number): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: {
        productForm: id ? this.rebuildForm(id) : this.productForm,
        onSubmit: this.onSubmit,
        id,
      },
    });

    // dialogRef.afterClosed().subscribe(() => {
    //   console.log(this.productForm.value);
    // });
    // console.log(dialogRef, 'dialogref')
  }

  rebuildForm(id: number) {
    const row = this.dataSource.find((row) => row.id === id);
    this.productForm.setValue({
      name: row?.name,
      quantity: row?.quantity,
      price: row?.price,
    });
    return this.productForm;
  }

  deleteProduct(id: number) {
    this.dataSource = this.dataSource.filter((row) => row.id !== id);
    this.table.renderRows();
  }
}
