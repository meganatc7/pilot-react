class User {
  constructor({
    id,
    account,
    name,
    level,
  }: {
    id: number;
    account: string;
    name: string;
    level: number;
  }) {
    this._id = id;
    this._account = account;
    this._name = name;
    this._level = level;
  }

  private _id: number;
  private _account: string;
  private _name: string;
  private _level: number;
}

export default User;
