<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Tables extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()	{
		Schema::create('rule_sets', function($t) {
			$t->increments('id');
			$t->string('name');
			$t->text('descriptors');
			$t->text('entities');
			$t->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('rulesets');
	}

}
