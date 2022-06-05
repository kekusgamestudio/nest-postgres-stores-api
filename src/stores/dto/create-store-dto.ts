export class CreateStoreDto {
  readonly id: number;
  readonly terminal_id: string;
  readonly nombre: string;
  readonly razon_social: string;
  readonly cuit: string;
  readonly domicilio: string;
  readonly cp: string;
  readonly localidad: string;
  readonly provincia: string;
  readonly bank_name: string;
  readonly rubro: string;
  readonly adquirencia: string;
  readonly merchant_id: string;
}
