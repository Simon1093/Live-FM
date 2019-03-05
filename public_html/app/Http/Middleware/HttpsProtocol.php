<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class HttpsProtocol {

    public function handle($request, Closure $next)
    {
        $request->setTrustedProxies([$request->getClientIp()], Request::HEADER_X_FORWARDED_ALL);
        if (!$request->secure() && env('APP_ENV') != 'local') {
            return redirect()->secure($request->getRequestUri());
        }
        return $next($request); 
    }
}
