// Compiled by ClojureScript 0.0-2138
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
app.core.moviedb_api_key = "15562982f4c622e75a7d89918c26e669";
app.core.moviedb_show_details_url = (function moviedb_show_details_url(show_id){return [cljs.core.str("http://api.themoviedb.org/3/tv/"),cljs.core.str(show_id),cljs.core.str("?api_key="),cljs.core.str(app.core.moviedb_api_key)].join('');
});
app.core.parse_xml_shows = (function parse_xml_shows(xml){var x2 = (new X2JS(null));return cljs.core.js__GT_clj.call(null,x2.xml2json(x2.parseXmlString(xml)));
});
app.core.findShows = (function findShows(e,owner,query){om.core.get_node.call(null,owner,"show-name").blur();
document.activeElement.blur();
e.preventDefault();
var c__6151__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_9334){var state_val_9335 = (state_9334[1]);if((state_val_9335 === 2))
{var inst_9322 = (state_9334[2]);var inst_9323 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_9322);var inst_9324 = app.core.parse_xml_shows.call(null,inst_9323);var inst_9325 = (function (){var data = inst_9324;var response = inst_9322;return ((function (data,response,inst_9322,inst_9323,inst_9324,state_val_9335){
return (function (sh){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.get.call(null,sh,"name"),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,sh,"showid")], null);
});
;})(data,response,inst_9322,inst_9323,inst_9324,state_val_9335))
})();var inst_9326 = cljs.core.get.call(null,inst_9324,"Results");var inst_9327 = cljs.core.get.call(null,inst_9326,"show");var inst_9328 = [inst_9327];var inst_9329 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9328,null));var inst_9330 = cljs.core.flatten.call(null,inst_9329);var inst_9331 = cljs.core.map.call(null,inst_9325,inst_9330);var inst_9332 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"shows","shows",1123317896),inst_9331);var state_9334__$1 = state_9334;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9334__$1,inst_9332);
} else
{if((state_val_9335 === 1))
{var inst_9316 = [cljs.core.str("http://services.tvrage.com/feeds/search.php?show="),cljs.core.str(query)].join('');var inst_9317 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",3165820380)];var inst_9318 = [false];var inst_9319 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9317,inst_9318);var inst_9320 = cljs_http.client.get.call(null,inst_9316,inst_9319);var state_9334__$1 = state_9334;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9334__$1,2,inst_9320);
} else
{return null;
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_9339 = [null,null,null,null,null,null,null];(statearr_9339[0] = state_machine__6137__auto__);
(statearr_9339[1] = 1);
return statearr_9339;
});
var state_machine__6137__auto____1 = (function (state_9334){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_9334);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e9340){if((e9340 instanceof Object))
{var ex__6140__auto__ = e9340;var statearr_9341_9343 = state_9334;(statearr_9341_9343[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9334);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9340;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9344 = state_9334;
state_9334 = G__9344;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_9334){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_9334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_9342 = f__6152__auto__.call(null);(statearr_9342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto__);
return statearr_9342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
return c__6151__auto__;
});
app.core.parse_episode_list = (function parse_episode_list(show,callb){var c__6151__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_9388){var state_val_9389 = (state_9388[1]);if((state_val_9389 === 2))
{var inst_9377 = (state_9388[2]);var inst_9378 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_9377);var inst_9379 = app.core.parse_xml_shows.call(null,inst_9378);var inst_9380 = cljs.core.get.call(null,inst_9379,"Show");var inst_9381 = cljs.core.get.call(null,inst_9380,"Episodelist");var inst_9382 = cljs.core.get.call(null,inst_9381,"Season");var inst_9383 = [inst_9382];var inst_9384 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9383,null));var inst_9385 = cljs.core.flatten.call(null,inst_9384);var inst_9386 = callb.call(null,inst_9385);var state_9388__$1 = state_9388;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9388__$1,inst_9386);
} else
{if((state_val_9389 === 1))
{var inst_9371 = [cljs.core.str("http://services.tvrage.com/feeds/episode_list.php?sid="),cljs.core.str(show)].join('');var inst_9372 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",3165820380)];var inst_9373 = [false];var inst_9374 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9372,inst_9373);var inst_9375 = cljs_http.client.get.call(null,inst_9371,inst_9374);var state_9388__$1 = state_9388;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9388__$1,2,inst_9375);
} else
{return null;
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_9393 = [null,null,null,null,null,null,null];(statearr_9393[0] = state_machine__6137__auto__);
(statearr_9393[1] = 1);
return statearr_9393;
});
var state_machine__6137__auto____1 = (function (state_9388){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_9388);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e9394){if((e9394 instanceof Object))
{var ex__6140__auto__ = e9394;var statearr_9395_9397 = state_9388;(statearr_9395_9397[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9388);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9394;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9398 = state_9388;
state_9388 = G__9398;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_9388){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_9388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_9396 = f__6152__auto__.call(null);(statearr_9396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto__);
return statearr_9396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
return c__6151__auto__;
});
app.core.format_number_zero = (function format_number_zero(num){if((num < 10))
{return [cljs.core.str(0),cljs.core.str(num)].join('');
} else
{return [cljs.core.str(num)].join('');
}
});
app.core.get_magnet_link = (function get_magnet_link(showw,season,episode){var c__6151__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_9453){var state_val_9454 = (state_9453[1]);if((state_val_9454 === 2))
{var inst_9439 = (state_9453[2]);var inst_9440 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_9439);var inst_9441 = $(inst_9440);var inst_9442 = inst_9441.find(".detName:first-child + a");var inst_9443 = inst_9442.attr("href");var inst_9444 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_9439);var inst_9445 = $(inst_9444);var inst_9446 = inst_9445.find(".detName a");var inst_9447 = inst_9446.first();var inst_9448 = inst_9447.text();var inst_9449 = [new cljs.core.Keyword(null,"magnet","magnet",4227240668),new cljs.core.Keyword(null,"file-name","file-name",3946227630)];var inst_9450 = [inst_9443,inst_9448];var inst_9451 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9449,inst_9450);var state_9453__$1 = state_9453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9453__$1,inst_9451);
} else
{if((state_val_9454 === 1))
{var inst_9431 = app.core.format_number_zero.call(null,season);var inst_9432 = app.core.format_number_zero.call(null,episode);var inst_9433 = [cljs.core.str("http://thepiratebay.se/search/"),cljs.core.str(showw),cljs.core.str("%20s"),cljs.core.str(inst_9431),cljs.core.str("e"),cljs.core.str(episode),cljs.core.str("/0/7/0")].join('');var inst_9434 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",3165820380)];var inst_9435 = [false];var inst_9436 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9434,inst_9435);var inst_9437 = cljs_http.client.get.call(null,inst_9433,inst_9436);var state_9453__$1 = (function (){var statearr_9455 = state_9453;(statearr_9455[7] = inst_9432);
return statearr_9455;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9453__$1,2,inst_9437);
} else
{return null;
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_9459 = [null,null,null,null,null,null,null,null];(statearr_9459[0] = state_machine__6137__auto__);
(statearr_9459[1] = 1);
return statearr_9459;
});
var state_machine__6137__auto____1 = (function (state_9453){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_9453);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e9460){if((e9460 instanceof Object))
{var ex__6140__auto__ = e9460;var statearr_9461_9463 = state_9453;(statearr_9461_9463[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9453);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9464 = state_9453;
state_9453 = G__9464;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_9453){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_9453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_9462 = f__6152__auto__.call(null);(statearr_9462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto__);
return statearr_9462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
return c__6151__auto__;
});
app.core.get_subtitle_link = (function get_subtitle_link(show,season,episode){var c__6151__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_9507){var state_val_9508 = (state_9507[1]);if((state_val_9508 === 5))
{var inst_9505 = (state_9507[2]);var state_9507__$1 = state_9507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9507__$1,inst_9505);
} else
{if((state_val_9508 === 4))
{var state_9507__$1 = state_9507;var statearr_9509_9521 = state_9507__$1;(statearr_9509_9521[2] = null);
(statearr_9509_9521[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9508 === 3))
{var inst_9500 = (state_9507[7]);var inst_9502 = [cljs.core.str("http://www.addic7ed.com"),cljs.core.str(inst_9500)].join('');var state_9507__$1 = state_9507;var statearr_9510_9522 = state_9507__$1;(statearr_9510_9522[2] = inst_9502);
(statearr_9510_9522[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9508 === 2))
{var inst_9500 = (state_9507[7]);var inst_9496 = (state_9507[2]);var inst_9497 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_9496);var inst_9498 = $(inst_9497);var inst_9499 = inst_9498.find(".buttonDownload");var inst_9500__$1 = inst_9499.attr("href");var state_9507__$1 = (function (){var statearr_9511 = state_9507;(statearr_9511[7] = inst_9500__$1);
return statearr_9511;
})();if(cljs.core.truth_(inst_9500__$1))
{var statearr_9512_9523 = state_9507__$1;(statearr_9512_9523[1] = 3);
} else
{var statearr_9513_9524 = state_9507__$1;(statearr_9513_9524[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9508 === 1))
{var inst_9493 = [cljs.core.str("http://www.addic7ed.com/serie/"),cljs.core.str(show),cljs.core.str("/"),cljs.core.str(season),cljs.core.str("/"),cljs.core.str(episode),cljs.core.str("/8")].join('');var inst_9494 = cljs_http.client.get.call(null,inst_9493);var state_9507__$1 = state_9507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9507__$1,2,inst_9494);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_9517 = [null,null,null,null,null,null,null,null];(statearr_9517[0] = state_machine__6137__auto__);
(statearr_9517[1] = 1);
return statearr_9517;
});
var state_machine__6137__auto____1 = (function (state_9507){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_9507);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e9518){if((e9518 instanceof Object))
{var ex__6140__auto__ = e9518;var statearr_9519_9525 = state_9507;(statearr_9519_9525[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9507);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9526 = state_9507;
state_9507 = G__9526;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_9507){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_9507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_9520 = f__6152__auto__.call(null);(statearr_9520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto__);
return statearr_9520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
return c__6151__auto__;
});
app.core.moviedb_image_url = (function moviedb_image_url(id){return [cljs.core.str("http://image.tmdb.org/t/p/w780"),cljs.core.str(id)].join('');
});
app.core.moviedb_search = (function moviedb_search(show_name){return [cljs.core.str("http://api.themoviedb.org/3/search/tv?api_key=15562982f4c622e75a7d89918c26e669&query="),cljs.core.str((function (){var idx = show_name.indexOf("(");cljs.core.prn.call(null,idx);
if(!(cljs.core._EQ_.call(null,idx,-1)))
{return cljs.core.subs.call(null,show_name,0,idx);
} else
{return show_name;
}
})())].join('');
});
app.core.moviedb_get_image_url = (function moviedb_get_image_url(show_name){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,app.core.moviedb_search.call(null,show_name),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9527_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,app.core.moviedb_image_url.call(null,new cljs.core.Keyword(null,"backdrop_path","backdrop_path",4386024928).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(p1__9527_SHARP_)))));
})], null));
return ch;
});
app.core.app_id = "iorek.tivishows4";
app.core.freebox_get = (function freebox_get(url,token){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,[cljs.core.str("http://mafreebox.freebox.fr/api/v1/"),cljs.core.str(url)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9528_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__9528_SHARP_));
})], null));
return ch;
});
app.core.freebox_autorize = (function freebox_autorize(do_with_token){return ajax.core.POST.call(null,"http://mafreebox.freebox.fr/api/v1/login/authorize/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"app_id","app_id",3897797483),app.core.app_id,new cljs.core.Keyword(null,"app_name","app_name",2181552475),"tivishows3",new cljs.core.Keyword(null,"app_version","app_version",4407001132),"0.4",new cljs.core.Keyword(null,"device_name","device_name",3765800518),"Nexus 5"], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9529_SHARP_){return do_with_token.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__9529_SHARP_));
})], null));
});
app.core.freebox_session = (function freebox_session(app_token,do_with_session){return ajax.core.GET.call(null,"http://mafreebox.freebox.fr/api/v1/login/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9530_SHARP_){var challenge = new cljs.core.Keyword(null,"challenge","challenge",2416537557).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__9530_SHARP_));return app.core.freebox_session_save.call(null,app.core.freebox_make_password.call(null,challenge,app_token),do_with_session);
})], null));
});
app.core.freebox_session_save = (function freebox_session_save(pass,do_with_session){return ajax.core.POST.call(null,"http://mafreebox.freebox.fr/api/v1/login/session/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app_id","app_id",3897797483),app.core.app_id,new cljs.core.Keyword(null,"password","password",2230889997),pass], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9531_SHARP_){return do_with_session.call(null,new cljs.core.Keyword(null,"session_token","session_token",1215285890).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__9531_SHARP_)));
})], null));
});
app.core.freebox_track_id = (function freebox_track_id(id){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,[cljs.core.str("http://mafreebox.freebox.fr/api/v1/login/authorize/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9532_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__9532_SHARP_));
})], null));
return ch;
});
app.core.freebox_make_password = (function freebox_make_password(challenge,token){return CryptoJS.HmacSHA1(challenge,token).toString();
});
app.core.freebox_start_download = (function freebox_start_download(magnet,session_token,do_with_id){return ajax.core.POST.call(null,"http://mafreebox.freebox.fr/api/v1/downloads/add",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"download_url","download_url",2123312298),magnet], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.url_request_format.call(null),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),session_token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9533_SHARP_){return do_with_id.call(null,cljs.core.get.call(null,cljs.core.get.call(null,p1__9533_SHARP_,"result"),"id"));
})], null));
});
app.core.freebox_get_download_percent = (function freebox_get_download_percent(id,session_token,do_with_percent){return app.core.freebox_get_download.call(null,id,session_token,(function (p1__9534_SHARP_){return do_with_percent.call(null,(new cljs.core.Keyword(null,"rx_pct","rx_pct",4391390938).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__9534_SHARP_)) / 100));
}));
});
app.core.freebox_get_download_details = (function freebox_get_download_details(id,session_token){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,[cljs.core.str("http://mafreebox.freebox.fr/api/v1/downloads/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),session_token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9535_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,p1__9535_SHARP_);
})], null));
return ch;
});
app.core.freebox_get_download = (function freebox_get_download(id,session_token,handler){return ajax.core.GET.call(null,[cljs.core.str("http://mafreebox.freebox.fr/api/v1/downloads/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),session_token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),handler], null));
});
app.core.freebox_get_upload_id = (function freebox_get_upload_id(session_token,dirname,upname){var ch = cljs.core.async.chan.call(null);ajax.core.POST.call(null,[cljs.core.str("http://mafreebox.freebox.fr/api/v1/upload/")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dirname","dirname",2684675082),dirname,new cljs.core.Keyword(null,"upload_name","upload_name",2078716283),[cljs.core.str(upname),cljs.core.str(".srt")].join('')], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),session_token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9536_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__9536_SHARP_)));
})], null));
return ch;
});
app.core.freebox_get_file_info = (function freebox_get_file_info(path,token){return app.core.freebox_get.call(null,[cljs.core.str("fs/info/"),cljs.core.str(path)].join(''),token);
});
app.core.freebox_ls_path = (function freebox_ls_path(path,token){return app.core.freebox_get.call(null,[cljs.core.str("fs/ls/"),cljs.core.str(path)].join(''),token);
});
app.core.get_local = (function get_local(k,defo){var local = window.localStorage.getItem(k);if(cljs.core.truth_(local))
{return cljs.reader.read_string.call(null,local);
} else
{return defo;
}
});
app.core.defo_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",2140844267),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"shows","shows",1123317896),cljs.core.PersistentHashSet.EMPTY], null);
app.core.app_state = cljs.core.atom.call(null,app.core.get_local.call(null,"state",app.core.defo_state));
cljs.core.add_watch.call(null,app.core.app_state,new cljs.core.Keyword(null,"state","state",1123661827),(function (_,___$1,___$2,s){return window.localStorage.setItem("state",s);
}));
app.core.topcoat_list_view = (function topcoat_list_view(app__$1,owner){if(typeof app.core.t9540 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t9540 = (function (owner,app,topcoat_list_view,meta9541){
this.owner = owner;
this.app = app;
this.topcoat_list_view = topcoat_list_view;
this.meta9541 = meta9541;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t9540.cljs$lang$type = true;
app.core.t9540.cljs$lang$ctorStr = "app.core/t9540";
app.core.t9540.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"app.core/t9540");
});
app.core.t9540.prototype.om$core$IRenderState$ = true;
app.core.t9540.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div({"className": [cljs.core.str("topcoat-list"),cljs.core.str(new cljs.core.Keyword(null,"listCls","listCls",1195843358).cljs$core$IFn$_invoke$arity$1(app.core.data))].join('')},(cljs.core.truth_(new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(self__.app))?React.DOM.h3({"className": "topcoat-list__header"},new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(self__.app)):null),cljs.core.apply.call(null,om.dom.ul,{"className": "topcoat-list__container"},cljs.core.map.call(null,(function (item){return React.DOM.li({"onClick": (function (){return new cljs.core.Keyword(null,"click","click",1108654330).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,item);
}), "className": "topcoat-list__item"},new cljs.core.Keyword(null,"display","display",2685668404).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,item));
}),new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(self__.app))),(cljs.core.truth_(new cljs.core.Keyword(null,"extra","extra",1110869890).cljs$core$IFn$_invoke$arity$1(self__.app))?new cljs.core.Keyword(null,"extra","extra",1110869890).cljs$core$IFn$_invoke$arity$1(self__.app):null));
});
app.core.t9540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9542){var self__ = this;
var _9542__$1 = this;return self__.meta9541;
});
app.core.t9540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9542,meta9541__$1){var self__ = this;
var _9542__$1 = this;return (new app.core.t9540(self__.owner,self__.app,self__.topcoat_list_view,meta9541__$1));
});
app.core.__GT_t9540 = (function __GT_t9540(owner__$1,app__$2,topcoat_list_view__$1,meta9541){return (new app.core.t9540(owner__$1,app__$2,topcoat_list_view__$1,meta9541));
});
}
return (new app.core.t9540(owner,app__$1,topcoat_list_view,null));
});
app.core.save_show = (function save_show(e,show,app__$1){var kshow = show;window.scrollTo(0,0);
om.core.update_BANG_.call(null,app__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267)], null),kshow);
return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"shows","shows",1123317896),cljs.core.conj,kshow);
});
app.core.add_show_view = (function add_show_view(app__$1,owner){if(typeof app.core.t9548 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t9548 = (function (owner,app,add_show_view,meta9549){
this.owner = owner;
this.app = app;
this.add_show_view = add_show_view;
this.meta9549 = meta9549;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t9548.cljs$lang$type = true;
app.core.t9548.cljs$lang$ctorStr = "app.core/t9548";
app.core.t9548.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"app.core/t9548");
});
app.core.t9548.prototype.om$core$IRenderState$ = true;
app.core.t9548.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,st){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "topcoat-list"},React.DOM.h3({"className": "topcoat-list__header"},"Add Show"),React.DOM.form({"onSubmit": (function (p1__9543_SHARP_){return app.core.findShows.call(null,p1__9543_SHARP_,self__.owner,om.core.get_node.call(null,self__.owner,"show-name").value);
}), "className": "add-show-input"},om.dom.input.call(null,{"ref": "show-name", "placeholder": "show name", "className": "topcoat-text-input", "type": "text"})),cljs.core.apply.call(null,om.dom.ul,{"className": "topcoat-list__container"},cljs.core.map.call(null,(function (show){return React.DOM.li({"onClick": (function (p1__9544_SHARP_){return app.core.save_show.call(null,p1__9544_SHARP_,show,self__.app);
}), "className": "topcoat-list__item"},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(show));
}),new cljs.core.Keyword(null,"shows","shows",1123317896).cljs$core$IFn$_invoke$arity$1(st))));
});
app.core.t9548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9550){var self__ = this;
var _9550__$1 = this;return self__.meta9549;
});
app.core.t9548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9550,meta9549__$1){var self__ = this;
var _9550__$1 = this;return (new app.core.t9548(self__.owner,self__.app,self__.add_show_view,meta9549__$1));
});
app.core.__GT_t9548 = (function __GT_t9548(owner__$1,app__$2,add_show_view__$1,meta9549){return (new app.core.t9548(owner__$1,app__$2,add_show_view__$1,meta9549));
});
}
return (new app.core.t9548(owner,app__$1,add_show_view,null));
});
app.core.display_show = (function display_show(app__$1,token){if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(app__$1),new cljs.core.Keyword(null,"id","id",1013907597)))
{if(cljs.core.contains_QMARK_.call(null,app__$1,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(app__$1))))
{return om.core.build.call(null,app.core.show_watch_list_view,cljs.core.get.call(null,app__$1,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(app__$1))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",1124445547),token,new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(app__$1)], null)], null));
} else
{return om.core.build.call(null,app.core.show_select_last_view,app__$1);
}
} else
{return React.DOM.div(null,"");
}
});
app.core.show_select_last_view = (function show_select_last_view(app__$1,owner){if(typeof app.core.t9581 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t9581 = (function (owner,app,show_select_last_view,meta9582){
this.owner = owner;
this.app = app;
this.show_select_last_view = show_select_last_view;
this.meta9582 = meta9582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t9581.cljs$lang$type = true;
app.core.t9581.cljs$lang$ctorStr = "app.core/t9581";
app.core.t9581.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"app.core/t9581");
});
app.core.t9581.prototype.om$core$IRenderState$ = true;
app.core.t9581.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return om.core.build.call(null,app.core.topcoat_list_view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.reverse.call(null,cljs.core.map_indexed.call(null,(function (idx,seas){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1014008367),idx,new cljs.core.Keyword(null,"episodes","episodes",4675925322),seas], null);
}),new cljs.core.Keyword(null,"seasons","seasons",2982274402).cljs$core$IFn$_invoke$arity$1(state))),new cljs.core.Keyword(null,"header","header",4087600639),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.str(" - Click the next episode you want to see !")].join(''),new cljs.core.Keyword(null,"display","display",2685668404),(function (p1__9552_SHARP_){return app.core.show_season_episodes.call(null,new cljs.core.Keyword(null,"episodes","episodes",4675925322).cljs$core$IFn$_invoke$arity$1(p1__9552_SHARP_),new cljs.core.Keyword(null,"idx","idx",1014008367).cljs$core$IFn$_invoke$arity$1(p1__9552_SHARP_),new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"mark-chan","mark-chan",4322875844).cljs$core$IFn$_invoke$arity$1(state));
})], null)));
});
app.core.t9581.prototype.om$core$IWillMount$ = true;
app.core.t9581.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mark_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mark-chan","mark-chan",4322875844));app.core.parse_episode_list.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)))),(function (p1__9551_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"seasons","seasons",2982274402),p1__9551_SHARP_);
}));
var c__6151__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_9597){var state_val_9598 = (state_9597[1]);if((state_val_9598 === 4))
{var inst_9586 = (state_9597[2]);var inst_9587 = new cljs.core.Keyword(null,"show","show",1017433711).cljs$core$IFn$_invoke$arity$1(inst_9586);var inst_9588 = (function (){var marked = inst_9586;return ((function (marked,inst_9586,inst_9587,state_val_9598){
return (function (idx,it){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1014008367),idx,new cljs.core.Keyword(null,"episodes","episodes",4675925322),it], null);
});
;})(marked,inst_9586,inst_9587,state_val_9598))
})();var inst_9589 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"seasons","seasons",2982274402));var inst_9590 = cljs.core.map_indexed.call(null,inst_9588,inst_9589);var inst_9591 = new cljs.core.Keyword(null,"episode","episode",3764433261).cljs$core$IFn$_invoke$arity$1(inst_9586);var inst_9592 = app.core.mark_watched.call(null,inst_9587,inst_9590,inst_9591,self__.app);var state_9597__$1 = (function (){var statearr_9599 = state_9597;(statearr_9599[7] = inst_9592);
return statearr_9599;
})();var statearr_9600_9609 = state_9597__$1;(statearr_9600_9609[2] = null);
(statearr_9600_9609[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9598 === 3))
{var inst_9595 = (state_9597[2]);var state_9597__$1 = state_9597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9597__$1,inst_9595);
} else
{if((state_val_9598 === 2))
{var state_9597__$1 = state_9597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9597__$1,4,mark_chan);
} else
{if((state_val_9598 === 1))
{var state_9597__$1 = state_9597;var statearr_9601_9610 = state_9597__$1;(statearr_9601_9610[2] = null);
(statearr_9601_9610[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_9605 = [null,null,null,null,null,null,null,null];(statearr_9605[0] = state_machine__6137__auto__);
(statearr_9605[1] = 1);
return statearr_9605;
});
var state_machine__6137__auto____1 = (function (state_9597){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_9597);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e9606){if((e9606 instanceof Object))
{var ex__6140__auto__ = e9606;var statearr_9607_9611 = state_9597;(statearr_9607_9611[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9597);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9606;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9612 = state_9597;
state_9597 = G__9612;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_9597){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_9597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_9608 = f__6152__auto__.call(null);(statearr_9608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto__);
return statearr_9608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
return c__6151__auto__;
});
app.core.t9581.prototype.om$core$IInitState$ = true;
app.core.t9581.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seasons","seasons",2982274402),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"mark-chan","mark-chan",4322875844),cljs.core.async.chan.call(null)], null);
});
app.core.t9581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9583){var self__ = this;
var _9583__$1 = this;return self__.meta9582;
});
app.core.t9581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9583,meta9582__$1){var self__ = this;
var _9583__$1 = this;return (new app.core.t9581(self__.owner,self__.app,self__.show_select_last_view,meta9582__$1));
});
app.core.__GT_t9581 = (function __GT_t9581(owner__$1,app__$2,show_select_last_view__$1,meta9582){return (new app.core.t9581(owner__$1,app__$2,show_select_last_view__$1,meta9582));
});
}
return (new app.core.t9581(owner,app__$1,show_select_last_view,null));
});
app.core.show_season_episodes = (function show_season_episodes(season,num,show,mark_chan){return om.core.build.call(null,app.core.topcoat_list_view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",4087600639),[cljs.core.str("Season "),cljs.core.str((num + 1))].join(''),new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,season,"episode")], null)),new cljs.core.Keyword(null,"display","display",2685668404),(function (p1__9613_SHARP_){return React.DOM.span(null,[cljs.core.str("Episode "),cljs.core.str(cljs.core.get.call(null,p1__9613_SHARP_,"seasonnum")),cljs.core.str(" - "),cljs.core.str(cljs.core.get.call(null,p1__9613_SHARP_,"title"))].join(''),React.DOM.em({"className": "download"},app.core.get_air_delay.call(null,cljs.core.get.call(null,p1__9613_SHARP_,"airdate"))));
}),new cljs.core.Keyword(null,"click","click",1108654330),(function (p1__9614_SHARP_){return cljs.core.async.put_BANG_.call(null,mark_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"season","season",4402536021),(num + 1),new cljs.core.Keyword(null,"episode","episode",3764433261),cljs.reader.read_string.call(null,cljs.core.get.call(null,p1__9614_SHARP_,"epnum")),new cljs.core.Keyword(null,"show","show",1017433711),show], null));
})], null)));
});
app.core.get_air_delay = (function get_air_delay(string_date){return (new moment(string_date)).fromNow();
});
app.core.get_watch_list = (function get_watch_list(seasons,episode){return cljs.core.reduce.call(null,(function (acc,curr){return cljs.core.concat.call(null,acc,cljs.core.remove.call(null,(function (p1__9615_SHARP_){return (new cljs.core.Keyword(null,"episode","episode",3764433261).cljs$core$IFn$_invoke$arity$1(p1__9615_SHARP_) < episode);
}),cljs.core.map.call(null,(function (p1__9616_SHARP_){return app.core.parse_episode.call(null,p1__9616_SHARP_,new cljs.core.Keyword(null,"idx","idx",1014008367).cljs$core$IFn$_invoke$arity$1(curr));
}),cljs.core.get.call(null,new cljs.core.Keyword(null,"episodes","episodes",4675925322).cljs$core$IFn$_invoke$arity$1(curr),"episode"))));
}),cljs.core.PersistentVector.EMPTY,seasons);
});
app.core.mark_watched = (function mark_watched(show,seasons,episode,app__$1){var eps = app.core.get_watch_list.call(null,seasons,episode);window.scrollTo(0,0);
return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,show)),(function (_){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-name","show-name",3359181517),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,show)),new cljs.core.Keyword(null,"show-id","show-id",3081146717),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,show)),new cljs.core.Keyword(null,"episodes","episodes",4675925322),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,eps)], null);
}));
});
app.core.parse_episode = (function parse_episode(ep,seas){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"episode","episode",3764433261),cljs.core.get.call(null,ep,"epnum"),new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025),cljs.core.get.call(null,ep,"seasonnum"),new cljs.core.Keyword(null,"season","season",4402536021),(seas + 1),new cljs.core.Keyword(null,"title","title",1124275658),cljs.core.get.call(null,ep,"title"),new cljs.core.Keyword(null,"air-date","air-date",4569745859),cljs.core.get.call(null,ep,"airdate")], null);
});
app.core.show_watch_list_view = (function show_watch_list_view(app__$1,owner){if(typeof app.core.t9648 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t9648 = (function (owner,app,show_watch_list_view,meta9649){
this.owner = owner;
this.app = app;
this.show_watch_list_view = show_watch_list_view;
this.meta9649 = meta9649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t9648.cljs$lang$type = true;
app.core.t9648.cljs$lang$ctorStr = "app.core/t9648";
app.core.t9648.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"app.core/t9648");
});
app.core.t9648.prototype.om$core$IRenderState$ = true;
app.core.t9648.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": [cljs.core.str("topcoat-list")].join('')},React.DOM.h3({"className": "topcoat-list__header"},React.DOM.img({"className": "picture", "height": "30%", "src": new cljs.core.Keyword(null,"image","image",1114217677).cljs$core$IFn$_invoke$arity$1(self__.app)})),cljs.core.apply.call(null,om.dom.ul,{"className": "topcoat-list__container"},om.core.build_all.call(null,app.core.episode_view,new cljs.core.Keyword(null,"episodes","episodes",4675925322).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-name","show-name",3359181517),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"token","token",1124445547),new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state)], null)], null))));
});
app.core.t9648.prototype.om$core$IWillMount$ = true;
app.core.t9648.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6151__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_9666){var state_val_9667 = (state_9666[1]);if((state_val_9667 === 5))
{var inst_9659 = (state_9666[2]);var inst_9660 = (function (){var img = inst_9659;return ((function (img,inst_9659,state_val_9667){
return (function (___$2){return img;
});
;})(img,inst_9659,state_val_9667))
})();var inst_9661 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"image","image",1114217677),inst_9660);var state_9666__$1 = state_9666;var statearr_9668_9679 = state_9666__$1;(statearr_9668_9679[2] = inst_9661);
(statearr_9668_9679[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9667 === 4))
{var inst_9664 = (state_9666[2]);var state_9666__$1 = state_9666;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9666__$1,inst_9664);
} else
{if((state_val_9667 === 3))
{var state_9666__$1 = state_9666;var statearr_9669_9680 = state_9666__$1;(statearr_9669_9680[2] = null);
(statearr_9669_9680[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9667 === 2))
{var inst_9655 = cljs.core.deref.call(null,self__.app);var inst_9656 = new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(inst_9655);var inst_9657 = app.core.moviedb_get_image_url.call(null,inst_9656);var state_9666__$1 = state_9666;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9666__$1,5,inst_9657);
} else
{if((state_val_9667 === 1))
{var inst_9651 = cljs.core.deref.call(null,self__.app);var inst_9652 = new cljs.core.Keyword(null,"image","image",1114217677).cljs$core$IFn$_invoke$arity$1(inst_9651);var inst_9653 = cljs.core.not.call(null,inst_9652);var state_9666__$1 = state_9666;if(inst_9653)
{var statearr_9670_9681 = state_9666__$1;(statearr_9670_9681[1] = 2);
} else
{var statearr_9671_9682 = state_9666__$1;(statearr_9671_9682[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_9675 = [null,null,null,null,null,null,null];(statearr_9675[0] = state_machine__6137__auto__);
(statearr_9675[1] = 1);
return statearr_9675;
});
var state_machine__6137__auto____1 = (function (state_9666){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_9666);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e9676){if((e9676 instanceof Object))
{var ex__6140__auto__ = e9676;var statearr_9677_9683 = state_9666;(statearr_9677_9683[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9666);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9684 = state_9666;
state_9666 = G__9684;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_9666){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_9666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_9678 = f__6152__auto__.call(null);(statearr_9678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto__);
return statearr_9678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
return c__6151__auto__;
});
app.core.t9648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9650){var self__ = this;
var _9650__$1 = this;return self__.meta9649;
});
app.core.t9648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9650,meta9649__$1){var self__ = this;
var _9650__$1 = this;return (new app.core.t9648(self__.owner,self__.app,self__.show_watch_list_view,meta9649__$1));
});
app.core.__GT_t9648 = (function __GT_t9648(owner__$1,app__$2,show_watch_list_view__$1,meta9649){return (new app.core.t9648(owner__$1,app__$2,show_watch_list_view__$1,meta9649));
});
}
return (new app.core.t9648(owner,app__$1,show_watch_list_view,null));
});
app.core.episode_view = (function episode_view(app__$1,owner){if(typeof app.core.t9783 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t9783 = (function (owner,app,episode_view,meta9784){
this.owner = owner;
this.app = app;
this.episode_view = episode_view;
this.meta9784 = meta9784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t9783.cljs$lang$type = true;
app.core.t9783.cljs$lang$ctorStr = "app.core/t9783";
app.core.t9783.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"app.core/t9783");
});
app.core.t9783.prototype.om$core$IRenderState$ = true;
app.core.t9783.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"onClick": (function (){if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core._EQ_.call(null,100,new cljs.core.Keyword(null,"percent","percent",4629944247).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)));if(and__3396__auto__)
{return new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app));
} else
{return and__3396__auto__;
}
})()))
{if(cljs.core.not.call(null,new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app))))
{app.core.downloadSubs.call(null,new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)),new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"season","season",4402536021).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)),new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)));
return om.core.update_BANG_.call(null,self__.app,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675)], null),true);
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"on-device","on-device",633333110).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app))))
{return window.playVideo(new cljs.core.Keyword(null,"on-device","on-device",633333110).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)));
} else
{return app.core.download_on_device.call(null,self__.app,state);
}
}
} else
{return app.core.download.call(null,self__.app,new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"update-chan","update-chan",4688741704).cljs$core$IFn$_invoke$arity$1(state));
}
}), "className": "topcoat-list__item"},React.DOM.span({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"on-device","on-device",633333110).cljs$core$IFn$_invoke$arity$1(self__.app))?"finished":"")},[cljs.core.str("S"),cljs.core.str(new cljs.core.Keyword(null,"season","season",4402536021).cljs$core$IFn$_invoke$arity$1(self__.app)),cljs.core.str("E"),cljs.core.str(new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025).cljs$core$IFn$_invoke$arity$1(self__.app)),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.app))].join('')),(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core.contains_QMARK_.call(null,self__.app,new cljs.core.Keyword(null,"air-date","air-date",4569745859));if(and__3396__auto__)
{return app.core.in_future_QMARK_.call(null,new cljs.core.Keyword(null,"air-date","air-date",4569745859).cljs$core$IFn$_invoke$arity$1(self__.app));
} else
{return and__3396__auto__;
}
})())?React.DOM.em({"className": "download"},app.core.get_air_delay.call(null,new cljs.core.Keyword(null,"air-date","air-date",4569745859).cljs$core$IFn$_invoke$arity$1(self__.app))):null),(cljs.core.truth_(new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(self__.app))?React.DOM.em({"className": [cljs.core.str("download "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"percent","percent",4629944247).cljs$core$IFn$_invoke$arity$1(self__.app),100))?"finished":""))].join('')},[cljs.core.str(new cljs.core.Keyword(null,"percent","percent",4629944247).cljs$core$IFn$_invoke$arity$1(self__.app)),cljs.core.str("%")].join('')):null),((cljs.core.contains_QMARK_.call(null,self__.app,new cljs.core.Keyword(null,"subs-link","subs-link",1478697670)))?React.DOM.em({"className": [cljs.core.str("download episode__subtitles "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)))?"finished":""))].join('')},(cljs.core.truth_(new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(self__.app))?"S":"$")):null));
});
app.core.t9783.prototype.om$core$IWillMount$ = true;
app.core.t9783.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var update_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"update-chan","update-chan",4688741704));var map__9786 = cljs.core.deref.call(null,self__.app);var map__9786__$1 = ((cljs.core.seq_QMARK_.call(null,map__9786))?cljs.core.apply.call(null,cljs.core.hash_map,map__9786):map__9786);var epnumrelative = cljs.core.get.call(null,map__9786__$1,new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025));var season = cljs.core.get.call(null,map__9786__$1,new cljs.core.Keyword(null,"season","season",4402536021));var st = om.core.get_state.call(null,self__.owner);var show_name = new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(st);if(cljs.core.truth_((function (){var and__3396__auto__ = new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app));if(cljs.core.truth_(and__3396__auto__))
{return (new cljs.core.Keyword(null,"percent","percent",4629944247).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)) < 100);
} else
{return and__3396__auto__;
}
})()))
{app.core.get_download_percent.call(null,new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)),self__.app,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"token","token",1124445547)),update_chan);
} else
{}
var c__6151__auto___9881 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_9822){var state_val_9823 = (state_9822[1]);if((state_val_9823 === 1))
{var state_9822__$1 = state_9822;var statearr_9824_9882 = state_9822__$1;(statearr_9824_9882[2] = null);
(statearr_9824_9882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9823 === 2))
{var state_9822__$1 = state_9822;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9822__$1,4,update_chan);
} else
{if((state_val_9823 === 3))
{var inst_9820 = (state_9822[2]);var state_9822__$1 = state_9822;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9822__$1,inst_9820);
} else
{if((state_val_9823 === 4))
{var inst_9796 = (state_9822[7]);var inst_9789 = (state_9822[8]);var inst_9791 = (state_9822[9]);var inst_9789__$1 = (state_9822[2]);var inst_9790 = cljs.core.deref.call(null,self__.app);var inst_9791__$1 = new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(inst_9790);var inst_9792 = (function (){var sub_link = inst_9791__$1;var percent = inst_9789__$1;return ((function (sub_link,percent,inst_9796,inst_9789,inst_9791,inst_9789__$1,inst_9790,inst_9791__$1,state_val_9823){
return (function (___$2){return (percent | 0);
});
;})(sub_link,percent,inst_9796,inst_9789,inst_9791,inst_9789__$1,inst_9790,inst_9791__$1,state_val_9823))
})();var inst_9793 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"percent","percent",4629944247),inst_9792);var inst_9794 = cljs.core.deref.call(null,self__.app);var inst_9795 = cljs.core.contains_QMARK_.call(null,inst_9794,new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675));var inst_9796__$1 = !(inst_9795);var state_9822__$1 = (function (){var statearr_9825 = state_9822;(statearr_9825[7] = inst_9796__$1);
(statearr_9825[10] = inst_9793);
(statearr_9825[8] = inst_9789__$1);
(statearr_9825[9] = inst_9791__$1);
return statearr_9825;
})();if(inst_9796__$1)
{var statearr_9826_9883 = state_9822__$1;(statearr_9826_9883[1] = 5);
} else
{var statearr_9827_9884 = state_9822__$1;(statearr_9827_9884[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9823 === 5))
{var inst_9791 = (state_9822[9]);var state_9822__$1 = state_9822;if(cljs.core.truth_(inst_9791))
{var statearr_9828_9885 = state_9822__$1;(statearr_9828_9885[1] = 8);
} else
{var statearr_9829_9886 = state_9822__$1;(statearr_9829_9886[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9823 === 6))
{var inst_9796 = (state_9822[7]);var state_9822__$1 = state_9822;var statearr_9830_9887 = state_9822__$1;(statearr_9830_9887[2] = inst_9796);
(statearr_9830_9887[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9823 === 7))
{var inst_9806 = (state_9822[2]);var state_9822__$1 = state_9822;if(cljs.core.truth_(inst_9806))
{var statearr_9831_9888 = state_9822__$1;(statearr_9831_9888[1] = 11);
} else
{var statearr_9832_9889 = state_9822__$1;(statearr_9832_9889[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9823 === 8))
{var inst_9789 = (state_9822[8]);var inst_9799 = (inst_9789 | 0);var inst_9800 = (inst_9799 > 0);var state_9822__$1 = state_9822;var statearr_9833_9890 = state_9822__$1;(statearr_9833_9890[2] = inst_9800);
(statearr_9833_9890[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9823 === 9))
{var inst_9791 = (state_9822[9]);var state_9822__$1 = state_9822;var statearr_9834_9891 = state_9822__$1;(statearr_9834_9891[2] = inst_9791);
(statearr_9834_9891[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9823 === 10))
{var inst_9803 = (state_9822[2]);var state_9822__$1 = state_9822;var statearr_9835_9892 = state_9822__$1;(statearr_9835_9892[2] = inst_9803);
(statearr_9835_9892[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9823 === 11))
{var inst_9791 = (state_9822[9]);var inst_9808 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(st);var inst_9809 = cljs.core.deref.call(null,self__.app);var inst_9810 = new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(inst_9809);var inst_9811 = app.core.downloadSubs.call(null,inst_9791,inst_9808,inst_9810,show_name,season,epnumrelative);var inst_9812 = [new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675)];var inst_9813 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9812,null));var inst_9814 = om.core.update_BANG_.call(null,self__.app,cljs.core.assoc_in,inst_9813,true);var state_9822__$1 = (function (){var statearr_9836 = state_9822;(statearr_9836[11] = inst_9811);
return statearr_9836;
})();var statearr_9837_9893 = state_9822__$1;(statearr_9837_9893[2] = inst_9814);
(statearr_9837_9893[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9823 === 12))
{var state_9822__$1 = state_9822;var statearr_9838_9894 = state_9822__$1;(statearr_9838_9894[2] = null);
(statearr_9838_9894[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9823 === 13))
{var inst_9817 = (state_9822[2]);var state_9822__$1 = (function (){var statearr_9839 = state_9822;(statearr_9839[12] = inst_9817);
return statearr_9839;
})();var statearr_9840_9895 = state_9822__$1;(statearr_9840_9895[2] = null);
(statearr_9840_9895[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_9844 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9844[0] = state_machine__6137__auto__);
(statearr_9844[1] = 1);
return statearr_9844;
});
var state_machine__6137__auto____1 = (function (state_9822){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_9822);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e9845){if((e9845 instanceof Object))
{var ex__6140__auto__ = e9845;var statearr_9846_9896 = state_9822;(statearr_9846_9896[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9822);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9845;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9897 = state_9822;
state_9822 = G__9897;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_9822){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_9822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_9847 = f__6152__auto__.call(null);(statearr_9847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto___9881);
return statearr_9847;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
var c__6151__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_9867){var state_val_9868 = (state_9867[1]);if((state_val_9868 === 5))
{var inst_9858 = (state_9867[7]);var inst_9861 = (state_9867[2]);var inst_9862 = om.core.update_BANG_.call(null,self__.app,cljs.core.assoc_in,inst_9858,inst_9861);var state_9867__$1 = state_9867;var statearr_9869_9898 = state_9867__$1;(statearr_9869_9898[2] = inst_9862);
(statearr_9869_9898[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9868 === 4))
{var inst_9865 = (state_9867[2]);var state_9867__$1 = state_9867;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9867__$1,inst_9865);
} else
{if((state_val_9868 === 3))
{var state_9867__$1 = state_9867;var statearr_9870_9899 = state_9867__$1;(statearr_9870_9899[2] = null);
(statearr_9870_9899[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9868 === 2))
{var inst_9857 = [new cljs.core.Keyword(null,"subs-link","subs-link",1478697670)];var inst_9858 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9857,null));var inst_9859 = app.core.get_subtitle_link.call(null,show_name,season,epnumrelative);var state_9867__$1 = (function (){var statearr_9871 = state_9867;(statearr_9871[7] = inst_9858);
return statearr_9871;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9867__$1,5,inst_9859);
} else
{if((state_val_9868 === 1))
{var inst_9848 = cljs.core.deref.call(null,self__.app);var inst_9849 = new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(inst_9848);var inst_9850 = cljs.core.not.call(null,inst_9849);var inst_9851 = cljs.core.deref.call(null,self__.app);var inst_9852 = new cljs.core.Keyword(null,"air-date","air-date",4569745859).cljs$core$IFn$_invoke$arity$1(inst_9851);var inst_9853 = app.core.in_future_QMARK_.call(null,inst_9852);var inst_9854 = cljs.core.not.call(null,inst_9853);var inst_9855 = (inst_9850) && (inst_9854);var state_9867__$1 = state_9867;if(cljs.core.truth_(inst_9855))
{var statearr_9872_9900 = state_9867__$1;(statearr_9872_9900[1] = 2);
} else
{var statearr_9873_9901 = state_9867__$1;(statearr_9873_9901[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_9877 = [null,null,null,null,null,null,null,null];(statearr_9877[0] = state_machine__6137__auto__);
(statearr_9877[1] = 1);
return statearr_9877;
});
var state_machine__6137__auto____1 = (function (state_9867){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_9867);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e9878){if((e9878 instanceof Object))
{var ex__6140__auto__ = e9878;var statearr_9879_9902 = state_9867;(statearr_9879_9902[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9867);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9878;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9903 = state_9867;
state_9867 = G__9903;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_9867){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_9867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_9880 = f__6152__auto__.call(null);(statearr_9880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto__);
return statearr_9880;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
return c__6151__auto__;
});
app.core.t9783.prototype.om$core$IInitState$ = true;
app.core.t9783.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update-chan","update-chan",4688741704),cljs.core.async.chan.call(null)], null);
});
app.core.t9783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9785){var self__ = this;
var _9785__$1 = this;return self__.meta9784;
});
app.core.t9783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9785,meta9784__$1){var self__ = this;
var _9785__$1 = this;return (new app.core.t9783(self__.owner,self__.app,self__.episode_view,meta9784__$1));
});
app.core.__GT_t9783 = (function __GT_t9783(owner__$1,app__$2,episode_view__$1,meta9784){return (new app.core.t9783(owner__$1,app__$2,episode_view__$1,meta9784));
});
}
return (new app.core.t9783(owner,app__$1,episode_view,null));
});
app.core.in_future_QMARK_ = (function in_future_QMARK_(string_date){return (new moment(string_date)).isAfter();
});
app.core.download = (function download(app__$1,sn,token,update_chan){var c__6151__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_9960){var state_val_9961 = (state_9960[1]);if((state_val_9961 === 6))
{var inst_9947 = (state_9960[7]);var inst_9948 = (state_9960[8]);var inst_9949 = (state_9960[9]);var inst_9952 = (state_9960[10]);var inst_9955 = (state_9960[2]);var inst_9956 = new cljs.core.Keyword(null,"magnet","magnet",4227240668).cljs$core$IFn$_invoke$arity$1(inst_9952);var inst_9957 = (function (){var link = inst_9955;var magnet = inst_9952;var season = inst_9949;var epnumrelative = inst_9948;var map__9940 = inst_9947;return ((function (link,magnet,season,epnumrelative,map__9940,inst_9947,inst_9948,inst_9949,inst_9952,inst_9955,inst_9956,state_val_9961){
return (function (id){if(cljs.core.truth_(id))
{return app.core.get_download_percent.call(null,id,app__$1,token,update_chan);
} else
{return null;
}
});
;})(link,magnet,season,epnumrelative,map__9940,inst_9947,inst_9948,inst_9949,inst_9952,inst_9955,inst_9956,state_val_9961))
})();var inst_9958 = app.core.freebox_start_download.call(null,inst_9956,token,inst_9957);var state_9960__$1 = state_9960;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9960__$1,inst_9958);
} else
{if((state_val_9961 === 5))
{var inst_9948 = (state_9960[8]);var inst_9949 = (state_9960[9]);var inst_9952 = (state_9960[2]);var inst_9953 = app.core.get_subtitle_link.call(null,sn,inst_9949,inst_9948);var state_9960__$1 = (function (){var statearr_9962 = state_9960;(statearr_9962[10] = inst_9952);
return statearr_9962;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9960__$1,6,inst_9953);
} else
{if((state_val_9961 === 4))
{var inst_9947 = (state_9960[7]);var inst_9948 = (state_9960[8]);var inst_9949 = (state_9960[9]);var inst_9947__$1 = (state_9960[2]);var inst_9948__$1 = cljs.core.get.call(null,inst_9947__$1,new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025));var inst_9949__$1 = cljs.core.get.call(null,inst_9947__$1,new cljs.core.Keyword(null,"season","season",4402536021));var inst_9950 = app.core.get_magnet_link.call(null,sn,inst_9949__$1,inst_9948__$1);var state_9960__$1 = (function (){var statearr_9963 = state_9960;(statearr_9963[7] = inst_9947__$1);
(statearr_9963[8] = inst_9948__$1);
(statearr_9963[9] = inst_9949__$1);
return statearr_9963;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9960__$1,5,inst_9950);
} else
{if((state_val_9961 === 3))
{var inst_9941 = (state_9960[11]);var state_9960__$1 = state_9960;var statearr_9964_9976 = state_9960__$1;(statearr_9964_9976[2] = inst_9941);
(statearr_9964_9976[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9961 === 2))
{var inst_9941 = (state_9960[11]);var inst_9944 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9941);var state_9960__$1 = state_9960;var statearr_9965_9977 = state_9960__$1;(statearr_9965_9977[2] = inst_9944);
(statearr_9965_9977[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9961 === 1))
{var inst_9941 = (state_9960[11]);var inst_9941__$1 = cljs.core.deref.call(null,app__$1);var inst_9942 = cljs.core.seq_QMARK_.call(null,inst_9941__$1);var state_9960__$1 = (function (){var statearr_9966 = state_9960;(statearr_9966[11] = inst_9941__$1);
return statearr_9966;
})();if(inst_9942)
{var statearr_9967_9978 = state_9960__$1;(statearr_9967_9978[1] = 2);
} else
{var statearr_9968_9979 = state_9960__$1;(statearr_9968_9979[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_9972 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9972[0] = state_machine__6137__auto__);
(statearr_9972[1] = 1);
return statearr_9972;
});
var state_machine__6137__auto____1 = (function (state_9960){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_9960);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e9973){if((e9973 instanceof Object))
{var ex__6140__auto__ = e9973;var statearr_9974_9980 = state_9960;(statearr_9974_9980[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9960);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9973;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9981 = state_9960;
state_9960 = G__9981;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_9960){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_9960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_9975 = f__6152__auto__.call(null);(statearr_9975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto__);
return statearr_9975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
return c__6151__auto__;
});
app.core.download_on_device = (function download_on_device(app__$1,state){var c__6151__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_10041){var state_val_10042 = (state_10041[1]);if((state_val_10042 === 3))
{var inst_10024 = (state_10041[7]);var inst_10028 = (state_10041[2]);var inst_10029 = app.core.subtitle_name_from_filename.call(null,inst_10028);var inst_10030 = [cljs.core.str(inst_10029),cljs.core.str(".srt")].join('');var inst_10031 = goog.crypt.base64.encodeString(inst_10030);var inst_10032 = goog.crypt.base64.encodeString(inst_10028);var inst_10033 = [new cljs.core.Keyword(null,"on-device","on-device",633333110)];var inst_10034 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10033,null));var inst_10035 = om.core.update_BANG_.call(null,app__$1,cljs.core.assoc_in,inst_10034,inst_10028);var inst_10036 = [cljs.core.str(inst_10024),cljs.core.str(inst_10032)].join('');var inst_10037 = [cljs.core.str(inst_10024),cljs.core.str(inst_10031)].join('');var inst_10038 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state);var inst_10039 = window.downloadOnDevice(inst_10036,inst_10028,inst_10037,inst_10030,inst_10038);var state_10041__$1 = (function (){var statearr_10043 = state_10041;(statearr_10043[8] = inst_10035);
return statearr_10043;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10041__$1,inst_10039);
} else
{if((state_val_10042 === 2))
{var inst_10024 = (state_10041[7]);var inst_10022 = (state_10041[2]);var inst_10023 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_10022);var inst_10024__$1 = new cljs.core.Keyword(null,"download_dir","download_dir",2123295688).cljs$core$IFn$_invoke$arity$1(inst_10023);var inst_10025 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state);var inst_10026 = app.core.find_downloaded_name.call(null,inst_10024__$1,inst_10022,inst_10025);var state_10041__$1 = (function (){var statearr_10044 = state_10041;(statearr_10044[7] = inst_10024__$1);
return statearr_10044;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10041__$1,3,inst_10026);
} else
{if((state_val_10042 === 1))
{var inst_10017 = cljs.core.deref.call(null,app__$1);var inst_10018 = new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(inst_10017);var inst_10019 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state);var inst_10020 = app.core.freebox_get_download_details.call(null,inst_10018,inst_10019);var state_10041__$1 = state_10041;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10041__$1,2,inst_10020);
} else
{return null;
}
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_10048 = [null,null,null,null,null,null,null,null,null];(statearr_10048[0] = state_machine__6137__auto__);
(statearr_10048[1] = 1);
return statearr_10048;
});
var state_machine__6137__auto____1 = (function (state_10041){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_10041);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e10049){if((e10049 instanceof Object))
{var ex__6140__auto__ = e10049;var statearr_10050_10052 = state_10041;(statearr_10050_10052[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10041);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10049;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10053 = state_10041;
state_10041 = G__10053;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_10041){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_10041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_10051 = f__6152__auto__.call(null);(statearr_10051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto__);
return statearr_10051;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
return c__6151__auto__;
});
app.core.subtitle_name_from_filename = (function subtitle_name_from_filename(file_name){if(!(cljs.core._EQ_.call(null,file_name.indexOf("."),-1)))
{return clojure.string.join.call(null,".",cljs.core.butlast.call(null,clojure.string.split.call(null,file_name,/\./)));
} else
{return file_name;
}
});
app.core.find_file_in_dir = (function find_file_in_dir(path,token){var c__6151__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_10083){var state_val_10084 = (state_10083[1]);if((state_val_10084 === 2))
{var inst_10076 = (state_10083[2]);var inst_10077 = cljs.core.prn.call(null,inst_10076);var inst_10078 = (function (){var path_infos = inst_10076;return ((function (path_infos,inst_10076,inst_10077,state_val_10084){
return (function (p1__10054_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mimetype","mimetype",3917704416).cljs$core$IFn$_invoke$arity$1(p1__10054_SHARP_),"video/mp4");
});
;})(path_infos,inst_10076,inst_10077,state_val_10084))
})();var inst_10079 = cljs.core.filter.call(null,inst_10078,inst_10076);var inst_10080 = cljs.core.first.call(null,inst_10079);var inst_10081 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_10080);var state_10083__$1 = (function (){var statearr_10085 = state_10083;(statearr_10085[7] = inst_10077);
return statearr_10085;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10083__$1,inst_10081);
} else
{if((state_val_10084 === 1))
{var inst_10074 = app.core.freebox_ls_path.call(null,path,token);var state_10083__$1 = state_10083;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10083__$1,2,inst_10074);
} else
{return null;
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_10089 = [null,null,null,null,null,null,null,null];(statearr_10089[0] = state_machine__6137__auto__);
(statearr_10089[1] = 1);
return statearr_10089;
});
var state_machine__6137__auto____1 = (function (state_10083){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_10083);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e10090){if((e10090 instanceof Object))
{var ex__6140__auto__ = e10090;var statearr_10091_10093 = state_10083;(statearr_10091_10093[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10083);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10090;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10094 = state_10083;
state_10083 = G__10094;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_10083){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_10083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_10092 = f__6152__auto__.call(null);(statearr_10092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto__);
return statearr_10092;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
return c__6151__auto__;
});
app.core.find_downloaded_name = (function find_downloaded_name(path,details,token){var c__6151__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_10130){var state_val_10131 = (state_10130[1]);if((state_val_10131 === 5))
{var inst_10126 = (state_10130[2]);var state_10130__$1 = state_10130;var statearr_10132_10143 = state_10130__$1;(statearr_10132_10143[2] = inst_10126);
(statearr_10132_10143[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10131 === 4))
{var inst_10128 = (state_10130[2]);var state_10130__$1 = state_10130;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10130__$1,inst_10128);
} else
{if((state_val_10131 === 3))
{var inst_10124 = app.core.find_file_in_dir.call(null,path,token);var state_10130__$1 = state_10130;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10130__$1,5,inst_10124);
} else
{if((state_val_10131 === 2))
{var inst_10121 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(details);var inst_10122 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_10121);var state_10130__$1 = state_10130;var statearr_10133_10144 = state_10130__$1;(statearr_10133_10144[2] = inst_10122);
(statearr_10133_10144[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10131 === 1))
{var inst_10119 = cljs.core._EQ_.call(null,path,"L0Rpc3F1ZSBkdXIvVmlkw6lvcy8=");var state_10130__$1 = state_10130;if(inst_10119)
{var statearr_10134_10145 = state_10130__$1;(statearr_10134_10145[1] = 2);
} else
{var statearr_10135_10146 = state_10130__$1;(statearr_10135_10146[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_10139 = [null,null,null,null,null,null,null];(statearr_10139[0] = state_machine__6137__auto__);
(statearr_10139[1] = 1);
return statearr_10139;
});
var state_machine__6137__auto____1 = (function (state_10130){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_10130);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e10140){if((e10140 instanceof Object))
{var ex__6140__auto__ = e10140;var statearr_10141_10147 = state_10130;(statearr_10141_10147[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10130);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10140;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10148 = state_10130;
state_10130 = G__10148;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_10130){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_10130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_10142 = f__6152__auto__.call(null);(statearr_10142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto__);
return statearr_10142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
return c__6151__auto__;
});
app.core.downloadSubs = (function downloadSubs(link,token,download_id,show,season,ep){var c__6151__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_10190){var state_val_10191 = (state_10190[1]);if((state_val_10191 === 4))
{var inst_10183 = (state_10190[7]);var inst_10186 = (state_10190[2]);var inst_10187 = app.core.addic7ed_url.call(null,show,season,ep);var inst_10188 = window.downloadSub(link,token,inst_10183,inst_10186,inst_10187);var state_10190__$1 = state_10190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10190__$1,inst_10188);
} else
{if((state_val_10191 === 3))
{var inst_10179 = (state_10190[8]);var inst_10183 = (state_10190[7]);var inst_10182 = (state_10190[2]);var inst_10183__$1 = app.core.subtitle_name_from_filename.call(null,inst_10182);var inst_10184 = app.core.freebox_get_upload_id.call(null,token,inst_10179,inst_10183__$1);var state_10190__$1 = (function (){var statearr_10192 = state_10190;(statearr_10192[7] = inst_10183__$1);
return statearr_10192;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10190__$1,4,inst_10184);
} else
{if((state_val_10191 === 2))
{var inst_10179 = (state_10190[8]);var inst_10177 = (state_10190[2]);var inst_10178 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_10177);var inst_10179__$1 = new cljs.core.Keyword(null,"download_dir","download_dir",2123295688).cljs$core$IFn$_invoke$arity$1(inst_10178);var inst_10180 = app.core.find_downloaded_name.call(null,inst_10179__$1,inst_10177,token);var state_10190__$1 = (function (){var statearr_10193 = state_10190;(statearr_10193[8] = inst_10179__$1);
return statearr_10193;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10190__$1,3,inst_10180);
} else
{if((state_val_10191 === 1))
{var inst_10175 = app.core.freebox_get_download_details.call(null,download_id,token);var state_10190__$1 = state_10190;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10190__$1,2,inst_10175);
} else
{return null;
}
}
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_10197 = [null,null,null,null,null,null,null,null,null];(statearr_10197[0] = state_machine__6137__auto__);
(statearr_10197[1] = 1);
return statearr_10197;
});
var state_machine__6137__auto____1 = (function (state_10190){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_10190);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e10198){if((e10198 instanceof Object))
{var ex__6140__auto__ = e10198;var statearr_10199_10201 = state_10190;(statearr_10199_10201[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10190);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10202 = state_10190;
state_10190 = G__10202;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_10190){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_10190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_10200 = f__6152__auto__.call(null);(statearr_10200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto__);
return statearr_10200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
return c__6151__auto__;
});
app.core.addic7ed_url = (function addic7ed_url(showname,season,episode){return [cljs.core.str("http://www.addic7ed.com/serie/"),cljs.core.str(showname),cljs.core.str("/"),cljs.core.str(season),cljs.core.str("/"),cljs.core.str(episode),cljs.core.str("/addic7ed")].join('');
});
app.core.get_download_percent = (function get_download_percent(id,app__$1,token,update_chan){om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"download-id","download-id",4097684466),(function (_){return id;
}));
var c__6151__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_10278){var state_val_10279 = (state_10278[1]);if((state_val_10279 === 1))
{var state_10278__$1 = state_10278;var statearr_10280_10299 = state_10278__$1;(statearr_10280_10299[2] = null);
(statearr_10280_10299[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10279 === 2))
{var inst_10252 = app.core.freebox_get_download_details.call(null,id,token);var state_10278__$1 = state_10278;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10278__$1,4,inst_10252);
} else
{if((state_val_10279 === 3))
{var inst_10276 = (state_10278[2]);var state_10278__$1 = state_10278;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10278__$1,inst_10276);
} else
{if((state_val_10279 === 4))
{var inst_10254 = (state_10278[7]);var inst_10254__$1 = (state_10278[2]);var inst_10255 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_10254__$1);var inst_10256 = new cljs.core.Keyword(null,"rx_pct","rx_pct",4391390938).cljs$core$IFn$_invoke$arity$1(inst_10255);var inst_10257 = (inst_10256 / 100);var inst_10258 = new cljs.core.Keyword(null,"success","success",3441701749).cljs$core$IFn$_invoke$arity$1(inst_10254__$1);var state_10278__$1 = (function (){var statearr_10281 = state_10278;(statearr_10281[7] = inst_10254__$1);
(statearr_10281[8] = inst_10257);
return statearr_10281;
})();if(cljs.core.truth_(inst_10258))
{var statearr_10282_10300 = state_10278__$1;(statearr_10282_10300[1] = 5);
} else
{var statearr_10283_10301 = state_10278__$1;(statearr_10283_10301[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10279 === 5))
{var inst_10260 = cljs.core.async.timeout.call(null,5000);var state_10278__$1 = state_10278;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10278__$1,8,inst_10260);
} else
{if((state_val_10279 === 6))
{var inst_10254 = (state_10278[7]);var inst_10257 = (state_10278[8]);var inst_10271 = (function (){var pct = inst_10257;var res = inst_10254;return ((function (pct,res,inst_10254,inst_10257,state_val_10279){
return (function (_){return null;
});
;})(pct,res,inst_10254,inst_10257,state_val_10279))
})();var inst_10272 = om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"download-id","download-id",4097684466),inst_10271);var state_10278__$1 = state_10278;var statearr_10284_10302 = state_10278__$1;(statearr_10284_10302[2] = inst_10272);
(statearr_10284_10302[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10279 === 7))
{var inst_10274 = (state_10278[2]);var state_10278__$1 = state_10278;var statearr_10285_10303 = state_10278__$1;(statearr_10285_10303[2] = inst_10274);
(statearr_10285_10303[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10279 === 8))
{var inst_10257 = (state_10278[8]);var inst_10262 = (state_10278[2]);var inst_10263 = cljs.core.async.put_BANG_.call(null,update_chan,inst_10257);var inst_10264 = (inst_10257 < 100);var state_10278__$1 = (function (){var statearr_10286 = state_10278;(statearr_10286[9] = inst_10262);
(statearr_10286[10] = inst_10263);
return statearr_10286;
})();if(cljs.core.truth_(inst_10264))
{var statearr_10287_10304 = state_10278__$1;(statearr_10287_10304[1] = 9);
} else
{var statearr_10288_10305 = state_10278__$1;(statearr_10288_10305[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10279 === 9))
{var state_10278__$1 = state_10278;var statearr_10289_10306 = state_10278__$1;(statearr_10289_10306[2] = null);
(statearr_10289_10306[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10279 === 10))
{var state_10278__$1 = state_10278;var statearr_10290_10307 = state_10278__$1;(statearr_10290_10307[2] = null);
(statearr_10290_10307[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10279 === 11))
{var inst_10269 = (state_10278[2]);var state_10278__$1 = state_10278;var statearr_10291_10308 = state_10278__$1;(statearr_10291_10308[2] = inst_10269);
(statearr_10291_10308[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_10295 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10295[0] = state_machine__6137__auto__);
(statearr_10295[1] = 1);
return statearr_10295;
});
var state_machine__6137__auto____1 = (function (state_10278){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_10278);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e10296){if((e10296 instanceof Object))
{var ex__6140__auto__ = e10296;var statearr_10297_10309 = state_10278;(statearr_10297_10309[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10278);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10296;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10310 = state_10278;
state_10278 = G__10310;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_10278){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_10278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_10298 = f__6152__auto__.call(null);(statearr_10298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto__);
return statearr_10298;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
return c__6151__auto__;
});
app.core.admin_actions = (function admin_actions(app__$1){return React.DOM.div({"className": "app__sidebar__admins"},React.DOM.button({"onClick": (function (){return om.core.transact_BANG_.call(null,app__$1,(function (_){return app.core.defo_state;
}));
}), "className": "topcoat-button"},"Clear all"),React.DOM.br(null),React.DOM.button({"onClick": (function (){om.core.update_BANG_.call(null,app__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-token","app-token",1425759935)], null),null);
return app.core.check_freebox_status.call(null,app__$1);
}), "className": "topcoat-button"},"Clear box"),React.DOM.button({"onClick": (function (){return om.core.transact_BANG_.call(null,app__$1,(function (st){return cljs.core.assoc.call(null,app.core.defo_state,new cljs.core.Keyword(null,"app-token","app-token",1425759935),new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(st));
}));
}), "className": "topcoat-button"},"Clear shows"));
});
app.core.tivi_view = (function tivi_view(app__$1,owner){if(typeof app.core.t10357 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t10357 = (function (owner,app,tivi_view,meta10358){
this.owner = owner;
this.app = app;
this.tivi_view = tivi_view;
this.meta10358 = meta10358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t10357.cljs$lang$type = true;
app.core.t10357.cljs$lang$ctorStr = "app.core/t10357";
app.core.t10357.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"app.core/t10357");
});
app.core.t10357.prototype.om$core$IRenderState$ = true;
app.core.t10357.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "app"},React.DOM.aside({"className": "app__sidebar"},om.core.build.call(null,app.core.topcoat_list_view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"items","items",1114430258),new cljs.core.Keyword(null,"shows","shows",1123317896).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"display","display",2685668404),(function (p1__10311_SHARP_){return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__10311_SHARP_);
}),new cljs.core.Keyword(null,"header","header",4087600639),"Shows",new cljs.core.Keyword(null,"listCls","listCls",1195843358),"shows",new cljs.core.Keyword(null,"click","click",1108654330),(function (p1__10312_SHARP_){return om.core.update_BANG_.call(null,self__.app,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267)], null),p1__10312_SHARP_);
})], null),self__.app)),om.core.build.call(null,app.core.add_show_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add","add",1014000659),new cljs.core.Keyword(null,"add","add",1014000659).cljs$core$IFn$_invoke$arity$1(state)], null)], null)),app.core.admin_actions.call(null,self__.app)),React.DOM.section({"className": "app__details"},app.core.display_show.call(null,new cljs.core.Keyword(null,"watches","watches",2139868463).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(self__.app))));
});
app.core.t10357.prototype.om$core$IWillMount$ = true;
app.core.t10357.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var add = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"add","add",1014000659));var main = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"main","main",1017248043));app.core.check_freebox_status.call(null,self__.app);
var c__6151__auto___10401 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_10368){var state_val_10369 = (state_10368[1]);if((state_val_10369 === 4))
{var inst_10362 = (state_10368[2]);var inst_10363 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"shows","shows",1123317896),cljs.core.conj,inst_10362);var state_10368__$1 = (function (){var statearr_10370 = state_10368;(statearr_10370[7] = inst_10363);
return statearr_10370;
})();var statearr_10371_10402 = state_10368__$1;(statearr_10371_10402[2] = null);
(statearr_10371_10402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 3))
{var inst_10366 = (state_10368[2]);var state_10368__$1 = state_10368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10368__$1,inst_10366);
} else
{if((state_val_10369 === 2))
{var state_10368__$1 = state_10368;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10368__$1,4,add);
} else
{if((state_val_10369 === 1))
{var state_10368__$1 = state_10368;var statearr_10372_10403 = state_10368__$1;(statearr_10372_10403[2] = null);
(statearr_10372_10403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_10376 = [null,null,null,null,null,null,null,null];(statearr_10376[0] = state_machine__6137__auto__);
(statearr_10376[1] = 1);
return statearr_10376;
});
var state_machine__6137__auto____1 = (function (state_10368){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_10368);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e10377){if((e10377 instanceof Object))
{var ex__6140__auto__ = e10377;var statearr_10378_10404 = state_10368;(statearr_10378_10404[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10368);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10377;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10405 = state_10368;
state_10368 = G__10405;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_10368){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_10368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_10379 = f__6152__auto__.call(null);(statearr_10379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto___10401);
return statearr_10379;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
var c__6151__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_10389){var state_val_10390 = (state_10389[1]);if((state_val_10390 === 4))
{var inst_10382 = (state_10389[2]);var inst_10383 = (function (){var current = inst_10382;return ((function (current,inst_10382,state_val_10390){
return (function (c){return current;
});
;})(current,inst_10382,state_val_10390))
})();var inst_10384 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"current","current",2140844267),inst_10383);var state_10389__$1 = (function (){var statearr_10391 = state_10389;(statearr_10391[7] = inst_10384);
return statearr_10391;
})();var statearr_10392_10406 = state_10389__$1;(statearr_10392_10406[2] = null);
(statearr_10392_10406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10390 === 3))
{var inst_10387 = (state_10389[2]);var state_10389__$1 = state_10389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10389__$1,inst_10387);
} else
{if((state_val_10390 === 2))
{var state_10389__$1 = state_10389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10389__$1,4,main);
} else
{if((state_val_10390 === 1))
{var state_10389__$1 = state_10389;var statearr_10393_10407 = state_10389__$1;(statearr_10393_10407[2] = null);
(statearr_10393_10407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_10397 = [null,null,null,null,null,null,null,null];(statearr_10397[0] = state_machine__6137__auto__);
(statearr_10397[1] = 1);
return statearr_10397;
});
var state_machine__6137__auto____1 = (function (state_10389){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_10389);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e10398){if((e10398 instanceof Object))
{var ex__6140__auto__ = e10398;var statearr_10399_10408 = state_10389;(statearr_10399_10408[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10389);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10398;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10409 = state_10389;
state_10389 = G__10409;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_10389){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_10389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_10400 = f__6152__auto__.call(null);(statearr_10400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto__);
return statearr_10400;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
return c__6151__auto__;
});
app.core.t10357.prototype.om$core$IInitState$ = true;
app.core.t10357.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",1014000659),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"main","main",1017248043),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",1017196294),new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.Keyword(null,"show","show",1017433711),"test"], null)], null);
});
app.core.t10357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10359){var self__ = this;
var _10359__$1 = this;return self__.meta10358;
});
app.core.t10357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10359,meta10358__$1){var self__ = this;
var _10359__$1 = this;return (new app.core.t10357(self__.owner,self__.app,self__.tivi_view,meta10358__$1));
});
app.core.__GT_t10357 = (function __GT_t10357(owner__$1,app__$2,tivi_view__$1,meta10358){return (new app.core.t10357(owner__$1,app__$2,tivi_view__$1,meta10358));
});
}
return (new app.core.t10357(owner,app__$1,tivi_view,null));
});
app.core.check_freebox_status = (function check_freebox_status(app__$1){if(cljs.core.truth_(new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app__$1))))
{return app.core.freebox_session.call(null,new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app__$1)),(function (p1__10410_SHARP_){cljs.core.prn.call(null,p1__10410_SHARP_);
return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"session-token","session-token",4078795636),(function (_){return p1__10410_SHARP_;
}));
}));
} else
{return app.core.freebox_autorize.call(null,(function (p1__10411_SHARP_){return app.core.check_track.call(null,app__$1,p1__10411_SHARP_);
}));
}
});
app.core.check_track = (function check_track(app__$1,aut){var c__6151__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6152__auto__ = (function (){var switch__6136__auto__ = (function (state_10484){var state_val_10485 = (state_10484[1]);if((state_val_10485 === 9))
{var inst_10472 = (state_10484[2]);var inst_10461 = inst_10472;var state_10484__$1 = (function (){var statearr_10486 = state_10484;(statearr_10486[7] = inst_10461);
return statearr_10486;
})();var statearr_10487_10502 = state_10484__$1;(statearr_10487_10502[2] = null);
(statearr_10487_10502[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 8))
{var inst_10468 = (state_10484[2]);var inst_10469 = new cljs.core.Keyword(null,"track_id","track_id",2284383233).cljs$core$IFn$_invoke$arity$1(aut);var inst_10470 = app.core.freebox_track_id.call(null,inst_10469);var state_10484__$1 = (function (){var statearr_10488 = state_10484;(statearr_10488[8] = inst_10468);
return statearr_10488;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10484__$1,9,inst_10470);
} else
{if((state_val_10485 === 7))
{var inst_10480 = (state_10484[2]);var state_10484__$1 = state_10484;var statearr_10489_10503 = state_10484__$1;(statearr_10489_10503[2] = inst_10480);
(statearr_10489_10503[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 6))
{var inst_10461 = (state_10484[7]);var inst_10475 = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(inst_10461);var inst_10476 = new cljs.core.Keyword(null,"app_token","app_token",2857217485).cljs$core$IFn$_invoke$arity$1(aut);var inst_10477 = new cljs.core.Keyword(null,"challenge","challenge",2416537557).cljs$core$IFn$_invoke$arity$1(inst_10461);var inst_10478 = app.core.manage_pending.call(null,inst_10475,inst_10476,inst_10477,app__$1);var state_10484__$1 = state_10484;var statearr_10490_10504 = state_10484__$1;(statearr_10490_10504[2] = inst_10478);
(statearr_10490_10504[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 5))
{var inst_10466 = cljs.core.async.timeout.call(null,3000);var state_10484__$1 = state_10484;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10484__$1,8,inst_10466);
} else
{if((state_val_10485 === 4))
{var inst_10482 = (state_10484[2]);var state_10484__$1 = state_10484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10484__$1,inst_10482);
} else
{if((state_val_10485 === 3))
{var inst_10461 = (state_10484[7]);var inst_10463 = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(inst_10461);var inst_10464 = cljs.core._EQ_.call(null,"pending",inst_10463);var state_10484__$1 = state_10484;if(inst_10464)
{var statearr_10491_10505 = state_10484__$1;(statearr_10491_10505[1] = 5);
} else
{var statearr_10492_10506 = state_10484__$1;(statearr_10492_10506[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 2))
{var inst_10460 = (state_10484[2]);var inst_10461 = inst_10460;var state_10484__$1 = (function (){var statearr_10493 = state_10484;(statearr_10493[7] = inst_10461);
return statearr_10493;
})();var statearr_10494_10507 = state_10484__$1;(statearr_10494_10507[2] = null);
(statearr_10494_10507[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 1))
{var inst_10457 = new cljs.core.Keyword(null,"track_id","track_id",2284383233).cljs$core$IFn$_invoke$arity$1(aut);var inst_10458 = app.core.freebox_track_id.call(null,inst_10457);var state_10484__$1 = state_10484;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10484__$1,2,inst_10458);
} else
{return null;
}
}
}
}
}
}
}
}
}
});return ((function (switch__6136__auto__){
return (function() {
var state_machine__6137__auto__ = null;
var state_machine__6137__auto____0 = (function (){var statearr_10498 = [null,null,null,null,null,null,null,null,null];(statearr_10498[0] = state_machine__6137__auto__);
(statearr_10498[1] = 1);
return statearr_10498;
});
var state_machine__6137__auto____1 = (function (state_10484){while(true){
var ret_value__6138__auto__ = (function (){try{while(true){
var result__6139__auto__ = switch__6136__auto__.call(null,state_10484);if(cljs.core.keyword_identical_QMARK_.call(null,result__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6139__auto__;
}
break;
}
}catch (e10499){if((e10499 instanceof Object))
{var ex__6140__auto__ = e10499;var statearr_10500_10508 = state_10484;(statearr_10500_10508[5] = ex__6140__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10484);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10499;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10509 = state_10484;
state_10484 = G__10509;
continue;
}
} else
{return ret_value__6138__auto__;
}
break;
}
});
state_machine__6137__auto__ = function(state_10484){
switch(arguments.length){
case 0:
return state_machine__6137__auto____0.call(this);
case 1:
return state_machine__6137__auto____1.call(this,state_10484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6137__auto____0;
state_machine__6137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6137__auto____1;
return state_machine__6137__auto__;
})()
;})(switch__6136__auto__))
})();var state__6153__auto__ = (function (){var statearr_10501 = f__6152__auto__.call(null);(statearr_10501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6151__auto__);
return statearr_10501;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6153__auto__);
}));
return c__6151__auto__;
});
app.core.manage_pending = (function manage_pending(status,app_token,challenge,app__$1){cljs.core.prn.call(null,"manage pending");
if(cljs.core._EQ_.call(null,"granted",status))
{return app.core.freebox_session_save.call(null,app.core.freebox_make_password.call(null,challenge,app_token),(function (p1__10510_SHARP_){om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"session-token","session-token",4078795636),(function (_){return p1__10510_SHARP_;
}));
return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"app-token","app-token",1425759935),(function (_){return app_token;
}));
}));
} else
{return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"app-token","app-token",1425759935),(function (_){return null;
}));
}
});
om.core.root.call(null,app.core.app_state,app.core.tivi_view,document.getElementById("app"));

//# sourceMappingURL=core.js.map