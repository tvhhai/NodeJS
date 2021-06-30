import { Observable } from 'rxjs';
import { Component, SimpleChanges } from '@angular/core';
import { DataService } from './services/data.service';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
} from 'primeng/api';

import { Message } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConfirmationService],
})
export class AppComponent {
  title = 'Crud basic';
  isUpdate = false;
  id = null;
  products: any;
  valBtn = 'Add';
  product = {
    name: '',
    price: '',
    image: '',
  };

  position!: string;

  constructor(
    private _dataService: DataService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  clickFromHello(event: any) {
    this.title = event;
  }

  ngOnInit(): void {
    this.getProduct();
    this.primengConfig.ripple = true;
  }

  getProduct() {
    this._dataService.getAll().subscribe((res) => (this.products = res));
  }

  addProduct() {
    if (!this.isUpdate) {
      if (this.product.name && this.product.price && this.product.image) {
        this._dataService.add(this.product).subscribe(
          (res) => {
            this.getProduct();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Add product success',
            });
          },
          (err) => {
            console.log('Something went wrong!', err);
          }
        );
        this.product = {
          name: '',
          price: '',
          image: '',
        };
      }
    } else {
      if (this.product.name && this.product.price && this.product.image) {
        this.confirmationService.confirm({
          message: 'Are you sure that you want to proceed?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this._dataService.update(this.id, this.product).subscribe(
              (res) => {
                this.getProduct();
                this.messageService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: 'Update success',
                });
                this.id = null;
                this.isUpdate = false;
                this.valBtn = 'Add';
                this.product = {
                  name: '',
                  price: '',
                  image: '',
                };
              },
              (err) => {
                console.log('Something went wrong!', err);
                this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: "Can't update",
                });
              }
            );
          },
        });
      }
    }
  }

  edit(id: any) {
    this.isUpdate = true;
    this.id = id;
    this.valBtn = 'Update';

    this._dataService.getById(id).subscribe((response) => {
      this.product.name = response.name;
      this.product.image = response.image;
      this.product.price = response.price;
    });
  }

  deleteProduct(id: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._dataService.delete(id).subscribe(
          (res) => {
            this.getProduct();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Delete success',
            });
          },
          (err) => {
            console.log('Something went wrong!', err);
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'You have rejected',
            });
          }
        );
      },
    });
  }
}

// DataBinding
// 1. PropertyBinding
// 2. EvenBinding
// {{}} : String Interpolation (curly bracket)
