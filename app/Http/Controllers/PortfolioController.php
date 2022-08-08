<?php

namespace App\Http\Controllers;

use App\Models\About;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // dd(Auth::user()->username);
        // $user = User::where('username',$request->username)->get()->first();
        // $about = About::where('user_id',$user->id)->get()->first();

        // if($user){
        //     return Inertia::render('Portfolio', [
        //         'User' => $user,
        //         'aboutMe' => $about,
        //     ]);
        // }else {
        //     return abort(404);
        // }
       
        // return back()->withErrors(['message' => 'error']);

        return Inertia::render('Portfolio');
    }
}
