import { Injectable } from '@angular/core';
import { PRODUCTS } from './db';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProducts = (params?: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        resolve({ data: PRODUCTS });
      } catch (error) {
        reject(error);
      }
    });
  };
}
