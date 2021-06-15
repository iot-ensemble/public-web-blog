---
title: PLCnext Email and Text Alerts
author: Jeremy Tomlinson
author_title: Director of Engineering @ Fathym
author_url: https://www.iot-ensemble.com
author_image_url: https://avatars.githubusercontent.com/u/1234704?v=4
tags: [plcnext, phoenix contact, iot ensemble, fathym, devices, sensors, dashboards, email, text, alerts, notifications]
hide_table_of_contents: true
---

Once you have PLCnext device data flowing to the cloud it's time to setup alerts and notifications so that you can easily monitor your devices. I prefer to use Microsoft Logic Apps for sending email and text alerts. But first things first, let's get our PLCnext device connect to Microsoft Azure.

Phoenix Contact has a video at https://youtu.be/QST1RpTkdfA that shows how to connect your PLCnext controller to an Azure IoT Hub using a Node.js client. It's a great video and very informative. However, instead of going through all of the tedious steps of setting up an Azure resource group, the IoT Hub, storage containers, the storage endpoints, and everything else, I prefer to use Fathym's [IoT Ensemble](https://www.iot-ensemble.com/). With one click I can register my PLCnext device and immediately view the connectionstring. I take the connectionstring into PLCnext Engineer to use as my Azure Key and I'm ready to rock. Here's a screenshot of my connected PLCnext device.

![IoT Ensemble List Device](/img/screenshots/dashboard-device-list-first-device.png)

The PLCnext device data is immediately flowing to IoT Ensemble and I can view it on screen. Reminder that behind the scenes in IoT Ensemble my PLCnext data is stored up in Microsoft Azure in blog storage, as well as in CosmosDB. Fathym's IoT Ensemble is providing an easy-to-use UI for interacting with the data - and it saves us a ton of time and money.

![IoT Ensemble List Device](/img/screenshots/dashboard-devices-telemetry-table-payload.png)

Now that my PLCnext data is flowing to IoT Ensemble, it's time to setup the email alerts using Logic Apps. This [IoT Ensemble doc](https://www.iot-ensemble.com/docs/devs/alerts/logic-apps) explains how to use Logic Apps to call the IoT Ensemble warm query every 12 hours and check if the Temperature of any of the results is greater than 45. If so, it sends an email alert. Here's a screenshot.   

![Email Alert Logic Apps](/img/screenshots/logic-apps-sendemail-settings.png)

[Sign up](https://www.iot-ensemble.com/dashboard) for IoT Ensemble and save your company thousands of dollars in Azure setup and management time. Enroll your first device with IoT Ensemble for free. No credit card required.

![Fathym IoT Ensemble](/img/screenshots/iot-ensemble-connected-devices.png)
