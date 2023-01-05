import { Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { BaseService } from 'src/common/BaseService';
import { dataSource } from 'src/common/data-source';
import YearDTO from '../Year.dto';
import { Year } from '../Year';
import { classValidatorError, DuplicatedException, NotFoundException } from 'src/utils/exceptions';

type body = { year: number }

@Injectable()
export class YearService implements BaseService<Year, YearDTO> {
  repo = dataSource.getRepository(Year)

  async list() {
    const entities = await this.repo.find({ order: { year: 'DESC' }})

    return entities.map(row => Year.toDTO(row))
  }

  async get(id) {
    const entity = await this.repo.findOneBy({ id })
    if(!entity) throw NotFoundException('Nenhum ano encontrado.')

    return Year.toDTO(entity)
  }

  async post({ year }: body) {
    const repeated = await this.repo.findOneBy({ year })
    if(repeated) throw DuplicatedException('Este ano já foi cadastrado.')
    
    const entity = this.repo.create({ year })

    const errors = await validate(entity)
    if(errors.length != 0) throw classValidatorError(errors)
      
    await this.repo.save(entity)

    return Year.toDTO(entity)
  }

  async put(id, { year }: body) {
    const entity = await this.repo.findOneBy({ id })
    if(!entity) throw NotFoundException('Ano não encontrado.')

    const repeated = await this.repo.createQueryBuilder('Year')
      .where('Year.id != :id', { id })
      .andWhere('Year.year = :year', { year })
      .getOne()
    if(repeated) throw DuplicatedException('Este ano já foi cadastrado.')

    entity.year = year

    const errors = await validate(entity)
    if(errors.length != 0) throw classValidatorError(errors)

    await this.repo.save(entity)

    return Year.toDTO(entity)
  }

  async delete(id) {
    const entity = await this.repo.findOneBy({ id })
    if(!entity) throw NotFoundException('Ano não encontrado.')

    await this.repo.softRemove(entity)

    return Year.toDTO(entity)
  }
}