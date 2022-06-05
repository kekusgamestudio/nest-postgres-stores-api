import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { stringCapitalize } from 'src/common/util/string-manupilation';
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
    auxStore.terminal_id = newStore.terminal_id;
    auxStore.nombre = newStore.nombre;
    auxStore.razon_social = newStore.razon_social;
    auxStore.cuit = newStore.cuit;
    auxStore.domicilio = stringCapitalize(newStore.domicilio);
    auxStore.cp = newStore.cp;
    auxStore.localidad = stringCapitalize(newStore.localidad);
    auxStore.provincia = stringCapitalize(newStore.provincia);
    auxStore.bank_name = newStore.bank_name;
    auxStore.rubro = stringCapitalize(newStore.rubro);
    auxStore.adquirencia = newStore.adquirencia;
    auxStore.merchant_id = newStore.merchant_id;

    return await this.storeRepository.save(auxStore);
  }

  async updateStore(id: number, updatedStore: CreateStoreDto): Promise<Store> {
    const auxStore = await this.storeRepository.findOneBy({
      id: id,
    });
    auxStore.terminal_id = updatedStore.terminal_id;
    auxStore.nombre = updatedStore.nombre;
    auxStore.razon_social = updatedStore.razon_social;
    auxStore.cuit = updatedStore.cuit;
    auxStore.domicilio = stringCapitalize(updatedStore.domicilio);
    auxStore.cp = updatedStore.cp;
    auxStore.localidad = stringCapitalize(updatedStore.localidad);
    auxStore.provincia = stringCapitalize(updatedStore.provincia);
    auxStore.bank_name = updatedStore.bank_name;
    auxStore.rubro = stringCapitalize(updatedStore.rubro);
    auxStore.adquirencia = updatedStore.adquirencia;
    auxStore.merchant_id = updatedStore.merchant_id;

    return await this.storeRepository.save(auxStore);
  }

  async deleteStore(id: number): Promise<any> {
    return await this.storeRepository.delete(id);
  }
}
