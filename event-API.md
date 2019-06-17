# Jepsen-Brite API

## User
  * 'id',
  * 'name',
  *  'email',
  * 'email_verified_at',
  * 'password',
  * 'avatar',
  * 'remember_token'

### Routes

#### POST `/register`

  Creates a new user. Requires a name, email, password, and password_confirmation

#### POST `/login`

  log the user in and returns a JSON Web Token (JWT)

#### POST `/logout`

  Invalidates the JWT

#### POST `/me`

  returns information about the connected user (id, name and email)

#### POST `/refresh`

  Invalidates the previous JWT and returns a new one that's valid for the next 60 minutes

## Event object

A json object containing the following keys:

  * 'id',
  * 'event_title',
  * 'event_time',
  * 'event_description',
  * 'event_city',
  * 'event_location',
  * 'event_image',
  * 'event_author',  -> id of the author
  * 'reminder'

  ### Routes

  #### GET `/events?page=:page`

  Returns the first 6 events that haven yet to take place by chronological order, as well as pagination information

#### GET `/pastevents?page=:page`

  Returns the 6 most recent past events by reverse chronological order, as well as pagination information

  #### GET `/event/:id`

  Returns the event with the id, the informations of the author and all the attendees.

  #### POST `/event`

  Creates a new event
  Returns the newly created event object, including its id

  #### PUT `/event/:id`

  *Only allowed if you are the author of the event*
  Updates one, all or several fields of a specified event

  #### DELETE `/event/:id`

  *Only possible if you are the author of the event*
  Deletes the specified event

## Attendees junction table

   * 'event_id',  -> id of the event
   * 'user_id'    -> id of the attendee


### Routes

#### POST `/attend/:event`

Creates a new entry with the connected user id and the event id

#### DELETE `/attend/:event`

Deletes the user's registration to the specified event

------------------------------------------------------------------------
