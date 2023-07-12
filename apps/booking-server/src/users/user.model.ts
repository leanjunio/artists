import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  modelName: 'user',
  createdAt: false,
  updatedAt: false
})
export class User extends Model {
  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  full_name: string;

  @Column
  job_title: string;

  @Column
  job_type: string;

  @Column
  phone: string;

  @Column
  email: string;

  @Column
  image: string;

  @Column
  country: string;

  @Column
  city: string;

  @Column
  onboarding_completion: number;
}
