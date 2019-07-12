import { Controller, Get, Param } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './event.entity';

@Controller('events')
export class EventsController {

    constructor(private eventService: EventsService) {}

    @Get()
    findAll(): Promise<Event[]> {
        return this.eventService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): any {
      return this.eventService.findOne(id);
    }
}
