import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilsService {
    
  constructor() {}

  pluck = (elements: any[], field: string) => {
    return elements.map((el) => el[field]);
  };
}
