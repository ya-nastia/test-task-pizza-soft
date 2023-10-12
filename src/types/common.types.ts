export interface INewEmployee {
  name: string;
  isArchive: boolean;
  role: string;
  phone: string;
  birthday: string;
}

export interface IEmployee extends INewEmployee {
  id: number;
}