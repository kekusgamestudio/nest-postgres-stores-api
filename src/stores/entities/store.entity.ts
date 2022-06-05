import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  terminal_id: string;

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
