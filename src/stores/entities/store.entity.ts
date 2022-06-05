import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  terminal_id: number;

  @Column()
  nombre: string;

  @Column()
  razon_social: string;

  @Column()
  cuit: string;

  @Column()
  domicilio: string;

  @Column()
  cp: string;

  @Column()
  localidad: string;

  @Column()
  provincia: string;

  @Column()
  bank_name: string;

  @Column()
  rubro: string;

  @Column()
  adquirencia: string;

  @Column()
  merchant_id: string;
}
