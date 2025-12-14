# 🚗 Drive Distance Tracker

Drive Distance Tracker is a lightweight web application that automatically measures driving distance using smartphone GPS data.
It is designed to reduce manual work and mistakes when recording daily driving distance for business purposes.

---

## Background

Currently, driving distance is managed manually:

- Taking photos of the car's odometer
- Calculating the difference between start and end values
- Manually entering the result into Excel

This process is time-consuming and prone to forgotten records and calculation errors.
The goal of this project is to automate distance measurement using GPS data from a smartphone.

---

## Scope (v0.1 Prototype)

The v0.1 prototype focuses on validating the core workflow with minimal features:

- Runs as a web application in a smartphone browser
- Can be added to the home screen as a PWA
- "Start Recording" and "Stop Recording" controls
- Periodic GPS location acquisition while recording
- Distance calculation using the Haversine formula
- Displays total distance (km) when recording stops

---

## Out of Scope (v0.1)

The following features are intentionally not included in v0.1:

- Persistent storage or history
- Writing data to Excel
- Offline support or service workers
- Background GPS tracking
- Accuracy tuning and noise filtering

---

## Goal / Success Criteria

The v0.1 prototype is considered successful if:

- The app is installed on a smartphone
- The user performs "Start Recording" → "Stop Recording"
- The total driving distance for the day is displayed on screen

Theme color and icons are temporary placeholders and will be refined in future versions.