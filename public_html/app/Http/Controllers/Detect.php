<?php

namespace App\Http\Controllers;
use App\Http\Models\Devices;

class Detect extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
 
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        $List = Devices::GetList();
        $data["title"] = env('APP_NAME');

        foreach( $List as $Item ) 
        {
            if( preg_match( "#".$Item."#i", $_SERVER['HTTP_USER_AGENT'] ) ) 
            {
                //Ok, this is a mobile browser, let's redirect it!
                return view('Simplified', $data);
            }
        }

        return view('React', $data);
    }
}