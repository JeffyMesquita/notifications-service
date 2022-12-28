import { SendNotificationUseCase } from './../../../application/useCases/sendNotificationUseCase';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/createNotificationBody';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotificationUseCase: SendNotificationUseCase) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotificationUseCase.execute({
      recipientId,
      content,
      category,
    });

    return {
      message: 'Successfully created notification',
      data: notification,
    };
  }
}
