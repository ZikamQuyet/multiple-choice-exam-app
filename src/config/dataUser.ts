import { v4 as uuid } from "uuid";

interface IDataUser {
  id: string;
  username: string;
  password: string;
  type: string;
}

export const dataUser: IDataUser[] = [
  {
    id: uuid(),
    username: "admin",
    password: "admin",
    type: "admin",
  },
  {
    id: uuid(),
    username: "user1",
    password: "user1",
    type: "user",
  },
];
