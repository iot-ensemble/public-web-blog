---
title: A Cleaning Mania, IAQ and IoT
author: Kim Loomis
author_title: Product Owner @ Fathym
author_url: https://www.fathym.com
author_image_url:  https://avatars.githubusercontent.com/u/48728918?v=4
tags: [iaq, tvoc, iot, SparkFun, environmental sensor, Arduino, ESP32]
keywords:
    - IAQ
    - TVOC
    - IoT
    - SparkFun
    - Device
    - Sensor
    - Environmental sensor
    - Arduino
    - ESP32
    - IoT Ensemble
    - Fathym
hide_table_of_contents: true
---

> April 26, 2021 by Kim Loomis, _Product Owner @ Fathym_

_From the Mommiot files … a Mom who uses IoT to her every advantage._

As the weekend gets closer, my daughter gets depressed and surly. Her father announces on Thursdays the cleaning rituals we will embark on come Saturday morning. I am thrilled to have a husband that helps with cleaning. But Covid has turned him into a whirling dervish of bleach and anything with “disinfectant” or “antibacterial” on the label. My daughter slinks off to her room as her father kills the weekend vibe. With her disappearance, my husband’s voice gets louder and the list of chores grows longer. I also try to find someplace to hide with something of higher priority to do.

Saturday morning rolls around. We don’t get out of cleaning. My husband spots us when we try to sneak some breakfast. He’s a driven man when it comes to cleaning. He was in the military. We weren’t. He has his list. Everything must be checked off. He distributes the duties, hands out various supplies and we are off. It’s easier than arguing with him and quicker than avoiding the inevitable.

![Unhappy Mom](https://www.fathym.com/iot/img/screenshots/mom_unhappy_cleaning.jpg)

We start in the kitchen. We clean the stove, the oven, the refrigerator, the countertops, the backsplash, the microwave, the toaster and the coffee maker. We clean the sink and the dishwasher despite my questioning the logic of cleaning something whose purpose is to clean something else.

We move to the bathrooms. We attack the toilets, the drains, the sink, the shower and the mirror. We end that odyssey by spraying something just to make the bathroom “smell nice”.

We move elsewhere. We pay attention to doorknobs, light switches, windows, floors, furniture, side tables and pictures on the walls. Even the washer gets sanitized and the dryer is wiped down. Logic is again questioned regarding cleaning items that clean other items. Rationale is rebuffed and cleaning continues.

And it goes on. No surface goes unnoticed or un-cared for and each has their own special cleaning agent it seems. Covid has made all of us a bit manic about cleaning. My husband a bit more than others possibly. Hospitals may not be this clean. Clean rooms may not be this clean. I could probably eat off the bathroom floors. (Not that I will.)

And here’s what really happening. There’s a fine “smog” in our house — particulates in the air from all the sprays. The odor in the house, while each cleaner singularly might be acceptable, is wholly terrible — like your high school chemistry lab class when no one paid attention to directions.

After some time, my daughter is coughing up a storm, the skin on her arms is irritated. My eyes are watering and my nose is clogging up. My husband is sneaking puffs on his inhaler that he thinks we are not seeing. The cleaning agents that are keeping us safe are also sickening us. I bring this whole circus to a conclusion when the environmental sensor that I have set up finds that we have reached an uncomfortable level with our indoor air quality (IAQ). I send my daughter outside with the dogs. She is more than happy to oblige. My husband and I run around opening all the windows; ventilation is key. I do not mention that we have put fingerprints back on the previously spotless windows. That’s a problem for next weekend.

![Happy Mom](https://www.fathym.com/iot/img/screenshots/mom_happy_cleaning.jpg)

We repeat this cycle many weekends as we spend a lot of time inside our house. Most people spend about 90% of their time indoors, and with Covid, people have been spending even more time indoors. Monitoring your indoor air quality is important and can be super easy using a sensor like the CCS811/BME280 Environmental Sensor. Connecting this sensor to a Sparkfun ESP32 board and using a free version of **[IoT Ensemble](https://www.fathym.com/iot)** to get the data flowing, this helps me collect a bunch of environmental data, including barometric pressure, humidity, temperature, TVOCs and equivalent CO2 (or eCO2) levels around my house.

Lots of household products — aerosol sprays, bleaches, disinfectants, drain openers, glass cleaners, surface cleaners, hard water mineral removers, metal cleaners and polishes, oven cleaners, shower cleaners, toilet bowl cleaners, tub, tile and sink cleaners, carpet and rug cleaners, dusting products, floor care products, furniture cleaners and polishes, upholstery cleaners — can cause great discomfort to my family.

**Total Volatile Organic Compounds (TVOCs)** is the measurement of the combination of gases and odors emitted from many different toxins and chemicals found in everyday products. The emissions can have short-term and long-term health effects. Organic chemicals are found in the household cleaning products that we use. All of these products can release organic compounds while we are using them, and, to some degree, when they are stored. 

According to the U.S. EPA (Environmental Protection Agency), the levels of several organic compounds average 2 to 5 times higher indoors than outdoors. And the levels can get much worse during activities such as cleaning or painting, or paint stripping. Per the EPA, “no federally enforceable standards have been set for VOCs in non-industrial settings”. Here is a representative list of guidelines that are available.

![TVOC Table](https://www.fathym.com/iot/img/screenshots/mom_iaq_tvoc_chart.png)

It’s surprising how quickly and easily your environment can change for the worse. Do I use this as rationale for not wholesale cleaning the house every weekend? You betcha I do.

Does my husband forget by Thursday? You betcha he does. And I will keep tracking our air quality.

[This tutorial](https://www.fathym.com/iot/docs/tutorials/arduino-esp32-and-enviro-sensor) takes you step by step through connecting a Sparkfun ESP32 board and CCS811/BME280 Environmental Sensor with **[IoT Ensemble](https://www.fathym.com/iot)** to stream data to a dashboard.

If you have any questions along the way, contact Fathym at support@fathym.com. Sign up for **[IoT Ensemble](https://www.fathym.com/iot)** and understand the quality of the air you and your family are breathing. Enroll your first device for free. _No credit card required._