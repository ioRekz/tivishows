// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_9680 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_9681 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_9682 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_9681,table_section_wrapper_9681,opt_wrapper_9680,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_9682,table_section_wrapper_9681,cell_wrapper_9682,opt_wrapper_9680,table_section_wrapper_9681,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_9681]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3396__auto__ = div.firstChild;if(cljs.core.truth_(and__3396__auto__))
{return div.firstChild.childNodes;
} else
{return and__3396__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__9687 = cljs.core.seq.call(null,tbody);var chunk__9688 = null;var count__9689 = 0;var i__9690 = 0;while(true){
if((i__9690 < count__9689))
{var child = cljs.core._nth.call(null,chunk__9688,i__9690);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__9691 = seq__9687;
var G__9692 = chunk__9688;
var G__9693 = count__9689;
var G__9694 = (i__9690 + 1);
seq__9687 = G__9691;
chunk__9688 = G__9692;
count__9689 = G__9693;
i__9690 = G__9694;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9687);if(temp__4092__auto__)
{var seq__9687__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9687__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__9687__$1);{
var G__9695 = cljs.core.chunk_rest.call(null,seq__9687__$1);
var G__9696 = c__4150__auto__;
var G__9697 = cljs.core.count.call(null,c__4150__auto__);
var G__9698 = 0;
seq__9687 = G__9695;
chunk__9688 = G__9696;
count__9689 = G__9697;
i__9690 = G__9698;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__9687__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__9699 = cljs.core.next.call(null,seq__9687__$1);
var G__9700 = null;
var G__9701 = 0;
var G__9702 = 0;
seq__9687 = G__9699;
chunk__9688 = G__9700;
count__9689 = G__9701;
i__9690 = G__9702;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__9704 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__9704,0,null);var start_wrap = cljs.core.nth.call(null,vec__9704,1,null);var end_wrap = cljs.core.nth.call(null,vec__9704,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__9705 = wrapper.lastChild;
var G__9706 = (level - 1);
wrapper = G__9705;
level = G__9706;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3396__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3396__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj9708 = {};return obj9708;
})();
domina.nodes = (function nodes(content){if((function (){var and__3396__auto__ = content;if(and__3396__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3396__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4029__auto__ = (((content == null))?null:content);return (function (){var or__3408__auto__ = (domina.nodes[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (domina.nodes["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3396__auto__ = nodeseq;if(and__3396__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3396__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4029__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3408__auto__ = (domina.single_node[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (domina.single_node["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3396__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3396__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3396__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__9709){
var mesg = cljs.core.seq(arglist__9709);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__9710){
var mesg = cljs.core.seq(arglist__9710);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__9711){
var contents = cljs.core.seq(arglist__9711);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__9712_SHARP_){return p1__9712_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__9713_SHARP_,p2__9714_SHARP_){return goog.dom.insertChildAt(p1__9713_SHARP_,p2__9714_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__9716_SHARP_,p2__9715_SHARP_){return goog.dom.insertSiblingBefore(p2__9715_SHARP_,p1__9716_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__9718_SHARP_,p2__9717_SHARP_){return goog.dom.insertSiblingAfter(p2__9717_SHARP_,p1__9718_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__9720_SHARP_,p2__9719_SHARP_){return goog.dom.replaceNode(p2__9719_SHARP_,p1__9720_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__9725_9729 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9726_9730 = null;var count__9727_9731 = 0;var i__9728_9732 = 0;while(true){
if((i__9728_9732 < count__9727_9731))
{var n_9733 = cljs.core._nth.call(null,chunk__9726_9730,i__9728_9732);goog.style.setStyle(n_9733,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__9734 = seq__9725_9729;
var G__9735 = chunk__9726_9730;
var G__9736 = count__9727_9731;
var G__9737 = (i__9728_9732 + 1);
seq__9725_9729 = G__9734;
chunk__9726_9730 = G__9735;
count__9727_9731 = G__9736;
i__9728_9732 = G__9737;
continue;
}
} else
{var temp__4092__auto___9738 = cljs.core.seq.call(null,seq__9725_9729);if(temp__4092__auto___9738)
{var seq__9725_9739__$1 = temp__4092__auto___9738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9725_9739__$1))
{var c__4150__auto___9740 = cljs.core.chunk_first.call(null,seq__9725_9739__$1);{
var G__9741 = cljs.core.chunk_rest.call(null,seq__9725_9739__$1);
var G__9742 = c__4150__auto___9740;
var G__9743 = cljs.core.count.call(null,c__4150__auto___9740);
var G__9744 = 0;
seq__9725_9729 = G__9741;
chunk__9726_9730 = G__9742;
count__9727_9731 = G__9743;
i__9728_9732 = G__9744;
continue;
}
} else
{var n_9745 = cljs.core.first.call(null,seq__9725_9739__$1);goog.style.setStyle(n_9745,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__9746 = cljs.core.next.call(null,seq__9725_9739__$1);
var G__9747 = null;
var G__9748 = 0;
var G__9749 = 0;
seq__9725_9729 = G__9746;
chunk__9726_9730 = G__9747;
count__9727_9731 = G__9748;
i__9728_9732 = G__9749;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__9750){
var content = cljs.core.first(arglist__9750);
arglist__9750 = cljs.core.next(arglist__9750);
var name = cljs.core.first(arglist__9750);
var value = cljs.core.rest(arglist__9750);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__9755_9759 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9756_9760 = null;var count__9757_9761 = 0;var i__9758_9762 = 0;while(true){
if((i__9758_9762 < count__9757_9761))
{var n_9763 = cljs.core._nth.call(null,chunk__9756_9760,i__9758_9762);n_9763.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__9764 = seq__9755_9759;
var G__9765 = chunk__9756_9760;
var G__9766 = count__9757_9761;
var G__9767 = (i__9758_9762 + 1);
seq__9755_9759 = G__9764;
chunk__9756_9760 = G__9765;
count__9757_9761 = G__9766;
i__9758_9762 = G__9767;
continue;
}
} else
{var temp__4092__auto___9768 = cljs.core.seq.call(null,seq__9755_9759);if(temp__4092__auto___9768)
{var seq__9755_9769__$1 = temp__4092__auto___9768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9755_9769__$1))
{var c__4150__auto___9770 = cljs.core.chunk_first.call(null,seq__9755_9769__$1);{
var G__9771 = cljs.core.chunk_rest.call(null,seq__9755_9769__$1);
var G__9772 = c__4150__auto___9770;
var G__9773 = cljs.core.count.call(null,c__4150__auto___9770);
var G__9774 = 0;
seq__9755_9759 = G__9771;
chunk__9756_9760 = G__9772;
count__9757_9761 = G__9773;
i__9758_9762 = G__9774;
continue;
}
} else
{var n_9775 = cljs.core.first.call(null,seq__9755_9769__$1);n_9775.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__9776 = cljs.core.next.call(null,seq__9755_9769__$1);
var G__9777 = null;
var G__9778 = 0;
var G__9779 = 0;
seq__9755_9759 = G__9776;
chunk__9756_9760 = G__9777;
count__9757_9761 = G__9778;
i__9758_9762 = G__9779;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__9780){
var content = cljs.core.first(arglist__9780);
arglist__9780 = cljs.core.next(arglist__9780);
var name = cljs.core.first(arglist__9780);
var value = cljs.core.rest(arglist__9780);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__9785_9789 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9786_9790 = null;var count__9787_9791 = 0;var i__9788_9792 = 0;while(true){
if((i__9788_9792 < count__9787_9791))
{var n_9793 = cljs.core._nth.call(null,chunk__9786_9790,i__9788_9792);n_9793.removeAttribute(cljs.core.name.call(null,name));
{
var G__9794 = seq__9785_9789;
var G__9795 = chunk__9786_9790;
var G__9796 = count__9787_9791;
var G__9797 = (i__9788_9792 + 1);
seq__9785_9789 = G__9794;
chunk__9786_9790 = G__9795;
count__9787_9791 = G__9796;
i__9788_9792 = G__9797;
continue;
}
} else
{var temp__4092__auto___9798 = cljs.core.seq.call(null,seq__9785_9789);if(temp__4092__auto___9798)
{var seq__9785_9799__$1 = temp__4092__auto___9798;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9785_9799__$1))
{var c__4150__auto___9800 = cljs.core.chunk_first.call(null,seq__9785_9799__$1);{
var G__9801 = cljs.core.chunk_rest.call(null,seq__9785_9799__$1);
var G__9802 = c__4150__auto___9800;
var G__9803 = cljs.core.count.call(null,c__4150__auto___9800);
var G__9804 = 0;
seq__9785_9789 = G__9801;
chunk__9786_9790 = G__9802;
count__9787_9791 = G__9803;
i__9788_9792 = G__9804;
continue;
}
} else
{var n_9805 = cljs.core.first.call(null,seq__9785_9799__$1);n_9805.removeAttribute(cljs.core.name.call(null,name));
{
var G__9806 = cljs.core.next.call(null,seq__9785_9799__$1);
var G__9807 = null;
var G__9808 = 0;
var G__9809 = 0;
seq__9785_9789 = G__9806;
chunk__9786_9790 = G__9807;
count__9787_9791 = G__9808;
i__9788_9792 = G__9809;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__9811 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__9811,0,null);var v = cljs.core.nth.call(null,vec__9811,1,null);if(cljs.core.truth_((function (){var and__3396__auto__ = k;if(cljs.core.truth_(and__3396__auto__))
{return v;
} else
{return and__3396__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__9812_SHARP_){var attr = attrs__$1.item(p1__9812_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__9819_9825 = cljs.core.seq.call(null,styles);var chunk__9820_9826 = null;var count__9821_9827 = 0;var i__9822_9828 = 0;while(true){
if((i__9822_9828 < count__9821_9827))
{var vec__9823_9829 = cljs.core._nth.call(null,chunk__9820_9826,i__9822_9828);var name_9830 = cljs.core.nth.call(null,vec__9823_9829,0,null);var value_9831 = cljs.core.nth.call(null,vec__9823_9829,1,null);domina.set_style_BANG_.call(null,content,name_9830,value_9831);
{
var G__9832 = seq__9819_9825;
var G__9833 = chunk__9820_9826;
var G__9834 = count__9821_9827;
var G__9835 = (i__9822_9828 + 1);
seq__9819_9825 = G__9832;
chunk__9820_9826 = G__9833;
count__9821_9827 = G__9834;
i__9822_9828 = G__9835;
continue;
}
} else
{var temp__4092__auto___9836 = cljs.core.seq.call(null,seq__9819_9825);if(temp__4092__auto___9836)
{var seq__9819_9837__$1 = temp__4092__auto___9836;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9819_9837__$1))
{var c__4150__auto___9838 = cljs.core.chunk_first.call(null,seq__9819_9837__$1);{
var G__9839 = cljs.core.chunk_rest.call(null,seq__9819_9837__$1);
var G__9840 = c__4150__auto___9838;
var G__9841 = cljs.core.count.call(null,c__4150__auto___9838);
var G__9842 = 0;
seq__9819_9825 = G__9839;
chunk__9820_9826 = G__9840;
count__9821_9827 = G__9841;
i__9822_9828 = G__9842;
continue;
}
} else
{var vec__9824_9843 = cljs.core.first.call(null,seq__9819_9837__$1);var name_9844 = cljs.core.nth.call(null,vec__9824_9843,0,null);var value_9845 = cljs.core.nth.call(null,vec__9824_9843,1,null);domina.set_style_BANG_.call(null,content,name_9844,value_9845);
{
var G__9846 = cljs.core.next.call(null,seq__9819_9837__$1);
var G__9847 = null;
var G__9848 = 0;
var G__9849 = 0;
seq__9819_9825 = G__9846;
chunk__9820_9826 = G__9847;
count__9821_9827 = G__9848;
i__9822_9828 = G__9849;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__9856_9862 = cljs.core.seq.call(null,attrs);var chunk__9857_9863 = null;var count__9858_9864 = 0;var i__9859_9865 = 0;while(true){
if((i__9859_9865 < count__9858_9864))
{var vec__9860_9866 = cljs.core._nth.call(null,chunk__9857_9863,i__9859_9865);var name_9867 = cljs.core.nth.call(null,vec__9860_9866,0,null);var value_9868 = cljs.core.nth.call(null,vec__9860_9866,1,null);domina.set_attr_BANG_.call(null,content,name_9867,value_9868);
{
var G__9869 = seq__9856_9862;
var G__9870 = chunk__9857_9863;
var G__9871 = count__9858_9864;
var G__9872 = (i__9859_9865 + 1);
seq__9856_9862 = G__9869;
chunk__9857_9863 = G__9870;
count__9858_9864 = G__9871;
i__9859_9865 = G__9872;
continue;
}
} else
{var temp__4092__auto___9873 = cljs.core.seq.call(null,seq__9856_9862);if(temp__4092__auto___9873)
{var seq__9856_9874__$1 = temp__4092__auto___9873;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9856_9874__$1))
{var c__4150__auto___9875 = cljs.core.chunk_first.call(null,seq__9856_9874__$1);{
var G__9876 = cljs.core.chunk_rest.call(null,seq__9856_9874__$1);
var G__9877 = c__4150__auto___9875;
var G__9878 = cljs.core.count.call(null,c__4150__auto___9875);
var G__9879 = 0;
seq__9856_9862 = G__9876;
chunk__9857_9863 = G__9877;
count__9858_9864 = G__9878;
i__9859_9865 = G__9879;
continue;
}
} else
{var vec__9861_9880 = cljs.core.first.call(null,seq__9856_9874__$1);var name_9881 = cljs.core.nth.call(null,vec__9861_9880,0,null);var value_9882 = cljs.core.nth.call(null,vec__9861_9880,1,null);domina.set_attr_BANG_.call(null,content,name_9881,value_9882);
{
var G__9883 = cljs.core.next.call(null,seq__9856_9874__$1);
var G__9884 = null;
var G__9885 = 0;
var G__9886 = 0;
seq__9856_9862 = G__9883;
chunk__9857_9863 = G__9884;
count__9858_9864 = G__9885;
i__9859_9865 = G__9886;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__9891_9895 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9892_9896 = null;var count__9893_9897 = 0;var i__9894_9898 = 0;while(true){
if((i__9894_9898 < count__9893_9897))
{var node_9899 = cljs.core._nth.call(null,chunk__9892_9896,i__9894_9898);goog.dom.classes.add(node_9899,class$);
{
var G__9900 = seq__9891_9895;
var G__9901 = chunk__9892_9896;
var G__9902 = count__9893_9897;
var G__9903 = (i__9894_9898 + 1);
seq__9891_9895 = G__9900;
chunk__9892_9896 = G__9901;
count__9893_9897 = G__9902;
i__9894_9898 = G__9903;
continue;
}
} else
{var temp__4092__auto___9904 = cljs.core.seq.call(null,seq__9891_9895);if(temp__4092__auto___9904)
{var seq__9891_9905__$1 = temp__4092__auto___9904;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9891_9905__$1))
{var c__4150__auto___9906 = cljs.core.chunk_first.call(null,seq__9891_9905__$1);{
var G__9907 = cljs.core.chunk_rest.call(null,seq__9891_9905__$1);
var G__9908 = c__4150__auto___9906;
var G__9909 = cljs.core.count.call(null,c__4150__auto___9906);
var G__9910 = 0;
seq__9891_9895 = G__9907;
chunk__9892_9896 = G__9908;
count__9893_9897 = G__9909;
i__9894_9898 = G__9910;
continue;
}
} else
{var node_9911 = cljs.core.first.call(null,seq__9891_9905__$1);goog.dom.classes.add(node_9911,class$);
{
var G__9912 = cljs.core.next.call(null,seq__9891_9905__$1);
var G__9913 = null;
var G__9914 = 0;
var G__9915 = 0;
seq__9891_9895 = G__9912;
chunk__9892_9896 = G__9913;
count__9893_9897 = G__9914;
i__9894_9898 = G__9915;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__9920_9924 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9921_9925 = null;var count__9922_9926 = 0;var i__9923_9927 = 0;while(true){
if((i__9923_9927 < count__9922_9926))
{var node_9928 = cljs.core._nth.call(null,chunk__9921_9925,i__9923_9927);goog.dom.classes.remove(node_9928,class$);
{
var G__9929 = seq__9920_9924;
var G__9930 = chunk__9921_9925;
var G__9931 = count__9922_9926;
var G__9932 = (i__9923_9927 + 1);
seq__9920_9924 = G__9929;
chunk__9921_9925 = G__9930;
count__9922_9926 = G__9931;
i__9923_9927 = G__9932;
continue;
}
} else
{var temp__4092__auto___9933 = cljs.core.seq.call(null,seq__9920_9924);if(temp__4092__auto___9933)
{var seq__9920_9934__$1 = temp__4092__auto___9933;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9920_9934__$1))
{var c__4150__auto___9935 = cljs.core.chunk_first.call(null,seq__9920_9934__$1);{
var G__9936 = cljs.core.chunk_rest.call(null,seq__9920_9934__$1);
var G__9937 = c__4150__auto___9935;
var G__9938 = cljs.core.count.call(null,c__4150__auto___9935);
var G__9939 = 0;
seq__9920_9924 = G__9936;
chunk__9921_9925 = G__9937;
count__9922_9926 = G__9938;
i__9923_9927 = G__9939;
continue;
}
} else
{var node_9940 = cljs.core.first.call(null,seq__9920_9934__$1);goog.dom.classes.remove(node_9940,class$);
{
var G__9941 = cljs.core.next.call(null,seq__9920_9934__$1);
var G__9942 = null;
var G__9943 = 0;
var G__9944 = 0;
seq__9920_9924 = G__9941;
chunk__9921_9925 = G__9942;
count__9922_9926 = G__9943;
i__9923_9927 = G__9944;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__9949_9953 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9950_9954 = null;var count__9951_9955 = 0;var i__9952_9956 = 0;while(true){
if((i__9952_9956 < count__9951_9955))
{var node_9957 = cljs.core._nth.call(null,chunk__9950_9954,i__9952_9956);goog.dom.classes.toggle(node_9957,class$);
{
var G__9958 = seq__9949_9953;
var G__9959 = chunk__9950_9954;
var G__9960 = count__9951_9955;
var G__9961 = (i__9952_9956 + 1);
seq__9949_9953 = G__9958;
chunk__9950_9954 = G__9959;
count__9951_9955 = G__9960;
i__9952_9956 = G__9961;
continue;
}
} else
{var temp__4092__auto___9962 = cljs.core.seq.call(null,seq__9949_9953);if(temp__4092__auto___9962)
{var seq__9949_9963__$1 = temp__4092__auto___9962;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9949_9963__$1))
{var c__4150__auto___9964 = cljs.core.chunk_first.call(null,seq__9949_9963__$1);{
var G__9965 = cljs.core.chunk_rest.call(null,seq__9949_9963__$1);
var G__9966 = c__4150__auto___9964;
var G__9967 = cljs.core.count.call(null,c__4150__auto___9964);
var G__9968 = 0;
seq__9949_9953 = G__9965;
chunk__9950_9954 = G__9966;
count__9951_9955 = G__9967;
i__9952_9956 = G__9968;
continue;
}
} else
{var node_9969 = cljs.core.first.call(null,seq__9949_9963__$1);goog.dom.classes.toggle(node_9969,class$);
{
var G__9970 = cljs.core.next.call(null,seq__9949_9963__$1);
var G__9971 = null;
var G__9972 = 0;
var G__9973 = 0;
seq__9949_9953 = G__9970;
chunk__9950_9954 = G__9971;
count__9951_9955 = G__9972;
i__9952_9956 = G__9973;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_9982__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__9978_9983 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9979_9984 = null;var count__9980_9985 = 0;var i__9981_9986 = 0;while(true){
if((i__9981_9986 < count__9980_9985))
{var node_9987 = cljs.core._nth.call(null,chunk__9979_9984,i__9981_9986);goog.dom.classes.set(node_9987,classes_9982__$1);
{
var G__9988 = seq__9978_9983;
var G__9989 = chunk__9979_9984;
var G__9990 = count__9980_9985;
var G__9991 = (i__9981_9986 + 1);
seq__9978_9983 = G__9988;
chunk__9979_9984 = G__9989;
count__9980_9985 = G__9990;
i__9981_9986 = G__9991;
continue;
}
} else
{var temp__4092__auto___9992 = cljs.core.seq.call(null,seq__9978_9983);if(temp__4092__auto___9992)
{var seq__9978_9993__$1 = temp__4092__auto___9992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9978_9993__$1))
{var c__4150__auto___9994 = cljs.core.chunk_first.call(null,seq__9978_9993__$1);{
var G__9995 = cljs.core.chunk_rest.call(null,seq__9978_9993__$1);
var G__9996 = c__4150__auto___9994;
var G__9997 = cljs.core.count.call(null,c__4150__auto___9994);
var G__9998 = 0;
seq__9978_9983 = G__9995;
chunk__9979_9984 = G__9996;
count__9980_9985 = G__9997;
i__9981_9986 = G__9998;
continue;
}
} else
{var node_9999 = cljs.core.first.call(null,seq__9978_9993__$1);goog.dom.classes.set(node_9999,classes_9982__$1);
{
var G__10000 = cljs.core.next.call(null,seq__9978_9993__$1);
var G__10001 = null;
var G__10002 = 0;
var G__10003 = 0;
seq__9978_9983 = G__10000;
chunk__9979_9984 = G__10001;
count__9980_9985 = G__10002;
i__9981_9986 = G__10003;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__10008_10012 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10009_10013 = null;var count__10010_10014 = 0;var i__10011_10015 = 0;while(true){
if((i__10011_10015 < count__10010_10014))
{var node_10016 = cljs.core._nth.call(null,chunk__10009_10013,i__10011_10015);goog.dom.setTextContent(node_10016,value);
{
var G__10017 = seq__10008_10012;
var G__10018 = chunk__10009_10013;
var G__10019 = count__10010_10014;
var G__10020 = (i__10011_10015 + 1);
seq__10008_10012 = G__10017;
chunk__10009_10013 = G__10018;
count__10010_10014 = G__10019;
i__10011_10015 = G__10020;
continue;
}
} else
{var temp__4092__auto___10021 = cljs.core.seq.call(null,seq__10008_10012);if(temp__4092__auto___10021)
{var seq__10008_10022__$1 = temp__4092__auto___10021;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10008_10022__$1))
{var c__4150__auto___10023 = cljs.core.chunk_first.call(null,seq__10008_10022__$1);{
var G__10024 = cljs.core.chunk_rest.call(null,seq__10008_10022__$1);
var G__10025 = c__4150__auto___10023;
var G__10026 = cljs.core.count.call(null,c__4150__auto___10023);
var G__10027 = 0;
seq__10008_10012 = G__10024;
chunk__10009_10013 = G__10025;
count__10010_10014 = G__10026;
i__10011_10015 = G__10027;
continue;
}
} else
{var node_10028 = cljs.core.first.call(null,seq__10008_10022__$1);goog.dom.setTextContent(node_10028,value);
{
var G__10029 = cljs.core.next.call(null,seq__10008_10022__$1);
var G__10030 = null;
var G__10031 = 0;
var G__10032 = 0;
seq__10008_10012 = G__10029;
chunk__10009_10013 = G__10030;
count__10010_10014 = G__10031;
i__10011_10015 = G__10032;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__10037_10041 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10038_10042 = null;var count__10039_10043 = 0;var i__10040_10044 = 0;while(true){
if((i__10040_10044 < count__10039_10043))
{var node_10045 = cljs.core._nth.call(null,chunk__10038_10042,i__10040_10044);goog.dom.forms.setValue(node_10045,value);
{
var G__10046 = seq__10037_10041;
var G__10047 = chunk__10038_10042;
var G__10048 = count__10039_10043;
var G__10049 = (i__10040_10044 + 1);
seq__10037_10041 = G__10046;
chunk__10038_10042 = G__10047;
count__10039_10043 = G__10048;
i__10040_10044 = G__10049;
continue;
}
} else
{var temp__4092__auto___10050 = cljs.core.seq.call(null,seq__10037_10041);if(temp__4092__auto___10050)
{var seq__10037_10051__$1 = temp__4092__auto___10050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10037_10051__$1))
{var c__4150__auto___10052 = cljs.core.chunk_first.call(null,seq__10037_10051__$1);{
var G__10053 = cljs.core.chunk_rest.call(null,seq__10037_10051__$1);
var G__10054 = c__4150__auto___10052;
var G__10055 = cljs.core.count.call(null,c__4150__auto___10052);
var G__10056 = 0;
seq__10037_10041 = G__10053;
chunk__10038_10042 = G__10054;
count__10039_10043 = G__10055;
i__10040_10044 = G__10056;
continue;
}
} else
{var node_10057 = cljs.core.first.call(null,seq__10037_10051__$1);goog.dom.forms.setValue(node_10057,value);
{
var G__10058 = cljs.core.next.call(null,seq__10037_10051__$1);
var G__10059 = null;
var G__10060 = 0;
var G__10061 = 0;
seq__10037_10041 = G__10058;
chunk__10038_10042 = G__10059;
count__10039_10043 = G__10060;
i__10040_10044 = G__10061;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3396__auto__ = allows_inner_html_QMARK_;if(and__3396__auto__)
{var and__3396__auto____$1 = (function (){var or__3408__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3396__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3396__auto____$1;
}
} else
{return and__3396__auto__;
}
})()))
{var value_10072 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__10068_10073 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10069_10074 = null;var count__10070_10075 = 0;var i__10071_10076 = 0;while(true){
if((i__10071_10076 < count__10070_10075))
{var node_10077 = cljs.core._nth.call(null,chunk__10069_10074,i__10071_10076);node_10077.innerHTML = value_10072;
{
var G__10078 = seq__10068_10073;
var G__10079 = chunk__10069_10074;
var G__10080 = count__10070_10075;
var G__10081 = (i__10071_10076 + 1);
seq__10068_10073 = G__10078;
chunk__10069_10074 = G__10079;
count__10070_10075 = G__10080;
i__10071_10076 = G__10081;
continue;
}
} else
{var temp__4092__auto___10082 = cljs.core.seq.call(null,seq__10068_10073);if(temp__4092__auto___10082)
{var seq__10068_10083__$1 = temp__4092__auto___10082;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10068_10083__$1))
{var c__4150__auto___10084 = cljs.core.chunk_first.call(null,seq__10068_10083__$1);{
var G__10085 = cljs.core.chunk_rest.call(null,seq__10068_10083__$1);
var G__10086 = c__4150__auto___10084;
var G__10087 = cljs.core.count.call(null,c__4150__auto___10084);
var G__10088 = 0;
seq__10068_10073 = G__10085;
chunk__10069_10074 = G__10086;
count__10070_10075 = G__10087;
i__10071_10076 = G__10088;
continue;
}
} else
{var node_10089 = cljs.core.first.call(null,seq__10068_10083__$1);node_10089.innerHTML = value_10072;
{
var G__10090 = cljs.core.next.call(null,seq__10068_10083__$1);
var G__10091 = null;
var G__10092 = 0;
var G__10093 = 0;
seq__10068_10073 = G__10090;
chunk__10069_10074 = G__10091;
count__10070_10075 = G__10092;
i__10071_10076 = G__10093;
continue;
}
}
} else
{}
}
break;
}
}catch (e10067){if((e10067 instanceof Error))
{var e_10094 = e10067;domina.replace_children_BANG_.call(null,content,value_10072);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10067;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3396__auto__ = bubble;if(cljs.core.truth_(and__3396__auto__))
{return (value == null);
} else
{return and__3396__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3408__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__10101_10105 = cljs.core.seq.call(null,children);var chunk__10102_10106 = null;var count__10103_10107 = 0;var i__10104_10108 = 0;while(true){
if((i__10104_10108 < count__10103_10107))
{var child_10109 = cljs.core._nth.call(null,chunk__10102_10106,i__10104_10108);frag.appendChild(child_10109);
{
var G__10110 = seq__10101_10105;
var G__10111 = chunk__10102_10106;
var G__10112 = count__10103_10107;
var G__10113 = (i__10104_10108 + 1);
seq__10101_10105 = G__10110;
chunk__10102_10106 = G__10111;
count__10103_10107 = G__10112;
i__10104_10108 = G__10113;
continue;
}
} else
{var temp__4092__auto___10114 = cljs.core.seq.call(null,seq__10101_10105);if(temp__4092__auto___10114)
{var seq__10101_10115__$1 = temp__4092__auto___10114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10101_10115__$1))
{var c__4150__auto___10116 = cljs.core.chunk_first.call(null,seq__10101_10115__$1);{
var G__10117 = cljs.core.chunk_rest.call(null,seq__10101_10115__$1);
var G__10118 = c__4150__auto___10116;
var G__10119 = cljs.core.count.call(null,c__4150__auto___10116);
var G__10120 = 0;
seq__10101_10105 = G__10117;
chunk__10102_10106 = G__10118;
count__10103_10107 = G__10119;
i__10104_10108 = G__10120;
continue;
}
} else
{var child_10121 = cljs.core.first.call(null,seq__10101_10115__$1);frag.appendChild(child_10121);
{
var G__10122 = cljs.core.next.call(null,seq__10101_10115__$1);
var G__10123 = null;
var G__10124 = 0;
var G__10125 = 0;
seq__10101_10105 = G__10122;
chunk__10102_10106 = G__10123;
count__10103_10107 = G__10124;
i__10104_10108 = G__10125;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10095_SHARP_,p2__10096_SHARP_){return f.call(null,p1__10095_SHARP_,p2__10096_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3396__auto__ = obj;if(cljs.core.truth_(and__3396__auto__))
{var and__3396__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3396__auto____$1)
{return obj.length;
} else
{return and__3396__auto____$1;
}
} else
{return and__3396__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__10127 = list_thing;if(G__10127)
{var bit__4052__auto__ = (G__10127.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4052__auto__) || (G__10127.cljs$core$ISeqable$))
{return true;
} else
{if((!G__10127.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10127);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10127);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__10128 = content;if(G__10128)
{var bit__4052__auto__ = (G__10128.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4052__auto__) || (G__10128.cljs$core$ISeqable$))
{return true;
} else
{if((!G__10128.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10128);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10128);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__10129 = content;if(G__10129)
{var bit__4052__auto__ = (G__10129.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4052__auto__) || (G__10129.cljs$core$ISeqable$))
{return true;
} else
{if((!G__10129.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10129);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10129);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map