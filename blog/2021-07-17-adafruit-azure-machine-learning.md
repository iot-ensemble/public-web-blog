---
title: Adafruit Device Machine Learning
author: Matt Jackson
author_title: Product Support Specialist @ Fathym
author_url: https://www.iot-ensemble.com
author_image_url: https://avatars.githubusercontent.com/u/55766355?v=4
tags: [Adafruit, fathym, iot ensemble, microsoft azure, machine learning, devices, sensors, models, machine learning]
hide_table_of_contents: true
---

Once you have your Adafruit Device data flowing to the cloud, it's time to develop some fast and efficient algorithms and Machine Learning models for real-time processing of the data. Azure Machine Learning empowers us with a wide range of productive experiences for building, training, and deploying machine learning models faster. IoT Ensemble provides out of the box APIs that allow you to easily load your Adafruit data into Azure Machine Learning. But first things first, let's get our Adafruit Board/Device connected to Microsoft Azure.

![Adafruit Logo](/img/screenshots/adafruit-hero.jpg)

Adafruit has a great guide located **[here](https://github.com/Azure/azure-iot-device-ecosystem/blob/master/get_started/iot-hub-adafruit-feather-m0-wifi-kit-arduino-get-started.md)** that shows how to connect your Adafruit device to an Azure IoT Hub.  It's a great source and very informative. However, instead of going through all of the tedious steps outlined in the tutorial of setting up an Azure resource group, the IoT Hub, storage containers, the storage endpoints, and everything else, I prefer to use Fathym's **[IoT Ensemble](https://www.iot-ensemble.com)**. With one click I can register my Adafruit device and immediately get access to the data for downstream use in alerts, dashBoards, visualizations, and machine learning. After I enroll my device in IoT Ensemble, it displays the IoT Hub connectionstring. I take the connectionstring into the config to use as my Azure Key and I'm ready to rock. Here's a screenshot of my connected Adafruit Device.

![IoT Ensemble List Device](/img/screenshots/Adafruit-ConnectedDevice.png)

The Adafruit data is immediately flowing to IoT Ensemble and I can view the data on screen. Reminder that behind the scenes in IoT Ensemble the Adafruit data is stored in Microsoft Azure in blob storage, as well as in CosmosDB. 

:::tip How to access data in Microsoft Azure
Behind the scenes in IoT Ensemble the Adafruit data is stored in Microsoft Azure in blob storage, as well as in CosmosDB. [Read this](https://www.iot-ensemble.com/docs/getting-started/connecting-downstream) to learn more about accessing your data
:::

Fathym's IoT Ensemble is providing an easy-to-use UI for interacting with the data instead of using the Azure portal - and it saves me a ton of time and money.

![Fathym IoT Ensemble](/img/screenshots/Adafruit-DashBoard.png)

## Adafruit Board/Device Azure Machine Learning

IoT Ensemble provides out of the box APIs that allow you to easily load your Adafruit data into Azure Machine Learning. This [IoT Ensemble doc](https://www.iot-ensemble.com/docs/devs/storage/azure-ml) explains how to use IoT Ensemble's cold query to configure an Azure ML Dataset and an associated Automated ML Task to run your model. Here's a couple of screenshots.

![Azure Machine Learning Dataset](/img/screenshots/azure-ml-automated-ml-run-dataset-wizard-skip.png)

![Azure Automated ML](/img/screenshots/azure-ml-automated-ml-running.png)

[Sign up](https://www.iot-ensemble.com/dashBoard) for IoT Ensemble and save your company thousands of dollars in Azure setup and management costs. Enroll your first Adafruit Device with IoT Ensemble for free. No credit card required. No Azure account required. It really is that simple.

:::info
[Enroll your first Adafruit Device](https://www.iot-ensemble.com/dashBoard) with IoT Ensemble for free.  
No credit card required.  
No Azure account required.
:::