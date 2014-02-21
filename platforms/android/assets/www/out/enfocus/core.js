// Compiled by ClojureScript 0.0-2138
goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('goog.Timer');
goog.require('goog.dom.query');
goog.require('goog.async.Delay');
goog.require('goog.dom.classes');
goog.require('enfocus.enlive.syntax');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.async.Delay');
goog.require('goog.dom');
goog.require('enfocus.enlive.syntax');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.Timer');
goog.require('domina.xpath');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('domina');
goog.require('goog.net.XhrIo');
goog.require('goog.style');
goog.require('goog.dom.query');
goog.require('domina.css');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('domina.xpath');
goog.require('domina.css');
enfocus.core.ISelector = (function (){var obj10094 = {};return obj10094;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__3396__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (enfocus.core.select[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (enfocus.core.select["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__3396__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (enfocus.core.select[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (enfocus.core.select["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__3396__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (enfocus.core.select[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (enfocus.core.select["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root,id_mask);
}
});
select = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return select__1.call(this,this$);
case 2:
return select__2.call(this,this$,root);
case 3:
return select__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select.cljs$core$IFn$_invoke$arity$1 = select__1;
select.cljs$core$IFn$_invoke$arity$2 = select__2;
select.cljs$core$IFn$_invoke$arity$3 = select__3;
return select;
})()
;
enfocus.core.ITransform = (function (){var obj10096 = {};return obj10096;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__3396__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__3396__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes,callback);
}
});
apply_transform = function(this$,nodes,callback){
switch(arguments.length){
case 2:
return apply_transform__2.call(this,this$,nodes);
case 3:
return apply_transform__3.call(this,this$,nodes,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply_transform.cljs$core$IFn$_invoke$arity$2 = apply_transform__2;
apply_transform.cljs$core$IFn$_invoke$arity$3 = apply_transform__3;
return apply_transform;
})()
;
enfocus.core.debug = true;
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__3396__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__3396__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3396__auto__;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){return (tst instanceof NodeList);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){if(cljs.core._EQ_.call(null,nl,window))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl], null);
} else
{return domina.nodes.call(null,nl);
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__10097_SHARP_){if(typeof p1__10097_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__10097_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__10097_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__10104_10110 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__10105_10111 = null;var count__10106_10112 = 0;var i__10107_10113 = 0;while(true){
if((i__10107_10113 < count__10106_10112))
{var vec__10108_10114 = cljs.core._nth.call(null,chunk__10105_10111,i__10107_10113);var attr_10115 = cljs.core.nth.call(null,vec__10108_10114,0,null);var value_10116 = cljs.core.nth.call(null,vec__10108_10114,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_10115),value_10116);
{
var G__10117 = seq__10104_10110;
var G__10118 = chunk__10105_10111;
var G__10119 = count__10106_10112;
var G__10120 = (i__10107_10113 + 1);
seq__10104_10110 = G__10117;
chunk__10105_10111 = G__10118;
count__10106_10112 = G__10119;
i__10107_10113 = G__10120;
continue;
}
} else
{var temp__4092__auto___10121 = cljs.core.seq.call(null,seq__10104_10110);if(temp__4092__auto___10121)
{var seq__10104_10122__$1 = temp__4092__auto___10121;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10104_10122__$1))
{var c__4150__auto___10123 = cljs.core.chunk_first.call(null,seq__10104_10122__$1);{
var G__10124 = cljs.core.chunk_rest.call(null,seq__10104_10122__$1);
var G__10125 = c__4150__auto___10123;
var G__10126 = cljs.core.count.call(null,c__4150__auto___10123);
var G__10127 = 0;
seq__10104_10110 = G__10124;
chunk__10105_10111 = G__10125;
count__10106_10112 = G__10126;
i__10107_10113 = G__10127;
continue;
}
} else
{var vec__10109_10128 = cljs.core.first.call(null,seq__10104_10122__$1);var attr_10129 = cljs.core.nth.call(null,vec__10109_10128,0,null);var value_10130 = cljs.core.nth.call(null,vec__10109_10128,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_10129),value_10130);
{
var G__10131 = cljs.core.next.call(null,seq__10104_10122__$1);
var G__10132 = null;
var G__10133 = 0;
var G__10134 = 0;
seq__10104_10110 = G__10131;
chunk__10105_10111 = G__10132;
count__10106_10112 = G__10133;
i__10107_10113 = G__10134;
continue;
}
}
} else
{}
}
break;
}
return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){var seq__10139 = cljs.core.seq.call(null,values);var chunk__10140 = null;var count__10141 = 0;var i__10142 = 0;while(true){
if((i__10142 < count__10141))
{var attr = cljs.core._nth.call(null,chunk__10140,i__10142);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__10143 = seq__10139;
var G__10144 = chunk__10140;
var G__10145 = count__10141;
var G__10146 = (i__10142 + 1);
seq__10139 = G__10143;
chunk__10140 = G__10144;
count__10141 = G__10145;
i__10142 = G__10146;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10139);if(temp__4092__auto__)
{var seq__10139__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10139__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__10139__$1);{
var G__10147 = cljs.core.chunk_rest.call(null,seq__10139__$1);
var G__10148 = c__4150__auto__;
var G__10149 = cljs.core.count.call(null,c__4150__auto__);
var G__10150 = 0;
seq__10139 = G__10147;
chunk__10140 = G__10148;
count__10141 = G__10149;
i__10142 = G__10150;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__10139__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__10151 = cljs.core.next.call(null,seq__10139__$1);
var G__10152 = null;
var G__10153 = 0;
var G__10154 = 0;
seq__10139 = G__10151;
chunk__10140 = G__10152;
count__10141 = G__10153;
i__10142 = G__10154;
continue;
}
}
} else
{return null;
}
}
break;
}
});
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){return [cljs.core.str("__ef_effect_"),cljs.core.str(etype)].join('');
});
enfocus.core.get_mills = (function get_mills(){return (new Date()).getMilliseconds();
});
enfocus.core.pix_round = (function pix_round(step){if((step < 0))
{return Math.floor.call(null,step);
} else
{return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){if(cljs.core.truth_(elem))
{if(cljs.core.map_QMARK_.call(null,ats))
{var seq__10161_10167 = cljs.core.seq.call(null,ats);var chunk__10162_10168 = null;var count__10163_10169 = 0;var i__10164_10170 = 0;while(true){
if((i__10164_10170 < count__10163_10169))
{var vec__10165_10171 = cljs.core._nth.call(null,chunk__10162_10168,i__10164_10170);var k_10172 = cljs.core.nth.call(null,vec__10165_10171,0,null);var v_10173 = cljs.core.nth.call(null,vec__10165_10171,1,null);add_map_attrs.call(null,elem,k_10172,v_10173);
{
var G__10174 = seq__10161_10167;
var G__10175 = chunk__10162_10168;
var G__10176 = count__10163_10169;
var G__10177 = (i__10164_10170 + 1);
seq__10161_10167 = G__10174;
chunk__10162_10168 = G__10175;
count__10163_10169 = G__10176;
i__10164_10170 = G__10177;
continue;
}
} else
{var temp__4092__auto___10178 = cljs.core.seq.call(null,seq__10161_10167);if(temp__4092__auto___10178)
{var seq__10161_10179__$1 = temp__4092__auto___10178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10161_10179__$1))
{var c__4150__auto___10180 = cljs.core.chunk_first.call(null,seq__10161_10179__$1);{
var G__10181 = cljs.core.chunk_rest.call(null,seq__10161_10179__$1);
var G__10182 = c__4150__auto___10180;
var G__10183 = cljs.core.count.call(null,c__4150__auto___10180);
var G__10184 = 0;
seq__10161_10167 = G__10181;
chunk__10162_10168 = G__10182;
count__10163_10169 = G__10183;
i__10164_10170 = G__10184;
continue;
}
} else
{var vec__10166_10185 = cljs.core.first.call(null,seq__10161_10179__$1);var k_10186 = cljs.core.nth.call(null,vec__10166_10185,0,null);var v_10187 = cljs.core.nth.call(null,vec__10166_10185,1,null);add_map_attrs.call(null,elem,k_10186,v_10187);
{
var G__10188 = cljs.core.next.call(null,seq__10161_10179__$1);
var G__10189 = null;
var G__10190 = 0;
var G__10191 = 0;
seq__10161_10167 = G__10188;
chunk__10162_10168 = G__10189;
count__10163_10169 = G__10190;
i__10164_10170 = G__10191;
continue;
}
}
} else
{}
}
break;
}
return elem;
} else
{return null;
}
} else
{return null;
}
});
var add_map_attrs__3 = (function (elem,k,v){elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case 2:
return add_map_attrs__2.call(this,elem,k);
case 3:
return add_map_attrs__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_map_attrs.cljs$core$IFn$_invoke$arity$2 = add_map_attrs__2;
add_map_attrs.cljs$core$IFn$_invoke$arity$3 = add_map_attrs__3;
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){var div = goog.dom.createDom("div",enfocus.core.hide_style);if(cljs.core._EQ_.call(null,child.nodeType,11))
{goog.dom.appendChild(div,child);
} else
{enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));
var seq__10196_10200 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__10197_10201 = null;var count__10198_10202 = 0;var i__10199_10203 = 0;while(true){
if((i__10199_10203 < count__10198_10202))
{var node_10204 = cljs.core._nth.call(null,chunk__10197_10201,i__10199_10203);goog.dom.appendChild(div,node_10204);
{
var G__10205 = seq__10196_10200;
var G__10206 = chunk__10197_10201;
var G__10207 = count__10198_10202;
var G__10208 = (i__10199_10203 + 1);
seq__10196_10200 = G__10205;
chunk__10197_10201 = G__10206;
count__10198_10202 = G__10207;
i__10199_10203 = G__10208;
continue;
}
} else
{var temp__4092__auto___10209 = cljs.core.seq.call(null,seq__10196_10200);if(temp__4092__auto___10209)
{var seq__10196_10210__$1 = temp__4092__auto___10209;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10196_10210__$1))
{var c__4150__auto___10211 = cljs.core.chunk_first.call(null,seq__10196_10210__$1);{
var G__10212 = cljs.core.chunk_rest.call(null,seq__10196_10210__$1);
var G__10213 = c__4150__auto___10211;
var G__10214 = cljs.core.count.call(null,c__4150__auto___10211);
var G__10215 = 0;
seq__10196_10200 = G__10212;
chunk__10197_10201 = G__10213;
count__10198_10202 = G__10214;
i__10199_10203 = G__10215;
continue;
}
} else
{var node_10216 = cljs.core.first.call(null,seq__10196_10210__$1);goog.dom.appendChild(div,node_10216);
{
var G__10217 = cljs.core.next.call(null,seq__10196_10210__$1);
var G__10218 = null;
var G__10219 = 0;
var G__10220 = 0;
seq__10196_10200 = G__10217;
chunk__10197_10201 = G__10218;
count__10198_10202 = G__10219;
i__10199_10203 = G__10220;
continue;
}
}
} else
{}
}
break;
}
}
goog.dom.appendChild(goog.dom.getDocument().documentElement,div);
return div;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){var child = div.childNodes;var frag = document.createDocumentFragment();goog.dom.append(frag,child);
goog.dom.removeNode(div);
return frag;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function() {
var replace_ids = null;
var replace_ids__1 = (function (text){return replace_ids.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str("_")].join(''),text);
});
var replace_ids__2 = (function (id_mask,text){var re = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_mask,text.replace(re,(function (a,b,c,d){return [cljs.core.str(b),cljs.core.str(id_mask),cljs.core.str(c),cljs.core.str(d)].join('');
}))], null);
});
replace_ids = function(id_mask,text){
switch(arguments.length){
case 1:
return replace_ids__1.call(this,id_mask);
case 2:
return replace_ids__2.call(this,id_mask,text);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_ids.cljs$core$IFn$_invoke$arity$1 = replace_ids__1;
replace_ids.cljs$core$IFn$_invoke$arity$2 = replace_ids__2;
return replace_ids;
})()
;
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10221_SHARP_){var id = p1__10221_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__10221_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__10223 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__10223,0,null);var txt = cljs.core.nth.call(null,vec__10223,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;goog.events.listen(req,goog.net.EventType.COMPLETE,(function (){callback.call(null,req);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){var dfa = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));var frag = document.createDocumentFragment();enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa));
var seq__10228_10232 = cljs.core.seq.call(null,dfa);var chunk__10229_10233 = null;var count__10230_10234 = 0;var i__10231_10235 = 0;while(true){
if((i__10231_10235 < count__10230_10234))
{var df_10236 = cljs.core._nth.call(null,chunk__10229_10233,i__10231_10235);goog.dom.append(frag,df_10236);
{
var G__10237 = seq__10228_10232;
var G__10238 = chunk__10229_10233;
var G__10239 = count__10230_10234;
var G__10240 = (i__10231_10235 + 1);
seq__10228_10232 = G__10237;
chunk__10229_10233 = G__10238;
count__10230_10234 = G__10239;
i__10231_10235 = G__10240;
continue;
}
} else
{var temp__4092__auto___10241 = cljs.core.seq.call(null,seq__10228_10232);if(temp__4092__auto___10241)
{var seq__10228_10242__$1 = temp__4092__auto___10241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10228_10242__$1))
{var c__4150__auto___10243 = cljs.core.chunk_first.call(null,seq__10228_10242__$1);{
var G__10244 = cljs.core.chunk_rest.call(null,seq__10228_10242__$1);
var G__10245 = c__4150__auto___10243;
var G__10246 = cljs.core.count.call(null,c__4150__auto___10243);
var G__10247 = 0;
seq__10228_10232 = G__10244;
chunk__10229_10233 = G__10245;
count__10230_10234 = G__10246;
i__10231_10235 = G__10247;
continue;
}
} else
{var df_10248 = cljs.core.first.call(null,seq__10228_10242__$1);goog.dom.append(frag,df_10248);
{
var G__10249 = cljs.core.next.call(null,seq__10228_10242__$1);
var G__10250 = null;
var G__10251 = 0;
var G__10252 = 0;
seq__10228_10232 = G__10249;
chunk__10229_10233 = G__10250;
count__10230_10234 = G__10251;
i__10231_10235 = G__10252;
continue;
}
}
} else
{}
}
break;
}
return frag;
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){var nod = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);if(cljs.core.truth_(nod))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nod),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod))], null);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){var sel_str = enfocus.core.create_sel_str.call(null,sel);var cache = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''));if(cljs.core.truth_(cache))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cache),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache))], null);
} else
{var vec__10255 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__10255,0,null);var tdom = cljs.core.nth.call(null,vec__10255,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__10255,sym,tdom,dom,tsnip){
return (function (p1__10253_SHARP_){return p1__10253_SHARP_.outerHTML;
});})(vec__10255,sym,tdom,dom,tsnip))
,tsnip));enfocus.core.remove_node_return_child.call(null,dom);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom.call(null,html_snip)], null);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){var trans = (function trans(pnodes){var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);var result = cljs.core.map.call(null,func,pnod_col);if((cljs.core.count.call(null,result) <= 1))
{return cljs.core.first.call(null,result);
} else
{return result;
}
});if(typeof enfocus.core.t10259 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t10259 = (function (trans,func,extr_multi_node,meta10260){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta10260 = meta10260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t10259.cljs$lang$type = true;
enfocus.core.t10259.cljs$lang$ctorStr = "enfocus.core/t10259";
enfocus.core.t10259.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"enfocus.core/t10259");
});
enfocus.core.t10259.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t10259.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t10259.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t10259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10261){var self__ = this;
var _10261__$1 = this;return self__.meta10260;
});
enfocus.core.t10259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10261,meta10260__$1){var self__ = this;
var _10261__$1 = this;return (new enfocus.core.t10259(self__.trans,self__.func,self__.extr_multi_node,meta10260__$1));
});
enfocus.core.__GT_t10259 = (function __GT_t10259(trans__$1,func__$1,extr_multi_node__$1,meta10260){return (new enfocus.core.t10259(trans__$1,func__$1,extr_multi_node__$1,meta10260));
});
}
return (new enfocus.core.t10259(trans,func,extr_multi_node,null));
});
/**
* Allows standard domina functions to be chainable
*/
enfocus.core.multi_node_chain = (function() {
var multi_node_chain = null;
var multi_node_chain__1 = (function (func){var trans = (function (nodes,chain){var val = func.call(null,nodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t10269 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t10269 = (function (trans,func,multi_node_chain,meta10270){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta10270 = meta10270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t10269.cljs$lang$type = true;
enfocus.core.t10269.cljs$lang$ctorStr = "enfocus.core/t10269";
enfocus.core.t10269.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"enfocus.core/t10269");
});
enfocus.core.t10269.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t10269.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t10269.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t10269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10271){var self__ = this;
var _10271__$1 = this;return self__.meta10270;
});
enfocus.core.t10269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10271,meta10270__$1){var self__ = this;
var _10271__$1 = this;return (new enfocus.core.t10269(self__.trans,self__.func,self__.multi_node_chain,meta10270__$1));
});
enfocus.core.__GT_t10269 = (function __GT_t10269(trans__$1,func__$1,multi_node_chain__$1,meta10270){return (new enfocus.core.t10269(trans__$1,func__$1,multi_node_chain__$1,meta10270));
});
}
return (new enfocus.core.t10269(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__10262_SHARP_){return domina.nodes.call(null,p1__10262_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t10272 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t10272 = (function (trans,func,values,multi_node_chain,meta10273){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta10273 = meta10273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t10272.cljs$lang$type = true;
enfocus.core.t10272.cljs$lang$ctorStr = "enfocus.core/t10272";
enfocus.core.t10272.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"enfocus.core/t10272");
});
enfocus.core.t10272.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t10272.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t10272.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t10272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10274){var self__ = this;
var _10274__$1 = this;return self__.meta10273;
});
enfocus.core.t10272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10274,meta10273__$1){var self__ = this;
var _10274__$1 = this;return (new enfocus.core.t10272(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta10273__$1));
});
enfocus.core.__GT_t10272 = (function __GT_t10272(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta10273){return (new enfocus.core.t10272(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta10273));
});
}
return (new enfocus.core.t10272(trans,func,values,multi_node_chain,null));
});
multi_node_chain = function(values,func){
switch(arguments.length){
case 1:
return multi_node_chain__1.call(this,values);
case 2:
return multi_node_chain__2.call(this,values,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_node_chain.cljs$core$IFn$_invoke$arity$1 = multi_node_chain__1;
multi_node_chain.cljs$core$IFn$_invoke$arity$2 = multi_node_chain__2;
return multi_node_chain;
})()
;
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__10275_SHARP_,p2__10276_SHARP_){domina.destroy_children_BANG_.call(null,p1__10275_SHARP_);
return domina.append_BANG_.call(null,p1__10275_SHARP_,p2__10276_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__10277){
var values = cljs.core.seq(arglist__10277);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__10278_SHARP_){return domina.set_html_BANG_.call(null,p1__10278_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__10279_SHARP_){var seq__10286 = cljs.core.seq.call(null,pairs);var chunk__10287 = null;var count__10288 = 0;var i__10289 = 0;while(true){
if((i__10289 < count__10288))
{var vec__10290 = cljs.core._nth.call(null,chunk__10287,i__10289);var name = cljs.core.nth.call(null,vec__10290,0,null);var value = cljs.core.nth.call(null,vec__10290,1,null);domina.set_attr_BANG_.call(null,p1__10279_SHARP_,name,value);
{
var G__10292 = seq__10286;
var G__10293 = chunk__10287;
var G__10294 = count__10288;
var G__10295 = (i__10289 + 1);
seq__10286 = G__10292;
chunk__10287 = G__10293;
count__10288 = G__10294;
i__10289 = G__10295;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10286);if(temp__4092__auto__)
{var seq__10286__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10286__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__10286__$1);{
var G__10296 = cljs.core.chunk_rest.call(null,seq__10286__$1);
var G__10297 = c__4150__auto__;
var G__10298 = cljs.core.count.call(null,c__4150__auto__);
var G__10299 = 0;
seq__10286 = G__10296;
chunk__10287 = G__10297;
count__10288 = G__10298;
i__10289 = G__10299;
continue;
}
} else
{var vec__10291 = cljs.core.first.call(null,seq__10286__$1);var name = cljs.core.nth.call(null,vec__10291,0,null);var value = cljs.core.nth.call(null,vec__10291,1,null);domina.set_attr_BANG_.call(null,p1__10279_SHARP_,name,value);
{
var G__10300 = cljs.core.next.call(null,seq__10286__$1);
var G__10301 = null;
var G__10302 = 0;
var G__10303 = 0;
seq__10286 = G__10300;
chunk__10287 = G__10301;
count__10288 = G__10302;
i__10289 = G__10303;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var set_attr = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__10304){
var values = cljs.core.seq(arglist__10304);
return set_attr__delegate(values);
});
set_attr.cljs$core$IFn$_invoke$arity$variadic = set_attr__delegate;
return set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_attr = (function() { 
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__10305_SHARP_){var seq__10310 = cljs.core.seq.call(null,values);var chunk__10311 = null;var count__10312 = 0;var i__10313 = 0;while(true){
if((i__10313 < count__10312))
{var name = cljs.core._nth.call(null,chunk__10311,i__10313);domina.remove_attr_BANG_.call(null,p1__10305_SHARP_,name);
{
var G__10314 = seq__10310;
var G__10315 = chunk__10311;
var G__10316 = count__10312;
var G__10317 = (i__10313 + 1);
seq__10310 = G__10314;
chunk__10311 = G__10315;
count__10312 = G__10316;
i__10313 = G__10317;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10310);if(temp__4092__auto__)
{var seq__10310__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10310__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__10310__$1);{
var G__10318 = cljs.core.chunk_rest.call(null,seq__10310__$1);
var G__10319 = c__4150__auto__;
var G__10320 = cljs.core.count.call(null,c__4150__auto__);
var G__10321 = 0;
seq__10310 = G__10318;
chunk__10311 = G__10319;
count__10312 = G__10320;
i__10313 = G__10321;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__10310__$1);domina.remove_attr_BANG_.call(null,p1__10305_SHARP_,name);
{
var G__10322 = cljs.core.next.call(null,seq__10310__$1);
var G__10323 = null;
var G__10324 = 0;
var G__10325 = 0;
seq__10310 = G__10322;
chunk__10311 = G__10323;
count__10312 = G__10324;
i__10313 = G__10325;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var remove_attr = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__10326){
var values = cljs.core.seq(arglist__10326);
return remove_attr__delegate(values);
});
remove_attr.cljs$core$IFn$_invoke$arity$variadic = remove_attr__delegate;
return remove_attr;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.set_prop = (function() { 
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__10329){var vec__10330 = p__10329;var n = cljs.core.nth.call(null,vec__10330,0,null);var v = cljs.core.nth.call(null,vec__10330,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__10331){
var forms = cljs.core.seq(arglist__10331);
return set_prop__delegate(forms);
});
set_prop.cljs$core$IFn$_invoke$arity$variadic = set_prop__delegate;
return set_prop;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){return goog.dom.classes.hasClass(el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.add_class = (function() { 
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__10332_SHARP_){var seq__10337 = cljs.core.seq.call(null,values);var chunk__10338 = null;var count__10339 = 0;var i__10340 = 0;while(true){
if((i__10340 < count__10339))
{var val = cljs.core._nth.call(null,chunk__10338,i__10340);domina.add_class_BANG_.call(null,p1__10332_SHARP_,val);
{
var G__10341 = seq__10337;
var G__10342 = chunk__10338;
var G__10343 = count__10339;
var G__10344 = (i__10340 + 1);
seq__10337 = G__10341;
chunk__10338 = G__10342;
count__10339 = G__10343;
i__10340 = G__10344;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10337);if(temp__4092__auto__)
{var seq__10337__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10337__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__10337__$1);{
var G__10345 = cljs.core.chunk_rest.call(null,seq__10337__$1);
var G__10346 = c__4150__auto__;
var G__10347 = cljs.core.count.call(null,c__4150__auto__);
var G__10348 = 0;
seq__10337 = G__10345;
chunk__10338 = G__10346;
count__10339 = G__10347;
i__10340 = G__10348;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__10337__$1);domina.add_class_BANG_.call(null,p1__10332_SHARP_,val);
{
var G__10349 = cljs.core.next.call(null,seq__10337__$1);
var G__10350 = null;
var G__10351 = 0;
var G__10352 = 0;
seq__10337 = G__10349;
chunk__10338 = G__10350;
count__10339 = G__10351;
i__10340 = G__10352;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var add_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__10353){
var values = cljs.core.seq(arglist__10353);
return add_class__delegate(values);
});
add_class.cljs$core$IFn$_invoke$arity$variadic = add_class__delegate;
return add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_class = (function() { 
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__10354_SHARP_){var seq__10359 = cljs.core.seq.call(null,values);var chunk__10360 = null;var count__10361 = 0;var i__10362 = 0;while(true){
if((i__10362 < count__10361))
{var val = cljs.core._nth.call(null,chunk__10360,i__10362);domina.remove_class_BANG_.call(null,p1__10354_SHARP_,val);
{
var G__10363 = seq__10359;
var G__10364 = chunk__10360;
var G__10365 = count__10361;
var G__10366 = (i__10362 + 1);
seq__10359 = G__10363;
chunk__10360 = G__10364;
count__10361 = G__10365;
i__10362 = G__10366;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10359);if(temp__4092__auto__)
{var seq__10359__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10359__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__10359__$1);{
var G__10367 = cljs.core.chunk_rest.call(null,seq__10359__$1);
var G__10368 = c__4150__auto__;
var G__10369 = cljs.core.count.call(null,c__4150__auto__);
var G__10370 = 0;
seq__10359 = G__10367;
chunk__10360 = G__10368;
count__10361 = G__10369;
i__10362 = G__10370;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__10359__$1);domina.remove_class_BANG_.call(null,p1__10354_SHARP_,val);
{
var G__10371 = cljs.core.next.call(null,seq__10359__$1);
var G__10372 = null;
var G__10373 = 0;
var G__10374 = 0;
seq__10359 = G__10371;
chunk__10360 = G__10372;
count__10361 = G__10373;
i__10362 = G__10374;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var remove_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__10375){
var values = cljs.core.seq(arglist__10375);
return remove_class__delegate(values);
});
remove_class.cljs$core$IFn$_invoke$arity$variadic = remove_class__delegate;
return remove_class;
})()
;
/**
* Sets the specified classes on the selected element
* @param {...*} var_args
*/
enfocus.core.set_class = (function() { 
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__10376_SHARP_){return domina.set_classes_BANG_.call(null,p1__10376_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__10377){
var values = cljs.core.seq(arglist__10377);
return set_class__delegate(values);
});
set_class.cljs$core$IFn$_invoke$arity$variadic = set_class__delegate;
return set_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.do__GT_ = (function() { 
var do__GT___delegate = function (forms){return (function (pnod){var seq__10382 = cljs.core.seq.call(null,forms);var chunk__10383 = null;var count__10384 = 0;var i__10385 = 0;while(true){
if((i__10385 < count__10384))
{var fun = cljs.core._nth.call(null,chunk__10383,i__10385);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__10386 = seq__10382;
var G__10387 = chunk__10383;
var G__10388 = count__10384;
var G__10389 = (i__10385 + 1);
seq__10382 = G__10386;
chunk__10383 = G__10387;
count__10384 = G__10388;
i__10385 = G__10389;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10382);if(temp__4092__auto__)
{var seq__10382__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10382__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__10382__$1);{
var G__10390 = cljs.core.chunk_rest.call(null,seq__10382__$1);
var G__10391 = c__4150__auto__;
var G__10392 = cljs.core.count.call(null,c__4150__auto__);
var G__10393 = 0;
seq__10382 = G__10390;
chunk__10383 = G__10391;
count__10384 = G__10392;
i__10385 = G__10393;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__10382__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__10394 = cljs.core.next.call(null,seq__10382__$1);
var G__10395 = null;
var G__10396 = 0;
var G__10397 = 0;
seq__10382 = G__10394;
chunk__10383 = G__10395;
count__10384 = G__10396;
i__10385 = G__10397;
continue;
}
}
} else
{return null;
}
}
break;
}
});
};
var do__GT_ = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__10398){
var forms = cljs.core.seq(arglist__10398);
return do__GT___delegate(forms);
});
do__GT_.cljs$core$IFn$_invoke$arity$variadic = do__GT___delegate;
return do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.append = (function() { 
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__10399_SHARP_,p2__10400_SHARP_){return domina.append_BANG_.call(null,p1__10399_SHARP_,p2__10400_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__10401){
var values = cljs.core.seq(arglist__10401);
return append__delegate(values);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.prepend = (function() { 
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__10402_SHARP_,p2__10403_SHARP_){return domina.prepend_BANG_.call(null,p1__10402_SHARP_,p2__10403_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__10404){
var values = cljs.core.seq(arglist__10404);
return prepend__delegate(values);
});
prepend.cljs$core$IFn$_invoke$arity$variadic = prepend__delegate;
return prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.before = (function() { 
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__10405_SHARP_,p2__10406_SHARP_){return domina.insert_before_BANG_.call(null,p1__10405_SHARP_,p2__10406_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__10407){
var values = cljs.core.seq(arglist__10407);
return before__delegate(values);
});
before.cljs$core$IFn$_invoke$arity$variadic = before__delegate;
return before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.after = (function() { 
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__10408_SHARP_,p2__10409_SHARP_){return domina.insert_after_BANG_.call(null,p1__10408_SHARP_,p2__10409_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__10410){
var values = cljs.core.seq(arglist__10410);
return after__delegate(values);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.substitute = (function() { 
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__10411_SHARP_,p2__10412_SHARP_){return domina.swap_content_BANG_.call(null,p1__10411_SHARP_,p2__10412_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__10413){
var values = cljs.core.seq(arglist__10413);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__10414_SHARP_){return domina.detach_BANG_.call(null,p1__10414_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.wrap = (function wrap(elm,mattr){return (function (pnod){var elem = goog.dom.createElement(cljs.core.name.call(null,elm));enfocus.core.add_map_attrs.call(null,elem,mattr);
enfocus.core.at.call(null,elem,enfocus.core.content.call(null,pnod.cloneNode(true)));
return enfocus.core.at.call(null,pnod,enfocus.core.do__GT_.call(null,enfocus.core.after.call(null,elem),enfocus.core.remove_node.call(null)));
});
});
/**
* replaces a node with all its children
*/
enfocus.core.unwrap = (function unwrap(){return (function (pnod){var frag = document.createDocumentFragment();goog.dom.append(frag,pnod.childNodes);
return goog.dom.replaceNode(frag,pnod);
});
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.set_style = (function() { 
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__10415_SHARP_){var seq__10422 = cljs.core.seq.call(null,pairs);var chunk__10423 = null;var count__10424 = 0;var i__10425 = 0;while(true){
if((i__10425 < count__10424))
{var vec__10426 = cljs.core._nth.call(null,chunk__10423,i__10425);var name = cljs.core.nth.call(null,vec__10426,0,null);var value = cljs.core.nth.call(null,vec__10426,1,null);domina.set_style_BANG_.call(null,p1__10415_SHARP_,name,value);
{
var G__10428 = seq__10422;
var G__10429 = chunk__10423;
var G__10430 = count__10424;
var G__10431 = (i__10425 + 1);
seq__10422 = G__10428;
chunk__10423 = G__10429;
count__10424 = G__10430;
i__10425 = G__10431;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10422);if(temp__4092__auto__)
{var seq__10422__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10422__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__10422__$1);{
var G__10432 = cljs.core.chunk_rest.call(null,seq__10422__$1);
var G__10433 = c__4150__auto__;
var G__10434 = cljs.core.count.call(null,c__4150__auto__);
var G__10435 = 0;
seq__10422 = G__10432;
chunk__10423 = G__10433;
count__10424 = G__10434;
i__10425 = G__10435;
continue;
}
} else
{var vec__10427 = cljs.core.first.call(null,seq__10422__$1);var name = cljs.core.nth.call(null,vec__10427,0,null);var value = cljs.core.nth.call(null,vec__10427,1,null);domina.set_style_BANG_.call(null,p1__10415_SHARP_,name,value);
{
var G__10436 = cljs.core.next.call(null,seq__10422__$1);
var G__10437 = null;
var G__10438 = 0;
var G__10439 = 0;
seq__10422 = G__10436;
chunk__10423 = G__10437;
count__10424 = G__10438;
i__10425 = G__10439;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var set_style = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__10440){
var values = cljs.core.seq(arglist__10440);
return set_style__delegate(values);
});
set_style.cljs$core$IFn$_invoke$arity$variadic = set_style__delegate;
return set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.remove_style = (function() { 
var remove_style__delegate = function (values){return (function (pnod){return enfocus.core.style_remove.call(null,pnod,values);
});
};
var remove_style = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__10441){
var values = cljs.core.seq(arglist__10441);
return remove_style__delegate(values);
});
remove_style.cljs$core$IFn$_invoke$arity$variadic = remove_style__delegate;
return remove_style;
})()
;
/**
* calls the focus function on the selected node
*/
enfocus.core.focus = (function focus(){return (function (node){return node.focus();
});
});
/**
* calls the blur function on the selected node
*/
enfocus.core.blur = (function blur(){return (function (node){return node.blur();
});
});
/**
* addes key value pair of data to the selected nodes. Only use clojure data structures when setting
*/
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__10442_SHARP_){return domina.set_data_BANG_.call(null,p1__10442_SHARP_,ky,val);
}));
});
/**
* delays and action by a set timeout, note this is an async operations
* @param {...*} var_args
*/
enfocus.core.delay = (function() { 
var delay__delegate = function (ttime,funcs){return (function (pnod){return enfocus.core.setTimeout.call(null,(function (){return cljs.core.apply.call(null,enfocus.core.at,pnod,funcs);
}),ttime);
});
};
var delay = function (ttime,var_args){
var funcs = null;if (arguments.length > 1) {
  funcs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__10443){
var ttime = cljs.core.first(arglist__10443);
var funcs = cljs.core.rest(arglist__10443);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__10445_SHARP_,p2__10444_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__10444_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__10470_10478 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__10471_10479 = null;var count__10472_10480 = 0;var i__10473_10481 = 0;while(true){
if((i__10473_10481 < count__10472_10480))
{var idx_10482 = cljs.core._nth.call(null,chunk__10471_10479,i__10473_10481);var attr_10483 = pnod.attributes.item(idx_10482);if(cljs.core.truth_(attr_10483.specified))
{attr_10483.value = rep_str.call(null,attr_10483.value);
} else
{}
{
var G__10484 = seq__10470_10478;
var G__10485 = chunk__10471_10479;
var G__10486 = count__10472_10480;
var G__10487 = (i__10473_10481 + 1);
seq__10470_10478 = G__10484;
chunk__10471_10479 = G__10485;
count__10472_10480 = G__10486;
i__10473_10481 = G__10487;
continue;
}
} else
{var temp__4092__auto___10488 = cljs.core.seq.call(null,seq__10470_10478);if(temp__4092__auto___10488)
{var seq__10470_10489__$1 = temp__4092__auto___10488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10470_10489__$1))
{var c__4150__auto___10490 = cljs.core.chunk_first.call(null,seq__10470_10489__$1);{
var G__10491 = cljs.core.chunk_rest.call(null,seq__10470_10489__$1);
var G__10492 = c__4150__auto___10490;
var G__10493 = cljs.core.count.call(null,c__4150__auto___10490);
var G__10494 = 0;
seq__10470_10478 = G__10491;
chunk__10471_10479 = G__10492;
count__10472_10480 = G__10493;
i__10473_10481 = G__10494;
continue;
}
} else
{var idx_10495 = cljs.core.first.call(null,seq__10470_10489__$1);var attr_10496 = pnod.attributes.item(idx_10495);if(cljs.core.truth_(attr_10496.specified))
{attr_10496.value = rep_str.call(null,attr_10496.value);
} else
{}
{
var G__10497 = cljs.core.next.call(null,seq__10470_10489__$1);
var G__10498 = null;
var G__10499 = 0;
var G__10500 = 0;
seq__10470_10478 = G__10497;
chunk__10471_10479 = G__10498;
count__10472_10480 = G__10499;
i__10473_10481 = G__10500;
continue;
}
}
} else
{}
}
break;
}
} else
{}
if(cljs.core._EQ_.call(null,pnod.nodeType,3))
{return pnod.nodeValue = rep_str.call(null,pnod.nodeValue);
} else
{var seq__10474 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__10475 = null;var count__10476 = 0;var i__10477 = 0;while(true){
if((i__10477 < count__10476))
{var cnode = cljs.core._nth.call(null,chunk__10475,i__10477);rep_node.call(null,cnode);
{
var G__10501 = seq__10474;
var G__10502 = chunk__10475;
var G__10503 = count__10476;
var G__10504 = (i__10477 + 1);
seq__10474 = G__10501;
chunk__10475 = G__10502;
count__10476 = G__10503;
i__10477 = G__10504;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10474);if(temp__4092__auto__)
{var seq__10474__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10474__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__10474__$1);{
var G__10505 = cljs.core.chunk_rest.call(null,seq__10474__$1);
var G__10506 = c__4150__auto__;
var G__10507 = cljs.core.count.call(null,c__4150__auto__);
var G__10508 = 0;
seq__10474 = G__10505;
chunk__10475 = G__10506;
count__10476 = G__10507;
i__10477 = G__10508;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__10474__$1);rep_node.call(null,cnode);
{
var G__10509 = cljs.core.next.call(null,seq__10474__$1);
var G__10510 = null;
var G__10511 = 0;
var G__10512 = 0;
seq__10474 = G__10509;
chunk__10475 = G__10510;
count__10476 = G__10511;
i__10477 = G__10512;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});
});
/**
* takes clojure data structure and emits a document element
*/
enfocus.core.html = (function html(node_spec){if(typeof node_spec === 'string')
{return document.createTextNode(node_spec);
} else
{if(cljs.core.vector_QMARK_.call(null,node_spec))
{var vec__10522 = node_spec;var tag = cljs.core.nth.call(null,vec__10522,0,null);var vec__10523 = cljs.core.nthnext.call(null,vec__10522,1);var m = cljs.core.nth.call(null,vec__10523,0,null);var ms = cljs.core.nthnext.call(null,vec__10523,1);var more = vec__10523;var _ = enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,tag,m,ms));var vec__10524 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__10524,0,null);var segments = cljs.core.nthnext.call(null,vec__10524,1);var id = cljs.core.some.call(null,((function (vec__10522,tag,vec__10523,m,ms,more,_,vec__10524,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__10522,tag,vec__10523,m,ms,more,_,vec__10524,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__10522,tag,vec__10523,m,ms,more,_,vec__10524,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__10522,tag,vec__10523,m,ms,more,_,vec__10524,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__10525_10531 = cljs.core.seq.call(null,attrs__$2);var chunk__10526_10532 = null;var count__10527_10533 = 0;var i__10528_10534 = 0;while(true){
if((i__10528_10534 < count__10527_10533))
{var vec__10529_10535 = cljs.core._nth.call(null,chunk__10526_10532,i__10528_10534);var key_10536 = cljs.core.nth.call(null,vec__10529_10535,0,null);var val_10537 = cljs.core.nth.call(null,vec__10529_10535,1,null);node.setAttribute(cljs.core.name.call(null,key_10536),val_10537);
{
var G__10538 = seq__10525_10531;
var G__10539 = chunk__10526_10532;
var G__10540 = count__10527_10533;
var G__10541 = (i__10528_10534 + 1);
seq__10525_10531 = G__10538;
chunk__10526_10532 = G__10539;
count__10527_10533 = G__10540;
i__10528_10534 = G__10541;
continue;
}
} else
{var temp__4092__auto___10542 = cljs.core.seq.call(null,seq__10525_10531);if(temp__4092__auto___10542)
{var seq__10525_10543__$1 = temp__4092__auto___10542;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10525_10543__$1))
{var c__4150__auto___10544 = cljs.core.chunk_first.call(null,seq__10525_10543__$1);{
var G__10545 = cljs.core.chunk_rest.call(null,seq__10525_10543__$1);
var G__10546 = c__4150__auto___10544;
var G__10547 = cljs.core.count.call(null,c__4150__auto___10544);
var G__10548 = 0;
seq__10525_10531 = G__10545;
chunk__10526_10532 = G__10546;
count__10527_10533 = G__10547;
i__10528_10534 = G__10548;
continue;
}
} else
{var vec__10530_10549 = cljs.core.first.call(null,seq__10525_10543__$1);var key_10550 = cljs.core.nth.call(null,vec__10530_10549,0,null);var val_10551 = cljs.core.nth.call(null,vec__10530_10549,1,null);node.setAttribute(cljs.core.name.call(null,key_10550),val_10551);
{
var G__10552 = cljs.core.next.call(null,seq__10525_10543__$1);
var G__10553 = null;
var G__10554 = 0;
var G__10555 = 0;
seq__10525_10531 = G__10552;
chunk__10526_10532 = G__10553;
count__10527_10533 = G__10554;
i__10528_10534 = G__10555;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(content))
{return domina.append_BANG_.call(null,node,content);
} else
{return null;
}
} else
{if(cljs.core.sequential_QMARK_.call(null,node_spec))
{return cljs.core.flatten.call(null,cljs.core.map.call(null,html,node_spec));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return document.createTextNode([cljs.core.str(node_spec)].join(''));
} else
{return null;
}
}
}
}
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_attr = (function get_attr(attr){return enfocus.core.extr_multi_node.call(null,(function (pnod){return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the text value of the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_text = (function get_text(){return enfocus.core.extr_multi_node.call(null,(function (pnod){return goog.dom.getTextContent(pnod);
}));
});
/**
* returns the data on a selected node for a given key. If bubble is set will look at parent
*/
enfocus.core.get_data = (function() {
var get_data = null;
var get_data__1 = (function (ky){return get_data.call(null,ky,false);
});
var get_data__2 = (function (ky,bubble){return enfocus.core.extr_multi_node.call(null,(function (node){return domina.get_data.call(null,node,ky,bubble);
}));
});
get_data = function(ky,bubble){
switch(arguments.length){
case 1:
return get_data__1.call(this,ky);
case 2:
return get_data__2.call(this,ky,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$1 = get_data__1;
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
return get_data;
})()
;
/**
* returns the property on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_prop = (function get_prop(prop){return enfocus.core.extr_multi_node.call(null,(function (pnod){return (pnod[cljs.core.name.call(null,prop)]);
}));
});
/**
* this function takes a map, key and value.  It will check if
* the value exists and create a seq of values if one exits.
*/
enfocus.core.merge_form_val = (function merge_form_val(form_map,ky,val){var mval = form_map.call(null,ky);if(cljs.core.coll_QMARK_.call(null,mval))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core.conj.call(null,mval,val));
} else
{if(cljs.core.truth_(mval))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,mval),val));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.assoc.call(null,form_map,ky,val);
} else
{return null;
}
}
}
});
enfocus.core.read_simple_input = (function read_simple_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__3396__auto__ = el.checked;if(cljs.core.truth_(and__3396__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__3396__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__10556_SHARP_){return p1__10556_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__10557_SHARP_){return p1__10557_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__10559_SHARP_,p2__10558_SHARP_){var G__10562 = p2__10558_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__10562))
{return enfocus.core.read_simple_input.call(null,p2__10558_SHARP_,p1__10559_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__10562))
{return enfocus.core.read_select_input.call(null,p2__10558_SHARP_,p1__10559_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__10562))
{return enfocus.core.read_simple_input.call(null,p2__10558_SHARP_,p1__10559_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__10562))
{var G__10563 = p2__10558_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__10563))
{return enfocus.core.read_checked_input.call(null,p2__10558_SHARP_,p1__10559_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__10563))
{return enfocus.core.read_checked_input.call(null,p2__10558_SHARP_,p1__10559_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__10563))
{return enfocus.core.read_simple_input.call(null,p2__10558_SHARP_,p1__10559_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__10563))
{return enfocus.core.read_simple_input.call(null,p2__10558_SHARP_,p1__10559_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__10563))
{return enfocus.core.read_simple_input.call(null,p2__10558_SHARP_,p1__10559_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__10563))
{return enfocus.core.read_simple_input.call(null,p2__10558_SHARP_,p1__10559_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__10563))
{return enfocus.core.read_simple_input.call(null,p2__10558_SHARP_,p1__10559_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__10563))
{return enfocus.core.read_simple_input.call(null,p2__10558_SHARP_,p1__10559_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__10559_SHARP_;
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
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__10559_SHARP_;
} else
{return null;
}
}
}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,inputs);
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.filter = (function filter(tst,trans){return enfocus.core.multi_node_chain.call(null,(function() {
var filt = null;
var filt__1 = (function (pnodes){return filt.call(null,pnodes,null);
});
var filt__2 = (function (pnodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);var ttest = (((tst instanceof cljs.core.Keyword))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);var res = cljs.core.filter.call(null,ttest,pnod_col);if((chain == null))
{return enfocus.core.apply_transform.call(null,trans,res);
} else
{return enfocus.core.apply_transform.call(null,trans,res,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return filt__1.call(this,pnodes);
case 2:
return filt__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filt.cljs$core$IFn$_invoke$arity$1 = filt__1;
filt.cljs$core$IFn$_invoke$arity$2 = filt__2;
return filt;
})()
);
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){return pnod.checked;
});
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365),enfocus.core.selected_options);
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"checked","checked",1756218137),enfocus.core.checked_radio_checkbox);
enfocus.core.match_QMARK_ = (function match_QMARK_(selector){return (function (node){if(cljs.core.truth_((node["matches"])))
{return node.matches(selector);
} else
{if(cljs.core.truth_((node["matchesSelector"])))
{return node.matchesSelector(selector);
} else
{if(cljs.core.truth_((node["msMatchesSelector"])))
{return node.msMatchesSelector(selector);
} else
{if(cljs.core.truth_((node["mozMatchesSelector"])))
{return node.mozMatchesSelector(selector);
} else
{if(cljs.core.truth_((node["webkitMatchesSelector"])))
{return node.webkitMatchesSelector(selector);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),enfocus.core.nodes__GT_coll.call(null,enfocus.core.select.call(null,node)));
} else
{return null;
}
}
}
}
}
}
});
});
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__1 = (function (css_sel){return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__10564_SHARP_){if((p1__10564_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__10564_SHARP_);
} else
{if((p1__10564_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__10564_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__10564_SHARP_))
{return create_sel_str.call(null,p1__10564_SHARP_);
} else
{if(typeof p1__10564_SHARP_ === 'string')
{return p1__10564_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case 1:
return create_sel_str__1.call(this,id_mask_sym);
case 2:
return create_sel_str__2.call(this,id_mask_sym,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_sel_str.cljs$core$IFn$_invoke$arity$1 = create_sel_str__1;
create_sel_str.cljs$core$IFn$_invoke$arity$2 = create_sel_str__2;
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__1 = (function (css_sel){return css_select.call(null,"",document,css_sel);
});
var css_select__2 = (function (dom_node,css_sel){return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3 = (function (id_mask_sym,dom_node,css_sel){var sel = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));var ret = domina.css.sel.call(null,dom_node,sel);return ret;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case 1:
return css_select__1.call(this,id_mask_sym);
case 2:
return css_select__2.call(this,id_mask_sym,dom_node);
case 3:
return css_select__3.call(this,id_mask_sym,dom_node,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
css_select.cljs$core$IFn$_invoke$arity$1 = css_select__1;
css_select.cljs$core$IFn$_invoke$arity$2 = css_select__2;
css_select.cljs$core$IFn$_invoke$arity$3 = css_select__3;
return css_select;
})()
;
enfocus.core.nil_t = (function nil_t(func){var or__3408__auto__ = func;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__10573 = node;if(G__10573)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__10573.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__10573.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__10573);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__10573);
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__10574 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__10574,0,null);var trans__$1 = cljs.core.nth.call(null,vec__10574,1,null);var seq__10575 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__10576 = null;var count__10577 = 0;var i__10578 = 0;while(true){
if((i__10578 < count__10577))
{var vec__10579 = cljs.core._nth.call(null,chunk__10576,i__10578);var sel = cljs.core.nth.call(null,vec__10579,0,null);var t = cljs.core.nth.call(null,vec__10579,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__10581 = seq__10575;
var G__10582 = chunk__10576;
var G__10583 = count__10577;
var G__10584 = (i__10578 + 1);
seq__10575 = G__10581;
chunk__10576 = G__10582;
count__10577 = G__10583;
i__10578 = G__10584;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10575);if(temp__4092__auto__)
{var seq__10575__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10575__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__10575__$1);{
var G__10585 = cljs.core.chunk_rest.call(null,seq__10575__$1);
var G__10586 = c__4150__auto__;
var G__10587 = cljs.core.count.call(null,c__4150__auto__);
var G__10588 = 0;
seq__10575 = G__10585;
chunk__10576 = G__10586;
count__10577 = G__10587;
i__10578 = G__10588;
continue;
}
} else
{var vec__10580 = cljs.core.first.call(null,seq__10575__$1);var sel = cljs.core.nth.call(null,vec__10580,0,null);var t = cljs.core.nth.call(null,vec__10580,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__10589 = cljs.core.next.call(null,seq__10575__$1);
var G__10590 = null;
var G__10591 = 0;
var G__10592 = 0;
seq__10575 = G__10589;
chunk__10576 = G__10590;
count__10577 = G__10591;
i__10578 = G__10592;
continue;
}
}
} else
{return null;
}
}
break;
}
}
};
var i_at = function (id_mask,node,var_args){
var trans = null;if (arguments.length > 2) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__10593){
var id_mask = cljs.core.first(arglist__10593);
arglist__10593 = cljs.core.next(arglist__10593);
var node = cljs.core.first(arglist__10593);
var trans = cljs.core.rest(arglist__10593);
return i_at__delegate(id_mask,node,trans);
});
i_at.cljs$core$IFn$_invoke$arity$variadic = i_at__delegate;
return i_at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.at = (function() { 
var at__delegate = function (node,trans){return cljs.core.apply.call(null,enfocus.core.i_at,"",node,trans);
};
var at = function (node,var_args){
var trans = null;if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__10594){
var node = cljs.core.first(arglist__10594);
var trans = cljs.core.rest(arglist__10594);
return at__delegate(node,trans);
});
at.cljs$core$IFn$_invoke$arity$variadic = at__delegate;
return at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.from = (function() { 
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__10599 = node;if(G__10599)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__10599.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__10599.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__10599);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__10599);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__10600 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__10600,0,null);var trans__$1 = cljs.core.nth.call(null,vec__10600,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__10601){var vec__10602 = p__10601;var ky = cljs.core.nth.call(null,vec__10602,0,null);var sel = cljs.core.nth.call(null,vec__10602,1,null);var ext = cljs.core.nth.call(null,vec__10602,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
}),cljs.core.partition.call(null,3,trans__$1)));
} else
{return null;
}
}
}
};
var from = function (node,var_args){
var trans = null;if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__10603){
var node = cljs.core.first(arglist__10603);
var trans = cljs.core.rest(arglist__10603);
return from__delegate(node,trans);
});
from.cljs$core$IFn$_invoke$arity$variadic = from__delegate;
return from;
})()
;
enfocus.core.xpath = (function xpath(path){return (function (root,id_mask){if(cljs.core.empty_QMARK_.call(null,id_mask))
{return domina.xpath.xpath.call(null,root,path);
} else
{var tmp = path.replace("@ID='",[cljs.core.str("@ID='"),cljs.core.str(id_mask)].join(''));var mpath = path.replace("@id='",[cljs.core.str("@id='"),cljs.core.str(id_mask)].join(''));return domina.xpath.xpath.call(null,root,mpath);
}
});
});
enfocus.core.this_node = (function this_node(root,id_mask){return root;
});
if(cljs.core.truth_((typeof Text != 'undefined')))
{Text.prototype.domina$DomContent$ = true;
Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){var content__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null);
});
Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){var content__$1 = this;return content__$1;
});
} else
{}
(enfocus.core.ISelector["string"] = true);
(enfocus.core.select["string"] = (function() {
var G__10604 = null;
var G__10604__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__10604__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__10604__3 = (function (this$,root,id_mask){return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__10604 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__10604__1.call(this,this$);
case 2:
return G__10604__2.call(this,this$,root);
case 3:
return G__10604__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10604;
})()
);
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = true;
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,document,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,root,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){var this$__$1 = this;return enfocus.core.css_select.call(null,id_mask,root,this$__$1);
});
(enfocus.core.ISelector["function"] = true);
(enfocus.core.select["function"] = (function() {
var G__10605 = null;
var G__10605__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__10605__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__10605__3 = (function (this$,root,id_mask){return this$.call(null,root,id_mask);
});
G__10605 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__10605__1.call(this,this$);
case 2:
return G__10605__2.call(this,this$,root);
case 3:
return G__10605__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10605;
})()
);
(enfocus.core.ITransform["function"] = true);
(enfocus.core.apply_transform["function"] = (function() {
var G__10606 = null;
var G__10606__2 = (function (trans,nodes){return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__10606__3 = (function (trans,nodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});
G__10606 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__10606__2.call(this,trans,nodes);
case 3:
return G__10606__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10606;
})()
);

//# sourceMappingURL=core.js.map