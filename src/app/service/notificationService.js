let NotificationService;
let Notification = window.Notification

export default NotificationService = {
    isNotificationSupported: ()=>{
        return Notification != null;
    },
    isNotificationPermissionGranted:()=>{
        return Notification && Notification.permission === "granted"
    },
    createNotification: (notificationObj)=>{
        if( NotificationService.isNotificationPermissionGranted()) {
            const notification = new Notification(notificationObj.title, {
                icon: notificationObj.icon || '/images/beer_logo.png',
                body: notificationObj.body
            });
            notification.onclick = function () {
                window.open(window.location);
            };
        }
    },
    requestPermission:()=>{
        if (Notification && Notification.permission !== "granted") {
            Notification.requestPermission();
        }
    }
};