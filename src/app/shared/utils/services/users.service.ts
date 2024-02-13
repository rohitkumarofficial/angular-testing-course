import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { BehaviorSubject } from 'rxjs';

interface UserInterface {
  id: string;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class UsersService {
  users: UserInterface[] = [];
  users$ = new BehaviorSubject<UserInterface[]>([]);

  constructor(
    private utilsService: UtilsService
  ) {}

  addUser(user: UserInterface): void {
    this.users = [...this.users, user];
  }

  removeUser(userId: string) {
    const updatedUsers = this.users.filter((user) => user.id !== userId);
    this.users = updatedUsers;
  }

  getUsernames(): string[] {
    return this.utilsService.pluck(this.users, 'name');
  }

  rxjs(user: UserInterface) {
    this.users$.next([...this.users$.getValue(), user]);
  }
}
