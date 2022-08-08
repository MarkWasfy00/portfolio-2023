<?php

namespace App\Http\Controllers;

use App\Mail\DemoMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function save(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'message' => 'required|string'
        ]);

        Mail::to(env("MAIL_USERNAME"))->send(new DemoMail([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
        ]));

        return true;
        
    }
}
