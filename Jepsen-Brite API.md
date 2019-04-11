#Jepsen-Brite API

## User
  * 'id',
  * 'name',
  *  'email',
  * 'email_verified_at',
  * 'password',
  * 'avatar',
  * 'remember_token'

### Router

#### POST `/register`

  *Only takes JSON as input.*
    Creates a new user.

#### POST `/login`

  *Only takes JSON as input.*
  log the user and return a token,

#### POST `/logout`

  *Only takes JSON as input.*

#### POST `/me`

  return the informations of the connected user (id, name and email)

#### POST `/refresh`

    refresh the token.

## Event object

A dictionary containing the following keys:

  * 'id',
  * 'event_title',
  * 'event_time',
  * 'event_description',
  * 'event_city',
  * 'event_location',
  * 'event_image',
  * 'event_author',  -> point to the users table
  * 'reminder'

  ### Router

  #### GET `/events?page=:page`

  Returns the 6 future events of this page by chronological order, the current page and the last page.

#### GET `/pastevents?page=:page`

  Returns the 6 past events of this page by antechronological order, the current page and the last page.

  #### GET `/event/:id`

  Returns the event with the id, the informations of the author and all the attendees.

  #### POST `/event`

  *Only takes JSON as input.*
  Creates a new event.
  Returns the newly created event object, including its id.

  #### PUT `/event/:id`

  *Only possible if you are the author of this event, and takes JSON as input.*
  Updates one, all or several fields of a specified event.

  #### DELETE `/event/:id`

  *Only possible if you are the author of this event*
  Deletes the specified event.

## Attendees liaison table

   * 'event_id',  -> point to the events table
   * 'user_id'    -> point to the users table


## Router

#### POST `/attend/:event`
*Only takes JSON as input.*
Creates a new line with the connected user id and the event id.

#### DELETE `/attend/:event`
Deletes the users participation of the specified event.

------------------------------------------------------------------------
