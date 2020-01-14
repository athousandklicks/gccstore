<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BillingAddress extends Model
{

    use SoftDeletes;

    protected $fillable=[
        'addressline1',
        'addressline2',
        'city',
        'state',
        'zip',
        'phone',
        'country'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
