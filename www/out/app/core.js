// Compiled by ClojureScript 0.0-2156
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
var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_9361){var state_val_9362 = (state_9361[1]);if((state_val_9362 === 2))
{var inst_9349 = (state_9361[2]);var inst_9350 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_9349);var inst_9351 = app.core.parse_xml_shows.call(null,inst_9350);var inst_9352 = (function (){var data = inst_9351;var response = inst_9349;return ((function (data,response,inst_9349,inst_9350,inst_9351,state_val_9362){
return (function (sh){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.get.call(null,sh,"name"),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,sh,"showid")], null);
});
;})(data,response,inst_9349,inst_9350,inst_9351,state_val_9362))
})();var inst_9353 = cljs.core.get.call(null,inst_9351,"Results");var inst_9354 = cljs.core.get.call(null,inst_9353,"show");var inst_9355 = [inst_9354];var inst_9356 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9355,null));var inst_9357 = cljs.core.flatten.call(null,inst_9356);var inst_9358 = cljs.core.map.call(null,inst_9352,inst_9357);var inst_9359 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"shows","shows",1123317896),inst_9358);var state_9361__$1 = state_9361;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9361__$1,inst_9359);
} else
{if((state_val_9362 === 1))
{var inst_9343 = [cljs.core.str("http://services.tvrage.com/feeds/search.php?show="),cljs.core.str(query)].join('');var inst_9344 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",3165820380)];var inst_9345 = [false];var inst_9346 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9344,inst_9345);var inst_9347 = cljs_http.client.get.call(null,inst_9343,inst_9346);var state_9361__$1 = state_9361;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9361__$1,2,inst_9347);
} else
{return null;
}
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_9366 = [null,null,null,null,null,null,null];(statearr_9366[0] = state_machine__6138__auto__);
(statearr_9366[1] = 1);
return statearr_9366;
});
var state_machine__6138__auto____1 = (function (state_9361){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_9361);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e9367){if((e9367 instanceof Object))
{var ex__6141__auto__ = e9367;var statearr_9368_9370 = state_9361;(statearr_9368_9370[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9361);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9367;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9371 = state_9361;
state_9361 = G__9371;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_9361){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_9361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_9369 = f__6153__auto__.call(null);(statearr_9369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_9369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
app.core.parse_episode_list = (function parse_episode_list(show,callb){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_9415){var state_val_9416 = (state_9415[1]);if((state_val_9416 === 2))
{var inst_9404 = (state_9415[2]);var inst_9405 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_9404);var inst_9406 = app.core.parse_xml_shows.call(null,inst_9405);var inst_9407 = cljs.core.get.call(null,inst_9406,"Show");var inst_9408 = cljs.core.get.call(null,inst_9407,"Episodelist");var inst_9409 = cljs.core.get.call(null,inst_9408,"Season");var inst_9410 = [inst_9409];var inst_9411 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9410,null));var inst_9412 = cljs.core.flatten.call(null,inst_9411);var inst_9413 = callb.call(null,inst_9412);var state_9415__$1 = state_9415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9415__$1,inst_9413);
} else
{if((state_val_9416 === 1))
{var inst_9398 = [cljs.core.str("http://services.tvrage.com/feeds/episode_list.php?sid="),cljs.core.str(show)].join('');var inst_9399 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",3165820380)];var inst_9400 = [false];var inst_9401 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9399,inst_9400);var inst_9402 = cljs_http.client.get.call(null,inst_9398,inst_9401);var state_9415__$1 = state_9415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9415__$1,2,inst_9402);
} else
{return null;
}
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_9420 = [null,null,null,null,null,null,null];(statearr_9420[0] = state_machine__6138__auto__);
(statearr_9420[1] = 1);
return statearr_9420;
});
var state_machine__6138__auto____1 = (function (state_9415){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_9415);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e9421){if((e9421 instanceof Object))
{var ex__6141__auto__ = e9421;var statearr_9422_9424 = state_9415;(statearr_9422_9424[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9415);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9421;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9425 = state_9415;
state_9415 = G__9425;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_9415){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_9415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_9423 = f__6153__auto__.call(null);(statearr_9423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_9423;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
app.core.format_number_zero = (function format_number_zero(num){if((num < 10))
{return [cljs.core.str(0),cljs.core.str(num)].join('');
} else
{return [cljs.core.str(num)].join('');
}
});
app.core.get_magnet_link = (function get_magnet_link(showw,season,episode){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_9482){var state_val_9483 = (state_9482[1]);if((state_val_9483 === 2))
{var inst_9468 = (state_9482[2]);var inst_9469 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_9468);var inst_9470 = $(inst_9469);var inst_9471 = inst_9470.find(".detName:first-child + a");var inst_9472 = inst_9471.attr("href");var inst_9473 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_9468);var inst_9474 = $(inst_9473);var inst_9475 = inst_9474.find(".detName a");var inst_9476 = inst_9475.first();var inst_9477 = inst_9476.text();var inst_9478 = [new cljs.core.Keyword(null,"magnet","magnet",4227240668),new cljs.core.Keyword(null,"file-name","file-name",3946227630)];var inst_9479 = [inst_9472,inst_9477];var inst_9480 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9478,inst_9479);var state_9482__$1 = state_9482;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9482__$1,inst_9480);
} else
{if((state_val_9483 === 1))
{var inst_9459 = app.core.format_number_zero.call(null,season);var inst_9460 = app.core.format_number_zero.call(null,episode);var inst_9461 = encodeURIComponent(showw);var inst_9462 = [cljs.core.str("http://thepiratebay.se/search/"),cljs.core.str(inst_9461),cljs.core.str(" s"),cljs.core.str(inst_9459),cljs.core.str("e"),cljs.core.str(episode),cljs.core.str("/0/7/0")].join('');var inst_9463 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",3165820380)];var inst_9464 = [false];var inst_9465 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9463,inst_9464);var inst_9466 = cljs_http.client.get.call(null,inst_9462,inst_9465);var state_9482__$1 = (function (){var statearr_9484 = state_9482;(statearr_9484[7] = inst_9460);
return statearr_9484;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9482__$1,2,inst_9466);
} else
{return null;
}
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_9488 = [null,null,null,null,null,null,null,null];(statearr_9488[0] = state_machine__6138__auto__);
(statearr_9488[1] = 1);
return statearr_9488;
});
var state_machine__6138__auto____1 = (function (state_9482){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_9482);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e9489){if((e9489 instanceof Object))
{var ex__6141__auto__ = e9489;var statearr_9490_9492 = state_9482;(statearr_9490_9492[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9482);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9493 = state_9482;
state_9482 = G__9493;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_9482){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_9482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_9491 = f__6153__auto__.call(null);(statearr_9491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_9491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
app.core.get_subtitle_link = (function get_subtitle_link(show,season,episode){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_9560){var state_val_9561 = (state_9560[1]);if((state_val_9561 === 8))
{var inst_9558 = (state_9560[2]);var state_9560__$1 = state_9560;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9560__$1,inst_9558);
} else
{if((state_val_9561 === 7))
{var state_9560__$1 = state_9560;var statearr_9562_9578 = state_9560__$1;(statearr_9562_9578[2] = null);
(statearr_9562_9578[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9561 === 6))
{var inst_9548 = (state_9560[7]);var inst_9555 = [cljs.core.str("http://www.addic7ed.com"),cljs.core.str(inst_9548)].join('');var state_9560__$1 = state_9560;var statearr_9563_9579 = state_9560__$1;(statearr_9563_9579[2] = inst_9555);
(statearr_9563_9579[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9561 === 5))
{var inst_9553 = (state_9560[2]);var state_9560__$1 = state_9560;if(cljs.core.truth_(inst_9553))
{var statearr_9564_9580 = state_9560__$1;(statearr_9564_9580[1] = 6);
} else
{var statearr_9565_9581 = state_9560__$1;(statearr_9565_9581[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9561 === 4))
{var inst_9548 = (state_9560[7]);var state_9560__$1 = state_9560;var statearr_9566_9582 = state_9560__$1;(statearr_9566_9582[2] = inst_9548);
(statearr_9566_9582[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9561 === 3))
{var inst_9547 = (state_9560[8]);var inst_9550 = cljs.core._EQ_.call(null,inst_9547,"Completed");var state_9560__$1 = state_9560;var statearr_9567_9583 = state_9560__$1;(statearr_9567_9583[2] = inst_9550);
(statearr_9567_9583[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9561 === 2))
{var inst_9548 = (state_9560[7]);var inst_9539 = (state_9560[2]);var inst_9540 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_9539);var inst_9541 = $(inst_9540);var inst_9542 = inst_9541.find(".buttonDownload");var inst_9543 = inst_9542.first();var inst_9544 = inst_9543.parent();var inst_9545 = inst_9544.prev();var inst_9546 = inst_9545.text();var inst_9547 = inst_9546.trim();var inst_9548__$1 = inst_9542.attr("href");var state_9560__$1 = (function (){var statearr_9568 = state_9560;(statearr_9568[7] = inst_9548__$1);
(statearr_9568[8] = inst_9547);
return statearr_9568;
})();if(cljs.core.truth_(inst_9548__$1))
{var statearr_9569_9584 = state_9560__$1;(statearr_9569_9584[1] = 3);
} else
{var statearr_9570_9585 = state_9560__$1;(statearr_9570_9585[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9561 === 1))
{var inst_9536 = [cljs.core.str("http://www.addic7ed.com/serie/"),cljs.core.str(show),cljs.core.str("/"),cljs.core.str(season),cljs.core.str("/"),cljs.core.str(episode),cljs.core.str("/8")].join('');var inst_9537 = cljs_http.client.get.call(null,inst_9536);var state_9560__$1 = state_9560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9560__$1,2,inst_9537);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_9574 = [null,null,null,null,null,null,null,null,null];(statearr_9574[0] = state_machine__6138__auto__);
(statearr_9574[1] = 1);
return statearr_9574;
});
var state_machine__6138__auto____1 = (function (state_9560){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_9560);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e9575){if((e9575 instanceof Object))
{var ex__6141__auto__ = e9575;var statearr_9576_9586 = state_9560;(statearr_9576_9586[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9560);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9587 = state_9560;
state_9560 = G__9587;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_9560){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_9560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_9577 = f__6153__auto__.call(null);(statearr_9577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_9577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
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
app.core.moviedb_get_image_url = (function moviedb_get_image_url(show_name){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,app.core.moviedb_search.call(null,show_name),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9588_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,app.core.moviedb_image_url.call(null,new cljs.core.Keyword(null,"backdrop_path","backdrop_path",4386024928).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(p1__9588_SHARP_)))));
})], null));
return ch;
});
app.core.app_id = "iorek.tivishows4";
app.core.dir_base = "/Disque dur/Videos/";
app.core.freebox_get = (function freebox_get(url,token){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,[cljs.core.str("http://88.124.156.100/api/v1/"),cljs.core.str(url)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9589_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__9589_SHARP_));
})], null));
return ch;
});
app.core.freebox_autorize = (function freebox_autorize(do_with_token){return ajax.core.POST.call(null,"http://88.124.156.100/api/v1/login/authorize/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"app_id","app_id",3897797483),app.core.app_id,new cljs.core.Keyword(null,"app_name","app_name",2181552475),"tivishows",new cljs.core.Keyword(null,"app_version","app_version",4407001132),"1",new cljs.core.Keyword(null,"device_name","device_name",3765800518),"Nexus Pad"], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9590_SHARP_){return do_with_token.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__9590_SHARP_));
})], null));
});
app.core.freebox_session = (function freebox_session(app_token,do_with_session){return ajax.core.GET.call(null,"http://88.124.156.100/api/v1/login/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9591_SHARP_){var challenge = new cljs.core.Keyword(null,"challenge","challenge",2416537557).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__9591_SHARP_));return app.core.freebox_session_save.call(null,app.core.freebox_make_password.call(null,challenge,app_token),do_with_session);
})], null));
});
app.core.freebox_session_save = (function freebox_session_save(pass,do_with_session){return ajax.core.POST.call(null,"http://88.124.156.100/api/v1/login/session/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app_id","app_id",3897797483),app.core.app_id,new cljs.core.Keyword(null,"password","password",2230889997),pass], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9592_SHARP_){return do_with_session.call(null,new cljs.core.Keyword(null,"session_token","session_token",1215285890).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__9592_SHARP_)));
})], null));
});
app.core.freebox_track_id = (function freebox_track_id(id){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,[cljs.core.str("http://88.124.156.100/api/v1/login/authorize/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9593_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__9593_SHARP_));
})], null));
return ch;
});
app.core.freebox_make_password = (function freebox_make_password(challenge,token){return CryptoJS.HmacSHA1(challenge,token).toString();
});
app.core.freebox_create_dir = (function freebox_create_dir(show){return cljs.core.async.map_LT_.call(null,(function (r){return btoa([cljs.core.str(app.core.dir_base),cljs.core.str(show)].join(''));
}),app.core.freebox_call.call(null,ajax.core.POST,"/fs/mkdir",new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",4313447452),btoa(app.core.dir_base),new cljs.core.Keyword(null,"dirname","dirname",2684675082),show], null)], null)));
});
app.core.freebox_start_download = (function freebox_start_download(magnet,download_dir,session_token,do_with_id,do_with_session){return ajax.core.POST.call(null,"http://88.124.156.100/api/v1/downloads/add",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"download_url","download_url",2123312298),magnet,new cljs.core.Keyword(null,"download_dir","download_dir",2123295688),download_dir], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.url_request_format.call(null),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),session_token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return do_with_id.call(null,cljs.core.get.call(null,cljs.core.get.call(null,res,"result"),"id"),session_token);
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){if(cljs.core._EQ_.call(null,"auth_required",cljs.core.get.call(null,new cljs.core.Keyword(null,"response","response",673580979).cljs$core$IFn$_invoke$arity$1(res),"error_code")))
{return app.core.freebox_session.call(null,new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.app_state)),(function (new_sess){do_with_session.call(null,new_sess);
return freebox_start_download.call(null,magnet,download_dir,new_sess,do_with_id,do_with_session);
}));
} else
{return null;
}
})], null));
});
/**
* @param {...*} var_args
*/
app.core.freebox_call = (function() { 
var freebox_call__delegate = function (method,uri,p__9596){var map__9598 = p__9596;var map__9598__$1 = ((cljs.core.seq_QMARK_.call(null,map__9598))?cljs.core.apply.call(null,cljs.core.hash_map,map__9598):map__9598);var channel = cljs.core.get.call(null,map__9598__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var proj = cljs.core.get.call(null,map__9598__$1,new cljs.core.Keyword(null,"proj","proj",1017353935));var opts = cljs.core.get.call(null,map__9598__$1,new cljs.core.Keyword(null,"opts","opts",1017322386));var ch = (function (){var or__3403__auto__ = channel;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.async.chan.call(null);
}
})();var default_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.app_state))], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (ch){
return (function (p1__9594_SHARP_){cljs.core.prn.call(null,"handler");
return cljs.core.async.put_BANG_.call(null,ch,cljs.core.get_in.call(null,p1__9594_SHARP_,proj));
});})(ch))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (ch){
return (function (res){if(cljs.core._EQ_.call(null,"auth_required",new cljs.core.Keyword(null,"error_code","error_code",2649591094).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"response","response",673580979).cljs$core$IFn$_invoke$arity$1(res))))
{return app.core.freebox_session.call(null,new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.app_state)),((function (ch){
return (function (p1__9595_SHARP_){cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"session-token","session-token",4078795636),p1__9595_SHARP_);
return freebox_call.call(null,method,uri,new cljs.core.Keyword(null,"opts","opts",1017322386),opts,new cljs.core.Keyword(null,"proj","proj",1017353935),proj,new cljs.core.Keyword(null,"channel","channel",1752854645),ch);
});})(ch))
);
} else
{return null;
}
});})(ch))
], null);method.call(null,[cljs.core.str("http://88.124.156.100/api/v1"),cljs.core.str(uri)].join(''),cljs.core.merge.call(null,default_opts,opts));
return ch;
};
var freebox_call = function (method,uri,var_args){
var p__9596 = null;if (arguments.length > 2) {
  p__9596 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return freebox_call__delegate.call(this,method,uri,p__9596);};
freebox_call.cljs$lang$maxFixedArity = 2;
freebox_call.cljs$lang$applyTo = (function (arglist__9599){
var method = cljs.core.first(arglist__9599);
arglist__9599 = cljs.core.next(arglist__9599);
var uri = cljs.core.first(arglist__9599);
var p__9596 = cljs.core.rest(arglist__9599);
return freebox_call__delegate(method,uri,p__9596);
});
freebox_call.cljs$core$IFn$_invoke$arity$variadic = freebox_call__delegate;
return freebox_call;
})()
;
app.core.freebox_get_download_percent = (function freebox_get_download_percent(id,session_token,do_with_percent){return app.core.freebox_get_download.call(null,id,session_token,(function (p1__9600_SHARP_){return do_with_percent.call(null,(new cljs.core.Keyword(null,"rx_pct","rx_pct",4391390938).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__9600_SHARP_)) / 100));
}));
});
app.core.freebox_get_download_details = (function freebox_get_download_details(id,session_token){return app.core.freebox_call.call(null,ajax.core.GET,[cljs.core.str("/downloads/"),cljs.core.str(id)].join(''));
});
app.core.freebox_get_download = (function freebox_get_download(id,session_token,handler){return ajax.core.GET.call(null,[cljs.core.str("http://88.124.156.100/api/v1/downloads/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),session_token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),handler], null));
});
app.core.freebox_get_upload_id = (function freebox_get_upload_id(session_token,dirname,upname){var ch = cljs.core.async.chan.call(null);ajax.core.POST.call(null,[cljs.core.str("http://88.124.156.100/api/v1/upload/")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dirname","dirname",2684675082),dirname,new cljs.core.Keyword(null,"upload_name","upload_name",2078716283),[cljs.core.str(upname),cljs.core.str(".srt")].join('')], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),session_token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__9601_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__9601_SHARP_)));
})], null));
return ch;
});
app.core.freebox_get_file_info = (function freebox_get_file_info(path,token){return app.core.freebox_get.call(null,[cljs.core.str("fs/info/"),cljs.core.str(path)].join(''),token);
});
app.core.freebox_ls_path = (function freebox_ls_path(path,token){return app.core.freebox_get.call(null,[cljs.core.str("fs/ls/"),cljs.core.str(path)].join(''),token);
});
ajax.core.GET.call(null,"http://88.124.156.100/api/v1/login");
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
app.core.topcoat_list_view = (function topcoat_list_view(app__$1,owner){if(typeof app.core.t9605 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t9605 = (function (owner,app,topcoat_list_view,meta9606){
this.owner = owner;
this.app = app;
this.topcoat_list_view = topcoat_list_view;
this.meta9606 = meta9606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t9605.cljs$lang$type = true;
app.core.t9605.cljs$lang$ctorStr = "app.core/t9605";
app.core.t9605.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"app.core/t9605");
});
app.core.t9605.prototype.om$core$IRenderState$ = true;
app.core.t9605.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div({"className": [cljs.core.str("topcoat-list__container"),cljs.core.str(new cljs.core.Keyword(null,"listCls","listCls",1195843358).cljs$core$IFn$_invoke$arity$1(app.core.data))].join('')},(cljs.core.truth_(new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(self__.app))?React.DOM.h3({"className": "topcoat-list__header"},new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(self__.app)):null),cljs.core.apply.call(null,om.dom.ul,{"className": "topcoat-list list "},cljs.core.map.call(null,(function (item){return React.DOM.li({"onDoubleClick": (function (){return new cljs.core.Keyword(null,"db-click","db-click",1660355307).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,item);
}), "onClick": (function (){return new cljs.core.Keyword(null,"click","click",1108654330).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,item);
}), "className": "topcoat-list__item"},new cljs.core.Keyword(null,"display","display",2685668404).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,item,self__.owner));
}),new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(self__.app))),(cljs.core.truth_(new cljs.core.Keyword(null,"extra","extra",1110869890).cljs$core$IFn$_invoke$arity$1(self__.app))?new cljs.core.Keyword(null,"extra","extra",1110869890).cljs$core$IFn$_invoke$arity$1(self__.app):null));
});
app.core.t9605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9607){var self__ = this;
var _9607__$1 = this;return self__.meta9606;
});
app.core.t9605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9607,meta9606__$1){var self__ = this;
var _9607__$1 = this;return (new app.core.t9605(self__.owner,self__.app,self__.topcoat_list_view,meta9606__$1));
});
app.core.__GT_t9605 = (function __GT_t9605(owner__$1,app__$2,topcoat_list_view__$1,meta9606){return (new app.core.t9605(owner__$1,app__$2,topcoat_list_view__$1,meta9606));
});
}
return (new app.core.t9605(owner,app__$1,topcoat_list_view,null));
});
app.core.save_show = (function save_show(e,show,app__$1,owner){var kshow = show;var st = om.core.get_state.call(null,owner);var input = om.core.get_node.call(null,owner,"show-name");window.scrollTo(0,0);
input.value = "";
cljs.core.prn.call(null,kshow);
cljs.core.prn.call(null,"aoidjisaojd");
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"shows","shows",1123317896),cljs.core.PersistentVector.EMPTY);
om.core.update_BANG_.call(null,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267)], null),kshow);
return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"shows","shows",1123317896),(function (shows){return cljs.core.conj.call(null,shows,kshow);
}));
});
app.core.add_show_view = (function add_show_view(app__$1,owner){if(typeof app.core.t9613 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t9613 = (function (owner,app,add_show_view,meta9614){
this.owner = owner;
this.app = app;
this.add_show_view = add_show_view;
this.meta9614 = meta9614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t9613.cljs$lang$type = true;
app.core.t9613.cljs$lang$ctorStr = "app.core/t9613";
app.core.t9613.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"app.core/t9613");
});
app.core.t9613.prototype.om$core$IRenderState$ = true;
app.core.t9613.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,st){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "topcoat-list"},React.DOM.h3({"className": "topcoat-list__header"},"Add Show"),React.DOM.form({"onSubmit": (function (p1__9608_SHARP_){return app.core.findShows.call(null,p1__9608_SHARP_,self__.owner,om.core.get_node.call(null,self__.owner,"show-name").value);
}), "className": "add-show-input"},om.dom.input.call(null,{"ref": "show-name", "placeholder": "show name", "className": "topcoat-text-input", "type": "text"})),cljs.core.apply.call(null,om.dom.ul,{"className": "topcoat-list__container"},cljs.core.map.call(null,(function (show){return React.DOM.li({"onClick": (function (p1__9609_SHARP_){return app.core.save_show.call(null,p1__9609_SHARP_,show,self__.app,self__.owner);
}), "className": "topcoat-list__item"},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(show));
}),new cljs.core.Keyword(null,"shows","shows",1123317896).cljs$core$IFn$_invoke$arity$1(st))));
});
app.core.t9613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9615){var self__ = this;
var _9615__$1 = this;return self__.meta9614;
});
app.core.t9613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9615,meta9614__$1){var self__ = this;
var _9615__$1 = this;return (new app.core.t9613(self__.owner,self__.app,self__.add_show_view,meta9614__$1));
});
app.core.__GT_t9613 = (function __GT_t9613(owner__$1,app__$2,add_show_view__$1,meta9614){return (new app.core.t9613(owner__$1,app__$2,add_show_view__$1,meta9614));
});
}
return (new app.core.t9613(owner,app__$1,add_show_view,null));
});
app.core.action_sheet = (function action_sheet(app__$1,owner,opts){if(cljs.core.truth_(new cljs.core.Keyword(null,"show","show",1017433711).cljs$core$IFn$_invoke$arity$1(opts)))
{return React.DOM.div({"onClick": new cljs.core.Keyword(null,"on-hide","on-hide",3936532450).cljs$core$IFn$_invoke$arity$1(opts), "className": "action-sheet-backdrop active"},React.DOM.div({"className": "action-sheet-wrapper action-sheet-up"},React.DOM.div({"className": "action-sheet"},React.DOM.div({"className": "action-sheet-group"},React.DOM.div({"className": "action-sheet-title"},new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,(function (button){return React.DOM.div({"onClick": (function (){cljs.core.second.call(null,button).call(null);
return new cljs.core.Keyword(null,"on-hide","on-hide",3936532450).cljs$core$IFn$_invoke$arity$1(opts).call(null);
}), "className": "button"},cljs.core.first.call(null,button));
}),new cljs.core.Keyword(null,"buttons","buttons",1255256819).cljs$core$IFn$_invoke$arity$1(opts)))),React.DOM.div({"className": "action-sheet-group"},React.DOM.div({"onClick": new cljs.core.Keyword(null,"on-hide","on-hide",3936532450).cljs$core$IFn$_invoke$arity$1(opts), "className": "button"},"Cancel")))));
} else
{return React.DOM.div(null,"");
}
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
app.core.show_select_last_view = (function show_select_last_view(app__$1,owner){if(typeof app.core.t9646 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t9646 = (function (owner,app,show_select_last_view,meta9647){
this.owner = owner;
this.app = app;
this.show_select_last_view = show_select_last_view;
this.meta9647 = meta9647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t9646.cljs$lang$type = true;
app.core.t9646.cljs$lang$ctorStr = "app.core/t9646";
app.core.t9646.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"app.core/t9646");
});
app.core.t9646.prototype.om$core$IRenderState$ = true;
app.core.t9646.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return om.core.build.call(null,app.core.topcoat_list_view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.reverse.call(null,cljs.core.map_indexed.call(null,(function (idx,seas){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1014008367),idx,new cljs.core.Keyword(null,"episodes","episodes",4675925322),seas], null);
}),new cljs.core.Keyword(null,"seasons","seasons",2982274402).cljs$core$IFn$_invoke$arity$1(state))),new cljs.core.Keyword(null,"header","header",4087600639),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.str(" - Click the next episode you want to see !")].join(''),new cljs.core.Keyword(null,"display","display",2685668404),(function (p1__9617_SHARP_){return app.core.show_season_episodes.call(null,self__.app,new cljs.core.Keyword(null,"episodes","episodes",4675925322).cljs$core$IFn$_invoke$arity$1(p1__9617_SHARP_),new cljs.core.Keyword(null,"idx","idx",1014008367).cljs$core$IFn$_invoke$arity$1(p1__9617_SHARP_),new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"mark-chan","mark-chan",4322875844).cljs$core$IFn$_invoke$arity$1(state));
})], null),self__.app));
});
app.core.t9646.prototype.om$core$IWillMount$ = true;
app.core.t9646.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mark_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mark-chan","mark-chan",4322875844));app.core.parse_episode_list.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(self__.app))),(function (p1__9616_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"seasons","seasons",2982274402),p1__9616_SHARP_);
}));
var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_9662){var state_val_9663 = (state_9662[1]);if((state_val_9663 === 4))
{var inst_9651 = (state_9662[2]);var inst_9652 = new cljs.core.Keyword(null,"show","show",1017433711).cljs$core$IFn$_invoke$arity$1(inst_9651);var inst_9653 = (function (){var marked = inst_9651;return ((function (marked,inst_9651,inst_9652,state_val_9663){
return (function (idx,it){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1014008367),idx,new cljs.core.Keyword(null,"episodes","episodes",4675925322),it], null);
});
;})(marked,inst_9651,inst_9652,state_val_9663))
})();var inst_9654 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"seasons","seasons",2982274402));var inst_9655 = cljs.core.map_indexed.call(null,inst_9653,inst_9654);var inst_9656 = new cljs.core.Keyword(null,"episode","episode",3764433261).cljs$core$IFn$_invoke$arity$1(inst_9651);var inst_9657 = app.core.mark_watched.call(null,inst_9652,inst_9655,inst_9656,self__.app);var state_9662__$1 = (function (){var statearr_9664 = state_9662;(statearr_9664[7] = inst_9657);
return statearr_9664;
})();var statearr_9665_9674 = state_9662__$1;(statearr_9665_9674[2] = null);
(statearr_9665_9674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9663 === 3))
{var inst_9660 = (state_9662[2]);var state_9662__$1 = state_9662;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9662__$1,inst_9660);
} else
{if((state_val_9663 === 2))
{var state_9662__$1 = state_9662;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9662__$1,4,mark_chan);
} else
{if((state_val_9663 === 1))
{var state_9662__$1 = state_9662;var statearr_9666_9675 = state_9662__$1;(statearr_9666_9675[2] = null);
(statearr_9666_9675[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_9670 = [null,null,null,null,null,null,null,null];(statearr_9670[0] = state_machine__6138__auto__);
(statearr_9670[1] = 1);
return statearr_9670;
});
var state_machine__6138__auto____1 = (function (state_9662){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_9662);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e9671){if((e9671 instanceof Object))
{var ex__6141__auto__ = e9671;var statearr_9672_9676 = state_9662;(statearr_9672_9676[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9662);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9671;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9677 = state_9662;
state_9662 = G__9677;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_9662){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_9662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_9673 = f__6153__auto__.call(null);(statearr_9673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_9673;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
app.core.t9646.prototype.om$core$IInitState$ = true;
app.core.t9646.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seasons","seasons",2982274402),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"mark-chan","mark-chan",4322875844),cljs.core.async.chan.call(null)], null);
});
app.core.t9646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9648){var self__ = this;
var _9648__$1 = this;return self__.meta9647;
});
app.core.t9646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9648,meta9647__$1){var self__ = this;
var _9648__$1 = this;return (new app.core.t9646(self__.owner,self__.app,self__.show_select_last_view,meta9647__$1));
});
app.core.__GT_t9646 = (function __GT_t9646(owner__$1,app__$2,show_select_last_view__$1,meta9647){return (new app.core.t9646(owner__$1,app__$2,show_select_last_view__$1,meta9647));
});
}
return (new app.core.t9646(owner,app__$1,show_select_last_view,null));
});
app.core.show_season_episodes = (function show_season_episodes(app__$1,season,num,show,mark_chan){return om.core.build.call(null,app.core.topcoat_list_view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",4087600639),[cljs.core.str("Season "),cljs.core.str((num + 1))].join(''),new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,season,"episode")], null)),new cljs.core.Keyword(null,"display","display",2685668404),(function (p1__9678_SHARP_){return React.DOM.span(null,[cljs.core.str("Episode "),cljs.core.str(cljs.core.get.call(null,p1__9678_SHARP_,"seasonnum")),cljs.core.str(" - "),cljs.core.str(cljs.core.get.call(null,p1__9678_SHARP_,"title"))].join(''),React.DOM.em({"className": "download"},app.core.get_air_delay.call(null,cljs.core.get.call(null,p1__9678_SHARP_,"airdate"))));
}),new cljs.core.Keyword(null,"click","click",1108654330),(function (p1__9679_SHARP_){return cljs.core.async.put_BANG_.call(null,mark_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"season","season",4402536021),(num + 1),new cljs.core.Keyword(null,"episode","episode",3764433261),cljs.reader.read_string.call(null,cljs.core.get.call(null,p1__9679_SHARP_,"epnum")),new cljs.core.Keyword(null,"show","show",1017433711),show], null));
})], null),app__$1));
});
app.core.get_air_delay = (function get_air_delay(string_date){return (new moment(string_date)).fromNow();
});
app.core.get_watch_list = (function get_watch_list(seasons,episode){return cljs.core.reduce.call(null,(function (acc,curr){return cljs.core.concat.call(null,acc,cljs.core.remove.call(null,(function (p1__9680_SHARP_){return (new cljs.core.Keyword(null,"episode","episode",3764433261).cljs$core$IFn$_invoke$arity$1(p1__9680_SHARP_) < episode);
}),cljs.core.map.call(null,(function (p1__9681_SHARP_){return app.core.parse_episode.call(null,p1__9681_SHARP_,new cljs.core.Keyword(null,"idx","idx",1014008367).cljs$core$IFn$_invoke$arity$1(curr));
}),cljs.core.get.call(null,new cljs.core.Keyword(null,"episodes","episodes",4675925322).cljs$core$IFn$_invoke$arity$1(curr),"episode"))));
}),cljs.core.PersistentVector.EMPTY,seasons);
});
app.core.mark_watched = (function mark_watched(show,seasons,episode,app__$1){var eps = app.core.get_watch_list.call(null,seasons,episode);window.scrollTo(0,0);
return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,show)),(function (_){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-name","show-name",3359181517),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,show)),new cljs.core.Keyword(null,"show-id","show-id",3081146717),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,show)),new cljs.core.Keyword(null,"episodes","episodes",4675925322),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,eps)], null);
}));
});
app.core.parse_episode = (function parse_episode(ep,seas){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"episode","episode",3764433261),cljs.core.get.call(null,ep,"epnum"),new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025),cljs.core.get.call(null,ep,"seasonnum"),new cljs.core.Keyword(null,"season","season",4402536021),(seas + 1),new cljs.core.Keyword(null,"title","title",1124275658),cljs.core.get.call(null,ep,"title"),new cljs.core.Keyword(null,"air-date","air-date",4569745859),cljs.core.get.call(null,ep,"airdate")], null);
});
app.core.show_watch_list_view = (function show_watch_list_view(app__$1,owner){if(typeof app.core.t9715 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t9715 = (function (owner,app,show_watch_list_view,meta9716){
this.owner = owner;
this.app = app;
this.show_watch_list_view = show_watch_list_view;
this.meta9716 = meta9716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t9715.cljs$lang$type = true;
app.core.t9715.cljs$lang$ctorStr = "app.core/t9715";
app.core.t9715.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"app.core/t9715");
});
app.core.t9715.prototype.om$core$IRenderState$ = true;
app.core.t9715.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": [cljs.core.str("topcoat-list")].join('')},React.DOM.h3({"className": "topcoat-list__header"},React.DOM.img({"className": "picture", "height": "30%", "src": new cljs.core.Keyword(null,"image","image",1114217677).cljs$core$IFn$_invoke$arity$1(self__.app)})),cljs.core.apply.call(null,om.dom.ul,{"className": "topcoat-list__container"},om.core.build_all.call(null,app.core.episode_view,new cljs.core.Keyword(null,"episodes","episodes",4675925322).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-name","show-name",3359181517),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"token","token",1124445547),new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-name","show-name",3359181517),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)))),React.DOM.button({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,app.core.reset_show_chan,new cljs.core.Keyword(null,"show-id","show-id",3081146717).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)));
}), "className": "topcoat-button reset-show"},"Reset shows"),React.DOM.form({"onSubmit": (function (e,own){var newval = om.core.get_node.call(null,self__.owner,"show-name-change").value;return e.preventDefault().call(null,cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shows","shows",1123317896)], null),(function (shows){return cljs.core.map.call(null,(function (p1__9682_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__9682_SHARP_),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app))))
{return cljs.core.assoc.call(null,p1__9682_SHARP_,new cljs.core.Keyword(null,"name","name",1017277949),newval);
} else
{return p1__9682_SHARP_;
}
}),shows);
})),cljs.core.prn.call(null,cljs.core.deref.call(null,self__.app)),cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.Keyword(null,"name","name",1017277949)], null),newval));
}), "className": "add-show-input"},om.dom.input.call(null,{"onChange": (function (event){var newval = event.target.value;return cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shows","shows",1123317896)], null),(function (shows){return cljs.core.map.call(null,(function (p1__9683_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__9683_SHARP_),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app))))
{return cljs.core.assoc.call(null,p1__9683_SHARP_,new cljs.core.Keyword(null,"name","name",1017277949),newval);
} else
{return p1__9683_SHARP_;
}
}),shows);
})).call(null,cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.Keyword(null,"name","name",1017277949)], null),newval),om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-name","show-name",3359181517)], null),newval));
}), "ref": "show-name-change", "value": new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(self__.app), "className": "topcoat-text-input", "type": "text"})));
});
app.core.t9715.prototype.om$core$IWillMount$ = true;
app.core.t9715.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_9733){var state_val_9734 = (state_9733[1]);if((state_val_9734 === 5))
{var inst_9726 = (state_9733[2]);var inst_9727 = (function (){var img = inst_9726;return ((function (img,inst_9726,state_val_9734){
return (function (___$2){return img;
});
;})(img,inst_9726,state_val_9734))
})();var inst_9728 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"image","image",1114217677),inst_9727);var state_9733__$1 = state_9733;var statearr_9735_9746 = state_9733__$1;(statearr_9735_9746[2] = inst_9728);
(statearr_9735_9746[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 4))
{var inst_9731 = (state_9733[2]);var state_9733__$1 = state_9733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9733__$1,inst_9731);
} else
{if((state_val_9734 === 3))
{var state_9733__$1 = state_9733;var statearr_9736_9747 = state_9733__$1;(statearr_9736_9747[2] = null);
(statearr_9736_9747[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 2))
{var inst_9722 = cljs.core.deref.call(null,self__.app);var inst_9723 = new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(inst_9722);var inst_9724 = app.core.moviedb_get_image_url.call(null,inst_9723);var state_9733__$1 = state_9733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9733__$1,5,inst_9724);
} else
{if((state_val_9734 === 1))
{var inst_9718 = cljs.core.deref.call(null,self__.app);var inst_9719 = new cljs.core.Keyword(null,"image","image",1114217677).cljs$core$IFn$_invoke$arity$1(inst_9718);var inst_9720 = cljs.core.not.call(null,inst_9719);var state_9733__$1 = state_9733;if(inst_9720)
{var statearr_9737_9748 = state_9733__$1;(statearr_9737_9748[1] = 2);
} else
{var statearr_9738_9749 = state_9733__$1;(statearr_9738_9749[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_9742 = [null,null,null,null,null,null,null];(statearr_9742[0] = state_machine__6138__auto__);
(statearr_9742[1] = 1);
return statearr_9742;
});
var state_machine__6138__auto____1 = (function (state_9733){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_9733);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e9743){if((e9743 instanceof Object))
{var ex__6141__auto__ = e9743;var statearr_9744_9750 = state_9733;(statearr_9744_9750[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9743;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9751 = state_9733;
state_9733 = G__9751;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_9733){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_9733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_9745 = f__6153__auto__.call(null);(statearr_9745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_9745;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
app.core.t9715.prototype.om$core$IDidMount$ = true;
app.core.t9715.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.prn.call(null,self__.app);
});
app.core.t9715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9717){var self__ = this;
var _9717__$1 = this;return self__.meta9716;
});
app.core.t9715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9717,meta9716__$1){var self__ = this;
var _9717__$1 = this;return (new app.core.t9715(self__.owner,self__.app,self__.show_watch_list_view,meta9716__$1));
});
app.core.__GT_t9715 = (function __GT_t9715(owner__$1,app__$2,show_watch_list_view__$1,meta9716){return (new app.core.t9715(owner__$1,app__$2,show_watch_list_view__$1,meta9716));
});
}
return (new app.core.t9715(owner,app__$1,show_watch_list_view,null));
});
cljs.core.prn.call(null,cljs.core.deref.call(null,app.core.app_state));
app.core.episode_view = (function episode_view(app__$1,owner,opts){if(typeof app.core.t9851 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t9851 = (function (opts,owner,app,episode_view,meta9852){
this.opts = opts;
this.owner = owner;
this.app = app;
this.episode_view = episode_view;
this.meta9852 = meta9852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t9851.cljs$lang$type = true;
app.core.t9851.cljs$lang$ctorStr = "app.core/t9851";
app.core.t9851.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"app.core/t9851");
});
app.core.t9851.prototype.om$core$IRenderState$ = true;
app.core.t9851.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;var display_name = [cljs.core.str("S"),cljs.core.str(new cljs.core.Keyword(null,"season","season",4402536021).cljs$core$IFn$_invoke$arity$1(self__.app)),cljs.core.str("E"),cljs.core.str(new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025).cljs$core$IFn$_invoke$arity$1(self__.app)),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.app))].join('');var display_size = cljs.core.count.call(null,display_name);return React.DOM.div(null,om.core.build.call(null,app.core.action_sheet,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),display_name,new cljs.core.Keyword(null,"show","show",1017433711),new cljs.core.Keyword(null,"action-sheet","action-sheet",1432871546).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"on-hide","on-hide",3936532450),(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"action-sheet","action-sheet",1432871546),false);
}),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Download",(function (){return app.core.download.call(null,self__.app,new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"update-chan","update-chan",4688741704).cljs$core$IFn$_invoke$arity$1(state));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Download subtitles",(function (){if(cljs.core.truth_(new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app))))
{app.core.downloadSubs.call(null,new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)),new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.app_state)),new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"season","season",4402536021).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)),new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)));
return om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675)], null),true);
} else
{return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Download on device",(function (){return app.core.download_on_device.call(null,self__.app,state,display_size);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watch",(function (){return app.core.play_on_device.call(null,new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)));
})], null)], null)], null)], null)),React.DOM.li({"onClick": (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"action-sheet","action-sheet",1432871546),true);
}), "ref": "contz", "className": "topcoat-list__item"},React.DOM.span({"className": "finished"},cljs.core.subs.call(null,display_name,0,new cljs.core.Keyword(null,"on-device-progress","on-device-progress",3750775624).cljs$core$IFn$_invoke$arity$1(self__.app))),React.DOM.span(null,cljs.core.subs.call(null,display_name,new cljs.core.Keyword(null,"on-device-progress","on-device-progress",3750775624).cljs$core$IFn$_invoke$arity$1(self__.app),display_size)),(cljs.core.truth_((function (){var and__3391__auto__ = cljs.core.contains_QMARK_.call(null,self__.app,new cljs.core.Keyword(null,"air-date","air-date",4569745859));if(and__3391__auto__)
{return app.core.in_future_QMARK_.call(null,new cljs.core.Keyword(null,"air-date","air-date",4569745859).cljs$core$IFn$_invoke$arity$1(self__.app));
} else
{return and__3391__auto__;
}
})())?React.DOM.em({"className": "download"},app.core.get_air_delay.call(null,new cljs.core.Keyword(null,"air-date","air-date",4569745859).cljs$core$IFn$_invoke$arity$1(self__.app))):null),(cljs.core.truth_(new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(self__.app))?React.DOM.em({"className": [cljs.core.str("download "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"percent","percent",4629944247).cljs$core$IFn$_invoke$arity$1(self__.app),100))?"finished":""))].join('')},[cljs.core.str(new cljs.core.Keyword(null,"percent","percent",4629944247).cljs$core$IFn$_invoke$arity$1(self__.app)),cljs.core.str("%")].join('')):null),((cljs.core.contains_QMARK_.call(null,self__.app,new cljs.core.Keyword(null,"subs-link","subs-link",1478697670)))?React.DOM.em({"className": [cljs.core.str("download episode__subtitles "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675).cljs$core$IFn$_invoke$arity$1(self__.app))?"finished":""))].join('')},(cljs.core.truth_(new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(self__.app))?"S":React.DOM.span({"className": "strikethrough"},"S"))):null)));
});
app.core.t9851.prototype.om$core$IWillMount$ = true;
app.core.t9851.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var update_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"update-chan","update-chan",4688741704));var map__9854 = self__.app;var map__9854__$1 = ((cljs.core.seq_QMARK_.call(null,map__9854))?cljs.core.apply.call(null,cljs.core.hash_map,map__9854):map__9854);var epnumrelative = cljs.core.get.call(null,map__9854__$1,new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025));var season = cljs.core.get.call(null,map__9854__$1,new cljs.core.Keyword(null,"season","season",4402536021));var st = om.core.get_state.call(null,self__.owner);var show_name = new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(st);if(cljs.core.truth_((function (){var and__3391__auto__ = new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core.truth_(and__3391__auto__))
{return (new cljs.core.Keyword(null,"percent","percent",4629944247).cljs$core$IFn$_invoke$arity$1(self__.app) < 100);
} else
{return and__3391__auto__;
}
})()))
{app.core.get_download_percent.call(null,new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(self__.app),self__.app,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"token","token",1124445547)),update_chan);
} else
{}
var c__6152__auto___9950 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_9891){var state_val_9892 = (state_9891[1]);if((state_val_9892 === 1))
{var state_9891__$1 = state_9891;var statearr_9893_9951 = state_9891__$1;(statearr_9893_9951[2] = null);
(statearr_9893_9951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9892 === 2))
{var state_9891__$1 = state_9891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9891__$1,4,update_chan);
} else
{if((state_val_9892 === 3))
{var inst_9889 = (state_9891[2]);var state_9891__$1 = state_9891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9891__$1,inst_9889);
} else
{if((state_val_9892 === 4))
{var inst_9864 = (state_9891[7]);var inst_9859 = (state_9891[8]);var inst_9857 = (state_9891[9]);var inst_9857__$1 = (state_9891[2]);var inst_9858 = cljs.core.deref.call(null,self__.app);var inst_9859__$1 = new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(inst_9858);var inst_9860 = (function (){var sub_link = inst_9859__$1;var percent = inst_9857__$1;return ((function (sub_link,percent,inst_9864,inst_9859,inst_9857,inst_9857__$1,inst_9858,inst_9859__$1,state_val_9892){
return (function (___$2){return (percent | 0);
});
;})(sub_link,percent,inst_9864,inst_9859,inst_9857,inst_9857__$1,inst_9858,inst_9859__$1,state_val_9892))
})();var inst_9861 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"percent","percent",4629944247),inst_9860);var inst_9862 = cljs.core.deref.call(null,self__.app);var inst_9863 = cljs.core.contains_QMARK_.call(null,inst_9862,new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675));var inst_9864__$1 = !(inst_9863);var state_9891__$1 = (function (){var statearr_9894 = state_9891;(statearr_9894[7] = inst_9864__$1);
(statearr_9894[10] = inst_9861);
(statearr_9894[8] = inst_9859__$1);
(statearr_9894[9] = inst_9857__$1);
return statearr_9894;
})();if(inst_9864__$1)
{var statearr_9895_9952 = state_9891__$1;(statearr_9895_9952[1] = 5);
} else
{var statearr_9896_9953 = state_9891__$1;(statearr_9896_9953[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9892 === 5))
{var inst_9859 = (state_9891[8]);var state_9891__$1 = state_9891;if(cljs.core.truth_(inst_9859))
{var statearr_9897_9954 = state_9891__$1;(statearr_9897_9954[1] = 8);
} else
{var statearr_9898_9955 = state_9891__$1;(statearr_9898_9955[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9892 === 6))
{var inst_9864 = (state_9891[7]);var state_9891__$1 = state_9891;var statearr_9899_9956 = state_9891__$1;(statearr_9899_9956[2] = inst_9864);
(statearr_9899_9956[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9892 === 7))
{var inst_9874 = (state_9891[2]);var state_9891__$1 = state_9891;if(cljs.core.truth_(inst_9874))
{var statearr_9900_9957 = state_9891__$1;(statearr_9900_9957[1] = 11);
} else
{var statearr_9901_9958 = state_9891__$1;(statearr_9901_9958[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9892 === 8))
{var inst_9857 = (state_9891[9]);var inst_9867 = (inst_9857 | 0);var inst_9868 = (inst_9867 > 0);var state_9891__$1 = state_9891;var statearr_9902_9959 = state_9891__$1;(statearr_9902_9959[2] = inst_9868);
(statearr_9902_9959[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9892 === 9))
{var inst_9859 = (state_9891[8]);var state_9891__$1 = state_9891;var statearr_9903_9960 = state_9891__$1;(statearr_9903_9960[2] = inst_9859);
(statearr_9903_9960[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9892 === 10))
{var inst_9871 = (state_9891[2]);var state_9891__$1 = state_9891;var statearr_9904_9961 = state_9891__$1;(statearr_9904_9961[2] = inst_9871);
(statearr_9904_9961[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9892 === 11))
{var inst_9859 = (state_9891[8]);var inst_9876 = cljs.core.deref.call(null,app.core.app_state);var inst_9877 = new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(inst_9876);var inst_9878 = cljs.core.deref.call(null,self__.app);var inst_9879 = new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(inst_9878);var inst_9880 = app.core.downloadSubs.call(null,inst_9859,inst_9877,inst_9879,show_name,season,epnumrelative);var inst_9881 = [new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675)];var inst_9882 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9881,null));var inst_9883 = om.core.update_BANG_.call(null,self__.app,inst_9882,true);var state_9891__$1 = (function (){var statearr_9905 = state_9891;(statearr_9905[11] = inst_9880);
return statearr_9905;
})();var statearr_9906_9962 = state_9891__$1;(statearr_9906_9962[2] = inst_9883);
(statearr_9906_9962[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9892 === 12))
{var state_9891__$1 = state_9891;var statearr_9907_9963 = state_9891__$1;(statearr_9907_9963[2] = null);
(statearr_9907_9963[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9892 === 13))
{var inst_9886 = (state_9891[2]);var state_9891__$1 = (function (){var statearr_9908 = state_9891;(statearr_9908[12] = inst_9886);
return statearr_9908;
})();var statearr_9909_9964 = state_9891__$1;(statearr_9909_9964[2] = null);
(statearr_9909_9964[1] = 2);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_9913 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9913[0] = state_machine__6138__auto__);
(statearr_9913[1] = 1);
return statearr_9913;
});
var state_machine__6138__auto____1 = (function (state_9891){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_9891);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e9914){if((e9914 instanceof Object))
{var ex__6141__auto__ = e9914;var statearr_9915_9965 = state_9891;(statearr_9915_9965[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9891);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9914;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9966 = state_9891;
state_9891 = G__9966;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_9891){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_9891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_9916 = f__6153__auto__.call(null);(statearr_9916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___9950);
return statearr_9916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_9936){var state_val_9937 = (state_9936[1]);if((state_val_9937 === 5))
{var inst_9927 = (state_9936[7]);var inst_9930 = (state_9936[2]);var inst_9931 = om.core.update_BANG_.call(null,self__.app,inst_9927,inst_9930);var state_9936__$1 = state_9936;var statearr_9938_9967 = state_9936__$1;(statearr_9938_9967[2] = inst_9931);
(statearr_9938_9967[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9937 === 4))
{var inst_9934 = (state_9936[2]);var state_9936__$1 = state_9936;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9936__$1,inst_9934);
} else
{if((state_val_9937 === 3))
{var state_9936__$1 = state_9936;var statearr_9939_9968 = state_9936__$1;(statearr_9939_9968[2] = null);
(statearr_9939_9968[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9937 === 2))
{var inst_9926 = [new cljs.core.Keyword(null,"subs-link","subs-link",1478697670)];var inst_9927 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9926,null));var inst_9928 = app.core.get_subtitle_link.call(null,show_name,season,epnumrelative);var state_9936__$1 = (function (){var statearr_9940 = state_9936;(statearr_9940[7] = inst_9927);
return statearr_9940;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9936__$1,5,inst_9928);
} else
{if((state_val_9937 === 1))
{var inst_9917 = cljs.core.deref.call(null,self__.app);var inst_9918 = new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(inst_9917);var inst_9919 = cljs.core.not.call(null,inst_9918);var inst_9920 = cljs.core.deref.call(null,self__.app);var inst_9921 = new cljs.core.Keyword(null,"air-date","air-date",4569745859).cljs$core$IFn$_invoke$arity$1(inst_9920);var inst_9922 = app.core.in_future_QMARK_.call(null,inst_9921);var inst_9923 = cljs.core.not.call(null,inst_9922);var inst_9924 = (inst_9919) && (inst_9923);var state_9936__$1 = state_9936;if(cljs.core.truth_(inst_9924))
{var statearr_9941_9969 = state_9936__$1;(statearr_9941_9969[1] = 2);
} else
{var statearr_9942_9970 = state_9936__$1;(statearr_9942_9970[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_9946 = [null,null,null,null,null,null,null,null];(statearr_9946[0] = state_machine__6138__auto__);
(statearr_9946[1] = 1);
return statearr_9946;
});
var state_machine__6138__auto____1 = (function (state_9936){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_9936);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e9947){if((e9947 instanceof Object))
{var ex__6141__auto__ = e9947;var statearr_9948_9971 = state_9936;(statearr_9948_9971[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9936);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9972 = state_9936;
state_9936 = G__9972;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_9936){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_9936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_9949 = f__6153__auto__.call(null);(statearr_9949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_9949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
app.core.t9851.prototype.om$core$IInitState$ = true;
app.core.t9851.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update-chan","update-chan",4688741704),cljs.core.async.chan.call(null)], null);
});
app.core.t9851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9853){var self__ = this;
var _9853__$1 = this;return self__.meta9852;
});
app.core.t9851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9853,meta9852__$1){var self__ = this;
var _9853__$1 = this;return (new app.core.t9851(self__.opts,self__.owner,self__.app,self__.episode_view,meta9852__$1));
});
app.core.__GT_t9851 = (function __GT_t9851(opts__$1,owner__$1,app__$2,episode_view__$1,meta9852){return (new app.core.t9851(opts__$1,owner__$1,app__$2,episode_view__$1,meta9852));
});
}
return (new app.core.t9851(opts,owner,app__$1,episode_view,null));
});
app.core.in_future_QMARK_ = (function in_future_QMARK_(string_date){return (new moment(string_date)).isAfter();
});
app.core.download = (function download(app__$1,sn,token,update_chan){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10039){var state_val_10040 = (state_10039[1]);if((state_val_10040 === 7))
{var inst_10027 = (state_10039[7]);var inst_10030 = (state_10039[8]);var inst_10024 = (state_10039[9]);var inst_10023 = (state_10039[10]);var inst_10022 = (state_10039[11]);var inst_10033 = (state_10039[2]);var inst_10034 = new cljs.core.Keyword(null,"magnet","magnet",4227240668).cljs$core$IFn$_invoke$arity$1(inst_10027);var inst_10035 = (function (){var dl_dir = inst_10033;var link = inst_10030;var magnet = inst_10027;var season = inst_10024;var epnumrelative = inst_10023;var map__10015 = inst_10022;return ((function (dl_dir,link,magnet,season,epnumrelative,map__10015,inst_10027,inst_10030,inst_10024,inst_10023,inst_10022,inst_10033,inst_10034,state_val_10040){
return (function (id,newtoken){if(cljs.core.truth_(id))
{return app.core.get_download_percent.call(null,id,app__$1,newtoken,update_chan);
} else
{return null;
}
});
;})(dl_dir,link,magnet,season,epnumrelative,map__10015,inst_10027,inst_10030,inst_10024,inst_10023,inst_10022,inst_10033,inst_10034,state_val_10040))
})();var inst_10036 = (function (){var dl_dir = inst_10033;var link = inst_10030;var magnet = inst_10027;var season = inst_10024;var epnumrelative = inst_10023;var map__10015 = inst_10022;return ((function (dl_dir,link,magnet,season,epnumrelative,map__10015,inst_10027,inst_10030,inst_10024,inst_10023,inst_10022,inst_10033,inst_10034,inst_10035,state_val_10040){
return (function (p1__9973_SHARP_){return cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"session-token","session-token",4078795636),p1__9973_SHARP_);
});
;})(dl_dir,link,magnet,season,epnumrelative,map__10015,inst_10027,inst_10030,inst_10024,inst_10023,inst_10022,inst_10033,inst_10034,inst_10035,state_val_10040))
})();var inst_10037 = app.core.freebox_start_download.call(null,inst_10034,inst_10033,token,inst_10035,inst_10036);var state_10039__$1 = state_10039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10039__$1,inst_10037);
} else
{if((state_val_10040 === 6))
{var inst_10030 = (state_10039[2]);var inst_10031 = app.core.freebox_create_dir.call(null,sn);var state_10039__$1 = (function (){var statearr_10041 = state_10039;(statearr_10041[8] = inst_10030);
return statearr_10041;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10039__$1,7,inst_10031);
} else
{if((state_val_10040 === 5))
{var inst_10024 = (state_10039[9]);var inst_10023 = (state_10039[10]);var inst_10027 = (state_10039[2]);var inst_10028 = app.core.get_subtitle_link.call(null,sn,inst_10024,inst_10023);var state_10039__$1 = (function (){var statearr_10042 = state_10039;(statearr_10042[7] = inst_10027);
return statearr_10042;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10039__$1,6,inst_10028);
} else
{if((state_val_10040 === 4))
{var inst_10024 = (state_10039[9]);var inst_10023 = (state_10039[10]);var inst_10022 = (state_10039[11]);var inst_10022__$1 = (state_10039[2]);var inst_10023__$1 = cljs.core.get.call(null,inst_10022__$1,new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025));var inst_10024__$1 = cljs.core.get.call(null,inst_10022__$1,new cljs.core.Keyword(null,"season","season",4402536021));var inst_10025 = app.core.get_magnet_link.call(null,sn,inst_10024__$1,inst_10023__$1);var state_10039__$1 = (function (){var statearr_10043 = state_10039;(statearr_10043[9] = inst_10024__$1);
(statearr_10043[10] = inst_10023__$1);
(statearr_10043[11] = inst_10022__$1);
return statearr_10043;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10039__$1,5,inst_10025);
} else
{if((state_val_10040 === 3))
{var inst_10016 = (state_10039[12]);var state_10039__$1 = state_10039;var statearr_10044_10056 = state_10039__$1;(statearr_10044_10056[2] = inst_10016);
(statearr_10044_10056[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10040 === 2))
{var inst_10016 = (state_10039[12]);var inst_10019 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10016);var state_10039__$1 = state_10039;var statearr_10045_10057 = state_10039__$1;(statearr_10045_10057[2] = inst_10019);
(statearr_10045_10057[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10040 === 1))
{var inst_10016 = (state_10039[12]);var inst_10016__$1 = cljs.core.deref.call(null,app__$1);var inst_10017 = cljs.core.seq_QMARK_.call(null,inst_10016__$1);var state_10039__$1 = (function (){var statearr_10046 = state_10039;(statearr_10046[12] = inst_10016__$1);
return statearr_10046;
})();if(inst_10017)
{var statearr_10047_10058 = state_10039__$1;(statearr_10047_10058[1] = 2);
} else
{var statearr_10048_10059 = state_10039__$1;(statearr_10048_10059[1] = 3);
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
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10052 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10052[0] = state_machine__6138__auto__);
(statearr_10052[1] = 1);
return statearr_10052;
});
var state_machine__6138__auto____1 = (function (state_10039){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10039);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10053){if((e10053 instanceof Object))
{var ex__6141__auto__ = e10053;var statearr_10054_10060 = state_10039;(statearr_10054_10060[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10039);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10053;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10061 = state_10039;
state_10039 = G__10061;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10039){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10055 = f__6153__auto__.call(null);(statearr_10055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_10055;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
app.core.download_on_device = (function download_on_device(app__$1,state,dn){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10123){var state_val_10124 = (state_10123[1]);if((state_val_10124 === 3))
{var inst_10105 = (state_10123[7]);var inst_10109 = (state_10123[2]);var inst_10110 = app.core.subtitle_name_from_filename.call(null,inst_10109);var inst_10111 = [cljs.core.str(inst_10110),cljs.core.str(".srt")].join('');var inst_10112 = goog.crypt.base64.encodeString(inst_10111);var inst_10113 = goog.crypt.base64.encodeString(inst_10109);var inst_10114 = [new cljs.core.Keyword(null,"on-device","on-device",633333110)];var inst_10115 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10114,null));var inst_10116 = om.core.update_BANG_.call(null,app__$1,inst_10115,inst_10109);var inst_10117 = [cljs.core.str(inst_10105),cljs.core.str(inst_10113)].join('');var inst_10118 = [cljs.core.str(inst_10105),cljs.core.str(inst_10112)].join('');var inst_10119 = app.core.on_progress_device.call(null,app__$1,dn,inst_10109);var inst_10120 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state);var inst_10121 = window.downloadOnDevice(inst_10117,inst_10109,inst_10118,inst_10111,inst_10119,inst_10120);var state_10123__$1 = (function (){var statearr_10125 = state_10123;(statearr_10125[8] = inst_10116);
return statearr_10125;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10123__$1,inst_10121);
} else
{if((state_val_10124 === 2))
{var inst_10105 = (state_10123[7]);var inst_10103 = (state_10123[2]);var inst_10104 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_10103);var inst_10105__$1 = new cljs.core.Keyword(null,"download_dir","download_dir",2123295688).cljs$core$IFn$_invoke$arity$1(inst_10104);var inst_10106 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state);var inst_10107 = app.core.find_downloaded_name.call(null,inst_10105__$1,inst_10103,inst_10106,app.core.show);var state_10123__$1 = (function (){var statearr_10126 = state_10123;(statearr_10126[7] = inst_10105__$1);
return statearr_10126;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10123__$1,3,inst_10107);
} else
{if((state_val_10124 === 1))
{var inst_10098 = cljs.core.deref.call(null,app__$1);var inst_10099 = new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(inst_10098);var inst_10100 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state);var inst_10101 = app.core.freebox_get_download_details.call(null,inst_10099,inst_10100);var state_10123__$1 = state_10123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10123__$1,2,inst_10101);
} else
{return null;
}
}
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10130 = [null,null,null,null,null,null,null,null,null];(statearr_10130[0] = state_machine__6138__auto__);
(statearr_10130[1] = 1);
return statearr_10130;
});
var state_machine__6138__auto____1 = (function (state_10123){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10123);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10131){if((e10131 instanceof Object))
{var ex__6141__auto__ = e10131;var statearr_10132_10134 = state_10123;(statearr_10132_10134[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10123);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10135 = state_10123;
state_10123 = G__10135;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10123){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10133 = f__6153__auto__.call(null);(statearr_10133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_10133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
app.core.on_progress_device = (function on_progress_device(app__$1,size,video){return (function (ratio){var idx = (((size * ratio) | 0) / 2);if((idx > (function (){var or__3403__auto__ = new cljs.core.Keyword(null,"on-device-progress","on-device-progress",3750775624).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app__$1));if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return 0;
}
})()))
{om.core.update_BANG_.call(null,app__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-device-progress","on-device-progress",3750775624)], null),idx);
if(cljs.core._EQ_.call(null,ratio,2))
{return om.core.update_BANG_.call(null,app__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-device","on-device",633333110)], null),video);
} else
{return null;
}
} else
{return null;
}
});
});
app.core.play_on_device = (function play_on_device(show,download_id){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10172){var state_val_10173 = (state_10172[1]);if((state_val_10173 === 3))
{var inst_10168 = (state_10172[2]);var inst_10169 = [cljs.core.str(show),cljs.core.str("/"),cljs.core.str(inst_10168)].join('');var inst_10170 = playVideo(inst_10169);var state_10172__$1 = state_10172;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10172__$1,inst_10170);
} else
{if((state_val_10173 === 2))
{var inst_10160 = (state_10172[7]);var inst_10163 = (state_10172[2]);var inst_10164 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_10163);var inst_10165 = new cljs.core.Keyword(null,"download_dir","download_dir",2123295688).cljs$core$IFn$_invoke$arity$1(inst_10164);var inst_10166 = app.core.find_downloaded_name.call(null,inst_10165,inst_10163,inst_10160,show);var state_10172__$1 = state_10172;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10172__$1,3,inst_10166);
} else
{if((state_val_10173 === 1))
{var inst_10160 = (state_10172[7]);var inst_10159 = cljs.core.deref.call(null,app.core.app_state);var inst_10160__$1 = new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(inst_10159);var inst_10161 = app.core.freebox_get_download_details.call(null,download_id,inst_10160__$1);var state_10172__$1 = (function (){var statearr_10174 = state_10172;(statearr_10174[7] = inst_10160__$1);
return statearr_10174;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10172__$1,2,inst_10161);
} else
{return null;
}
}
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10178 = [null,null,null,null,null,null,null,null];(statearr_10178[0] = state_machine__6138__auto__);
(statearr_10178[1] = 1);
return statearr_10178;
});
var state_machine__6138__auto____1 = (function (state_10172){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10172);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10179){if((e10179 instanceof Object))
{var ex__6141__auto__ = e10179;var statearr_10180_10182 = state_10172;(statearr_10180_10182[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10172);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10179;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10183 = state_10172;
state_10172 = G__10183;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10172){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10181 = f__6153__auto__.call(null);(statearr_10181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_10181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
app.core.subtitle_name_from_filename = (function subtitle_name_from_filename(file_name){if(!(cljs.core._EQ_.call(null,file_name.indexOf("."),-1)))
{return clojure.string.join.call(null,".",cljs.core.butlast.call(null,clojure.string.split.call(null,file_name,/\./)));
} else
{return file_name;
}
});
app.core.find_file_in_dir = (function find_file_in_dir(path,token){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10213){var state_val_10214 = (state_10213[1]);if((state_val_10214 === 2))
{var inst_10206 = (state_10213[2]);var inst_10207 = cljs.core.prn.call(null,inst_10206);var inst_10208 = (function (){var path_infos = inst_10206;return ((function (path_infos,inst_10206,inst_10207,state_val_10214){
return (function (p1__10184_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mimetype","mimetype",3917704416).cljs$core$IFn$_invoke$arity$1(p1__10184_SHARP_),"video/mp4");
});
;})(path_infos,inst_10206,inst_10207,state_val_10214))
})();var inst_10209 = cljs.core.filter.call(null,inst_10208,inst_10206);var inst_10210 = cljs.core.first.call(null,inst_10209);var inst_10211 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_10210);var state_10213__$1 = (function (){var statearr_10215 = state_10213;(statearr_10215[7] = inst_10207);
return statearr_10215;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10213__$1,inst_10211);
} else
{if((state_val_10214 === 1))
{var inst_10204 = app.core.freebox_ls_path.call(null,path,token);var state_10213__$1 = state_10213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10213__$1,2,inst_10204);
} else
{return null;
}
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10219 = [null,null,null,null,null,null,null,null];(statearr_10219[0] = state_machine__6138__auto__);
(statearr_10219[1] = 1);
return statearr_10219;
});
var state_machine__6138__auto____1 = (function (state_10213){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10213);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10220){if((e10220 instanceof Object))
{var ex__6141__auto__ = e10220;var statearr_10221_10223 = state_10213;(statearr_10221_10223[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10213);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10224 = state_10213;
state_10213 = G__10224;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10213){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10222 = f__6153__auto__.call(null);(statearr_10222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_10222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
app.core.find_downloaded_name = (function find_downloaded_name(path,details,token,show){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10264){var state_val_10265 = (state_10264[1]);if((state_val_10265 === 5))
{var inst_10260 = (state_10264[2]);var state_10264__$1 = state_10264;var statearr_10266_10277 = state_10264__$1;(statearr_10266_10277[2] = inst_10260);
(statearr_10266_10277[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10265 === 4))
{var inst_10262 = (state_10264[2]);var state_10264__$1 = state_10264;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10264__$1,inst_10262);
} else
{if((state_val_10265 === 3))
{var inst_10258 = app.core.find_file_in_dir.call(null,path,token);var state_10264__$1 = state_10264;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10264__$1,5,inst_10258);
} else
{if((state_val_10265 === 2))
{var inst_10255 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(details);var inst_10256 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_10255);var state_10264__$1 = state_10264;var statearr_10267_10278 = state_10264__$1;(statearr_10267_10278[2] = inst_10256);
(statearr_10267_10278[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10265 === 1))
{var inst_10251 = [cljs.core.str(app.core.dir_base),cljs.core.str(show),cljs.core.str("/")].join('');var inst_10252 = btoa(inst_10251);var inst_10253 = cljs.core._EQ_.call(null,path,inst_10252);var state_10264__$1 = state_10264;if(inst_10253)
{var statearr_10268_10279 = state_10264__$1;(statearr_10268_10279[1] = 2);
} else
{var statearr_10269_10280 = state_10264__$1;(statearr_10269_10280[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10273 = [null,null,null,null,null,null,null];(statearr_10273[0] = state_machine__6138__auto__);
(statearr_10273[1] = 1);
return statearr_10273;
});
var state_machine__6138__auto____1 = (function (state_10264){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10264);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10274){if((e10274 instanceof Object))
{var ex__6141__auto__ = e10274;var statearr_10275_10281 = state_10264;(statearr_10275_10281[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10264);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10282 = state_10264;
state_10264 = G__10282;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10264){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10276 = f__6153__auto__.call(null);(statearr_10276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_10276;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
app.core.downloadSubs = (function downloadSubs(link,token,download_id,show,season,ep){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10327){var state_val_10328 = (state_10327[1]);if((state_val_10328 === 4))
{var inst_10319 = (state_10327[7]);var inst_10322 = (state_10327[2]);var inst_10323 = cljs.core.prn.call(null,"download subbbbs");var inst_10324 = app.core.addic7ed_url.call(null,show,season,ep);var inst_10325 = window.downloadSub(link,token,inst_10319,inst_10322,inst_10324);var state_10327__$1 = (function (){var statearr_10329 = state_10327;(statearr_10329[8] = inst_10323);
return statearr_10329;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10327__$1,inst_10325);
} else
{if((state_val_10328 === 3))
{var inst_10315 = (state_10327[9]);var inst_10319 = (state_10327[7]);var inst_10318 = (state_10327[2]);var inst_10319__$1 = app.core.subtitle_name_from_filename.call(null,inst_10318);var inst_10320 = app.core.freebox_get_upload_id.call(null,token,inst_10315,inst_10319__$1);var state_10327__$1 = (function (){var statearr_10330 = state_10327;(statearr_10330[7] = inst_10319__$1);
return statearr_10330;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10327__$1,4,inst_10320);
} else
{if((state_val_10328 === 2))
{var inst_10315 = (state_10327[9]);var inst_10313 = (state_10327[2]);var inst_10314 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_10313);var inst_10315__$1 = new cljs.core.Keyword(null,"download_dir","download_dir",2123295688).cljs$core$IFn$_invoke$arity$1(inst_10314);var inst_10316 = app.core.find_downloaded_name.call(null,inst_10315__$1,inst_10313,token,show);var state_10327__$1 = (function (){var statearr_10331 = state_10327;(statearr_10331[9] = inst_10315__$1);
return statearr_10331;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10327__$1,3,inst_10316);
} else
{if((state_val_10328 === 1))
{var inst_10311 = app.core.freebox_get_download_details.call(null,download_id,token);var state_10327__$1 = state_10327;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10327__$1,2,inst_10311);
} else
{return null;
}
}
}
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10335 = [null,null,null,null,null,null,null,null,null,null];(statearr_10335[0] = state_machine__6138__auto__);
(statearr_10335[1] = 1);
return statearr_10335;
});
var state_machine__6138__auto____1 = (function (state_10327){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10327);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10336){if((e10336 instanceof Object))
{var ex__6141__auto__ = e10336;var statearr_10337_10339 = state_10327;(statearr_10337_10339[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10327);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10336;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10340 = state_10327;
state_10327 = G__10340;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10327){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10338 = f__6153__auto__.call(null);(statearr_10338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_10338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
app.core.addic7ed_url = (function addic7ed_url(showname,season,episode){return [cljs.core.str("http://www.addic7ed.com/serie/"),cljs.core.str(showname),cljs.core.str("/"),cljs.core.str(season),cljs.core.str("/"),cljs.core.str(episode),cljs.core.str("/addic7ed")].join('');
});
app.core.get_download_percent = (function get_download_percent(id,app__$1,token,update_chan){om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"download-id","download-id",4097684466),(function (_){return id;
}));
cljs.core.prn.call(null,"download percent");
var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10416){var state_val_10417 = (state_10416[1]);if((state_val_10417 === 1))
{var state_10416__$1 = state_10416;var statearr_10418_10437 = state_10416__$1;(statearr_10418_10437[2] = null);
(statearr_10418_10437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10417 === 2))
{var inst_10390 = app.core.freebox_get_download_details.call(null,id,token);var state_10416__$1 = state_10416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10416__$1,4,inst_10390);
} else
{if((state_val_10417 === 3))
{var inst_10414 = (state_10416[2]);var state_10416__$1 = state_10416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10416__$1,inst_10414);
} else
{if((state_val_10417 === 4))
{var inst_10392 = (state_10416[7]);var inst_10392__$1 = (state_10416[2]);var inst_10393 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_10392__$1);var inst_10394 = new cljs.core.Keyword(null,"rx_pct","rx_pct",4391390938).cljs$core$IFn$_invoke$arity$1(inst_10393);var inst_10395 = (inst_10394 / 100);var inst_10396 = new cljs.core.Keyword(null,"success","success",3441701749).cljs$core$IFn$_invoke$arity$1(inst_10392__$1);var state_10416__$1 = (function (){var statearr_10419 = state_10416;(statearr_10419[8] = inst_10395);
(statearr_10419[7] = inst_10392__$1);
return statearr_10419;
})();if(cljs.core.truth_(inst_10396))
{var statearr_10420_10438 = state_10416__$1;(statearr_10420_10438[1] = 5);
} else
{var statearr_10421_10439 = state_10416__$1;(statearr_10421_10439[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10417 === 5))
{var inst_10398 = cljs.core.async.timeout.call(null,5000);var state_10416__$1 = state_10416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10416__$1,8,inst_10398);
} else
{if((state_val_10417 === 6))
{var inst_10395 = (state_10416[8]);var inst_10392 = (state_10416[7]);var inst_10409 = (function (){var pct = inst_10395;var res = inst_10392;return ((function (pct,res,inst_10395,inst_10392,state_val_10417){
return (function (_){return null;
});
;})(pct,res,inst_10395,inst_10392,state_val_10417))
})();var inst_10410 = om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"download-id","download-id",4097684466),inst_10409);var state_10416__$1 = state_10416;var statearr_10422_10440 = state_10416__$1;(statearr_10422_10440[2] = inst_10410);
(statearr_10422_10440[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10417 === 7))
{var inst_10412 = (state_10416[2]);var state_10416__$1 = state_10416;var statearr_10423_10441 = state_10416__$1;(statearr_10423_10441[2] = inst_10412);
(statearr_10423_10441[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10417 === 8))
{var inst_10395 = (state_10416[8]);var inst_10400 = (state_10416[2]);var inst_10401 = cljs.core.async.put_BANG_.call(null,update_chan,inst_10395);var inst_10402 = (inst_10395 < 100);var state_10416__$1 = (function (){var statearr_10424 = state_10416;(statearr_10424[9] = inst_10400);
(statearr_10424[10] = inst_10401);
return statearr_10424;
})();if(cljs.core.truth_(inst_10402))
{var statearr_10425_10442 = state_10416__$1;(statearr_10425_10442[1] = 9);
} else
{var statearr_10426_10443 = state_10416__$1;(statearr_10426_10443[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10417 === 9))
{var state_10416__$1 = state_10416;var statearr_10427_10444 = state_10416__$1;(statearr_10427_10444[2] = null);
(statearr_10427_10444[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10417 === 10))
{var state_10416__$1 = state_10416;var statearr_10428_10445 = state_10416__$1;(statearr_10428_10445[2] = null);
(statearr_10428_10445[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10417 === 11))
{var inst_10407 = (state_10416[2]);var state_10416__$1 = state_10416;var statearr_10429_10446 = state_10416__$1;(statearr_10429_10446[2] = inst_10407);
(statearr_10429_10446[1] = 7);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10433 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10433[0] = state_machine__6138__auto__);
(statearr_10433[1] = 1);
return statearr_10433;
});
var state_machine__6138__auto____1 = (function (state_10416){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10416);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10434){if((e10434 instanceof Object))
{var ex__6141__auto__ = e10434;var statearr_10435_10447 = state_10416;(statearr_10435_10447[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10416);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10448 = state_10416;
state_10416 = G__10448;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10416){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10436 = f__6153__auto__.call(null);(statearr_10436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_10436;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
app.core.admin_actions = (function admin_actions(app__$1,state,owner){return React.DOM.div({"className": "app__sidebar__admins"},(cljs.core.truth_(new cljs.core.Keyword(null,"admin","admin",1106572993).cljs$core$IFn$_invoke$arity$1(state))?React.DOM.div(null,React.DOM.button({"onClick": (function (){om.core.transact_BANG_.call(null,app__$1,(function (_){return app.core.defo_state;
}));
return app.core.check_freebox_status.call(null,app__$1);
}), "className": "topcoat-button"},"Clear all"),React.DOM.br(null),React.DOM.button({"onClick": (function (){om.core.update_BANG_.call(null,app__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-token","app-token",1425759935)], null),null);
return app.core.check_freebox_status.call(null,app__$1);
}), "className": "topcoat-button"},"Clear box"),React.DOM.button({"onClick": (function (){return om.core.transact_BANG_.call(null,app__$1,(function (st){return cljs.core.assoc.call(null,app.core.defo_state,new cljs.core.Keyword(null,"app-token","app-token",1425759935),new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(st),new cljs.core.Keyword(null,"session-token","session-token",4078795636),new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(st));
}));
}), "className": "topcoat-button"},"Clear shows")):React.DOM.button({"onClick": (function (){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"admin","admin",1106572993),true);
}), "className": "topcoat-button"},"Admin")));
});
app.core.reset_show_chan = cljs.core.async.chan.call(null);
app.core.tivi_view = (function tivi_view(app__$1,owner){if(typeof app.core.t10517 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t10517 = (function (owner,app,tivi_view,meta10518){
this.owner = owner;
this.app = app;
this.tivi_view = tivi_view;
this.meta10518 = meta10518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t10517.cljs$lang$type = true;
app.core.t10517.cljs$lang$ctorStr = "app.core/t10517";
app.core.t10517.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"app.core/t10517");
});
app.core.t10517.prototype.om$core$IRenderState$ = true;
app.core.t10517.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "app"},React.DOM.aside({"className": "app__sidebar"},om.core.build.call(null,app.core.topcoat_list_view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"shows","shows",1123317896).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.Keyword(null,"display","display",2685668404),(function (item,container){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"editing","editing",3420907786).cljs$core$IFn$_invoke$arity$1(state)))
{return React.DOM.form({"onSubmit": (function (e,own){var newval = om.core.get_node.call(null,container,"show-name-change").value;return e.preventDefault().call(null,om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"shows","shows",1123317896),(function (shows){return cljs.core.map.call(null,(function (p1__10449_SHARP_){if(cljs.core._EQ_.call(null,p1__10449_SHARP_,item))
{return cljs.core.assoc.call(null,p1__10449_SHARP_,new cljs.core.Keyword(null,"name","name",1017277949),newval);
} else
{return p1__10449_SHARP_;
}
}),shows);
})),om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),null),om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.Keyword(null,"name","name",1017277949)], null),newval),om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"show-name","show-name",3359181517)], null),newval));
}), "className": "add-show-input"},om.dom.input.call(null,{"ref": "show-name-change", "defaultValue": new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item), "className": "topcoat-text-input", "type": "text"}));
} else
{return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item);
}
}),new cljs.core.Keyword(null,"header","header",4087600639),"Shows",new cljs.core.Keyword(null,"listCls","listCls",1195843358),"shows",new cljs.core.Keyword(null,"click","click",1108654330),(function (p1__10450_SHARP_){return om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267)], null),p1__10450_SHARP_);
}),new cljs.core.Keyword(null,"db-click","db-click",1660355307),(function (p1__10451_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__10451_SHARP_));
})], null),self__.app)),om.core.build.call(null,app.core.add_show_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add","add",1014000659),new cljs.core.Keyword(null,"add","add",1014000659).cljs$core$IFn$_invoke$arity$1(state)], null)], null)),app.core.admin_actions.call(null,self__.app,state,self__.owner)),React.DOM.section({"className": "app__details"},app.core.display_show.call(null,new cljs.core.Keyword(null,"watches","watches",2139868463).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(self__.app))));
});
app.core.t10517.prototype.om$core$IWillMount$ = true;
app.core.t10517.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var add = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"add","add",1014000659));var main = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"main","main",1017248043));app.core.check_freebox_status.call(null,self__.app);
var c__6152__auto___10582 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10528){var state_val_10529 = (state_10528[1]);if((state_val_10529 === 4))
{var inst_10522 = (state_10528[2]);var inst_10523 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"shows","shows",1123317896),cljs.core.conj,inst_10522);var state_10528__$1 = (function (){var statearr_10530 = state_10528;(statearr_10530[7] = inst_10523);
return statearr_10530;
})();var statearr_10531_10583 = state_10528__$1;(statearr_10531_10583[2] = null);
(statearr_10531_10583[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10529 === 3))
{var inst_10526 = (state_10528[2]);var state_10528__$1 = state_10528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10528__$1,inst_10526);
} else
{if((state_val_10529 === 2))
{var state_10528__$1 = state_10528;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10528__$1,4,add);
} else
{if((state_val_10529 === 1))
{var state_10528__$1 = state_10528;var statearr_10532_10584 = state_10528__$1;(statearr_10532_10584[2] = null);
(statearr_10532_10584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10536 = [null,null,null,null,null,null,null,null];(statearr_10536[0] = state_machine__6138__auto__);
(statearr_10536[1] = 1);
return statearr_10536;
});
var state_machine__6138__auto____1 = (function (state_10528){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10528);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10537){if((e10537 instanceof Object))
{var ex__6141__auto__ = e10537;var statearr_10538_10585 = state_10528;(statearr_10538_10585[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10528);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10537;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10586 = state_10528;
state_10528 = G__10586;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10528){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10539 = f__6153__auto__.call(null);(statearr_10539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___10582);
return statearr_10539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
var c__6152__auto___10587 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10549){var state_val_10550 = (state_10549[1]);if((state_val_10550 === 4))
{var inst_10542 = (state_10549[2]);var inst_10543 = (function (){var current = inst_10542;return ((function (current,inst_10542,state_val_10550){
return (function (c){return current;
});
;})(current,inst_10542,state_val_10550))
})();var inst_10544 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"current","current",2140844267),inst_10543);var state_10549__$1 = (function (){var statearr_10551 = state_10549;(statearr_10551[7] = inst_10544);
return statearr_10551;
})();var statearr_10552_10588 = state_10549__$1;(statearr_10552_10588[2] = null);
(statearr_10552_10588[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10550 === 3))
{var inst_10547 = (state_10549[2]);var state_10549__$1 = state_10549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10549__$1,inst_10547);
} else
{if((state_val_10550 === 2))
{var state_10549__$1 = state_10549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10549__$1,4,main);
} else
{if((state_val_10550 === 1))
{var state_10549__$1 = state_10549;var statearr_10553_10589 = state_10549__$1;(statearr_10553_10589[2] = null);
(statearr_10553_10589[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10557 = [null,null,null,null,null,null,null,null];(statearr_10557[0] = state_machine__6138__auto__);
(statearr_10557[1] = 1);
return statearr_10557;
});
var state_machine__6138__auto____1 = (function (state_10549){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10549);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10558){if((e10558 instanceof Object))
{var ex__6141__auto__ = e10558;var statearr_10559_10590 = state_10549;(statearr_10559_10590[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10549);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10591 = state_10549;
state_10549 = G__10591;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10549){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10560 = f__6153__auto__.call(null);(statearr_10560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___10587);
return statearr_10560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10570){var state_val_10571 = (state_10570[1]);if((state_val_10571 === 4))
{var inst_10563 = (state_10570[2]);var inst_10564 = (function (){var reset = inst_10563;return ((function (reset,inst_10563,state_val_10571){
return (function (w){return cljs.core.dissoc.call(null,w,reset);
});
;})(reset,inst_10563,state_val_10571))
})();var inst_10565 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"watches","watches",2139868463),inst_10564);var state_10570__$1 = (function (){var statearr_10572 = state_10570;(statearr_10572[7] = inst_10565);
return statearr_10572;
})();var statearr_10573_10592 = state_10570__$1;(statearr_10573_10592[2] = null);
(statearr_10573_10592[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10571 === 3))
{var inst_10568 = (state_10570[2]);var state_10570__$1 = state_10570;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10570__$1,inst_10568);
} else
{if((state_val_10571 === 2))
{var state_10570__$1 = state_10570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10570__$1,4,app.core.reset_show_chan);
} else
{if((state_val_10571 === 1))
{var state_10570__$1 = state_10570;var statearr_10574_10593 = state_10570__$1;(statearr_10574_10593[2] = null);
(statearr_10574_10593[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10578 = [null,null,null,null,null,null,null,null];(statearr_10578[0] = state_machine__6138__auto__);
(statearr_10578[1] = 1);
return statearr_10578;
});
var state_machine__6138__auto____1 = (function (state_10570){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10570);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10579){if((e10579 instanceof Object))
{var ex__6141__auto__ = e10579;var statearr_10580_10594 = state_10570;(statearr_10580_10594[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10570);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10579;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10595 = state_10570;
state_10570 = G__10595;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10570){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10581 = f__6153__auto__.call(null);(statearr_10581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_10581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
app.core.t10517.prototype.om$core$IInitState$ = true;
app.core.t10517.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",1014000659),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"main","main",1017248043),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",1017196294),new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.Keyword(null,"show","show",1017433711),"test"], null)], null);
});
app.core.t10517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10519){var self__ = this;
var _10519__$1 = this;return self__.meta10518;
});
app.core.t10517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10519,meta10518__$1){var self__ = this;
var _10519__$1 = this;return (new app.core.t10517(self__.owner,self__.app,self__.tivi_view,meta10518__$1));
});
app.core.__GT_t10517 = (function __GT_t10517(owner__$1,app__$2,tivi_view__$1,meta10518){return (new app.core.t10517(owner__$1,app__$2,tivi_view__$1,meta10518));
});
}
return (new app.core.t10517(owner,app__$1,tivi_view,null));
});
app.core.check_freebox_status = (function check_freebox_status(app__$1){if(cljs.core.truth_(new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(app__$1)))
{return app.core.freebox_session.call(null,new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(app__$1),(function (p1__10596_SHARP_){cljs.core.prn.call(null,p1__10596_SHARP_);
return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"session-token","session-token",4078795636),(function (_){return p1__10596_SHARP_;
}));
}));
} else
{return app.core.freebox_autorize.call(null,(function (p1__10597_SHARP_){return app.core.check_track.call(null,app__$1,p1__10597_SHARP_);
}));
}
});
app.core.check_track = (function check_track(app__$1,aut){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10670){var state_val_10671 = (state_10670[1]);if((state_val_10671 === 9))
{var inst_10658 = (state_10670[2]);var inst_10647 = inst_10658;var state_10670__$1 = (function (){var statearr_10672 = state_10670;(statearr_10672[7] = inst_10647);
return statearr_10672;
})();var statearr_10673_10688 = state_10670__$1;(statearr_10673_10688[2] = null);
(statearr_10673_10688[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10671 === 8))
{var inst_10654 = (state_10670[2]);var inst_10655 = new cljs.core.Keyword(null,"track_id","track_id",2284383233).cljs$core$IFn$_invoke$arity$1(aut);var inst_10656 = app.core.freebox_track_id.call(null,inst_10655);var state_10670__$1 = (function (){var statearr_10674 = state_10670;(statearr_10674[8] = inst_10654);
return statearr_10674;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10670__$1,9,inst_10656);
} else
{if((state_val_10671 === 7))
{var inst_10666 = (state_10670[2]);var state_10670__$1 = state_10670;var statearr_10675_10689 = state_10670__$1;(statearr_10675_10689[2] = inst_10666);
(statearr_10675_10689[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10671 === 6))
{var inst_10647 = (state_10670[7]);var inst_10661 = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(inst_10647);var inst_10662 = new cljs.core.Keyword(null,"app_token","app_token",2857217485).cljs$core$IFn$_invoke$arity$1(aut);var inst_10663 = new cljs.core.Keyword(null,"challenge","challenge",2416537557).cljs$core$IFn$_invoke$arity$1(inst_10647);var inst_10664 = app.core.manage_pending.call(null,inst_10661,inst_10662,inst_10663,app__$1);var state_10670__$1 = state_10670;var statearr_10676_10690 = state_10670__$1;(statearr_10676_10690[2] = inst_10664);
(statearr_10676_10690[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10671 === 5))
{var inst_10652 = cljs.core.async.timeout.call(null,3000);var state_10670__$1 = state_10670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10670__$1,8,inst_10652);
} else
{if((state_val_10671 === 4))
{var inst_10668 = (state_10670[2]);var state_10670__$1 = state_10670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10670__$1,inst_10668);
} else
{if((state_val_10671 === 3))
{var inst_10647 = (state_10670[7]);var inst_10649 = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(inst_10647);var inst_10650 = cljs.core._EQ_.call(null,"pending",inst_10649);var state_10670__$1 = state_10670;if(inst_10650)
{var statearr_10677_10691 = state_10670__$1;(statearr_10677_10691[1] = 5);
} else
{var statearr_10678_10692 = state_10670__$1;(statearr_10678_10692[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10671 === 2))
{var inst_10646 = (state_10670[2]);var inst_10647 = inst_10646;var state_10670__$1 = (function (){var statearr_10679 = state_10670;(statearr_10679[7] = inst_10647);
return statearr_10679;
})();var statearr_10680_10693 = state_10670__$1;(statearr_10680_10693[2] = null);
(statearr_10680_10693[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10671 === 1))
{var inst_10643 = new cljs.core.Keyword(null,"track_id","track_id",2284383233).cljs$core$IFn$_invoke$arity$1(aut);var inst_10644 = app.core.freebox_track_id.call(null,inst_10643);var state_10670__$1 = state_10670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10670__$1,2,inst_10644);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10684 = [null,null,null,null,null,null,null,null,null];(statearr_10684[0] = state_machine__6138__auto__);
(statearr_10684[1] = 1);
return statearr_10684;
});
var state_machine__6138__auto____1 = (function (state_10670){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10670);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10685){if((e10685 instanceof Object))
{var ex__6141__auto__ = e10685;var statearr_10686_10694 = state_10670;(statearr_10686_10694[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10670);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10685;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10695 = state_10670;
state_10670 = G__10695;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10670){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10687 = f__6153__auto__.call(null);(statearr_10687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_10687;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
app.core.manage_pending = (function manage_pending(status,app_token,challenge,app__$1){cljs.core.prn.call(null,"manage pending");
if(cljs.core._EQ_.call(null,"granted",status))
{ajax.core.GET.call(null,"http://88.124.156.100/api/v1/login");
return app.core.freebox_session_save.call(null,app.core.freebox_make_password.call(null,challenge,app_token),(function (p1__10696_SHARP_){om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"session-token","session-token",4078795636),(function (_){return p1__10696_SHARP_;
}));
return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"app-token","app-token",1425759935),(function (_){return app_token;
}));
}));
} else
{return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"app-token","app-token",1425759935),(function (_){return null;
}));
}
});
om.core.root.call(null,app.core.tivi_view,app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map