import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { UtilsService } from './utils.service';

// Testing service
describe('UsersService', () => {
  let userService: UsersService;

  const utilServiceStub = {
    pluck: jest.fn()
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [{provide: UtilsService, useValue: utilServiceStub}]
    });

    userService = TestBed.inject(UsersService);
  });

  it('create service', () => {
    expect(userService).toBeTruthy();
  });

  describe('addUser', ()=> {
    it('should add a User', () => {
        userService.addUser({id: '1', name: 'Rohit'});
        expect(userService.users).toEqual([{id: '1', name: 'Rohit'}])
      })
  })

  describe('removeUser', ()=> {
    it('should remove a User', () => {
        userService.users = [{id: '1', name: 'Rohit'}];
        userService.removeUser('1');
        expect(userService.users).toEqual([])
      })
  })

  describe('getUsernames', ()=> {
    it('getUsernames', () => {
        utilServiceStub.pluck.mockReturnValue(['Rohit'])
        expect(userService.getUsernames()).toEqual(['Rohit'])
      })
  })

  describe('rxjs', ()=> {
    it('should call rxjs to add a User', () => {
        userService.rxjs({id: '1', name: 'Rohit'});
        expect(userService.users$.getValue()).toEqual([{id: '1', name: 'Rohit'}])
      })
  })
});
