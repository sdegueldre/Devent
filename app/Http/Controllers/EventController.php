<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $events = Event::all();
      return response()->json($events);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function store(Request $request)
     {
         $request->validate([
             'event_title'      => 'required',
             'event_time'       => 'required',
             'event_description'=> 'required',
             'event_city'       => 'required',
             'event_location'   => 'required',
             'event_image'      => 'required',
             'event_author'     => 'required'
         ]);

         $event = Event::create($request->all());

         return response()->json([
             'message' => 'Great success! New event created',
             'event' => $event
         ]);
     }

    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
      return $event;
    }

      /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
     public function update(Request $request, Event $event)
     {
         $request->validate([
             'event_title' => 'nullable',
             'event_time' => 'nullable',
             'event_description' => 'nullable',
             'event_city' => 'nullable',
             'event_location' => 'nullable',
             'event_image' => 'nullable',
             'event_author' => 'nullable'
         ]);

         $event->update($request->all());

         return response()->json([
             'message' => 'Great success! Event updated',
             'event' => $event
         ]);
     }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
     public function destroy(Event $event)
       {
           $event->delete();

           return response()->json([
               'message' => 'Successfully deleted event!'
           ]);
       }
}
