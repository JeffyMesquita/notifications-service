import { InMemoryNotificationsRepository } from '../../../test/repositories/inMemoryNotificationsRepository';
import { SendNotificationUseCase } from './sendNotificationUseCase';

describe('Send Notifications', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotificationUseCase = new SendNotificationUseCase(
      notificationsRepository,
    );

    const { notification } = await sendNotificationUseCase.execute({
      content: 'This is a test notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
