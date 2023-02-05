import { FormControl } from "@angular/forms";

export interface UserRegistration {
  firstName: FormControl<string>;
  lastName:FormControl<string>;
  email: FormControl<string>;
  mobNum: FormControl<number>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
  gender: FormControl<string>;
  terms: FormControl<string>;
  dateOfBirth:FormControl<string>;
}

export interface UserTypes {
  firstName: string;
  lastName: string;
  email:string;
  password:string;
  gender:string;
  mobNum: number;
  dateofbirth:string;

}
