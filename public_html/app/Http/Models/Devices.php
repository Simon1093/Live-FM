<?php

namespace App\Http\Models;
use Illuminate\Database\Eloquent\Model;

class Devices extends Model
{
	public static function GetList()
    {	 
        $List = array(
                            "Andr",         "ios",         "iPhone",       "iPod",      "iPad",
                            "acs",          "alav",        "alca",         "amoi",      "audi", 
                            "aste",         "avan",        "benq",         "bird",      "blac", 
                            "blaz",         "brew",        "cell",         "cldc",      "cmd-", 
                            "dang",         "doco",        "eric",         "hipt",      "inno", 
                            "ipaq",         "java",        "jigs",         "kddi",      "keji", 
                            "leno",         "lg-c",        "lg-d",         "lg-g",      "lge-", 
                            "maui",         "maxo",        "midp",         "mits",      "mmef", 
                            "mobi",         "mot-",        "moto",         "mwbp",      "nec-", 
                            "newt",         "noki",        "opwv",         "palm",      "pana", 
                            "pant",         "pdxg",        "phil",         "play",      "pluc", 
                            "port",         "prox",        "qtek",         "qwap",      "sage", 
                            "sams",         "sany",        "sch-",         "sec-",      "send", 
                            "seri",         "sgh-",        "shar",         "sie-",      "siem", 
                            "smal",         "smar",        "sony",         "sph-",      "symb", 
                            "t-mo",         "teli",        "tim-",         "tosh",      "tsm-", 
                            "upg1",         "upsi",        "vk-v",         "voda",      "w3cs",
                            "wap-",         "wapa",        "wapi",         "wapp",      "wapr", 
                            "webc",         "winw",        "winw",         "xda",       "xda-", 
                            "up.browser",   "up.link",     "windows.ce",   "iemobile",  "mini",
                            "mmp",          "symbian",     "midp",         "wap",       "phone", 
                            "pocket",       "mobile",      "pda",          "PPC",       "Series60", 
                            "Opera.Mini",   "!windows.nt", "!bsd",         "!x11",      "!unix". 
                            "!macos",       "!macintosh",  "!playstation", "!google",   "!yandex", 
                            "!bot",         "!libwww",     "!msn",         "!america",  "!avant", 
                            "!download",    "!fdm",        "!maui",        "!webmoney", "!windows-media-player", 
                            "!wpc_nr",      "BlackBerry",  "Tablet",       "PlayBook",  "IEMobile", 
                            "Opera Mini",   "Nintendo"
                        );
        return $List;      
	}
}
