// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10794 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10794 = (function (f,fn_handler,meta10795){
this.f = f;
this.fn_handler = fn_handler;
this.meta10795 = meta10795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10794.cljs$lang$type = true;
cljs.core.async.t10794.cljs$lang$ctorStr = "cljs.core.async/t10794";
cljs.core.async.t10794.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10794");
});
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10796){var self__ = this;
var _10796__$1 = this;return self__.meta10795;
});
cljs.core.async.t10794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10796,meta10795__$1){var self__ = this;
var _10796__$1 = this;return (new cljs.core.async.t10794(self__.f,self__.fn_handler,meta10795__$1));
});
cljs.core.async.__GT_t10794 = (function __GT_t10794(f__$1,fn_handler__$1,meta10795){return (new cljs.core.async.t10794(f__$1,fn_handler__$1,meta10795));
});
}
return (new cljs.core.async.t10794(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10798 = buff;if(G__10798)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__10798.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10798.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10798);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10798);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10799 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10799);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10799);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3396__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4250__auto___10800 = n;var x_10801 = 0;while(true){
if((x_10801 < n__4250__auto___10800))
{(a[x_10801] = 0);
{
var G__10802 = (x_10801 + 1);
x_10801 = G__10802;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10803 = (i + 1);
i = G__10803;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10807 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10807 = (function (flag,alt_flag,meta10808){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10808 = meta10808;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10807.cljs$lang$type = true;
cljs.core.async.t10807.cljs$lang$ctorStr = "cljs.core.async/t10807";
cljs.core.async.t10807.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10807");
});
cljs.core.async.t10807.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10807.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10807.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10809){var self__ = this;
var _10809__$1 = this;return self__.meta10808;
});
cljs.core.async.t10807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10809,meta10808__$1){var self__ = this;
var _10809__$1 = this;return (new cljs.core.async.t10807(self__.flag,self__.alt_flag,meta10808__$1));
});
cljs.core.async.__GT_t10807 = (function __GT_t10807(flag__$1,alt_flag__$1,meta10808){return (new cljs.core.async.t10807(flag__$1,alt_flag__$1,meta10808));
});
}
return (new cljs.core.async.t10807(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10813 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10813 = (function (cb,flag,alt_handler,meta10814){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10814 = meta10814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10813.cljs$lang$type = true;
cljs.core.async.t10813.cljs$lang$ctorStr = "cljs.core.async/t10813";
cljs.core.async.t10813.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10813");
});
cljs.core.async.t10813.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10815){var self__ = this;
var _10815__$1 = this;return self__.meta10814;
});
cljs.core.async.t10813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10815,meta10814__$1){var self__ = this;
var _10815__$1 = this;return (new cljs.core.async.t10813(self__.cb,self__.flag,self__.alt_handler,meta10814__$1));
});
cljs.core.async.__GT_t10813 = (function __GT_t10813(cb__$1,flag__$1,alt_handler__$1,meta10814){return (new cljs.core.async.t10813(cb__$1,flag__$1,alt_handler__$1,meta10814));
});
}
return (new cljs.core.async.t10813(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10816_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10816_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3408__auto__ = wport;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10817 = (i + 1);
i = G__10817;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3408__auto__ = ret;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3396__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3396__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10818){var map__10820 = p__10818;var map__10820__$1 = ((cljs.core.seq_QMARK_.call(null,map__10820))?cljs.core.apply.call(null,cljs.core.hash_map,map__10820):map__10820);var opts = map__10820__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10818 = null;if (arguments.length > 1) {
  p__10818 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10818);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10821){
var ports = cljs.core.first(arglist__10821);
var p__10818 = cljs.core.rest(arglist__10821);
return alts_BANG___delegate(ports,p__10818);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10829 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10829 = (function (ch,f,map_LT_,meta10830){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10830 = meta10830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10829.cljs$lang$type = true;
cljs.core.async.t10829.cljs$lang$ctorStr = "cljs.core.async/t10829";
cljs.core.async.t10829.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10829");
});
cljs.core.async.t10829.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10829.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10829.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10829.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10832 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10832 = (function (fn1,_,meta10830,ch,f,map_LT_,meta10833){
this.fn1 = fn1;
this._ = _;
this.meta10830 = meta10830;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10833 = meta10833;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10832.cljs$lang$type = true;
cljs.core.async.t10832.cljs$lang$ctorStr = "cljs.core.async/t10832";
cljs.core.async.t10832.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10832");
});
cljs.core.async.t10832.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10832.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10822_SHARP_){return f1.call(null,(((p1__10822_SHARP_ == null))?null:self__.f.call(null,p1__10822_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10834){var self__ = this;
var _10834__$1 = this;return self__.meta10833;
});
cljs.core.async.t10832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10834,meta10833__$1){var self__ = this;
var _10834__$1 = this;return (new cljs.core.async.t10832(self__.fn1,self__._,self__.meta10830,self__.ch,self__.f,self__.map_LT_,meta10833__$1));
});
cljs.core.async.__GT_t10832 = (function __GT_t10832(fn1__$1,___$2,meta10830__$1,ch__$2,f__$2,map_LT___$2,meta10833){return (new cljs.core.async.t10832(fn1__$1,___$2,meta10830__$1,ch__$2,f__$2,map_LT___$2,meta10833));
});
}
return (new cljs.core.async.t10832(fn1,___$1,self__.meta10830,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3396__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10829.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10829.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10831){var self__ = this;
var _10831__$1 = this;return self__.meta10830;
});
cljs.core.async.t10829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10831,meta10830__$1){var self__ = this;
var _10831__$1 = this;return (new cljs.core.async.t10829(self__.ch,self__.f,self__.map_LT_,meta10830__$1));
});
cljs.core.async.__GT_t10829 = (function __GT_t10829(ch__$1,f__$1,map_LT___$1,meta10830){return (new cljs.core.async.t10829(ch__$1,f__$1,map_LT___$1,meta10830));
});
}
return (new cljs.core.async.t10829(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10838 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10838 = (function (ch,f,map_GT_,meta10839){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10839 = meta10839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10838.cljs$lang$type = true;
cljs.core.async.t10838.cljs$lang$ctorStr = "cljs.core.async/t10838";
cljs.core.async.t10838.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10838");
});
cljs.core.async.t10838.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10838.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10838.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10838.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10838.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10838.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10840){var self__ = this;
var _10840__$1 = this;return self__.meta10839;
});
cljs.core.async.t10838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10840,meta10839__$1){var self__ = this;
var _10840__$1 = this;return (new cljs.core.async.t10838(self__.ch,self__.f,self__.map_GT_,meta10839__$1));
});
cljs.core.async.__GT_t10838 = (function __GT_t10838(ch__$1,f__$1,map_GT___$1,meta10839){return (new cljs.core.async.t10838(ch__$1,f__$1,map_GT___$1,meta10839));
});
}
return (new cljs.core.async.t10838(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10844 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10844 = (function (ch,p,filter_GT_,meta10845){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10845 = meta10845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10844.cljs$lang$type = true;
cljs.core.async.t10844.cljs$lang$ctorStr = "cljs.core.async/t10844";
cljs.core.async.t10844.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10844");
});
cljs.core.async.t10844.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10844.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10844.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10844.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10844.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10844.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10846){var self__ = this;
var _10846__$1 = this;return self__.meta10845;
});
cljs.core.async.t10844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10846,meta10845__$1){var self__ = this;
var _10846__$1 = this;return (new cljs.core.async.t10844(self__.ch,self__.p,self__.filter_GT_,meta10845__$1));
});
cljs.core.async.__GT_t10844 = (function __GT_t10844(ch__$1,p__$1,filter_GT___$1,meta10845){return (new cljs.core.async.t10844(ch__$1,p__$1,filter_GT___$1,meta10845));
});
}
return (new cljs.core.async.t10844(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___10929 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_10908){var state_val_10909 = (state_10908[1]);if((state_val_10909 === 1))
{var state_10908__$1 = state_10908;var statearr_10910_10930 = state_10908__$1;(statearr_10910_10930[2] = null);
(statearr_10910_10930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10909 === 2))
{var state_10908__$1 = state_10908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10908__$1,4,ch);
} else
{if((state_val_10909 === 3))
{var inst_10906 = (state_10908[2]);var state_10908__$1 = state_10908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10908__$1,inst_10906);
} else
{if((state_val_10909 === 4))
{var inst_10890 = (state_10908[7]);var inst_10890__$1 = (state_10908[2]);var inst_10891 = (inst_10890__$1 == null);var state_10908__$1 = (function (){var statearr_10911 = state_10908;(statearr_10911[7] = inst_10890__$1);
return statearr_10911;
})();if(cljs.core.truth_(inst_10891))
{var statearr_10912_10931 = state_10908__$1;(statearr_10912_10931[1] = 5);
} else
{var statearr_10913_10932 = state_10908__$1;(statearr_10913_10932[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10909 === 5))
{var inst_10893 = cljs.core.async.close_BANG_.call(null,out);var state_10908__$1 = state_10908;var statearr_10914_10933 = state_10908__$1;(statearr_10914_10933[2] = inst_10893);
(statearr_10914_10933[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10909 === 6))
{var inst_10890 = (state_10908[7]);var inst_10895 = p.call(null,inst_10890);var state_10908__$1 = state_10908;if(cljs.core.truth_(inst_10895))
{var statearr_10915_10934 = state_10908__$1;(statearr_10915_10934[1] = 8);
} else
{var statearr_10916_10935 = state_10908__$1;(statearr_10916_10935[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10909 === 7))
{var inst_10904 = (state_10908[2]);var state_10908__$1 = state_10908;var statearr_10917_10936 = state_10908__$1;(statearr_10917_10936[2] = inst_10904);
(statearr_10917_10936[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10909 === 8))
{var inst_10890 = (state_10908[7]);var state_10908__$1 = state_10908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10908__$1,11,out,inst_10890);
} else
{if((state_val_10909 === 9))
{var state_10908__$1 = state_10908;var statearr_10918_10937 = state_10908__$1;(statearr_10918_10937[2] = null);
(statearr_10918_10937[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10909 === 10))
{var inst_10901 = (state_10908[2]);var state_10908__$1 = (function (){var statearr_10919 = state_10908;(statearr_10919[8] = inst_10901);
return statearr_10919;
})();var statearr_10920_10938 = state_10908__$1;(statearr_10920_10938[2] = null);
(statearr_10920_10938[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10909 === 11))
{var inst_10898 = (state_10908[2]);var state_10908__$1 = state_10908;var statearr_10921_10939 = state_10908__$1;(statearr_10921_10939[2] = inst_10898);
(statearr_10921_10939[1] = 10);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_10925 = [null,null,null,null,null,null,null,null,null];(statearr_10925[0] = state_machine__6161__auto__);
(statearr_10925[1] = 1);
return statearr_10925;
});
var state_machine__6161__auto____1 = (function (state_10908){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_10908);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e10926){if((e10926 instanceof Object))
{var ex__6164__auto__ = e10926;var statearr_10927_10940 = state_10908;(statearr_10927_10940[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10908);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10926;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10941 = state_10908;
state_10908 = G__10941;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_10908){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_10908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_10928 = f__6176__auto__.call(null);(statearr_10928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___10929);
return statearr_10928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11093){var state_val_11094 = (state_11093[1]);if((state_val_11094 === 1))
{var state_11093__$1 = state_11093;var statearr_11095_11132 = state_11093__$1;(statearr_11095_11132[2] = null);
(statearr_11095_11132[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 2))
{var state_11093__$1 = state_11093;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11093__$1,4,in$);
} else
{if((state_val_11094 === 3))
{var inst_11091 = (state_11093[2]);var state_11093__$1 = state_11093;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11093__$1,inst_11091);
} else
{if((state_val_11094 === 4))
{var inst_11039 = (state_11093[7]);var inst_11039__$1 = (state_11093[2]);var inst_11040 = (inst_11039__$1 == null);var state_11093__$1 = (function (){var statearr_11096 = state_11093;(statearr_11096[7] = inst_11039__$1);
return statearr_11096;
})();if(cljs.core.truth_(inst_11040))
{var statearr_11097_11133 = state_11093__$1;(statearr_11097_11133[1] = 5);
} else
{var statearr_11098_11134 = state_11093__$1;(statearr_11098_11134[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 5))
{var inst_11042 = cljs.core.async.close_BANG_.call(null,out);var state_11093__$1 = state_11093;var statearr_11099_11135 = state_11093__$1;(statearr_11099_11135[2] = inst_11042);
(statearr_11099_11135[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 6))
{var inst_11039 = (state_11093[7]);var inst_11044 = f.call(null,inst_11039);var inst_11049 = cljs.core.seq.call(null,inst_11044);var inst_11050 = inst_11049;var inst_11051 = null;var inst_11052 = 0;var inst_11053 = 0;var state_11093__$1 = (function (){var statearr_11100 = state_11093;(statearr_11100[8] = inst_11052);
(statearr_11100[9] = inst_11053);
(statearr_11100[10] = inst_11051);
(statearr_11100[11] = inst_11050);
return statearr_11100;
})();var statearr_11101_11136 = state_11093__$1;(statearr_11101_11136[2] = null);
(statearr_11101_11136[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 7))
{var inst_11089 = (state_11093[2]);var state_11093__$1 = state_11093;var statearr_11102_11137 = state_11093__$1;(statearr_11102_11137[2] = inst_11089);
(statearr_11102_11137[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 8))
{var inst_11052 = (state_11093[8]);var inst_11053 = (state_11093[9]);var inst_11055 = (inst_11053 < inst_11052);var inst_11056 = inst_11055;var state_11093__$1 = state_11093;if(cljs.core.truth_(inst_11056))
{var statearr_11103_11138 = state_11093__$1;(statearr_11103_11138[1] = 10);
} else
{var statearr_11104_11139 = state_11093__$1;(statearr_11104_11139[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 9))
{var inst_11086 = (state_11093[2]);var state_11093__$1 = (function (){var statearr_11105 = state_11093;(statearr_11105[12] = inst_11086);
return statearr_11105;
})();var statearr_11106_11140 = state_11093__$1;(statearr_11106_11140[2] = null);
(statearr_11106_11140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 10))
{var inst_11053 = (state_11093[9]);var inst_11051 = (state_11093[10]);var inst_11058 = cljs.core._nth.call(null,inst_11051,inst_11053);var state_11093__$1 = state_11093;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11093__$1,13,out,inst_11058);
} else
{if((state_val_11094 === 11))
{var inst_11050 = (state_11093[11]);var inst_11064 = (state_11093[13]);var inst_11064__$1 = cljs.core.seq.call(null,inst_11050);var state_11093__$1 = (function (){var statearr_11110 = state_11093;(statearr_11110[13] = inst_11064__$1);
return statearr_11110;
})();if(inst_11064__$1)
{var statearr_11111_11141 = state_11093__$1;(statearr_11111_11141[1] = 14);
} else
{var statearr_11112_11142 = state_11093__$1;(statearr_11112_11142[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 12))
{var inst_11084 = (state_11093[2]);var state_11093__$1 = state_11093;var statearr_11113_11143 = state_11093__$1;(statearr_11113_11143[2] = inst_11084);
(statearr_11113_11143[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 13))
{var inst_11052 = (state_11093[8]);var inst_11053 = (state_11093[9]);var inst_11051 = (state_11093[10]);var inst_11050 = (state_11093[11]);var inst_11060 = (state_11093[2]);var inst_11061 = (inst_11053 + 1);var tmp11107 = inst_11052;var tmp11108 = inst_11051;var tmp11109 = inst_11050;var inst_11050__$1 = tmp11109;var inst_11051__$1 = tmp11108;var inst_11052__$1 = tmp11107;var inst_11053__$1 = inst_11061;var state_11093__$1 = (function (){var statearr_11114 = state_11093;(statearr_11114[8] = inst_11052__$1);
(statearr_11114[9] = inst_11053__$1);
(statearr_11114[10] = inst_11051__$1);
(statearr_11114[11] = inst_11050__$1);
(statearr_11114[14] = inst_11060);
return statearr_11114;
})();var statearr_11115_11144 = state_11093__$1;(statearr_11115_11144[2] = null);
(statearr_11115_11144[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 14))
{var inst_11064 = (state_11093[13]);var inst_11066 = cljs.core.chunked_seq_QMARK_.call(null,inst_11064);var state_11093__$1 = state_11093;if(inst_11066)
{var statearr_11116_11145 = state_11093__$1;(statearr_11116_11145[1] = 17);
} else
{var statearr_11117_11146 = state_11093__$1;(statearr_11117_11146[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 15))
{var state_11093__$1 = state_11093;var statearr_11118_11147 = state_11093__$1;(statearr_11118_11147[2] = null);
(statearr_11118_11147[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 16))
{var inst_11082 = (state_11093[2]);var state_11093__$1 = state_11093;var statearr_11119_11148 = state_11093__$1;(statearr_11119_11148[2] = inst_11082);
(statearr_11119_11148[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 17))
{var inst_11064 = (state_11093[13]);var inst_11068 = cljs.core.chunk_first.call(null,inst_11064);var inst_11069 = cljs.core.chunk_rest.call(null,inst_11064);var inst_11070 = cljs.core.count.call(null,inst_11068);var inst_11050 = inst_11069;var inst_11051 = inst_11068;var inst_11052 = inst_11070;var inst_11053 = 0;var state_11093__$1 = (function (){var statearr_11120 = state_11093;(statearr_11120[8] = inst_11052);
(statearr_11120[9] = inst_11053);
(statearr_11120[10] = inst_11051);
(statearr_11120[11] = inst_11050);
return statearr_11120;
})();var statearr_11121_11149 = state_11093__$1;(statearr_11121_11149[2] = null);
(statearr_11121_11149[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 18))
{var inst_11064 = (state_11093[13]);var inst_11073 = cljs.core.first.call(null,inst_11064);var state_11093__$1 = state_11093;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11093__$1,20,out,inst_11073);
} else
{if((state_val_11094 === 19))
{var inst_11079 = (state_11093[2]);var state_11093__$1 = state_11093;var statearr_11122_11150 = state_11093__$1;(statearr_11122_11150[2] = inst_11079);
(statearr_11122_11150[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 20))
{var inst_11064 = (state_11093[13]);var inst_11075 = (state_11093[2]);var inst_11076 = cljs.core.next.call(null,inst_11064);var inst_11050 = inst_11076;var inst_11051 = null;var inst_11052 = 0;var inst_11053 = 0;var state_11093__$1 = (function (){var statearr_11123 = state_11093;(statearr_11123[8] = inst_11052);
(statearr_11123[9] = inst_11053);
(statearr_11123[10] = inst_11051);
(statearr_11123[11] = inst_11050);
(statearr_11123[15] = inst_11075);
return statearr_11123;
})();var statearr_11124_11151 = state_11093__$1;(statearr_11124_11151[2] = null);
(statearr_11124_11151[1] = 8);
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
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11128[0] = state_machine__6161__auto__);
(statearr_11128[1] = 1);
return statearr_11128;
});
var state_machine__6161__auto____1 = (function (state_11093){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11093);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11129){if((e11129 instanceof Object))
{var ex__6164__auto__ = e11129;var statearr_11130_11152 = state_11093;(statearr_11130_11152[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11093);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11153 = state_11093;
state_11093 = G__11153;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11093){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11131 = f__6176__auto__.call(null);(statearr_11131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_11131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return c__6175__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6175__auto___11234 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11213){var state_val_11214 = (state_11213[1]);if((state_val_11214 === 1))
{var state_11213__$1 = state_11213;var statearr_11215_11235 = state_11213__$1;(statearr_11215_11235[2] = null);
(statearr_11215_11235[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11214 === 2))
{var state_11213__$1 = state_11213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11213__$1,4,from);
} else
{if((state_val_11214 === 3))
{var inst_11211 = (state_11213[2]);var state_11213__$1 = state_11213;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11213__$1,inst_11211);
} else
{if((state_val_11214 === 4))
{var inst_11196 = (state_11213[7]);var inst_11196__$1 = (state_11213[2]);var inst_11197 = (inst_11196__$1 == null);var state_11213__$1 = (function (){var statearr_11216 = state_11213;(statearr_11216[7] = inst_11196__$1);
return statearr_11216;
})();if(cljs.core.truth_(inst_11197))
{var statearr_11217_11236 = state_11213__$1;(statearr_11217_11236[1] = 5);
} else
{var statearr_11218_11237 = state_11213__$1;(statearr_11218_11237[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11214 === 5))
{var state_11213__$1 = state_11213;if(cljs.core.truth_(close_QMARK_))
{var statearr_11219_11238 = state_11213__$1;(statearr_11219_11238[1] = 8);
} else
{var statearr_11220_11239 = state_11213__$1;(statearr_11220_11239[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11214 === 6))
{var inst_11196 = (state_11213[7]);var state_11213__$1 = state_11213;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11213__$1,11,to,inst_11196);
} else
{if((state_val_11214 === 7))
{var inst_11209 = (state_11213[2]);var state_11213__$1 = state_11213;var statearr_11221_11240 = state_11213__$1;(statearr_11221_11240[2] = inst_11209);
(statearr_11221_11240[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11214 === 8))
{var inst_11200 = cljs.core.async.close_BANG_.call(null,to);var state_11213__$1 = state_11213;var statearr_11222_11241 = state_11213__$1;(statearr_11222_11241[2] = inst_11200);
(statearr_11222_11241[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11214 === 9))
{var state_11213__$1 = state_11213;var statearr_11223_11242 = state_11213__$1;(statearr_11223_11242[2] = null);
(statearr_11223_11242[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11214 === 10))
{var inst_11203 = (state_11213[2]);var state_11213__$1 = state_11213;var statearr_11224_11243 = state_11213__$1;(statearr_11224_11243[2] = inst_11203);
(statearr_11224_11243[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11214 === 11))
{var inst_11206 = (state_11213[2]);var state_11213__$1 = (function (){var statearr_11225 = state_11213;(statearr_11225[8] = inst_11206);
return statearr_11225;
})();var statearr_11226_11244 = state_11213__$1;(statearr_11226_11244[2] = null);
(statearr_11226_11244[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11230 = [null,null,null,null,null,null,null,null,null];(statearr_11230[0] = state_machine__6161__auto__);
(statearr_11230[1] = 1);
return statearr_11230;
});
var state_machine__6161__auto____1 = (function (state_11213){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11213);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11231){if((e11231 instanceof Object))
{var ex__6164__auto__ = e11231;var statearr_11232_11245 = state_11213;(statearr_11232_11245[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11213);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11246 = state_11213;
state_11213 = G__11246;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11213){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11233 = f__6176__auto__.call(null);(statearr_11233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___11234);
return statearr_11233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6175__auto___11333 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11311){var state_val_11312 = (state_11311[1]);if((state_val_11312 === 1))
{var state_11311__$1 = state_11311;var statearr_11313_11334 = state_11311__$1;(statearr_11313_11334[2] = null);
(statearr_11313_11334[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11312 === 2))
{var state_11311__$1 = state_11311;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11311__$1,4,ch);
} else
{if((state_val_11312 === 3))
{var inst_11309 = (state_11311[2]);var state_11311__$1 = state_11311;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11311__$1,inst_11309);
} else
{if((state_val_11312 === 4))
{var inst_11292 = (state_11311[7]);var inst_11292__$1 = (state_11311[2]);var inst_11293 = (inst_11292__$1 == null);var state_11311__$1 = (function (){var statearr_11314 = state_11311;(statearr_11314[7] = inst_11292__$1);
return statearr_11314;
})();if(cljs.core.truth_(inst_11293))
{var statearr_11315_11335 = state_11311__$1;(statearr_11315_11335[1] = 5);
} else
{var statearr_11316_11336 = state_11311__$1;(statearr_11316_11336[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11312 === 5))
{var inst_11295 = cljs.core.async.close_BANG_.call(null,tc);var inst_11296 = cljs.core.async.close_BANG_.call(null,fc);var state_11311__$1 = (function (){var statearr_11317 = state_11311;(statearr_11317[8] = inst_11295);
return statearr_11317;
})();var statearr_11318_11337 = state_11311__$1;(statearr_11318_11337[2] = inst_11296);
(statearr_11318_11337[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11312 === 6))
{var inst_11292 = (state_11311[7]);var inst_11298 = p.call(null,inst_11292);var state_11311__$1 = state_11311;if(cljs.core.truth_(inst_11298))
{var statearr_11319_11338 = state_11311__$1;(statearr_11319_11338[1] = 9);
} else
{var statearr_11320_11339 = state_11311__$1;(statearr_11320_11339[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11312 === 7))
{var inst_11307 = (state_11311[2]);var state_11311__$1 = state_11311;var statearr_11321_11340 = state_11311__$1;(statearr_11321_11340[2] = inst_11307);
(statearr_11321_11340[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11312 === 8))
{var inst_11304 = (state_11311[2]);var state_11311__$1 = (function (){var statearr_11322 = state_11311;(statearr_11322[9] = inst_11304);
return statearr_11322;
})();var statearr_11323_11341 = state_11311__$1;(statearr_11323_11341[2] = null);
(statearr_11323_11341[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11312 === 9))
{var state_11311__$1 = state_11311;var statearr_11324_11342 = state_11311__$1;(statearr_11324_11342[2] = tc);
(statearr_11324_11342[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11312 === 10))
{var state_11311__$1 = state_11311;var statearr_11325_11343 = state_11311__$1;(statearr_11325_11343[2] = fc);
(statearr_11325_11343[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11312 === 11))
{var inst_11292 = (state_11311[7]);var inst_11302 = (state_11311[2]);var state_11311__$1 = state_11311;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11311__$1,8,inst_11302,inst_11292);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11329 = [null,null,null,null,null,null,null,null,null,null];(statearr_11329[0] = state_machine__6161__auto__);
(statearr_11329[1] = 1);
return statearr_11329;
});
var state_machine__6161__auto____1 = (function (state_11311){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11311);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11330){if((e11330 instanceof Object))
{var ex__6164__auto__ = e11330;var statearr_11331_11344 = state_11311;(statearr_11331_11344[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11311);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11330;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11345 = state_11311;
state_11311 = G__11345;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11311){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11332 = f__6176__auto__.call(null);(statearr_11332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___11333);
return statearr_11332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11392){var state_val_11393 = (state_11392[1]);if((state_val_11393 === 7))
{var inst_11388 = (state_11392[2]);var state_11392__$1 = state_11392;var statearr_11394_11410 = state_11392__$1;(statearr_11394_11410[2] = inst_11388);
(statearr_11394_11410[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11393 === 6))
{var inst_11378 = (state_11392[7]);var inst_11381 = (state_11392[8]);var inst_11385 = f.call(null,inst_11378,inst_11381);var inst_11378__$1 = inst_11385;var state_11392__$1 = (function (){var statearr_11395 = state_11392;(statearr_11395[7] = inst_11378__$1);
return statearr_11395;
})();var statearr_11396_11411 = state_11392__$1;(statearr_11396_11411[2] = null);
(statearr_11396_11411[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11393 === 5))
{var inst_11378 = (state_11392[7]);var state_11392__$1 = state_11392;var statearr_11397_11412 = state_11392__$1;(statearr_11397_11412[2] = inst_11378);
(statearr_11397_11412[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11393 === 4))
{var inst_11381 = (state_11392[8]);var inst_11381__$1 = (state_11392[2]);var inst_11382 = (inst_11381__$1 == null);var state_11392__$1 = (function (){var statearr_11398 = state_11392;(statearr_11398[8] = inst_11381__$1);
return statearr_11398;
})();if(cljs.core.truth_(inst_11382))
{var statearr_11399_11413 = state_11392__$1;(statearr_11399_11413[1] = 5);
} else
{var statearr_11400_11414 = state_11392__$1;(statearr_11400_11414[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11393 === 3))
{var inst_11390 = (state_11392[2]);var state_11392__$1 = state_11392;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11392__$1,inst_11390);
} else
{if((state_val_11393 === 2))
{var state_11392__$1 = state_11392;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11392__$1,4,ch);
} else
{if((state_val_11393 === 1))
{var inst_11378 = init;var state_11392__$1 = (function (){var statearr_11401 = state_11392;(statearr_11401[7] = inst_11378);
return statearr_11401;
})();var statearr_11402_11415 = state_11392__$1;(statearr_11402_11415[2] = null);
(statearr_11402_11415[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11406 = [null,null,null,null,null,null,null,null,null];(statearr_11406[0] = state_machine__6161__auto__);
(statearr_11406[1] = 1);
return statearr_11406;
});
var state_machine__6161__auto____1 = (function (state_11392){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11392);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11407){if((e11407 instanceof Object))
{var ex__6164__auto__ = e11407;var statearr_11408_11416 = state_11392;(statearr_11408_11416[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11392);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11407;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11417 = state_11392;
state_11392 = G__11417;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11392){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11409 = f__6176__auto__.call(null);(statearr_11409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_11409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return c__6175__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11479){var state_val_11480 = (state_11479[1]);if((state_val_11480 === 1))
{var inst_11459 = cljs.core.seq.call(null,coll);var inst_11460 = inst_11459;var state_11479__$1 = (function (){var statearr_11481 = state_11479;(statearr_11481[7] = inst_11460);
return statearr_11481;
})();var statearr_11482_11500 = state_11479__$1;(statearr_11482_11500[2] = null);
(statearr_11482_11500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11480 === 2))
{var inst_11460 = (state_11479[7]);var state_11479__$1 = state_11479;if(cljs.core.truth_(inst_11460))
{var statearr_11483_11501 = state_11479__$1;(statearr_11483_11501[1] = 4);
} else
{var statearr_11484_11502 = state_11479__$1;(statearr_11484_11502[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11480 === 3))
{var inst_11477 = (state_11479[2]);var state_11479__$1 = state_11479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11479__$1,inst_11477);
} else
{if((state_val_11480 === 4))
{var inst_11460 = (state_11479[7]);var inst_11463 = cljs.core.first.call(null,inst_11460);var state_11479__$1 = state_11479;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11479__$1,7,ch,inst_11463);
} else
{if((state_val_11480 === 5))
{var state_11479__$1 = state_11479;if(cljs.core.truth_(close_QMARK_))
{var statearr_11485_11503 = state_11479__$1;(statearr_11485_11503[1] = 8);
} else
{var statearr_11486_11504 = state_11479__$1;(statearr_11486_11504[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11480 === 6))
{var inst_11475 = (state_11479[2]);var state_11479__$1 = state_11479;var statearr_11487_11505 = state_11479__$1;(statearr_11487_11505[2] = inst_11475);
(statearr_11487_11505[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11480 === 7))
{var inst_11460 = (state_11479[7]);var inst_11465 = (state_11479[2]);var inst_11466 = cljs.core.next.call(null,inst_11460);var inst_11460__$1 = inst_11466;var state_11479__$1 = (function (){var statearr_11488 = state_11479;(statearr_11488[8] = inst_11465);
(statearr_11488[7] = inst_11460__$1);
return statearr_11488;
})();var statearr_11489_11506 = state_11479__$1;(statearr_11489_11506[2] = null);
(statearr_11489_11506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11480 === 8))
{var inst_11470 = cljs.core.async.close_BANG_.call(null,ch);var state_11479__$1 = state_11479;var statearr_11490_11507 = state_11479__$1;(statearr_11490_11507[2] = inst_11470);
(statearr_11490_11507[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11480 === 9))
{var state_11479__$1 = state_11479;var statearr_11491_11508 = state_11479__$1;(statearr_11491_11508[2] = null);
(statearr_11491_11508[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11480 === 10))
{var inst_11473 = (state_11479[2]);var state_11479__$1 = state_11479;var statearr_11492_11509 = state_11479__$1;(statearr_11492_11509[2] = inst_11473);
(statearr_11492_11509[1] = 6);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11496 = [null,null,null,null,null,null,null,null,null];(statearr_11496[0] = state_machine__6161__auto__);
(statearr_11496[1] = 1);
return statearr_11496;
});
var state_machine__6161__auto____1 = (function (state_11479){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11479);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11497){if((e11497 instanceof Object))
{var ex__6164__auto__ = e11497;var statearr_11498_11510 = state_11479;(statearr_11498_11510[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11479);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11497;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11511 = state_11479;
state_11479 = G__11511;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11479){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11499 = f__6176__auto__.call(null);(statearr_11499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_11499;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return c__6175__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11513 = {};return obj11513;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3396__auto__ = _;if(and__3396__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4029__auto__ = (((_ == null))?null:_);return (function (){var or__3408__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11515 = {};return obj11515;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11739 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11739 = (function (cs,ch,mult,meta11740){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11740 = meta11740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11739.cljs$lang$type = true;
cljs.core.async.t11739.cljs$lang$ctorStr = "cljs.core.async/t11739";
cljs.core.async.t11739.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11739");
});})(cs))
;
cljs.core.async.t11739.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11739.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11739.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11739.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11739.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11739.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11741){var self__ = this;
var _11741__$1 = this;return self__.meta11740;
});})(cs))
;
cljs.core.async.t11739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11741,meta11740__$1){var self__ = this;
var _11741__$1 = this;return (new cljs.core.async.t11739(self__.cs,self__.ch,self__.mult,meta11740__$1));
});})(cs))
;
cljs.core.async.__GT_t11739 = ((function (cs){
return (function __GT_t11739(cs__$1,ch__$1,mult__$1,meta11740){return (new cljs.core.async.t11739(cs__$1,ch__$1,mult__$1,meta11740));
});})(cs))
;
}
return (new cljs.core.async.t11739(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6175__auto___11962 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11876){var state_val_11877 = (state_11876[1]);if((state_val_11877 === 32))
{var inst_11820 = (state_11876[7]);var inst_11744 = (state_11876[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11876,31,Object,null,30);var inst_11827 = cljs.core.async.put_BANG_.call(null,inst_11820,inst_11744,done);var state_11876__$1 = state_11876;var statearr_11878_11963 = state_11876__$1;(statearr_11878_11963[2] = inst_11827);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11876__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 1))
{var state_11876__$1 = state_11876;var statearr_11879_11964 = state_11876__$1;(statearr_11879_11964[2] = null);
(statearr_11879_11964[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 33))
{var inst_11833 = (state_11876[9]);var inst_11835 = cljs.core.chunked_seq_QMARK_.call(null,inst_11833);var state_11876__$1 = state_11876;if(inst_11835)
{var statearr_11880_11965 = state_11876__$1;(statearr_11880_11965[1] = 36);
} else
{var statearr_11881_11966 = state_11876__$1;(statearr_11881_11966[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 2))
{var state_11876__$1 = state_11876;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11876__$1,4,ch);
} else
{if((state_val_11877 === 34))
{var state_11876__$1 = state_11876;var statearr_11882_11967 = state_11876__$1;(statearr_11882_11967[2] = null);
(statearr_11882_11967[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 3))
{var inst_11874 = (state_11876[2]);var state_11876__$1 = state_11876;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11876__$1,inst_11874);
} else
{if((state_val_11877 === 35))
{var inst_11858 = (state_11876[2]);var state_11876__$1 = state_11876;var statearr_11883_11968 = state_11876__$1;(statearr_11883_11968[2] = inst_11858);
(statearr_11883_11968[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 4))
{var inst_11744 = (state_11876[8]);var inst_11744__$1 = (state_11876[2]);var inst_11745 = (inst_11744__$1 == null);var state_11876__$1 = (function (){var statearr_11884 = state_11876;(statearr_11884[8] = inst_11744__$1);
return statearr_11884;
})();if(cljs.core.truth_(inst_11745))
{var statearr_11885_11969 = state_11876__$1;(statearr_11885_11969[1] = 5);
} else
{var statearr_11886_11970 = state_11876__$1;(statearr_11886_11970[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 36))
{var inst_11833 = (state_11876[9]);var inst_11837 = cljs.core.chunk_first.call(null,inst_11833);var inst_11838 = cljs.core.chunk_rest.call(null,inst_11833);var inst_11839 = cljs.core.count.call(null,inst_11837);var inst_11812 = inst_11838;var inst_11813 = inst_11837;var inst_11814 = inst_11839;var inst_11815 = 0;var state_11876__$1 = (function (){var statearr_11887 = state_11876;(statearr_11887[10] = inst_11813);
(statearr_11887[11] = inst_11812);
(statearr_11887[12] = inst_11815);
(statearr_11887[13] = inst_11814);
return statearr_11887;
})();var statearr_11888_11971 = state_11876__$1;(statearr_11888_11971[2] = null);
(statearr_11888_11971[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 5))
{var inst_11751 = cljs.core.deref.call(null,cs);var inst_11752 = cljs.core.seq.call(null,inst_11751);var inst_11753 = inst_11752;var inst_11754 = null;var inst_11755 = 0;var inst_11756 = 0;var state_11876__$1 = (function (){var statearr_11889 = state_11876;(statearr_11889[14] = inst_11753);
(statearr_11889[15] = inst_11754);
(statearr_11889[16] = inst_11755);
(statearr_11889[17] = inst_11756);
return statearr_11889;
})();var statearr_11890_11972 = state_11876__$1;(statearr_11890_11972[2] = null);
(statearr_11890_11972[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 37))
{var inst_11833 = (state_11876[9]);var inst_11842 = cljs.core.first.call(null,inst_11833);var state_11876__$1 = (function (){var statearr_11891 = state_11876;(statearr_11891[18] = inst_11842);
return statearr_11891;
})();var statearr_11892_11973 = state_11876__$1;(statearr_11892_11973[2] = null);
(statearr_11892_11973[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 6))
{var inst_11804 = (state_11876[19]);var inst_11803 = cljs.core.deref.call(null,cs);var inst_11804__$1 = cljs.core.keys.call(null,inst_11803);var inst_11805 = cljs.core.count.call(null,inst_11804__$1);var inst_11806 = cljs.core.reset_BANG_.call(null,dctr,inst_11805);var inst_11811 = cljs.core.seq.call(null,inst_11804__$1);var inst_11812 = inst_11811;var inst_11813 = null;var inst_11814 = 0;var inst_11815 = 0;var state_11876__$1 = (function (){var statearr_11893 = state_11876;(statearr_11893[19] = inst_11804__$1);
(statearr_11893[20] = inst_11806);
(statearr_11893[10] = inst_11813);
(statearr_11893[11] = inst_11812);
(statearr_11893[12] = inst_11815);
(statearr_11893[13] = inst_11814);
return statearr_11893;
})();var statearr_11894_11974 = state_11876__$1;(statearr_11894_11974[2] = null);
(statearr_11894_11974[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 38))
{var inst_11855 = (state_11876[2]);var state_11876__$1 = state_11876;var statearr_11895_11975 = state_11876__$1;(statearr_11895_11975[2] = inst_11855);
(statearr_11895_11975[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 7))
{var inst_11872 = (state_11876[2]);var state_11876__$1 = state_11876;var statearr_11896_11976 = state_11876__$1;(statearr_11896_11976[2] = inst_11872);
(statearr_11896_11976[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 39))
{var inst_11833 = (state_11876[9]);var inst_11851 = (state_11876[2]);var inst_11852 = cljs.core.next.call(null,inst_11833);var inst_11812 = inst_11852;var inst_11813 = null;var inst_11814 = 0;var inst_11815 = 0;var state_11876__$1 = (function (){var statearr_11897 = state_11876;(statearr_11897[21] = inst_11851);
(statearr_11897[10] = inst_11813);
(statearr_11897[11] = inst_11812);
(statearr_11897[12] = inst_11815);
(statearr_11897[13] = inst_11814);
return statearr_11897;
})();var statearr_11898_11977 = state_11876__$1;(statearr_11898_11977[2] = null);
(statearr_11898_11977[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 8))
{var inst_11755 = (state_11876[16]);var inst_11756 = (state_11876[17]);var inst_11758 = (inst_11756 < inst_11755);var inst_11759 = inst_11758;var state_11876__$1 = state_11876;if(cljs.core.truth_(inst_11759))
{var statearr_11899_11978 = state_11876__$1;(statearr_11899_11978[1] = 10);
} else
{var statearr_11900_11979 = state_11876__$1;(statearr_11900_11979[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 40))
{var inst_11842 = (state_11876[18]);var inst_11843 = (state_11876[2]);var inst_11844 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11845 = cljs.core.async.untap_STAR_.call(null,m,inst_11842);var state_11876__$1 = (function (){var statearr_11901 = state_11876;(statearr_11901[22] = inst_11843);
(statearr_11901[23] = inst_11844);
return statearr_11901;
})();var statearr_11902_11980 = state_11876__$1;(statearr_11902_11980[2] = inst_11845);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11876__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 9))
{var inst_11801 = (state_11876[2]);var state_11876__$1 = state_11876;var statearr_11903_11981 = state_11876__$1;(statearr_11903_11981[2] = inst_11801);
(statearr_11903_11981[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 41))
{var inst_11842 = (state_11876[18]);var inst_11744 = (state_11876[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11876,40,Object,null,39);var inst_11849 = cljs.core.async.put_BANG_.call(null,inst_11842,inst_11744,done);var state_11876__$1 = state_11876;var statearr_11904_11982 = state_11876__$1;(statearr_11904_11982[2] = inst_11849);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11876__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 10))
{var inst_11754 = (state_11876[15]);var inst_11756 = (state_11876[17]);var inst_11762 = cljs.core._nth.call(null,inst_11754,inst_11756);var inst_11763 = cljs.core.nth.call(null,inst_11762,0,null);var inst_11764 = cljs.core.nth.call(null,inst_11762,1,null);var state_11876__$1 = (function (){var statearr_11905 = state_11876;(statearr_11905[24] = inst_11763);
return statearr_11905;
})();if(cljs.core.truth_(inst_11764))
{var statearr_11906_11983 = state_11876__$1;(statearr_11906_11983[1] = 13);
} else
{var statearr_11907_11984 = state_11876__$1;(statearr_11907_11984[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 42))
{var state_11876__$1 = state_11876;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11876__$1,45,dchan);
} else
{if((state_val_11877 === 11))
{var inst_11773 = (state_11876[25]);var inst_11753 = (state_11876[14]);var inst_11773__$1 = cljs.core.seq.call(null,inst_11753);var state_11876__$1 = (function (){var statearr_11908 = state_11876;(statearr_11908[25] = inst_11773__$1);
return statearr_11908;
})();if(inst_11773__$1)
{var statearr_11909_11985 = state_11876__$1;(statearr_11909_11985[1] = 16);
} else
{var statearr_11910_11986 = state_11876__$1;(statearr_11910_11986[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 43))
{var state_11876__$1 = state_11876;var statearr_11911_11987 = state_11876__$1;(statearr_11911_11987[2] = null);
(statearr_11911_11987[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 12))
{var inst_11799 = (state_11876[2]);var state_11876__$1 = state_11876;var statearr_11912_11988 = state_11876__$1;(statearr_11912_11988[2] = inst_11799);
(statearr_11912_11988[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 44))
{var inst_11869 = (state_11876[2]);var state_11876__$1 = (function (){var statearr_11913 = state_11876;(statearr_11913[26] = inst_11869);
return statearr_11913;
})();var statearr_11914_11989 = state_11876__$1;(statearr_11914_11989[2] = null);
(statearr_11914_11989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 13))
{var inst_11763 = (state_11876[24]);var inst_11766 = cljs.core.async.close_BANG_.call(null,inst_11763);var state_11876__$1 = state_11876;var statearr_11915_11990 = state_11876__$1;(statearr_11915_11990[2] = inst_11766);
(statearr_11915_11990[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 45))
{var inst_11866 = (state_11876[2]);var state_11876__$1 = state_11876;var statearr_11919_11991 = state_11876__$1;(statearr_11919_11991[2] = inst_11866);
(statearr_11919_11991[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 14))
{var state_11876__$1 = state_11876;var statearr_11920_11992 = state_11876__$1;(statearr_11920_11992[2] = null);
(statearr_11920_11992[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 15))
{var inst_11753 = (state_11876[14]);var inst_11754 = (state_11876[15]);var inst_11755 = (state_11876[16]);var inst_11756 = (state_11876[17]);var inst_11769 = (state_11876[2]);var inst_11770 = (inst_11756 + 1);var tmp11916 = inst_11753;var tmp11917 = inst_11754;var tmp11918 = inst_11755;var inst_11753__$1 = tmp11916;var inst_11754__$1 = tmp11917;var inst_11755__$1 = tmp11918;var inst_11756__$1 = inst_11770;var state_11876__$1 = (function (){var statearr_11921 = state_11876;(statearr_11921[27] = inst_11769);
(statearr_11921[14] = inst_11753__$1);
(statearr_11921[15] = inst_11754__$1);
(statearr_11921[16] = inst_11755__$1);
(statearr_11921[17] = inst_11756__$1);
return statearr_11921;
})();var statearr_11922_11993 = state_11876__$1;(statearr_11922_11993[2] = null);
(statearr_11922_11993[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 16))
{var inst_11773 = (state_11876[25]);var inst_11775 = cljs.core.chunked_seq_QMARK_.call(null,inst_11773);var state_11876__$1 = state_11876;if(inst_11775)
{var statearr_11923_11994 = state_11876__$1;(statearr_11923_11994[1] = 19);
} else
{var statearr_11924_11995 = state_11876__$1;(statearr_11924_11995[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 17))
{var state_11876__$1 = state_11876;var statearr_11925_11996 = state_11876__$1;(statearr_11925_11996[2] = null);
(statearr_11925_11996[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 18))
{var inst_11797 = (state_11876[2]);var state_11876__$1 = state_11876;var statearr_11926_11997 = state_11876__$1;(statearr_11926_11997[2] = inst_11797);
(statearr_11926_11997[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 19))
{var inst_11773 = (state_11876[25]);var inst_11777 = cljs.core.chunk_first.call(null,inst_11773);var inst_11778 = cljs.core.chunk_rest.call(null,inst_11773);var inst_11779 = cljs.core.count.call(null,inst_11777);var inst_11753 = inst_11778;var inst_11754 = inst_11777;var inst_11755 = inst_11779;var inst_11756 = 0;var state_11876__$1 = (function (){var statearr_11927 = state_11876;(statearr_11927[14] = inst_11753);
(statearr_11927[15] = inst_11754);
(statearr_11927[16] = inst_11755);
(statearr_11927[17] = inst_11756);
return statearr_11927;
})();var statearr_11928_11998 = state_11876__$1;(statearr_11928_11998[2] = null);
(statearr_11928_11998[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 20))
{var inst_11773 = (state_11876[25]);var inst_11783 = cljs.core.first.call(null,inst_11773);var inst_11784 = cljs.core.nth.call(null,inst_11783,0,null);var inst_11785 = cljs.core.nth.call(null,inst_11783,1,null);var state_11876__$1 = (function (){var statearr_11929 = state_11876;(statearr_11929[28] = inst_11784);
return statearr_11929;
})();if(cljs.core.truth_(inst_11785))
{var statearr_11930_11999 = state_11876__$1;(statearr_11930_11999[1] = 22);
} else
{var statearr_11931_12000 = state_11876__$1;(statearr_11931_12000[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 21))
{var inst_11794 = (state_11876[2]);var state_11876__$1 = state_11876;var statearr_11932_12001 = state_11876__$1;(statearr_11932_12001[2] = inst_11794);
(statearr_11932_12001[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 22))
{var inst_11784 = (state_11876[28]);var inst_11787 = cljs.core.async.close_BANG_.call(null,inst_11784);var state_11876__$1 = state_11876;var statearr_11933_12002 = state_11876__$1;(statearr_11933_12002[2] = inst_11787);
(statearr_11933_12002[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 23))
{var state_11876__$1 = state_11876;var statearr_11934_12003 = state_11876__$1;(statearr_11934_12003[2] = null);
(statearr_11934_12003[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 24))
{var inst_11773 = (state_11876[25]);var inst_11790 = (state_11876[2]);var inst_11791 = cljs.core.next.call(null,inst_11773);var inst_11753 = inst_11791;var inst_11754 = null;var inst_11755 = 0;var inst_11756 = 0;var state_11876__$1 = (function (){var statearr_11935 = state_11876;(statearr_11935[29] = inst_11790);
(statearr_11935[14] = inst_11753);
(statearr_11935[15] = inst_11754);
(statearr_11935[16] = inst_11755);
(statearr_11935[17] = inst_11756);
return statearr_11935;
})();var statearr_11936_12004 = state_11876__$1;(statearr_11936_12004[2] = null);
(statearr_11936_12004[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 25))
{var inst_11815 = (state_11876[12]);var inst_11814 = (state_11876[13]);var inst_11817 = (inst_11815 < inst_11814);var inst_11818 = inst_11817;var state_11876__$1 = state_11876;if(cljs.core.truth_(inst_11818))
{var statearr_11937_12005 = state_11876__$1;(statearr_11937_12005[1] = 27);
} else
{var statearr_11938_12006 = state_11876__$1;(statearr_11938_12006[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 26))
{var inst_11804 = (state_11876[19]);var inst_11862 = (state_11876[2]);var inst_11863 = cljs.core.seq.call(null,inst_11804);var state_11876__$1 = (function (){var statearr_11939 = state_11876;(statearr_11939[30] = inst_11862);
return statearr_11939;
})();if(inst_11863)
{var statearr_11940_12007 = state_11876__$1;(statearr_11940_12007[1] = 42);
} else
{var statearr_11941_12008 = state_11876__$1;(statearr_11941_12008[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 27))
{var inst_11813 = (state_11876[10]);var inst_11815 = (state_11876[12]);var inst_11820 = cljs.core._nth.call(null,inst_11813,inst_11815);var state_11876__$1 = (function (){var statearr_11942 = state_11876;(statearr_11942[7] = inst_11820);
return statearr_11942;
})();var statearr_11943_12009 = state_11876__$1;(statearr_11943_12009[2] = null);
(statearr_11943_12009[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 28))
{var inst_11833 = (state_11876[9]);var inst_11812 = (state_11876[11]);var inst_11833__$1 = cljs.core.seq.call(null,inst_11812);var state_11876__$1 = (function (){var statearr_11947 = state_11876;(statearr_11947[9] = inst_11833__$1);
return statearr_11947;
})();if(inst_11833__$1)
{var statearr_11948_12010 = state_11876__$1;(statearr_11948_12010[1] = 33);
} else
{var statearr_11949_12011 = state_11876__$1;(statearr_11949_12011[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 29))
{var inst_11860 = (state_11876[2]);var state_11876__$1 = state_11876;var statearr_11950_12012 = state_11876__$1;(statearr_11950_12012[2] = inst_11860);
(statearr_11950_12012[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 30))
{var inst_11813 = (state_11876[10]);var inst_11812 = (state_11876[11]);var inst_11815 = (state_11876[12]);var inst_11814 = (state_11876[13]);var inst_11829 = (state_11876[2]);var inst_11830 = (inst_11815 + 1);var tmp11944 = inst_11813;var tmp11945 = inst_11812;var tmp11946 = inst_11814;var inst_11812__$1 = tmp11945;var inst_11813__$1 = tmp11944;var inst_11814__$1 = tmp11946;var inst_11815__$1 = inst_11830;var state_11876__$1 = (function (){var statearr_11951 = state_11876;(statearr_11951[31] = inst_11829);
(statearr_11951[10] = inst_11813__$1);
(statearr_11951[11] = inst_11812__$1);
(statearr_11951[12] = inst_11815__$1);
(statearr_11951[13] = inst_11814__$1);
return statearr_11951;
})();var statearr_11952_12013 = state_11876__$1;(statearr_11952_12013[2] = null);
(statearr_11952_12013[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 31))
{var inst_11820 = (state_11876[7]);var inst_11821 = (state_11876[2]);var inst_11822 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11823 = cljs.core.async.untap_STAR_.call(null,m,inst_11820);var state_11876__$1 = (function (){var statearr_11953 = state_11876;(statearr_11953[32] = inst_11821);
(statearr_11953[33] = inst_11822);
return statearr_11953;
})();var statearr_11954_12014 = state_11876__$1;(statearr_11954_12014[2] = inst_11823);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11876__$1);
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
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11958[0] = state_machine__6161__auto__);
(statearr_11958[1] = 1);
return statearr_11958;
});
var state_machine__6161__auto____1 = (function (state_11876){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11876);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11959){if((e11959 instanceof Object))
{var ex__6164__auto__ = e11959;var statearr_11960_12015 = state_11876;(statearr_11960_12015[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11876);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12016 = state_11876;
state_11876 = G__12016;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11876){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11961 = f__6176__auto__.call(null);(statearr_11961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___11962);
return statearr_11961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12018 = {};return obj12018;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12128 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12128 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12129){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12129 = meta12129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12128.cljs$lang$type = true;
cljs.core.async.t12128.cljs$lang$ctorStr = "cljs.core.async/t12128";
cljs.core.async.t12128.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12128");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12128.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12128.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12128.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12128.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12128.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12128.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12128.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12128.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12130){var self__ = this;
var _12130__$1 = this;return self__.meta12129;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12130,meta12129__$1){var self__ = this;
var _12130__$1 = this;return (new cljs.core.async.t12128(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12129__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12128 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12128(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12129){return (new cljs.core.async.t12128(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12129));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12128(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6175__auto___12237 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12195){var state_val_12196 = (state_12195[1]);if((state_val_12196 === 1))
{var inst_12134 = (state_12195[7]);var inst_12134__$1 = calc_state.call(null);var inst_12135 = cljs.core.seq_QMARK_.call(null,inst_12134__$1);var state_12195__$1 = (function (){var statearr_12197 = state_12195;(statearr_12197[7] = inst_12134__$1);
return statearr_12197;
})();if(inst_12135)
{var statearr_12198_12238 = state_12195__$1;(statearr_12198_12238[1] = 2);
} else
{var statearr_12199_12239 = state_12195__$1;(statearr_12199_12239[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 2))
{var inst_12134 = (state_12195[7]);var inst_12137 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12134);var state_12195__$1 = state_12195;var statearr_12200_12240 = state_12195__$1;(statearr_12200_12240[2] = inst_12137);
(statearr_12200_12240[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 3))
{var inst_12134 = (state_12195[7]);var state_12195__$1 = state_12195;var statearr_12201_12241 = state_12195__$1;(statearr_12201_12241[2] = inst_12134);
(statearr_12201_12241[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 4))
{var inst_12134 = (state_12195[7]);var inst_12140 = (state_12195[2]);var inst_12141 = cljs.core.get.call(null,inst_12140,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12142 = cljs.core.get.call(null,inst_12140,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12143 = cljs.core.get.call(null,inst_12140,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12144 = inst_12134;var state_12195__$1 = (function (){var statearr_12202 = state_12195;(statearr_12202[8] = inst_12143);
(statearr_12202[9] = inst_12144);
(statearr_12202[10] = inst_12141);
(statearr_12202[11] = inst_12142);
return statearr_12202;
})();var statearr_12203_12242 = state_12195__$1;(statearr_12203_12242[2] = null);
(statearr_12203_12242[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 5))
{var inst_12144 = (state_12195[9]);var inst_12147 = cljs.core.seq_QMARK_.call(null,inst_12144);var state_12195__$1 = state_12195;if(inst_12147)
{var statearr_12204_12243 = state_12195__$1;(statearr_12204_12243[1] = 7);
} else
{var statearr_12205_12244 = state_12195__$1;(statearr_12205_12244[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 6))
{var inst_12193 = (state_12195[2]);var state_12195__$1 = state_12195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12195__$1,inst_12193);
} else
{if((state_val_12196 === 7))
{var inst_12144 = (state_12195[9]);var inst_12149 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12144);var state_12195__$1 = state_12195;var statearr_12206_12245 = state_12195__$1;(statearr_12206_12245[2] = inst_12149);
(statearr_12206_12245[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 8))
{var inst_12144 = (state_12195[9]);var state_12195__$1 = state_12195;var statearr_12207_12246 = state_12195__$1;(statearr_12207_12246[2] = inst_12144);
(statearr_12207_12246[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 9))
{var inst_12152 = (state_12195[12]);var inst_12152__$1 = (state_12195[2]);var inst_12153 = cljs.core.get.call(null,inst_12152__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12154 = cljs.core.get.call(null,inst_12152__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12155 = cljs.core.get.call(null,inst_12152__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12195__$1 = (function (){var statearr_12208 = state_12195;(statearr_12208[13] = inst_12154);
(statearr_12208[14] = inst_12155);
(statearr_12208[12] = inst_12152__$1);
return statearr_12208;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12195__$1,10,inst_12153);
} else
{if((state_val_12196 === 10))
{var inst_12159 = (state_12195[15]);var inst_12160 = (state_12195[16]);var inst_12158 = (state_12195[2]);var inst_12159__$1 = cljs.core.nth.call(null,inst_12158,0,null);var inst_12160__$1 = cljs.core.nth.call(null,inst_12158,1,null);var inst_12161 = (inst_12159__$1 == null);var inst_12162 = cljs.core._EQ_.call(null,inst_12160__$1,change);var inst_12163 = (inst_12161) || (inst_12162);var state_12195__$1 = (function (){var statearr_12209 = state_12195;(statearr_12209[15] = inst_12159__$1);
(statearr_12209[16] = inst_12160__$1);
return statearr_12209;
})();if(cljs.core.truth_(inst_12163))
{var statearr_12210_12247 = state_12195__$1;(statearr_12210_12247[1] = 11);
} else
{var statearr_12211_12248 = state_12195__$1;(statearr_12211_12248[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 11))
{var inst_12159 = (state_12195[15]);var inst_12165 = (inst_12159 == null);var state_12195__$1 = state_12195;if(cljs.core.truth_(inst_12165))
{var statearr_12212_12249 = state_12195__$1;(statearr_12212_12249[1] = 14);
} else
{var statearr_12213_12250 = state_12195__$1;(statearr_12213_12250[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 12))
{var inst_12155 = (state_12195[14]);var inst_12160 = (state_12195[16]);var inst_12174 = (state_12195[17]);var inst_12174__$1 = inst_12155.call(null,inst_12160);var state_12195__$1 = (function (){var statearr_12214 = state_12195;(statearr_12214[17] = inst_12174__$1);
return statearr_12214;
})();if(cljs.core.truth_(inst_12174__$1))
{var statearr_12215_12251 = state_12195__$1;(statearr_12215_12251[1] = 17);
} else
{var statearr_12216_12252 = state_12195__$1;(statearr_12216_12252[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 13))
{var inst_12191 = (state_12195[2]);var state_12195__$1 = state_12195;var statearr_12217_12253 = state_12195__$1;(statearr_12217_12253[2] = inst_12191);
(statearr_12217_12253[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 14))
{var inst_12160 = (state_12195[16]);var inst_12167 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12160);var state_12195__$1 = state_12195;var statearr_12218_12254 = state_12195__$1;(statearr_12218_12254[2] = inst_12167);
(statearr_12218_12254[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 15))
{var state_12195__$1 = state_12195;var statearr_12219_12255 = state_12195__$1;(statearr_12219_12255[2] = null);
(statearr_12219_12255[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 16))
{var inst_12170 = (state_12195[2]);var inst_12171 = calc_state.call(null);var inst_12144 = inst_12171;var state_12195__$1 = (function (){var statearr_12220 = state_12195;(statearr_12220[9] = inst_12144);
(statearr_12220[18] = inst_12170);
return statearr_12220;
})();var statearr_12221_12256 = state_12195__$1;(statearr_12221_12256[2] = null);
(statearr_12221_12256[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 17))
{var inst_12174 = (state_12195[17]);var state_12195__$1 = state_12195;var statearr_12222_12257 = state_12195__$1;(statearr_12222_12257[2] = inst_12174);
(statearr_12222_12257[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 18))
{var inst_12154 = (state_12195[13]);var inst_12155 = (state_12195[14]);var inst_12160 = (state_12195[16]);var inst_12177 = cljs.core.empty_QMARK_.call(null,inst_12155);var inst_12178 = inst_12154.call(null,inst_12160);var inst_12179 = cljs.core.not.call(null,inst_12178);var inst_12180 = (inst_12177) && (inst_12179);var state_12195__$1 = state_12195;var statearr_12223_12258 = state_12195__$1;(statearr_12223_12258[2] = inst_12180);
(statearr_12223_12258[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 19))
{var inst_12182 = (state_12195[2]);var state_12195__$1 = state_12195;if(cljs.core.truth_(inst_12182))
{var statearr_12224_12259 = state_12195__$1;(statearr_12224_12259[1] = 20);
} else
{var statearr_12225_12260 = state_12195__$1;(statearr_12225_12260[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 20))
{var inst_12159 = (state_12195[15]);var state_12195__$1 = state_12195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12195__$1,23,out,inst_12159);
} else
{if((state_val_12196 === 21))
{var state_12195__$1 = state_12195;var statearr_12226_12261 = state_12195__$1;(statearr_12226_12261[2] = null);
(statearr_12226_12261[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 22))
{var inst_12152 = (state_12195[12]);var inst_12188 = (state_12195[2]);var inst_12144 = inst_12152;var state_12195__$1 = (function (){var statearr_12227 = state_12195;(statearr_12227[19] = inst_12188);
(statearr_12227[9] = inst_12144);
return statearr_12227;
})();var statearr_12228_12262 = state_12195__$1;(statearr_12228_12262[2] = null);
(statearr_12228_12262[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12196 === 23))
{var inst_12185 = (state_12195[2]);var state_12195__$1 = state_12195;var statearr_12229_12263 = state_12195__$1;(statearr_12229_12263[2] = inst_12185);
(statearr_12229_12263[1] = 22);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12233[0] = state_machine__6161__auto__);
(statearr_12233[1] = 1);
return statearr_12233;
});
var state_machine__6161__auto____1 = (function (state_12195){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12195);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12234){if((e12234 instanceof Object))
{var ex__6164__auto__ = e12234;var statearr_12235_12264 = state_12195;(statearr_12235_12264[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12195);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12265 = state_12195;
state_12195 = G__12265;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12195){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12236 = f__6176__auto__.call(null);(statearr_12236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12237);
return statearr_12236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12267 = {};return obj12267;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3408__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3408__auto__,mults){
return (function (p1__12268_SHARP_){if(cljs.core.truth_(p1__12268_SHARP_.call(null,topic)))
{return p1__12268_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12268_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3408__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12393 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12393 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12394){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12394 = meta12394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12393.cljs$lang$type = true;
cljs.core.async.t12393.cljs$lang$ctorStr = "cljs.core.async/t12393";
cljs.core.async.t12393.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12393");
});})(mults,ensure_mult))
;
cljs.core.async.t12393.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12393.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12393.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12393.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12393.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12393.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12393.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12393.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12395){var self__ = this;
var _12395__$1 = this;return self__.meta12394;
});})(mults,ensure_mult))
;
cljs.core.async.t12393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12395,meta12394__$1){var self__ = this;
var _12395__$1 = this;return (new cljs.core.async.t12393(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12394__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12393 = ((function (mults,ensure_mult){
return (function __GT_t12393(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12394){return (new cljs.core.async.t12393(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12394));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12393(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6175__auto___12517 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12469){var state_val_12470 = (state_12469[1]);if((state_val_12470 === 1))
{var state_12469__$1 = state_12469;var statearr_12471_12518 = state_12469__$1;(statearr_12471_12518[2] = null);
(statearr_12471_12518[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 2))
{var state_12469__$1 = state_12469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12469__$1,4,ch);
} else
{if((state_val_12470 === 3))
{var inst_12467 = (state_12469[2]);var state_12469__$1 = state_12469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12469__$1,inst_12467);
} else
{if((state_val_12470 === 4))
{var inst_12398 = (state_12469[7]);var inst_12398__$1 = (state_12469[2]);var inst_12399 = (inst_12398__$1 == null);var state_12469__$1 = (function (){var statearr_12472 = state_12469;(statearr_12472[7] = inst_12398__$1);
return statearr_12472;
})();if(cljs.core.truth_(inst_12399))
{var statearr_12473_12519 = state_12469__$1;(statearr_12473_12519[1] = 5);
} else
{var statearr_12474_12520 = state_12469__$1;(statearr_12474_12520[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 5))
{var inst_12405 = cljs.core.deref.call(null,mults);var inst_12406 = cljs.core.vals.call(null,inst_12405);var inst_12407 = cljs.core.seq.call(null,inst_12406);var inst_12408 = inst_12407;var inst_12409 = null;var inst_12410 = 0;var inst_12411 = 0;var state_12469__$1 = (function (){var statearr_12475 = state_12469;(statearr_12475[8] = inst_12409);
(statearr_12475[9] = inst_12408);
(statearr_12475[10] = inst_12411);
(statearr_12475[11] = inst_12410);
return statearr_12475;
})();var statearr_12476_12521 = state_12469__$1;(statearr_12476_12521[2] = null);
(statearr_12476_12521[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 6))
{var inst_12398 = (state_12469[7]);var inst_12446 = (state_12469[12]);var inst_12448 = (state_12469[13]);var inst_12446__$1 = topic_fn.call(null,inst_12398);var inst_12447 = cljs.core.deref.call(null,mults);var inst_12448__$1 = cljs.core.get.call(null,inst_12447,inst_12446__$1);var state_12469__$1 = (function (){var statearr_12477 = state_12469;(statearr_12477[12] = inst_12446__$1);
(statearr_12477[13] = inst_12448__$1);
return statearr_12477;
})();if(cljs.core.truth_(inst_12448__$1))
{var statearr_12478_12522 = state_12469__$1;(statearr_12478_12522[1] = 19);
} else
{var statearr_12479_12523 = state_12469__$1;(statearr_12479_12523[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 7))
{var inst_12465 = (state_12469[2]);var state_12469__$1 = state_12469;var statearr_12480_12524 = state_12469__$1;(statearr_12480_12524[2] = inst_12465);
(statearr_12480_12524[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 8))
{var inst_12411 = (state_12469[10]);var inst_12410 = (state_12469[11]);var inst_12413 = (inst_12411 < inst_12410);var inst_12414 = inst_12413;var state_12469__$1 = state_12469;if(cljs.core.truth_(inst_12414))
{var statearr_12484_12525 = state_12469__$1;(statearr_12484_12525[1] = 10);
} else
{var statearr_12485_12526 = state_12469__$1;(statearr_12485_12526[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 9))
{var inst_12444 = (state_12469[2]);var state_12469__$1 = state_12469;var statearr_12486_12527 = state_12469__$1;(statearr_12486_12527[2] = inst_12444);
(statearr_12486_12527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 10))
{var inst_12409 = (state_12469[8]);var inst_12408 = (state_12469[9]);var inst_12411 = (state_12469[10]);var inst_12410 = (state_12469[11]);var inst_12416 = cljs.core._nth.call(null,inst_12409,inst_12411);var inst_12417 = cljs.core.async.muxch_STAR_.call(null,inst_12416);var inst_12418 = cljs.core.async.close_BANG_.call(null,inst_12417);var inst_12419 = (inst_12411 + 1);var tmp12481 = inst_12409;var tmp12482 = inst_12408;var tmp12483 = inst_12410;var inst_12408__$1 = tmp12482;var inst_12409__$1 = tmp12481;var inst_12410__$1 = tmp12483;var inst_12411__$1 = inst_12419;var state_12469__$1 = (function (){var statearr_12487 = state_12469;(statearr_12487[8] = inst_12409__$1);
(statearr_12487[9] = inst_12408__$1);
(statearr_12487[14] = inst_12418);
(statearr_12487[10] = inst_12411__$1);
(statearr_12487[11] = inst_12410__$1);
return statearr_12487;
})();var statearr_12488_12528 = state_12469__$1;(statearr_12488_12528[2] = null);
(statearr_12488_12528[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 11))
{var inst_12408 = (state_12469[9]);var inst_12422 = (state_12469[15]);var inst_12422__$1 = cljs.core.seq.call(null,inst_12408);var state_12469__$1 = (function (){var statearr_12489 = state_12469;(statearr_12489[15] = inst_12422__$1);
return statearr_12489;
})();if(inst_12422__$1)
{var statearr_12490_12529 = state_12469__$1;(statearr_12490_12529[1] = 13);
} else
{var statearr_12491_12530 = state_12469__$1;(statearr_12491_12530[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 12))
{var inst_12442 = (state_12469[2]);var state_12469__$1 = state_12469;var statearr_12492_12531 = state_12469__$1;(statearr_12492_12531[2] = inst_12442);
(statearr_12492_12531[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 13))
{var inst_12422 = (state_12469[15]);var inst_12424 = cljs.core.chunked_seq_QMARK_.call(null,inst_12422);var state_12469__$1 = state_12469;if(inst_12424)
{var statearr_12493_12532 = state_12469__$1;(statearr_12493_12532[1] = 16);
} else
{var statearr_12494_12533 = state_12469__$1;(statearr_12494_12533[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 14))
{var state_12469__$1 = state_12469;var statearr_12495_12534 = state_12469__$1;(statearr_12495_12534[2] = null);
(statearr_12495_12534[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 15))
{var inst_12440 = (state_12469[2]);var state_12469__$1 = state_12469;var statearr_12496_12535 = state_12469__$1;(statearr_12496_12535[2] = inst_12440);
(statearr_12496_12535[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 16))
{var inst_12422 = (state_12469[15]);var inst_12426 = cljs.core.chunk_first.call(null,inst_12422);var inst_12427 = cljs.core.chunk_rest.call(null,inst_12422);var inst_12428 = cljs.core.count.call(null,inst_12426);var inst_12408 = inst_12427;var inst_12409 = inst_12426;var inst_12410 = inst_12428;var inst_12411 = 0;var state_12469__$1 = (function (){var statearr_12497 = state_12469;(statearr_12497[8] = inst_12409);
(statearr_12497[9] = inst_12408);
(statearr_12497[10] = inst_12411);
(statearr_12497[11] = inst_12410);
return statearr_12497;
})();var statearr_12498_12536 = state_12469__$1;(statearr_12498_12536[2] = null);
(statearr_12498_12536[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 17))
{var inst_12422 = (state_12469[15]);var inst_12431 = cljs.core.first.call(null,inst_12422);var inst_12432 = cljs.core.async.muxch_STAR_.call(null,inst_12431);var inst_12433 = cljs.core.async.close_BANG_.call(null,inst_12432);var inst_12434 = cljs.core.next.call(null,inst_12422);var inst_12408 = inst_12434;var inst_12409 = null;var inst_12410 = 0;var inst_12411 = 0;var state_12469__$1 = (function (){var statearr_12499 = state_12469;(statearr_12499[16] = inst_12433);
(statearr_12499[8] = inst_12409);
(statearr_12499[9] = inst_12408);
(statearr_12499[10] = inst_12411);
(statearr_12499[11] = inst_12410);
return statearr_12499;
})();var statearr_12500_12537 = state_12469__$1;(statearr_12500_12537[2] = null);
(statearr_12500_12537[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 18))
{var inst_12437 = (state_12469[2]);var state_12469__$1 = state_12469;var statearr_12501_12538 = state_12469__$1;(statearr_12501_12538[2] = inst_12437);
(statearr_12501_12538[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 19))
{var state_12469__$1 = state_12469;var statearr_12502_12539 = state_12469__$1;(statearr_12502_12539[2] = null);
(statearr_12502_12539[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 20))
{var state_12469__$1 = state_12469;var statearr_12503_12540 = state_12469__$1;(statearr_12503_12540[2] = null);
(statearr_12503_12540[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 21))
{var inst_12462 = (state_12469[2]);var state_12469__$1 = (function (){var statearr_12504 = state_12469;(statearr_12504[17] = inst_12462);
return statearr_12504;
})();var statearr_12505_12541 = state_12469__$1;(statearr_12505_12541[2] = null);
(statearr_12505_12541[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 22))
{var inst_12459 = (state_12469[2]);var state_12469__$1 = state_12469;var statearr_12506_12542 = state_12469__$1;(statearr_12506_12542[2] = inst_12459);
(statearr_12506_12542[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 23))
{var inst_12446 = (state_12469[12]);var inst_12450 = (state_12469[2]);var inst_12451 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12446);var state_12469__$1 = (function (){var statearr_12507 = state_12469;(statearr_12507[18] = inst_12450);
return statearr_12507;
})();var statearr_12508_12543 = state_12469__$1;(statearr_12508_12543[2] = inst_12451);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12469__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12470 === 24))
{var inst_12398 = (state_12469[7]);var inst_12448 = (state_12469[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12469,23,Object,null,22);var inst_12455 = cljs.core.async.muxch_STAR_.call(null,inst_12448);var state_12469__$1 = state_12469;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12469__$1,25,inst_12455,inst_12398);
} else
{if((state_val_12470 === 25))
{var inst_12457 = (state_12469[2]);var state_12469__$1 = state_12469;var statearr_12509_12544 = state_12469__$1;(statearr_12509_12544[2] = inst_12457);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12469__$1);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12513[0] = state_machine__6161__auto__);
(statearr_12513[1] = 1);
return statearr_12513;
});
var state_machine__6161__auto____1 = (function (state_12469){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12469);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12514){if((e12514 instanceof Object))
{var ex__6164__auto__ = e12514;var statearr_12515_12545 = state_12469;(statearr_12515_12545[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12469);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12546 = state_12469;
state_12469 = G__12546;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12469){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12516 = f__6176__auto__.call(null);(statearr_12516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12517);
return statearr_12516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6175__auto___12683 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12653){var state_val_12654 = (state_12653[1]);if((state_val_12654 === 1))
{var state_12653__$1 = state_12653;var statearr_12655_12684 = state_12653__$1;(statearr_12655_12684[2] = null);
(statearr_12655_12684[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12654 === 2))
{var inst_12616 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12617 = 0;var state_12653__$1 = (function (){var statearr_12656 = state_12653;(statearr_12656[7] = inst_12616);
(statearr_12656[8] = inst_12617);
return statearr_12656;
})();var statearr_12657_12685 = state_12653__$1;(statearr_12657_12685[2] = null);
(statearr_12657_12685[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12654 === 3))
{var inst_12651 = (state_12653[2]);var state_12653__$1 = state_12653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12653__$1,inst_12651);
} else
{if((state_val_12654 === 4))
{var inst_12617 = (state_12653[8]);var inst_12619 = (inst_12617 < cnt);var state_12653__$1 = state_12653;if(cljs.core.truth_(inst_12619))
{var statearr_12658_12686 = state_12653__$1;(statearr_12658_12686[1] = 6);
} else
{var statearr_12659_12687 = state_12653__$1;(statearr_12659_12687[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12654 === 5))
{var inst_12637 = (state_12653[2]);var state_12653__$1 = (function (){var statearr_12660 = state_12653;(statearr_12660[9] = inst_12637);
return statearr_12660;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12653__$1,12,dchan);
} else
{if((state_val_12654 === 6))
{var state_12653__$1 = state_12653;var statearr_12661_12688 = state_12653__$1;(statearr_12661_12688[2] = null);
(statearr_12661_12688[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12654 === 7))
{var state_12653__$1 = state_12653;var statearr_12662_12689 = state_12653__$1;(statearr_12662_12689[2] = null);
(statearr_12662_12689[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12654 === 8))
{var inst_12635 = (state_12653[2]);var state_12653__$1 = state_12653;var statearr_12663_12690 = state_12653__$1;(statearr_12663_12690[2] = inst_12635);
(statearr_12663_12690[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12654 === 9))
{var inst_12617 = (state_12653[8]);var inst_12630 = (state_12653[2]);var inst_12631 = (inst_12617 + 1);var inst_12617__$1 = inst_12631;var state_12653__$1 = (function (){var statearr_12664 = state_12653;(statearr_12664[10] = inst_12630);
(statearr_12664[8] = inst_12617__$1);
return statearr_12664;
})();var statearr_12665_12691 = state_12653__$1;(statearr_12665_12691[2] = null);
(statearr_12665_12691[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12654 === 10))
{var inst_12621 = (state_12653[2]);var inst_12622 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12653__$1 = (function (){var statearr_12666 = state_12653;(statearr_12666[11] = inst_12621);
return statearr_12666;
})();var statearr_12667_12692 = state_12653__$1;(statearr_12667_12692[2] = inst_12622);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12653__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12654 === 11))
{var inst_12617 = (state_12653[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12653,10,Object,null,9);var inst_12626 = chs__$1.call(null,inst_12617);var inst_12627 = done.call(null,inst_12617);var inst_12628 = cljs.core.async.take_BANG_.call(null,inst_12626,inst_12627);var state_12653__$1 = state_12653;var statearr_12668_12693 = state_12653__$1;(statearr_12668_12693[2] = inst_12628);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12653__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12654 === 12))
{var inst_12639 = (state_12653[12]);var inst_12639__$1 = (state_12653[2]);var inst_12640 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12639__$1);var state_12653__$1 = (function (){var statearr_12669 = state_12653;(statearr_12669[12] = inst_12639__$1);
return statearr_12669;
})();if(cljs.core.truth_(inst_12640))
{var statearr_12670_12694 = state_12653__$1;(statearr_12670_12694[1] = 13);
} else
{var statearr_12671_12695 = state_12653__$1;(statearr_12671_12695[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12654 === 13))
{var inst_12642 = cljs.core.async.close_BANG_.call(null,out);var state_12653__$1 = state_12653;var statearr_12672_12696 = state_12653__$1;(statearr_12672_12696[2] = inst_12642);
(statearr_12672_12696[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12654 === 14))
{var inst_12639 = (state_12653[12]);var inst_12644 = cljs.core.apply.call(null,f,inst_12639);var state_12653__$1 = state_12653;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12653__$1,16,out,inst_12644);
} else
{if((state_val_12654 === 15))
{var inst_12649 = (state_12653[2]);var state_12653__$1 = state_12653;var statearr_12673_12697 = state_12653__$1;(statearr_12673_12697[2] = inst_12649);
(statearr_12673_12697[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12654 === 16))
{var inst_12646 = (state_12653[2]);var state_12653__$1 = (function (){var statearr_12674 = state_12653;(statearr_12674[13] = inst_12646);
return statearr_12674;
})();var statearr_12675_12698 = state_12653__$1;(statearr_12675_12698[2] = null);
(statearr_12675_12698[1] = 2);
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
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12679[0] = state_machine__6161__auto__);
(statearr_12679[1] = 1);
return statearr_12679;
});
var state_machine__6161__auto____1 = (function (state_12653){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12653);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12680){if((e12680 instanceof Object))
{var ex__6164__auto__ = e12680;var statearr_12681_12699 = state_12653;(statearr_12681_12699[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12653);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12680;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12700 = state_12653;
state_12653 = G__12700;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12653){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12682 = f__6176__auto__.call(null);(statearr_12682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12683);
return statearr_12682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12808 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12784){var state_val_12785 = (state_12784[1]);if((state_val_12785 === 1))
{var inst_12755 = cljs.core.vec.call(null,chs);var inst_12756 = inst_12755;var state_12784__$1 = (function (){var statearr_12786 = state_12784;(statearr_12786[7] = inst_12756);
return statearr_12786;
})();var statearr_12787_12809 = state_12784__$1;(statearr_12787_12809[2] = null);
(statearr_12787_12809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12785 === 2))
{var inst_12756 = (state_12784[7]);var inst_12758 = cljs.core.count.call(null,inst_12756);var inst_12759 = (inst_12758 > 0);var state_12784__$1 = state_12784;if(cljs.core.truth_(inst_12759))
{var statearr_12788_12810 = state_12784__$1;(statearr_12788_12810[1] = 4);
} else
{var statearr_12789_12811 = state_12784__$1;(statearr_12789_12811[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12785 === 3))
{var inst_12782 = (state_12784[2]);var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12784__$1,inst_12782);
} else
{if((state_val_12785 === 4))
{var inst_12756 = (state_12784[7]);var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12784__$1,7,inst_12756);
} else
{if((state_val_12785 === 5))
{var inst_12778 = cljs.core.async.close_BANG_.call(null,out);var state_12784__$1 = state_12784;var statearr_12790_12812 = state_12784__$1;(statearr_12790_12812[2] = inst_12778);
(statearr_12790_12812[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12785 === 6))
{var inst_12780 = (state_12784[2]);var state_12784__$1 = state_12784;var statearr_12791_12813 = state_12784__$1;(statearr_12791_12813[2] = inst_12780);
(statearr_12791_12813[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12785 === 7))
{var inst_12764 = (state_12784[8]);var inst_12763 = (state_12784[9]);var inst_12763__$1 = (state_12784[2]);var inst_12764__$1 = cljs.core.nth.call(null,inst_12763__$1,0,null);var inst_12765 = cljs.core.nth.call(null,inst_12763__$1,1,null);var inst_12766 = (inst_12764__$1 == null);var state_12784__$1 = (function (){var statearr_12792 = state_12784;(statearr_12792[10] = inst_12765);
(statearr_12792[8] = inst_12764__$1);
(statearr_12792[9] = inst_12763__$1);
return statearr_12792;
})();if(cljs.core.truth_(inst_12766))
{var statearr_12793_12814 = state_12784__$1;(statearr_12793_12814[1] = 8);
} else
{var statearr_12794_12815 = state_12784__$1;(statearr_12794_12815[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12785 === 8))
{var inst_12765 = (state_12784[10]);var inst_12764 = (state_12784[8]);var inst_12763 = (state_12784[9]);var inst_12756 = (state_12784[7]);var inst_12768 = (function (){var c = inst_12765;var v = inst_12764;var vec__12761 = inst_12763;var cs = inst_12756;return ((function (c,v,vec__12761,cs,inst_12765,inst_12764,inst_12763,inst_12756,state_val_12785){
return (function (p1__12701_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12701_SHARP_);
});
;})(c,v,vec__12761,cs,inst_12765,inst_12764,inst_12763,inst_12756,state_val_12785))
})();var inst_12769 = cljs.core.filterv.call(null,inst_12768,inst_12756);var inst_12756__$1 = inst_12769;var state_12784__$1 = (function (){var statearr_12795 = state_12784;(statearr_12795[7] = inst_12756__$1);
return statearr_12795;
})();var statearr_12796_12816 = state_12784__$1;(statearr_12796_12816[2] = null);
(statearr_12796_12816[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12785 === 9))
{var inst_12764 = (state_12784[8]);var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12784__$1,11,out,inst_12764);
} else
{if((state_val_12785 === 10))
{var inst_12776 = (state_12784[2]);var state_12784__$1 = state_12784;var statearr_12798_12817 = state_12784__$1;(statearr_12798_12817[2] = inst_12776);
(statearr_12798_12817[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12785 === 11))
{var inst_12756 = (state_12784[7]);var inst_12773 = (state_12784[2]);var tmp12797 = inst_12756;var inst_12756__$1 = tmp12797;var state_12784__$1 = (function (){var statearr_12799 = state_12784;(statearr_12799[11] = inst_12773);
(statearr_12799[7] = inst_12756__$1);
return statearr_12799;
})();var statearr_12800_12818 = state_12784__$1;(statearr_12800_12818[2] = null);
(statearr_12800_12818[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12804 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12804[0] = state_machine__6161__auto__);
(statearr_12804[1] = 1);
return statearr_12804;
});
var state_machine__6161__auto____1 = (function (state_12784){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12784);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12805){if((e12805 instanceof Object))
{var ex__6164__auto__ = e12805;var statearr_12806_12819 = state_12784;(statearr_12806_12819[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12784);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12820 = state_12784;
state_12784 = G__12820;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12784){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12807 = f__6176__auto__.call(null);(statearr_12807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12808);
return statearr_12807;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12913 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12890){var state_val_12891 = (state_12890[1]);if((state_val_12891 === 1))
{var inst_12867 = 0;var state_12890__$1 = (function (){var statearr_12892 = state_12890;(statearr_12892[7] = inst_12867);
return statearr_12892;
})();var statearr_12893_12914 = state_12890__$1;(statearr_12893_12914[2] = null);
(statearr_12893_12914[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 2))
{var inst_12867 = (state_12890[7]);var inst_12869 = (inst_12867 < n);var state_12890__$1 = state_12890;if(cljs.core.truth_(inst_12869))
{var statearr_12894_12915 = state_12890__$1;(statearr_12894_12915[1] = 4);
} else
{var statearr_12895_12916 = state_12890__$1;(statearr_12895_12916[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 3))
{var inst_12887 = (state_12890[2]);var inst_12888 = cljs.core.async.close_BANG_.call(null,out);var state_12890__$1 = (function (){var statearr_12896 = state_12890;(statearr_12896[8] = inst_12887);
return statearr_12896;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12890__$1,inst_12888);
} else
{if((state_val_12891 === 4))
{var state_12890__$1 = state_12890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12890__$1,7,ch);
} else
{if((state_val_12891 === 5))
{var state_12890__$1 = state_12890;var statearr_12897_12917 = state_12890__$1;(statearr_12897_12917[2] = null);
(statearr_12897_12917[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 6))
{var inst_12885 = (state_12890[2]);var state_12890__$1 = state_12890;var statearr_12898_12918 = state_12890__$1;(statearr_12898_12918[2] = inst_12885);
(statearr_12898_12918[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 7))
{var inst_12872 = (state_12890[9]);var inst_12872__$1 = (state_12890[2]);var inst_12873 = (inst_12872__$1 == null);var inst_12874 = cljs.core.not.call(null,inst_12873);var state_12890__$1 = (function (){var statearr_12899 = state_12890;(statearr_12899[9] = inst_12872__$1);
return statearr_12899;
})();if(inst_12874)
{var statearr_12900_12919 = state_12890__$1;(statearr_12900_12919[1] = 8);
} else
{var statearr_12901_12920 = state_12890__$1;(statearr_12901_12920[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 8))
{var inst_12872 = (state_12890[9]);var state_12890__$1 = state_12890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12890__$1,11,out,inst_12872);
} else
{if((state_val_12891 === 9))
{var state_12890__$1 = state_12890;var statearr_12902_12921 = state_12890__$1;(statearr_12902_12921[2] = null);
(statearr_12902_12921[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 10))
{var inst_12882 = (state_12890[2]);var state_12890__$1 = state_12890;var statearr_12903_12922 = state_12890__$1;(statearr_12903_12922[2] = inst_12882);
(statearr_12903_12922[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 11))
{var inst_12867 = (state_12890[7]);var inst_12877 = (state_12890[2]);var inst_12878 = (inst_12867 + 1);var inst_12867__$1 = inst_12878;var state_12890__$1 = (function (){var statearr_12904 = state_12890;(statearr_12904[7] = inst_12867__$1);
(statearr_12904[10] = inst_12877);
return statearr_12904;
})();var statearr_12905_12923 = state_12890__$1;(statearr_12905_12923[2] = null);
(statearr_12905_12923[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12909 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12909[0] = state_machine__6161__auto__);
(statearr_12909[1] = 1);
return statearr_12909;
});
var state_machine__6161__auto____1 = (function (state_12890){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12890);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12910){if((e12910 instanceof Object))
{var ex__6164__auto__ = e12910;var statearr_12911_12924 = state_12890;(statearr_12911_12924[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12890);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12910;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12925 = state_12890;
state_12890 = G__12925;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12890){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12912 = f__6176__auto__.call(null);(statearr_12912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12913);
return statearr_12912;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___13022 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12997){var state_val_12998 = (state_12997[1]);if((state_val_12998 === 1))
{var inst_12974 = null;var state_12997__$1 = (function (){var statearr_12999 = state_12997;(statearr_12999[7] = inst_12974);
return statearr_12999;
})();var statearr_13000_13023 = state_12997__$1;(statearr_13000_13023[2] = null);
(statearr_13000_13023[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12998 === 2))
{var state_12997__$1 = state_12997;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12997__$1,4,ch);
} else
{if((state_val_12998 === 3))
{var inst_12994 = (state_12997[2]);var inst_12995 = cljs.core.async.close_BANG_.call(null,out);var state_12997__$1 = (function (){var statearr_13001 = state_12997;(statearr_13001[8] = inst_12994);
return statearr_13001;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12997__$1,inst_12995);
} else
{if((state_val_12998 === 4))
{var inst_12977 = (state_12997[9]);var inst_12977__$1 = (state_12997[2]);var inst_12978 = (inst_12977__$1 == null);var inst_12979 = cljs.core.not.call(null,inst_12978);var state_12997__$1 = (function (){var statearr_13002 = state_12997;(statearr_13002[9] = inst_12977__$1);
return statearr_13002;
})();if(inst_12979)
{var statearr_13003_13024 = state_12997__$1;(statearr_13003_13024[1] = 5);
} else
{var statearr_13004_13025 = state_12997__$1;(statearr_13004_13025[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12998 === 5))
{var inst_12974 = (state_12997[7]);var inst_12977 = (state_12997[9]);var inst_12981 = cljs.core._EQ_.call(null,inst_12977,inst_12974);var state_12997__$1 = state_12997;if(inst_12981)
{var statearr_13005_13026 = state_12997__$1;(statearr_13005_13026[1] = 8);
} else
{var statearr_13006_13027 = state_12997__$1;(statearr_13006_13027[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12998 === 6))
{var state_12997__$1 = state_12997;var statearr_13008_13028 = state_12997__$1;(statearr_13008_13028[2] = null);
(statearr_13008_13028[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12998 === 7))
{var inst_12992 = (state_12997[2]);var state_12997__$1 = state_12997;var statearr_13009_13029 = state_12997__$1;(statearr_13009_13029[2] = inst_12992);
(statearr_13009_13029[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12998 === 8))
{var inst_12974 = (state_12997[7]);var tmp13007 = inst_12974;var inst_12974__$1 = tmp13007;var state_12997__$1 = (function (){var statearr_13010 = state_12997;(statearr_13010[7] = inst_12974__$1);
return statearr_13010;
})();var statearr_13011_13030 = state_12997__$1;(statearr_13011_13030[2] = null);
(statearr_13011_13030[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12998 === 9))
{var inst_12977 = (state_12997[9]);var state_12997__$1 = state_12997;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12997__$1,11,out,inst_12977);
} else
{if((state_val_12998 === 10))
{var inst_12989 = (state_12997[2]);var state_12997__$1 = state_12997;var statearr_13012_13031 = state_12997__$1;(statearr_13012_13031[2] = inst_12989);
(statearr_13012_13031[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12998 === 11))
{var inst_12977 = (state_12997[9]);var inst_12986 = (state_12997[2]);var inst_12974 = inst_12977;var state_12997__$1 = (function (){var statearr_13013 = state_12997;(statearr_13013[10] = inst_12986);
(statearr_13013[7] = inst_12974);
return statearr_13013;
})();var statearr_13014_13032 = state_12997__$1;(statearr_13014_13032[2] = null);
(statearr_13014_13032[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_13018 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13018[0] = state_machine__6161__auto__);
(statearr_13018[1] = 1);
return statearr_13018;
});
var state_machine__6161__auto____1 = (function (state_12997){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12997);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e13019){if((e13019 instanceof Object))
{var ex__6164__auto__ = e13019;var statearr_13020_13033 = state_12997;(statearr_13020_13033[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12997);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13019;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13034 = state_12997;
state_12997 = G__13034;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12997){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_13021 = f__6176__auto__.call(null);(statearr_13021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___13022);
return statearr_13021;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___13169 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_13139){var state_val_13140 = (state_13139[1]);if((state_val_13140 === 1))
{var inst_13102 = (new Array(n));var inst_13103 = inst_13102;var inst_13104 = 0;var state_13139__$1 = (function (){var statearr_13141 = state_13139;(statearr_13141[7] = inst_13104);
(statearr_13141[8] = inst_13103);
return statearr_13141;
})();var statearr_13142_13170 = state_13139__$1;(statearr_13142_13170[2] = null);
(statearr_13142_13170[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13140 === 2))
{var state_13139__$1 = state_13139;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13139__$1,4,ch);
} else
{if((state_val_13140 === 3))
{var inst_13137 = (state_13139[2]);var state_13139__$1 = state_13139;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13139__$1,inst_13137);
} else
{if((state_val_13140 === 4))
{var inst_13107 = (state_13139[9]);var inst_13107__$1 = (state_13139[2]);var inst_13108 = (inst_13107__$1 == null);var inst_13109 = cljs.core.not.call(null,inst_13108);var state_13139__$1 = (function (){var statearr_13143 = state_13139;(statearr_13143[9] = inst_13107__$1);
return statearr_13143;
})();if(inst_13109)
{var statearr_13144_13171 = state_13139__$1;(statearr_13144_13171[1] = 5);
} else
{var statearr_13145_13172 = state_13139__$1;(statearr_13145_13172[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13140 === 5))
{var inst_13112 = (state_13139[10]);var inst_13107 = (state_13139[9]);var inst_13104 = (state_13139[7]);var inst_13103 = (state_13139[8]);var inst_13111 = (inst_13103[inst_13104] = inst_13107);var inst_13112__$1 = (inst_13104 + 1);var inst_13113 = (inst_13112__$1 < n);var state_13139__$1 = (function (){var statearr_13146 = state_13139;(statearr_13146[11] = inst_13111);
(statearr_13146[10] = inst_13112__$1);
return statearr_13146;
})();if(cljs.core.truth_(inst_13113))
{var statearr_13147_13173 = state_13139__$1;(statearr_13147_13173[1] = 8);
} else
{var statearr_13148_13174 = state_13139__$1;(statearr_13148_13174[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13140 === 6))
{var inst_13104 = (state_13139[7]);var inst_13125 = (inst_13104 > 0);var state_13139__$1 = state_13139;if(cljs.core.truth_(inst_13125))
{var statearr_13150_13175 = state_13139__$1;(statearr_13150_13175[1] = 12);
} else
{var statearr_13151_13176 = state_13139__$1;(statearr_13151_13176[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13140 === 7))
{var inst_13135 = (state_13139[2]);var state_13139__$1 = state_13139;var statearr_13152_13177 = state_13139__$1;(statearr_13152_13177[2] = inst_13135);
(statearr_13152_13177[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13140 === 8))
{var inst_13112 = (state_13139[10]);var inst_13103 = (state_13139[8]);var tmp13149 = inst_13103;var inst_13103__$1 = tmp13149;var inst_13104 = inst_13112;var state_13139__$1 = (function (){var statearr_13153 = state_13139;(statearr_13153[7] = inst_13104);
(statearr_13153[8] = inst_13103__$1);
return statearr_13153;
})();var statearr_13154_13178 = state_13139__$1;(statearr_13154_13178[2] = null);
(statearr_13154_13178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13140 === 9))
{var inst_13103 = (state_13139[8]);var inst_13117 = cljs.core.vec.call(null,inst_13103);var state_13139__$1 = state_13139;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13139__$1,11,out,inst_13117);
} else
{if((state_val_13140 === 10))
{var inst_13123 = (state_13139[2]);var state_13139__$1 = state_13139;var statearr_13155_13179 = state_13139__$1;(statearr_13155_13179[2] = inst_13123);
(statearr_13155_13179[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13140 === 11))
{var inst_13119 = (state_13139[2]);var inst_13120 = (new Array(n));var inst_13103 = inst_13120;var inst_13104 = 0;var state_13139__$1 = (function (){var statearr_13156 = state_13139;(statearr_13156[12] = inst_13119);
(statearr_13156[7] = inst_13104);
(statearr_13156[8] = inst_13103);
return statearr_13156;
})();var statearr_13157_13180 = state_13139__$1;(statearr_13157_13180[2] = null);
(statearr_13157_13180[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13140 === 12))
{var inst_13103 = (state_13139[8]);var inst_13127 = cljs.core.vec.call(null,inst_13103);var state_13139__$1 = state_13139;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13139__$1,15,out,inst_13127);
} else
{if((state_val_13140 === 13))
{var state_13139__$1 = state_13139;var statearr_13158_13181 = state_13139__$1;(statearr_13158_13181[2] = null);
(statearr_13158_13181[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13140 === 14))
{var inst_13132 = (state_13139[2]);var inst_13133 = cljs.core.async.close_BANG_.call(null,out);var state_13139__$1 = (function (){var statearr_13159 = state_13139;(statearr_13159[13] = inst_13132);
return statearr_13159;
})();var statearr_13160_13182 = state_13139__$1;(statearr_13160_13182[2] = inst_13133);
(statearr_13160_13182[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13140 === 15))
{var inst_13129 = (state_13139[2]);var state_13139__$1 = state_13139;var statearr_13161_13183 = state_13139__$1;(statearr_13161_13183[2] = inst_13129);
(statearr_13161_13183[1] = 14);
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
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_13165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13165[0] = state_machine__6161__auto__);
(statearr_13165[1] = 1);
return statearr_13165;
});
var state_machine__6161__auto____1 = (function (state_13139){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_13139);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e13166){if((e13166 instanceof Object))
{var ex__6164__auto__ = e13166;var statearr_13167_13184 = state_13139;(statearr_13167_13184[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13139);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13166;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13185 = state_13139;
state_13139 = G__13185;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_13139){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_13139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_13168 = f__6176__auto__.call(null);(statearr_13168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___13169);
return statearr_13168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___13328 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_13298){var state_val_13299 = (state_13298[1]);if((state_val_13299 === 1))
{var inst_13257 = [];var inst_13258 = inst_13257;var inst_13259 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13298__$1 = (function (){var statearr_13300 = state_13298;(statearr_13300[7] = inst_13259);
(statearr_13300[8] = inst_13258);
return statearr_13300;
})();var statearr_13301_13329 = state_13298__$1;(statearr_13301_13329[2] = null);
(statearr_13301_13329[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 2))
{var state_13298__$1 = state_13298;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13298__$1,4,ch);
} else
{if((state_val_13299 === 3))
{var inst_13296 = (state_13298[2]);var state_13298__$1 = state_13298;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13298__$1,inst_13296);
} else
{if((state_val_13299 === 4))
{var inst_13262 = (state_13298[9]);var inst_13262__$1 = (state_13298[2]);var inst_13263 = (inst_13262__$1 == null);var inst_13264 = cljs.core.not.call(null,inst_13263);var state_13298__$1 = (function (){var statearr_13302 = state_13298;(statearr_13302[9] = inst_13262__$1);
return statearr_13302;
})();if(inst_13264)
{var statearr_13303_13330 = state_13298__$1;(statearr_13303_13330[1] = 5);
} else
{var statearr_13304_13331 = state_13298__$1;(statearr_13304_13331[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 5))
{var inst_13266 = (state_13298[10]);var inst_13259 = (state_13298[7]);var inst_13262 = (state_13298[9]);var inst_13266__$1 = f.call(null,inst_13262);var inst_13267 = cljs.core._EQ_.call(null,inst_13266__$1,inst_13259);var inst_13268 = cljs.core.keyword_identical_QMARK_.call(null,inst_13259,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13269 = (inst_13267) || (inst_13268);var state_13298__$1 = (function (){var statearr_13305 = state_13298;(statearr_13305[10] = inst_13266__$1);
return statearr_13305;
})();if(cljs.core.truth_(inst_13269))
{var statearr_13306_13332 = state_13298__$1;(statearr_13306_13332[1] = 8);
} else
{var statearr_13307_13333 = state_13298__$1;(statearr_13307_13333[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 6))
{var inst_13258 = (state_13298[8]);var inst_13283 = inst_13258.length;var inst_13284 = (inst_13283 > 0);var state_13298__$1 = state_13298;if(cljs.core.truth_(inst_13284))
{var statearr_13309_13334 = state_13298__$1;(statearr_13309_13334[1] = 12);
} else
{var statearr_13310_13335 = state_13298__$1;(statearr_13310_13335[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 7))
{var inst_13294 = (state_13298[2]);var state_13298__$1 = state_13298;var statearr_13311_13336 = state_13298__$1;(statearr_13311_13336[2] = inst_13294);
(statearr_13311_13336[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 8))
{var inst_13266 = (state_13298[10]);var inst_13258 = (state_13298[8]);var inst_13262 = (state_13298[9]);var inst_13271 = inst_13258.push(inst_13262);var tmp13308 = inst_13258;var inst_13258__$1 = tmp13308;var inst_13259 = inst_13266;var state_13298__$1 = (function (){var statearr_13312 = state_13298;(statearr_13312[11] = inst_13271);
(statearr_13312[7] = inst_13259);
(statearr_13312[8] = inst_13258__$1);
return statearr_13312;
})();var statearr_13313_13337 = state_13298__$1;(statearr_13313_13337[2] = null);
(statearr_13313_13337[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 9))
{var inst_13258 = (state_13298[8]);var inst_13274 = cljs.core.vec.call(null,inst_13258);var state_13298__$1 = state_13298;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13298__$1,11,out,inst_13274);
} else
{if((state_val_13299 === 10))
{var inst_13281 = (state_13298[2]);var state_13298__$1 = state_13298;var statearr_13314_13338 = state_13298__$1;(statearr_13314_13338[2] = inst_13281);
(statearr_13314_13338[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 11))
{var inst_13266 = (state_13298[10]);var inst_13262 = (state_13298[9]);var inst_13276 = (state_13298[2]);var inst_13277 = [];var inst_13278 = inst_13277.push(inst_13262);var inst_13258 = inst_13277;var inst_13259 = inst_13266;var state_13298__$1 = (function (){var statearr_13315 = state_13298;(statearr_13315[12] = inst_13276);
(statearr_13315[13] = inst_13278);
(statearr_13315[7] = inst_13259);
(statearr_13315[8] = inst_13258);
return statearr_13315;
})();var statearr_13316_13339 = state_13298__$1;(statearr_13316_13339[2] = null);
(statearr_13316_13339[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 12))
{var inst_13258 = (state_13298[8]);var inst_13286 = cljs.core.vec.call(null,inst_13258);var state_13298__$1 = state_13298;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13298__$1,15,out,inst_13286);
} else
{if((state_val_13299 === 13))
{var state_13298__$1 = state_13298;var statearr_13317_13340 = state_13298__$1;(statearr_13317_13340[2] = null);
(statearr_13317_13340[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 14))
{var inst_13291 = (state_13298[2]);var inst_13292 = cljs.core.async.close_BANG_.call(null,out);var state_13298__$1 = (function (){var statearr_13318 = state_13298;(statearr_13318[14] = inst_13291);
return statearr_13318;
})();var statearr_13319_13341 = state_13298__$1;(statearr_13319_13341[2] = inst_13292);
(statearr_13319_13341[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 15))
{var inst_13288 = (state_13298[2]);var state_13298__$1 = state_13298;var statearr_13320_13342 = state_13298__$1;(statearr_13320_13342[2] = inst_13288);
(statearr_13320_13342[1] = 14);
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
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_13324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13324[0] = state_machine__6161__auto__);
(statearr_13324[1] = 1);
return statearr_13324;
});
var state_machine__6161__auto____1 = (function (state_13298){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_13298);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e13325){if((e13325 instanceof Object))
{var ex__6164__auto__ = e13325;var statearr_13326_13343 = state_13298;(statearr_13326_13343[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13298);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13325;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13344 = state_13298;
state_13298 = G__13344;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_13298){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_13298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_13327 = f__6176__auto__.call(null);(statearr_13327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___13328);
return statearr_13327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map