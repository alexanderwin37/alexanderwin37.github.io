---
layout: single
title: "DIY Syringe Pump"
excerpt: "Stepper Motor Powered Linear Actuator Modified to be a DIY Syringe Pump"
header:
  image: ""
  teaser: ""
---

## Project Motivation

Syringe Pumps are commonly used in a plethora of medical scenarios to dispense precise quantities of medicine over 
an extended duration and in a fully automated way. However, these devices cost thousands of dollars despite not 
being extraordinarily complicated.

This project aims to use basic CAD, programming, and electronics principles to create a functional syringe pump on a 
minimal budget.

## Design Features


## Bill Of Materials

#### Stock

| Component                                                            | Quantity | Link (may be outdated)                                                                                        | Image |
|----------------------------------------------------------------------|----------|---------------------------------------------------------------------------------------------------------------|-------|
| 250 mm lead screw; 2mm pitch; 2mm lead                               | 1        | [Amazon](https://www.amazon.com/dp/B07R1H5ZMV/ref=cm_sw_em_r_mt_dp_0YZ13D4HQBGW2Z86PBV1?_encoding=UTF8&psc=1) |       | <img src="/assets/img/SyringePumpBOM/leadScrew.png" alt="Lead Screw">
| 1/4" x 8mm Flexible Coupling                                         | 1        | [OpenBuilds Part Store](https://openbuildspartstore.com/1-4-x-8mm-flexible-coupling/)                         |       | <img src="/assets/img/SyringePumpBOM/flexibleCoupler.png" alt="Flexible Coupler">
| 200 mm linear rod; 8mm diameter                                      | 1        | [Amazon](https://www.amazon.com/dp/B07MPGWJMS/ref=cm_sw_em_r_mt_dp_X5AQS0ES7JH8JG83AAZ3)                      |       | <img src="/assets/img/SyringePumpBOM/linearRod.png" alt="Linear Rod">
| LM8UU Linear Bearing for 8 mm diameter rod                           | 2        | [Amazon](https://www.amazon.com/gp/product/B087WPGQ8T/ref=ppx_yo_dt_b_asin_image_o00_s00?ie=UTF8&psc=1)       |       | <img src="/assets/img/SyringePumpBOM/lm8uuLinearBearing.png" alt="LM8UU Linear Bearing">
| 2040 Aluminum Extrusion 1' length                                    | 1        | [OpenBuilds Part Store](https://openbuildspartstore.com/v-slot-20x40-linear-rail/)                            |       | <img src="/assets/img/SyringePumpBOM/aluminumExtrusion.png" alt="2040 Aluminum Extrusion">
| Nema 17 Stepper Motor                                                | 1        | [Amazon](https://www.amazon.com/gp/product/B07LF898KN/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1)         |       | <img src="/assets/img/SyringePumpBOM/nema17StepperMotor.png" alt="Nema 17 Stepper Motor">
| MEAN WELL RQ-65D AC-DC Power Supply Quad Output 5V 12V 24V 12V 4 Amp | 1        | [Amazon](https://www.amazon.com/dp/B005T9HGLI/ref=cm_sw_em_r_mt_dp_A8CZ056TM52EJGZTGZGR?_encoding=UTF8&psc=1) |       | <img src="/assets/img/SyringePumpBOM/powerSupply.png" alt="MEAN WELL Quad Output Power Supply">
| Arduino Uno                                                          | 1        | [Amazon](https://www.amazon.com/dp/B007R9TUJE/ref=cm_sw_em_r_mt_dp_TY8JGK0CJD1JEJM4BNNJ)                      |       | <img src="/assets/img/SyringePumpBOM/arduinoUno.png" alt="Arduino Uno Rev 3">
| A4988 Stepper Driver                                                 | 1        | [Amazon](https://www.amazon.com/dp/B01FFGAKK8/ref=cm_sw_em_r_mt_dp_V0YKTYKDWMR8WHTKA53T?_encoding=UTF8&psc=1) |       | <img src="/assets/img/SyringePumpBOM/stepperDriver.png" alt="Stepper Driver">
| Small Breadboard                                                     | 1        | [Amazon](https://www.amazon.com/dp/B082VYXDF1/ref=cm_sw_em_r_mt_dp_N6Q28CAGPAYCKCSJKDDC?_encoding=UTF8&psc=1) |       | <img src="/assets/img/SyringePumpBOM/smallBreadboard.png" alt="Small Breadboard">
| Panel Mount Latching Push Buttons                                    | 1        | [Amazon](https://amzn.to/3VxQ29h)                                                                             |       | <img src="/assets/img/SyringePumpBOM/latchingButton.png" alt="Latching Button">
| Limit Switch                                                         | 1        | [Amazon](https://www.amazon.com/gp/product/B073TYWX86/ref=ppx_yo_dt_b_asin_image_o01_s00?ie=UTF8&psc=1)       |       | <img src="/assets/img/SyringePumpBOM/limitSwitch.png" alt="Limit Switch">
| RGB Common Cathode                                                   | 1        | [Amazon](https://www.amazon.com/dp/B0194Y6MW2/ref=cm_sw_em_r_mt_dp_FW3CFQT7ZGFQ2R04N6G3?_encoding=UTF8&psc=1) |       | <img src="/assets/img/SyringePumpBOM/rgbLed.png" alt="RGB Common Cathode LED">

#### Custom 3D Printed

## Arduino Control Code

<script src="https://gist.github.com/alexanderwin37/3bb129f6786a10142793fe48e84a1a1d.js"></script>

## Syringe Pump Assembly

## Operating Instructions