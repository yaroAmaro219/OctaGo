# OctaGo - http://octago.surge.sh/

- [Overview](#Overview)
- [Team](#Team)
- [Problem Statement](#Problem-Statement)
- [MVP](#MVP)
	- [MVP Goals](#MVP-Goals)
	- [MVP Libraries](#MVP-Libraries)
	- [MVP Client (Front End)](#MVP-Client-Front-End)
		- [Wireframes](#Wireframes)
		- [Component Hierarchy](#Component-Hierarchy)
		- [Component Breakdown](#Component-Breakdown)
	- [MVP Server (Back End)](#MVP-Server-Back-End)
		- [ERD Model](#ERD-Model)
	- [Data Flow](#Data-Flow)
- [Post-MVP](#Post-MVP)
- [Code Showcase](#Code-Showcase)

<br>

## Overview

**OctaGo** is a contacless event administrator tool that allows staff to check people into events while keeping appropriate distanve following COVID protocals. Using geolocation and bluetooth to allow members to check in at a distance and allow for confirmation from staff before entering.
<br>

## Team

- Lucas Zambelli - User Experience Designer (UX Research & Design)
- Patricia Musat - User Experience Designer (UX Research & Design)
- Artemie Amari - Software Developer (Application Logic & Documentation)
- Llukkah Rey - Software Developer (Server & Authentication)
- Zhan Yu - Data Analyst (User & Event Data)

<br>

## Problem Statement 
Users need to check into events while maintaining social distancing.

How can we help staff and attendees maintain appropriate distancing while allowing for check in at events?
<br>

## MVP

One core feature is a geolocation tracker that allows staff to see when attendees arrive so they can give them a green, yellow or red light depending on what the capacity and attendee list looks like.
 
## MVP Libraries and external APIs
| Library | Purpose |
| ------------ | ------------ |
React | Front end framework for reusable components. |
React Router | In-app routing to make single page application.|
React Slideshow | React Library to provide carousel/slideshow of images.|
CORS | Allow Cross Origin Resource Sharing in development. |
Axios | Simpler interface for getting data to/from front end. |
Ruby on Rails | Backend server with easy database and routing setup. |
<br>

### MVP Client (Front End)

#### Wireframes

![Database Design](./docs/Databasedesign.png)

#### Component Hierarchy

      src
      |__ Components/
        |__ Events.jsx
        |__ Home.jsx
        |__ Nav.jsx
        |__ Onboard.jsx
        |__ Intro.jsx
        |__ EndIntro.jsx
        |__ Profile.jsx
        |__ Register.jsx
        |__ Header.jsx
        |__ Login.jsx
#### Component Breakdown
Component | Type | State | Props | Description
------------ | ------------- | ------------ | ------------- | ------------ |
Home | Class | No | Yes | Contains all upcoming events. |
Events | Class | Yes | No | Contains rendering of all events available for check-in. |
Nav | State | Yes | Yes | Contains hamburger menu for Nav links. |
Onboard | Functional | No | No | Contains Onboard instructions. |
Intro | Functional | No | No | Contains first half of Onboarding Slideshow. |
EndIntro | Functional | No | No | End of Onboarding Slideshow. |
Profile | Class | No | Yes | Contains individual profile of specific user. |
Register | Class | No | Yes | Contains form for user to register for account. |
Header | Class | No | No | Contains main header for app. |
Login | Class | No | Yes | Contains Login form and register button.  |
<br>

### MVP Server (Back End)

#### ERD Model

#### Endpoints
  Prefix Verb   URI Pattern                                                                              Controller#Action
                              tickets GET    /tickets(.:format)                                                                       tickets#index
                                      POST   /tickets(.:format)                                                                       tickets#create
                               ticket GET    /tickets/:id(.:format)                                                                   tickets#show
                                      PATCH  /tickets/:id(.:format)                                                                   tickets#update
                                      PUT    /tickets/:id(.:format)                                                                   tickets#update
                                      DELETE /tickets/:id(.:format)                                                                   tickets#destroy
                               events GET    /events(.:format)                                                                        events#index
                                      POST   /events(.:format)                                                                        events#create
                                event GET    /events/:id(.:format)                                                                    events#show
                                      PATCH  /events/:id(.:format)                                                                    events#update
                                      PUT    /events/:id(.:format)                                                                    events#update
                                      DELETE /events/:id(.:format)                                                                    events#destroy
                                users GET    /users(.:format)                                                                         users#index
                                      POST   /users(.:format)                                                                         users#create
                                 user GET    /users/:id(.:format)                                                                     users#show
                                      PATCH  /users/:id(.:format)                                                                     users#update
                                      PUT    /users/:id(.:format)                                                                     users#update
                                      DELETE /users/:id(.:format)                                                                     users#destroy
                   event_user_tickets GET    /events/:event_id/users/:user_id/tickets(.:format)                                       tickets#index
                                      POST   /events/:event_id/users/:user_id/tickets(.:format)                                       tickets#create
                    event_user_ticket GET    /events/:event_id/users/:user_id/tickets/:id(.:format)                                   tickets#show
                                      PATCH  /events/:event_id/users/:user_id/tickets/:id(.:format)                                   tickets#update
                                      PUT    /events/:event_id/users/:user_id/tickets/:id(.:format)                                   tickets#update
                                      DELETE /events/:event_id/users/:user_id/tickets/:id(.:format)                                   tickets#destroy
                          event_users GET    /events/:event_id/users(.:format)                                                        users#index
                                      POST   /events/:event_id/users(.:format)                                                        users#create
                           event_user GET    /events/:event_id/users/:id(.:format)                                                    users#show
                                      PATCH  /events/:event_id/users/:id(.:format)                                                    users#update
                                      PUT    /events/:event_id/users/:id(.:format)                                                    users#update
                                      DELETE /events/:event_id/users/:id(.:format)                                                    users#destroy
                                      GET    /events(.:format)                                                                        events#index
                                      POST   /events(.:format)                                                                        events#create
                                      GET    /events/:id(.:format)                                                                    events#show
                                      PATCH  /events/:id(.:format)                                                                    events#update
                                      PUT    /events/:id(.:format)                                                                    events#update
                                      DELETE /events/:id(.:format)                                                                    events#destroy
                                      GET    /users(.:format)                                                                         users#index
                                      POST   /users(.:format)                                                                         users#create
                                      GET    /users/:id(.:format)                                                                     users#show
                                      PATCH  /users/:id(.:format)                                                                     users#update
                                      PUT    /users/:id(.:format)                                                                     users#update
                                      DELETE /users/:id(.:format)                                                                     users#destroy
                           auth_login POST   /auth/login(.:format)                                                                    authentication#login
                          auth_verify GET    /auth/verify(.:format)                                                                   authentication#verify


***

## Post-MVP

- Contact in App


