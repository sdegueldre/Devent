<?php

namespace App\Http\Controllers;

use App\Attendees;
use App\Event;
use Auth;
use Illuminate\Http\Request;

class AttendeesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Event $event)
    {
      $user_id = Auth::user()->id;
      Attendees::create([
          'event_id' => $event->id,
          'user_id' => $user_id,
          'reminder' => $event->reminder
      ]);

      return response()->json([
          'message' => 'Great success! You are registered on this event',
          'event' => $event
      ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Attendees  $attendees
     * @return \Illuminate\Http\Response
     */
    public function show(Attendees $attendees)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Attendees  $attendees
     * @return \Illuminate\Http\Response
     */
    public function edit(Attendees $attendees)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Attendees  $attendees
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Attendees $attendees)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Attendees  $attendees
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
      $user_id = Auth::user()->id;
      $attendees = Attendees::where([['event_id', '=', $event->id],
                                     ['user_id', '=', $user_id]]);
      $attendees->delete();

      return response()->json([
          'message' => 'Successfully deregistered!'
      ]);
    }
}
