<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->Integer('category_id');
            $table->string('title');
            $table->string('sku');
            $table->float('price', 10, 4);
            $table->string('type');
            $table->Text('description');
            $table->tinyInteger('featured')->default(0);
            $table->tinyInteger('status')->default(1);
            $table->string('image')->default('cover.png');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
