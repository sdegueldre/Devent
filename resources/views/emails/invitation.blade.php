@component('mail::message')
# Hello my friend, <br>
**{{$event['event_title']}}** is coming up soon! <br>
It will take place in *{{$event['event_location']}}* on {{substr($event['event_time'], 0, -9)}} at {{substr($event['event_time'],11, -3)}}.<br>
And {{$user['name']}} would like to invite you.
We hope to see you there!

@component('mail::button', ['url' =>'https://jepsen-brite-jnsnc.herokuapp.com/' . $event['id'], 'color' => 'success'])
Get back to Dev'ent!
@endcomponent

Thanks,<br>
Dev'ent Team
@endcomponent