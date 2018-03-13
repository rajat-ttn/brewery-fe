/*
This notification service encapsulates browser's Notification API for ease of use.
*/

let NotificationService;
let Notification = window.Notification

export default NotificationService = {
    //This function tells whether Notifications are supported on browser or not.
    isNotificationSupported: ()=>{
        return Notification != null;
    },

    //This function tells whether user has granted permission to show notifications.
    isNotificationPermissionGranted:()=>{
        return Notification && Notification.permission === "granted"
    },
    //This function shows the browser notification.
    createNotification: (notificationObj)=>{
        if( NotificationService.isNotificationPermissionGranted()) {
            const notification = new Notification(notificationObj.title, {
                icon: notificationObj.icon || '/images/beer_logo.png',
                body: notificationObj.body
            });
            setTimeout(notification.close.bind(notification), 5000);
            notification.onclick = function () {
                window.open(window.location);
            };
        }
    },
    //This function requests user to grant permissions to display notifications.
    requestPermission:()=>{
        if (Notification && Notification.permission !== "granted") {
            Notification.requestPermission();
        }
    }
};