import { Injectable } from '@angular/core';
import { USERS } from '../database/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  getUsers = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        resolve({ data: USERS });
      } catch (error) {
        reject(error);
      }
    });
  };
}
