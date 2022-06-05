import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { response } from 'express';
import { CreateStoreDto } from './dto/create-store-dto';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
  constructor(private storesServices: StoresService) { }

  @Post()
  create(@Body() createStoreDto: CreateStoreDto, @Res() response) {
    this.storesServices
      .createStore(createStoreDto)
      .then((mensaje) => {
        response.status(HttpStatus.CREATED).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'Error en la creación del comercio' });
      });
  }

  @Get()
  getAll(@Res() response) {
    this.storesServices
      .getAll()
      .then((mensajesList) => {
        response.status(HttpStatus.OK).json(mensajesList);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'Error en la obtención del comercio' });
      });
    //return 'Lista de mensajes';
  }

  @Put(':id')
  update(
    @Body() updateStoreDto: CreateStoreDto,
    @Res() response,
    @Param('id') idStore,
  ) {
    this.storesServices
      .updateStore(idStore, updateStoreDto)
      .then((mensaje) => {
        response.status(HttpStatus.OK).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'Error en la edición del comercio' });
      });
    //return 'Mensaje actualizado';
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') idStore) {
    this.storesServices
      .deleteStore(idStore)
      .then((res) => {
        response.status(HttpStatus.OK).json(res);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'Error en la eliminación del comercio' });
      });
    //return 'Mensaje eliminado';
  }
}
