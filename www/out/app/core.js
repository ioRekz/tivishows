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
app.core.get_magnet_link = (function get_magnet_link(showw,season,episode){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_10776){var state_val_10777 = (state_10776[1]);if((state_val_10777 === 2))
{var inst_10755 = (state_10776[2]);var inst_10756 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_10755);var inst_10757 = $(inst_10756);var inst_10758 = inst_10757.find(".imagnet");var inst_10759 = inst_10758.first();var inst_10760 = inst_10759.attr("href");var inst_10761 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_10755);var inst_10762 = $(inst_10761);var inst_10763 = inst_10762.find(".cellMainLink");var inst_10764 = inst_10763.first();var inst_10765 = inst_10764.text();var inst_10766 = cljs.core.prn.call(null,"loLO");var inst_10767 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_10755);var inst_10768 = cljs.core.prn.call(null,inst_10767);var inst_10769 = console.log(inst_10759);var inst_10770 = cljs.core.prn.call(null,inst_10760);var inst_10771 = cljs.core.prn.call(null,inst_10765);var inst_10772 = [new cljs.core.Keyword(null,"magnet","magnet",4227240668),new cljs.core.Keyword(null,"file-name","file-name",3946227630)];var inst_10773 = [inst_10760,inst_10765];var inst_10774 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10772,inst_10773);var state_10776__$1 = (function (){var statearr_10778 = state_10776;(statearr_10778[7] = inst_10771);
(statearr_10778[8] = inst_10766);
(statearr_10778[9] = inst_10770);
(statearr_10778[10] = inst_10768);
(statearr_10778[11] = inst_10769);
return statearr_10778;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10776__$1,inst_10774);
} else
{if((state_val_10777 === 1))
{var inst_10746 = app.core.format_number_zero.call(null,season);var inst_10747 = app.core.format_number_zero.call(null,episode);var inst_10748 = encodeURIComponent(showw);var inst_10749 = [cljs.core.str("https://kickass.so/usearch/"),cljs.core.str(inst_10748),cljs.core.str(" s"),cljs.core.str(inst_10746),cljs.core.str("e"),cljs.core.str(episode)].join('');var inst_10750 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",3165820380)];var inst_10751 = [false];var inst_10752 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10750,inst_10751);var inst_10753 = cljs_http.client.get.call(null,inst_10749,inst_10752);var state_10776__$1 = (function (){var statearr_10779 = state_10776;(statearr_10779[12] = inst_10747);
return statearr_10779;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10776__$1,2,inst_10753);
} else
{return null;
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_10783 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10783[0] = state_machine__6136__auto__);
(statearr_10783[1] = 1);
return statearr_10783;
});
var state_machine__6136__auto____1 = (function (state_10776){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_10776);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e10784){if((e10784 instanceof Object))
{var ex__6139__auto__ = e10784;var statearr_10785_10787 = state_10776;(statearr_10785_10787[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10776);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10784;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10788 = state_10776;
state_10776 = G__10788;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_10776){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_10776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_10786 = f__6151__auto__.call(null);(statearr_10786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_10786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.get_subtitle_link = (function get_subtitle_link(show,season,episode){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_10855){var state_val_10856 = (state_10855[1]);if((state_val_10856 === 8))
{var inst_10853 = (state_10855[2]);var state_10855__$1 = state_10855;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10855__$1,inst_10853);
} else
{if((state_val_10856 === 7))
{var state_10855__$1 = state_10855;var statearr_10857_10873 = state_10855__$1;(statearr_10857_10873[2] = null);
(statearr_10857_10873[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10856 === 6))
{var inst_10843 = (state_10855[7]);var inst_10850 = [cljs.core.str("http://www.addic7ed.com"),cljs.core.str(inst_10843)].join('');var state_10855__$1 = state_10855;var statearr_10858_10874 = state_10855__$1;(statearr_10858_10874[2] = inst_10850);
(statearr_10858_10874[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10856 === 5))
{var inst_10848 = (state_10855[2]);var state_10855__$1 = state_10855;if(cljs.core.truth_(inst_10848))
{var statearr_10859_10875 = state_10855__$1;(statearr_10859_10875[1] = 6);
} else
{var statearr_10860_10876 = state_10855__$1;(statearr_10860_10876[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10856 === 4))
{var inst_10843 = (state_10855[7]);var state_10855__$1 = state_10855;var statearr_10861_10877 = state_10855__$1;(statearr_10861_10877[2] = inst_10843);
(statearr_10861_10877[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10856 === 3))
{var inst_10842 = (state_10855[8]);var inst_10845 = cljs.core._EQ_.call(null,inst_10842,"Completed");var state_10855__$1 = state_10855;var statearr_10862_10878 = state_10855__$1;(statearr_10862_10878[2] = inst_10845);
(statearr_10862_10878[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10856 === 2))
{var inst_10843 = (state_10855[7]);var inst_10834 = (state_10855[2]);var inst_10835 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_10834);var inst_10836 = $(inst_10835);var inst_10837 = inst_10836.find(".buttonDownload");var inst_10838 = inst_10837.first();var inst_10839 = inst_10838.parent();var inst_10840 = inst_10839.prev();var inst_10841 = inst_10840.text();var inst_10842 = inst_10841.trim();var inst_10843__$1 = inst_10837.attr("href");var state_10855__$1 = (function (){var statearr_10863 = state_10855;(statearr_10863[8] = inst_10842);
(statearr_10863[7] = inst_10843__$1);
return statearr_10863;
})();if(cljs.core.truth_(inst_10843__$1))
{var statearr_10864_10879 = state_10855__$1;(statearr_10864_10879[1] = 3);
} else
{var statearr_10865_10880 = state_10855__$1;(statearr_10865_10880[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10856 === 1))
{var inst_10831 = [cljs.core.str("http://www.addic7ed.com/serie/"),cljs.core.str(show),cljs.core.str("/"),cljs.core.str(season),cljs.core.str("/"),cljs.core.str(episode),cljs.core.str("/8")].join('');var inst_10832 = cljs_http.client.get.call(null,inst_10831);var state_10855__$1 = state_10855;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10855__$1,2,inst_10832);
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
var state_machine__6136__auto____0 = (function (){var statearr_10869 = [null,null,null,null,null,null,null,null,null];(statearr_10869[0] = state_machine__6136__auto__);
(statearr_10869[1] = 1);
return statearr_10869;
});
var state_machine__6136__auto____1 = (function (state_10855){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_10855);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e10870){if((e10870 instanceof Object))
{var ex__6139__auto__ = e10870;var statearr_10871_10881 = state_10855;(statearr_10871_10881[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10855);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10870;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10882 = state_10855;
state_10855 = G__10882;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_10855){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_10855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_10872 = f__6151__auto__.call(null);(statearr_10872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_10872;
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
app.core.moviedb_get_image_url = (function moviedb_get_image_url(show_name){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,app.core.moviedb_search.call(null,show_name),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10883_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,app.core.moviedb_image_url.call(null,new cljs.core.Keyword(null,"backdrop_path","backdrop_path",4386024928).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(p1__10883_SHARP_)))));
})], null));
return ch;
});
app.core.app_id = "iorek.tivishows4";
app.core.dir_base = "/Disque dur/Videos/";
app.core.freebox_get = (function freebox_get(url,token){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,[cljs.core.str("http://88.124.156.100/api/v1/"),cljs.core.str(url)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10884_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10884_SHARP_));
})], null));
return ch;
});
app.core.freebox_autorize = (function freebox_autorize(do_with_token){return ajax.core.POST.call(null,"http://88.124.156.100/api/v1/login/authorize/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"app_id","app_id",3897797483),app.core.app_id,new cljs.core.Keyword(null,"app_name","app_name",2181552475),"tivishows",new cljs.core.Keyword(null,"app_version","app_version",4407001132),"1",new cljs.core.Keyword(null,"device_name","device_name",3765800518),"Nexus Pad"], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10885_SHARP_){return do_with_token.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10885_SHARP_));
})], null));
});
app.core.freebox_session = (function freebox_session(app_token,do_with_session){return ajax.core.GET.call(null,"http://88.124.156.100/api/v1/login/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10886_SHARP_){var challenge = new cljs.core.Keyword(null,"challenge","challenge",2416537557).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10886_SHARP_));return app.core.freebox_session_save.call(null,app.core.freebox_make_password.call(null,challenge,app_token),do_with_session);
})], null));
});
app.core.freebox_session_save = (function freebox_session_save(pass,do_with_session){return ajax.core.POST.call(null,"http://88.124.156.100/api/v1/login/session/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app_id","app_id",3897797483),app.core.app_id,new cljs.core.Keyword(null,"password","password",2230889997),pass], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10887_SHARP_){return do_with_session.call(null,new cljs.core.Keyword(null,"session_token","session_token",1215285890).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10887_SHARP_)));
})], null));
});
app.core.freebox_track_id = (function freebox_track_id(id){var ch = cljs.core.async.chan.call(null);ajax.core.GET.call(null,[cljs.core.str("http://88.124.156.100/api/v1/login/authorize/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10888_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10888_SHARP_));
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
var freebox_call__delegate = function (method,uri,p__10891){var map__10893 = p__10891;var map__10893__$1 = ((cljs.core.seq_QMARK_.call(null,map__10893))?cljs.core.apply.call(null,cljs.core.hash_map,map__10893):map__10893);var channel = cljs.core.get.call(null,map__10893__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var proj = cljs.core.get.call(null,map__10893__$1,new cljs.core.Keyword(null,"proj","proj",1017353935));var opts = cljs.core.get.call(null,map__10893__$1,new cljs.core.Keyword(null,"opts","opts",1017322386));var ch = (function (){var or__3401__auto__ = channel;if(cljs.core.truth_(or__3401__auto__))
{return or__3401__auto__;
} else
{return cljs.core.async.chan.call(null);
}
})();var default_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.app_state))], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (ch){
return (function (p1__10889_SHARP_){cljs.core.prn.call(null,"handler");
return cljs.core.async.put_BANG_.call(null,ch,cljs.core.get_in.call(null,p1__10889_SHARP_,proj));
});})(ch))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (ch){
return (function (res){if(cljs.core._EQ_.call(null,"auth_required",new cljs.core.Keyword(null,"error_code","error_code",2649591094).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"response","response",673580979).cljs$core$IFn$_invoke$arity$1(res))))
{return app.core.freebox_session.call(null,new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.app_state)),((function (ch){
return (function (p1__10890_SHARP_){cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"session-token","session-token",4078795636),p1__10890_SHARP_);
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
var p__10891 = null;if (arguments.length > 2) {
  p__10891 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return freebox_call__delegate.call(this,method,uri,p__10891);};
freebox_call.cljs$lang$maxFixedArity = 2;
freebox_call.cljs$lang$applyTo = (function (arglist__10894){
var method = cljs.core.first(arglist__10894);
arglist__10894 = cljs.core.next(arglist__10894);
var uri = cljs.core.first(arglist__10894);
var p__10891 = cljs.core.rest(arglist__10894);
return freebox_call__delegate(method,uri,p__10891);
});
freebox_call.cljs$core$IFn$_invoke$arity$variadic = freebox_call__delegate;
return freebox_call;
})()
;
app.core.freebox_get_download_percent = (function freebox_get_download_percent(id,session_token,do_with_percent){return app.core.freebox_get_download.call(null,id,session_token,(function (p1__10895_SHARP_){return do_with_percent.call(null,(new cljs.core.Keyword(null,"rx_pct","rx_pct",4391390938).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10895_SHARP_)) / 100));
}));
});
app.core.freebox_get_download_details = (function freebox_get_download_details(id,session_token){return app.core.freebox_call.call(null,ajax.core.GET,[cljs.core.str("/downloads/"),cljs.core.str(id)].join(''));
});
app.core.freebox_get_download = (function freebox_get_download(id,session_token,handler){return ajax.core.GET.call(null,[cljs.core.str("http://88.124.156.100/api/v1/downloads/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),session_token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),handler], null));
});
app.core.freebox_get_upload_id = (function freebox_get_upload_id(session_token,dirname,upname){var ch = cljs.core.async.chan.call(null);ajax.core.POST.call(null,[cljs.core.str("http://88.124.156.100/api/v1/upload/")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dirname","dirname",2684675082),dirname,new cljs.core.Keyword(null,"upload_name","upload_name",2078716283),[cljs.core.str(upname),cljs.core.str(".srt")].join('')], null),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.json_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-Fbx-App-Auth","X-Fbx-App-Auth",3236372588),session_token], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (p1__10896_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(p1__10896_SHARP_)));
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
app.core.topcoat_list_view = (function topcoat_list_view(app__$1,owner){if(typeof app.core.t10900 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t10900 = (function (owner,app,topcoat_list_view,meta10901){
this.owner = owner;
this.app = app;
this.topcoat_list_view = topcoat_list_view;
this.meta10901 = meta10901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t10900.cljs$lang$type = true;
app.core.t10900.cljs$lang$ctorStr = "app.core/t10900";
app.core.t10900.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t10900");
});
app.core.t10900.prototype.om$core$IRenderState$ = true;
app.core.t10900.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div({"className": [cljs.core.str("topcoat-list__container"),cljs.core.str(new cljs.core.Keyword(null,"listCls","listCls",1195843358).cljs$core$IFn$_invoke$arity$1(app.core.data))].join('')},(cljs.core.truth_(new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(self__.app))?React.DOM.h3({"className": "topcoat-list__header"},new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(self__.app)):null),cljs.core.apply.call(null,om.dom.ul,{"className": "topcoat-list list "},cljs.core.map.call(null,(function (item){return React.DOM.li({"onDoubleClick": (function (){return new cljs.core.Keyword(null,"db-click","db-click",1660355307).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,item);
}), "onClick": (function (){return new cljs.core.Keyword(null,"click","click",1108654330).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,item);
}), "className": "topcoat-list__item"},new cljs.core.Keyword(null,"display","display",2685668404).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,item,self__.owner));
}),new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(self__.app))),(cljs.core.truth_(new cljs.core.Keyword(null,"extra","extra",1110869890).cljs$core$IFn$_invoke$arity$1(self__.app))?new cljs.core.Keyword(null,"extra","extra",1110869890).cljs$core$IFn$_invoke$arity$1(self__.app):null));
});
app.core.t10900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10902){var self__ = this;
var _10902__$1 = this;return self__.meta10901;
});
app.core.t10900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10902,meta10901__$1){var self__ = this;
var _10902__$1 = this;return (new app.core.t10900(self__.owner,self__.app,self__.topcoat_list_view,meta10901__$1));
});
app.core.__GT_t10900 = (function __GT_t10900(owner__$1,app__$2,topcoat_list_view__$1,meta10901){return (new app.core.t10900(owner__$1,app__$2,topcoat_list_view__$1,meta10901));
});
}
return (new app.core.t10900(owner,app__$1,topcoat_list_view,null));
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
app.core.add_show_view = (function add_show_view(app__$1,owner){if(typeof app.core.t10908 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t10908 = (function (owner,app,add_show_view,meta10909){
this.owner = owner;
this.app = app;
this.add_show_view = add_show_view;
this.meta10909 = meta10909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t10908.cljs$lang$type = true;
app.core.t10908.cljs$lang$ctorStr = "app.core/t10908";
app.core.t10908.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t10908");
});
app.core.t10908.prototype.om$core$IRenderState$ = true;
app.core.t10908.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,st){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "topcoat-list"},React.DOM.h3({"className": "topcoat-list__header"},"Add Show"),React.DOM.form({"onSubmit": (function (p1__10903_SHARP_){return app.core.findShows.call(null,p1__10903_SHARP_,self__.owner,om.core.get_node.call(null,self__.owner,"show-name").value);
}), "className": "add-show-input"},om.dom.input.call(null,{"ref": "show-name", "placeholder": "show name", "className": "topcoat-text-input", "type": "text"})),cljs.core.apply.call(null,om.dom.ul,{"className": "topcoat-list__container"},cljs.core.map.call(null,(function (show){return React.DOM.li({"onClick": (function (p1__10904_SHARP_){return app.core.save_show.call(null,p1__10904_SHARP_,show,self__.app,self__.owner);
}), "className": "topcoat-list__item"},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(show));
}),new cljs.core.Keyword(null,"shows","shows",1123317896).cljs$core$IFn$_invoke$arity$1(st))));
});
app.core.t10908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10910){var self__ = this;
var _10910__$1 = this;return self__.meta10909;
});
app.core.t10908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10910,meta10909__$1){var self__ = this;
var _10910__$1 = this;return (new app.core.t10908(self__.owner,self__.app,self__.add_show_view,meta10909__$1));
});
app.core.__GT_t10908 = (function __GT_t10908(owner__$1,app__$2,add_show_view__$1,meta10909){return (new app.core.t10908(owner__$1,app__$2,add_show_view__$1,meta10909));
});
}
return (new app.core.t10908(owner,app__$1,add_show_view,null));
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
app.core.show_select_last_view = (function show_select_last_view(app__$1,owner){if(typeof app.core.t10941 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t10941 = (function (owner,app,show_select_last_view,meta10942){
this.owner = owner;
this.app = app;
this.show_select_last_view = show_select_last_view;
this.meta10942 = meta10942;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t10941.cljs$lang$type = true;
app.core.t10941.cljs$lang$ctorStr = "app.core/t10941";
app.core.t10941.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t10941");
});
app.core.t10941.prototype.om$core$IRenderState$ = true;
app.core.t10941.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return om.core.build.call(null,app.core.topcoat_list_view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.reverse.call(null,cljs.core.map_indexed.call(null,(function (idx,seas){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1014008367),idx,new cljs.core.Keyword(null,"episodes","episodes",4675925322),seas], null);
}),new cljs.core.Keyword(null,"seasons","seasons",2982274402).cljs$core$IFn$_invoke$arity$1(state))),new cljs.core.Keyword(null,"header","header",4087600639),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.str(" - Click the next episode you want to see !")].join(''),new cljs.core.Keyword(null,"display","display",2685668404),(function (p1__10912_SHARP_){return app.core.show_season_episodes.call(null,self__.app,new cljs.core.Keyword(null,"episodes","episodes",4675925322).cljs$core$IFn$_invoke$arity$1(p1__10912_SHARP_),new cljs.core.Keyword(null,"idx","idx",1014008367).cljs$core$IFn$_invoke$arity$1(p1__10912_SHARP_),new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"mark-chan","mark-chan",4322875844).cljs$core$IFn$_invoke$arity$1(state));
})], null),self__.app));
});
app.core.t10941.prototype.om$core$IWillMount$ = true;
app.core.t10941.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mark_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mark-chan","mark-chan",4322875844));app.core.parse_episode_list.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(self__.app))),(function (p1__10911_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"seasons","seasons",2982274402),p1__10911_SHARP_);
}));
var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_10957){var state_val_10958 = (state_10957[1]);if((state_val_10958 === 4))
{var inst_10946 = (state_10957[2]);var inst_10947 = new cljs.core.Keyword(null,"show","show",1017433711).cljs$core$IFn$_invoke$arity$1(inst_10946);var inst_10948 = (function (){var marked = inst_10946;return ((function (marked,inst_10946,inst_10947,state_val_10958){
return (function (idx,it){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1014008367),idx,new cljs.core.Keyword(null,"episodes","episodes",4675925322),it], null);
});
;})(marked,inst_10946,inst_10947,state_val_10958))
})();var inst_10949 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"seasons","seasons",2982274402));var inst_10950 = cljs.core.map_indexed.call(null,inst_10948,inst_10949);var inst_10951 = new cljs.core.Keyword(null,"episode","episode",3764433261).cljs$core$IFn$_invoke$arity$1(inst_10946);var inst_10952 = app.core.mark_watched.call(null,inst_10947,inst_10950,inst_10951,self__.app);var state_10957__$1 = (function (){var statearr_10959 = state_10957;(statearr_10959[7] = inst_10952);
return statearr_10959;
})();var statearr_10960_10969 = state_10957__$1;(statearr_10960_10969[2] = null);
(statearr_10960_10969[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 3))
{var inst_10955 = (state_10957[2]);var state_10957__$1 = state_10957;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10957__$1,inst_10955);
} else
{if((state_val_10958 === 2))
{var state_10957__$1 = state_10957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10957__$1,4,mark_chan);
} else
{if((state_val_10958 === 1))
{var state_10957__$1 = state_10957;var statearr_10961_10970 = state_10957__$1;(statearr_10961_10970[2] = null);
(statearr_10961_10970[1] = 2);
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
var state_machine__6136__auto____0 = (function (){var statearr_10965 = [null,null,null,null,null,null,null,null];(statearr_10965[0] = state_machine__6136__auto__);
(statearr_10965[1] = 1);
return statearr_10965;
});
var state_machine__6136__auto____1 = (function (state_10957){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_10957);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e10966){if((e10966 instanceof Object))
{var ex__6139__auto__ = e10966;var statearr_10967_10971 = state_10957;(statearr_10967_10971[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10957);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10966;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10972 = state_10957;
state_10957 = G__10972;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_10957){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_10957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_10968 = f__6151__auto__.call(null);(statearr_10968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_10968;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.t10941.prototype.om$core$IInitState$ = true;
app.core.t10941.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seasons","seasons",2982274402),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"mark-chan","mark-chan",4322875844),cljs.core.async.chan.call(null)], null);
});
app.core.t10941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10943){var self__ = this;
var _10943__$1 = this;return self__.meta10942;
});
app.core.t10941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10943,meta10942__$1){var self__ = this;
var _10943__$1 = this;return (new app.core.t10941(self__.owner,self__.app,self__.show_select_last_view,meta10942__$1));
});
app.core.__GT_t10941 = (function __GT_t10941(owner__$1,app__$2,show_select_last_view__$1,meta10942){return (new app.core.t10941(owner__$1,app__$2,show_select_last_view__$1,meta10942));
});
}
return (new app.core.t10941(owner,app__$1,show_select_last_view,null));
});
app.core.show_season_episodes = (function show_season_episodes(app__$1,season,num,show,mark_chan){return om.core.build.call(null,app.core.topcoat_list_view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",4087600639),[cljs.core.str("Season "),cljs.core.str((num + 1))].join(''),new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,season,"episode")], null)),new cljs.core.Keyword(null,"display","display",2685668404),(function (p1__10973_SHARP_){return React.DOM.span(null,[cljs.core.str("Episode "),cljs.core.str(cljs.core.get.call(null,p1__10973_SHARP_,"seasonnum")),cljs.core.str(" - "),cljs.core.str(cljs.core.get.call(null,p1__10973_SHARP_,"title"))].join(''),React.DOM.em({"className": "download"},app.core.get_air_delay.call(null,cljs.core.get.call(null,p1__10973_SHARP_,"airdate"))));
}),new cljs.core.Keyword(null,"click","click",1108654330),(function (p1__10974_SHARP_){return cljs.core.async.put_BANG_.call(null,mark_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"season","season",4402536021),(num + 1),new cljs.core.Keyword(null,"episode","episode",3764433261),cljs.reader.read_string.call(null,cljs.core.get.call(null,p1__10974_SHARP_,"epnum")),new cljs.core.Keyword(null,"show","show",1017433711),show], null));
})], null),app__$1));
});
app.core.get_air_delay = (function get_air_delay(string_date){return (new moment(string_date)).fromNow();
});
app.core.get_watch_list = (function get_watch_list(seasons,episode){return cljs.core.reduce.call(null,(function (acc,curr){return cljs.core.concat.call(null,acc,cljs.core.remove.call(null,(function (p1__10975_SHARP_){return (new cljs.core.Keyword(null,"episode","episode",3764433261).cljs$core$IFn$_invoke$arity$1(p1__10975_SHARP_) < episode);
}),cljs.core.map.call(null,(function (p1__10976_SHARP_){return app.core.parse_episode.call(null,p1__10976_SHARP_,new cljs.core.Keyword(null,"idx","idx",1014008367).cljs$core$IFn$_invoke$arity$1(curr));
}),cljs.core.get.call(null,new cljs.core.Keyword(null,"episodes","episodes",4675925322).cljs$core$IFn$_invoke$arity$1(curr),"episode"))));
}),cljs.core.PersistentVector.EMPTY,seasons);
});
app.core.mark_watched = (function mark_watched(show,seasons,episode,app__$1){var eps = app.core.get_watch_list.call(null,seasons,episode);window.scrollTo(0,0);
return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,show)),(function (_){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-name","show-name",3359181517),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,show)),new cljs.core.Keyword(null,"show-id","show-id",3081146717),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,show)),new cljs.core.Keyword(null,"episodes","episodes",4675925322),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,eps)], null);
}));
});
app.core.parse_episode = (function parse_episode(ep,seas){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"episode","episode",3764433261),cljs.core.get.call(null,ep,"epnum"),new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025),cljs.core.get.call(null,ep,"seasonnum"),new cljs.core.Keyword(null,"season","season",4402536021),(seas + 1),new cljs.core.Keyword(null,"title","title",1124275658),cljs.core.get.call(null,ep,"title"),new cljs.core.Keyword(null,"air-date","air-date",4569745859),cljs.core.get.call(null,ep,"airdate")], null);
});
app.core.show_watch_list_view = (function show_watch_list_view(app__$1,owner){if(typeof app.core.t11010 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t11010 = (function (owner,app,show_watch_list_view,meta11011){
this.owner = owner;
this.app = app;
this.show_watch_list_view = show_watch_list_view;
this.meta11011 = meta11011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t11010.cljs$lang$type = true;
app.core.t11010.cljs$lang$ctorStr = "app.core/t11010";
app.core.t11010.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t11010");
});
app.core.t11010.prototype.om$core$IRenderState$ = true;
app.core.t11010.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": [cljs.core.str("topcoat-list")].join('')},React.DOM.h3({"className": "topcoat-list__header"},React.DOM.img({"className": "picture", "height": "30%", "src": new cljs.core.Keyword(null,"image","image",1114217677).cljs$core$IFn$_invoke$arity$1(self__.app)})),cljs.core.apply.call(null,om.dom.ul,{"className": "topcoat-list__container"},om.core.build_all.call(null,app.core.episode_view,new cljs.core.Keyword(null,"episodes","episodes",4675925322).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-name","show-name",3359181517),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"token","token",1124445547),new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-name","show-name",3359181517),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)))),React.DOM.button({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,app.core.reset_show_chan,new cljs.core.Keyword(null,"show-id","show-id",3081146717).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)));
}), "className": "topcoat-button reset-show"},"Reset shows"),React.DOM.form({"onSubmit": (function (e,own){var newval = om.core.get_node.call(null,self__.owner,"show-name-change").value;return e.preventDefault().call(null,cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shows","shows",1123317896)], null),(function (shows){return cljs.core.map.call(null,(function (p1__10977_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__10977_SHARP_),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app))))
{return cljs.core.assoc.call(null,p1__10977_SHARP_,new cljs.core.Keyword(null,"name","name",1017277949),newval);
} else
{return p1__10977_SHARP_;
}
}),shows);
})),cljs.core.prn.call(null,cljs.core.deref.call(null,self__.app)),cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.Keyword(null,"name","name",1017277949)], null),newval));
}), "className": "add-show-input"},om.dom.input.call(null,{"onChange": (function (event){var newval = event.target.value;return cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shows","shows",1123317896)], null),(function (shows){return cljs.core.map.call(null,(function (p1__10978_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__10978_SHARP_),new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app))))
{return cljs.core.assoc.call(null,p1__10978_SHARP_,new cljs.core.Keyword(null,"name","name",1017277949),newval);
} else
{return p1__10978_SHARP_;
}
}),shows);
})).call(null,cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.Keyword(null,"name","name",1017277949)], null),newval),om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-name","show-name",3359181517)], null),newval));
}), "ref": "show-name-change", "value": new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(self__.app), "className": "topcoat-text-input", "type": "text"})));
});
app.core.t11010.prototype.om$core$IWillMount$ = true;
app.core.t11010.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11028){var state_val_11029 = (state_11028[1]);if((state_val_11029 === 5))
{var inst_11021 = (state_11028[2]);var inst_11022 = (function (){var img = inst_11021;return ((function (img,inst_11021,state_val_11029){
return (function (___$2){return img;
});
;})(img,inst_11021,state_val_11029))
})();var inst_11023 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"image","image",1114217677),inst_11022);var state_11028__$1 = state_11028;var statearr_11030_11041 = state_11028__$1;(statearr_11030_11041[2] = inst_11023);
(statearr_11030_11041[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11029 === 4))
{var inst_11026 = (state_11028[2]);var state_11028__$1 = state_11028;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11028__$1,inst_11026);
} else
{if((state_val_11029 === 3))
{var state_11028__$1 = state_11028;var statearr_11031_11042 = state_11028__$1;(statearr_11031_11042[2] = null);
(statearr_11031_11042[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11029 === 2))
{var inst_11017 = cljs.core.deref.call(null,self__.app);var inst_11018 = new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(inst_11017);var inst_11019 = app.core.moviedb_get_image_url.call(null,inst_11018);var state_11028__$1 = state_11028;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11028__$1,5,inst_11019);
} else
{if((state_val_11029 === 1))
{var inst_11013 = cljs.core.deref.call(null,self__.app);var inst_11014 = new cljs.core.Keyword(null,"image","image",1114217677).cljs$core$IFn$_invoke$arity$1(inst_11013);var inst_11015 = cljs.core.not.call(null,inst_11014);var state_11028__$1 = state_11028;if(inst_11015)
{var statearr_11032_11043 = state_11028__$1;(statearr_11032_11043[1] = 2);
} else
{var statearr_11033_11044 = state_11028__$1;(statearr_11033_11044[1] = 3);
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
var state_machine__6136__auto____0 = (function (){var statearr_11037 = [null,null,null,null,null,null,null];(statearr_11037[0] = state_machine__6136__auto__);
(statearr_11037[1] = 1);
return statearr_11037;
});
var state_machine__6136__auto____1 = (function (state_11028){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11028);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11038){if((e11038 instanceof Object))
{var ex__6139__auto__ = e11038;var statearr_11039_11045 = state_11028;(statearr_11039_11045[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11028);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11046 = state_11028;
state_11028 = G__11046;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11028){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11040 = f__6151__auto__.call(null);(statearr_11040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.t11010.prototype.om$core$IDidMount$ = true;
app.core.t11010.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.prn.call(null,self__.app);
});
app.core.t11010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11012){var self__ = this;
var _11012__$1 = this;return self__.meta11011;
});
app.core.t11010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11012,meta11011__$1){var self__ = this;
var _11012__$1 = this;return (new app.core.t11010(self__.owner,self__.app,self__.show_watch_list_view,meta11011__$1));
});
app.core.__GT_t11010 = (function __GT_t11010(owner__$1,app__$2,show_watch_list_view__$1,meta11011){return (new app.core.t11010(owner__$1,app__$2,show_watch_list_view__$1,meta11011));
});
}
return (new app.core.t11010(owner,app__$1,show_watch_list_view,null));
});
cljs.core.prn.call(null,cljs.core.deref.call(null,app.core.app_state));
app.core.episode_view = (function episode_view(app__$1,owner,opts){if(typeof app.core.t11146 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t11146 = (function (opts,owner,app,episode_view,meta11147){
this.opts = opts;
this.owner = owner;
this.app = app;
this.episode_view = episode_view;
this.meta11147 = meta11147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t11146.cljs$lang$type = true;
app.core.t11146.cljs$lang$ctorStr = "app.core/t11146";
app.core.t11146.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t11146");
});
app.core.t11146.prototype.om$core$IRenderState$ = true;
app.core.t11146.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
app.core.t11146.prototype.om$core$IWillMount$ = true;
app.core.t11146.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var update_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"update-chan","update-chan",4688741704));var map__11149 = self__.app;var map__11149__$1 = ((cljs.core.seq_QMARK_.call(null,map__11149))?cljs.core.apply.call(null,cljs.core.hash_map,map__11149):map__11149);var epnumrelative = cljs.core.get.call(null,map__11149__$1,new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025));var season = cljs.core.get.call(null,map__11149__$1,new cljs.core.Keyword(null,"season","season",4402536021));var st = om.core.get_state.call(null,self__.owner);var show_name = new cljs.core.Keyword(null,"show-name","show-name",3359181517).cljs$core$IFn$_invoke$arity$1(st);if(cljs.core.truth_((function (){var and__3389__auto__ = new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core.truth_(and__3389__auto__))
{return (new cljs.core.Keyword(null,"percent","percent",4629944247).cljs$core$IFn$_invoke$arity$1(self__.app) < 100);
} else
{return and__3389__auto__;
}
})()))
{app.core.get_download_percent.call(null,new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(self__.app),self__.app,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"token","token",1124445547)),update_chan);
} else
{}
var c__6150__auto___11245 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11186){var state_val_11187 = (state_11186[1]);if((state_val_11187 === 1))
{var state_11186__$1 = state_11186;var statearr_11188_11246 = state_11186__$1;(statearr_11188_11246[2] = null);
(statearr_11188_11246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 2))
{var state_11186__$1 = state_11186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11186__$1,4,update_chan);
} else
{if((state_val_11187 === 3))
{var inst_11184 = (state_11186[2]);var state_11186__$1 = state_11186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11186__$1,inst_11184);
} else
{if((state_val_11187 === 4))
{var inst_11154 = (state_11186[7]);var inst_11152 = (state_11186[8]);var inst_11159 = (state_11186[9]);var inst_11152__$1 = (state_11186[2]);var inst_11153 = cljs.core.deref.call(null,self__.app);var inst_11154__$1 = new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(inst_11153);var inst_11155 = (function (){var sub_link = inst_11154__$1;var percent = inst_11152__$1;return ((function (sub_link,percent,inst_11154,inst_11152,inst_11159,inst_11152__$1,inst_11153,inst_11154__$1,state_val_11187){
return (function (___$2){return (percent | 0);
});
;})(sub_link,percent,inst_11154,inst_11152,inst_11159,inst_11152__$1,inst_11153,inst_11154__$1,state_val_11187))
})();var inst_11156 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"percent","percent",4629944247),inst_11155);var inst_11157 = cljs.core.deref.call(null,self__.app);var inst_11158 = cljs.core.contains_QMARK_.call(null,inst_11157,new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675));var inst_11159__$1 = !(inst_11158);var state_11186__$1 = (function (){var statearr_11189 = state_11186;(statearr_11189[7] = inst_11154__$1);
(statearr_11189[8] = inst_11152__$1);
(statearr_11189[9] = inst_11159__$1);
(statearr_11189[10] = inst_11156);
return statearr_11189;
})();if(inst_11159__$1)
{var statearr_11190_11247 = state_11186__$1;(statearr_11190_11247[1] = 5);
} else
{var statearr_11191_11248 = state_11186__$1;(statearr_11191_11248[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 5))
{var inst_11154 = (state_11186[7]);var state_11186__$1 = state_11186;if(cljs.core.truth_(inst_11154))
{var statearr_11192_11249 = state_11186__$1;(statearr_11192_11249[1] = 8);
} else
{var statearr_11193_11250 = state_11186__$1;(statearr_11193_11250[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 6))
{var inst_11159 = (state_11186[9]);var state_11186__$1 = state_11186;var statearr_11194_11251 = state_11186__$1;(statearr_11194_11251[2] = inst_11159);
(statearr_11194_11251[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 7))
{var inst_11169 = (state_11186[2]);var state_11186__$1 = state_11186;if(cljs.core.truth_(inst_11169))
{var statearr_11195_11252 = state_11186__$1;(statearr_11195_11252[1] = 11);
} else
{var statearr_11196_11253 = state_11186__$1;(statearr_11196_11253[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 8))
{var inst_11152 = (state_11186[8]);var inst_11162 = (inst_11152 | 0);var inst_11163 = (inst_11162 > 0);var state_11186__$1 = state_11186;var statearr_11197_11254 = state_11186__$1;(statearr_11197_11254[2] = inst_11163);
(statearr_11197_11254[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 9))
{var inst_11154 = (state_11186[7]);var state_11186__$1 = state_11186;var statearr_11198_11255 = state_11186__$1;(statearr_11198_11255[2] = inst_11154);
(statearr_11198_11255[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 10))
{var inst_11166 = (state_11186[2]);var state_11186__$1 = state_11186;var statearr_11199_11256 = state_11186__$1;(statearr_11199_11256[2] = inst_11166);
(statearr_11199_11256[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 11))
{var inst_11154 = (state_11186[7]);var inst_11171 = cljs.core.deref.call(null,app.core.app_state);var inst_11172 = new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(inst_11171);var inst_11173 = cljs.core.deref.call(null,self__.app);var inst_11174 = new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(inst_11173);var inst_11175 = app.core.downloadSubs.call(null,inst_11154,inst_11172,inst_11174,show_name,season,epnumrelative);var inst_11176 = [new cljs.core.Keyword(null,"subs-downloaded","subs-downloaded",1024514675)];var inst_11177 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11176,null));var inst_11178 = om.core.update_BANG_.call(null,self__.app,inst_11177,true);var state_11186__$1 = (function (){var statearr_11200 = state_11186;(statearr_11200[11] = inst_11175);
return statearr_11200;
})();var statearr_11201_11257 = state_11186__$1;(statearr_11201_11257[2] = inst_11178);
(statearr_11201_11257[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 12))
{var state_11186__$1 = state_11186;var statearr_11202_11258 = state_11186__$1;(statearr_11202_11258[2] = null);
(statearr_11202_11258[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 13))
{var inst_11181 = (state_11186[2]);var state_11186__$1 = (function (){var statearr_11203 = state_11186;(statearr_11203[12] = inst_11181);
return statearr_11203;
})();var statearr_11204_11259 = state_11186__$1;(statearr_11204_11259[2] = null);
(statearr_11204_11259[1] = 2);
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
var state_machine__6136__auto____0 = (function (){var statearr_11208 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11208[0] = state_machine__6136__auto__);
(statearr_11208[1] = 1);
return statearr_11208;
});
var state_machine__6136__auto____1 = (function (state_11186){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11186);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11209){if((e11209 instanceof Object))
{var ex__6139__auto__ = e11209;var statearr_11210_11260 = state_11186;(statearr_11210_11260[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11186);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11209;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11261 = state_11186;
state_11186 = G__11261;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11186){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11211 = f__6151__auto__.call(null);(statearr_11211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto___11245);
return statearr_11211;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11231){var state_val_11232 = (state_11231[1]);if((state_val_11232 === 5))
{var inst_11222 = (state_11231[7]);var inst_11225 = (state_11231[2]);var inst_11226 = om.core.update_BANG_.call(null,self__.app,inst_11222,inst_11225);var state_11231__$1 = state_11231;var statearr_11233_11262 = state_11231__$1;(statearr_11233_11262[2] = inst_11226);
(statearr_11233_11262[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11232 === 4))
{var inst_11229 = (state_11231[2]);var state_11231__$1 = state_11231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11231__$1,inst_11229);
} else
{if((state_val_11232 === 3))
{var state_11231__$1 = state_11231;var statearr_11234_11263 = state_11231__$1;(statearr_11234_11263[2] = null);
(statearr_11234_11263[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11232 === 2))
{var inst_11221 = [new cljs.core.Keyword(null,"subs-link","subs-link",1478697670)];var inst_11222 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11221,null));var inst_11223 = app.core.get_subtitle_link.call(null,show_name,season,epnumrelative);var state_11231__$1 = (function (){var statearr_11235 = state_11231;(statearr_11235[7] = inst_11222);
return statearr_11235;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11231__$1,5,inst_11223);
} else
{if((state_val_11232 === 1))
{var inst_11212 = cljs.core.deref.call(null,self__.app);var inst_11213 = new cljs.core.Keyword(null,"subs-link","subs-link",1478697670).cljs$core$IFn$_invoke$arity$1(inst_11212);var inst_11214 = cljs.core.not.call(null,inst_11213);var inst_11215 = cljs.core.deref.call(null,self__.app);var inst_11216 = new cljs.core.Keyword(null,"air-date","air-date",4569745859).cljs$core$IFn$_invoke$arity$1(inst_11215);var inst_11217 = app.core.in_future_QMARK_.call(null,inst_11216);var inst_11218 = cljs.core.not.call(null,inst_11217);var inst_11219 = (inst_11214) && (inst_11218);var state_11231__$1 = state_11231;if(cljs.core.truth_(inst_11219))
{var statearr_11236_11264 = state_11231__$1;(statearr_11236_11264[1] = 2);
} else
{var statearr_11237_11265 = state_11231__$1;(statearr_11237_11265[1] = 3);
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
var state_machine__6136__auto____0 = (function (){var statearr_11241 = [null,null,null,null,null,null,null,null];(statearr_11241[0] = state_machine__6136__auto__);
(statearr_11241[1] = 1);
return statearr_11241;
});
var state_machine__6136__auto____1 = (function (state_11231){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11231);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11242){if((e11242 instanceof Object))
{var ex__6139__auto__ = e11242;var statearr_11243_11266 = state_11231;(statearr_11243_11266[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11231);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11242;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11267 = state_11231;
state_11231 = G__11267;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11231){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11244 = f__6151__auto__.call(null);(statearr_11244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11244;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.t11146.prototype.om$core$IInitState$ = true;
app.core.t11146.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update-chan","update-chan",4688741704),cljs.core.async.chan.call(null)], null);
});
app.core.t11146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11148){var self__ = this;
var _11148__$1 = this;return self__.meta11147;
});
app.core.t11146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11148,meta11147__$1){var self__ = this;
var _11148__$1 = this;return (new app.core.t11146(self__.opts,self__.owner,self__.app,self__.episode_view,meta11147__$1));
});
app.core.__GT_t11146 = (function __GT_t11146(opts__$1,owner__$1,app__$2,episode_view__$1,meta11147){return (new app.core.t11146(opts__$1,owner__$1,app__$2,episode_view__$1,meta11147));
});
}
return (new app.core.t11146(opts,owner,app__$1,episode_view,null));
});
app.core.in_future_QMARK_ = (function in_future_QMARK_(string_date){return (new moment(string_date)).isAfter();
});
app.core.download = (function download(app__$1,sn,token,update_chan){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11334){var state_val_11335 = (state_11334[1]);if((state_val_11335 === 7))
{var inst_11318 = (state_11334[7]);var inst_11317 = (state_11334[8]);var inst_11319 = (state_11334[9]);var inst_11325 = (state_11334[10]);var inst_11322 = (state_11334[11]);var inst_11328 = (state_11334[2]);var inst_11329 = new cljs.core.Keyword(null,"magnet","magnet",4227240668).cljs$core$IFn$_invoke$arity$1(inst_11322);var inst_11330 = (function (){var dl_dir = inst_11328;var link = inst_11325;var magnet = inst_11322;var season = inst_11319;var epnumrelative = inst_11318;var map__11310 = inst_11317;return ((function (dl_dir,link,magnet,season,epnumrelative,map__11310,inst_11318,inst_11317,inst_11319,inst_11325,inst_11322,inst_11328,inst_11329,state_val_11335){
return (function (id,newtoken){if(cljs.core.truth_(id))
{return app.core.get_download_percent.call(null,id,app__$1,newtoken,update_chan);
} else
{return null;
}
});
;})(dl_dir,link,magnet,season,epnumrelative,map__11310,inst_11318,inst_11317,inst_11319,inst_11325,inst_11322,inst_11328,inst_11329,state_val_11335))
})();var inst_11331 = (function (){var dl_dir = inst_11328;var link = inst_11325;var magnet = inst_11322;var season = inst_11319;var epnumrelative = inst_11318;var map__11310 = inst_11317;return ((function (dl_dir,link,magnet,season,epnumrelative,map__11310,inst_11318,inst_11317,inst_11319,inst_11325,inst_11322,inst_11328,inst_11329,inst_11330,state_val_11335){
return (function (p1__11268_SHARP_){return cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"session-token","session-token",4078795636),p1__11268_SHARP_);
});
;})(dl_dir,link,magnet,season,epnumrelative,map__11310,inst_11318,inst_11317,inst_11319,inst_11325,inst_11322,inst_11328,inst_11329,inst_11330,state_val_11335))
})();var inst_11332 = app.core.freebox_start_download.call(null,inst_11329,inst_11328,token,inst_11330,inst_11331);var state_11334__$1 = state_11334;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11334__$1,inst_11332);
} else
{if((state_val_11335 === 6))
{var inst_11325 = (state_11334[2]);var inst_11326 = app.core.freebox_create_dir.call(null,sn);var state_11334__$1 = (function (){var statearr_11336 = state_11334;(statearr_11336[10] = inst_11325);
return statearr_11336;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11334__$1,7,inst_11326);
} else
{if((state_val_11335 === 5))
{var inst_11318 = (state_11334[7]);var inst_11319 = (state_11334[9]);var inst_11322 = (state_11334[2]);var inst_11323 = app.core.get_subtitle_link.call(null,sn,inst_11319,inst_11318);var state_11334__$1 = (function (){var statearr_11337 = state_11334;(statearr_11337[11] = inst_11322);
return statearr_11337;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11334__$1,6,inst_11323);
} else
{if((state_val_11335 === 4))
{var inst_11318 = (state_11334[7]);var inst_11317 = (state_11334[8]);var inst_11319 = (state_11334[9]);var inst_11317__$1 = (state_11334[2]);var inst_11318__$1 = cljs.core.get.call(null,inst_11317__$1,new cljs.core.Keyword(null,"epnumrelative","epnumrelative",1405460025));var inst_11319__$1 = cljs.core.get.call(null,inst_11317__$1,new cljs.core.Keyword(null,"season","season",4402536021));var inst_11320 = app.core.get_magnet_link.call(null,sn,inst_11319__$1,inst_11318__$1);var state_11334__$1 = (function (){var statearr_11338 = state_11334;(statearr_11338[7] = inst_11318__$1);
(statearr_11338[8] = inst_11317__$1);
(statearr_11338[9] = inst_11319__$1);
return statearr_11338;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11334__$1,5,inst_11320);
} else
{if((state_val_11335 === 3))
{var inst_11311 = (state_11334[12]);var state_11334__$1 = state_11334;var statearr_11339_11351 = state_11334__$1;(statearr_11339_11351[2] = inst_11311);
(statearr_11339_11351[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11335 === 2))
{var inst_11311 = (state_11334[12]);var inst_11314 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11311);var state_11334__$1 = state_11334;var statearr_11340_11352 = state_11334__$1;(statearr_11340_11352[2] = inst_11314);
(statearr_11340_11352[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11335 === 1))
{var inst_11311 = (state_11334[12]);var inst_11311__$1 = cljs.core.deref.call(null,app__$1);var inst_11312 = cljs.core.seq_QMARK_.call(null,inst_11311__$1);var state_11334__$1 = (function (){var statearr_11341 = state_11334;(statearr_11341[12] = inst_11311__$1);
return statearr_11341;
})();if(inst_11312)
{var statearr_11342_11353 = state_11334__$1;(statearr_11342_11353[1] = 2);
} else
{var statearr_11343_11354 = state_11334__$1;(statearr_11343_11354[1] = 3);
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
var state_machine__6136__auto____0 = (function (){var statearr_11347 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11347[0] = state_machine__6136__auto__);
(statearr_11347[1] = 1);
return statearr_11347;
});
var state_machine__6136__auto____1 = (function (state_11334){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11334);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11348){if((e11348 instanceof Object))
{var ex__6139__auto__ = e11348;var statearr_11349_11355 = state_11334;(statearr_11349_11355[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11334);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11348;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11356 = state_11334;
state_11334 = G__11356;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11334){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11350 = f__6151__auto__.call(null);(statearr_11350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11350;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.download_on_device = (function download_on_device(app__$1,state,dn){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11418){var state_val_11419 = (state_11418[1]);if((state_val_11419 === 3))
{var inst_11400 = (state_11418[7]);var inst_11404 = (state_11418[2]);var inst_11405 = app.core.subtitle_name_from_filename.call(null,inst_11404);var inst_11406 = [cljs.core.str(inst_11405),cljs.core.str(".srt")].join('');var inst_11407 = goog.crypt.base64.encodeString(inst_11406);var inst_11408 = goog.crypt.base64.encodeString(inst_11404);var inst_11409 = [new cljs.core.Keyword(null,"on-device","on-device",633333110)];var inst_11410 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11409,null));var inst_11411 = om.core.update_BANG_.call(null,app__$1,inst_11410,inst_11404);var inst_11412 = [cljs.core.str(inst_11400),cljs.core.str(inst_11408)].join('');var inst_11413 = [cljs.core.str(inst_11400),cljs.core.str(inst_11407)].join('');var inst_11414 = app.core.on_progress_device.call(null,app__$1,dn,inst_11404);var inst_11415 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state);var inst_11416 = window.downloadOnDevice(inst_11412,inst_11404,inst_11413,inst_11406,inst_11414,inst_11415);var state_11418__$1 = (function (){var statearr_11420 = state_11418;(statearr_11420[8] = inst_11411);
return statearr_11420;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11418__$1,inst_11416);
} else
{if((state_val_11419 === 2))
{var inst_11400 = (state_11418[7]);var inst_11398 = (state_11418[2]);var inst_11399 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_11398);var inst_11400__$1 = new cljs.core.Keyword(null,"download_dir","download_dir",2123295688).cljs$core$IFn$_invoke$arity$1(inst_11399);var inst_11401 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state);var inst_11402 = app.core.find_downloaded_name.call(null,inst_11400__$1,inst_11398,inst_11401,app.core.show);var state_11418__$1 = (function (){var statearr_11421 = state_11418;(statearr_11421[7] = inst_11400__$1);
return statearr_11421;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11418__$1,3,inst_11402);
} else
{if((state_val_11419 === 1))
{var inst_11393 = cljs.core.deref.call(null,app__$1);var inst_11394 = new cljs.core.Keyword(null,"download-id","download-id",4097684466).cljs$core$IFn$_invoke$arity$1(inst_11393);var inst_11395 = new cljs.core.Keyword(null,"token","token",1124445547).cljs$core$IFn$_invoke$arity$1(state);var inst_11396 = app.core.freebox_get_download_details.call(null,inst_11394,inst_11395);var state_11418__$1 = state_11418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11418__$1,2,inst_11396);
} else
{return null;
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11425 = [null,null,null,null,null,null,null,null,null];(statearr_11425[0] = state_machine__6136__auto__);
(statearr_11425[1] = 1);
return statearr_11425;
});
var state_machine__6136__auto____1 = (function (state_11418){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11418);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11426){if((e11426 instanceof Object))
{var ex__6139__auto__ = e11426;var statearr_11427_11429 = state_11418;(statearr_11427_11429[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11418);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11430 = state_11418;
state_11418 = G__11430;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11418){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11428 = f__6151__auto__.call(null);(statearr_11428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11428;
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
app.core.play_on_device = (function play_on_device(show,download_id){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11467){var state_val_11468 = (state_11467[1]);if((state_val_11468 === 3))
{var inst_11463 = (state_11467[2]);var inst_11464 = [cljs.core.str(show),cljs.core.str("/"),cljs.core.str(inst_11463)].join('');var inst_11465 = playVideo(inst_11464);var state_11467__$1 = state_11467;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11467__$1,inst_11465);
} else
{if((state_val_11468 === 2))
{var inst_11455 = (state_11467[7]);var inst_11458 = (state_11467[2]);var inst_11459 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_11458);var inst_11460 = new cljs.core.Keyword(null,"download_dir","download_dir",2123295688).cljs$core$IFn$_invoke$arity$1(inst_11459);var inst_11461 = app.core.find_downloaded_name.call(null,inst_11460,inst_11458,inst_11455,show);var state_11467__$1 = state_11467;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11467__$1,3,inst_11461);
} else
{if((state_val_11468 === 1))
{var inst_11455 = (state_11467[7]);var inst_11454 = cljs.core.deref.call(null,app.core.app_state);var inst_11455__$1 = new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(inst_11454);var inst_11456 = app.core.freebox_get_download_details.call(null,download_id,inst_11455__$1);var state_11467__$1 = (function (){var statearr_11469 = state_11467;(statearr_11469[7] = inst_11455__$1);
return statearr_11469;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11467__$1,2,inst_11456);
} else
{return null;
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11473 = [null,null,null,null,null,null,null,null];(statearr_11473[0] = state_machine__6136__auto__);
(statearr_11473[1] = 1);
return statearr_11473;
});
var state_machine__6136__auto____1 = (function (state_11467){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11467);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11474){if((e11474 instanceof Object))
{var ex__6139__auto__ = e11474;var statearr_11475_11477 = state_11467;(statearr_11475_11477[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11467);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11474;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11478 = state_11467;
state_11467 = G__11478;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11467){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11476 = f__6151__auto__.call(null);(statearr_11476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11476;
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
app.core.find_file_in_dir = (function find_file_in_dir(path,token){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11508){var state_val_11509 = (state_11508[1]);if((state_val_11509 === 2))
{var inst_11501 = (state_11508[2]);var inst_11502 = cljs.core.prn.call(null,inst_11501);var inst_11503 = (function (){var path_infos = inst_11501;return ((function (path_infos,inst_11501,inst_11502,state_val_11509){
return (function (p1__11479_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mimetype","mimetype",3917704416).cljs$core$IFn$_invoke$arity$1(p1__11479_SHARP_),"video/mp4");
});
;})(path_infos,inst_11501,inst_11502,state_val_11509))
})();var inst_11504 = cljs.core.filter.call(null,inst_11503,inst_11501);var inst_11505 = cljs.core.first.call(null,inst_11504);var inst_11506 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_11505);var state_11508__$1 = (function (){var statearr_11510 = state_11508;(statearr_11510[7] = inst_11502);
return statearr_11510;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11508__$1,inst_11506);
} else
{if((state_val_11509 === 1))
{var inst_11499 = app.core.freebox_ls_path.call(null,path,token);var state_11508__$1 = state_11508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11508__$1,2,inst_11499);
} else
{return null;
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11514 = [null,null,null,null,null,null,null,null];(statearr_11514[0] = state_machine__6136__auto__);
(statearr_11514[1] = 1);
return statearr_11514;
});
var state_machine__6136__auto____1 = (function (state_11508){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11508);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11515){if((e11515 instanceof Object))
{var ex__6139__auto__ = e11515;var statearr_11516_11518 = state_11508;(statearr_11516_11518[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11508);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11515;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11519 = state_11508;
state_11508 = G__11519;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11508){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11517 = f__6151__auto__.call(null);(statearr_11517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11517;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.find_downloaded_name = (function find_downloaded_name(path,details,token,show){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11559){var state_val_11560 = (state_11559[1]);if((state_val_11560 === 5))
{var inst_11555 = (state_11559[2]);var state_11559__$1 = state_11559;var statearr_11561_11572 = state_11559__$1;(statearr_11561_11572[2] = inst_11555);
(statearr_11561_11572[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11560 === 4))
{var inst_11557 = (state_11559[2]);var state_11559__$1 = state_11559;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11559__$1,inst_11557);
} else
{if((state_val_11560 === 3))
{var inst_11553 = app.core.find_file_in_dir.call(null,path,token);var state_11559__$1 = state_11559;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11559__$1,5,inst_11553);
} else
{if((state_val_11560 === 2))
{var inst_11550 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(details);var inst_11551 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(inst_11550);var state_11559__$1 = state_11559;var statearr_11562_11573 = state_11559__$1;(statearr_11562_11573[2] = inst_11551);
(statearr_11562_11573[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11560 === 1))
{var inst_11546 = [cljs.core.str(app.core.dir_base),cljs.core.str(show),cljs.core.str("/")].join('');var inst_11547 = btoa(inst_11546);var inst_11548 = cljs.core._EQ_.call(null,path,inst_11547);var state_11559__$1 = state_11559;if(inst_11548)
{var statearr_11563_11574 = state_11559__$1;(statearr_11563_11574[1] = 2);
} else
{var statearr_11564_11575 = state_11559__$1;(statearr_11564_11575[1] = 3);
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
var state_machine__6136__auto____0 = (function (){var statearr_11568 = [null,null,null,null,null,null,null];(statearr_11568[0] = state_machine__6136__auto__);
(statearr_11568[1] = 1);
return statearr_11568;
});
var state_machine__6136__auto____1 = (function (state_11559){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11559);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11569){if((e11569 instanceof Object))
{var ex__6139__auto__ = e11569;var statearr_11570_11576 = state_11559;(statearr_11570_11576[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11559);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11577 = state_11559;
state_11559 = G__11577;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11559){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11571 = f__6151__auto__.call(null);(statearr_11571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.downloadSubs = (function downloadSubs(link,token,download_id,show,season,ep){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11622){var state_val_11623 = (state_11622[1]);if((state_val_11623 === 4))
{var inst_11614 = (state_11622[7]);var inst_11617 = (state_11622[2]);var inst_11618 = cljs.core.prn.call(null,"download subbbbs");var inst_11619 = app.core.addic7ed_url.call(null,show,season,ep);var inst_11620 = window.downloadSub(link,token,inst_11614,inst_11617,inst_11619);var state_11622__$1 = (function (){var statearr_11624 = state_11622;(statearr_11624[8] = inst_11618);
return statearr_11624;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11622__$1,inst_11620);
} else
{if((state_val_11623 === 3))
{var inst_11610 = (state_11622[9]);var inst_11614 = (state_11622[7]);var inst_11613 = (state_11622[2]);var inst_11614__$1 = app.core.subtitle_name_from_filename.call(null,inst_11613);var inst_11615 = app.core.freebox_get_upload_id.call(null,token,inst_11610,inst_11614__$1);var state_11622__$1 = (function (){var statearr_11625 = state_11622;(statearr_11625[7] = inst_11614__$1);
return statearr_11625;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11622__$1,4,inst_11615);
} else
{if((state_val_11623 === 2))
{var inst_11610 = (state_11622[9]);var inst_11608 = (state_11622[2]);var inst_11609 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_11608);var inst_11610__$1 = new cljs.core.Keyword(null,"download_dir","download_dir",2123295688).cljs$core$IFn$_invoke$arity$1(inst_11609);var inst_11611 = app.core.find_downloaded_name.call(null,inst_11610__$1,inst_11608,token,show);var state_11622__$1 = (function (){var statearr_11626 = state_11622;(statearr_11626[9] = inst_11610__$1);
return statearr_11626;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11622__$1,3,inst_11611);
} else
{if((state_val_11623 === 1))
{var inst_11606 = app.core.freebox_get_download_details.call(null,download_id,token);var state_11622__$1 = state_11622;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11622__$1,2,inst_11606);
} else
{return null;
}
}
}
}
});return ((function (switch__6135__auto__){
return (function() {
var state_machine__6136__auto__ = null;
var state_machine__6136__auto____0 = (function (){var statearr_11630 = [null,null,null,null,null,null,null,null,null,null];(statearr_11630[0] = state_machine__6136__auto__);
(statearr_11630[1] = 1);
return statearr_11630;
});
var state_machine__6136__auto____1 = (function (state_11622){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11622);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11631){if((e11631 instanceof Object))
{var ex__6139__auto__ = e11631;var statearr_11632_11634 = state_11622;(statearr_11632_11634[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11622);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11631;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11635 = state_11622;
state_11622 = G__11635;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11622){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11633 = f__6151__auto__.call(null);(statearr_11633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11633;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.addic7ed_url = (function addic7ed_url(showname,season,episode){return [cljs.core.str("http://www.addic7ed.com/serie/"),cljs.core.str(showname),cljs.core.str("/"),cljs.core.str(season),cljs.core.str("/"),cljs.core.str(episode),cljs.core.str("/addic7ed")].join('');
});
app.core.get_download_percent = (function get_download_percent(id,app__$1,token,update_chan){om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"download-id","download-id",4097684466),(function (_){return id;
}));
cljs.core.prn.call(null,"download percent");
var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11711){var state_val_11712 = (state_11711[1]);if((state_val_11712 === 1))
{var state_11711__$1 = state_11711;var statearr_11713_11732 = state_11711__$1;(statearr_11713_11732[2] = null);
(statearr_11713_11732[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 2))
{var inst_11685 = app.core.freebox_get_download_details.call(null,id,token);var state_11711__$1 = state_11711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11711__$1,4,inst_11685);
} else
{if((state_val_11712 === 3))
{var inst_11709 = (state_11711[2]);var state_11711__$1 = state_11711;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11711__$1,inst_11709);
} else
{if((state_val_11712 === 4))
{var inst_11687 = (state_11711[7]);var inst_11687__$1 = (state_11711[2]);var inst_11688 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_11687__$1);var inst_11689 = new cljs.core.Keyword(null,"rx_pct","rx_pct",4391390938).cljs$core$IFn$_invoke$arity$1(inst_11688);var inst_11690 = (inst_11689 / 100);var inst_11691 = new cljs.core.Keyword(null,"success","success",3441701749).cljs$core$IFn$_invoke$arity$1(inst_11687__$1);var state_11711__$1 = (function (){var statearr_11714 = state_11711;(statearr_11714[8] = inst_11690);
(statearr_11714[7] = inst_11687__$1);
return statearr_11714;
})();if(cljs.core.truth_(inst_11691))
{var statearr_11715_11733 = state_11711__$1;(statearr_11715_11733[1] = 5);
} else
{var statearr_11716_11734 = state_11711__$1;(statearr_11716_11734[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 5))
{var inst_11693 = cljs.core.async.timeout.call(null,5000);var state_11711__$1 = state_11711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11711__$1,8,inst_11693);
} else
{if((state_val_11712 === 6))
{var inst_11690 = (state_11711[8]);var inst_11687 = (state_11711[7]);var inst_11704 = (function (){var pct = inst_11690;var res = inst_11687;return ((function (pct,res,inst_11690,inst_11687,state_val_11712){
return (function (_){return null;
});
;})(pct,res,inst_11690,inst_11687,state_val_11712))
})();var inst_11705 = om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"download-id","download-id",4097684466),inst_11704);var state_11711__$1 = state_11711;var statearr_11717_11735 = state_11711__$1;(statearr_11717_11735[2] = inst_11705);
(statearr_11717_11735[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 7))
{var inst_11707 = (state_11711[2]);var state_11711__$1 = state_11711;var statearr_11718_11736 = state_11711__$1;(statearr_11718_11736[2] = inst_11707);
(statearr_11718_11736[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 8))
{var inst_11690 = (state_11711[8]);var inst_11695 = (state_11711[2]);var inst_11696 = cljs.core.async.put_BANG_.call(null,update_chan,inst_11690);var inst_11697 = (inst_11690 < 100);var state_11711__$1 = (function (){var statearr_11719 = state_11711;(statearr_11719[9] = inst_11696);
(statearr_11719[10] = inst_11695);
return statearr_11719;
})();if(cljs.core.truth_(inst_11697))
{var statearr_11720_11737 = state_11711__$1;(statearr_11720_11737[1] = 9);
} else
{var statearr_11721_11738 = state_11711__$1;(statearr_11721_11738[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 9))
{var state_11711__$1 = state_11711;var statearr_11722_11739 = state_11711__$1;(statearr_11722_11739[2] = null);
(statearr_11722_11739[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 10))
{var state_11711__$1 = state_11711;var statearr_11723_11740 = state_11711__$1;(statearr_11723_11740[2] = null);
(statearr_11723_11740[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 11))
{var inst_11702 = (state_11711[2]);var state_11711__$1 = state_11711;var statearr_11724_11741 = state_11711__$1;(statearr_11724_11741[2] = inst_11702);
(statearr_11724_11741[1] = 7);
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
var state_machine__6136__auto____0 = (function (){var statearr_11728 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11728[0] = state_machine__6136__auto__);
(statearr_11728[1] = 1);
return statearr_11728;
});
var state_machine__6136__auto____1 = (function (state_11711){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11711);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11729){if((e11729 instanceof Object))
{var ex__6139__auto__ = e11729;var statearr_11730_11742 = state_11711;(statearr_11730_11742[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11711);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11729;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11743 = state_11711;
state_11711 = G__11743;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11711){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11731 = f__6151__auto__.call(null);(statearr_11731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11731;
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
app.core.tivi_view = (function tivi_view(app__$1,owner){if(typeof app.core.t11812 !== 'undefined')
{} else
{
/**
* @constructor
*/
app.core.t11812 = (function (owner,app,tivi_view,meta11813){
this.owner = owner;
this.app = app;
this.tivi_view = tivi_view;
this.meta11813 = meta11813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
app.core.t11812.cljs$lang$type = true;
app.core.t11812.cljs$lang$ctorStr = "app.core/t11812";
app.core.t11812.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"app.core/t11812");
});
app.core.t11812.prototype.om$core$IRenderState$ = true;
app.core.t11812.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "app"},React.DOM.aside({"className": "app__sidebar"},om.core.build.call(null,app.core.topcoat_list_view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"shows","shows",1123317896).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.Keyword(null,"display","display",2685668404),(function (item,container){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"editing","editing",3420907786).cljs$core$IFn$_invoke$arity$1(state)))
{return React.DOM.form({"onSubmit": (function (e,own){var newval = om.core.get_node.call(null,container,"show-name-change").value;return e.preventDefault().call(null,om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"shows","shows",1123317896),(function (shows){return cljs.core.map.call(null,(function (p1__11744_SHARP_){if(cljs.core._EQ_.call(null,p1__11744_SHARP_,item))
{return cljs.core.assoc.call(null,p1__11744_SHARP_,new cljs.core.Keyword(null,"name","name",1017277949),newval);
} else
{return p1__11744_SHARP_;
}
}),shows);
})),om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),null),om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.Keyword(null,"name","name",1017277949)], null),newval),om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"show-name","show-name",3359181517)], null),newval));
}), "className": "add-show-input"},om.dom.input.call(null,{"ref": "show-name-change", "defaultValue": new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item), "className": "topcoat-text-input", "type": "text"}));
} else
{return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item);
}
}),new cljs.core.Keyword(null,"header","header",4087600639),"Shows",new cljs.core.Keyword(null,"listCls","listCls",1195843358),"shows",new cljs.core.Keyword(null,"click","click",1108654330),(function (p1__11745_SHARP_){return om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watches","watches",2139868463),new cljs.core.Keyword(null,"current","current",2140844267)], null),p1__11745_SHARP_);
}),new cljs.core.Keyword(null,"db-click","db-click",1660355307),(function (p1__11746_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__11746_SHARP_));
})], null),self__.app)),om.core.build.call(null,app.core.add_show_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add","add",1014000659),new cljs.core.Keyword(null,"add","add",1014000659).cljs$core$IFn$_invoke$arity$1(state)], null)], null)),app.core.admin_actions.call(null,self__.app,state,self__.owner)),React.DOM.section({"className": "app__details"},app.core.display_show.call(null,new cljs.core.Keyword(null,"watches","watches",2139868463).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"session-token","session-token",4078795636).cljs$core$IFn$_invoke$arity$1(self__.app))));
});
app.core.t11812.prototype.om$core$IWillMount$ = true;
app.core.t11812.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var add = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"add","add",1014000659));var main = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"main","main",1017248043));app.core.check_freebox_status.call(null,self__.app);
var c__6150__auto___11877 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11823){var state_val_11824 = (state_11823[1]);if((state_val_11824 === 4))
{var inst_11817 = (state_11823[2]);var inst_11818 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"shows","shows",1123317896),cljs.core.conj,inst_11817);var state_11823__$1 = (function (){var statearr_11825 = state_11823;(statearr_11825[7] = inst_11818);
return statearr_11825;
})();var statearr_11826_11878 = state_11823__$1;(statearr_11826_11878[2] = null);
(statearr_11826_11878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11824 === 3))
{var inst_11821 = (state_11823[2]);var state_11823__$1 = state_11823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11823__$1,inst_11821);
} else
{if((state_val_11824 === 2))
{var state_11823__$1 = state_11823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11823__$1,4,add);
} else
{if((state_val_11824 === 1))
{var state_11823__$1 = state_11823;var statearr_11827_11879 = state_11823__$1;(statearr_11827_11879[2] = null);
(statearr_11827_11879[1] = 2);
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
var state_machine__6136__auto____0 = (function (){var statearr_11831 = [null,null,null,null,null,null,null,null];(statearr_11831[0] = state_machine__6136__auto__);
(statearr_11831[1] = 1);
return statearr_11831;
});
var state_machine__6136__auto____1 = (function (state_11823){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11823);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11832){if((e11832 instanceof Object))
{var ex__6139__auto__ = e11832;var statearr_11833_11880 = state_11823;(statearr_11833_11880[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11823);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11881 = state_11823;
state_11823 = G__11881;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11823){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11834 = f__6151__auto__.call(null);(statearr_11834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto___11877);
return statearr_11834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
var c__6150__auto___11882 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11844){var state_val_11845 = (state_11844[1]);if((state_val_11845 === 4))
{var inst_11837 = (state_11844[2]);var inst_11838 = (function (){var current = inst_11837;return ((function (current,inst_11837,state_val_11845){
return (function (c){return current;
});
;})(current,inst_11837,state_val_11845))
})();var inst_11839 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"current","current",2140844267),inst_11838);var state_11844__$1 = (function (){var statearr_11846 = state_11844;(statearr_11846[7] = inst_11839);
return statearr_11846;
})();var statearr_11847_11883 = state_11844__$1;(statearr_11847_11883[2] = null);
(statearr_11847_11883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11845 === 3))
{var inst_11842 = (state_11844[2]);var state_11844__$1 = state_11844;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11844__$1,inst_11842);
} else
{if((state_val_11845 === 2))
{var state_11844__$1 = state_11844;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11844__$1,4,main);
} else
{if((state_val_11845 === 1))
{var state_11844__$1 = state_11844;var statearr_11848_11884 = state_11844__$1;(statearr_11848_11884[2] = null);
(statearr_11848_11884[1] = 2);
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
var state_machine__6136__auto____0 = (function (){var statearr_11852 = [null,null,null,null,null,null,null,null];(statearr_11852[0] = state_machine__6136__auto__);
(statearr_11852[1] = 1);
return statearr_11852;
});
var state_machine__6136__auto____1 = (function (state_11844){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11844);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11853){if((e11853 instanceof Object))
{var ex__6139__auto__ = e11853;var statearr_11854_11885 = state_11844;(statearr_11854_11885[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11844);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11853;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11886 = state_11844;
state_11844 = G__11886;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11844){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11855 = f__6151__auto__.call(null);(statearr_11855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto___11882);
return statearr_11855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11865){var state_val_11866 = (state_11865[1]);if((state_val_11866 === 4))
{var inst_11858 = (state_11865[2]);var inst_11859 = (function (){var reset = inst_11858;return ((function (reset,inst_11858,state_val_11866){
return (function (w){return cljs.core.dissoc.call(null,w,reset);
});
;})(reset,inst_11858,state_val_11866))
})();var inst_11860 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"watches","watches",2139868463),inst_11859);var state_11865__$1 = (function (){var statearr_11867 = state_11865;(statearr_11867[7] = inst_11860);
return statearr_11867;
})();var statearr_11868_11887 = state_11865__$1;(statearr_11868_11887[2] = null);
(statearr_11868_11887[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11866 === 3))
{var inst_11863 = (state_11865[2]);var state_11865__$1 = state_11865;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11865__$1,inst_11863);
} else
{if((state_val_11866 === 2))
{var state_11865__$1 = state_11865;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11865__$1,4,app.core.reset_show_chan);
} else
{if((state_val_11866 === 1))
{var state_11865__$1 = state_11865;var statearr_11869_11888 = state_11865__$1;(statearr_11869_11888[2] = null);
(statearr_11869_11888[1] = 2);
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
var state_machine__6136__auto____0 = (function (){var statearr_11873 = [null,null,null,null,null,null,null,null];(statearr_11873[0] = state_machine__6136__auto__);
(statearr_11873[1] = 1);
return statearr_11873;
});
var state_machine__6136__auto____1 = (function (state_11865){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11865);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11874){if((e11874 instanceof Object))
{var ex__6139__auto__ = e11874;var statearr_11875_11889 = state_11865;(statearr_11875_11889[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11865);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11874;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11890 = state_11865;
state_11865 = G__11890;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11865){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11876 = f__6151__auto__.call(null);(statearr_11876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.t11812.prototype.om$core$IInitState$ = true;
app.core.t11812.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",1014000659),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"main","main",1017248043),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"current","current",2140844267),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",1017196294),new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.Keyword(null,"show","show",1017433711),"test"], null)], null);
});
app.core.t11812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11814){var self__ = this;
var _11814__$1 = this;return self__.meta11813;
});
app.core.t11812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11814,meta11813__$1){var self__ = this;
var _11814__$1 = this;return (new app.core.t11812(self__.owner,self__.app,self__.tivi_view,meta11813__$1));
});
app.core.__GT_t11812 = (function __GT_t11812(owner__$1,app__$2,tivi_view__$1,meta11813){return (new app.core.t11812(owner__$1,app__$2,tivi_view__$1,meta11813));
});
}
return (new app.core.t11812(owner,app__$1,tivi_view,null));
});
app.core.check_freebox_status = (function check_freebox_status(app__$1){if(cljs.core.truth_(new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(app__$1)))
{return app.core.freebox_session.call(null,new cljs.core.Keyword(null,"app-token","app-token",1425759935).cljs$core$IFn$_invoke$arity$1(app__$1),(function (p1__11891_SHARP_){cljs.core.prn.call(null,p1__11891_SHARP_);
return om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"session-token","session-token",4078795636),(function (_){return p1__11891_SHARP_;
}));
}));
} else
{return app.core.freebox_autorize.call(null,(function (p1__11892_SHARP_){return app.core.check_track.call(null,app__$1,p1__11892_SHARP_);
}));
}
});
app.core.check_track = (function check_track(app__$1,aut){var c__6150__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6151__auto__ = (function (){var switch__6135__auto__ = (function (state_11965){var state_val_11966 = (state_11965[1]);if((state_val_11966 === 9))
{var inst_11953 = (state_11965[2]);var inst_11942 = inst_11953;var state_11965__$1 = (function (){var statearr_11967 = state_11965;(statearr_11967[7] = inst_11942);
return statearr_11967;
})();var statearr_11968_11983 = state_11965__$1;(statearr_11968_11983[2] = null);
(statearr_11968_11983[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11966 === 8))
{var inst_11949 = (state_11965[2]);var inst_11950 = new cljs.core.Keyword(null,"track_id","track_id",2284383233).cljs$core$IFn$_invoke$arity$1(aut);var inst_11951 = app.core.freebox_track_id.call(null,inst_11950);var state_11965__$1 = (function (){var statearr_11969 = state_11965;(statearr_11969[8] = inst_11949);
return statearr_11969;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11965__$1,9,inst_11951);
} else
{if((state_val_11966 === 7))
{var inst_11961 = (state_11965[2]);var state_11965__$1 = state_11965;var statearr_11970_11984 = state_11965__$1;(statearr_11970_11984[2] = inst_11961);
(statearr_11970_11984[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11966 === 6))
{var inst_11942 = (state_11965[7]);var inst_11956 = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(inst_11942);var inst_11957 = new cljs.core.Keyword(null,"app_token","app_token",2857217485).cljs$core$IFn$_invoke$arity$1(aut);var inst_11958 = new cljs.core.Keyword(null,"challenge","challenge",2416537557).cljs$core$IFn$_invoke$arity$1(inst_11942);var inst_11959 = app.core.manage_pending.call(null,inst_11956,inst_11957,inst_11958,app__$1);var state_11965__$1 = state_11965;var statearr_11971_11985 = state_11965__$1;(statearr_11971_11985[2] = inst_11959);
(statearr_11971_11985[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11966 === 5))
{var inst_11947 = cljs.core.async.timeout.call(null,3000);var state_11965__$1 = state_11965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11965__$1,8,inst_11947);
} else
{if((state_val_11966 === 4))
{var inst_11963 = (state_11965[2]);var state_11965__$1 = state_11965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11965__$1,inst_11963);
} else
{if((state_val_11966 === 3))
{var inst_11942 = (state_11965[7]);var inst_11944 = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(inst_11942);var inst_11945 = cljs.core._EQ_.call(null,"pending",inst_11944);var state_11965__$1 = state_11965;if(inst_11945)
{var statearr_11972_11986 = state_11965__$1;(statearr_11972_11986[1] = 5);
} else
{var statearr_11973_11987 = state_11965__$1;(statearr_11973_11987[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11966 === 2))
{var inst_11941 = (state_11965[2]);var inst_11942 = inst_11941;var state_11965__$1 = (function (){var statearr_11974 = state_11965;(statearr_11974[7] = inst_11942);
return statearr_11974;
})();var statearr_11975_11988 = state_11965__$1;(statearr_11975_11988[2] = null);
(statearr_11975_11988[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11966 === 1))
{var inst_11938 = new cljs.core.Keyword(null,"track_id","track_id",2284383233).cljs$core$IFn$_invoke$arity$1(aut);var inst_11939 = app.core.freebox_track_id.call(null,inst_11938);var state_11965__$1 = state_11965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11965__$1,2,inst_11939);
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
var state_machine__6136__auto____0 = (function (){var statearr_11979 = [null,null,null,null,null,null,null,null,null];(statearr_11979[0] = state_machine__6136__auto__);
(statearr_11979[1] = 1);
return statearr_11979;
});
var state_machine__6136__auto____1 = (function (state_11965){while(true){
var ret_value__6137__auto__ = (function (){try{while(true){
var result__6138__auto__ = switch__6135__auto__.call(null,state_11965);if(cljs.core.keyword_identical_QMARK_.call(null,result__6138__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6138__auto__;
}
break;
}
}catch (e11980){if((e11980 instanceof Object))
{var ex__6139__auto__ = e11980;var statearr_11981_11989 = state_11965;(statearr_11981_11989[5] = ex__6139__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11965);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11980;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6137__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11990 = state_11965;
state_11965 = G__11990;
continue;
}
} else
{return ret_value__6137__auto__;
}
break;
}
});
state_machine__6136__auto__ = function(state_11965){
switch(arguments.length){
case 0:
return state_machine__6136__auto____0.call(this);
case 1:
return state_machine__6136__auto____1.call(this,state_11965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6136__auto____0;
state_machine__6136__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6136__auto____1;
return state_machine__6136__auto__;
})()
;})(switch__6135__auto__))
})();var state__6152__auto__ = (function (){var statearr_11982 = f__6151__auto__.call(null);(statearr_11982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6150__auto__);
return statearr_11982;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6152__auto__);
}));
return c__6150__auto__;
});
app.core.manage_pending = (function manage_pending(status,app_token,challenge,app__$1){cljs.core.prn.call(null,"manage pending");
if(cljs.core._EQ_.call(null,"granted",status))
{ajax.core.GET.call(null,"http://88.124.156.100/api/v1/login");
return app.core.freebox_session_save.call(null,app.core.freebox_make_password.call(null,challenge,app_token),(function (p1__11991_SHARP_){om.core.transact_BANG_.call(null,app__$1,new cljs.core.Keyword(null,"session-token","session-token",4078795636),(function (_){return p1__11991_SHARP_;
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