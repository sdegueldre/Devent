<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
     public function homepage()
     {
       $events = Event::where('event_time', '>', NOW())->orderBy('event_time', 'asc')->limit(3)->get();
       return response()->json($events);
     }
     public function index(Request $request)
       {
         $parameter = $request->only('page');
         $page = array_first($parameter);
         $eventsAll = Event::where('event_time', '>', NOW())->get();
         $number = count($eventsAll);
         if ($number > 0){
           if ($number%6 != 0){
             $last_page = intdiv($number, 6 ) + 1;

           }
           else {
             $last_page = intdiv($number, 6 );
           }
         }
         $events = Event::where('event_time', '>', NOW())->orderBy('event_time', 'asc')->skip(($page-1)*6)->take(6)->get();
         return response()->json(['data' => $events, 'current_page' => $page,'last_page' => $last_page ]);
       }
    public function past(Request $request)
    {
      $parameter = $request->only('page');
      $page = array_first($parameter);
      $eventsAll = Event::where('event_time', '<', NOW())->get();
      $number = count($eventsAll);
      if ($number > 0){
        if ($number%6 != 0){
          $last_page = intdiv($number, 6 ) + 1;

        }
        else {
          $last_page = intdiv($number, 6 );
        }
      }
      $events = Event::where('event_time', '<', NOW())->orderBy('event_time', 'desc')->skip(($page-1)*6)->take(6)->get();
      return response()->json(['data' => $events, 'current_page' => $page,'last_page' => $last_page ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function store(Request $request)
     {
        $request['event_author'] = auth()->user()->id;

         $request->validate([
             'event_title'      => 'required',
             'event_time'       => 'required',
             'event_description'=> 'required',
             'event_city'       => 'required',
             'event_location'   => 'required',
             'event_image'      => 'required',
             'event_author'     => 'required',
             'reminder'         => 'nullable'
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

        $event['event_author'] = $event->author()->get()[0];

        $event['attendees'] = $event->attendees()->get();
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
        if ($event['event_author'] == auth()->user()->id) {

            $request['event_author'] = auth()->user()->id;
            $request->validate([
                'event_title'       => 'nullable',
                'event_time'        => 'nullable',
                'event_description' => 'nullable',
                'event_city'        => 'nullable',
                'event_location'    => 'nullable',
                'event_image'       => 'nullable',
                'event_author'      => 'nullable',
                'reminder'          => 'nullable'
            ]);

            $event->update($request->all());

            return response()->json([
                'message' => 'Great success! Event updated',
                'event' => $event
            ]);
        } else {
            return response()->json(["message" => "Unauthorized"], 401);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
     public function destroy(Event $event)
       {
          if ($event['event_author'] == auth()->user()->id) {
            $event->delete();
            return response()->json([
               'message' => 'Successfully deleted event!'
            ]);
          } else {
             return response()->json(["message" => "You're not the author of this event"], 401);
          }
        }
}
