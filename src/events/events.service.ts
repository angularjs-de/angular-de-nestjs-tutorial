import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './event.entity';
import { Repository } from 'typeorm';


@Injectable()
export class EventsService {

    constructor(
        @InjectRepository(Event)
        private readonly eventRepository: Repository<Event>,
      ) {}

    findAll(): Promise<Event[]> {
        return this.eventRepository.find();
    }

    findOne(id: string): Promise<Event> {
        return this.eventRepository.findOne(id);
    }
}
