# 🚗 Drive Distance Tracker

Drive Distance Tracker is a project designed to automatically measure and record driving distance during work-related car usage by utilizing GPS data from a smartphone.

---

## Background

Currently, driving distance is managed manually using the following workflow:

- Taking photos of the car’s odometer
- Manually calculating the difference between morning and evening readings
- Entering the results into an Excel sheet

This process is time-consuming and prone to missed records and calculation errors.  
The goal of this project is to build a system that automatically measures driving distance using GPS data, reducing manual work and human error.

---

## Scope (v0.1 Prototype)

Version v0.1 focuses on minimal functionality to validate the core concept.

The following features are included:

- A web application that runs in a smartphone browser
- “Start Recording” and “Stop Recording” buttons
- Periodic acquisition of GPS location data while recording
- Distance calculation based on recorded GPS coordinates
- Display of the total driving distance (in kilometers) on the screen when recording ends

---

## Out of Scope (v0.1)

The following features are intentionally excluded from v0.1:

- Writing data to Excel files
- Support for left/right 15-day monthly layouts
- Automatic start / stop of recording
- Advanced distance accuracy correction

---

## Goal

The success criteria for v0.1 are defined as follows:

- Drive an actual vehicle while recording is active
- Execute the workflow: “Start Recording” → “Stop Recording”
- Confirm that the total driving distance for the day is displayed on the screen

If this workflow operates as expected, v0.1 is considered successful.

> Note: At the current stage, full validation using a real vehicle on a smartphone device has not yet been completed.  
> The core logic and UI flow have been verified in a PC browser environment.

---

## Status

This project is currently in **v0.1 (prototype stage)** and focuses on validating core GPS-based distance tracking logic.