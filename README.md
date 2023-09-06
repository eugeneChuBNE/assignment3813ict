# CHAT SYSTEM USING MEAN STACK

## Table of contents

1. [Overview](#overview)
2. [What will be implemented](#what-will-be-implemented)
3. [Users roles](#users-roles)
4. [Work Breakdown Structure](#work-breakdown-structure)
5. [Phase 1 details](#phase-1-details)
6. [Phase 2 details](#phase-2-details)
6. [Database Schema](#database-schema)

---

## Overview

This project is a part of 3813ICT Software Frameworks - held by Griffith University, aiming to make a real-time communication platform using MEAN stack (MongoDB, Express, Angular and Node) along with sockets.io and Peer.js.

---

## What will be implemented?

At the finalisation, some expected functions include real-time text messaging, group chatting, and making video calls.

Also, the application is expected to have vary roles and permissions in operating, includes:
- Super Admin
- Group Admin 
- User

Furthermore, some technologies are expected to be used: MongoDB (data), Express.js and Node.js (server-side), Angular (front-end), Socket.io (bi-directional communication between client and server) and Peer.js (for video chat).

---

## Users' roles

| Feature                               | Super Admin  | Group Admin | User     |
| ------------------------------------- | ------------ | ----------- | -------- |
| Create new user                       | yes          | no          | yes      |
| Delete any user                       | yes          | no          | no       |
| Promote user to Group Admin           | yes          | no          | no       |
| Create Groups                         | yes          | yes         | no       |
| Delete Groups                         | yes          | yes         | no       |
| Create Channels within Groups         | yes          | yes         | no       |
| Delete Channels within Groups         | yes          | yes         | no       |
| Add Users to Groups                   | yes          | yes         | no       |
| Remove Users from Groups              | yes          | yes         | no       |
| Join any Channel in a Group           | yes          | yes         | yes      |
| Register interest in a Group          | yes          | yes         | yes      |
| Leave a Group or Channels             | yes          | yes         | yes      |
| Delete a User from a Channel          | yes          | yes         | no       |
| View all Groups and Channels          | yes          | yes         | no       |

---

## Work Breakdown Structure

### Phase 1

| Task                                  | Estimated time |  Actual |
| ------------------------------------- | -------------- | --------|
| **Documentation & Planning**                                     |
| Drafting documents                    | 2 hours        | 1 hour  |
| Implementing user interface/views     | 1 hour         |         |
| Implementing authentication           | 2 hours        |         |
| Implementing scaffolding              | 2.5 hours      |         |
| Implementing some related functions   | 2.5 hours      |         |
| Testing, finalising phase 1           | 2 hours        |         |

### Phase 2

| Task                                  | Estimated time |  Actual |
| ------------------------------------- | -------------- | --------|
| **Details are about to come**                                    |

---

## Phase 1 details

### Target

The primary purpose of Phase 1 is to plan and document design decisions. Plus, the implementation of user creation, login, and assignment to groups/channels will also be implemented on this phase. However, at this phase, some functions may not work as expected since they are not implemented yet, including upload images, make video calls, and data will be stored in browser's local storage (DB will be implemented in the next phase)

### Additional requirements

- All of the “Pages” for the app should exist and be navigable,

---

## Phase 2 details

### Target

Implementing all of required functions and finalising the whole project.

### Requirements

- mongoDB as the datastore
- Sockets for real time communication (chat functionality)
- PeerJS for Video Chat

** This document will be updated along with the development of the project **