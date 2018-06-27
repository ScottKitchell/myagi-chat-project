import { Injectable } from '@angular/core';
import { User, Company, Team, Message, Comment } from './models'

@Injectable()
export class fakeDB {

  public UserTable: User[] = [
    {
      ID: 1,
      Name: 'Scott',
      TeamID: 1
    },
    {
      ID: 2,
      Name: 'Tom',
      TeamID: 1
    },{
      ID: 3,
      Name: 'Dean',
      TeamID: 1
    },
    {
      ID: 4,
      Name: 'Vanessa',
      TeamID: 2
    },
  ];

  public TeamTable: Team[] = [
    {
      ID: 1,
      Name: 'Dev',
      CompanyID: 1
    },
    {
      ID: 2,
      Name: 'HR',
      CompanyID: 1
    }
  ];

  public CompanyTable: Company[] = [
    {
      ID: 1,
      Name: 'Myagi'
    },
    {
      ID: 2,
      Name: 'Rulo'
    }
  ];

  public MessageTable: Message[] = [
    {
      ID: 1,
      SenderID: 1,
      UserReceiverID: 2,
      TeamReceiverID: null,
      CompanyReceiverID: null,
      Message: "Hi there Karate Kid!",
      Comments: [
        {
          ID: 1,
          SenderID: 2,
          Message: "Hi!"
        }
      ]
    }
  ];

  private _nextID: number = 10;
  public nextID(): number {
    return this._nextID++;
  }

}
