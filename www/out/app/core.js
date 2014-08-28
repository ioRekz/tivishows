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
app.core.get_magnet_link = (function get_magnet_link(showw,season,episode){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_10767){var state_val_10768 = (state_10767[1]);if((state_val_10768 === 2))
{var inst_10753 = (state_10767[2]);var inst_10754 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_10753);var inst_10755 = $(inst_10754);var inst_10756 = inst_10755.find(".detName:first-child + a");var inst_10757 = inst_10756.attr("href");var inst_10758 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_10753);var inst_10759 = $(inst_10758);var inst_10760 = inst_10759.find(".detName a");var inst_10761 = inst_10760.first();var inst_10762 = inst_10761.text();var inst_10763 = [new cljs.core.Keyword(null,"magnet","magnet",4227240668),new cljs.core.Keyword(null,"file-name","file-name",3946227630)];var inst_10764 = [inst_10757,inst_10762];var inst_10765 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10763,inst_10764);var state_10767__$1 = state_10767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10767__$1,inst_10765);
} else
{if((state_val_10768 === 1))
{var inst_10741 = app.core.format_number_zero.call(null,season);var inst_10742 = app.core.format_number_zero.call(null,episode);var inst_10743 = encodeURIComponent(showw);var inst_10744 = [cljs.core.str("http://thepiratebay.se/search/"),cljs.core.str(inst_10743),cljs.core.str(" s"),cljs.core.str(inst_10741),cljs.core.str("e"),cljs.core.str(episode),cljs.core.str("/0/0/1")].join('');var inst_10745 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",3165820380),new cljs.core.Keyword(null,"headers","headers",1809212152)];var inst_10746 = ["User-Agent"];var inst_10747 = ["Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36"];var inst_10748 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10746,inst_10747);var inst_10749 = [false,inst_10748];var inst_10750 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10745,inst_10749);var inst_10751 = cljs_http.client.get.call(null,inst_10744,inst_10750);var state_10767__$1 = (function (){var statearr_10769 = state_10767;(statearr_10769[7] = inst_10742);
return statearr_10769;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10767__$1,2,inst_10751);
} else
{return null;
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_10773 = [null,null,null,null,null,null,null,null];(statearr_10773[0] = state_machine__6136__auto__);
(statearr_10773[1] = 1);
return statearr_10773;
});
var state_machine__6136__auto____1 = (function (state_10767){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_10767);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e10774){if((e10774 instanceof Object))
{var ex__6139__auto__ = e10774;var statearr_10775_10777 = state_10767;(statearr_10775_10777[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10767);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10774;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10778 = state_10767;
state_10767 = G__10778;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_10767){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_10767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_10776 = f__6151__auto__.call(null);(statearr_10776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_10776;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.get_subtitle_link = (function get_subtitle_link(show,season,episode){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_10845){var state_val_10846 = (state_10845[1]);if((state_val_10846 === 8))
{var inst_10843 = (state_10845[2]);var state_10845__$1 = state_10845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10845__$1,inst_10843);
} else
{if((state_val_10846 === 7))
{var state_10845__$1 = state_10845;var statearr_10847_10863 = state_10845__$1;(statearr_10847_10863[2] = null);
(statearr_10847_10863[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10846 === 6))
{var inst_10833 = (state_10845[7]);var inst_10840 = [cljs.core.str("http://www.addic7ed.com"),cljs.core.str(inst_10833)].join('');var state_10845__$1 = state_10845;var statearr_10848_10864 = state_10845__$1;(statearr_10848_10864[2] = inst_10840);
(statearr_10848_10864[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10846 === 5))
{var inst_10838 = (state_10845[2]);var state_10845__$1 = state_10845;if(cljs.core.truth_(inst_10838))
{var statearr_10849_10865 = state_10845__$1;(statearr_10849_10865[1] = 6);
} else
{var statearr_10850_10866 = state_10845__$1;(statearr_10850_10866[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10846 === 4))
{var inst_10833 = (state_10845[7]);var state_10845__$1 = state_10845;var statearr_10851_10867 = state_10845__$1;(statearr_10851_10867[2] = inst_10833);
(statearr_10851_10867[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10846 === 3))
{var inst_10832 = (state_10845[8]);var inst_10835 = cljs.core._EQ_.call(null,inst_10832,"Completed");var state_10845__$1 = state_10845;var statearr_10852_10868 = state_10845__$1;(statearr_10852_10868[2] = inst_10835);
(statearr_10852_10868[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10846 === 2))
{var inst_10833 = (state_10845[7]);var inst_10824 = (state_10845[2]);var inst_10825 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_10824);var inst_10826 = $(inst_10825);var inst_10827 = inst_10826.find(".buttonDownload");var inst_10828 = inst_10827.first();var inst_10829 = inst_10828.parent();var inst_10830 = inst_10829.prev();var inst_10831 = inst_10830.text();var inst_10832 = inst_10831.trim();var inst_10833__$1 = inst_10827.attr("href");var state_10845__$1 = (function (){var statearr_10853 = state_10845;(statearr_10853[8] = inst_10832);
(statearr_10853[7] = inst_10833__$1);
return statearr_10853;
})();if(cljs.core.truth_(inst_10833__$1))
{var statearr_10854_10869 = state_10845__$1;(statearr_10854_10869[1] = 3);
} else
{var statearr_10855_10870 = state_10845__$1;(statearr_10855_10870[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10846 === 1))
{var inst_10821 = [cljs.core.str("http://www.addic7ed.com/serie/"),cljs.core.str(show),cljs.core.str("/"),cljs.core.str(season),cljs.core.str("/"),cljs.core.str(episode),cljs.core.str("/8")].join('');var inst_10822 = cljs_http.client.get.call(null,inst_10821);var state_10845__$1 = state_10845;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10845__$1,2,inst_10822);
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
var state_machine__6136__auto____0 = (function (){var statearr_10859 = [null,null,null,null,null,null,null,null,null];(statearr_10859[0] = state_machine__6136__auto__);
(statearr_10859[1] = 1);
return statearr_10859;
});
var state_machine__6136__auto____1 = (function (state_10845){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_10845);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e10860){if((e10860 instanceof Object))
{var ex__6139__auto__ = e10860;var statearr_10861_10871 = state_10845;(statearr_10861_10871[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10845);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10872 = state_10845;
state_10845 = G__10872;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_10845){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_10845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_10862 = f__6151__auto__.call(null);(statearr_10862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_10862;
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
app.core.moviedb_get_image_url = (function moviedb_get_image_url(show_name){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,app.core.moviedb_search.call(null,show_name),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10873_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,app.core.moviedb_image_url.call(null,new cljs.core.Keyword(null,"backdrop_path","backdrop_path",4386024928).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(p1__10873_SHARP_)))));
})], null));
return ch;
});
app.core.app_id = "iorek.tivishows4";
app.core.dir_base = "/Disque dur/Videos/";
app.core.freebox_get = (function freebox_get(url,token){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,[cljs.core.str("http://88.124.156.100/api/v1/"),cljs.core.str(url)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10874_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10874_SHARP_));
})], null));
return ch;
});
app.core.freebox_autorize = (function freebox_autorize(do_with_token){return ajax.core.POST.call(null,"http://88.124.156.100/api/v1/login/authorize/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"app_id","app_id",3897797483),app.core.app_id,new cljs.core.Keyword(null,"app_name","app_name",2181552475),"tivishows",new cljs.core.Keyword(null,"app_version","app_version",4407001132),"1",new cljs.core.Keyword(null,"device_name","device_name",3765800518),"Nexus Pad"], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10875_SHARP_){return do_with_token.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10875_SHARP_));
})], null));
});
app.core.freebox_session = (function freebox_session(app_token,do_with_session){return ajax.core.GET.call(null,"http://88.124.156.100/api/v1/login/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10876_SHARP_){var challenge = new cljs.core.Keyword(null,"challenge","challenge",2416537557).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10876_SHARP_));return app.core.freebox_session_save.call(null,app.core.freebox_make_password.call(null,challenge,app_token),do_with_session);
})], null));
});
app.core.freebox_session_save = (function freebox_session_save(pass,do_with_session){return ajax.core.POST.call(null,"http://88.124.156.100/api/v1/login/session/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app_id","app_id",3897797483),app.core.app_id,new cljs.core.Keyword(null,"password","password",2230889997),pass], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10877_SHARP_){return do_with_session.call(null,new cljs.core.Keyword(null,"session_token","session_token",1215285890).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10877_SHARP_)));
})], null));
});
app.core.freebox_track_id = (function freebox_track_id(id){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,[cljs.core.str("http://88.124.156.100/api/v1/login/authorize/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10878_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10878_SHARP_));
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
var freebox_call__delegate = function (method,uri,p__10881){var map__10883 = p__10881;var map__10883__$1 = ((cljs.core.seq_QMARK_.call(null,map__10883))?cljs.core.apply.call(null,cljs.core.hash_map,map__10883):map__10883);var channel = cljs.core.get.call(null,map__10883__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var proj = cljs.core.get.call(null,map__10883__$1,new cljs.core.Keyword(null,"proj","proj",1017353935));var opts = cljs.core.get.call(null,map__10883__$1,new cljs.core.Keyword(null,"opts","opts",1017322386));var ch = (function (){var or__3401__auto__ = channel;if(cljs.core.truth_(or__3401__auto__))
{return or__3401__auto__;
} else
{return cljs.core.async.chan.call(null);
}
})();var default_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.app_state))], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (ch){
return (function (p1__10879_SHARP_){cljs.core.prn.call(null,"handler");
return cljs.core.async.put_BANG_.call(null,ch,cljs.core.get_in.call(null,p1__10879_SHARP_,proj));
});})(ch))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (ch){
return (function (res){if(cljs.core._EQ_.call(null,"auth_required",new cljs.core.Keyword(null,"error_code","error_code",2649591094).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"response","response",673580979).cljs$core$IFn$_invoke$arity$1(res))))
{return app.core.freebox_session.call(null,new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.app_state)),((function (ch){
return (function (p1__10880_SHARP_){cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"session-token","session-token",4078795636),p1__10880_SHARP_);
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
var p__10881 = null;if (arguments.length > 2) {
  p__10881 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return freebox_call__delegate.call(this,method,uri,p__10881);};
freebox_call.cljs$lang$maxFixedArity = 2;
freebox_call.cljs$lang$applyTo = (function (arglist__10884){
var method = cljs.core.first(arglist__10884);
arglist__10884 = cljs.core.next(arglist__10884);
var uri = cljs.core.first(arglist__10884);
var p__10881 = cljs.core.rest(arglist__10884);
return freebox_call__delegate(method,uri,p__10881);
});
freebox_call.cljs$core$IFn$_invoke$arity$variadic = freebox_call__delegate;
return freebox_call;
})()
;
app.core.freebox_get_download_percent = (function freebox_get_download_percent(id,session_token,do_with_percent){return app.core.freebox_get_download.call(null,id,session_token,(function (p1__10885_SHARP_){return do_with_percent.call(null,(new cljs.core.Keyword(null,"rx_pct","rx_pct",4391390938).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10885_SHARP_)) / 100));
}));
});
app.core.freebox_get_download_details = (function freebox_get_download_details(id,session_token){return app.core.freebox_call.call(null,ajax.core.GET,[cljs.core.str("/downloads/"),cljs.core.str(id)].join(''));
});
app.core.freebox_get_download = (function freebox_get_download(id,session_token,handler){return ajax.core.GET.call(null,[cljs.core.str("http://88.124.156.100/api/v1/downloads/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),session_token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),handler], null));
});
app.core.freebox_get_upload_id = (function freebox_get_upload_id(session_token,dirname,upname){var ch = cljs.core.async.chan.call(null);ajax.core.POST.call(null,[cljs.core.str("http://88.124.156.100/api/v1/upload/")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dirname","dirname",2684675082),dirname,new cljs.core.Keyword(null,"upload_name","upload_name",2078716283),[cljs.core.str(upname),cljs.core.str(".srt")].join('')], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),session_token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10886_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10886_SHARP_)));
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
app.core.topcoat_list_view = (function topcoat_list_view(app__$1,owner){if(typeof app.core.t10890 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t10890 = (function (owner,app,topcoat_list_view,meta10891){
this.owner = owner;
this.app = app;
this.topcoat_list_view = topcoat_list_view;
this.meta10891 = meta10891;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t10890.cljs$lang$type = true;
app.core.t10890.cljs$lang$ctorStr = "app.core/t10890";
app.core.t10890.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t10890");
});
app.core.t10890.prototype.om$core$IRenderState$ = true;
app.core.t10890.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div({"className": [cljs.core.str("topcoat-list__container"),cljs.core.str(new cljs.core.Keyword(null,"listCls","listCls",1195843358).cljs$core$IFn$_invoke$arity$1(app.core.data))].join('')},(cljs.core.truth_(new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(self__.app))?React.DOM.h3({"className": "topcoat-list__header"},new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(self__.app)):null),cljs.core.apply.call(null,om.dom.ul,{"className": "topcoat-list list "},cljs.core.map.call(null,(function (item){return React.DOM.li({"onDoubleClick": (function (){return new cljs.core.Keyword(null,"db-click","db-click",1660355307).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,item);
}), "onClick": (function (){return new cljs.core.Keyword(null,"click","click",1108654330).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,item);
}), "className": "topcoat-list__item"},new cljs.core.Keyword(null,"display","display",2685668404).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,item,self__.owner));
}),new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(self__.app))),(cljs.core.truth_(new cljs.core.Keyword(null,"extra","extra",1110869890).cljs$core$IFn$_invoke$arity$1(self__.app))?new cljs.core.Keyword(null,"extra","extra",1110869890).cljs$core$IFn$_invoke$arity$1(self__.app):null));
});
app.core.t10890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10892){var self__ = this;
var _10892__$1 = this;return self__.meta10891;
});
app.core.t10890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10892,meta10891__$1){var self__ = this;
var _10892__$1 = this;return (new app.core.t10890(self__.owner,self__.app,self__.topcoat_list_view,meta10891__$1));
});
app.core.__GT_t10890 = (function __GT_t10890(owner__$1,app__$2,topcoat_list_view__$1,meta10891){return (new app.core.t10890(owner__$1,app__$2,topcoat_list_view__$1,meta10891));
});
}
return (new app.core.t10890(owner,app__$1,topcoat_list_view,null));
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
app.core.add_show_view = (function add_show_view(app__$1,owner){if(typeof app.core.t10898 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t10898 = (function (owner,app,add_show_view,meta10899){
this.owner = owner;
this.app = app;
this.add_show_view = add_show_view;
this.meta10899 = meta10899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t10898.cljs$lang$type = true;
app.core.t10898.cljs$lang$ctorStr = "app.core/t10898";
app.core.t10898.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t10898");
});
app.core.t10898.prototype.om$core$IRenderState$ = true;
app.core.t10898.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,st){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "topcoat-list"},React.DOM.h3({"className": "topcoat-list__header"},"Add Show"),React.DOM.form({"onSubmit": (function (p1__10893_SHARP_){return app.core.findShows.call(null,p1__10893_SHARP_,self__.owner,om.core.get_node.call(null,self__.owner,"show-name").value);
}), "className": "add-show-input"},om.dom.input.call(null,{"ref": "show-name", "placeholder": "show name", "className": "topcoat-text-input", "type": "text"})),cljs.core.apply.call(null,om.dom.ul,{"className": "topcoat-list__container"},cljs.core.map.call(null,(function (show){return React.DOM.li({"onClick": (function (p1__10894_SHARP_){return app.core.save_show.call(null,p1__10894_SHARP_,show,self__.app,self__.owner);
}), "className": "topcoat-list__item"},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(show));
}),new cljs.core.Keyword(null,"shows","shows",1123317896).cljs$core$IFn$_invoke$arity$1(st))));
});
app.core.t10898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10900){var self__ = this;
var _10900__$1 = this;return self__.meta10899;
});
app.core.t10898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10900,meta10899__$1){var self__ = this;
var _10900__$1 = this;return (new app.core.t10898(self__.owner,self__.app,self__.add_show_view,meta10899__$1));
});
app.core.__GT_t10898 = (function __GT_t10898(owner__$1,app__$2,add_show_view__$1,meta10899){return (new app.core.t10898(owner__$1,app__$2,add_show_view__$1,meta10899));
});
}
return (new app.core.t10898(owner,app__$1,add_show_view,null));
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
app.core.show_select_last_view = (function show_select_last_view(app__$1,owner){if(typeof app.core.t10931 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t10931 = (function (owner,app,show_select_last_view,meta10932){
this.owner = owner;
this.app = app;
this.show_select_last_view = show_select_last_view;
this.meta10932 = meta10932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t10931.cljs$lang$type = true;
app.core.t10931.cljs$lang$ctorStr = "app.core/t10931";
app.core.t10931.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t10931");
});
app.core.t10931.prototype.om$core$IRenderState$ = true;
app.core.t10931.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return om.core.build.call(null,app.core.topcoat_list_view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.reverse.call(null,cljs.core.map_indexed.call(null,(function (idx,seas){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1014008367),idx,new cljs.core.Keyword(null,"episodes","episodes",4675925322),seas], null);
}),new cljs.core.Keyword(null,"seasons","seasons",2982274402).cljs$core$IFn$_invoke$arity$1(state))),new cljs.core.Keyword(null,"header","header",4087600639),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.str(" - Click the next episode you want to see !")].join(''),new cljs.core.Keyword(null,"display","display",2685668404),(function (p1__10902_SHARP_){return app.core.show_season_episodes.call(null,self__.app,new cljs.core.Keyword(null,"episodes","episodes",4675925322).cljs$core$IFn$_invoke$arity$1(p1__10902_SHARP_),new cljs.core.Keyword(null,"idx","idx",1014008367).cljs$core$IFn$_invoke$arity$1(p1__10902_SHARP_),new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"mark-chan","mark-chan",4322875844).cljs$core$IFn$_invoke$arity$1(state));
})], null),self__.app));
});
app.core.t10931.prototype.om$core$IWillMount$ = true;
app.core.t10931.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mark_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mark-chan","mark-chan",4322875844));app.core.parse_episode_list.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(self__.app))),(function (p1__10901_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"seasons","seasons",2982274402),p1__10901_SHARP_);
}));
var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_10947){var state_val_10948 = (state_10947[1]);if((state_val_10948 === 4))
{var inst_10936 = (state_10947[2]);var inst_10937 = new cljs.core.Keyword(null,"show","show",1017433711).cljs$core$IFn$_invoke$arity$1(inst_10936);var inst_10938 = (function (){var marked = inst_10936;return ((function (marked,inst_10936,inst_10937,state_val_10948){
return (function (idx,it){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1014008367),idx,new cljs.core.Keyword(null,"episodes","episodes",4675925322),it], null);
});
;})(marked,inst_10936,inst_10937,state_val_10948))
})();var inst_10939 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"seasons","seasons",2982274402));var inst_10940 = cljs.core.map_indexed.call(null,inst_10938,inst_10939);var inst_10941 = new cljs.core.Keyword(null,"episode","episode",3764433261).cljs$core$IFn$_invoke$arity$1(inst_10936);var inst_10942 = app.core.mark_watched.call(null,inst_10937,inst_10940,inst_10941,self__.app);var state_10947__$1 = (function (){var statearr_10949 = state_10947;(statearr_10949[7] = inst_10942);
return statearr_10949;
})();var statearr_10950_10959 = state_10947__$1;(statearr_10950_10959[2] = null);
(statearr_10950_10959[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10948 === 3))
{var inst_10945 = (state_10947[2]);var state_10947__$1 = state_10947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10947__$1,inst_10945);
} else
{if((state_val_10948 === 2))
{var state_10947__$1 = state_10947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10947__$1,4,mark_chan);
} else
{if((state_val_10948 === 1))
{var state_10947__$1 = state_10947;var statearr_10951_10960 = state_10947__$1;(statearr_10951_10960[2] = null);
(statearr_10951_10960[1] = 2);
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
var state_machine__6136__auto____0 = (function (){var statearr_10955 = [null,null,null,null,null,null,null,null];(statearr_10955[0] = state_machine__6136__auto__);
(statearr_10955[1] = 1);
return statearr_10955;
});
var state_machine__6136__auto____1 = (function (state_10947){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_10947);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e10956){if((e10956 instanceof Object))
{var ex__6139__auto__ = e10956;var statearr_10957_10961 = state_10947;(statearr_10957_10961[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10947);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10956;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10962 = state_10947;
state_10947 = G__10962;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_10947){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_10947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_10958 = f__6151__auto__.call(null);(statearr_10958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_10958;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.t10931.prototype.om$core$IInitState$ = true;
app.core.t10931.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seasons","seasons",2982274402),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"mark-chan","mark-chan",4322875844),cljs.core.async.chan.call(null)], null);
});
app.core.t10931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10933){var self__ = this;
var _10933__$1 = this;return self__.meta10932;
});
app.core.t10931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10933,meta10932__$1){var self__ = this;
var _10933__$1 = this;return (new app.core.t10931(self__.owner,self__.app,self__.show_select_last_view,meta10932__$1));
});
app.core.__GT_t10931 = (function __GT_t10931(owner__$1,app__$2,show_select_last_view__$1,meta10932){return (new app.core.t10931(owner__$1,app__$2,show_select_last_view__$1,meta10932));
});
}
return (new app.core.t10931(owner,app__$1,show_select_last_view,null));
});
app.core.show_season_episodes = (function show_season_episodes(app__$1,season,num,show,mark_chan){return om.core.build.call(null,app.core.topcoat_list_view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",4087600639),[cljs.core.str("Season "),cljs.core.str((num + 1))].join(''),new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,season,"episode")], null)),new cljs.core.Keyword(null,"display","display",2685668404),(function (p1__10963_SHARP_){return React.DOM.span(null,[cljs.core.str("Episode "),cljs.core.str(cljs.core.get.call(null,p1__10963_SHARP_,"seasonnum")),cljs.core.str(" - "),cljs.core.str(cljs.core.get.call(null,p1__10963_SHARP_,"title"))].join(''),React.DOM.em({"className": "download"},app.core.get_air_delay.call(null,cljs.core.get.call(null,p1__10963_SHARP_,"airdate"))));
}),new cljs.core.Keyword(null,"click","click",1108654330),(function (p1__10964_SHARP_){return cljs.core.async.put_BANG_.call(null,mark_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"season","season",4402536021),(num + 1),new cljs.core.Keyword(null,"episode","episode",3764433261),cljs.reader.read_string.call(null,cljs.core.get.call(null,p1__10964_SHARP_,"epnum")),new cljs.core.Keyword(null,"show","show",1017433711),show], null));
})], null),app__$1));
});
app.core.get_air_delay = (function get_air_delay(string_date){return (new moment(string_date)).fromNow();
});
app.core.get_watch_list = (function get_watch_list(seasons,episode){return cljs.core.reduce.call(null,(function (acc,curr){return cljs.core.concat.call(null,acc,cljs.core.remove.call(null,(function (p1__10965_SHARP_){return (new cljs.core.Keyword(null,"episode","episode",3764433261).cljs$core$IFn$_invoke$arity$1(p1__10965_SHARP_) < episode);
}),cljs.core.map.call(null,(function (p1__10966_SHARP_){return app.core.parse_episode.call(null,p1__10966_SHARP_,new cljs.core.Keyword(null,"idx","idx",1014008367).cljs$core$IFn$_invoke$arity$1(curr));
}),cljs.core.get.call(null,new cljs.core.Keyword(null,"episodes","episodes",4675925322).cljs$core$IFn$_invoke$arity$1(curr),"episode"))));
}),cljs.core.PersistentVector.EMPTY,seasons);
});
app.core.mark_watched = (function mark_watched(show,seasons,episode,app__$1){var eps = app.core.get_watch_list.call(null,seasons,episode);window.scrollTo(0,0);
return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,show)),(function (_){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-name","show-name",3359181517),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,show)),new cljs.core.Keyword(null,"show-id","show-id",3081146717),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,show)),new cljs.core.Keyword(null,"episodes","episodes",4675925322),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,eps)], null);
}));
});
app.core.parse_episode = (function parse_episode(ep,seas){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"episode","episode",3764433261),cljs.core.get.call(null,ep,"epnum"),new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025),cljs.core.get.call(null,ep,"seasonnum"),new cljs.core.Keyword(null,"season","season",4402536021),(seas + 1),new cljs.core.Keyword(null,"title","title",1124275658),cljs.core.get.call(null,ep,"title"),new cljs.core.Keyword(null,"air-date","air-date",4569745859),cljs.core.get.call(null,ep,"airdate")], null);
});
app.core.show_watch_list_view = (function show_watch_list_view(app__$1,owner){if(typeof app.core.t11000 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t11000 = (function (owner,app,show_watch_list_view,meta11001){
this.owner = owner;
this.app = app;
this.show_watch_list_view = show_watch_list_view;
this.meta11001 = meta11001;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t11000.cljs$lang$type = true;
app.core.t11000.cljs$lang$ctorStr = "app.core/t11000";
app.core.t11000.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t11000");
});
app.core.t11000.prototype.om$core$IRenderState$ = true;
app.core.t11000.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": [cljs.core.str("topcoat-list")].join('')},React.DOM.h3({"className": "topcoat-list__header"},React.DOM.img({"className": "picture", "height": "30%", "src": new cljs.core.Keyword(null,"image","image",1114217677).cljs$core$IFn$_invoke$arity$1(self__.app)})),cljs.core.apply.call(null,om.dom.ul,{"className": "topcoat-list__container"},om.core.build_all.call(null,app.core.episode_view,new cljs.core.Keyword(null,"episodes","episodes",4675925322).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-name","show-name",3359181517),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"token","token",1124445547),new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-name","show-name",3359181517),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)))),React.DOM.button({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,app.core.reset_show_chan,new cljs.core.Keyword(null,"show-id","show-id",3081146717).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)));
}), "className": "topcoat-button reset-show"},"Reset shows"),React.DOM.form({"onSubmit": (function (e,own){var newval = om.core.get_node.call(null,self__.owner,"show-name-change").value;return e.preventDefault().call(null,cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shows","shows",1123317896)], null),(function (shows){return cljs.core.map.call(null,(function (p1__10967_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__10967_SHARP_),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app))))
{return cljs.core.assoc.call(null,p1__10967_SHARP_,new cljs.core.Keyword(null,"name","name",1017277949),newval);
} else
{return p1__10967_SHARP_;
}
}),shows);
})),cljs.core.prn.call(null,cljs.core.deref.call(null,self__.app)),cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.Keyword(null,"name","name",1017277949)], null),newval));
}), "className": "add-show-input"},om.dom.input.call(null,{"onChange": (function (event){var newval = event.target.value;return cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shows","shows",1123317896)], null),(function (shows){return cljs.core.map.call(null,(function (p1__10968_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__10968_SHARP_),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app))))
{return cljs.core.assoc.call(null,p1__10968_SHARP_,new cljs.core.Keyword(null,"name","name",1017277949),newval);
} else
{return p1__10968_SHARP_;
}
}),shows);
})).call(null,cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.Keyword(null,"name","name",1017277949)], null),newval),om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-name","show-name",3359181517)], null),newval));
}), "ref": "show-name-change", "value": new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(self__.app), "className": "topcoat-text-input", "type": "text"})));
});
app.core.t11000.prototype.om$core$IWillMount$ = true;
app.core.t11000.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11018){var state_val_11019 = (state_11018[1]);if((state_val_11019 === 5))
{var inst_11011 = (state_11018[2]);var inst_11012 = (function (){var img = inst_11011;return ((function (img,inst_11011,state_val_11019){
return (function (___$2){return img;
});
;})(img,inst_11011,state_val_11019))
})();var inst_11013 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"image","image",1114217677),inst_11012);var state_11018__$1 = state_11018;var statearr_11020_11031 = state_11018__$1;(statearr_11020_11031[2] = inst_11013);
(statearr_11020_11031[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11019 === 4))
{var inst_11016 = (state_11018[2]);var state_11018__$1 = state_11018;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11018__$1,inst_11016);
} else
{if((state_val_11019 === 3))
{var state_11018__$1 = state_11018;var statearr_11021_11032 = state_11018__$1;(statearr_11021_11032[2] = null);
(statearr_11021_11032[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11019 === 2))
{var inst_11007 = cljs.core.deref.call(null,self__.app);var inst_11008 = new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(inst_11007);var inst_11009 = app.core.moviedb_get_image_url.call(null,inst_11008);var state_11018__$1 = state_11018;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11018__$1,5,inst_11009);
} else
{if((state_val_11019 === 1))
{var inst_11003 = cljs.core.deref.call(null,self__.app);var inst_11004 = new cljs.core.Keyword(null,"image","image",1114217677).cljs$core$IFn$_invoke$arity$1(inst_11003);var inst_11005 = cljs.core.not.call(null,inst_11004);var state_11018__$1 = state_11018;if(inst_11005)
{var statearr_11022_11033 = state_11018__$1;(statearr_11022_11033[1] = 2);
} else
{var statearr_11023_11034 = state_11018__$1;(statearr_11023_11034[1] = 3);
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
var state_machine__6136__auto____0 = (function (){var statearr_11027 = [null,null,null,null,null,null,null];(statearr_11027[0] = state_machine__6136__auto__);
(statearr_11027[1] = 1);
return statearr_11027;
});
var state_machine__6136__auto____1 = (function (state_11018){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11018);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11028){if((e11028 instanceof Object))
{var ex__6139__auto__ = e11028;var statearr_11029_11035 = state_11018;(statearr_11029_11035[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11018);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11028;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11036 = state_11018;
state_11018 = G__11036;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11018){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11030 = f__6151__auto__.call(null);(statearr_11030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11030;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.t11000.prototype.om$core$IDidMount$ = true;
app.core.t11000.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.prn.call(null,self__.app);
});
app.core.t11000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11002){var self__ = this;
var _11002__$1 = this;return self__.meta11001;
});
app.core.t11000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11002,meta11001__$1){var self__ = this;
var _11002__$1 = this;return (new app.core.t11000(self__.owner,self__.app,self__.show_watch_list_view,meta11001__$1));
});
app.core.__GT_t11000 = (function __GT_t11000(owner__$1,app__$2,show_watch_list_view__$1,meta11001){return (new app.core.t11000(owner__$1,app__$2,show_watch_list_view__$1,meta11001));
});
}
return (new app.core.t11000(owner,app__$1,show_watch_list_view,null));
});
cljs.core.prn.call(null,cljs.core.deref.call(null,app.core.app_state));
app.core.episode_view = (function episode_view(app__$1,owner,opts){if(typeof app.core.t11136 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t11136 = (function (opts,owner,app,episode_view,meta11137){
this.opts = opts;
this.owner = owner;
this.app = app;
this.episode_view = episode_view;
this.meta11137 = meta11137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t11136.cljs$lang$type = true;
app.core.t11136.cljs$lang$ctorStr = "app.core/t11136";
app.core.t11136.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t11136");
});
app.core.t11136.prototype.om$core$IRenderState$ = true;
app.core.t11136.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
app.core.t11136.prototype.om$core$IWillMount$ = true;
app.core.t11136.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var update_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"update-chan","update-chan",4688741704));var map__11139 = self__.app;var map__11139__$1 = ((cljs.core.seq_QMARK_.call(null,map__11139))?cljs.core.apply.call(null,cljs.core.hash_map,map__11139):map__11139);var epnumrelative = cljs.core.get.call(null,map__11139__$1,new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025));var season = cljs.core.get.call(null,map__11139__$1,new cljs.core.Keyword(null,"season","season",4402536021));var st = om.core.get_state.call(null,self__.owner);var show_name = new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(st);if(cljs.core.truth_((function (){var and__3389__auto__ = new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core.truth_(and__3389__auto__))
{return (new cljs.core.Keyword(null,"percent","percent",4629944247).cljs$core$IFn$_invoke$arity$1(self__.app) < 100);
} else
{return and__3389__auto__;
}
})()))
{app.core.get_download_percent.call(null,new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(self__.app),self__.app,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"token","token",1124445547)),update_chan);
} else
{}
var c__6150__auto___11235 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11176){var state_val_11177 = (state_11176[1]);if((state_val_11177 === 1))
{var state_11176__$1 = state_11176;var statearr_11178_11236 = state_11176__$1;(statearr_11178_11236[2] = null);
(statearr_11178_11236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11177 === 2))
{var state_11176__$1 = state_11176;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11176__$1,4,update_chan);
} else
{if((state_val_11177 === 3))
{var inst_11174 = (state_11176[2]);var state_11176__$1 = state_11176;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11176__$1,inst_11174);
} else
{if((state_val_11177 === 4))
{var inst_11144 = (state_11176[7]);var inst_11142 = (state_11176[8]);var inst_11149 = (state_11176[9]);var inst_11142__$1 = (state_11176[2]);var inst_11143 = cljs.core.deref.call(null,self__.app);var inst_11144__$1 = new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(inst_11143);var inst_11145 = (function (){var sub_link = inst_11144__$1;var percent = inst_11142__$1;return ((function (sub_link,percent,inst_11144,inst_11142,inst_11149,inst_11142__$1,inst_11143,inst_11144__$1,state_val_11177){
return (function (___$2){return (percent | 0);
});
;})(sub_link,percent,inst_11144,inst_11142,inst_11149,inst_11142__$1,inst_11143,inst_11144__$1,state_val_11177))
})();var inst_11146 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"percent","percent",4629944247),inst_11145);var inst_11147 = cljs.core.deref.call(null,self__.app);var inst_11148 = cljs.core.contains_QMARK_.call(null,inst_11147,new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675));var inst_11149__$1 = !(inst_11148);var state_11176__$1 = (function (){var statearr_11179 = state_11176;(statearr_11179[10] = inst_11146);
(statearr_11179[7] = inst_11144__$1);
(statearr_11179[8] = inst_11142__$1);
(statearr_11179[9] = inst_11149__$1);
return statearr_11179;
})();if(inst_11149__$1)
{var statearr_11180_11237 = state_11176__$1;(statearr_11180_11237[1] = 5);
} else
{var statearr_11181_11238 = state_11176__$1;(statearr_11181_11238[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11177 === 5))
{var inst_11144 = (state_11176[7]);var state_11176__$1 = state_11176;if(cljs.core.truth_(inst_11144))
{var statearr_11182_11239 = state_11176__$1;(statearr_11182_11239[1] = 8);
} else
{var statearr_11183_11240 = state_11176__$1;(statearr_11183_11240[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11177 === 6))
{var inst_11149 = (state_11176[9]);var state_11176__$1 = state_11176;var statearr_11184_11241 = state_11176__$1;(statearr_11184_11241[2] = inst_11149);
(statearr_11184_11241[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11177 === 7))
{var inst_11159 = (state_11176[2]);var state_11176__$1 = state_11176;if(cljs.core.truth_(inst_11159))
{var statearr_11185_11242 = state_11176__$1;(statearr_11185_11242[1] = 11);
} else
{var statearr_11186_11243 = state_11176__$1;(statearr_11186_11243[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11177 === 8))
{var inst_11142 = (state_11176[8]);var inst_11152 = (inst_11142 | 0);var inst_11153 = (inst_11152 > 0);var state_11176__$1 = state_11176;var statearr_11187_11244 = state_11176__$1;(statearr_11187_11244[2] = inst_11153);
(statearr_11187_11244[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11177 === 9))
{var inst_11144 = (state_11176[7]);var state_11176__$1 = state_11176;var statearr_11188_11245 = state_11176__$1;(statearr_11188_11245[2] = inst_11144);
(statearr_11188_11245[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11177 === 10))
{var inst_11156 = (state_11176[2]);var state_11176__$1 = state_11176;var statearr_11189_11246 = state_11176__$1;(statearr_11189_11246[2] = inst_11156);
(statearr_11189_11246[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11177 === 11))
{var inst_11144 = (state_11176[7]);var inst_11161 = cljs.core.deref.call(null,app.core.app_state);var inst_11162 = new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(inst_11161);var inst_11163 = cljs.core.deref.call(null,self__.app);var inst_11164 = new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(inst_11163);var inst_11165 = app.core.downloadSubs.call(null,inst_11144,inst_11162,inst_11164,show_name,season,epnumrelative);var inst_11166 = [new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675)];var inst_11167 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11166,null));var inst_11168 = om.core.update_BANG_.call(null,self__.app,inst_11167,true);var state_11176__$1 = (function (){var statearr_11190 = state_11176;(statearr_11190[11] = inst_11165);
return statearr_11190;
})();var statearr_11191_11247 = state_11176__$1;(statearr_11191_11247[2] = inst_11168);
(statearr_11191_11247[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11177 === 12))
{var state_11176__$1 = state_11176;var statearr_11192_11248 = state_11176__$1;(statearr_11192_11248[2] = null);
(statearr_11192_11248[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11177 === 13))
{var inst_11171 = (state_11176[2]);var state_11176__$1 = (function (){var statearr_11193 = state_11176;(statearr_11193[12] = inst_11171);
return statearr_11193;
})();var statearr_11194_11249 = state_11176__$1;(statearr_11194_11249[2] = null);
(statearr_11194_11249[1] = 2);
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
var state_machine__6136__auto____0 = (function (){var statearr_11198 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11198[0] = state_machine__6136__auto__);
(statearr_11198[1] = 1);
return statearr_11198;
});
var state_machine__6136__auto____1 = (function (state_11176){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11176);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11199){if((e11199 instanceof Object))
{var ex__6139__auto__ = e11199;var statearr_11200_11250 = state_11176;(statearr_11200_11250[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11176);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11199;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11251 = state_11176;
state_11176 = G__11251;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11176){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11201 = f__6151__auto__.call(null);(statearr_11201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto___11235);
return statearr_11201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11221){var state_val_11222 = (state_11221[1]);if((state_val_11222 === 5))
{var inst_11212 = (state_11221[7]);var inst_11215 = (state_11221[2]);var inst_11216 = om.core.update_BANG_.call(null,self__.app,inst_11212,inst_11215);var state_11221__$1 = state_11221;var statearr_11223_11252 = state_11221__$1;(statearr_11223_11252[2] = inst_11216);
(statearr_11223_11252[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11222 === 4))
{var inst_11219 = (state_11221[2]);var state_11221__$1 = state_11221;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11221__$1,inst_11219);
} else
{if((state_val_11222 === 3))
{var state_11221__$1 = state_11221;var statearr_11224_11253 = state_11221__$1;(statearr_11224_11253[2] = null);
(statearr_11224_11253[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11222 === 2))
{var inst_11211 = [new cljs.core.Keyword(null,"subs-link","subs-link",1478697670)];var inst_11212 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11211,null));var inst_11213 = app.core.get_subtitle_link.call(null,show_name,season,epnumrelative);var state_11221__$1 = (function (){var statearr_11225 = state_11221;(statearr_11225[7] = inst_11212);
return statearr_11225;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11221__$1,5,inst_11213);
} else
{if((state_val_11222 === 1))
{var inst_11202 = cljs.core.deref.call(null,self__.app);var inst_11203 = new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(inst_11202);var inst_11204 = cljs.core.not.call(null,inst_11203);var inst_11205 = cljs.core.deref.call(null,self__.app);var inst_11206 = new cljs.core.Keyword(null,"air-date","air-date",4569745859).cljs$core$IFn$_invoke$arity$1(inst_11205);var inst_11207 = app.core.in_future_QMARK_.call(null,inst_11206);var inst_11208 = cljs.core.not.call(null,inst_11207);var inst_11209 = (inst_11204) && (inst_11208);var state_11221__$1 = state_11221;if(cljs.core.truth_(inst_11209))
{var statearr_11226_11254 = state_11221__$1;(statearr_11226_11254[1] = 2);
} else
{var statearr_11227_11255 = state_11221__$1;(statearr_11227_11255[1] = 3);
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
var state_machine__6136__auto____0 = (function (){var statearr_11231 = [null,null,null,null,null,null,null,null];(statearr_11231[0] = state_machine__6136__auto__);
(statearr_11231[1] = 1);
return statearr_11231;
});
var state_machine__6136__auto____1 = (function (state_11221){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11221);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11232){if((e11232 instanceof Object))
{var ex__6139__auto__ = e11232;var statearr_11233_11256 = state_11221;(statearr_11233_11256[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11221);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11257 = state_11221;
state_11221 = G__11257;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11221){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11234 = f__6151__auto__.call(null);(statearr_11234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.t11136.prototype.om$core$IInitState$ = true;
app.core.t11136.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update-chan","update-chan",4688741704),cljs.core.async.chan.call(null)], null);
});
app.core.t11136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11138){var self__ = this;
var _11138__$1 = this;return self__.meta11137;
});
app.core.t11136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11138,meta11137__$1){var self__ = this;
var _11138__$1 = this;return (new app.core.t11136(self__.opts,self__.owner,self__.app,self__.episode_view,meta11137__$1));
});
app.core.__GT_t11136 = (function __GT_t11136(opts__$1,owner__$1,app__$2,episode_view__$1,meta11137){return (new app.core.t11136(opts__$1,owner__$1,app__$2,episode_view__$1,meta11137));
});
}
return (new app.core.t11136(opts,owner,app__$1,episode_view,null));
});
app.core.in_future_QMARK_ = (function in_future_QMARK_(string_date){return (new moment(string_date)).isAfter();
});
app.core.download = (function download(app__$1,sn,token,update_chan){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11324){var state_val_11325 = (state_11324[1]);if((state_val_11325 === 7))
{var inst_11307 = (state_11324[7]);var inst_11309 = (state_11324[8]);var inst_11308 = (state_11324[9]);var inst_11315 = (state_11324[10]);var inst_11312 = (state_11324[11]);var inst_11318 = (state_11324[2]);var inst_11319 = new cljs.core.Keyword(null,"magnet","magnet",4227240668).cljs$core$IFn$_invoke$arity$1(inst_11312);var inst_11320 = (function (){var dl_dir = inst_11318;var link = inst_11315;var magnet = inst_11312;var season = inst_11309;var epnumrelative = inst_11308;var map__11300 = inst_11307;return ((function (dl_dir,link,magnet,season,epnumrelative,map__11300,inst_11307,inst_11309,inst_11308,inst_11315,inst_11312,inst_11318,inst_11319,state_val_11325){
return (function (id,newtoken){if(cljs.core.truth_(id))
{return app.core.get_download_percent.call(null,id,app__$1,newtoken,update_chan);
} else
{return null;
}
});
;})(dl_dir,link,magnet,season,epnumrelative,map__11300,inst_11307,inst_11309,inst_11308,inst_11315,inst_11312,inst_11318,inst_11319,state_val_11325))
})();var inst_11321 = (function (){var dl_dir = inst_11318;var link = inst_11315;var magnet = inst_11312;var season = inst_11309;var epnumrelative = inst_11308;var map__11300 = inst_11307;return ((function (dl_dir,link,magnet,season,epnumrelative,map__11300,inst_11307,inst_11309,inst_11308,inst_11315,inst_11312,inst_11318,inst_11319,inst_11320,state_val_11325){
return (function (p1__11258_SHARP_){return cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"session-token","session-token",4078795636),p1__11258_SHARP_);
});
;})(dl_dir,link,magnet,season,epnumrelative,map__11300,inst_11307,inst_11309,inst_11308,inst_11315,inst_11312,inst_11318,inst_11319,inst_11320,state_val_11325))
})();var inst_11322 = app.core.freebox_start_download.call(null,inst_11319,inst_11318,token,inst_11320,inst_11321);var state_11324__$1 = state_11324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11324__$1,inst_11322);
} else
{if((state_val_11325 === 6))
{var inst_11315 = (state_11324[2]);var inst_11316 = app.core.freebox_create_dir.call(null,sn);var state_11324__$1 = (function (){var statearr_11326 = state_11324;(statearr_11326[10] = inst_11315);
return statearr_11326;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11324__$1,7,inst_11316);
} else
{if((state_val_11325 === 5))
{var inst_11309 = (state_11324[8]);var inst_11308 = (state_11324[9]);var inst_11312 = (state_11324[2]);var inst_11313 = app.core.get_subtitle_link.call(null,sn,inst_11309,inst_11308);var state_11324__$1 = (function (){var statearr_11327 = state_11324;(statearr_11327[11] = inst_11312);
return statearr_11327;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11324__$1,6,inst_11313);
} else
{if((state_val_11325 === 4))
{var inst_11307 = (state_11324[7]);var inst_11309 = (state_11324[8]);var inst_11308 = (state_11324[9]);var inst_11307__$1 = (state_11324[2]);var inst_11308__$1 = cljs.core.get.call(null,inst_11307__$1,new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025));var inst_11309__$1 = cljs.core.get.call(null,inst_11307__$1,new cljs.core.Keyword(null,"season","season",4402536021));var inst_11310 = app.core.get_magnet_link.call(null,sn,inst_11309__$1,inst_11308__$1);var state_11324__$1 = (function (){var statearr_11328 = state_11324;(statearr_11328[7] = inst_11307__$1);
(statearr_11328[8] = inst_11309__$1);
(statearr_11328[9] = inst_11308__$1);
return statearr_11328;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11324__$1,5,inst_11310);
} else
{if((state_val_11325 === 3))
{var inst_11301 = (state_11324[12]);var state_11324__$1 = state_11324;var statearr_11329_11341 = state_11324__$1;(statearr_11329_11341[2] = inst_11301);
(statearr_11329_11341[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11325 === 2))
{var inst_11301 = (state_11324[12]);var inst_11304 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11301);var state_11324__$1 = state_11324;var statearr_11330_11342 = state_11324__$1;(statearr_11330_11342[2] = inst_11304);
(statearr_11330_11342[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11325 === 1))
{var inst_11301 = (state_11324[12]);var inst_11301__$1 = cljs.core.deref.call(null,app__$1);var inst_11302 = cljs.core.seq_QMARK_.call(null,inst_11301__$1);var state_11324__$1 = (function (){var statearr_11331 = state_11324;(statearr_11331[12] = inst_11301__$1);
return statearr_11331;
})();if(inst_11302)
{var statearr_11332_11343 = state_11324__$1;(statearr_11332_11343[1] = 2);
} else
{var statearr_11333_11344 = state_11324__$1;(statearr_11333_11344[1] = 3);
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
var state_machine__6136__auto____0 = (function (){var statearr_11337 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11337[0] = state_machine__6136__auto__);
(statearr_11337[1] = 1);
return statearr_11337;
});
var state_machine__6136__auto____1 = (function (state_11324){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11324);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11338){if((e11338 instanceof Object))
{var ex__6139__auto__ = e11338;var statearr_11339_11345 = state_11324;(statearr_11339_11345[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11324);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11346 = state_11324;
state_11324 = G__11346;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11324){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11340 = f__6151__auto__.call(null);(statearr_11340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.download_on_device = (function download_on_device(app__$1,state,dn){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11408){var state_val_11409 = (state_11408[1]);if((state_val_11409 === 3))
{var inst_11390 = (state_11408[7]);var inst_11394 = (state_11408[2]);var inst_11395 = app.core.subtitle_name_from_filename.call(null,inst_11394);var inst_11396 = [cljs.core.str(inst_11395),cljs.core.str(".srt")].join('');var inst_11397 = goog.crypt.base64.encodeString(inst_11396);var inst_11398 = goog.crypt.base64.encodeString(inst_11394);var inst_11399 = [new cljs.core.Keyword(null,"on-device","on-device",633333110)];var inst_11400 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11399,null));var inst_11401 = om.core.update_BANG_.call(null,app__$1,inst_11400,inst_11394);var inst_11402 = [cljs.core.str(inst_11390),cljs.core.str(inst_11398)].join('');var inst_11403 = [cljs.core.str(inst_11390),cljs.core.str(inst_11397)].join('');var inst_11404 = app.core.on_progress_device.call(null,app__$1,dn,inst_11394);var inst_11405 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state);var inst_11406 = window.downloadOnDevice(inst_11402,inst_11394,inst_11403,inst_11396,inst_11404,inst_11405);var state_11408__$1 = (function (){var statearr_11410 = state_11408;(statearr_11410[8] = inst_11401);
return statearr_11410;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11408__$1,inst_11406);
} else
{if((state_val_11409 === 2))
{var inst_11390 = (state_11408[7]);var inst_11388 = (state_11408[2]);var inst_11389 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_11388);var inst_11390__$1 = new cljs.core.Keyword(null,"download_dir","download_dir",2123295688).cljs$core$IFn$_invoke$arity$1(inst_11389);var inst_11391 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state);var inst_11392 = app.core.find_downloaded_name.call(null,inst_11390__$1,inst_11388,inst_11391,app.core.show);var state_11408__$1 = (function (){var statearr_11411 = state_11408;(statearr_11411[7] = inst_11390__$1);
return statearr_11411;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11408__$1,3,inst_11392);
} else
{if((state_val_11409 === 1))
{var inst_11383 = cljs.core.deref.call(null,app__$1);var inst_11384 = new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(inst_11383);var inst_11385 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state);var inst_11386 = app.core.freebox_get_download_details.call(null,inst_11384,inst_11385);var state_11408__$1 = state_11408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11408__$1,2,inst_11386);
} else
{return null;
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11415 = [null,null,null,null,null,null,null,null,null];(statearr_11415[0] = state_machine__6136__auto__);
(statearr_11415[1] = 1);
return statearr_11415;
});
var state_machine__6136__auto____1 = (function (state_11408){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11408);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11416){if((e11416 instanceof Object))
{var ex__6139__auto__ = e11416;var statearr_11417_11419 = state_11408;(statearr_11417_11419[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11408);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11420 = state_11408;
state_11408 = G__11420;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11408){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11418 = f__6151__auto__.call(null);(statearr_11418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11418;
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
app.core.play_on_device = (function play_on_device(show,download_id){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11457){var state_val_11458 = (state_11457[1]);if((state_val_11458 === 3))
{var inst_11453 = (state_11457[2]);var inst_11454 = [cljs.core.str(show),cljs.core.str("/"),cljs.core.str(inst_11453)].join('');var inst_11455 = playVideo(inst_11454);var state_11457__$1 = state_11457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11457__$1,inst_11455);
} else
{if((state_val_11458 === 2))
{var inst_11445 = (state_11457[7]);var inst_11448 = (state_11457[2]);var inst_11449 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_11448);var inst_11450 = new cljs.core.Keyword(null,"download_dir","download_dir",2123295688).cljs$core$IFn$_invoke$arity$1(inst_11449);var inst_11451 = app.core.find_downloaded_name.call(null,inst_11450,inst_11448,inst_11445,show);var state_11457__$1 = state_11457;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11457__$1,3,inst_11451);
} else
{if((state_val_11458 === 1))
{var inst_11445 = (state_11457[7]);var inst_11444 = cljs.core.deref.call(null,app.core.app_state);var inst_11445__$1 = new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(inst_11444);var inst_11446 = app.core.freebox_get_download_details.call(null,download_id,inst_11445__$1);var state_11457__$1 = (function (){var statearr_11459 = state_11457;(statearr_11459[7] = inst_11445__$1);
return statearr_11459;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11457__$1,2,inst_11446);
} else
{return null;
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11463 = [null,null,null,null,null,null,null,null];(statearr_11463[0] = state_machine__6136__auto__);
(statearr_11463[1] = 1);
return statearr_11463;
});
var state_machine__6136__auto____1 = (function (state_11457){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11457);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11464){if((e11464 instanceof Object))
{var ex__6139__auto__ = e11464;var statearr_11465_11467 = state_11457;(statearr_11465_11467[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11457);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11468 = state_11457;
state_11457 = G__11468;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11457){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11466 = f__6151__auto__.call(null);(statearr_11466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11466;
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
app.core.find_file_in_dir = (function find_file_in_dir(path,token){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11498){var state_val_11499 = (state_11498[1]);if((state_val_11499 === 2))
{var inst_11491 = (state_11498[2]);var inst_11492 = cljs.core.prn.call(null,inst_11491);var inst_11493 = (function (){var path_infos = inst_11491;return ((function (path_infos,inst_11491,inst_11492,state_val_11499){
return (function (p1__11469_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mimetype","mimetype",3917704416).cljs$core$IFn$_invoke$arity$1(p1__11469_SHARP_),"video/mp4");
});
;})(path_infos,inst_11491,inst_11492,state_val_11499))
})();var inst_11494 = cljs.core.filter.call(null,inst_11493,inst_11491);var inst_11495 = cljs.core.first.call(null,inst_11494);var inst_11496 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_11495);var state_11498__$1 = (function (){var statearr_11500 = state_11498;(statearr_11500[7] = inst_11492);
return statearr_11500;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11498__$1,inst_11496);
} else
{if((state_val_11499 === 1))
{var inst_11489 = app.core.freebox_ls_path.call(null,path,token);var state_11498__$1 = state_11498;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11498__$1,2,inst_11489);
} else
{return null;
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11504 = [null,null,null,null,null,null,null,null];(statearr_11504[0] = state_machine__6136__auto__);
(statearr_11504[1] = 1);
return statearr_11504;
});
var state_machine__6136__auto____1 = (function (state_11498){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11498);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11505){if((e11505 instanceof Object))
{var ex__6139__auto__ = e11505;var statearr_11506_11508 = state_11498;(statearr_11506_11508[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11498);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11505;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11509 = state_11498;
state_11498 = G__11509;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11498){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11507 = f__6151__auto__.call(null);(statearr_11507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11507;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.find_downloaded_name = (function find_downloaded_name(path,details,token,show){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11549){var state_val_11550 = (state_11549[1]);if((state_val_11550 === 5))
{var inst_11545 = (state_11549[2]);var state_11549__$1 = state_11549;var statearr_11551_11562 = state_11549__$1;(statearr_11551_11562[2] = inst_11545);
(statearr_11551_11562[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11550 === 4))
{var inst_11547 = (state_11549[2]);var state_11549__$1 = state_11549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11549__$1,inst_11547);
} else
{if((state_val_11550 === 3))
{var inst_11543 = app.core.find_file_in_dir.call(null,path,token);var state_11549__$1 = state_11549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11549__$1,5,inst_11543);
} else
{if((state_val_11550 === 2))
{var inst_11540 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(details);var inst_11541 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_11540);var state_11549__$1 = state_11549;var statearr_11552_11563 = state_11549__$1;(statearr_11552_11563[2] = inst_11541);
(statearr_11552_11563[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11550 === 1))
{var inst_11536 = [cljs.core.str(app.core.dir_base),cljs.core.str(show),cljs.core.str("/")].join('');var inst_11537 = btoa(inst_11536);var inst_11538 = cljs.core._EQ_.call(null,path,inst_11537);var state_11549__$1 = state_11549;if(inst_11538)
{var statearr_11553_11564 = state_11549__$1;(statearr_11553_11564[1] = 2);
} else
{var statearr_11554_11565 = state_11549__$1;(statearr_11554_11565[1] = 3);
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
var state_machine__6136__auto____0 = (function (){var statearr_11558 = [null,null,null,null,null,null,null];(statearr_11558[0] = state_machine__6136__auto__);
(statearr_11558[1] = 1);
return statearr_11558;
});
var state_machine__6136__auto____1 = (function (state_11549){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11549);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11559){if((e11559 instanceof Object))
{var ex__6139__auto__ = e11559;var statearr_11560_11566 = state_11549;(statearr_11560_11566[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11549);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11567 = state_11549;
state_11549 = G__11567;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11549){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11561 = f__6151__auto__.call(null);(statearr_11561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.downloadSubs = (function downloadSubs(link,token,download_id,show,season,ep){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11612){var state_val_11613 = (state_11612[1]);if((state_val_11613 === 4))
{var inst_11604 = (state_11612[7]);var inst_11607 = (state_11612[2]);var inst_11608 = cljs.core.prn.call(null,"download subbbbs");var inst_11609 = app.core.addic7ed_url.call(null,show,season,ep);var inst_11610 = window.downloadSub(link,token,inst_11604,inst_11607,inst_11609);var state_11612__$1 = (function (){var statearr_11614 = state_11612;(statearr_11614[8] = inst_11608);
return statearr_11614;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11612__$1,inst_11610);
} else
{if((state_val_11613 === 3))
{var inst_11600 = (state_11612[9]);var inst_11604 = (state_11612[7]);var inst_11603 = (state_11612[2]);var inst_11604__$1 = app.core.subtitle_name_from_filename.call(null,inst_11603);var inst_11605 = app.core.freebox_get_upload_id.call(null,token,inst_11600,inst_11604__$1);var state_11612__$1 = (function (){var statearr_11615 = state_11612;(statearr_11615[7] = inst_11604__$1);
return statearr_11615;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11612__$1,4,inst_11605);
} else
{if((state_val_11613 === 2))
{var inst_11600 = (state_11612[9]);var inst_11598 = (state_11612[2]);var inst_11599 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_11598);var inst_11600__$1 = new cljs.core.Keyword(null,"download_dir","download_dir",2123295688).cljs$core$IFn$_invoke$arity$1(inst_11599);var inst_11601 = app.core.find_downloaded_name.call(null,inst_11600__$1,inst_11598,token,show);var state_11612__$1 = (function (){var statearr_11616 = state_11612;(statearr_11616[9] = inst_11600__$1);
return statearr_11616;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11612__$1,3,inst_11601);
} else
{if((state_val_11613 === 1))
{var inst_11596 = app.core.freebox_get_download_details.call(null,download_id,token);var state_11612__$1 = state_11612;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11612__$1,2,inst_11596);
} else
{return null;
}
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11620 = [null,null,null,null,null,null,null,null,null,null];(statearr_11620[0] = state_machine__6136__auto__);
(statearr_11620[1] = 1);
return statearr_11620;
});
var state_machine__6136__auto____1 = (function (state_11612){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11612);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11621){if((e11621 instanceof Object))
{var ex__6139__auto__ = e11621;var statearr_11622_11624 = state_11612;(statearr_11622_11624[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11612);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11621;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11625 = state_11612;
state_11612 = G__11625;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11612){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11623 = f__6151__auto__.call(null);(statearr_11623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.addic7ed_url = (function addic7ed_url(showname,season,episode){return [cljs.core.str("http://www.addic7ed.com/serie/"),cljs.core.str(showname),cljs.core.str("/"),cljs.core.str(season),cljs.core.str("/"),cljs.core.str(episode),cljs.core.str("/addic7ed")].join('');
});
app.core.get_download_percent = (function get_download_percent(id,app__$1,token,update_chan){om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"download-id","download-id",4097684466),(function (_){return id;
}));
cljs.core.prn.call(null,"download percent");
var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11701){var state_val_11702 = (state_11701[1]);if((state_val_11702 === 1))
{var state_11701__$1 = state_11701;var statearr_11703_11722 = state_11701__$1;(statearr_11703_11722[2] = null);
(statearr_11703_11722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 2))
{var inst_11675 = app.core.freebox_get_download_details.call(null,id,token);var state_11701__$1 = state_11701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11701__$1,4,inst_11675);
} else
{if((state_val_11702 === 3))
{var inst_11699 = (state_11701[2]);var state_11701__$1 = state_11701;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11701__$1,inst_11699);
} else
{if((state_val_11702 === 4))
{var inst_11677 = (state_11701[7]);var inst_11677__$1 = (state_11701[2]);var inst_11678 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_11677__$1);var inst_11679 = new cljs.core.Keyword(null,"rx_pct","rx_pct",4391390938).cljs$core$IFn$_invoke$arity$1(inst_11678);var inst_11680 = (inst_11679 / 100);var inst_11681 = new cljs.core.Keyword(null,"success","success",3441701749).cljs$core$IFn$_invoke$arity$1(inst_11677__$1);var state_11701__$1 = (function (){var statearr_11704 = state_11701;(statearr_11704[7] = inst_11677__$1);
(statearr_11704[8] = inst_11680);
return statearr_11704;
})();if(cljs.core.truth_(inst_11681))
{var statearr_11705_11723 = state_11701__$1;(statearr_11705_11723[1] = 5);
} else
{var statearr_11706_11724 = state_11701__$1;(statearr_11706_11724[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 5))
{var inst_11683 = cljs.core.async.timeout.call(null,5000);var state_11701__$1 = state_11701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11701__$1,8,inst_11683);
} else
{if((state_val_11702 === 6))
{var inst_11677 = (state_11701[7]);var inst_11680 = (state_11701[8]);var inst_11694 = (function (){var pct = inst_11680;var res = inst_11677;return ((function (pct,res,inst_11677,inst_11680,state_val_11702){
return (function (_){return null;
});
;})(pct,res,inst_11677,inst_11680,state_val_11702))
})();var inst_11695 = om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"download-id","download-id",4097684466),inst_11694);var state_11701__$1 = state_11701;var statearr_11707_11725 = state_11701__$1;(statearr_11707_11725[2] = inst_11695);
(statearr_11707_11725[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 7))
{var inst_11697 = (state_11701[2]);var state_11701__$1 = state_11701;var statearr_11708_11726 = state_11701__$1;(statearr_11708_11726[2] = inst_11697);
(statearr_11708_11726[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 8))
{var inst_11680 = (state_11701[8]);var inst_11685 = (state_11701[2]);var inst_11686 = cljs.core.async.put_BANG_.call(null,update_chan,inst_11680);var inst_11687 = (inst_11680 < 100);var state_11701__$1 = (function (){var statearr_11709 = state_11701;(statearr_11709[9] = inst_11686);
(statearr_11709[10] = inst_11685);
return statearr_11709;
})();if(cljs.core.truth_(inst_11687))
{var statearr_11710_11727 = state_11701__$1;(statearr_11710_11727[1] = 9);
} else
{var statearr_11711_11728 = state_11701__$1;(statearr_11711_11728[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 9))
{var state_11701__$1 = state_11701;var statearr_11712_11729 = state_11701__$1;(statearr_11712_11729[2] = null);
(statearr_11712_11729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 10))
{var state_11701__$1 = state_11701;var statearr_11713_11730 = state_11701__$1;(statearr_11713_11730[2] = null);
(statearr_11713_11730[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 11))
{var inst_11692 = (state_11701[2]);var state_11701__$1 = state_11701;var statearr_11714_11731 = state_11701__$1;(statearr_11714_11731[2] = inst_11692);
(statearr_11714_11731[1] = 7);
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
var state_machine__6136__auto____0 = (function (){var statearr_11718 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11718[0] = state_machine__6136__auto__);
(statearr_11718[1] = 1);
return statearr_11718;
});
var state_machine__6136__auto____1 = (function (state_11701){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11701);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11719){if((e11719 instanceof Object))
{var ex__6139__auto__ = e11719;var statearr_11720_11732 = state_11701;(statearr_11720_11732[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11701);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11733 = state_11701;
state_11701 = G__11733;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11701){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11721 = f__6151__auto__.call(null);(statearr_11721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11721;
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
app.core.tivi_view = (function tivi_view(app__$1,owner){if(typeof app.core.t11802 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t11802 = (function (owner,app,tivi_view,meta11803){
this.owner = owner;
this.app = app;
this.tivi_view = tivi_view;
this.meta11803 = meta11803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t11802.cljs$lang$type = true;
app.core.t11802.cljs$lang$ctorStr = "app.core/t11802";
app.core.t11802.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t11802");
});
app.core.t11802.prototype.om$core$IRenderState$ = true;
app.core.t11802.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "app"},React.DOM.aside({"className": "app__sidebar"},om.core.build.call(null,app.core.topcoat_list_view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"shows","shows",1123317896).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.Keyword(null,"display","display",2685668404),(function (item,container){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"editing","editing",3420907786).cljs$core$IFn$_invoke$arity$1(state)))
{return React.DOM.form({"onSubmit": (function (e,own){var newval = om.core.get_node.call(null,container,"show-name-change").value;return e.preventDefault().call(null,om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"shows","shows",1123317896),(function (shows){return cljs.core.map.call(null,(function (p1__11734_SHARP_){if(cljs.core._EQ_.call(null,p1__11734_SHARP_,item))
{return cljs.core.assoc.call(null,p1__11734_SHARP_,new cljs.core.Keyword(null,"name","name",1017277949),newval);
} else
{return p1__11734_SHARP_;
}
}),shows);
})),om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),null),om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.Keyword(null,"name","name",1017277949)], null),newval),om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"show-name","show-name",3359181517)], null),newval));
}), "className": "add-show-input"},om.dom.input.call(null,{"ref": "show-name-change", "defaultValue": new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item), "className": "topcoat-text-input", "type": "text"}));
} else
{return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item);
}
}),new cljs.core.Keyword(null,"header","header",4087600639),"Shows",new cljs.core.Keyword(null,"listCls","listCls",1195843358),"shows",new cljs.core.Keyword(null,"click","click",1108654330),(function (p1__11735_SHARP_){return om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267)], null),p1__11735_SHARP_);
}),new cljs.core.Keyword(null,"db-click","db-click",1660355307),(function (p1__11736_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__11736_SHARP_));
})], null),self__.app)),om.core.build.call(null,app.core.add_show_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add","add",1014000659),new cljs.core.Keyword(null,"add","add",1014000659).cljs$core$IFn$_invoke$arity$1(state)], null)], null)),app.core.admin_actions.call(null,self__.app,state,self__.owner)),React.DOM.section({"className": "app__details"},app.core.display_show.call(null,new cljs.core.Keyword(null,"watches","watches",2139868463).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(self__.app))));
});
app.core.t11802.prototype.om$core$IWillMount$ = true;
app.core.t11802.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var add = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"add","add",1014000659));var main = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"main","main",1017248043));app.core.check_freebox_status.call(null,self__.app);
var c__6150__auto___11867 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11813){var state_val_11814 = (state_11813[1]);if((state_val_11814 === 4))
{var inst_11807 = (state_11813[2]);var inst_11808 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"shows","shows",1123317896),cljs.core.conj,inst_11807);var state_11813__$1 = (function (){var statearr_11815 = state_11813;(statearr_11815[7] = inst_11808);
return statearr_11815;
})();var statearr_11816_11868 = state_11813__$1;(statearr_11816_11868[2] = null);
(statearr_11816_11868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 3))
{var inst_11811 = (state_11813[2]);var state_11813__$1 = state_11813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11813__$1,inst_11811);
} else
{if((state_val_11814 === 2))
{var state_11813__$1 = state_11813;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11813__$1,4,add);
} else
{if((state_val_11814 === 1))
{var state_11813__$1 = state_11813;var statearr_11817_11869 = state_11813__$1;(statearr_11817_11869[2] = null);
(statearr_11817_11869[1] = 2);
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
var state_machine__6136__auto____0 = (function (){var statearr_11821 = [null,null,null,null,null,null,null,null];(statearr_11821[0] = state_machine__6136__auto__);
(statearr_11821[1] = 1);
return statearr_11821;
});
var state_machine__6136__auto____1 = (function (state_11813){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11813);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11822){if((e11822 instanceof Object))
{var ex__6139__auto__ = e11822;var statearr_11823_11870 = state_11813;(statearr_11823_11870[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11813);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11822;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11871 = state_11813;
state_11813 = G__11871;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11813){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11824 = f__6151__auto__.call(null);(statearr_11824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto___11867);
return statearr_11824;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
var c__6150__auto___11872 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11834){var state_val_11835 = (state_11834[1]);if((state_val_11835 === 4))
{var inst_11827 = (state_11834[2]);var inst_11828 = (function (){var current = inst_11827;return ((function (current,inst_11827,state_val_11835){
return (function (c){return current;
});
;})(current,inst_11827,state_val_11835))
})();var inst_11829 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"current","current",2140844267),inst_11828);var state_11834__$1 = (function (){var statearr_11836 = state_11834;(statearr_11836[7] = inst_11829);
return statearr_11836;
})();var statearr_11837_11873 = state_11834__$1;(statearr_11837_11873[2] = null);
(statearr_11837_11873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11835 === 3))
{var inst_11832 = (state_11834[2]);var state_11834__$1 = state_11834;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11834__$1,inst_11832);
} else
{if((state_val_11835 === 2))
{var state_11834__$1 = state_11834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11834__$1,4,main);
} else
{if((state_val_11835 === 1))
{var state_11834__$1 = state_11834;var statearr_11838_11874 = state_11834__$1;(statearr_11838_11874[2] = null);
(statearr_11838_11874[1] = 2);
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
var state_machine__6136__auto____0 = (function (){var statearr_11842 = [null,null,null,null,null,null,null,null];(statearr_11842[0] = state_machine__6136__auto__);
(statearr_11842[1] = 1);
return statearr_11842;
});
var state_machine__6136__auto____1 = (function (state_11834){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11834);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11843){if((e11843 instanceof Object))
{var ex__6139__auto__ = e11843;var statearr_11844_11875 = state_11834;(statearr_11844_11875[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11834);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11876 = state_11834;
state_11834 = G__11876;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11834){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11845 = f__6151__auto__.call(null);(statearr_11845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto___11872);
return statearr_11845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11855){var state_val_11856 = (state_11855[1]);if((state_val_11856 === 4))
{var inst_11848 = (state_11855[2]);var inst_11849 = (function (){var reset = inst_11848;return ((function (reset,inst_11848,state_val_11856){
return (function (w){return cljs.core.dissoc.call(null,w,reset);
});
;})(reset,inst_11848,state_val_11856))
})();var inst_11850 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"watches","watches",2139868463),inst_11849);var state_11855__$1 = (function (){var statearr_11857 = state_11855;(statearr_11857[7] = inst_11850);
return statearr_11857;
})();var statearr_11858_11877 = state_11855__$1;(statearr_11858_11877[2] = null);
(statearr_11858_11877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 3))
{var inst_11853 = (state_11855[2]);var state_11855__$1 = state_11855;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11855__$1,inst_11853);
} else
{if((state_val_11856 === 2))
{var state_11855__$1 = state_11855;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11855__$1,4,app.core.reset_show_chan);
} else
{if((state_val_11856 === 1))
{var state_11855__$1 = state_11855;var statearr_11859_11878 = state_11855__$1;(statearr_11859_11878[2] = null);
(statearr_11859_11878[1] = 2);
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
var state_machine__6136__auto____0 = (function (){var statearr_11863 = [null,null,null,null,null,null,null,null];(statearr_11863[0] = state_machine__6136__auto__);
(statearr_11863[1] = 1);
return statearr_11863;
});
var state_machine__6136__auto____1 = (function (state_11855){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11855);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11864){if((e11864 instanceof Object))
{var ex__6139__auto__ = e11864;var statearr_11865_11879 = state_11855;(statearr_11865_11879[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11855);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11864;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11880 = state_11855;
state_11855 = G__11880;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11855){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11866 = f__6151__auto__.call(null);(statearr_11866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11866;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.t11802.prototype.om$core$IInitState$ = true;
app.core.t11802.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",1014000659),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"main","main",1017248043),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",1017196294),new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.Keyword(null,"show","show",1017433711),"test"], null)], null);
});
app.core.t11802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11804){var self__ = this;
var _11804__$1 = this;return self__.meta11803;
});
app.core.t11802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11804,meta11803__$1){var self__ = this;
var _11804__$1 = this;return (new app.core.t11802(self__.owner,self__.app,self__.tivi_view,meta11803__$1));
});
app.core.__GT_t11802 = (function __GT_t11802(owner__$1,app__$2,tivi_view__$1,meta11803){return (new app.core.t11802(owner__$1,app__$2,tivi_view__$1,meta11803));
});
}
return (new app.core.t11802(owner,app__$1,tivi_view,null));
});
app.core.check_freebox_status = (function check_freebox_status(app__$1){if(cljs.core.truth_(new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(app__$1)))
{return app.core.freebox_session.call(null,new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(app__$1),(function (p1__11881_SHARP_){cljs.core.prn.call(null,p1__11881_SHARP_);
return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"session-token","session-token",4078795636),(function (_){return p1__11881_SHARP_;
}));
}));
} else
{return app.core.freebox_autorize.call(null,(function (p1__11882_SHARP_){return app.core.check_track.call(null,app__$1,p1__11882_SHARP_);
}));
}
});
app.core.check_track = (function check_track(app__$1,aut){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11955){var state_val_11956 = (state_11955[1]);if((state_val_11956 === 9))
{var inst_11943 = (state_11955[2]);var inst_11932 = inst_11943;var state_11955__$1 = (function (){var statearr_11957 = state_11955;(statearr_11957[7] = inst_11932);
return statearr_11957;
})();var statearr_11958_11973 = state_11955__$1;(statearr_11958_11973[2] = null);
(statearr_11958_11973[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 8))
{var inst_11939 = (state_11955[2]);var inst_11940 = new cljs.core.Keyword(null,"track_id","track_id",2284383233).cljs$core$IFn$_invoke$arity$1(aut);var inst_11941 = app.core.freebox_track_id.call(null,inst_11940);var state_11955__$1 = (function (){var statearr_11959 = state_11955;(statearr_11959[8] = inst_11939);
return statearr_11959;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11955__$1,9,inst_11941);
} else
{if((state_val_11956 === 7))
{var inst_11951 = (state_11955[2]);var state_11955__$1 = state_11955;var statearr_11960_11974 = state_11955__$1;(statearr_11960_11974[2] = inst_11951);
(statearr_11960_11974[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 6))
{var inst_11932 = (state_11955[7]);var inst_11946 = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(inst_11932);var inst_11947 = new cljs.core.Keyword(null,"app_token","app_token",2857217485).cljs$core$IFn$_invoke$arity$1(aut);var inst_11948 = new cljs.core.Keyword(null,"challenge","challenge",2416537557).cljs$core$IFn$_invoke$arity$1(inst_11932);var inst_11949 = app.core.manage_pending.call(null,inst_11946,inst_11947,inst_11948,app__$1);var state_11955__$1 = state_11955;var statearr_11961_11975 = state_11955__$1;(statearr_11961_11975[2] = inst_11949);
(statearr_11961_11975[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 5))
{var inst_11937 = cljs.core.async.timeout.call(null,3000);var state_11955__$1 = state_11955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11955__$1,8,inst_11937);
} else
{if((state_val_11956 === 4))
{var inst_11953 = (state_11955[2]);var state_11955__$1 = state_11955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11955__$1,inst_11953);
} else
{if((state_val_11956 === 3))
{var inst_11932 = (state_11955[7]);var inst_11934 = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(inst_11932);var inst_11935 = cljs.core._EQ_.call(null,"pending",inst_11934);var state_11955__$1 = state_11955;if(inst_11935)
{var statearr_11962_11976 = state_11955__$1;(statearr_11962_11976[1] = 5);
} else
{var statearr_11963_11977 = state_11955__$1;(statearr_11963_11977[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 2))
{var inst_11931 = (state_11955[2]);var inst_11932 = inst_11931;var state_11955__$1 = (function (){var statearr_11964 = state_11955;(statearr_11964[7] = inst_11932);
return statearr_11964;
})();var statearr_11965_11978 = state_11955__$1;(statearr_11965_11978[2] = null);
(statearr_11965_11978[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 1))
{var inst_11928 = new cljs.core.Keyword(null,"track_id","track_id",2284383233).cljs$core$IFn$_invoke$arity$1(aut);var inst_11929 = app.core.freebox_track_id.call(null,inst_11928);var state_11955__$1 = state_11955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11955__$1,2,inst_11929);
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
var state_machine__6136__auto____0 = (function (){var statearr_11969 = [null,null,null,null,null,null,null,null,null];(statearr_11969[0] = state_machine__6136__auto__);
(statearr_11969[1] = 1);
return statearr_11969;
});
var state_machine__6136__auto____1 = (function (state_11955){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11955);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11970){if((e11970 instanceof Object))
{var ex__6139__auto__ = e11970;var statearr_11971_11979 = state_11955;(statearr_11971_11979[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11955);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11980 = state_11955;
state_11955 = G__11980;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11955){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11972 = f__6151__auto__.call(null);(statearr_11972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.manage_pending = (function manage_pending(status,app_token,challenge,app__$1){cljs.core.prn.call(null,"manage pending");
if(cljs.core._EQ_.call(null,"granted",status))
{ajax.core.GET.call(null,"http://88.124.156.100/api/v1/login");
return app.core.freebox_session_save.call(null,app.core.freebox_make_password.call(null,challenge,app_token),(function (p1__11981_SHARP_){om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"session-token","session-token",4078795636),(function (_){return p1__11981_SHARP_;
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