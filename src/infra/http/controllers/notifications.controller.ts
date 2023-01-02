import { Body, Controller, Post } from '@nestjs/common';
import { SendNotificationUseCase } from '@application/useCases/sendNotificationUseCase';
import { CreateNotificationBody } from '../dtos/createNotificationBody';
import { NotificationViewModel } from '../viewModels/notificationViewModel';

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
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
}
