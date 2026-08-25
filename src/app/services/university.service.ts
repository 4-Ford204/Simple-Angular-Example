import { Injectable } from '@angular/core';
import { UNIVERSITIES } from '../database/university';

@Injectable({ providedIn: 'root' })
export class UniversityService {
  getUniversities = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        resolve({ data: UNIVERSITIES });
      } catch (error) {
        reject(error);
      }
    });
  };
}
