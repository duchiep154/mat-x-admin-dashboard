import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  displayedColumns: string[] = ['#', 'itemImage', 'name', 'categoryName', 'price', 'active', 'status', 'action'];


  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource2 = new MatTableDataSource(ELEMENT_DATA);

  constructor() {
    this.dataSource.data = [
      {
        itemImage: 'https://tastio-images.nyc3.digitaloceanspaces.com/kbowl/PRODUCT_118.jpg',
        name: 'Chicken Burger',
        categoryName: 'Burgers',
        price: '₹11.55',

        active: true,
        action: '0'
      },
      {
        itemImage: 'https://tastio-images.nyc3.digitaloceanspaces.com/kbowl/PRODUCT_119.jpg',
        name: 'Chicken Burger',
        categoryName: 'Burgers',
        price: '₹11.55',

        active: false,
        action: '0'
      },
      {
        itemImage: 'https://tastio-images.nyc3.digitaloceanspaces.com/kbowl/PRODUCT_120.jpg',
        name: 'Chicken Burger',
        categoryName: 'Burgers',
        price: '₹11.55',

        active: true,
        action: '0'
      },
      {
        itemImage: 'https://tastio-images.nyc3.digitaloceanspaces.com/kbowl/PRODUCT_118.jpg',
        name: 'Chicken Burger',
        categoryName: 'Burgers',
        price: '₹11.55',
        active: true,
        action: '0'
      },
      {
        itemImage: 'https://tastio-images.nyc3.digitaloceanspaces.com/kbowl/PRODUCT_118.jpg',
        name: 'Chicken Burger',
        categoryName: 'Burgers',
        price: '₹11.55',

        active: false,
        action: '0'
      },
      {
        itemImage: 'https://tastio-images.nyc3.digitaloceanspaces.com/kbowl/PRODUCT_118.jpg',
        name: 'Chicken Burger',
        categoryName: 'Burgers',
        price: '₹11.55',

        active: true,
        action: '0'
      },
      {
        itemImage: 'https://tastio-images.nyc3.digitaloceanspaces.com/kbowl/PRODUCT_118.jpg',
        name: 'Chicken Burger',
        categoryName: 'Burgers',
        price: '₹11.55',

        active: true,
        action: '0'
      },
    ];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }
}



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];