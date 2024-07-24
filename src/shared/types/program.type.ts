import { Gender } from './gender.enum';

export interface IProgram {
  age: number;
  gender: Gender;
  weight: number;
  height: number;
  activity: string;
  intensivity: string;
}
