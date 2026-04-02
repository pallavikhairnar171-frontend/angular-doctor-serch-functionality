import { Doctor } from "./doctor.model";

export interface Department {
  name: string;
  doctors: Doctor[];
}