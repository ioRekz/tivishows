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
var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_10640){var state_val_10641 = (state_10640[1]);if((state_val_10641 === 2))
{var inst_10628 = (state_10640[2]);var inst_10629 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_10628);var inst_10630 = app.core.parse_xml_shows.call(null,inst_10629);var inst_10631 = (function (){var data = inst_10630;var response = inst_10628;return ((function (data,response,inst_10628,inst_10629,inst_10630,state_val_10641){
return (function (sh){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.get.call(null,sh,"name"),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,sh,"showid")], null);
});
;})(data,response,inst_10628,inst_10629,inst_10630,state_val_10641))
})();var inst_10632 = cljs.core.get.call(null,inst_10630,"Results");var inst_10633 = cljs.core.get.call(null,inst_10632,"show");var inst_10634 = [inst_10633];var inst_10635 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10634,null));var inst_10636 = cljs.core.flatten.call(null,inst_10635);var inst_10637 = cljs.core.map.call(null,inst_10631,inst_10636);var inst_10638 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"shows","shows",1123317896),inst_10637);var state_10640__$1 = state_10640;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10640__$1,inst_10638);
} else
{if((state_val_10641 === 1))
{var inst_10622 = [cljs.core.str("http://services.tvrage.com/feeds/search.php?show="),cljs.core.str(query)].join('');var inst_10623 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",3165820380)];var inst_10624 = [false];var inst_10625 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10623,inst_10624);var inst_10626 = cljs_http.client.get.call(null,inst_10622,inst_10625);var state_10640__$1 = state_10640;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10640__$1,2,inst_10626);
} else
{return null;
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_10645 = [null,null,null,null,null,null,null];(statearr_10645[0] = state_machine__6136__auto__);
(statearr_10645[1] = 1);
return statearr_10645;
});
var state_machine__6136__auto____1 = (function (state_10640){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_10640);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e10646){if((e10646 instanceof Object))
{var ex__6139__auto__ = e10646;var statearr_10647_10649 = state_10640;(statearr_10647_10649[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10640);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10646;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10650 = state_10640;
state_10640 = G__10650;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_10640){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_10640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_10648 = f__6151__auto__.call(null);(statearr_10648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_10648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.parse_episode_list = (function parse_episode_list(show,callb){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_10694){var state_val_10695 = (state_10694[1]);if((state_val_10695 === 2))
{var inst_10683 = (state_10694[2]);var inst_10684 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_10683);var inst_10685 = app.core.parse_xml_shows.call(null,inst_10684);var inst_10686 = cljs.core.get.call(null,inst_10685,"Show");var inst_10687 = cljs.core.get.call(null,inst_10686,"Episodelist");var inst_10688 = cljs.core.get.call(null,inst_10687,"Season");var inst_10689 = [inst_10688];var inst_10690 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10689,null));var inst_10691 = cljs.core.flatten.call(null,inst_10690);var inst_10692 = callb.call(null,inst_10691);var state_10694__$1 = state_10694;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10694__$1,inst_10692);
} else
{if((state_val_10695 === 1))
{var inst_10677 = [cljs.core.str("http://services.tvrage.com/feeds/episode_list.php?sid="),cljs.core.str(show)].join('');var inst_10678 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",3165820380)];var inst_10679 = [false];var inst_10680 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10678,inst_10679);var inst_10681 = cljs_http.client.get.call(null,inst_10677,inst_10680);var state_10694__$1 = state_10694;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10694__$1,2,inst_10681);
} else
{return null;
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_10699 = [null,null,null,null,null,null,null];(statearr_10699[0] = state_machine__6136__auto__);
(statearr_10699[1] = 1);
return statearr_10699;
});
var state_machine__6136__auto____1 = (function (state_10694){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_10694);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e10700){if((e10700 instanceof Object))
{var ex__6139__auto__ = e10700;var statearr_10701_10703 = state_10694;(statearr_10701_10703[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10694);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10700;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10704 = state_10694;
state_10694 = G__10704;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_10694){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_10694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_10702 = f__6151__auto__.call(null);(statearr_10702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_10702;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.format_number_zero = (function format_number_zero(num){if((num < 10))
{return [cljs.core.str(0),cljs.core.str(num)].join('');
} else
{return [cljs.core.str(num)].join('');
}
});
app.core.get_magnet_link = (function get_magnet_link(showw,season,episode){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_10761){var state_val_10762 = (state_10761[1]);if((state_val_10762 === 2))
{var inst_10747 = (state_10761[2]);var inst_10748 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_10747);var inst_10749 = $(inst_10748);var inst_10750 = inst_10749.find(".detName:first-child + a");var inst_10751 = inst_10750.attr("href");var inst_10752 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_10747);var inst_10753 = $(inst_10752);var inst_10754 = inst_10753.find(".detName a");var inst_10755 = inst_10754.first();var inst_10756 = inst_10755.text();var inst_10757 = [new cljs.core.Keyword(null,"magnet","magnet",4227240668),new cljs.core.Keyword(null,"file-name","file-name",3946227630)];var inst_10758 = [inst_10751,inst_10756];var inst_10759 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10757,inst_10758);var state_10761__$1 = state_10761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10761__$1,inst_10759);
} else
{if((state_val_10762 === 1))
{var inst_10738 = app.core.format_number_zero.call(null,season);var inst_10739 = app.core.format_number_zero.call(null,episode);var inst_10740 = encodeURIComponent(showw);var inst_10741 = [cljs.core.str("http://thepiratebay.se/search/"),cljs.core.str(inst_10740),cljs.core.str(" s"),cljs.core.str(inst_10738),cljs.core.str("e"),cljs.core.str(episode),cljs.core.str("/0/7/0")].join('');var inst_10742 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",3165820380)];var inst_10743 = [false];var inst_10744 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10742,inst_10743);var inst_10745 = cljs_http.client.get.call(null,inst_10741,inst_10744);var state_10761__$1 = (function (){var statearr_10763 = state_10761;(statearr_10763[7] = inst_10739);
return statearr_10763;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10761__$1,2,inst_10745);
} else
{return null;
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_10767 = [null,null,null,null,null,null,null,null];(statearr_10767[0] = state_machine__6136__auto__);
(statearr_10767[1] = 1);
return statearr_10767;
});
var state_machine__6136__auto____1 = (function (state_10761){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_10761);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e10768){if((e10768 instanceof Object))
{var ex__6139__auto__ = e10768;var statearr_10769_10771 = state_10761;(statearr_10769_10771[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10761);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10772 = state_10761;
state_10761 = G__10772;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_10761){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_10761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_10770 = f__6151__auto__.call(null);(statearr_10770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_10770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.get_subtitle_link = (function get_subtitle_link(show,season,episode){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_10839){var state_val_10840 = (state_10839[1]);if((state_val_10840 === 8))
{var inst_10837 = (state_10839[2]);var state_10839__$1 = state_10839;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10839__$1,inst_10837);
} else
{if((state_val_10840 === 7))
{var state_10839__$1 = state_10839;var statearr_10841_10857 = state_10839__$1;(statearr_10841_10857[2] = null);
(statearr_10841_10857[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10840 === 6))
{var inst_10827 = (state_10839[7]);var inst_10834 = [cljs.core.str("http://www.addic7ed.com"),cljs.core.str(inst_10827)].join('');var state_10839__$1 = state_10839;var statearr_10842_10858 = state_10839__$1;(statearr_10842_10858[2] = inst_10834);
(statearr_10842_10858[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10840 === 5))
{var inst_10832 = (state_10839[2]);var state_10839__$1 = state_10839;if(cljs.core.truth_(inst_10832))
{var statearr_10843_10859 = state_10839__$1;(statearr_10843_10859[1] = 6);
} else
{var statearr_10844_10860 = state_10839__$1;(statearr_10844_10860[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10840 === 4))
{var inst_10827 = (state_10839[7]);var state_10839__$1 = state_10839;var statearr_10845_10861 = state_10839__$1;(statearr_10845_10861[2] = inst_10827);
(statearr_10845_10861[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10840 === 3))
{var inst_10826 = (state_10839[8]);var inst_10829 = cljs.core._EQ_.call(null,inst_10826,"Completed");var state_10839__$1 = state_10839;var statearr_10846_10862 = state_10839__$1;(statearr_10846_10862[2] = inst_10829);
(statearr_10846_10862[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10840 === 2))
{var inst_10827 = (state_10839[7]);var inst_10818 = (state_10839[2]);var inst_10819 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_10818);var inst_10820 = $(inst_10819);var inst_10821 = inst_10820.find(".buttonDownload");var inst_10822 = inst_10821.first();var inst_10823 = inst_10822.parent();var inst_10824 = inst_10823.prev();var inst_10825 = inst_10824.text();var inst_10826 = inst_10825.trim();var inst_10827__$1 = inst_10821.attr("href");var state_10839__$1 = (function (){var statearr_10847 = state_10839;(statearr_10847[8] = inst_10826);
(statearr_10847[7] = inst_10827__$1);
return statearr_10847;
})();if(cljs.core.truth_(inst_10827__$1))
{var statearr_10848_10863 = state_10839__$1;(statearr_10848_10863[1] = 3);
} else
{var statearr_10849_10864 = state_10839__$1;(statearr_10849_10864[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10840 === 1))
{var inst_10815 = [cljs.core.str("http://www.addic7ed.com/serie/"),cljs.core.str(show),cljs.core.str("/"),cljs.core.str(season),cljs.core.str("/"),cljs.core.str(episode),cljs.core.str("/8")].join('');var inst_10816 = cljs_http.client.get.call(null,inst_10815);var state_10839__$1 = state_10839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10839__$1,2,inst_10816);
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
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_10853 = [null,null,null,null,null,null,null,null,null];(statearr_10853[0] = state_machine__6136__auto__);
(statearr_10853[1] = 1);
return statearr_10853;
});
var state_machine__6136__auto____1 = (function (state_10839){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_10839);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e10854){if((e10854 instanceof Object))
{var ex__6139__auto__ = e10854;var statearr_10855_10865 = state_10839;(statearr_10855_10865[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10839);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10866 = state_10839;
state_10839 = G__10866;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_10839){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_10839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_10856 = f__6151__auto__.call(null);(statearr_10856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_10856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
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
app.core.moviedb_get_image_url = (function moviedb_get_image_url(show_name){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,app.core.moviedb_search.call(null,show_name),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10867_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,app.core.moviedb_image_url.call(null,new cljs.core.Keyword(null,"backdrop_path","backdrop_path",4386024928).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(p1__10867_SHARP_)))));
})], null));
return ch;
});
app.core.app_id = "iorek.tivishows4";
app.core.dir_base = "/Disque dur/Videos/";
app.core.freebox_get = (function freebox_get(url,token){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,[cljs.core.str("http://88.124.156.100/api/v1/"),cljs.core.str(url)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10868_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10868_SHARP_));
})], null));
return ch;
});
app.core.freebox_autorize = (function freebox_autorize(do_with_token){return ajax.core.POST.call(null,"http://88.124.156.100/api/v1/login/authorize/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"app_id","app_id",3897797483),app.core.app_id,new cljs.core.Keyword(null,"app_name","app_name",2181552475),"tivishows",new cljs.core.Keyword(null,"app_version","app_version",4407001132),"1",new cljs.core.Keyword(null,"device_name","device_name",3765800518),"Nexus Pad"], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10869_SHARP_){return do_with_token.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10869_SHARP_));
})], null));
});
app.core.freebox_session = (function freebox_session(app_token,do_with_session){return ajax.core.GET.call(null,"http://88.124.156.100/api/v1/login/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10870_SHARP_){var challenge = new cljs.core.Keyword(null,"challenge","challenge",2416537557).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10870_SHARP_));return app.core.freebox_session_save.call(null,app.core.freebox_make_password.call(null,challenge,app_token),do_with_session);
})], null));
});
app.core.freebox_session_save = (function freebox_session_save(pass,do_with_session){return ajax.core.POST.call(null,"http://88.124.156.100/api/v1/login/session/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app_id","app_id",3897797483),app.core.app_id,new cljs.core.Keyword(null,"password","password",2230889997),pass], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10871_SHARP_){return do_with_session.call(null,new cljs.core.Keyword(null,"session_token","session_token",1215285890).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10871_SHARP_)));
})], null));
});
app.core.freebox_track_id = (function freebox_track_id(id){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,[cljs.core.str("http://88.124.156.100/api/v1/login/authorize/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10872_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10872_SHARP_));
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
var freebox_call__delegate = function (method,uri,p__10875){var map__10877 = p__10875;var map__10877__$1 = ((cljs.core.seq_QMARK_.call(null,map__10877))?cljs.core.apply.call(null,cljs.core.hash_map,map__10877):map__10877);var channel = cljs.core.get.call(null,map__10877__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var proj = cljs.core.get.call(null,map__10877__$1,new cljs.core.Keyword(null,"proj","proj",1017353935));var opts = cljs.core.get.call(null,map__10877__$1,new cljs.core.Keyword(null,"opts","opts",1017322386));var ch = (function (){var or__3401__auto__ = channel;if(cljs.core.truth_(or__3401__auto__))
{return or__3401__auto__;
} else
{return cljs.core.async.chan.call(null);
}
})();var default_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.app_state))], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (ch){
return (function (p1__10873_SHARP_){cljs.core.prn.call(null,"handler");
return cljs.core.async.put_BANG_.call(null,ch,cljs.core.get_in.call(null,p1__10873_SHARP_,proj));
});})(ch))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (ch){
return (function (res){if(cljs.core._EQ_.call(null,"auth_required",new cljs.core.Keyword(null,"error_code","error_code",2649591094).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"response","response",673580979).cljs$core$IFn$_invoke$arity$1(res))))
{return app.core.freebox_session.call(null,new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.app_state)),((function (ch){
return (function (p1__10874_SHARP_){cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"session-token","session-token",4078795636),p1__10874_SHARP_);
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
var p__10875 = null;if (arguments.length > 2) {
  p__10875 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return freebox_call__delegate.call(this,method,uri,p__10875);};
freebox_call.cljs$lang$maxFixedArity = 2;
freebox_call.cljs$lang$applyTo = (function (arglist__10878){
var method = cljs.core.first(arglist__10878);
arglist__10878 = cljs.core.next(arglist__10878);
var uri = cljs.core.first(arglist__10878);
var p__10875 = cljs.core.rest(arglist__10878);
return freebox_call__delegate(method,uri,p__10875);
});
freebox_call.cljs$core$IFn$_invoke$arity$variadic = freebox_call__delegate;
return freebox_call;
})()
;
app.core.freebox_get_download_percent = (function freebox_get_download_percent(id,session_token,do_with_percent){return app.core.freebox_get_download.call(null,id,session_token,(function (p1__10879_SHARP_){return do_with_percent.call(null,(new cljs.core.Keyword(null,"rx_pct","rx_pct",4391390938).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10879_SHARP_)) / 100));
}));
});
app.core.freebox_get_download_details = (function freebox_get_download_details(id,session_token){return app.core.freebox_call.call(null,ajax.core.GET,[cljs.core.str("/downloads/"),cljs.core.str(id)].join(''));
});
app.core.freebox_get_download = (function freebox_get_download(id,session_token,handler){return ajax.core.GET.call(null,[cljs.core.str("http://88.124.156.100/api/v1/downloads/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),session_token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),handler], null));
});
app.core.freebox_get_upload_id = (function freebox_get_upload_id(session_token,dirname,upname){var ch = cljs.core.async.chan.call(null);ajax.core.POST.call(null,[cljs.core.str("http://88.124.156.100/api/v1/upload/")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dirname","dirname",2684675082),dirname,new cljs.core.Keyword(null,"upload_name","upload_name",2078716283),[cljs.core.str(upname),cljs.core.str(".srt")].join('')], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),session_token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10880_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10880_SHARP_)));
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
app.core.topcoat_list_view = (function topcoat_list_view(app__$1,owner){if(typeof app.core.t10884 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t10884 = (function (owner,app,topcoat_list_view,meta10885){
this.owner = owner;
this.app = app;
this.topcoat_list_view = topcoat_list_view;
this.meta10885 = meta10885;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t10884.cljs$lang$type = true;
app.core.t10884.cljs$lang$ctorStr = "app.core/t10884";
app.core.t10884.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t10884");
});
app.core.t10884.prototype.om$core$IRenderState$ = true;
app.core.t10884.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div({"className": [cljs.core.str("topcoat-list__container"),cljs.core.str(new cljs.core.Keyword(null,"listCls","listCls",1195843358).cljs$core$IFn$_invoke$arity$1(app.core.data))].join('')},(cljs.core.truth_(new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(self__.app))?React.DOM.h3({"className": "topcoat-list__header"},new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(self__.app)):null),cljs.core.apply.call(null,om.dom.ul,{"className": "topcoat-list list "},cljs.core.map.call(null,(function (item){return React.DOM.li({"onDoubleClick": (function (){return new cljs.core.Keyword(null,"db-click","db-click",1660355307).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,item);
}), "onClick": (function (){return new cljs.core.Keyword(null,"click","click",1108654330).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,item);
}), "className": "topcoat-list__item"},new cljs.core.Keyword(null,"display","display",2685668404).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,item,self__.owner));
}),new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(self__.app))),(cljs.core.truth_(new cljs.core.Keyword(null,"extra","extra",1110869890).cljs$core$IFn$_invoke$arity$1(self__.app))?new cljs.core.Keyword(null,"extra","extra",1110869890).cljs$core$IFn$_invoke$arity$1(self__.app):null));
});
app.core.t10884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10886){var self__ = this;
var _10886__$1 = this;return self__.meta10885;
});
app.core.t10884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10886,meta10885__$1){var self__ = this;
var _10886__$1 = this;return (new app.core.t10884(self__.owner,self__.app,self__.topcoat_list_view,meta10885__$1));
});
app.core.__GT_t10884 = (function __GT_t10884(owner__$1,app__$2,topcoat_list_view__$1,meta10885){return (new app.core.t10884(owner__$1,app__$2,topcoat_list_view__$1,meta10885));
});
}
return (new app.core.t10884(owner,app__$1,topcoat_list_view,null));
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
app.core.add_show_view = (function add_show_view(app__$1,owner){if(typeof app.core.t10892 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t10892 = (function (owner,app,add_show_view,meta10893){
this.owner = owner;
this.app = app;
this.add_show_view = add_show_view;
this.meta10893 = meta10893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t10892.cljs$lang$type = true;
app.core.t10892.cljs$lang$ctorStr = "app.core/t10892";
app.core.t10892.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t10892");
});
app.core.t10892.prototype.om$core$IRenderState$ = true;
app.core.t10892.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,st){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "topcoat-list"},React.DOM.h3({"className": "topcoat-list__header"},"Add Show"),React.DOM.form({"onSubmit": (function (p1__10887_SHARP_){return app.core.findShows.call(null,p1__10887_SHARP_,self__.owner,om.core.get_node.call(null,self__.owner,"show-name").value);
}), "className": "add-show-input"},om.dom.input.call(null,{"ref": "show-name", "placeholder": "show name", "className": "topcoat-text-input", "type": "text"})),cljs.core.apply.call(null,om.dom.ul,{"className": "topcoat-list__container"},cljs.core.map.call(null,(function (show){return React.DOM.li({"onClick": (function (p1__10888_SHARP_){return app.core.save_show.call(null,p1__10888_SHARP_,show,self__.app,self__.owner);
}), "className": "topcoat-list__item"},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(show));
}),new cljs.core.Keyword(null,"shows","shows",1123317896).cljs$core$IFn$_invoke$arity$1(st))));
});
app.core.t10892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10894){var self__ = this;
var _10894__$1 = this;return self__.meta10893;
});
app.core.t10892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10894,meta10893__$1){var self__ = this;
var _10894__$1 = this;return (new app.core.t10892(self__.owner,self__.app,self__.add_show_view,meta10893__$1));
});
app.core.__GT_t10892 = (function __GT_t10892(owner__$1,app__$2,add_show_view__$1,meta10893){return (new app.core.t10892(owner__$1,app__$2,add_show_view__$1,meta10893));
});
}
return (new app.core.t10892(owner,app__$1,add_show_view,null));
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
app.core.show_select_last_view = (function show_select_last_view(app__$1,owner){if(typeof app.core.t10925 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t10925 = (function (owner,app,show_select_last_view,meta10926){
this.owner = owner;
this.app = app;
this.show_select_last_view = show_select_last_view;
this.meta10926 = meta10926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t10925.cljs$lang$type = true;
app.core.t10925.cljs$lang$ctorStr = "app.core/t10925";
app.core.t10925.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t10925");
});
app.core.t10925.prototype.om$core$IRenderState$ = true;
app.core.t10925.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return om.core.build.call(null,app.core.topcoat_list_view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.reverse.call(null,cljs.core.map_indexed.call(null,(function (idx,seas){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1014008367),idx,new cljs.core.Keyword(null,"episodes","episodes",4675925322),seas], null);
}),new cljs.core.Keyword(null,"seasons","seasons",2982274402).cljs$core$IFn$_invoke$arity$1(state))),new cljs.core.Keyword(null,"header","header",4087600639),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.str(" - Click the next episode you want to see !")].join(''),new cljs.core.Keyword(null,"display","display",2685668404),(function (p1__10896_SHARP_){return app.core.show_season_episodes.call(null,self__.app,new cljs.core.Keyword(null,"episodes","episodes",4675925322).cljs$core$IFn$_invoke$arity$1(p1__10896_SHARP_),new cljs.core.Keyword(null,"idx","idx",1014008367).cljs$core$IFn$_invoke$arity$1(p1__10896_SHARP_),new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"mark-chan","mark-chan",4322875844).cljs$core$IFn$_invoke$arity$1(state));
})], null),self__.app));
});
app.core.t10925.prototype.om$core$IWillMount$ = true;
app.core.t10925.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mark_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mark-chan","mark-chan",4322875844));app.core.parse_episode_list.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(self__.app))),(function (p1__10895_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"seasons","seasons",2982274402),p1__10895_SHARP_);
}));
var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_10941){var state_val_10942 = (state_10941[1]);if((state_val_10942 === 4))
{var inst_10930 = (state_10941[2]);var inst_10931 = new cljs.core.Keyword(null,"show","show",1017433711).cljs$core$IFn$_invoke$arity$1(inst_10930);var inst_10932 = (function (){var marked = inst_10930;return ((function (marked,inst_10930,inst_10931,state_val_10942){
return (function (idx,it){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1014008367),idx,new cljs.core.Keyword(null,"episodes","episodes",4675925322),it], null);
});
;})(marked,inst_10930,inst_10931,state_val_10942))
})();var inst_10933 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"seasons","seasons",2982274402));var inst_10934 = cljs.core.map_indexed.call(null,inst_10932,inst_10933);var inst_10935 = new cljs.core.Keyword(null,"episode","episode",3764433261).cljs$core$IFn$_invoke$arity$1(inst_10930);var inst_10936 = app.core.mark_watched.call(null,inst_10931,inst_10934,inst_10935,self__.app);var state_10941__$1 = (function (){var statearr_10943 = state_10941;(statearr_10943[7] = inst_10936);
return statearr_10943;
})();var statearr_10944_10953 = state_10941__$1;(statearr_10944_10953[2] = null);
(statearr_10944_10953[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10942 === 3))
{var inst_10939 = (state_10941[2]);var state_10941__$1 = state_10941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10941__$1,inst_10939);
} else
{if((state_val_10942 === 2))
{var state_10941__$1 = state_10941;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10941__$1,4,mark_chan);
} else
{if((state_val_10942 === 1))
{var state_10941__$1 = state_10941;var statearr_10945_10954 = state_10941__$1;(statearr_10945_10954[2] = null);
(statearr_10945_10954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_10949 = [null,null,null,null,null,null,null,null];(statearr_10949[0] = state_machine__6136__auto__);
(statearr_10949[1] = 1);
return statearr_10949;
});
var state_machine__6136__auto____1 = (function (state_10941){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_10941);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e10950){if((e10950 instanceof Object))
{var ex__6139__auto__ = e10950;var statearr_10951_10955 = state_10941;(statearr_10951_10955[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10941);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10950;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10956 = state_10941;
state_10941 = G__10956;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_10941){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_10941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_10952 = f__6151__auto__.call(null);(statearr_10952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_10952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.t10925.prototype.om$core$IInitState$ = true;
app.core.t10925.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seasons","seasons",2982274402),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"mark-chan","mark-chan",4322875844),cljs.core.async.chan.call(null)], null);
});
app.core.t10925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10927){var self__ = this;
var _10927__$1 = this;return self__.meta10926;
});
app.core.t10925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10927,meta10926__$1){var self__ = this;
var _10927__$1 = this;return (new app.core.t10925(self__.owner,self__.app,self__.show_select_last_view,meta10926__$1));
});
app.core.__GT_t10925 = (function __GT_t10925(owner__$1,app__$2,show_select_last_view__$1,meta10926){return (new app.core.t10925(owner__$1,app__$2,show_select_last_view__$1,meta10926));
});
}
return (new app.core.t10925(owner,app__$1,show_select_last_view,null));
});
app.core.show_season_episodes = (function show_season_episodes(app__$1,season,num,show,mark_chan){return om.core.build.call(null,app.core.topcoat_list_view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",4087600639),[cljs.core.str("Season "),cljs.core.str((num + 1))].join(''),new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,season,"episode")], null)),new cljs.core.Keyword(null,"display","display",2685668404),(function (p1__10957_SHARP_){return React.DOM.span(null,[cljs.core.str("Episode "),cljs.core.str(cljs.core.get.call(null,p1__10957_SHARP_,"seasonnum")),cljs.core.str(" - "),cljs.core.str(cljs.core.get.call(null,p1__10957_SHARP_,"title"))].join(''),React.DOM.em({"className": "download"},app.core.get_air_delay.call(null,cljs.core.get.call(null,p1__10957_SHARP_,"airdate"))));
}),new cljs.core.Keyword(null,"click","click",1108654330),(function (p1__10958_SHARP_){return cljs.core.async.put_BANG_.call(null,mark_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"season","season",4402536021),(num + 1),new cljs.core.Keyword(null,"episode","episode",3764433261),cljs.reader.read_string.call(null,cljs.core.get.call(null,p1__10958_SHARP_,"epnum")),new cljs.core.Keyword(null,"show","show",1017433711),show], null));
})], null),app__$1));
});
app.core.get_air_delay = (function get_air_delay(string_date){return (new moment(string_date)).fromNow();
});
app.core.get_watch_list = (function get_watch_list(seasons,episode){return cljs.core.reduce.call(null,(function (acc,curr){return cljs.core.concat.call(null,acc,cljs.core.remove.call(null,(function (p1__10959_SHARP_){return (new cljs.core.Keyword(null,"episode","episode",3764433261).cljs$core$IFn$_invoke$arity$1(p1__10959_SHARP_) < episode);
}),cljs.core.map.call(null,(function (p1__10960_SHARP_){return app.core.parse_episode.call(null,p1__10960_SHARP_,new cljs.core.Keyword(null,"idx","idx",1014008367).cljs$core$IFn$_invoke$arity$1(curr));
}),cljs.core.get.call(null,new cljs.core.Keyword(null,"episodes","episodes",4675925322).cljs$core$IFn$_invoke$arity$1(curr),"episode"))));
}),cljs.core.PersistentVector.EMPTY,seasons);
});
app.core.mark_watched = (function mark_watched(show,seasons,episode,app__$1){var eps = app.core.get_watch_list.call(null,seasons,episode);window.scrollTo(0,0);
return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,show)),(function (_){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-name","show-name",3359181517),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,show)),new cljs.core.Keyword(null,"show-id","show-id",3081146717),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,show)),new cljs.core.Keyword(null,"episodes","episodes",4675925322),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,eps)], null);
}));
});
app.core.parse_episode = (function parse_episode(ep,seas){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"episode","episode",3764433261),cljs.core.get.call(null,ep,"epnum"),new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025),cljs.core.get.call(null,ep,"seasonnum"),new cljs.core.Keyword(null,"season","season",4402536021),(seas + 1),new cljs.core.Keyword(null,"title","title",1124275658),cljs.core.get.call(null,ep,"title"),new cljs.core.Keyword(null,"air-date","air-date",4569745859),cljs.core.get.call(null,ep,"airdate")], null);
});
app.core.show_watch_list_view = (function show_watch_list_view(app__$1,owner){if(typeof app.core.t10994 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t10994 = (function (owner,app,show_watch_list_view,meta10995){
this.owner = owner;
this.app = app;
this.show_watch_list_view = show_watch_list_view;
this.meta10995 = meta10995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t10994.cljs$lang$type = true;
app.core.t10994.cljs$lang$ctorStr = "app.core/t10994";
app.core.t10994.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t10994");
});
app.core.t10994.prototype.om$core$IRenderState$ = true;
app.core.t10994.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": [cljs.core.str("topcoat-list")].join('')},React.DOM.h3({"className": "topcoat-list__header"},React.DOM.img({"className": "picture", "height": "30%", "src": new cljs.core.Keyword(null,"image","image",1114217677).cljs$core$IFn$_invoke$arity$1(self__.app)})),cljs.core.apply.call(null,om.dom.ul,{"className": "topcoat-list__container"},om.core.build_all.call(null,app.core.episode_view,new cljs.core.Keyword(null,"episodes","episodes",4675925322).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-name","show-name",3359181517),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"token","token",1124445547),new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-name","show-name",3359181517),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)))),React.DOM.button({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,app.core.reset_show_chan,new cljs.core.Keyword(null,"show-id","show-id",3081146717).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)));
}), "className": "topcoat-button reset-show"},"Reset shows"),React.DOM.form({"onSubmit": (function (e,own){var newval = om.core.get_node.call(null,self__.owner,"show-name-change").value;return e.preventDefault().call(null,cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shows","shows",1123317896)], null),(function (shows){return cljs.core.map.call(null,(function (p1__10961_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__10961_SHARP_),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app))))
{return cljs.core.assoc.call(null,p1__10961_SHARP_,new cljs.core.Keyword(null,"name","name",1017277949),newval);
} else
{return p1__10961_SHARP_;
}
}),shows);
})),cljs.core.prn.call(null,cljs.core.deref.call(null,self__.app)),cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.Keyword(null,"name","name",1017277949)], null),newval));
}), "className": "add-show-input"},om.dom.input.call(null,{"onChange": (function (event){var newval = event.target.value;return cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shows","shows",1123317896)], null),(function (shows){return cljs.core.map.call(null,(function (p1__10962_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__10962_SHARP_),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app))))
{return cljs.core.assoc.call(null,p1__10962_SHARP_,new cljs.core.Keyword(null,"name","name",1017277949),newval);
} else
{return p1__10962_SHARP_;
}
}),shows);
})).call(null,cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.Keyword(null,"name","name",1017277949)], null),newval),om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-name","show-name",3359181517)], null),newval));
}), "ref": "show-name-change", "value": new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(self__.app), "className": "topcoat-text-input", "type": "text"})));
});
app.core.t10994.prototype.om$core$IWillMount$ = true;
app.core.t10994.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11012){var state_val_11013 = (state_11012[1]);if((state_val_11013 === 5))
{var inst_11005 = (state_11012[2]);var inst_11006 = (function (){var img = inst_11005;return ((function (img,inst_11005,state_val_11013){
return (function (___$2){return img;
});
;})(img,inst_11005,state_val_11013))
})();var inst_11007 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"image","image",1114217677),inst_11006);var state_11012__$1 = state_11012;var statearr_11014_11025 = state_11012__$1;(statearr_11014_11025[2] = inst_11007);
(statearr_11014_11025[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11013 === 4))
{var inst_11010 = (state_11012[2]);var state_11012__$1 = state_11012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11012__$1,inst_11010);
} else
{if((state_val_11013 === 3))
{var state_11012__$1 = state_11012;var statearr_11015_11026 = state_11012__$1;(statearr_11015_11026[2] = null);
(statearr_11015_11026[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11013 === 2))
{var inst_11001 = cljs.core.deref.call(null,self__.app);var inst_11002 = new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(inst_11001);var inst_11003 = app.core.moviedb_get_image_url.call(null,inst_11002);var state_11012__$1 = state_11012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11012__$1,5,inst_11003);
} else
{if((state_val_11013 === 1))
{var inst_10997 = cljs.core.deref.call(null,self__.app);var inst_10998 = new cljs.core.Keyword(null,"image","image",1114217677).cljs$core$IFn$_invoke$arity$1(inst_10997);var inst_10999 = cljs.core.not.call(null,inst_10998);var state_11012__$1 = state_11012;if(inst_10999)
{var statearr_11016_11027 = state_11012__$1;(statearr_11016_11027[1] = 2);
} else
{var statearr_11017_11028 = state_11012__$1;(statearr_11017_11028[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11021 = [null,null,null,null,null,null,null];(statearr_11021[0] = state_machine__6136__auto__);
(statearr_11021[1] = 1);
return statearr_11021;
});
var state_machine__6136__auto____1 = (function (state_11012){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11012);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11022){if((e11022 instanceof Object))
{var ex__6139__auto__ = e11022;var statearr_11023_11029 = state_11012;(statearr_11023_11029[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11022;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11030 = state_11012;
state_11012 = G__11030;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11012){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11024 = f__6151__auto__.call(null);(statearr_11024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.t10994.prototype.om$core$IDidMount$ = true;
app.core.t10994.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.prn.call(null,self__.app);
});
app.core.t10994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10996){var self__ = this;
var _10996__$1 = this;return self__.meta10995;
});
app.core.t10994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10996,meta10995__$1){var self__ = this;
var _10996__$1 = this;return (new app.core.t10994(self__.owner,self__.app,self__.show_watch_list_view,meta10995__$1));
});
app.core.__GT_t10994 = (function __GT_t10994(owner__$1,app__$2,show_watch_list_view__$1,meta10995){return (new app.core.t10994(owner__$1,app__$2,show_watch_list_view__$1,meta10995));
});
}
return (new app.core.t10994(owner,app__$1,show_watch_list_view,null));
});
cljs.core.prn.call(null,cljs.core.deref.call(null,app.core.app_state));
app.core.episode_view = (function episode_view(app__$1,owner,opts){if(typeof app.core.t11130 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t11130 = (function (opts,owner,app,episode_view,meta11131){
this.opts = opts;
this.owner = owner;
this.app = app;
this.episode_view = episode_view;
this.meta11131 = meta11131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t11130.cljs$lang$type = true;
app.core.t11130.cljs$lang$ctorStr = "app.core/t11130";
app.core.t11130.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t11130");
});
app.core.t11130.prototype.om$core$IRenderState$ = true;
app.core.t11130.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
}), "ref": "contz", "className": "topcoat-list__item"},React.DOM.span({"className": "finished"},cljs.core.subs.call(null,display_name,0,new cljs.core.Keyword(null,"on-device-progress","on-device-progress",3750775624).cljs$core$IFn$_invoke$arity$1(self__.app))),React.DOM.span(null,cljs.core.subs.call(null,display_name,new cljs.core.Keyword(null,"on-device-progress","on-device-progress",3750775624).cljs$core$IFn$_invoke$arity$1(self__.app),display_size)),(cljs.core.truth_((function (){var and__3389__auto__ = cljs.core.contains_QMARK_.call(null,self__.app,new cljs.core.Keyword(null,"air-date","air-date",4569745859));if(and__3389__auto__)
{return app.core.in_future_QMARK_.call(null,new cljs.core.Keyword(null,"air-date","air-date",4569745859).cljs$core$IFn$_invoke$arity$1(self__.app));
} else
{return and__3389__auto__;
}
})())?React.DOM.em({"className": "download"},app.core.get_air_delay.call(null,new cljs.core.Keyword(null,"air-date","air-date",4569745859).cljs$core$IFn$_invoke$arity$1(self__.app))):null),(cljs.core.truth_(new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(self__.app))?React.DOM.em({"className": [cljs.core.str("download "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"percent","percent",4629944247).cljs$core$IFn$_invoke$arity$1(self__.app),100))?"finished":""))].join('')},[cljs.core.str(new cljs.core.Keyword(null,"percent","percent",4629944247).cljs$core$IFn$_invoke$arity$1(self__.app)),cljs.core.str("%")].join('')):null),((cljs.core.contains_QMARK_.call(null,self__.app,new cljs.core.Keyword(null,"subs-link","subs-link",1478697670)))?React.DOM.em({"className": [cljs.core.str("download episode__subtitles "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675).cljs$core$IFn$_invoke$arity$1(self__.app))?"finished":""))].join('')},(cljs.core.truth_(new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(self__.app))?"S":React.DOM.span({"className": "strikethrough"},"S"))):null)));
});
app.core.t11130.prototype.om$core$IWillMount$ = true;
app.core.t11130.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var update_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"update-chan","update-chan",4688741704));var map__11133 = self__.app;var map__11133__$1 = ((cljs.core.seq_QMARK_.call(null,map__11133))?cljs.core.apply.call(null,cljs.core.hash_map,map__11133):map__11133);var epnumrelative = cljs.core.get.call(null,map__11133__$1,new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025));var season = cljs.core.get.call(null,map__11133__$1,new cljs.core.Keyword(null,"season","season",4402536021));var st = om.core.get_state.call(null,self__.owner);var show_name = new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(st);if(cljs.core.truth_((function (){var and__3389__auto__ = new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core.truth_(and__3389__auto__))
{return (new cljs.core.Keyword(null,"percent","percent",4629944247).cljs$core$IFn$_invoke$arity$1(self__.app) < 100);
} else
{return and__3389__auto__;
}
})()))
{app.core.get_download_percent.call(null,new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(self__.app),self__.app,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"token","token",1124445547)),update_chan);
} else
{}
var c__6150__auto___11229 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11170){var state_val_11171 = (state_11170[1]);if((state_val_11171 === 1))
{var state_11170__$1 = state_11170;var statearr_11172_11230 = state_11170__$1;(statearr_11172_11230[2] = null);
(statearr_11172_11230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11171 === 2))
{var state_11170__$1 = state_11170;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11170__$1,4,update_chan);
} else
{if((state_val_11171 === 3))
{var inst_11168 = (state_11170[2]);var state_11170__$1 = state_11170;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11170__$1,inst_11168);
} else
{if((state_val_11171 === 4))
{var inst_11138 = (state_11170[7]);var inst_11143 = (state_11170[8]);var inst_11136 = (state_11170[9]);var inst_11136__$1 = (state_11170[2]);var inst_11137 = cljs.core.deref.call(null,self__.app);var inst_11138__$1 = new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(inst_11137);var inst_11139 = (function (){var sub_link = inst_11138__$1;var percent = inst_11136__$1;return ((function (sub_link,percent,inst_11138,inst_11143,inst_11136,inst_11136__$1,inst_11137,inst_11138__$1,state_val_11171){
return (function (___$2){return (percent | 0);
});
;})(sub_link,percent,inst_11138,inst_11143,inst_11136,inst_11136__$1,inst_11137,inst_11138__$1,state_val_11171))
})();var inst_11140 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"percent","percent",4629944247),inst_11139);var inst_11141 = cljs.core.deref.call(null,self__.app);var inst_11142 = cljs.core.contains_QMARK_.call(null,inst_11141,new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675));var inst_11143__$1 = !(inst_11142);var state_11170__$1 = (function (){var statearr_11173 = state_11170;(statearr_11173[7] = inst_11138__$1);
(statearr_11173[8] = inst_11143__$1);
(statearr_11173[10] = inst_11140);
(statearr_11173[9] = inst_11136__$1);
return statearr_11173;
})();if(inst_11143__$1)
{var statearr_11174_11231 = state_11170__$1;(statearr_11174_11231[1] = 5);
} else
{var statearr_11175_11232 = state_11170__$1;(statearr_11175_11232[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11171 === 5))
{var inst_11138 = (state_11170[7]);var state_11170__$1 = state_11170;if(cljs.core.truth_(inst_11138))
{var statearr_11176_11233 = state_11170__$1;(statearr_11176_11233[1] = 8);
} else
{var statearr_11177_11234 = state_11170__$1;(statearr_11177_11234[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11171 === 6))
{var inst_11143 = (state_11170[8]);var state_11170__$1 = state_11170;var statearr_11178_11235 = state_11170__$1;(statearr_11178_11235[2] = inst_11143);
(statearr_11178_11235[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11171 === 7))
{var inst_11153 = (state_11170[2]);var state_11170__$1 = state_11170;if(cljs.core.truth_(inst_11153))
{var statearr_11179_11236 = state_11170__$1;(statearr_11179_11236[1] = 11);
} else
{var statearr_11180_11237 = state_11170__$1;(statearr_11180_11237[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11171 === 8))
{var inst_11136 = (state_11170[9]);var inst_11146 = (inst_11136 | 0);var inst_11147 = (inst_11146 > 0);var state_11170__$1 = state_11170;var statearr_11181_11238 = state_11170__$1;(statearr_11181_11238[2] = inst_11147);
(statearr_11181_11238[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11171 === 9))
{var inst_11138 = (state_11170[7]);var state_11170__$1 = state_11170;var statearr_11182_11239 = state_11170__$1;(statearr_11182_11239[2] = inst_11138);
(statearr_11182_11239[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11171 === 10))
{var inst_11150 = (state_11170[2]);var state_11170__$1 = state_11170;var statearr_11183_11240 = state_11170__$1;(statearr_11183_11240[2] = inst_11150);
(statearr_11183_11240[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11171 === 11))
{var inst_11138 = (state_11170[7]);var inst_11155 = cljs.core.deref.call(null,app.core.app_state);var inst_11156 = new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(inst_11155);var inst_11157 = cljs.core.deref.call(null,self__.app);var inst_11158 = new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(inst_11157);var inst_11159 = app.core.downloadSubs.call(null,inst_11138,inst_11156,inst_11158,show_name,season,epnumrelative);var inst_11160 = [new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675)];var inst_11161 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11160,null));var inst_11162 = om.core.update_BANG_.call(null,self__.app,inst_11161,true);var state_11170__$1 = (function (){var statearr_11184 = state_11170;(statearr_11184[11] = inst_11159);
return statearr_11184;
})();var statearr_11185_11241 = state_11170__$1;(statearr_11185_11241[2] = inst_11162);
(statearr_11185_11241[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11171 === 12))
{var state_11170__$1 = state_11170;var statearr_11186_11242 = state_11170__$1;(statearr_11186_11242[2] = null);
(statearr_11186_11242[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11171 === 13))
{var inst_11165 = (state_11170[2]);var state_11170__$1 = (function (){var statearr_11187 = state_11170;(statearr_11187[12] = inst_11165);
return statearr_11187;
})();var statearr_11188_11243 = state_11170__$1;(statearr_11188_11243[2] = null);
(statearr_11188_11243[1] = 2);
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
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11192 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11192[0] = state_machine__6136__auto__);
(statearr_11192[1] = 1);
return statearr_11192;
});
var state_machine__6136__auto____1 = (function (state_11170){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11170);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11193){if((e11193 instanceof Object))
{var ex__6139__auto__ = e11193;var statearr_11194_11244 = state_11170;(statearr_11194_11244[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11170);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11245 = state_11170;
state_11170 = G__11245;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11170){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11195 = f__6151__auto__.call(null);(statearr_11195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto___11229);
return statearr_11195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11215){var state_val_11216 = (state_11215[1]);if((state_val_11216 === 5))
{var inst_11206 = (state_11215[7]);var inst_11209 = (state_11215[2]);var inst_11210 = om.core.update_BANG_.call(null,self__.app,inst_11206,inst_11209);var state_11215__$1 = state_11215;var statearr_11217_11246 = state_11215__$1;(statearr_11217_11246[2] = inst_11210);
(statearr_11217_11246[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11216 === 4))
{var inst_11213 = (state_11215[2]);var state_11215__$1 = state_11215;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11215__$1,inst_11213);
} else
{if((state_val_11216 === 3))
{var state_11215__$1 = state_11215;var statearr_11218_11247 = state_11215__$1;(statearr_11218_11247[2] = null);
(statearr_11218_11247[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11216 === 2))
{var inst_11205 = [new cljs.core.Keyword(null,"subs-link","subs-link",1478697670)];var inst_11206 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11205,null));var inst_11207 = app.core.get_subtitle_link.call(null,show_name,season,epnumrelative);var state_11215__$1 = (function (){var statearr_11219 = state_11215;(statearr_11219[7] = inst_11206);
return statearr_11219;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11215__$1,5,inst_11207);
} else
{if((state_val_11216 === 1))
{var inst_11196 = cljs.core.deref.call(null,self__.app);var inst_11197 = new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(inst_11196);var inst_11198 = cljs.core.not.call(null,inst_11197);var inst_11199 = cljs.core.deref.call(null,self__.app);var inst_11200 = new cljs.core.Keyword(null,"air-date","air-date",4569745859).cljs$core$IFn$_invoke$arity$1(inst_11199);var inst_11201 = app.core.in_future_QMARK_.call(null,inst_11200);var inst_11202 = cljs.core.not.call(null,inst_11201);var inst_11203 = (inst_11198) && (inst_11202);var state_11215__$1 = state_11215;if(cljs.core.truth_(inst_11203))
{var statearr_11220_11248 = state_11215__$1;(statearr_11220_11248[1] = 2);
} else
{var statearr_11221_11249 = state_11215__$1;(statearr_11221_11249[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11225 = [null,null,null,null,null,null,null,null];(statearr_11225[0] = state_machine__6136__auto__);
(statearr_11225[1] = 1);
return statearr_11225;
});
var state_machine__6136__auto____1 = (function (state_11215){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11215);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11226){if((e11226 instanceof Object))
{var ex__6139__auto__ = e11226;var statearr_11227_11250 = state_11215;(statearr_11227_11250[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11215);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11251 = state_11215;
state_11215 = G__11251;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11215){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11228 = f__6151__auto__.call(null);(statearr_11228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.t11130.prototype.om$core$IInitState$ = true;
app.core.t11130.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update-chan","update-chan",4688741704),cljs.core.async.chan.call(null)], null);
});
app.core.t11130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11132){var self__ = this;
var _11132__$1 = this;return self__.meta11131;
});
app.core.t11130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11132,meta11131__$1){var self__ = this;
var _11132__$1 = this;return (new app.core.t11130(self__.opts,self__.owner,self__.app,self__.episode_view,meta11131__$1));
});
app.core.__GT_t11130 = (function __GT_t11130(opts__$1,owner__$1,app__$2,episode_view__$1,meta11131){return (new app.core.t11130(opts__$1,owner__$1,app__$2,episode_view__$1,meta11131));
});
}
return (new app.core.t11130(opts,owner,app__$1,episode_view,null));
});
app.core.in_future_QMARK_ = (function in_future_QMARK_(string_date){return (new moment(string_date)).isAfter();
});
app.core.download = (function download(app__$1,sn,token,update_chan){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11318){var state_val_11319 = (state_11318[1]);if((state_val_11319 === 7))
{var inst_11306 = (state_11318[7]);var inst_11309 = (state_11318[8]);var inst_11301 = (state_11318[9]);var inst_11302 = (state_11318[10]);var inst_11303 = (state_11318[11]);var inst_11312 = (state_11318[2]);var inst_11313 = new cljs.core.Keyword(null,"magnet","magnet",4227240668).cljs$core$IFn$_invoke$arity$1(inst_11306);var inst_11314 = (function (){var dl_dir = inst_11312;var link = inst_11309;var magnet = inst_11306;var season = inst_11303;var epnumrelative = inst_11302;var map__11294 = inst_11301;return ((function (dl_dir,link,magnet,season,epnumrelative,map__11294,inst_11306,inst_11309,inst_11301,inst_11302,inst_11303,inst_11312,inst_11313,state_val_11319){
return (function (id,newtoken){if(cljs.core.truth_(id))
{return app.core.get_download_percent.call(null,id,app__$1,newtoken,update_chan);
} else
{return null;
}
});
;})(dl_dir,link,magnet,season,epnumrelative,map__11294,inst_11306,inst_11309,inst_11301,inst_11302,inst_11303,inst_11312,inst_11313,state_val_11319))
})();var inst_11315 = (function (){var dl_dir = inst_11312;var link = inst_11309;var magnet = inst_11306;var season = inst_11303;var epnumrelative = inst_11302;var map__11294 = inst_11301;return ((function (dl_dir,link,magnet,season,epnumrelative,map__11294,inst_11306,inst_11309,inst_11301,inst_11302,inst_11303,inst_11312,inst_11313,inst_11314,state_val_11319){
return (function (p1__11252_SHARP_){return cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"session-token","session-token",4078795636),p1__11252_SHARP_);
});
;})(dl_dir,link,magnet,season,epnumrelative,map__11294,inst_11306,inst_11309,inst_11301,inst_11302,inst_11303,inst_11312,inst_11313,inst_11314,state_val_11319))
})();var inst_11316 = app.core.freebox_start_download.call(null,inst_11313,inst_11312,token,inst_11314,inst_11315);var state_11318__$1 = state_11318;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11318__$1,inst_11316);
} else
{if((state_val_11319 === 6))
{var inst_11309 = (state_11318[2]);var inst_11310 = app.core.freebox_create_dir.call(null,sn);var state_11318__$1 = (function (){var statearr_11320 = state_11318;(statearr_11320[8] = inst_11309);
return statearr_11320;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11318__$1,7,inst_11310);
} else
{if((state_val_11319 === 5))
{var inst_11302 = (state_11318[10]);var inst_11303 = (state_11318[11]);var inst_11306 = (state_11318[2]);var inst_11307 = app.core.get_subtitle_link.call(null,sn,inst_11303,inst_11302);var state_11318__$1 = (function (){var statearr_11321 = state_11318;(statearr_11321[7] = inst_11306);
return statearr_11321;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11318__$1,6,inst_11307);
} else
{if((state_val_11319 === 4))
{var inst_11301 = (state_11318[9]);var inst_11302 = (state_11318[10]);var inst_11303 = (state_11318[11]);var inst_11301__$1 = (state_11318[2]);var inst_11302__$1 = cljs.core.get.call(null,inst_11301__$1,new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025));var inst_11303__$1 = cljs.core.get.call(null,inst_11301__$1,new cljs.core.Keyword(null,"season","season",4402536021));var inst_11304 = app.core.get_magnet_link.call(null,sn,inst_11303__$1,inst_11302__$1);var state_11318__$1 = (function (){var statearr_11322 = state_11318;(statearr_11322[9] = inst_11301__$1);
(statearr_11322[10] = inst_11302__$1);
(statearr_11322[11] = inst_11303__$1);
return statearr_11322;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11318__$1,5,inst_11304);
} else
{if((state_val_11319 === 3))
{var inst_11295 = (state_11318[12]);var state_11318__$1 = state_11318;var statearr_11323_11335 = state_11318__$1;(statearr_11323_11335[2] = inst_11295);
(statearr_11323_11335[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11319 === 2))
{var inst_11295 = (state_11318[12]);var inst_11298 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11295);var state_11318__$1 = state_11318;var statearr_11324_11336 = state_11318__$1;(statearr_11324_11336[2] = inst_11298);
(statearr_11324_11336[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11319 === 1))
{var inst_11295 = (state_11318[12]);var inst_11295__$1 = cljs.core.deref.call(null,app__$1);var inst_11296 = cljs.core.seq_QMARK_.call(null,inst_11295__$1);var state_11318__$1 = (function (){var statearr_11325 = state_11318;(statearr_11325[12] = inst_11295__$1);
return statearr_11325;
})();if(inst_11296)
{var statearr_11326_11337 = state_11318__$1;(statearr_11326_11337[1] = 2);
} else
{var statearr_11327_11338 = state_11318__$1;(statearr_11327_11338[1] = 3);
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
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11331 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11331[0] = state_machine__6136__auto__);
(statearr_11331[1] = 1);
return statearr_11331;
});
var state_machine__6136__auto____1 = (function (state_11318){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11318);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11332){if((e11332 instanceof Object))
{var ex__6139__auto__ = e11332;var statearr_11333_11339 = state_11318;(statearr_11333_11339[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11318);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11332;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11340 = state_11318;
state_11318 = G__11340;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11318){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11334 = f__6151__auto__.call(null);(statearr_11334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.download_on_device = (function download_on_device(app__$1,state,dn){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11402){var state_val_11403 = (state_11402[1]);if((state_val_11403 === 3))
{var inst_11384 = (state_11402[7]);var inst_11388 = (state_11402[2]);var inst_11389 = app.core.subtitle_name_from_filename.call(null,inst_11388);var inst_11390 = [cljs.core.str(inst_11389),cljs.core.str(".srt")].join('');var inst_11391 = goog.crypt.base64.encodeString(inst_11390);var inst_11392 = goog.crypt.base64.encodeString(inst_11388);var inst_11393 = [new cljs.core.Keyword(null,"on-device","on-device",633333110)];var inst_11394 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11393,null));var inst_11395 = om.core.update_BANG_.call(null,app__$1,inst_11394,inst_11388);var inst_11396 = [cljs.core.str(inst_11384),cljs.core.str(inst_11392)].join('');var inst_11397 = [cljs.core.str(inst_11384),cljs.core.str(inst_11391)].join('');var inst_11398 = app.core.on_progress_device.call(null,app__$1,dn,inst_11388);var inst_11399 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state);var inst_11400 = window.downloadOnDevice(inst_11396,inst_11388,inst_11397,inst_11390,inst_11398,inst_11399);var state_11402__$1 = (function (){var statearr_11404 = state_11402;(statearr_11404[8] = inst_11395);
return statearr_11404;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11402__$1,inst_11400);
} else
{if((state_val_11403 === 2))
{var inst_11384 = (state_11402[7]);var inst_11382 = (state_11402[2]);var inst_11383 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_11382);var inst_11384__$1 = new cljs.core.Keyword(null,"download_dir","download_dir",2123295688).cljs$core$IFn$_invoke$arity$1(inst_11383);var inst_11385 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state);var inst_11386 = app.core.find_downloaded_name.call(null,inst_11384__$1,inst_11382,inst_11385,app.core.show);var state_11402__$1 = (function (){var statearr_11405 = state_11402;(statearr_11405[7] = inst_11384__$1);
return statearr_11405;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11402__$1,3,inst_11386);
} else
{if((state_val_11403 === 1))
{var inst_11377 = cljs.core.deref.call(null,app__$1);var inst_11378 = new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(inst_11377);var inst_11379 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state);var inst_11380 = app.core.freebox_get_download_details.call(null,inst_11378,inst_11379);var state_11402__$1 = state_11402;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11402__$1,2,inst_11380);
} else
{return null;
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11409 = [null,null,null,null,null,null,null,null,null];(statearr_11409[0] = state_machine__6136__auto__);
(statearr_11409[1] = 1);
return statearr_11409;
});
var state_machine__6136__auto____1 = (function (state_11402){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11402);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11410){if((e11410 instanceof Object))
{var ex__6139__auto__ = e11410;var statearr_11411_11413 = state_11402;(statearr_11411_11413[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11402);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11410;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11414 = state_11402;
state_11402 = G__11414;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11402){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11412 = f__6151__auto__.call(null);(statearr_11412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11412;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.on_progress_device = (function on_progress_device(app__$1,size,video){return (function (ratio){var idx = (((size * ratio) | 0) / 2);if((idx > (function (){var or__3401__auto__ = new cljs.core.Keyword(null,"on-device-progress","on-device-progress",3750775624).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app__$1));if(cljs.core.truth_(or__3401__auto__))
{return or__3401__auto__;
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
app.core.play_on_device = (function play_on_device(show,download_id){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11451){var state_val_11452 = (state_11451[1]);if((state_val_11452 === 3))
{var inst_11447 = (state_11451[2]);var inst_11448 = [cljs.core.str(show),cljs.core.str("/"),cljs.core.str(inst_11447)].join('');var inst_11449 = playVideo(inst_11448);var state_11451__$1 = state_11451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11451__$1,inst_11449);
} else
{if((state_val_11452 === 2))
{var inst_11439 = (state_11451[7]);var inst_11442 = (state_11451[2]);var inst_11443 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_11442);var inst_11444 = new cljs.core.Keyword(null,"download_dir","download_dir",2123295688).cljs$core$IFn$_invoke$arity$1(inst_11443);var inst_11445 = app.core.find_downloaded_name.call(null,inst_11444,inst_11442,inst_11439,show);var state_11451__$1 = state_11451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11451__$1,3,inst_11445);
} else
{if((state_val_11452 === 1))
{var inst_11439 = (state_11451[7]);var inst_11438 = cljs.core.deref.call(null,app.core.app_state);var inst_11439__$1 = new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(inst_11438);var inst_11440 = app.core.freebox_get_download_details.call(null,download_id,inst_11439__$1);var state_11451__$1 = (function (){var statearr_11453 = state_11451;(statearr_11453[7] = inst_11439__$1);
return statearr_11453;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11451__$1,2,inst_11440);
} else
{return null;
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11457 = [null,null,null,null,null,null,null,null];(statearr_11457[0] = state_machine__6136__auto__);
(statearr_11457[1] = 1);
return statearr_11457;
});
var state_machine__6136__auto____1 = (function (state_11451){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11451);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11458){if((e11458 instanceof Object))
{var ex__6139__auto__ = e11458;var statearr_11459_11461 = state_11451;(statearr_11459_11461[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11451);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11462 = state_11451;
state_11451 = G__11462;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11451){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11460 = f__6151__auto__.call(null);(statearr_11460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.subtitle_name_from_filename = (function subtitle_name_from_filename(file_name){if(!(cljs.core._EQ_.call(null,file_name.indexOf("."),-1)))
{return clojure.string.join.call(null,".",cljs.core.butlast.call(null,clojure.string.split.call(null,file_name,/\./)));
} else
{return file_name;
}
});
app.core.find_file_in_dir = (function find_file_in_dir(path,token){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11492){var state_val_11493 = (state_11492[1]);if((state_val_11493 === 2))
{var inst_11485 = (state_11492[2]);var inst_11486 = cljs.core.prn.call(null,inst_11485);var inst_11487 = (function (){var path_infos = inst_11485;return ((function (path_infos,inst_11485,inst_11486,state_val_11493){
return (function (p1__11463_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mimetype","mimetype",3917704416).cljs$core$IFn$_invoke$arity$1(p1__11463_SHARP_),"video/mp4");
});
;})(path_infos,inst_11485,inst_11486,state_val_11493))
})();var inst_11488 = cljs.core.filter.call(null,inst_11487,inst_11485);var inst_11489 = cljs.core.first.call(null,inst_11488);var inst_11490 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_11489);var state_11492__$1 = (function (){var statearr_11494 = state_11492;(statearr_11494[7] = inst_11486);
return statearr_11494;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11492__$1,inst_11490);
} else
{if((state_val_11493 === 1))
{var inst_11483 = app.core.freebox_ls_path.call(null,path,token);var state_11492__$1 = state_11492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11492__$1,2,inst_11483);
} else
{return null;
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11498 = [null,null,null,null,null,null,null,null];(statearr_11498[0] = state_machine__6136__auto__);
(statearr_11498[1] = 1);
return statearr_11498;
});
var state_machine__6136__auto____1 = (function (state_11492){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11492);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11499){if((e11499 instanceof Object))
{var ex__6139__auto__ = e11499;var statearr_11500_11502 = state_11492;(statearr_11500_11502[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11492);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11499;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11503 = state_11492;
state_11492 = G__11503;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11492){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11501 = f__6151__auto__.call(null);(statearr_11501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11501;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.find_downloaded_name = (function find_downloaded_name(path,details,token,show){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11543){var state_val_11544 = (state_11543[1]);if((state_val_11544 === 5))
{var inst_11539 = (state_11543[2]);var state_11543__$1 = state_11543;var statearr_11545_11556 = state_11543__$1;(statearr_11545_11556[2] = inst_11539);
(statearr_11545_11556[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11544 === 4))
{var inst_11541 = (state_11543[2]);var state_11543__$1 = state_11543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11543__$1,inst_11541);
} else
{if((state_val_11544 === 3))
{var inst_11537 = app.core.find_file_in_dir.call(null,path,token);var state_11543__$1 = state_11543;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11543__$1,5,inst_11537);
} else
{if((state_val_11544 === 2))
{var inst_11534 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(details);var inst_11535 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_11534);var state_11543__$1 = state_11543;var statearr_11546_11557 = state_11543__$1;(statearr_11546_11557[2] = inst_11535);
(statearr_11546_11557[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11544 === 1))
{var inst_11530 = [cljs.core.str(app.core.dir_base),cljs.core.str(show),cljs.core.str("/")].join('');var inst_11531 = btoa(inst_11530);var inst_11532 = cljs.core._EQ_.call(null,path,inst_11531);var state_11543__$1 = state_11543;if(inst_11532)
{var statearr_11547_11558 = state_11543__$1;(statearr_11547_11558[1] = 2);
} else
{var statearr_11548_11559 = state_11543__$1;(statearr_11548_11559[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11552 = [null,null,null,null,null,null,null];(statearr_11552[0] = state_machine__6136__auto__);
(statearr_11552[1] = 1);
return statearr_11552;
});
var state_machine__6136__auto____1 = (function (state_11543){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11543);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11553){if((e11553 instanceof Object))
{var ex__6139__auto__ = e11553;var statearr_11554_11560 = state_11543;(statearr_11554_11560[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11543);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11553;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11561 = state_11543;
state_11543 = G__11561;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11543){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11555 = f__6151__auto__.call(null);(statearr_11555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11555;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.downloadSubs = (function downloadSubs(link,token,download_id,show,season,ep){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11606){var state_val_11607 = (state_11606[1]);if((state_val_11607 === 4))
{var inst_11598 = (state_11606[7]);var inst_11601 = (state_11606[2]);var inst_11602 = cljs.core.prn.call(null,"download subbbbs");var inst_11603 = app.core.addic7ed_url.call(null,show,season,ep);var inst_11604 = window.downloadSub(link,token,inst_11598,inst_11601,inst_11603);var state_11606__$1 = (function (){var statearr_11608 = state_11606;(statearr_11608[8] = inst_11602);
return statearr_11608;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11606__$1,inst_11604);
} else
{if((state_val_11607 === 3))
{var inst_11594 = (state_11606[9]);var inst_11598 = (state_11606[7]);var inst_11597 = (state_11606[2]);var inst_11598__$1 = app.core.subtitle_name_from_filename.call(null,inst_11597);var inst_11599 = app.core.freebox_get_upload_id.call(null,token,inst_11594,inst_11598__$1);var state_11606__$1 = (function (){var statearr_11609 = state_11606;(statearr_11609[7] = inst_11598__$1);
return statearr_11609;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11606__$1,4,inst_11599);
} else
{if((state_val_11607 === 2))
{var inst_11594 = (state_11606[9]);var inst_11592 = (state_11606[2]);var inst_11593 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_11592);var inst_11594__$1 = new cljs.core.Keyword(null,"download_dir","download_dir",2123295688).cljs$core$IFn$_invoke$arity$1(inst_11593);var inst_11595 = app.core.find_downloaded_name.call(null,inst_11594__$1,inst_11592,token,show);var state_11606__$1 = (function (){var statearr_11610 = state_11606;(statearr_11610[9] = inst_11594__$1);
return statearr_11610;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11606__$1,3,inst_11595);
} else
{if((state_val_11607 === 1))
{var inst_11590 = app.core.freebox_get_download_details.call(null,download_id,token);var state_11606__$1 = state_11606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11606__$1,2,inst_11590);
} else
{return null;
}
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11614 = [null,null,null,null,null,null,null,null,null,null];(statearr_11614[0] = state_machine__6136__auto__);
(statearr_11614[1] = 1);
return statearr_11614;
});
var state_machine__6136__auto____1 = (function (state_11606){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11606);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11615){if((e11615 instanceof Object))
{var ex__6139__auto__ = e11615;var statearr_11616_11618 = state_11606;(statearr_11616_11618[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11606);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11615;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11619 = state_11606;
state_11606 = G__11619;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11606){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11617 = f__6151__auto__.call(null);(statearr_11617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11617;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.addic7ed_url = (function addic7ed_url(showname,season,episode){return [cljs.core.str("http://www.addic7ed.com/serie/"),cljs.core.str(showname),cljs.core.str("/"),cljs.core.str(season),cljs.core.str("/"),cljs.core.str(episode),cljs.core.str("/addic7ed")].join('');
});
app.core.get_download_percent = (function get_download_percent(id,app__$1,token,update_chan){om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"download-id","download-id",4097684466),(function (_){return id;
}));
cljs.core.prn.call(null,"download percent");
var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11695){var state_val_11696 = (state_11695[1]);if((state_val_11696 === 1))
{var state_11695__$1 = state_11695;var statearr_11697_11716 = state_11695__$1;(statearr_11697_11716[2] = null);
(statearr_11697_11716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 2))
{var inst_11669 = app.core.freebox_get_download_details.call(null,id,token);var state_11695__$1 = state_11695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11695__$1,4,inst_11669);
} else
{if((state_val_11696 === 3))
{var inst_11693 = (state_11695[2]);var state_11695__$1 = state_11695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11695__$1,inst_11693);
} else
{if((state_val_11696 === 4))
{var inst_11671 = (state_11695[7]);var inst_11671__$1 = (state_11695[2]);var inst_11672 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_11671__$1);var inst_11673 = new cljs.core.Keyword(null,"rx_pct","rx_pct",4391390938).cljs$core$IFn$_invoke$arity$1(inst_11672);var inst_11674 = (inst_11673 / 100);var inst_11675 = new cljs.core.Keyword(null,"success","success",3441701749).cljs$core$IFn$_invoke$arity$1(inst_11671__$1);var state_11695__$1 = (function (){var statearr_11698 = state_11695;(statearr_11698[7] = inst_11671__$1);
(statearr_11698[8] = inst_11674);
return statearr_11698;
})();if(cljs.core.truth_(inst_11675))
{var statearr_11699_11717 = state_11695__$1;(statearr_11699_11717[1] = 5);
} else
{var statearr_11700_11718 = state_11695__$1;(statearr_11700_11718[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 5))
{var inst_11677 = cljs.core.async.timeout.call(null,5000);var state_11695__$1 = state_11695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11695__$1,8,inst_11677);
} else
{if((state_val_11696 === 6))
{var inst_11671 = (state_11695[7]);var inst_11674 = (state_11695[8]);var inst_11688 = (function (){var pct = inst_11674;var res = inst_11671;return ((function (pct,res,inst_11671,inst_11674,state_val_11696){
return (function (_){return null;
});
;})(pct,res,inst_11671,inst_11674,state_val_11696))
})();var inst_11689 = om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"download-id","download-id",4097684466),inst_11688);var state_11695__$1 = state_11695;var statearr_11701_11719 = state_11695__$1;(statearr_11701_11719[2] = inst_11689);
(statearr_11701_11719[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 7))
{var inst_11691 = (state_11695[2]);var state_11695__$1 = state_11695;var statearr_11702_11720 = state_11695__$1;(statearr_11702_11720[2] = inst_11691);
(statearr_11702_11720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 8))
{var inst_11674 = (state_11695[8]);var inst_11679 = (state_11695[2]);var inst_11680 = cljs.core.async.put_BANG_.call(null,update_chan,inst_11674);var inst_11681 = (inst_11674 < 100);var state_11695__$1 = (function (){var statearr_11703 = state_11695;(statearr_11703[9] = inst_11679);
(statearr_11703[10] = inst_11680);
return statearr_11703;
})();if(cljs.core.truth_(inst_11681))
{var statearr_11704_11721 = state_11695__$1;(statearr_11704_11721[1] = 9);
} else
{var statearr_11705_11722 = state_11695__$1;(statearr_11705_11722[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 9))
{var state_11695__$1 = state_11695;var statearr_11706_11723 = state_11695__$1;(statearr_11706_11723[2] = null);
(statearr_11706_11723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 10))
{var state_11695__$1 = state_11695;var statearr_11707_11724 = state_11695__$1;(statearr_11707_11724[2] = null);
(statearr_11707_11724[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 11))
{var inst_11686 = (state_11695[2]);var state_11695__$1 = state_11695;var statearr_11708_11725 = state_11695__$1;(statearr_11708_11725[2] = inst_11686);
(statearr_11708_11725[1] = 7);
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
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11712 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11712[0] = state_machine__6136__auto__);
(statearr_11712[1] = 1);
return statearr_11712;
});
var state_machine__6136__auto____1 = (function (state_11695){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11695);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11713){if((e11713 instanceof Object))
{var ex__6139__auto__ = e11713;var statearr_11714_11726 = state_11695;(statearr_11714_11726[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11695);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11713;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11727 = state_11695;
state_11695 = G__11727;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11695){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11715 = f__6151__auto__.call(null);(statearr_11715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11715;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
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
app.core.tivi_view = (function tivi_view(app__$1,owner){if(typeof app.core.t11796 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t11796 = (function (owner,app,tivi_view,meta11797){
this.owner = owner;
this.app = app;
this.tivi_view = tivi_view;
this.meta11797 = meta11797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t11796.cljs$lang$type = true;
app.core.t11796.cljs$lang$ctorStr = "app.core/t11796";
app.core.t11796.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t11796");
});
app.core.t11796.prototype.om$core$IRenderState$ = true;
app.core.t11796.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "app"},React.DOM.aside({"className": "app__sidebar"},om.core.build.call(null,app.core.topcoat_list_view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"shows","shows",1123317896).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.Keyword(null,"display","display",2685668404),(function (item,container){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"editing","editing",3420907786).cljs$core$IFn$_invoke$arity$1(state)))
{return React.DOM.form({"onSubmit": (function (e,own){var newval = om.core.get_node.call(null,container,"show-name-change").value;return e.preventDefault().call(null,om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"shows","shows",1123317896),(function (shows){return cljs.core.map.call(null,(function (p1__11728_SHARP_){if(cljs.core._EQ_.call(null,p1__11728_SHARP_,item))
{return cljs.core.assoc.call(null,p1__11728_SHARP_,new cljs.core.Keyword(null,"name","name",1017277949),newval);
} else
{return p1__11728_SHARP_;
}
}),shows);
})),om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),null),om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.Keyword(null,"name","name",1017277949)], null),newval),om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"show-name","show-name",3359181517)], null),newval));
}), "className": "add-show-input"},om.dom.input.call(null,{"ref": "show-name-change", "defaultValue": new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item), "className": "topcoat-text-input", "type": "text"}));
} else
{return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item);
}
}),new cljs.core.Keyword(null,"header","header",4087600639),"Shows",new cljs.core.Keyword(null,"listCls","listCls",1195843358),"shows",new cljs.core.Keyword(null,"click","click",1108654330),(function (p1__11729_SHARP_){return om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267)], null),p1__11729_SHARP_);
}),new cljs.core.Keyword(null,"db-click","db-click",1660355307),(function (p1__11730_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__11730_SHARP_));
})], null),self__.app)),om.core.build.call(null,app.core.add_show_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add","add",1014000659),new cljs.core.Keyword(null,"add","add",1014000659).cljs$core$IFn$_invoke$arity$1(state)], null)], null)),app.core.admin_actions.call(null,self__.app,state,self__.owner)),React.DOM.section({"className": "app__details"},app.core.display_show.call(null,new cljs.core.Keyword(null,"watches","watches",2139868463).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(self__.app))));
});
app.core.t11796.prototype.om$core$IWillMount$ = true;
app.core.t11796.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var add = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"add","add",1014000659));var main = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"main","main",1017248043));app.core.check_freebox_status.call(null,self__.app);
var c__6150__auto___11861 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11807){var state_val_11808 = (state_11807[1]);if((state_val_11808 === 4))
{var inst_11801 = (state_11807[2]);var inst_11802 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"shows","shows",1123317896),cljs.core.conj,inst_11801);var state_11807__$1 = (function (){var statearr_11809 = state_11807;(statearr_11809[7] = inst_11802);
return statearr_11809;
})();var statearr_11810_11862 = state_11807__$1;(statearr_11810_11862[2] = null);
(statearr_11810_11862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11808 === 3))
{var inst_11805 = (state_11807[2]);var state_11807__$1 = state_11807;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11807__$1,inst_11805);
} else
{if((state_val_11808 === 2))
{var state_11807__$1 = state_11807;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11807__$1,4,add);
} else
{if((state_val_11808 === 1))
{var state_11807__$1 = state_11807;var statearr_11811_11863 = state_11807__$1;(statearr_11811_11863[2] = null);
(statearr_11811_11863[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11815 = [null,null,null,null,null,null,null,null];(statearr_11815[0] = state_machine__6136__auto__);
(statearr_11815[1] = 1);
return statearr_11815;
});
var state_machine__6136__auto____1 = (function (state_11807){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11807);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11816){if((e11816 instanceof Object))
{var ex__6139__auto__ = e11816;var statearr_11817_11864 = state_11807;(statearr_11817_11864[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11807);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11865 = state_11807;
state_11807 = G__11865;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11807){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11818 = f__6151__auto__.call(null);(statearr_11818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto___11861);
return statearr_11818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
var c__6150__auto___11866 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11828){var state_val_11829 = (state_11828[1]);if((state_val_11829 === 4))
{var inst_11821 = (state_11828[2]);var inst_11822 = (function (){var current = inst_11821;return ((function (current,inst_11821,state_val_11829){
return (function (c){return current;
});
;})(current,inst_11821,state_val_11829))
})();var inst_11823 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"current","current",2140844267),inst_11822);var state_11828__$1 = (function (){var statearr_11830 = state_11828;(statearr_11830[7] = inst_11823);
return statearr_11830;
})();var statearr_11831_11867 = state_11828__$1;(statearr_11831_11867[2] = null);
(statearr_11831_11867[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 3))
{var inst_11826 = (state_11828[2]);var state_11828__$1 = state_11828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11828__$1,inst_11826);
} else
{if((state_val_11829 === 2))
{var state_11828__$1 = state_11828;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11828__$1,4,main);
} else
{if((state_val_11829 === 1))
{var state_11828__$1 = state_11828;var statearr_11832_11868 = state_11828__$1;(statearr_11832_11868[2] = null);
(statearr_11832_11868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11836 = [null,null,null,null,null,null,null,null];(statearr_11836[0] = state_machine__6136__auto__);
(statearr_11836[1] = 1);
return statearr_11836;
});
var state_machine__6136__auto____1 = (function (state_11828){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11828);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11837){if((e11837 instanceof Object))
{var ex__6139__auto__ = e11837;var statearr_11838_11869 = state_11828;(statearr_11838_11869[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11828);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11870 = state_11828;
state_11828 = G__11870;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11828){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11839 = f__6151__auto__.call(null);(statearr_11839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto___11866);
return statearr_11839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11849){var state_val_11850 = (state_11849[1]);if((state_val_11850 === 4))
{var inst_11842 = (state_11849[2]);var inst_11843 = (function (){var reset = inst_11842;return ((function (reset,inst_11842,state_val_11850){
return (function (w){return cljs.core.dissoc.call(null,w,reset);
});
;})(reset,inst_11842,state_val_11850))
})();var inst_11844 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"watches","watches",2139868463),inst_11843);var state_11849__$1 = (function (){var statearr_11851 = state_11849;(statearr_11851[7] = inst_11844);
return statearr_11851;
})();var statearr_11852_11871 = state_11849__$1;(statearr_11852_11871[2] = null);
(statearr_11852_11871[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 3))
{var inst_11847 = (state_11849[2]);var state_11849__$1 = state_11849;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11849__$1,inst_11847);
} else
{if((state_val_11850 === 2))
{var state_11849__$1 = state_11849;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11849__$1,4,app.core.reset_show_chan);
} else
{if((state_val_11850 === 1))
{var state_11849__$1 = state_11849;var statearr_11853_11872 = state_11849__$1;(statearr_11853_11872[2] = null);
(statearr_11853_11872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11857 = [null,null,null,null,null,null,null,null];(statearr_11857[0] = state_machine__6136__auto__);
(statearr_11857[1] = 1);
return statearr_11857;
});
var state_machine__6136__auto____1 = (function (state_11849){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11849);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11858){if((e11858 instanceof Object))
{var ex__6139__auto__ = e11858;var statearr_11859_11873 = state_11849;(statearr_11859_11873[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11849);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11858;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11874 = state_11849;
state_11849 = G__11874;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11849){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11860 = f__6151__auto__.call(null);(statearr_11860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11860;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.t11796.prototype.om$core$IInitState$ = true;
app.core.t11796.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",1014000659),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"main","main",1017248043),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",1017196294),new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.Keyword(null,"show","show",1017433711),"test"], null)], null);
});
app.core.t11796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11798){var self__ = this;
var _11798__$1 = this;return self__.meta11797;
});
app.core.t11796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11798,meta11797__$1){var self__ = this;
var _11798__$1 = this;return (new app.core.t11796(self__.owner,self__.app,self__.tivi_view,meta11797__$1));
});
app.core.__GT_t11796 = (function __GT_t11796(owner__$1,app__$2,tivi_view__$1,meta11797){return (new app.core.t11796(owner__$1,app__$2,tivi_view__$1,meta11797));
});
}
return (new app.core.t11796(owner,app__$1,tivi_view,null));
});
app.core.check_freebox_status = (function check_freebox_status(app__$1){if(cljs.core.truth_(new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(app__$1)))
{return app.core.freebox_session.call(null,new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(app__$1),(function (p1__11875_SHARP_){cljs.core.prn.call(null,p1__11875_SHARP_);
return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"session-token","session-token",4078795636),(function (_){return p1__11875_SHARP_;
}));
}));
} else
{return app.core.freebox_autorize.call(null,(function (p1__11876_SHARP_){return app.core.check_track.call(null,app__$1,p1__11876_SHARP_);
}));
}
});
app.core.check_track = (function check_track(app__$1,aut){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11949){var state_val_11950 = (state_11949[1]);if((state_val_11950 === 9))
{var inst_11937 = (state_11949[2]);var inst_11926 = inst_11937;var state_11949__$1 = (function (){var statearr_11951 = state_11949;(statearr_11951[7] = inst_11926);
return statearr_11951;
})();var statearr_11952_11967 = state_11949__$1;(statearr_11952_11967[2] = null);
(statearr_11952_11967[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11950 === 8))
{var inst_11933 = (state_11949[2]);var inst_11934 = new cljs.core.Keyword(null,"track_id","track_id",2284383233).cljs$core$IFn$_invoke$arity$1(aut);var inst_11935 = app.core.freebox_track_id.call(null,inst_11934);var state_11949__$1 = (function (){var statearr_11953 = state_11949;(statearr_11953[8] = inst_11933);
return statearr_11953;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11949__$1,9,inst_11935);
} else
{if((state_val_11950 === 7))
{var inst_11945 = (state_11949[2]);var state_11949__$1 = state_11949;var statearr_11954_11968 = state_11949__$1;(statearr_11954_11968[2] = inst_11945);
(statearr_11954_11968[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11950 === 6))
{var inst_11926 = (state_11949[7]);var inst_11940 = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(inst_11926);var inst_11941 = new cljs.core.Keyword(null,"app_token","app_token",2857217485).cljs$core$IFn$_invoke$arity$1(aut);var inst_11942 = new cljs.core.Keyword(null,"challenge","challenge",2416537557).cljs$core$IFn$_invoke$arity$1(inst_11926);var inst_11943 = app.core.manage_pending.call(null,inst_11940,inst_11941,inst_11942,app__$1);var state_11949__$1 = state_11949;var statearr_11955_11969 = state_11949__$1;(statearr_11955_11969[2] = inst_11943);
(statearr_11955_11969[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11950 === 5))
{var inst_11931 = cljs.core.async.timeout.call(null,3000);var state_11949__$1 = state_11949;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11949__$1,8,inst_11931);
} else
{if((state_val_11950 === 4))
{var inst_11947 = (state_11949[2]);var state_11949__$1 = state_11949;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11949__$1,inst_11947);
} else
{if((state_val_11950 === 3))
{var inst_11926 = (state_11949[7]);var inst_11928 = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(inst_11926);var inst_11929 = cljs.core._EQ_.call(null,"pending",inst_11928);var state_11949__$1 = state_11949;if(inst_11929)
{var statearr_11956_11970 = state_11949__$1;(statearr_11956_11970[1] = 5);
} else
{var statearr_11957_11971 = state_11949__$1;(statearr_11957_11971[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11950 === 2))
{var inst_11925 = (state_11949[2]);var inst_11926 = inst_11925;var state_11949__$1 = (function (){var statearr_11958 = state_11949;(statearr_11958[7] = inst_11926);
return statearr_11958;
})();var statearr_11959_11972 = state_11949__$1;(statearr_11959_11972[2] = null);
(statearr_11959_11972[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11950 === 1))
{var inst_11922 = new cljs.core.Keyword(null,"track_id","track_id",2284383233).cljs$core$IFn$_invoke$arity$1(aut);var inst_11923 = app.core.freebox_track_id.call(null,inst_11922);var state_11949__$1 = state_11949;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11949__$1,2,inst_11923);
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
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11963 = [null,null,null,null,null,null,null,null,null];(statearr_11963[0] = state_machine__6136__auto__);
(statearr_11963[1] = 1);
return statearr_11963;
});
var state_machine__6136__auto____1 = (function (state_11949){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11949);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11964){if((e11964 instanceof Object))
{var ex__6139__auto__ = e11964;var statearr_11965_11973 = state_11949;(statearr_11965_11973[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11949);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11964;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11974 = state_11949;
state_11949 = G__11974;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11949){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11966 = f__6151__auto__.call(null);(statearr_11966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.manage_pending = (function manage_pending(status,app_token,challenge,app__$1){cljs.core.prn.call(null,"manage pending");
if(cljs.core._EQ_.call(null,"granted",status))
{ajax.core.GET.call(null,"http://88.124.156.100/api/v1/login");
return app.core.freebox_session_save.call(null,app.core.freebox_make_password.call(null,challenge,app_token),(function (p1__11975_SHARP_){om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"session-token","session-token",4078795636),(function (_){return p1__11975_SHARP_;
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