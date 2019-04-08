<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('event_title');
            $table->dateTime('event_time');
            $table->text('event_description');
            $table->string('event_city');
            $table->text('event_location');
            $table->text('event_image');
            $table->unsignedInteger('event_author');
            $table->foreign('event_author')->references('id')->on('users')->onDelete('cascade');
            $table->timestamp('reminder')->nullable();
            $table->boolean('reminder_sent')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
