<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CustomerController extends Controller
{
    public function register(Request $request) {
        $customer =  new Customer;
        $customer->name = $request->name;
        $customer->email = $request->email;
        $customer->password = Hash::make($request->password);
        $customer->save();
        return $request->email;
    }
}
