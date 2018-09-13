import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const subscribeToTopic = functions.https.onCall(
  async (data, context) => {
    await admin.messaging().subscribeToTopic(data.token, data.topic);

    return `subscribed to ${data.topic}`;
  }
);

export const unsubscribeFromTopic = functions.https.onCall(
  async (data, context) => {
    await admin.messaging().unsubscribeFromTopic(data.token, data.topic);

    return `unsubscribed from ${data.topic}`;
  }
);

export const sendOnFirestoreCreate = functions.firestore
  .document('discounts/{discountId}')
  .onCreate(async snapshot => {
    const discount = snapshot.data();

    const notification: admin.messaging.Notification = {
      title: 'Hello from Ionic4 + Firebase',
      body: discount.headline
    };

    const payload: admin.messaging.Message = {
      notification,
      webpush: {
        notification: {
          vibrate: [200, 100, 200],
          icon: 'https://angularfirebase.com/images/logo.png',
          actions: [
            {
              action: 'like',
              title: '👍 Yaaay!'
            },
            {
              action: 'dislike',
              title: '☹ Boooo!'
            }
          ]
        }
      },
      topic: 'discounts'
    };

    return admin.messaging().send(payload);
  });
