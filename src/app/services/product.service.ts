import { Injectable } from '@angular/core';
import { PRODUCTS } from './db';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProducts = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        resolve({ data: PRODUCTS });
      } catch (error) {
        reject(error);
      }
    });
  };
}
