export class User {
  public ID: number;
  public Name: string;
  public TeamID: number;
}

export class Team {
  public ID: number;
  public Name: string;
  public CompanyID: number;
}

export class Company {
  public ID: number;
  public Name: string;
}

export class Comment {
  public ID: number;
  public SenderID: number;
  public Message: string;
  public DateTime?: Date;
}

export class Message {
  public ID: number;
  public SenderID: number;
  public UserReceiverID?: number;
  public TeamReceiverID?: number;
  public CompanyReceiverID?: number;
  public Message: string;
  public Comments: Comment[];
  public DateTime?: Date;
}
