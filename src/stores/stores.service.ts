import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDto } from './dto/create-store-dto';
import { Store } from './entities/store.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ) { }

  async getAll(): Promise<Store[]> {
    return await this.storeRepository.find();
  }

  async createStore(newStore: CreateStoreDto): Promise<Store> {
    const auxStore = new Store();
    auxStore.nombre = newStore.nombre;
    auxStore.razon_social = newStore.razon_social;
    auxStore.cuit = newStore.cuit;
    auxStore.domicilio = newStore.domicilio;
    auxStore.cp = newStore.cp;
    auxStore.localidad = newStore.localidad;
    auxStore.provincia = newStore.provincia;
    auxStore.bank_name = newStore.bank_name;
    auxStore.rubro = newStore.rubro;
    auxStore.adquirencia = newStore.adquirencia;
    auxStore.merchant_id = newStore.merchant_id;

    return await this.storeRepository.save(auxStore);
  }

  async updateStore(
    terminalId: number,
    updatedStore: CreateStoreDto,
  ): Promise<Store> {
    const auxStore = await this.storeRepository.findOneBy({
      terminal_id: terminalId,
    });
    auxStore.nombre = updatedStore.nombre;
    auxStore.razon_social = updatedStore.razon_social;
    auxStore.cuit = updatedStore.cuit;
    auxStore.domicilio = updatedStore.domicilio;
    auxStore.cp = updatedStore.cp;
    auxStore.localidad = updatedStore.localidad;
    auxStore.provincia = updatedStore.provincia;
    auxStore.bank_name = updatedStore.bank_name;
    auxStore.rubro = updatedStore.rubro;
    auxStore.adquirencia = updatedStore.adquirencia;
    auxStore.merchant_id = updatedStore.merchant_id;

    return await this.storeRepository.save(auxStore);
  }

  async deleteStore(terminalId: number): Promise<any> {
    return await this.storeRepository.delete(terminalId);
  }
}
