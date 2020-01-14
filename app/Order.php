<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use SoftDeletes;

    protected $fillable=[
        'total',
        'is_delivered',
        'address'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
