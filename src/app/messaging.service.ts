import { Injectable } from '@angular/core';
import { User, Company, Team, Message, Comment } from './models'
import { fakeDB } from './fake-db';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(private DB: fakeDB) { }

  //As a user, I should be able to send a message to my own team.
  public message_own_team(user_id: number, message: string) {
    // Form Record - Usally done on backend
    // Get my teams ID
    let team_id = this.DB.UserTable.find((user) => {
     return user.ID == user_id;
   }).TeamID;

   // Form the message
    let new_message: Message = {
      ID: this.DB.nextID(),
      SenderID: user_id,
      TeamReceiverID: team_id,
      Message: message,
      Comments: []
    }

    // Push the message into MessageTable on the DB
    this.DB.MessageTable.push(new_message);
  }

  // As a user, I should be able to send a message to my own company.
  public message_own_company(user_id, message) {
    // Get Team then get Company ID from that
    let team_id = this.DB.UserTable.find((user) => {
      return user.ID == user_id;
    }).TeamID;
    let company_id = this.DB.TeamTable.find((user) => {
     return user.ID == user_id;
    }).CompanyID;

    // Form Message
    let new_message: Message = {
      ID: this.DB.nextID(),
      SenderID: user_id,
      Message: message,
      Comments: []
    };
    // Push the message into MessageTable on the DB
    this.DB.MessageTable.push(new_message);
  }

  // As a user, I should be able to send a message to another company.
  public message_other_user(from_user_id: number, to_user_id: number, message: string) {
    // Form the Massage
    let new_message: Message = {
      ID: this.DB.nextID(),
      SenderID: from_user_id,
      UserReceiverID: to_user_id,
      Message: message,
      Comments: []
    };

    // Push the message into MessageTable on the DB
    this.DB.MessageTable.push(new_message);
  }

  // As a user, I should be able to send a message to another company.
  public message_other_company(from_user_id: number, to_company_id: number, message: string) {
    // Form the messages

    // Push the message into MessageTable on the DB

  }

  // As a user, I should be able to view ALL messages which I can see.
  // This may include messages sent directly to me, my team or my company.
  public output_all_messages_for_user(user_id: number) {
    // Get TeamID and CompanyID

    // Retreve all messages with my user_id, team_id, or company_id
    // Other companies messages? - Hmmm

  }

  // As a user, I should be able to view all messages which have been sent to
  // my team.
  public output_all_messages_for_team(team_id: number) {
    // Get my team_id

    // Retrieve all messages with TeamReceiverID as team_id

  }

  // As a user, I should be able to comment on a message which has been sent to me.
  // This comment will be attached to the message and will be viewable by
  // other people who can see the message.
  public comment_on_message(user_id: number, message_id: number, comment: string) {
    // Push a comment into the comments array in the message


  }

}
