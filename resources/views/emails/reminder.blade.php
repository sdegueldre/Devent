@component('mail::message')
# Introduction

###### Hello, {{ $event->name }} is coming up soon! <br>


@component('mail::button', ['url' => $url, 'color' => 'success'])
Get back to Dev'ent!
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
