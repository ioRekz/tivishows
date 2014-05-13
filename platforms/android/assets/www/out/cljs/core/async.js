// Compiled by ClojureScript 0.0-2156
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12188 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12188 = (function (f,fn_handler,meta12189){
this.f = f;
this.fn_handler = fn_handler;
this.meta12189 = meta12189;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12188.cljs$lang$type = true;
cljs.core.async.t12188.cljs$lang$ctorStr = "cljs.core.async/t12188";
cljs.core.async.t12188.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12188");
});
cljs.core.async.t12188.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12190){var self__ = this;
var _12190__$1 = this;return self__.meta12189;
});
cljs.core.async.t12188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12190,meta12189__$1){var self__ = this;
var _12190__$1 = this;return (new cljs.core.async.t12188(self__.f,self__.fn_handler,meta12189__$1));
});
cljs.core.async.__GT_t12188 = (function __GT_t12188(f__$1,fn_handler__$1,meta12189){return (new cljs.core.async.t12188(f__$1,fn_handler__$1,meta12189));
});
}
return (new cljs.core.async.t12188(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12192 = buff;if(G__12192)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__12192.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12192.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12192);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12192);
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
{var val_12193 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12193);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12193);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3391__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4251__auto___12194 = n;var x_12195 = 0;while(true){
if((x_12195 < n__4251__auto___12194))
{(a[x_12195] = 0);
{
var G__12196 = (x_12195 + 1);
x_12195 = G__12196;
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
var G__12197 = (i + 1);
i = G__12197;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12201 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12201 = (function (flag,alt_flag,meta12202){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12202 = meta12202;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12201.cljs$lang$type = true;
cljs.core.async.t12201.cljs$lang$ctorStr = "cljs.core.async/t12201";
cljs.core.async.t12201.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12201");
});
cljs.core.async.t12201.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12201.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12201.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12203){var self__ = this;
var _12203__$1 = this;return self__.meta12202;
});
cljs.core.async.t12201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12203,meta12202__$1){var self__ = this;
var _12203__$1 = this;return (new cljs.core.async.t12201(self__.flag,self__.alt_flag,meta12202__$1));
});
cljs.core.async.__GT_t12201 = (function __GT_t12201(flag__$1,alt_flag__$1,meta12202){return (new cljs.core.async.t12201(flag__$1,alt_flag__$1,meta12202));
});
}
return (new cljs.core.async.t12201(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12207 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12207 = (function (cb,flag,alt_handler,meta12208){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12208 = meta12208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12207.cljs$lang$type = true;
cljs.core.async.t12207.cljs$lang$ctorStr = "cljs.core.async/t12207";
cljs.core.async.t12207.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12207");
});
cljs.core.async.t12207.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12209){var self__ = this;
var _12209__$1 = this;return self__.meta12208;
});
cljs.core.async.t12207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12209,meta12208__$1){var self__ = this;
var _12209__$1 = this;return (new cljs.core.async.t12207(self__.cb,self__.flag,self__.alt_handler,meta12208__$1));
});
cljs.core.async.__GT_t12207 = (function __GT_t12207(cb__$1,flag__$1,alt_handler__$1,meta12208){return (new cljs.core.async.t12207(cb__$1,flag__$1,alt_handler__$1,meta12208));
});
}
return (new cljs.core.async.t12207(cb,flag,alt_handler,null));
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
return (function (p1__12210_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12210_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3403__auto__ = wport;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12211 = (i + 1);
i = G__12211;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3403__auto__ = ret;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3391__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3391__auto__;
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
var alts_BANG___delegate = function (ports,p__12212){var map__12214 = p__12212;var map__12214__$1 = ((cljs.core.seq_QMARK_.call(null,map__12214))?cljs.core.apply.call(null,cljs.core.hash_map,map__12214):map__12214);var opts = map__12214__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12212 = null;if (arguments.length > 1) {
  p__12212 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12212);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12215){
var ports = cljs.core.first(arglist__12215);
var p__12212 = cljs.core.rest(arglist__12215);
return alts_BANG___delegate(ports,p__12212);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12223 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12223 = (function (ch,f,map_LT_,meta12224){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12224 = meta12224;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12223.cljs$lang$type = true;
cljs.core.async.t12223.cljs$lang$ctorStr = "cljs.core.async/t12223";
cljs.core.async.t12223.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12223");
});
cljs.core.async.t12223.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12223.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12223.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12223.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12226 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12226 = (function (fn1,_,meta12224,ch,f,map_LT_,meta12227){
this.fn1 = fn1;
this._ = _;
this.meta12224 = meta12224;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12227 = meta12227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12226.cljs$lang$type = true;
cljs.core.async.t12226.cljs$lang$ctorStr = "cljs.core.async/t12226";
cljs.core.async.t12226.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12226");
});
cljs.core.async.t12226.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12226.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__12216_SHARP_){return f1.call(null,(((p1__12216_SHARP_ == null))?null:self__.f.call(null,p1__12216_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t12226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12228){var self__ = this;
var _12228__$1 = this;return self__.meta12227;
});
cljs.core.async.t12226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12228,meta12227__$1){var self__ = this;
var _12228__$1 = this;return (new cljs.core.async.t12226(self__.fn1,self__._,self__.meta12224,self__.ch,self__.f,self__.map_LT_,meta12227__$1));
});
cljs.core.async.__GT_t12226 = (function __GT_t12226(fn1__$1,___$2,meta12224__$1,ch__$2,f__$2,map_LT___$2,meta12227){return (new cljs.core.async.t12226(fn1__$1,___$2,meta12224__$1,ch__$2,f__$2,map_LT___$2,meta12227));
});
}
return (new cljs.core.async.t12226(fn1,___$1,self__.meta12224,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12223.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12223.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12225){var self__ = this;
var _12225__$1 = this;return self__.meta12224;
});
cljs.core.async.t12223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12225,meta12224__$1){var self__ = this;
var _12225__$1 = this;return (new cljs.core.async.t12223(self__.ch,self__.f,self__.map_LT_,meta12224__$1));
});
cljs.core.async.__GT_t12223 = (function __GT_t12223(ch__$1,f__$1,map_LT___$1,meta12224){return (new cljs.core.async.t12223(ch__$1,f__$1,map_LT___$1,meta12224));
});
}
return (new cljs.core.async.t12223(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12232 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12232 = (function (ch,f,map_GT_,meta12233){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12233 = meta12233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12232.cljs$lang$type = true;
cljs.core.async.t12232.cljs$lang$ctorStr = "cljs.core.async/t12232";
cljs.core.async.t12232.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12232");
});
cljs.core.async.t12232.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12232.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12232.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12234){var self__ = this;
var _12234__$1 = this;return self__.meta12233;
});
cljs.core.async.t12232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12234,meta12233__$1){var self__ = this;
var _12234__$1 = this;return (new cljs.core.async.t12232(self__.ch,self__.f,self__.map_GT_,meta12233__$1));
});
cljs.core.async.__GT_t12232 = (function __GT_t12232(ch__$1,f__$1,map_GT___$1,meta12233){return (new cljs.core.async.t12232(ch__$1,f__$1,map_GT___$1,meta12233));
});
}
return (new cljs.core.async.t12232(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12238 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12238 = (function (ch,p,filter_GT_,meta12239){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12239 = meta12239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12238.cljs$lang$type = true;
cljs.core.async.t12238.cljs$lang$ctorStr = "cljs.core.async/t12238";
cljs.core.async.t12238.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12238");
});
cljs.core.async.t12238.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12238.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12238.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12238.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12238.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12238.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12240){var self__ = this;
var _12240__$1 = this;return self__.meta12239;
});
cljs.core.async.t12238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12240,meta12239__$1){var self__ = this;
var _12240__$1 = this;return (new cljs.core.async.t12238(self__.ch,self__.p,self__.filter_GT_,meta12239__$1));
});
cljs.core.async.__GT_t12238 = (function __GT_t12238(ch__$1,p__$1,filter_GT___$1,meta12239){return (new cljs.core.async.t12238(ch__$1,p__$1,filter_GT___$1,meta12239));
});
}
return (new cljs.core.async.t12238(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6152__auto___12323 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_12302){var state_val_12303 = (state_12302[1]);if((state_val_12303 === 1))
{var state_12302__$1 = state_12302;var statearr_12304_12324 = state_12302__$1;(statearr_12304_12324[2] = null);
(statearr_12304_12324[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12303 === 2))
{var state_12302__$1 = state_12302;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12302__$1,4,ch);
} else
{if((state_val_12303 === 3))
{var inst_12300 = (state_12302[2]);var state_12302__$1 = state_12302;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12302__$1,inst_12300);
} else
{if((state_val_12303 === 4))
{var inst_12284 = (state_12302[7]);var inst_12284__$1 = (state_12302[2]);var inst_12285 = (inst_12284__$1 == null);var state_12302__$1 = (function (){var statearr_12305 = state_12302;(statearr_12305[7] = inst_12284__$1);
return statearr_12305;
})();if(cljs.core.truth_(inst_12285))
{var statearr_12306_12325 = state_12302__$1;(statearr_12306_12325[1] = 5);
} else
{var statearr_12307_12326 = state_12302__$1;(statearr_12307_12326[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12303 === 5))
{var inst_12287 = cljs.core.async.close_BANG_.call(null,out);var state_12302__$1 = state_12302;var statearr_12308_12327 = state_12302__$1;(statearr_12308_12327[2] = inst_12287);
(statearr_12308_12327[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12303 === 6))
{var inst_12284 = (state_12302[7]);var inst_12289 = p.call(null,inst_12284);var state_12302__$1 = state_12302;if(cljs.core.truth_(inst_12289))
{var statearr_12309_12328 = state_12302__$1;(statearr_12309_12328[1] = 8);
} else
{var statearr_12310_12329 = state_12302__$1;(statearr_12310_12329[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12303 === 7))
{var inst_12298 = (state_12302[2]);var state_12302__$1 = state_12302;var statearr_12311_12330 = state_12302__$1;(statearr_12311_12330[2] = inst_12298);
(statearr_12311_12330[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12303 === 8))
{var inst_12284 = (state_12302[7]);var state_12302__$1 = state_12302;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12302__$1,11,out,inst_12284);
} else
{if((state_val_12303 === 9))
{var state_12302__$1 = state_12302;var statearr_12312_12331 = state_12302__$1;(statearr_12312_12331[2] = null);
(statearr_12312_12331[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12303 === 10))
{var inst_12295 = (state_12302[2]);var state_12302__$1 = (function (){var statearr_12313 = state_12302;(statearr_12313[8] = inst_12295);
return statearr_12313;
})();var statearr_12314_12332 = state_12302__$1;(statearr_12314_12332[2] = null);
(statearr_12314_12332[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12303 === 11))
{var inst_12292 = (state_12302[2]);var state_12302__$1 = state_12302;var statearr_12315_12333 = state_12302__$1;(statearr_12315_12333[2] = inst_12292);
(statearr_12315_12333[1] = 10);
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
var state_machine__6138__auto____0 = (function (){var statearr_12319 = [null,null,null,null,null,null,null,null,null];(statearr_12319[0] = state_machine__6138__auto__);
(statearr_12319[1] = 1);
return statearr_12319;
});
var state_machine__6138__auto____1 = (function (state_12302){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_12302);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e12320){if((e12320 instanceof Object))
{var ex__6141__auto__ = e12320;var statearr_12321_12334 = state_12302;(statearr_12321_12334[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12302);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12320;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12335 = state_12302;
state_12302 = G__12335;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_12302){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_12302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_12322 = f__6153__auto__.call(null);(statearr_12322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___12323);
return statearr_12322;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_12487){var state_val_12488 = (state_12487[1]);if((state_val_12488 === 1))
{var state_12487__$1 = state_12487;var statearr_12489_12526 = state_12487__$1;(statearr_12489_12526[2] = null);
(statearr_12489_12526[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 2))
{var state_12487__$1 = state_12487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12487__$1,4,in$);
} else
{if((state_val_12488 === 3))
{var inst_12485 = (state_12487[2]);var state_12487__$1 = state_12487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12487__$1,inst_12485);
} else
{if((state_val_12488 === 4))
{var inst_12433 = (state_12487[7]);var inst_12433__$1 = (state_12487[2]);var inst_12434 = (inst_12433__$1 == null);var state_12487__$1 = (function (){var statearr_12490 = state_12487;(statearr_12490[7] = inst_12433__$1);
return statearr_12490;
})();if(cljs.core.truth_(inst_12434))
{var statearr_12491_12527 = state_12487__$1;(statearr_12491_12527[1] = 5);
} else
{var statearr_12492_12528 = state_12487__$1;(statearr_12492_12528[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 5))
{var inst_12436 = cljs.core.async.close_BANG_.call(null,out);var state_12487__$1 = state_12487;var statearr_12493_12529 = state_12487__$1;(statearr_12493_12529[2] = inst_12436);
(statearr_12493_12529[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 6))
{var inst_12433 = (state_12487[7]);var inst_12438 = f.call(null,inst_12433);var inst_12443 = cljs.core.seq.call(null,inst_12438);var inst_12444 = inst_12443;var inst_12445 = null;var inst_12446 = 0;var inst_12447 = 0;var state_12487__$1 = (function (){var statearr_12494 = state_12487;(statearr_12494[8] = inst_12446);
(statearr_12494[9] = inst_12447);
(statearr_12494[10] = inst_12445);
(statearr_12494[11] = inst_12444);
return statearr_12494;
})();var statearr_12495_12530 = state_12487__$1;(statearr_12495_12530[2] = null);
(statearr_12495_12530[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 7))
{var inst_12483 = (state_12487[2]);var state_12487__$1 = state_12487;var statearr_12496_12531 = state_12487__$1;(statearr_12496_12531[2] = inst_12483);
(statearr_12496_12531[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 8))
{var inst_12446 = (state_12487[8]);var inst_12447 = (state_12487[9]);var inst_12449 = (inst_12447 < inst_12446);var inst_12450 = inst_12449;var state_12487__$1 = state_12487;if(cljs.core.truth_(inst_12450))
{var statearr_12497_12532 = state_12487__$1;(statearr_12497_12532[1] = 10);
} else
{var statearr_12498_12533 = state_12487__$1;(statearr_12498_12533[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 9))
{var inst_12480 = (state_12487[2]);var state_12487__$1 = (function (){var statearr_12499 = state_12487;(statearr_12499[12] = inst_12480);
return statearr_12499;
})();var statearr_12500_12534 = state_12487__$1;(statearr_12500_12534[2] = null);
(statearr_12500_12534[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 10))
{var inst_12447 = (state_12487[9]);var inst_12445 = (state_12487[10]);var inst_12452 = cljs.core._nth.call(null,inst_12445,inst_12447);var state_12487__$1 = state_12487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12487__$1,13,out,inst_12452);
} else
{if((state_val_12488 === 11))
{var inst_12458 = (state_12487[13]);var inst_12444 = (state_12487[11]);var inst_12458__$1 = cljs.core.seq.call(null,inst_12444);var state_12487__$1 = (function (){var statearr_12504 = state_12487;(statearr_12504[13] = inst_12458__$1);
return statearr_12504;
})();if(inst_12458__$1)
{var statearr_12505_12535 = state_12487__$1;(statearr_12505_12535[1] = 14);
} else
{var statearr_12506_12536 = state_12487__$1;(statearr_12506_12536[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 12))
{var inst_12478 = (state_12487[2]);var state_12487__$1 = state_12487;var statearr_12507_12537 = state_12487__$1;(statearr_12507_12537[2] = inst_12478);
(statearr_12507_12537[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 13))
{var inst_12446 = (state_12487[8]);var inst_12447 = (state_12487[9]);var inst_12445 = (state_12487[10]);var inst_12444 = (state_12487[11]);var inst_12454 = (state_12487[2]);var inst_12455 = (inst_12447 + 1);var tmp12501 = inst_12446;var tmp12502 = inst_12445;var tmp12503 = inst_12444;var inst_12444__$1 = tmp12503;var inst_12445__$1 = tmp12502;var inst_12446__$1 = tmp12501;var inst_12447__$1 = inst_12455;var state_12487__$1 = (function (){var statearr_12508 = state_12487;(statearr_12508[8] = inst_12446__$1);
(statearr_12508[9] = inst_12447__$1);
(statearr_12508[14] = inst_12454);
(statearr_12508[10] = inst_12445__$1);
(statearr_12508[11] = inst_12444__$1);
return statearr_12508;
})();var statearr_12509_12538 = state_12487__$1;(statearr_12509_12538[2] = null);
(statearr_12509_12538[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 14))
{var inst_12458 = (state_12487[13]);var inst_12460 = cljs.core.chunked_seq_QMARK_.call(null,inst_12458);var state_12487__$1 = state_12487;if(inst_12460)
{var statearr_12510_12539 = state_12487__$1;(statearr_12510_12539[1] = 17);
} else
{var statearr_12511_12540 = state_12487__$1;(statearr_12511_12540[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 15))
{var state_12487__$1 = state_12487;var statearr_12512_12541 = state_12487__$1;(statearr_12512_12541[2] = null);
(statearr_12512_12541[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 16))
{var inst_12476 = (state_12487[2]);var state_12487__$1 = state_12487;var statearr_12513_12542 = state_12487__$1;(statearr_12513_12542[2] = inst_12476);
(statearr_12513_12542[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 17))
{var inst_12458 = (state_12487[13]);var inst_12462 = cljs.core.chunk_first.call(null,inst_12458);var inst_12463 = cljs.core.chunk_rest.call(null,inst_12458);var inst_12464 = cljs.core.count.call(null,inst_12462);var inst_12444 = inst_12463;var inst_12445 = inst_12462;var inst_12446 = inst_12464;var inst_12447 = 0;var state_12487__$1 = (function (){var statearr_12514 = state_12487;(statearr_12514[8] = inst_12446);
(statearr_12514[9] = inst_12447);
(statearr_12514[10] = inst_12445);
(statearr_12514[11] = inst_12444);
return statearr_12514;
})();var statearr_12515_12543 = state_12487__$1;(statearr_12515_12543[2] = null);
(statearr_12515_12543[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 18))
{var inst_12458 = (state_12487[13]);var inst_12467 = cljs.core.first.call(null,inst_12458);var state_12487__$1 = state_12487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12487__$1,20,out,inst_12467);
} else
{if((state_val_12488 === 19))
{var inst_12473 = (state_12487[2]);var state_12487__$1 = state_12487;var statearr_12516_12544 = state_12487__$1;(statearr_12516_12544[2] = inst_12473);
(statearr_12516_12544[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 20))
{var inst_12458 = (state_12487[13]);var inst_12469 = (state_12487[2]);var inst_12470 = cljs.core.next.call(null,inst_12458);var inst_12444 = inst_12470;var inst_12445 = null;var inst_12446 = 0;var inst_12447 = 0;var state_12487__$1 = (function (){var statearr_12517 = state_12487;(statearr_12517[15] = inst_12469);
(statearr_12517[8] = inst_12446);
(statearr_12517[9] = inst_12447);
(statearr_12517[10] = inst_12445);
(statearr_12517[11] = inst_12444);
return statearr_12517;
})();var statearr_12518_12545 = state_12487__$1;(statearr_12518_12545[2] = null);
(statearr_12518_12545[1] = 8);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_12522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12522[0] = state_machine__6138__auto__);
(statearr_12522[1] = 1);
return statearr_12522;
});
var state_machine__6138__auto____1 = (function (state_12487){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_12487);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e12523){if((e12523 instanceof Object))
{var ex__6141__auto__ = e12523;var statearr_12524_12546 = state_12487;(statearr_12524_12546[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12487);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12547 = state_12487;
state_12487 = G__12547;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_12487){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_12487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_12525 = f__6153__auto__.call(null);(statearr_12525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_12525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6152__auto___12628 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_12607){var state_val_12608 = (state_12607[1]);if((state_val_12608 === 1))
{var state_12607__$1 = state_12607;var statearr_12609_12629 = state_12607__$1;(statearr_12609_12629[2] = null);
(statearr_12609_12629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12608 === 2))
{var state_12607__$1 = state_12607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12607__$1,4,from);
} else
{if((state_val_12608 === 3))
{var inst_12605 = (state_12607[2]);var state_12607__$1 = state_12607;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12607__$1,inst_12605);
} else
{if((state_val_12608 === 4))
{var inst_12590 = (state_12607[7]);var inst_12590__$1 = (state_12607[2]);var inst_12591 = (inst_12590__$1 == null);var state_12607__$1 = (function (){var statearr_12610 = state_12607;(statearr_12610[7] = inst_12590__$1);
return statearr_12610;
})();if(cljs.core.truth_(inst_12591))
{var statearr_12611_12630 = state_12607__$1;(statearr_12611_12630[1] = 5);
} else
{var statearr_12612_12631 = state_12607__$1;(statearr_12612_12631[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12608 === 5))
{var state_12607__$1 = state_12607;if(cljs.core.truth_(close_QMARK_))
{var statearr_12613_12632 = state_12607__$1;(statearr_12613_12632[1] = 8);
} else
{var statearr_12614_12633 = state_12607__$1;(statearr_12614_12633[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12608 === 6))
{var inst_12590 = (state_12607[7]);var state_12607__$1 = state_12607;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12607__$1,11,to,inst_12590);
} else
{if((state_val_12608 === 7))
{var inst_12603 = (state_12607[2]);var state_12607__$1 = state_12607;var statearr_12615_12634 = state_12607__$1;(statearr_12615_12634[2] = inst_12603);
(statearr_12615_12634[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12608 === 8))
{var inst_12594 = cljs.core.async.close_BANG_.call(null,to);var state_12607__$1 = state_12607;var statearr_12616_12635 = state_12607__$1;(statearr_12616_12635[2] = inst_12594);
(statearr_12616_12635[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12608 === 9))
{var state_12607__$1 = state_12607;var statearr_12617_12636 = state_12607__$1;(statearr_12617_12636[2] = null);
(statearr_12617_12636[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12608 === 10))
{var inst_12597 = (state_12607[2]);var state_12607__$1 = state_12607;var statearr_12618_12637 = state_12607__$1;(statearr_12618_12637[2] = inst_12597);
(statearr_12618_12637[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12608 === 11))
{var inst_12600 = (state_12607[2]);var state_12607__$1 = (function (){var statearr_12619 = state_12607;(statearr_12619[8] = inst_12600);
return statearr_12619;
})();var statearr_12620_12638 = state_12607__$1;(statearr_12620_12638[2] = null);
(statearr_12620_12638[1] = 2);
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
var state_machine__6138__auto____0 = (function (){var statearr_12624 = [null,null,null,null,null,null,null,null,null];(statearr_12624[0] = state_machine__6138__auto__);
(statearr_12624[1] = 1);
return statearr_12624;
});
var state_machine__6138__auto____1 = (function (state_12607){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_12607);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e12625){if((e12625 instanceof Object))
{var ex__6141__auto__ = e12625;var statearr_12626_12639 = state_12607;(statearr_12626_12639[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12607);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12625;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12640 = state_12607;
state_12607 = G__12640;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_12607){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_12607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_12627 = f__6153__auto__.call(null);(statearr_12627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___12628);
return statearr_12627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6152__auto___12727 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_12705){var state_val_12706 = (state_12705[1]);if((state_val_12706 === 1))
{var state_12705__$1 = state_12705;var statearr_12707_12728 = state_12705__$1;(statearr_12707_12728[2] = null);
(statearr_12707_12728[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12706 === 2))
{var state_12705__$1 = state_12705;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12705__$1,4,ch);
} else
{if((state_val_12706 === 3))
{var inst_12703 = (state_12705[2]);var state_12705__$1 = state_12705;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12705__$1,inst_12703);
} else
{if((state_val_12706 === 4))
{var inst_12686 = (state_12705[7]);var inst_12686__$1 = (state_12705[2]);var inst_12687 = (inst_12686__$1 == null);var state_12705__$1 = (function (){var statearr_12708 = state_12705;(statearr_12708[7] = inst_12686__$1);
return statearr_12708;
})();if(cljs.core.truth_(inst_12687))
{var statearr_12709_12729 = state_12705__$1;(statearr_12709_12729[1] = 5);
} else
{var statearr_12710_12730 = state_12705__$1;(statearr_12710_12730[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12706 === 5))
{var inst_12689 = cljs.core.async.close_BANG_.call(null,tc);var inst_12690 = cljs.core.async.close_BANG_.call(null,fc);var state_12705__$1 = (function (){var statearr_12711 = state_12705;(statearr_12711[8] = inst_12689);
return statearr_12711;
})();var statearr_12712_12731 = state_12705__$1;(statearr_12712_12731[2] = inst_12690);
(statearr_12712_12731[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12706 === 6))
{var inst_12686 = (state_12705[7]);var inst_12692 = p.call(null,inst_12686);var state_12705__$1 = state_12705;if(cljs.core.truth_(inst_12692))
{var statearr_12713_12732 = state_12705__$1;(statearr_12713_12732[1] = 9);
} else
{var statearr_12714_12733 = state_12705__$1;(statearr_12714_12733[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12706 === 7))
{var inst_12701 = (state_12705[2]);var state_12705__$1 = state_12705;var statearr_12715_12734 = state_12705__$1;(statearr_12715_12734[2] = inst_12701);
(statearr_12715_12734[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12706 === 8))
{var inst_12698 = (state_12705[2]);var state_12705__$1 = (function (){var statearr_12716 = state_12705;(statearr_12716[9] = inst_12698);
return statearr_12716;
})();var statearr_12717_12735 = state_12705__$1;(statearr_12717_12735[2] = null);
(statearr_12717_12735[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12706 === 9))
{var state_12705__$1 = state_12705;var statearr_12718_12736 = state_12705__$1;(statearr_12718_12736[2] = tc);
(statearr_12718_12736[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12706 === 10))
{var state_12705__$1 = state_12705;var statearr_12719_12737 = state_12705__$1;(statearr_12719_12737[2] = fc);
(statearr_12719_12737[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12706 === 11))
{var inst_12686 = (state_12705[7]);var inst_12696 = (state_12705[2]);var state_12705__$1 = state_12705;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12705__$1,8,inst_12696,inst_12686);
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
var state_machine__6138__auto____0 = (function (){var statearr_12723 = [null,null,null,null,null,null,null,null,null,null];(statearr_12723[0] = state_machine__6138__auto__);
(statearr_12723[1] = 1);
return statearr_12723;
});
var state_machine__6138__auto____1 = (function (state_12705){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_12705);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e12724){if((e12724 instanceof Object))
{var ex__6141__auto__ = e12724;var statearr_12725_12738 = state_12705;(statearr_12725_12738[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12705);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12724;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12739 = state_12705;
state_12705 = G__12739;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_12705){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_12705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_12726 = f__6153__auto__.call(null);(statearr_12726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___12727);
return statearr_12726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_12786){var state_val_12787 = (state_12786[1]);if((state_val_12787 === 7))
{var inst_12782 = (state_12786[2]);var state_12786__$1 = state_12786;var statearr_12788_12804 = state_12786__$1;(statearr_12788_12804[2] = inst_12782);
(statearr_12788_12804[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12787 === 6))
{var inst_12775 = (state_12786[7]);var inst_12772 = (state_12786[8]);var inst_12779 = f.call(null,inst_12772,inst_12775);var inst_12772__$1 = inst_12779;var state_12786__$1 = (function (){var statearr_12789 = state_12786;(statearr_12789[8] = inst_12772__$1);
return statearr_12789;
})();var statearr_12790_12805 = state_12786__$1;(statearr_12790_12805[2] = null);
(statearr_12790_12805[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12787 === 5))
{var inst_12772 = (state_12786[8]);var state_12786__$1 = state_12786;var statearr_12791_12806 = state_12786__$1;(statearr_12791_12806[2] = inst_12772);
(statearr_12791_12806[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12787 === 4))
{var inst_12775 = (state_12786[7]);var inst_12775__$1 = (state_12786[2]);var inst_12776 = (inst_12775__$1 == null);var state_12786__$1 = (function (){var statearr_12792 = state_12786;(statearr_12792[7] = inst_12775__$1);
return statearr_12792;
})();if(cljs.core.truth_(inst_12776))
{var statearr_12793_12807 = state_12786__$1;(statearr_12793_12807[1] = 5);
} else
{var statearr_12794_12808 = state_12786__$1;(statearr_12794_12808[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12787 === 3))
{var inst_12784 = (state_12786[2]);var state_12786__$1 = state_12786;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12786__$1,inst_12784);
} else
{if((state_val_12787 === 2))
{var state_12786__$1 = state_12786;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12786__$1,4,ch);
} else
{if((state_val_12787 === 1))
{var inst_12772 = init;var state_12786__$1 = (function (){var statearr_12795 = state_12786;(statearr_12795[8] = inst_12772);
return statearr_12795;
})();var statearr_12796_12809 = state_12786__$1;(statearr_12796_12809[2] = null);
(statearr_12796_12809[1] = 2);
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
var state_machine__6138__auto____0 = (function (){var statearr_12800 = [null,null,null,null,null,null,null,null,null];(statearr_12800[0] = state_machine__6138__auto__);
(statearr_12800[1] = 1);
return statearr_12800;
});
var state_machine__6138__auto____1 = (function (state_12786){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_12786);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e12801){if((e12801 instanceof Object))
{var ex__6141__auto__ = e12801;var statearr_12802_12810 = state_12786;(statearr_12802_12810[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12786);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12811 = state_12786;
state_12786 = G__12811;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_12786){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_12786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_12803 = f__6153__auto__.call(null);(statearr_12803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_12803;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_12873){var state_val_12874 = (state_12873[1]);if((state_val_12874 === 1))
{var inst_12853 = cljs.core.seq.call(null,coll);var inst_12854 = inst_12853;var state_12873__$1 = (function (){var statearr_12875 = state_12873;(statearr_12875[7] = inst_12854);
return statearr_12875;
})();var statearr_12876_12894 = state_12873__$1;(statearr_12876_12894[2] = null);
(statearr_12876_12894[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 2))
{var inst_12854 = (state_12873[7]);var state_12873__$1 = state_12873;if(cljs.core.truth_(inst_12854))
{var statearr_12877_12895 = state_12873__$1;(statearr_12877_12895[1] = 4);
} else
{var statearr_12878_12896 = state_12873__$1;(statearr_12878_12896[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 3))
{var inst_12871 = (state_12873[2]);var state_12873__$1 = state_12873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12873__$1,inst_12871);
} else
{if((state_val_12874 === 4))
{var inst_12854 = (state_12873[7]);var inst_12857 = cljs.core.first.call(null,inst_12854);var state_12873__$1 = state_12873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12873__$1,7,ch,inst_12857);
} else
{if((state_val_12874 === 5))
{var state_12873__$1 = state_12873;if(cljs.core.truth_(close_QMARK_))
{var statearr_12879_12897 = state_12873__$1;(statearr_12879_12897[1] = 8);
} else
{var statearr_12880_12898 = state_12873__$1;(statearr_12880_12898[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 6))
{var inst_12869 = (state_12873[2]);var state_12873__$1 = state_12873;var statearr_12881_12899 = state_12873__$1;(statearr_12881_12899[2] = inst_12869);
(statearr_12881_12899[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 7))
{var inst_12854 = (state_12873[7]);var inst_12859 = (state_12873[2]);var inst_12860 = cljs.core.next.call(null,inst_12854);var inst_12854__$1 = inst_12860;var state_12873__$1 = (function (){var statearr_12882 = state_12873;(statearr_12882[7] = inst_12854__$1);
(statearr_12882[8] = inst_12859);
return statearr_12882;
})();var statearr_12883_12900 = state_12873__$1;(statearr_12883_12900[2] = null);
(statearr_12883_12900[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 8))
{var inst_12864 = cljs.core.async.close_BANG_.call(null,ch);var state_12873__$1 = state_12873;var statearr_12884_12901 = state_12873__$1;(statearr_12884_12901[2] = inst_12864);
(statearr_12884_12901[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 9))
{var state_12873__$1 = state_12873;var statearr_12885_12902 = state_12873__$1;(statearr_12885_12902[2] = null);
(statearr_12885_12902[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 10))
{var inst_12867 = (state_12873[2]);var state_12873__$1 = state_12873;var statearr_12886_12903 = state_12873__$1;(statearr_12886_12903[2] = inst_12867);
(statearr_12886_12903[1] = 6);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_12890 = [null,null,null,null,null,null,null,null,null];(statearr_12890[0] = state_machine__6138__auto__);
(statearr_12890[1] = 1);
return statearr_12890;
});
var state_machine__6138__auto____1 = (function (state_12873){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_12873);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e12891){if((e12891 instanceof Object))
{var ex__6141__auto__ = e12891;var statearr_12892_12904 = state_12873;(statearr_12892_12904[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12873);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12905 = state_12873;
state_12873 = G__12905;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_12873){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_12873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_12893 = f__6153__auto__.call(null);(statearr_12893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_12893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
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
cljs.core.async.Mux = (function (){var obj12907 = {};return obj12907;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3391__auto__ = _;if(and__3391__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4030__auto__ = (((_ == null))?null:_);return (function (){var or__3403__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12909 = {};return obj12909;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13133 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13133 = (function (cs,ch,mult,meta13134){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13134 = meta13134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13133.cljs$lang$type = true;
cljs.core.async.t13133.cljs$lang$ctorStr = "cljs.core.async/t13133";
cljs.core.async.t13133.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t13133");
});})(cs))
;
cljs.core.async.t13133.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13133.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13133.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13133.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13133.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13133.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13133.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13135){var self__ = this;
var _13135__$1 = this;return self__.meta13134;
});})(cs))
;
cljs.core.async.t13133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13135,meta13134__$1){var self__ = this;
var _13135__$1 = this;return (new cljs.core.async.t13133(self__.cs,self__.ch,self__.mult,meta13134__$1));
});})(cs))
;
cljs.core.async.__GT_t13133 = ((function (cs){
return (function __GT_t13133(cs__$1,ch__$1,mult__$1,meta13134){return (new cljs.core.async.t13133(cs__$1,ch__$1,mult__$1,meta13134));
});})(cs))
;
}
return (new cljs.core.async.t13133(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6152__auto___13356 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_13270){var state_val_13271 = (state_13270[1]);if((state_val_13271 === 32))
{var inst_13138 = (state_13270[7]);var inst_13214 = (state_13270[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13270,31,Object,null,30);var inst_13221 = cljs.core.async.put_BANG_.call(null,inst_13214,inst_13138,done);var state_13270__$1 = state_13270;var statearr_13272_13357 = state_13270__$1;(statearr_13272_13357[2] = inst_13221);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13270__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 1))
{var state_13270__$1 = state_13270;var statearr_13273_13358 = state_13270__$1;(statearr_13273_13358[2] = null);
(statearr_13273_13358[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 33))
{var inst_13227 = (state_13270[9]);var inst_13229 = cljs.core.chunked_seq_QMARK_.call(null,inst_13227);var state_13270__$1 = state_13270;if(inst_13229)
{var statearr_13274_13359 = state_13270__$1;(statearr_13274_13359[1] = 36);
} else
{var statearr_13275_13360 = state_13270__$1;(statearr_13275_13360[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 2))
{var state_13270__$1 = state_13270;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13270__$1,4,ch);
} else
{if((state_val_13271 === 34))
{var state_13270__$1 = state_13270;var statearr_13276_13361 = state_13270__$1;(statearr_13276_13361[2] = null);
(statearr_13276_13361[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 3))
{var inst_13268 = (state_13270[2]);var state_13270__$1 = state_13270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13270__$1,inst_13268);
} else
{if((state_val_13271 === 35))
{var inst_13252 = (state_13270[2]);var state_13270__$1 = state_13270;var statearr_13277_13362 = state_13270__$1;(statearr_13277_13362[2] = inst_13252);
(statearr_13277_13362[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 4))
{var inst_13138 = (state_13270[7]);var inst_13138__$1 = (state_13270[2]);var inst_13139 = (inst_13138__$1 == null);var state_13270__$1 = (function (){var statearr_13278 = state_13270;(statearr_13278[7] = inst_13138__$1);
return statearr_13278;
})();if(cljs.core.truth_(inst_13139))
{var statearr_13279_13363 = state_13270__$1;(statearr_13279_13363[1] = 5);
} else
{var statearr_13280_13364 = state_13270__$1;(statearr_13280_13364[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 36))
{var inst_13227 = (state_13270[9]);var inst_13231 = cljs.core.chunk_first.call(null,inst_13227);var inst_13232 = cljs.core.chunk_rest.call(null,inst_13227);var inst_13233 = cljs.core.count.call(null,inst_13231);var inst_13206 = inst_13232;var inst_13207 = inst_13231;var inst_13208 = inst_13233;var inst_13209 = 0;var state_13270__$1 = (function (){var statearr_13281 = state_13270;(statearr_13281[10] = inst_13209);
(statearr_13281[11] = inst_13206);
(statearr_13281[12] = inst_13207);
(statearr_13281[13] = inst_13208);
return statearr_13281;
})();var statearr_13282_13365 = state_13270__$1;(statearr_13282_13365[2] = null);
(statearr_13282_13365[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 5))
{var inst_13145 = cljs.core.deref.call(null,cs);var inst_13146 = cljs.core.seq.call(null,inst_13145);var inst_13147 = inst_13146;var inst_13148 = null;var inst_13149 = 0;var inst_13150 = 0;var state_13270__$1 = (function (){var statearr_13283 = state_13270;(statearr_13283[14] = inst_13150);
(statearr_13283[15] = inst_13149);
(statearr_13283[16] = inst_13148);
(statearr_13283[17] = inst_13147);
return statearr_13283;
})();var statearr_13284_13366 = state_13270__$1;(statearr_13284_13366[2] = null);
(statearr_13284_13366[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 37))
{var inst_13227 = (state_13270[9]);var inst_13236 = cljs.core.first.call(null,inst_13227);var state_13270__$1 = (function (){var statearr_13285 = state_13270;(statearr_13285[18] = inst_13236);
return statearr_13285;
})();var statearr_13286_13367 = state_13270__$1;(statearr_13286_13367[2] = null);
(statearr_13286_13367[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 6))
{var inst_13198 = (state_13270[19]);var inst_13197 = cljs.core.deref.call(null,cs);var inst_13198__$1 = cljs.core.keys.call(null,inst_13197);var inst_13199 = cljs.core.count.call(null,inst_13198__$1);var inst_13200 = cljs.core.reset_BANG_.call(null,dctr,inst_13199);var inst_13205 = cljs.core.seq.call(null,inst_13198__$1);var inst_13206 = inst_13205;var inst_13207 = null;var inst_13208 = 0;var inst_13209 = 0;var state_13270__$1 = (function (){var statearr_13287 = state_13270;(statearr_13287[10] = inst_13209);
(statearr_13287[19] = inst_13198__$1);
(statearr_13287[20] = inst_13200);
(statearr_13287[11] = inst_13206);
(statearr_13287[12] = inst_13207);
(statearr_13287[13] = inst_13208);
return statearr_13287;
})();var statearr_13288_13368 = state_13270__$1;(statearr_13288_13368[2] = null);
(statearr_13288_13368[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 38))
{var inst_13249 = (state_13270[2]);var state_13270__$1 = state_13270;var statearr_13289_13369 = state_13270__$1;(statearr_13289_13369[2] = inst_13249);
(statearr_13289_13369[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 7))
{var inst_13266 = (state_13270[2]);var state_13270__$1 = state_13270;var statearr_13290_13370 = state_13270__$1;(statearr_13290_13370[2] = inst_13266);
(statearr_13290_13370[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 39))
{var inst_13227 = (state_13270[9]);var inst_13245 = (state_13270[2]);var inst_13246 = cljs.core.next.call(null,inst_13227);var inst_13206 = inst_13246;var inst_13207 = null;var inst_13208 = 0;var inst_13209 = 0;var state_13270__$1 = (function (){var statearr_13291 = state_13270;(statearr_13291[10] = inst_13209);
(statearr_13291[21] = inst_13245);
(statearr_13291[11] = inst_13206);
(statearr_13291[12] = inst_13207);
(statearr_13291[13] = inst_13208);
return statearr_13291;
})();var statearr_13292_13371 = state_13270__$1;(statearr_13292_13371[2] = null);
(statearr_13292_13371[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 8))
{var inst_13150 = (state_13270[14]);var inst_13149 = (state_13270[15]);var inst_13152 = (inst_13150 < inst_13149);var inst_13153 = inst_13152;var state_13270__$1 = state_13270;if(cljs.core.truth_(inst_13153))
{var statearr_13293_13372 = state_13270__$1;(statearr_13293_13372[1] = 10);
} else
{var statearr_13294_13373 = state_13270__$1;(statearr_13294_13373[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 40))
{var inst_13236 = (state_13270[18]);var inst_13237 = (state_13270[2]);var inst_13238 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13239 = cljs.core.async.untap_STAR_.call(null,m,inst_13236);var state_13270__$1 = (function (){var statearr_13295 = state_13270;(statearr_13295[22] = inst_13238);
(statearr_13295[23] = inst_13237);
return statearr_13295;
})();var statearr_13296_13374 = state_13270__$1;(statearr_13296_13374[2] = inst_13239);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13270__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 9))
{var inst_13195 = (state_13270[2]);var state_13270__$1 = state_13270;var statearr_13297_13375 = state_13270__$1;(statearr_13297_13375[2] = inst_13195);
(statearr_13297_13375[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 41))
{var inst_13236 = (state_13270[18]);var inst_13138 = (state_13270[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13270,40,Object,null,39);var inst_13243 = cljs.core.async.put_BANG_.call(null,inst_13236,inst_13138,done);var state_13270__$1 = state_13270;var statearr_13298_13376 = state_13270__$1;(statearr_13298_13376[2] = inst_13243);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13270__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 10))
{var inst_13150 = (state_13270[14]);var inst_13148 = (state_13270[16]);var inst_13156 = cljs.core._nth.call(null,inst_13148,inst_13150);var inst_13157 = cljs.core.nth.call(null,inst_13156,0,null);var inst_13158 = cljs.core.nth.call(null,inst_13156,1,null);var state_13270__$1 = (function (){var statearr_13299 = state_13270;(statearr_13299[24] = inst_13157);
return statearr_13299;
})();if(cljs.core.truth_(inst_13158))
{var statearr_13300_13377 = state_13270__$1;(statearr_13300_13377[1] = 13);
} else
{var statearr_13301_13378 = state_13270__$1;(statearr_13301_13378[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 42))
{var state_13270__$1 = state_13270;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13270__$1,45,dchan);
} else
{if((state_val_13271 === 11))
{var inst_13167 = (state_13270[25]);var inst_13147 = (state_13270[17]);var inst_13167__$1 = cljs.core.seq.call(null,inst_13147);var state_13270__$1 = (function (){var statearr_13302 = state_13270;(statearr_13302[25] = inst_13167__$1);
return statearr_13302;
})();if(inst_13167__$1)
{var statearr_13303_13379 = state_13270__$1;(statearr_13303_13379[1] = 16);
} else
{var statearr_13304_13380 = state_13270__$1;(statearr_13304_13380[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 43))
{var state_13270__$1 = state_13270;var statearr_13305_13381 = state_13270__$1;(statearr_13305_13381[2] = null);
(statearr_13305_13381[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 12))
{var inst_13193 = (state_13270[2]);var state_13270__$1 = state_13270;var statearr_13306_13382 = state_13270__$1;(statearr_13306_13382[2] = inst_13193);
(statearr_13306_13382[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 44))
{var inst_13263 = (state_13270[2]);var state_13270__$1 = (function (){var statearr_13307 = state_13270;(statearr_13307[26] = inst_13263);
return statearr_13307;
})();var statearr_13308_13383 = state_13270__$1;(statearr_13308_13383[2] = null);
(statearr_13308_13383[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 13))
{var inst_13157 = (state_13270[24]);var inst_13160 = cljs.core.async.close_BANG_.call(null,inst_13157);var state_13270__$1 = state_13270;var statearr_13309_13384 = state_13270__$1;(statearr_13309_13384[2] = inst_13160);
(statearr_13309_13384[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 45))
{var inst_13260 = (state_13270[2]);var state_13270__$1 = state_13270;var statearr_13313_13385 = state_13270__$1;(statearr_13313_13385[2] = inst_13260);
(statearr_13313_13385[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 14))
{var state_13270__$1 = state_13270;var statearr_13314_13386 = state_13270__$1;(statearr_13314_13386[2] = null);
(statearr_13314_13386[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 15))
{var inst_13150 = (state_13270[14]);var inst_13149 = (state_13270[15]);var inst_13148 = (state_13270[16]);var inst_13147 = (state_13270[17]);var inst_13163 = (state_13270[2]);var inst_13164 = (inst_13150 + 1);var tmp13310 = inst_13149;var tmp13311 = inst_13148;var tmp13312 = inst_13147;var inst_13147__$1 = tmp13312;var inst_13148__$1 = tmp13311;var inst_13149__$1 = tmp13310;var inst_13150__$1 = inst_13164;var state_13270__$1 = (function (){var statearr_13315 = state_13270;(statearr_13315[14] = inst_13150__$1);
(statearr_13315[27] = inst_13163);
(statearr_13315[15] = inst_13149__$1);
(statearr_13315[16] = inst_13148__$1);
(statearr_13315[17] = inst_13147__$1);
return statearr_13315;
})();var statearr_13316_13387 = state_13270__$1;(statearr_13316_13387[2] = null);
(statearr_13316_13387[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 16))
{var inst_13167 = (state_13270[25]);var inst_13169 = cljs.core.chunked_seq_QMARK_.call(null,inst_13167);var state_13270__$1 = state_13270;if(inst_13169)
{var statearr_13317_13388 = state_13270__$1;(statearr_13317_13388[1] = 19);
} else
{var statearr_13318_13389 = state_13270__$1;(statearr_13318_13389[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 17))
{var state_13270__$1 = state_13270;var statearr_13319_13390 = state_13270__$1;(statearr_13319_13390[2] = null);
(statearr_13319_13390[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 18))
{var inst_13191 = (state_13270[2]);var state_13270__$1 = state_13270;var statearr_13320_13391 = state_13270__$1;(statearr_13320_13391[2] = inst_13191);
(statearr_13320_13391[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 19))
{var inst_13167 = (state_13270[25]);var inst_13171 = cljs.core.chunk_first.call(null,inst_13167);var inst_13172 = cljs.core.chunk_rest.call(null,inst_13167);var inst_13173 = cljs.core.count.call(null,inst_13171);var inst_13147 = inst_13172;var inst_13148 = inst_13171;var inst_13149 = inst_13173;var inst_13150 = 0;var state_13270__$1 = (function (){var statearr_13321 = state_13270;(statearr_13321[14] = inst_13150);
(statearr_13321[15] = inst_13149);
(statearr_13321[16] = inst_13148);
(statearr_13321[17] = inst_13147);
return statearr_13321;
})();var statearr_13322_13392 = state_13270__$1;(statearr_13322_13392[2] = null);
(statearr_13322_13392[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 20))
{var inst_13167 = (state_13270[25]);var inst_13177 = cljs.core.first.call(null,inst_13167);var inst_13178 = cljs.core.nth.call(null,inst_13177,0,null);var inst_13179 = cljs.core.nth.call(null,inst_13177,1,null);var state_13270__$1 = (function (){var statearr_13323 = state_13270;(statearr_13323[28] = inst_13178);
return statearr_13323;
})();if(cljs.core.truth_(inst_13179))
{var statearr_13324_13393 = state_13270__$1;(statearr_13324_13393[1] = 22);
} else
{var statearr_13325_13394 = state_13270__$1;(statearr_13325_13394[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 21))
{var inst_13188 = (state_13270[2]);var state_13270__$1 = state_13270;var statearr_13326_13395 = state_13270__$1;(statearr_13326_13395[2] = inst_13188);
(statearr_13326_13395[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 22))
{var inst_13178 = (state_13270[28]);var inst_13181 = cljs.core.async.close_BANG_.call(null,inst_13178);var state_13270__$1 = state_13270;var statearr_13327_13396 = state_13270__$1;(statearr_13327_13396[2] = inst_13181);
(statearr_13327_13396[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 23))
{var state_13270__$1 = state_13270;var statearr_13328_13397 = state_13270__$1;(statearr_13328_13397[2] = null);
(statearr_13328_13397[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 24))
{var inst_13167 = (state_13270[25]);var inst_13184 = (state_13270[2]);var inst_13185 = cljs.core.next.call(null,inst_13167);var inst_13147 = inst_13185;var inst_13148 = null;var inst_13149 = 0;var inst_13150 = 0;var state_13270__$1 = (function (){var statearr_13329 = state_13270;(statearr_13329[14] = inst_13150);
(statearr_13329[15] = inst_13149);
(statearr_13329[16] = inst_13148);
(statearr_13329[17] = inst_13147);
(statearr_13329[29] = inst_13184);
return statearr_13329;
})();var statearr_13330_13398 = state_13270__$1;(statearr_13330_13398[2] = null);
(statearr_13330_13398[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 25))
{var inst_13209 = (state_13270[10]);var inst_13208 = (state_13270[13]);var inst_13211 = (inst_13209 < inst_13208);var inst_13212 = inst_13211;var state_13270__$1 = state_13270;if(cljs.core.truth_(inst_13212))
{var statearr_13331_13399 = state_13270__$1;(statearr_13331_13399[1] = 27);
} else
{var statearr_13332_13400 = state_13270__$1;(statearr_13332_13400[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 26))
{var inst_13198 = (state_13270[19]);var inst_13256 = (state_13270[2]);var inst_13257 = cljs.core.seq.call(null,inst_13198);var state_13270__$1 = (function (){var statearr_13333 = state_13270;(statearr_13333[30] = inst_13256);
return statearr_13333;
})();if(inst_13257)
{var statearr_13334_13401 = state_13270__$1;(statearr_13334_13401[1] = 42);
} else
{var statearr_13335_13402 = state_13270__$1;(statearr_13335_13402[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 27))
{var inst_13209 = (state_13270[10]);var inst_13207 = (state_13270[12]);var inst_13214 = cljs.core._nth.call(null,inst_13207,inst_13209);var state_13270__$1 = (function (){var statearr_13336 = state_13270;(statearr_13336[8] = inst_13214);
return statearr_13336;
})();var statearr_13337_13403 = state_13270__$1;(statearr_13337_13403[2] = null);
(statearr_13337_13403[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 28))
{var inst_13227 = (state_13270[9]);var inst_13206 = (state_13270[11]);var inst_13227__$1 = cljs.core.seq.call(null,inst_13206);var state_13270__$1 = (function (){var statearr_13341 = state_13270;(statearr_13341[9] = inst_13227__$1);
return statearr_13341;
})();if(inst_13227__$1)
{var statearr_13342_13404 = state_13270__$1;(statearr_13342_13404[1] = 33);
} else
{var statearr_13343_13405 = state_13270__$1;(statearr_13343_13405[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 29))
{var inst_13254 = (state_13270[2]);var state_13270__$1 = state_13270;var statearr_13344_13406 = state_13270__$1;(statearr_13344_13406[2] = inst_13254);
(statearr_13344_13406[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 30))
{var inst_13209 = (state_13270[10]);var inst_13206 = (state_13270[11]);var inst_13207 = (state_13270[12]);var inst_13208 = (state_13270[13]);var inst_13223 = (state_13270[2]);var inst_13224 = (inst_13209 + 1);var tmp13338 = inst_13206;var tmp13339 = inst_13207;var tmp13340 = inst_13208;var inst_13206__$1 = tmp13338;var inst_13207__$1 = tmp13339;var inst_13208__$1 = tmp13340;var inst_13209__$1 = inst_13224;var state_13270__$1 = (function (){var statearr_13345 = state_13270;(statearr_13345[10] = inst_13209__$1);
(statearr_13345[31] = inst_13223);
(statearr_13345[11] = inst_13206__$1);
(statearr_13345[12] = inst_13207__$1);
(statearr_13345[13] = inst_13208__$1);
return statearr_13345;
})();var statearr_13346_13407 = state_13270__$1;(statearr_13346_13407[2] = null);
(statearr_13346_13407[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13271 === 31))
{var inst_13214 = (state_13270[8]);var inst_13215 = (state_13270[2]);var inst_13216 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13217 = cljs.core.async.untap_STAR_.call(null,m,inst_13214);var state_13270__$1 = (function (){var statearr_13347 = state_13270;(statearr_13347[32] = inst_13216);
(statearr_13347[33] = inst_13215);
return statearr_13347;
})();var statearr_13348_13408 = state_13270__$1;(statearr_13348_13408[2] = inst_13217);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13270__$1);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_13352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13352[0] = state_machine__6138__auto__);
(statearr_13352[1] = 1);
return statearr_13352;
});
var state_machine__6138__auto____1 = (function (state_13270){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_13270);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e13353){if((e13353 instanceof Object))
{var ex__6141__auto__ = e13353;var statearr_13354_13409 = state_13270;(statearr_13354_13409[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13270);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13410 = state_13270;
state_13270 = G__13410;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_13270){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_13270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_13355 = f__6153__auto__.call(null);(statearr_13355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___13356);
return statearr_13355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
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
cljs.core.async.Mix = (function (){var obj13412 = {};return obj13412;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t13522 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13522 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13523){
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
this.meta13523 = meta13523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13522.cljs$lang$type = true;
cljs.core.async.t13522.cljs$lang$ctorStr = "cljs.core.async/t13522";
cljs.core.async.t13522.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t13522");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13522.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13522.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13522.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13522.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13522.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13522.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13522.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13522.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13524){var self__ = this;
var _13524__$1 = this;return self__.meta13523;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13524,meta13523__$1){var self__ = this;
var _13524__$1 = this;return (new cljs.core.async.t13522(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13523__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13522 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13522(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13523){return (new cljs.core.async.t13522(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13523));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13522(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6152__auto___13631 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_13589){var state_val_13590 = (state_13589[1]);if((state_val_13590 === 1))
{var inst_13528 = (state_13589[7]);var inst_13528__$1 = calc_state.call(null);var inst_13529 = cljs.core.seq_QMARK_.call(null,inst_13528__$1);var state_13589__$1 = (function (){var statearr_13591 = state_13589;(statearr_13591[7] = inst_13528__$1);
return statearr_13591;
})();if(inst_13529)
{var statearr_13592_13632 = state_13589__$1;(statearr_13592_13632[1] = 2);
} else
{var statearr_13593_13633 = state_13589__$1;(statearr_13593_13633[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 2))
{var inst_13528 = (state_13589[7]);var inst_13531 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13528);var state_13589__$1 = state_13589;var statearr_13594_13634 = state_13589__$1;(statearr_13594_13634[2] = inst_13531);
(statearr_13594_13634[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 3))
{var inst_13528 = (state_13589[7]);var state_13589__$1 = state_13589;var statearr_13595_13635 = state_13589__$1;(statearr_13595_13635[2] = inst_13528);
(statearr_13595_13635[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 4))
{var inst_13528 = (state_13589[7]);var inst_13534 = (state_13589[2]);var inst_13535 = cljs.core.get.call(null,inst_13534,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13536 = cljs.core.get.call(null,inst_13534,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13537 = cljs.core.get.call(null,inst_13534,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13538 = inst_13528;var state_13589__$1 = (function (){var statearr_13596 = state_13589;(statearr_13596[8] = inst_13535);
(statearr_13596[9] = inst_13536);
(statearr_13596[10] = inst_13537);
(statearr_13596[11] = inst_13538);
return statearr_13596;
})();var statearr_13597_13636 = state_13589__$1;(statearr_13597_13636[2] = null);
(statearr_13597_13636[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 5))
{var inst_13538 = (state_13589[11]);var inst_13541 = cljs.core.seq_QMARK_.call(null,inst_13538);var state_13589__$1 = state_13589;if(inst_13541)
{var statearr_13598_13637 = state_13589__$1;(statearr_13598_13637[1] = 7);
} else
{var statearr_13599_13638 = state_13589__$1;(statearr_13599_13638[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 6))
{var inst_13587 = (state_13589[2]);var state_13589__$1 = state_13589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13589__$1,inst_13587);
} else
{if((state_val_13590 === 7))
{var inst_13538 = (state_13589[11]);var inst_13543 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13538);var state_13589__$1 = state_13589;var statearr_13600_13639 = state_13589__$1;(statearr_13600_13639[2] = inst_13543);
(statearr_13600_13639[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 8))
{var inst_13538 = (state_13589[11]);var state_13589__$1 = state_13589;var statearr_13601_13640 = state_13589__$1;(statearr_13601_13640[2] = inst_13538);
(statearr_13601_13640[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 9))
{var inst_13546 = (state_13589[12]);var inst_13546__$1 = (state_13589[2]);var inst_13547 = cljs.core.get.call(null,inst_13546__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13548 = cljs.core.get.call(null,inst_13546__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13549 = cljs.core.get.call(null,inst_13546__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13589__$1 = (function (){var statearr_13602 = state_13589;(statearr_13602[12] = inst_13546__$1);
(statearr_13602[13] = inst_13548);
(statearr_13602[14] = inst_13549);
return statearr_13602;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13589__$1,10,inst_13547);
} else
{if((state_val_13590 === 10))
{var inst_13554 = (state_13589[15]);var inst_13553 = (state_13589[16]);var inst_13552 = (state_13589[2]);var inst_13553__$1 = cljs.core.nth.call(null,inst_13552,0,null);var inst_13554__$1 = cljs.core.nth.call(null,inst_13552,1,null);var inst_13555 = (inst_13553__$1 == null);var inst_13556 = cljs.core._EQ_.call(null,inst_13554__$1,change);var inst_13557 = (inst_13555) || (inst_13556);var state_13589__$1 = (function (){var statearr_13603 = state_13589;(statearr_13603[15] = inst_13554__$1);
(statearr_13603[16] = inst_13553__$1);
return statearr_13603;
})();if(cljs.core.truth_(inst_13557))
{var statearr_13604_13641 = state_13589__$1;(statearr_13604_13641[1] = 11);
} else
{var statearr_13605_13642 = state_13589__$1;(statearr_13605_13642[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 11))
{var inst_13553 = (state_13589[16]);var inst_13559 = (inst_13553 == null);var state_13589__$1 = state_13589;if(cljs.core.truth_(inst_13559))
{var statearr_13606_13643 = state_13589__$1;(statearr_13606_13643[1] = 14);
} else
{var statearr_13607_13644 = state_13589__$1;(statearr_13607_13644[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 12))
{var inst_13554 = (state_13589[15]);var inst_13549 = (state_13589[14]);var inst_13568 = (state_13589[17]);var inst_13568__$1 = inst_13549.call(null,inst_13554);var state_13589__$1 = (function (){var statearr_13608 = state_13589;(statearr_13608[17] = inst_13568__$1);
return statearr_13608;
})();if(cljs.core.truth_(inst_13568__$1))
{var statearr_13609_13645 = state_13589__$1;(statearr_13609_13645[1] = 17);
} else
{var statearr_13610_13646 = state_13589__$1;(statearr_13610_13646[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 13))
{var inst_13585 = (state_13589[2]);var state_13589__$1 = state_13589;var statearr_13611_13647 = state_13589__$1;(statearr_13611_13647[2] = inst_13585);
(statearr_13611_13647[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 14))
{var inst_13554 = (state_13589[15]);var inst_13561 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13554);var state_13589__$1 = state_13589;var statearr_13612_13648 = state_13589__$1;(statearr_13612_13648[2] = inst_13561);
(statearr_13612_13648[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 15))
{var state_13589__$1 = state_13589;var statearr_13613_13649 = state_13589__$1;(statearr_13613_13649[2] = null);
(statearr_13613_13649[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 16))
{var inst_13564 = (state_13589[2]);var inst_13565 = calc_state.call(null);var inst_13538 = inst_13565;var state_13589__$1 = (function (){var statearr_13614 = state_13589;(statearr_13614[18] = inst_13564);
(statearr_13614[11] = inst_13538);
return statearr_13614;
})();var statearr_13615_13650 = state_13589__$1;(statearr_13615_13650[2] = null);
(statearr_13615_13650[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 17))
{var inst_13568 = (state_13589[17]);var state_13589__$1 = state_13589;var statearr_13616_13651 = state_13589__$1;(statearr_13616_13651[2] = inst_13568);
(statearr_13616_13651[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 18))
{var inst_13554 = (state_13589[15]);var inst_13548 = (state_13589[13]);var inst_13549 = (state_13589[14]);var inst_13571 = cljs.core.empty_QMARK_.call(null,inst_13549);var inst_13572 = inst_13548.call(null,inst_13554);var inst_13573 = cljs.core.not.call(null,inst_13572);var inst_13574 = (inst_13571) && (inst_13573);var state_13589__$1 = state_13589;var statearr_13617_13652 = state_13589__$1;(statearr_13617_13652[2] = inst_13574);
(statearr_13617_13652[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 19))
{var inst_13576 = (state_13589[2]);var state_13589__$1 = state_13589;if(cljs.core.truth_(inst_13576))
{var statearr_13618_13653 = state_13589__$1;(statearr_13618_13653[1] = 20);
} else
{var statearr_13619_13654 = state_13589__$1;(statearr_13619_13654[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 20))
{var inst_13553 = (state_13589[16]);var state_13589__$1 = state_13589;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13589__$1,23,out,inst_13553);
} else
{if((state_val_13590 === 21))
{var state_13589__$1 = state_13589;var statearr_13620_13655 = state_13589__$1;(statearr_13620_13655[2] = null);
(statearr_13620_13655[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 22))
{var inst_13546 = (state_13589[12]);var inst_13582 = (state_13589[2]);var inst_13538 = inst_13546;var state_13589__$1 = (function (){var statearr_13621 = state_13589;(statearr_13621[11] = inst_13538);
(statearr_13621[19] = inst_13582);
return statearr_13621;
})();var statearr_13622_13656 = state_13589__$1;(statearr_13622_13656[2] = null);
(statearr_13622_13656[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 23))
{var inst_13579 = (state_13589[2]);var state_13589__$1 = state_13589;var statearr_13623_13657 = state_13589__$1;(statearr_13623_13657[2] = inst_13579);
(statearr_13623_13657[1] = 22);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_13627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13627[0] = state_machine__6138__auto__);
(statearr_13627[1] = 1);
return statearr_13627;
});
var state_machine__6138__auto____1 = (function (state_13589){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_13589);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e13628){if((e13628 instanceof Object))
{var ex__6141__auto__ = e13628;var statearr_13629_13658 = state_13589;(statearr_13629_13658[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13589);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13659 = state_13589;
state_13589 = G__13659;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_13589){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_13589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_13630 = f__6153__auto__.call(null);(statearr_13630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___13631);
return statearr_13630;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
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
cljs.core.async.Pub = (function (){var obj13661 = {};return obj13661;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
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
return (function (topic){var or__3403__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3403__auto__,mults){
return (function (p1__13662_SHARP_){if(cljs.core.truth_(p1__13662_SHARP_.call(null,topic)))
{return p1__13662_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13662_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3403__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13787 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13787 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13788){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13788 = meta13788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13787.cljs$lang$type = true;
cljs.core.async.t13787.cljs$lang$ctorStr = "cljs.core.async/t13787";
cljs.core.async.t13787.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t13787");
});})(mults,ensure_mult))
;
cljs.core.async.t13787.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13787.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13787.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13787.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13787.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13789){var self__ = this;
var _13789__$1 = this;return self__.meta13788;
});})(mults,ensure_mult))
;
cljs.core.async.t13787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13789,meta13788__$1){var self__ = this;
var _13789__$1 = this;return (new cljs.core.async.t13787(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13788__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13787 = ((function (mults,ensure_mult){
return (function __GT_t13787(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13788){return (new cljs.core.async.t13787(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13788));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13787(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6152__auto___13911 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_13863){var state_val_13864 = (state_13863[1]);if((state_val_13864 === 1))
{var state_13863__$1 = state_13863;var statearr_13865_13912 = state_13863__$1;(statearr_13865_13912[2] = null);
(statearr_13865_13912[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 2))
{var state_13863__$1 = state_13863;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13863__$1,4,ch);
} else
{if((state_val_13864 === 3))
{var inst_13861 = (state_13863[2]);var state_13863__$1 = state_13863;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13863__$1,inst_13861);
} else
{if((state_val_13864 === 4))
{var inst_13792 = (state_13863[7]);var inst_13792__$1 = (state_13863[2]);var inst_13793 = (inst_13792__$1 == null);var state_13863__$1 = (function (){var statearr_13866 = state_13863;(statearr_13866[7] = inst_13792__$1);
return statearr_13866;
})();if(cljs.core.truth_(inst_13793))
{var statearr_13867_13913 = state_13863__$1;(statearr_13867_13913[1] = 5);
} else
{var statearr_13868_13914 = state_13863__$1;(statearr_13868_13914[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 5))
{var inst_13799 = cljs.core.deref.call(null,mults);var inst_13800 = cljs.core.vals.call(null,inst_13799);var inst_13801 = cljs.core.seq.call(null,inst_13800);var inst_13802 = inst_13801;var inst_13803 = null;var inst_13804 = 0;var inst_13805 = 0;var state_13863__$1 = (function (){var statearr_13869 = state_13863;(statearr_13869[8] = inst_13804);
(statearr_13869[9] = inst_13803);
(statearr_13869[10] = inst_13805);
(statearr_13869[11] = inst_13802);
return statearr_13869;
})();var statearr_13870_13915 = state_13863__$1;(statearr_13870_13915[2] = null);
(statearr_13870_13915[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 6))
{var inst_13792 = (state_13863[7]);var inst_13842 = (state_13863[12]);var inst_13840 = (state_13863[13]);var inst_13840__$1 = topic_fn.call(null,inst_13792);var inst_13841 = cljs.core.deref.call(null,mults);var inst_13842__$1 = cljs.core.get.call(null,inst_13841,inst_13840__$1);var state_13863__$1 = (function (){var statearr_13871 = state_13863;(statearr_13871[12] = inst_13842__$1);
(statearr_13871[13] = inst_13840__$1);
return statearr_13871;
})();if(cljs.core.truth_(inst_13842__$1))
{var statearr_13872_13916 = state_13863__$1;(statearr_13872_13916[1] = 19);
} else
{var statearr_13873_13917 = state_13863__$1;(statearr_13873_13917[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 7))
{var inst_13859 = (state_13863[2]);var state_13863__$1 = state_13863;var statearr_13874_13918 = state_13863__$1;(statearr_13874_13918[2] = inst_13859);
(statearr_13874_13918[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 8))
{var inst_13804 = (state_13863[8]);var inst_13805 = (state_13863[10]);var inst_13807 = (inst_13805 < inst_13804);var inst_13808 = inst_13807;var state_13863__$1 = state_13863;if(cljs.core.truth_(inst_13808))
{var statearr_13878_13919 = state_13863__$1;(statearr_13878_13919[1] = 10);
} else
{var statearr_13879_13920 = state_13863__$1;(statearr_13879_13920[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 9))
{var inst_13838 = (state_13863[2]);var state_13863__$1 = state_13863;var statearr_13880_13921 = state_13863__$1;(statearr_13880_13921[2] = inst_13838);
(statearr_13880_13921[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 10))
{var inst_13804 = (state_13863[8]);var inst_13803 = (state_13863[9]);var inst_13805 = (state_13863[10]);var inst_13802 = (state_13863[11]);var inst_13810 = cljs.core._nth.call(null,inst_13803,inst_13805);var inst_13811 = cljs.core.async.muxch_STAR_.call(null,inst_13810);var inst_13812 = cljs.core.async.close_BANG_.call(null,inst_13811);var inst_13813 = (inst_13805 + 1);var tmp13875 = inst_13804;var tmp13876 = inst_13803;var tmp13877 = inst_13802;var inst_13802__$1 = tmp13877;var inst_13803__$1 = tmp13876;var inst_13804__$1 = tmp13875;var inst_13805__$1 = inst_13813;var state_13863__$1 = (function (){var statearr_13881 = state_13863;(statearr_13881[8] = inst_13804__$1);
(statearr_13881[9] = inst_13803__$1);
(statearr_13881[10] = inst_13805__$1);
(statearr_13881[14] = inst_13812);
(statearr_13881[11] = inst_13802__$1);
return statearr_13881;
})();var statearr_13882_13922 = state_13863__$1;(statearr_13882_13922[2] = null);
(statearr_13882_13922[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 11))
{var inst_13816 = (state_13863[15]);var inst_13802 = (state_13863[11]);var inst_13816__$1 = cljs.core.seq.call(null,inst_13802);var state_13863__$1 = (function (){var statearr_13883 = state_13863;(statearr_13883[15] = inst_13816__$1);
return statearr_13883;
})();if(inst_13816__$1)
{var statearr_13884_13923 = state_13863__$1;(statearr_13884_13923[1] = 13);
} else
{var statearr_13885_13924 = state_13863__$1;(statearr_13885_13924[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 12))
{var inst_13836 = (state_13863[2]);var state_13863__$1 = state_13863;var statearr_13886_13925 = state_13863__$1;(statearr_13886_13925[2] = inst_13836);
(statearr_13886_13925[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 13))
{var inst_13816 = (state_13863[15]);var inst_13818 = cljs.core.chunked_seq_QMARK_.call(null,inst_13816);var state_13863__$1 = state_13863;if(inst_13818)
{var statearr_13887_13926 = state_13863__$1;(statearr_13887_13926[1] = 16);
} else
{var statearr_13888_13927 = state_13863__$1;(statearr_13888_13927[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 14))
{var state_13863__$1 = state_13863;var statearr_13889_13928 = state_13863__$1;(statearr_13889_13928[2] = null);
(statearr_13889_13928[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 15))
{var inst_13834 = (state_13863[2]);var state_13863__$1 = state_13863;var statearr_13890_13929 = state_13863__$1;(statearr_13890_13929[2] = inst_13834);
(statearr_13890_13929[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 16))
{var inst_13816 = (state_13863[15]);var inst_13820 = cljs.core.chunk_first.call(null,inst_13816);var inst_13821 = cljs.core.chunk_rest.call(null,inst_13816);var inst_13822 = cljs.core.count.call(null,inst_13820);var inst_13802 = inst_13821;var inst_13803 = inst_13820;var inst_13804 = inst_13822;var inst_13805 = 0;var state_13863__$1 = (function (){var statearr_13891 = state_13863;(statearr_13891[8] = inst_13804);
(statearr_13891[9] = inst_13803);
(statearr_13891[10] = inst_13805);
(statearr_13891[11] = inst_13802);
return statearr_13891;
})();var statearr_13892_13930 = state_13863__$1;(statearr_13892_13930[2] = null);
(statearr_13892_13930[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 17))
{var inst_13816 = (state_13863[15]);var inst_13825 = cljs.core.first.call(null,inst_13816);var inst_13826 = cljs.core.async.muxch_STAR_.call(null,inst_13825);var inst_13827 = cljs.core.async.close_BANG_.call(null,inst_13826);var inst_13828 = cljs.core.next.call(null,inst_13816);var inst_13802 = inst_13828;var inst_13803 = null;var inst_13804 = 0;var inst_13805 = 0;var state_13863__$1 = (function (){var statearr_13893 = state_13863;(statearr_13893[8] = inst_13804);
(statearr_13893[9] = inst_13803);
(statearr_13893[10] = inst_13805);
(statearr_13893[16] = inst_13827);
(statearr_13893[11] = inst_13802);
return statearr_13893;
})();var statearr_13894_13931 = state_13863__$1;(statearr_13894_13931[2] = null);
(statearr_13894_13931[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 18))
{var inst_13831 = (state_13863[2]);var state_13863__$1 = state_13863;var statearr_13895_13932 = state_13863__$1;(statearr_13895_13932[2] = inst_13831);
(statearr_13895_13932[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 19))
{var state_13863__$1 = state_13863;var statearr_13896_13933 = state_13863__$1;(statearr_13896_13933[2] = null);
(statearr_13896_13933[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 20))
{var state_13863__$1 = state_13863;var statearr_13897_13934 = state_13863__$1;(statearr_13897_13934[2] = null);
(statearr_13897_13934[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 21))
{var inst_13856 = (state_13863[2]);var state_13863__$1 = (function (){var statearr_13898 = state_13863;(statearr_13898[17] = inst_13856);
return statearr_13898;
})();var statearr_13899_13935 = state_13863__$1;(statearr_13899_13935[2] = null);
(statearr_13899_13935[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 22))
{var inst_13853 = (state_13863[2]);var state_13863__$1 = state_13863;var statearr_13900_13936 = state_13863__$1;(statearr_13900_13936[2] = inst_13853);
(statearr_13900_13936[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 23))
{var inst_13840 = (state_13863[13]);var inst_13844 = (state_13863[2]);var inst_13845 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13840);var state_13863__$1 = (function (){var statearr_13901 = state_13863;(statearr_13901[18] = inst_13844);
return statearr_13901;
})();var statearr_13902_13937 = state_13863__$1;(statearr_13902_13937[2] = inst_13845);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13863__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 24))
{var inst_13792 = (state_13863[7]);var inst_13842 = (state_13863[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13863,23,Object,null,22);var inst_13849 = cljs.core.async.muxch_STAR_.call(null,inst_13842);var state_13863__$1 = state_13863;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13863__$1,25,inst_13849,inst_13792);
} else
{if((state_val_13864 === 25))
{var inst_13851 = (state_13863[2]);var state_13863__$1 = state_13863;var statearr_13903_13938 = state_13863__$1;(statearr_13903_13938[2] = inst_13851);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13863__$1);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_13907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13907[0] = state_machine__6138__auto__);
(statearr_13907[1] = 1);
return statearr_13907;
});
var state_machine__6138__auto____1 = (function (state_13863){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_13863);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e13908){if((e13908 instanceof Object))
{var ex__6141__auto__ = e13908;var statearr_13909_13939 = state_13863;(statearr_13909_13939[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13863);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13908;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13940 = state_13863;
state_13863 = G__13940;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_13863){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_13863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_13910 = f__6153__auto__.call(null);(statearr_13910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___13911);
return statearr_13910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
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
,cljs.core.range.call(null,cnt));var c__6152__auto___14077 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_14047){var state_val_14048 = (state_14047[1]);if((state_val_14048 === 1))
{var state_14047__$1 = state_14047;var statearr_14049_14078 = state_14047__$1;(statearr_14049_14078[2] = null);
(statearr_14049_14078[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14048 === 2))
{var inst_14010 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14011 = 0;var state_14047__$1 = (function (){var statearr_14050 = state_14047;(statearr_14050[7] = inst_14011);
(statearr_14050[8] = inst_14010);
return statearr_14050;
})();var statearr_14051_14079 = state_14047__$1;(statearr_14051_14079[2] = null);
(statearr_14051_14079[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14048 === 3))
{var inst_14045 = (state_14047[2]);var state_14047__$1 = state_14047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14047__$1,inst_14045);
} else
{if((state_val_14048 === 4))
{var inst_14011 = (state_14047[7]);var inst_14013 = (inst_14011 < cnt);var state_14047__$1 = state_14047;if(cljs.core.truth_(inst_14013))
{var statearr_14052_14080 = state_14047__$1;(statearr_14052_14080[1] = 6);
} else
{var statearr_14053_14081 = state_14047__$1;(statearr_14053_14081[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14048 === 5))
{var inst_14031 = (state_14047[2]);var state_14047__$1 = (function (){var statearr_14054 = state_14047;(statearr_14054[9] = inst_14031);
return statearr_14054;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14047__$1,12,dchan);
} else
{if((state_val_14048 === 6))
{var state_14047__$1 = state_14047;var statearr_14055_14082 = state_14047__$1;(statearr_14055_14082[2] = null);
(statearr_14055_14082[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14048 === 7))
{var state_14047__$1 = state_14047;var statearr_14056_14083 = state_14047__$1;(statearr_14056_14083[2] = null);
(statearr_14056_14083[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14048 === 8))
{var inst_14029 = (state_14047[2]);var state_14047__$1 = state_14047;var statearr_14057_14084 = state_14047__$1;(statearr_14057_14084[2] = inst_14029);
(statearr_14057_14084[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14048 === 9))
{var inst_14011 = (state_14047[7]);var inst_14024 = (state_14047[2]);var inst_14025 = (inst_14011 + 1);var inst_14011__$1 = inst_14025;var state_14047__$1 = (function (){var statearr_14058 = state_14047;(statearr_14058[7] = inst_14011__$1);
(statearr_14058[10] = inst_14024);
return statearr_14058;
})();var statearr_14059_14085 = state_14047__$1;(statearr_14059_14085[2] = null);
(statearr_14059_14085[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14048 === 10))
{var inst_14015 = (state_14047[2]);var inst_14016 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14047__$1 = (function (){var statearr_14060 = state_14047;(statearr_14060[11] = inst_14015);
return statearr_14060;
})();var statearr_14061_14086 = state_14047__$1;(statearr_14061_14086[2] = inst_14016);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14047__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14048 === 11))
{var inst_14011 = (state_14047[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14047,10,Object,null,9);var inst_14020 = chs__$1.call(null,inst_14011);var inst_14021 = done.call(null,inst_14011);var inst_14022 = cljs.core.async.take_BANG_.call(null,inst_14020,inst_14021);var state_14047__$1 = state_14047;var statearr_14062_14087 = state_14047__$1;(statearr_14062_14087[2] = inst_14022);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14047__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14048 === 12))
{var inst_14033 = (state_14047[12]);var inst_14033__$1 = (state_14047[2]);var inst_14034 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14033__$1);var state_14047__$1 = (function (){var statearr_14063 = state_14047;(statearr_14063[12] = inst_14033__$1);
return statearr_14063;
})();if(cljs.core.truth_(inst_14034))
{var statearr_14064_14088 = state_14047__$1;(statearr_14064_14088[1] = 13);
} else
{var statearr_14065_14089 = state_14047__$1;(statearr_14065_14089[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14048 === 13))
{var inst_14036 = cljs.core.async.close_BANG_.call(null,out);var state_14047__$1 = state_14047;var statearr_14066_14090 = state_14047__$1;(statearr_14066_14090[2] = inst_14036);
(statearr_14066_14090[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14048 === 14))
{var inst_14033 = (state_14047[12]);var inst_14038 = cljs.core.apply.call(null,f,inst_14033);var state_14047__$1 = state_14047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14047__$1,16,out,inst_14038);
} else
{if((state_val_14048 === 15))
{var inst_14043 = (state_14047[2]);var state_14047__$1 = state_14047;var statearr_14067_14091 = state_14047__$1;(statearr_14067_14091[2] = inst_14043);
(statearr_14067_14091[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14048 === 16))
{var inst_14040 = (state_14047[2]);var state_14047__$1 = (function (){var statearr_14068 = state_14047;(statearr_14068[13] = inst_14040);
return statearr_14068;
})();var statearr_14069_14092 = state_14047__$1;(statearr_14069_14092[2] = null);
(statearr_14069_14092[1] = 2);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_14073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14073[0] = state_machine__6138__auto__);
(statearr_14073[1] = 1);
return statearr_14073;
});
var state_machine__6138__auto____1 = (function (state_14047){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_14047);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e14074){if((e14074 instanceof Object))
{var ex__6141__auto__ = e14074;var statearr_14075_14093 = state_14047;(statearr_14075_14093[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14047);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14074;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14094 = state_14047;
state_14047 = G__14094;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_14047){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_14047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_14076 = f__6153__auto__.call(null);(statearr_14076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___14077);
return statearr_14076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6152__auto___14202 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_14178){var state_val_14179 = (state_14178[1]);if((state_val_14179 === 1))
{var inst_14149 = cljs.core.vec.call(null,chs);var inst_14150 = inst_14149;var state_14178__$1 = (function (){var statearr_14180 = state_14178;(statearr_14180[7] = inst_14150);
return statearr_14180;
})();var statearr_14181_14203 = state_14178__$1;(statearr_14181_14203[2] = null);
(statearr_14181_14203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14179 === 2))
{var inst_14150 = (state_14178[7]);var inst_14152 = cljs.core.count.call(null,inst_14150);var inst_14153 = (inst_14152 > 0);var state_14178__$1 = state_14178;if(cljs.core.truth_(inst_14153))
{var statearr_14182_14204 = state_14178__$1;(statearr_14182_14204[1] = 4);
} else
{var statearr_14183_14205 = state_14178__$1;(statearr_14183_14205[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14179 === 3))
{var inst_14176 = (state_14178[2]);var state_14178__$1 = state_14178;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14178__$1,inst_14176);
} else
{if((state_val_14179 === 4))
{var inst_14150 = (state_14178[7]);var state_14178__$1 = state_14178;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14178__$1,7,inst_14150);
} else
{if((state_val_14179 === 5))
{var inst_14172 = cljs.core.async.close_BANG_.call(null,out);var state_14178__$1 = state_14178;var statearr_14184_14206 = state_14178__$1;(statearr_14184_14206[2] = inst_14172);
(statearr_14184_14206[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14179 === 6))
{var inst_14174 = (state_14178[2]);var state_14178__$1 = state_14178;var statearr_14185_14207 = state_14178__$1;(statearr_14185_14207[2] = inst_14174);
(statearr_14185_14207[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14179 === 7))
{var inst_14158 = (state_14178[8]);var inst_14157 = (state_14178[9]);var inst_14157__$1 = (state_14178[2]);var inst_14158__$1 = cljs.core.nth.call(null,inst_14157__$1,0,null);var inst_14159 = cljs.core.nth.call(null,inst_14157__$1,1,null);var inst_14160 = (inst_14158__$1 == null);var state_14178__$1 = (function (){var statearr_14186 = state_14178;(statearr_14186[10] = inst_14159);
(statearr_14186[8] = inst_14158__$1);
(statearr_14186[9] = inst_14157__$1);
return statearr_14186;
})();if(cljs.core.truth_(inst_14160))
{var statearr_14187_14208 = state_14178__$1;(statearr_14187_14208[1] = 8);
} else
{var statearr_14188_14209 = state_14178__$1;(statearr_14188_14209[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14179 === 8))
{var inst_14159 = (state_14178[10]);var inst_14158 = (state_14178[8]);var inst_14157 = (state_14178[9]);var inst_14150 = (state_14178[7]);var inst_14162 = (function (){var c = inst_14159;var v = inst_14158;var vec__14155 = inst_14157;var cs = inst_14150;return ((function (c,v,vec__14155,cs,inst_14159,inst_14158,inst_14157,inst_14150,state_val_14179){
return (function (p1__14095_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14095_SHARP_);
});
;})(c,v,vec__14155,cs,inst_14159,inst_14158,inst_14157,inst_14150,state_val_14179))
})();var inst_14163 = cljs.core.filterv.call(null,inst_14162,inst_14150);var inst_14150__$1 = inst_14163;var state_14178__$1 = (function (){var statearr_14189 = state_14178;(statearr_14189[7] = inst_14150__$1);
return statearr_14189;
})();var statearr_14190_14210 = state_14178__$1;(statearr_14190_14210[2] = null);
(statearr_14190_14210[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14179 === 9))
{var inst_14158 = (state_14178[8]);var state_14178__$1 = state_14178;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14178__$1,11,out,inst_14158);
} else
{if((state_val_14179 === 10))
{var inst_14170 = (state_14178[2]);var state_14178__$1 = state_14178;var statearr_14192_14211 = state_14178__$1;(statearr_14192_14211[2] = inst_14170);
(statearr_14192_14211[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14179 === 11))
{var inst_14150 = (state_14178[7]);var inst_14167 = (state_14178[2]);var tmp14191 = inst_14150;var inst_14150__$1 = tmp14191;var state_14178__$1 = (function (){var statearr_14193 = state_14178;(statearr_14193[11] = inst_14167);
(statearr_14193[7] = inst_14150__$1);
return statearr_14193;
})();var statearr_14194_14212 = state_14178__$1;(statearr_14194_14212[2] = null);
(statearr_14194_14212[1] = 2);
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
var state_machine__6138__auto____0 = (function (){var statearr_14198 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14198[0] = state_machine__6138__auto__);
(statearr_14198[1] = 1);
return statearr_14198;
});
var state_machine__6138__auto____1 = (function (state_14178){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_14178);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e14199){if((e14199 instanceof Object))
{var ex__6141__auto__ = e14199;var statearr_14200_14213 = state_14178;(statearr_14200_14213[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14178);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14199;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14214 = state_14178;
state_14178 = G__14214;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_14178){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_14178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_14201 = f__6153__auto__.call(null);(statearr_14201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___14202);
return statearr_14201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6152__auto___14307 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_14284){var state_val_14285 = (state_14284[1]);if((state_val_14285 === 1))
{var inst_14261 = 0;var state_14284__$1 = (function (){var statearr_14286 = state_14284;(statearr_14286[7] = inst_14261);
return statearr_14286;
})();var statearr_14287_14308 = state_14284__$1;(statearr_14287_14308[2] = null);
(statearr_14287_14308[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14285 === 2))
{var inst_14261 = (state_14284[7]);var inst_14263 = (inst_14261 < n);var state_14284__$1 = state_14284;if(cljs.core.truth_(inst_14263))
{var statearr_14288_14309 = state_14284__$1;(statearr_14288_14309[1] = 4);
} else
{var statearr_14289_14310 = state_14284__$1;(statearr_14289_14310[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14285 === 3))
{var inst_14281 = (state_14284[2]);var inst_14282 = cljs.core.async.close_BANG_.call(null,out);var state_14284__$1 = (function (){var statearr_14290 = state_14284;(statearr_14290[8] = inst_14281);
return statearr_14290;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14284__$1,inst_14282);
} else
{if((state_val_14285 === 4))
{var state_14284__$1 = state_14284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14284__$1,7,ch);
} else
{if((state_val_14285 === 5))
{var state_14284__$1 = state_14284;var statearr_14291_14311 = state_14284__$1;(statearr_14291_14311[2] = null);
(statearr_14291_14311[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14285 === 6))
{var inst_14279 = (state_14284[2]);var state_14284__$1 = state_14284;var statearr_14292_14312 = state_14284__$1;(statearr_14292_14312[2] = inst_14279);
(statearr_14292_14312[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14285 === 7))
{var inst_14266 = (state_14284[9]);var inst_14266__$1 = (state_14284[2]);var inst_14267 = (inst_14266__$1 == null);var inst_14268 = cljs.core.not.call(null,inst_14267);var state_14284__$1 = (function (){var statearr_14293 = state_14284;(statearr_14293[9] = inst_14266__$1);
return statearr_14293;
})();if(inst_14268)
{var statearr_14294_14313 = state_14284__$1;(statearr_14294_14313[1] = 8);
} else
{var statearr_14295_14314 = state_14284__$1;(statearr_14295_14314[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14285 === 8))
{var inst_14266 = (state_14284[9]);var state_14284__$1 = state_14284;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14284__$1,11,out,inst_14266);
} else
{if((state_val_14285 === 9))
{var state_14284__$1 = state_14284;var statearr_14296_14315 = state_14284__$1;(statearr_14296_14315[2] = null);
(statearr_14296_14315[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14285 === 10))
{var inst_14276 = (state_14284[2]);var state_14284__$1 = state_14284;var statearr_14297_14316 = state_14284__$1;(statearr_14297_14316[2] = inst_14276);
(statearr_14297_14316[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14285 === 11))
{var inst_14261 = (state_14284[7]);var inst_14271 = (state_14284[2]);var inst_14272 = (inst_14261 + 1);var inst_14261__$1 = inst_14272;var state_14284__$1 = (function (){var statearr_14298 = state_14284;(statearr_14298[7] = inst_14261__$1);
(statearr_14298[10] = inst_14271);
return statearr_14298;
})();var statearr_14299_14317 = state_14284__$1;(statearr_14299_14317[2] = null);
(statearr_14299_14317[1] = 2);
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
var state_machine__6138__auto____0 = (function (){var statearr_14303 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14303[0] = state_machine__6138__auto__);
(statearr_14303[1] = 1);
return statearr_14303;
});
var state_machine__6138__auto____1 = (function (state_14284){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_14284);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e14304){if((e14304 instanceof Object))
{var ex__6141__auto__ = e14304;var statearr_14305_14318 = state_14284;(statearr_14305_14318[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14284);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14304;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14319 = state_14284;
state_14284 = G__14319;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_14284){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_14284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_14306 = f__6153__auto__.call(null);(statearr_14306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___14307);
return statearr_14306;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6152__auto___14416 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_14391){var state_val_14392 = (state_14391[1]);if((state_val_14392 === 1))
{var inst_14368 = null;var state_14391__$1 = (function (){var statearr_14393 = state_14391;(statearr_14393[7] = inst_14368);
return statearr_14393;
})();var statearr_14394_14417 = state_14391__$1;(statearr_14394_14417[2] = null);
(statearr_14394_14417[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 2))
{var state_14391__$1 = state_14391;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14391__$1,4,ch);
} else
{if((state_val_14392 === 3))
{var inst_14388 = (state_14391[2]);var inst_14389 = cljs.core.async.close_BANG_.call(null,out);var state_14391__$1 = (function (){var statearr_14395 = state_14391;(statearr_14395[8] = inst_14388);
return statearr_14395;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14391__$1,inst_14389);
} else
{if((state_val_14392 === 4))
{var inst_14371 = (state_14391[9]);var inst_14371__$1 = (state_14391[2]);var inst_14372 = (inst_14371__$1 == null);var inst_14373 = cljs.core.not.call(null,inst_14372);var state_14391__$1 = (function (){var statearr_14396 = state_14391;(statearr_14396[9] = inst_14371__$1);
return statearr_14396;
})();if(inst_14373)
{var statearr_14397_14418 = state_14391__$1;(statearr_14397_14418[1] = 5);
} else
{var statearr_14398_14419 = state_14391__$1;(statearr_14398_14419[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 5))
{var inst_14371 = (state_14391[9]);var inst_14368 = (state_14391[7]);var inst_14375 = cljs.core._EQ_.call(null,inst_14371,inst_14368);var state_14391__$1 = state_14391;if(inst_14375)
{var statearr_14399_14420 = state_14391__$1;(statearr_14399_14420[1] = 8);
} else
{var statearr_14400_14421 = state_14391__$1;(statearr_14400_14421[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 6))
{var state_14391__$1 = state_14391;var statearr_14402_14422 = state_14391__$1;(statearr_14402_14422[2] = null);
(statearr_14402_14422[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 7))
{var inst_14386 = (state_14391[2]);var state_14391__$1 = state_14391;var statearr_14403_14423 = state_14391__$1;(statearr_14403_14423[2] = inst_14386);
(statearr_14403_14423[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 8))
{var inst_14368 = (state_14391[7]);var tmp14401 = inst_14368;var inst_14368__$1 = tmp14401;var state_14391__$1 = (function (){var statearr_14404 = state_14391;(statearr_14404[7] = inst_14368__$1);
return statearr_14404;
})();var statearr_14405_14424 = state_14391__$1;(statearr_14405_14424[2] = null);
(statearr_14405_14424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 9))
{var inst_14371 = (state_14391[9]);var state_14391__$1 = state_14391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14391__$1,11,out,inst_14371);
} else
{if((state_val_14392 === 10))
{var inst_14383 = (state_14391[2]);var state_14391__$1 = state_14391;var statearr_14406_14425 = state_14391__$1;(statearr_14406_14425[2] = inst_14383);
(statearr_14406_14425[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 11))
{var inst_14371 = (state_14391[9]);var inst_14380 = (state_14391[2]);var inst_14368 = inst_14371;var state_14391__$1 = (function (){var statearr_14407 = state_14391;(statearr_14407[10] = inst_14380);
(statearr_14407[7] = inst_14368);
return statearr_14407;
})();var statearr_14408_14426 = state_14391__$1;(statearr_14408_14426[2] = null);
(statearr_14408_14426[1] = 2);
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
var state_machine__6138__auto____0 = (function (){var statearr_14412 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14412[0] = state_machine__6138__auto__);
(statearr_14412[1] = 1);
return statearr_14412;
});
var state_machine__6138__auto____1 = (function (state_14391){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_14391);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e14413){if((e14413 instanceof Object))
{var ex__6141__auto__ = e14413;var statearr_14414_14427 = state_14391;(statearr_14414_14427[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14391);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14413;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14428 = state_14391;
state_14391 = G__14428;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_14391){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_14391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_14415 = f__6153__auto__.call(null);(statearr_14415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___14416);
return statearr_14415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6152__auto___14563 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_14533){var state_val_14534 = (state_14533[1]);if((state_val_14534 === 1))
{var inst_14496 = (new Array(n));var inst_14497 = inst_14496;var inst_14498 = 0;var state_14533__$1 = (function (){var statearr_14535 = state_14533;(statearr_14535[7] = inst_14497);
(statearr_14535[8] = inst_14498);
return statearr_14535;
})();var statearr_14536_14564 = state_14533__$1;(statearr_14536_14564[2] = null);
(statearr_14536_14564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 2))
{var state_14533__$1 = state_14533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14533__$1,4,ch);
} else
{if((state_val_14534 === 3))
{var inst_14531 = (state_14533[2]);var state_14533__$1 = state_14533;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14533__$1,inst_14531);
} else
{if((state_val_14534 === 4))
{var inst_14501 = (state_14533[9]);var inst_14501__$1 = (state_14533[2]);var inst_14502 = (inst_14501__$1 == null);var inst_14503 = cljs.core.not.call(null,inst_14502);var state_14533__$1 = (function (){var statearr_14537 = state_14533;(statearr_14537[9] = inst_14501__$1);
return statearr_14537;
})();if(inst_14503)
{var statearr_14538_14565 = state_14533__$1;(statearr_14538_14565[1] = 5);
} else
{var statearr_14539_14566 = state_14533__$1;(statearr_14539_14566[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 5))
{var inst_14497 = (state_14533[7]);var inst_14498 = (state_14533[8]);var inst_14506 = (state_14533[10]);var inst_14501 = (state_14533[9]);var inst_14505 = (inst_14497[inst_14498] = inst_14501);var inst_14506__$1 = (inst_14498 + 1);var inst_14507 = (inst_14506__$1 < n);var state_14533__$1 = (function (){var statearr_14540 = state_14533;(statearr_14540[11] = inst_14505);
(statearr_14540[10] = inst_14506__$1);
return statearr_14540;
})();if(cljs.core.truth_(inst_14507))
{var statearr_14541_14567 = state_14533__$1;(statearr_14541_14567[1] = 8);
} else
{var statearr_14542_14568 = state_14533__$1;(statearr_14542_14568[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 6))
{var inst_14498 = (state_14533[8]);var inst_14519 = (inst_14498 > 0);var state_14533__$1 = state_14533;if(cljs.core.truth_(inst_14519))
{var statearr_14544_14569 = state_14533__$1;(statearr_14544_14569[1] = 12);
} else
{var statearr_14545_14570 = state_14533__$1;(statearr_14545_14570[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 7))
{var inst_14529 = (state_14533[2]);var state_14533__$1 = state_14533;var statearr_14546_14571 = state_14533__$1;(statearr_14546_14571[2] = inst_14529);
(statearr_14546_14571[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 8))
{var inst_14497 = (state_14533[7]);var inst_14506 = (state_14533[10]);var tmp14543 = inst_14497;var inst_14497__$1 = tmp14543;var inst_14498 = inst_14506;var state_14533__$1 = (function (){var statearr_14547 = state_14533;(statearr_14547[7] = inst_14497__$1);
(statearr_14547[8] = inst_14498);
return statearr_14547;
})();var statearr_14548_14572 = state_14533__$1;(statearr_14548_14572[2] = null);
(statearr_14548_14572[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 9))
{var inst_14497 = (state_14533[7]);var inst_14511 = cljs.core.vec.call(null,inst_14497);var state_14533__$1 = state_14533;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14533__$1,11,out,inst_14511);
} else
{if((state_val_14534 === 10))
{var inst_14517 = (state_14533[2]);var state_14533__$1 = state_14533;var statearr_14549_14573 = state_14533__$1;(statearr_14549_14573[2] = inst_14517);
(statearr_14549_14573[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 11))
{var inst_14513 = (state_14533[2]);var inst_14514 = (new Array(n));var inst_14497 = inst_14514;var inst_14498 = 0;var state_14533__$1 = (function (){var statearr_14550 = state_14533;(statearr_14550[7] = inst_14497);
(statearr_14550[8] = inst_14498);
(statearr_14550[12] = inst_14513);
return statearr_14550;
})();var statearr_14551_14574 = state_14533__$1;(statearr_14551_14574[2] = null);
(statearr_14551_14574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 12))
{var inst_14497 = (state_14533[7]);var inst_14521 = cljs.core.vec.call(null,inst_14497);var state_14533__$1 = state_14533;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14533__$1,15,out,inst_14521);
} else
{if((state_val_14534 === 13))
{var state_14533__$1 = state_14533;var statearr_14552_14575 = state_14533__$1;(statearr_14552_14575[2] = null);
(statearr_14552_14575[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 14))
{var inst_14526 = (state_14533[2]);var inst_14527 = cljs.core.async.close_BANG_.call(null,out);var state_14533__$1 = (function (){var statearr_14553 = state_14533;(statearr_14553[13] = inst_14526);
return statearr_14553;
})();var statearr_14554_14576 = state_14533__$1;(statearr_14554_14576[2] = inst_14527);
(statearr_14554_14576[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 15))
{var inst_14523 = (state_14533[2]);var state_14533__$1 = state_14533;var statearr_14555_14577 = state_14533__$1;(statearr_14555_14577[2] = inst_14523);
(statearr_14555_14577[1] = 14);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_14559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14559[0] = state_machine__6138__auto__);
(statearr_14559[1] = 1);
return statearr_14559;
});
var state_machine__6138__auto____1 = (function (state_14533){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_14533);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e14560){if((e14560 instanceof Object))
{var ex__6141__auto__ = e14560;var statearr_14561_14578 = state_14533;(statearr_14561_14578[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14533);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14560;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14579 = state_14533;
state_14533 = G__14579;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_14533){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_14533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_14562 = f__6153__auto__.call(null);(statearr_14562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___14563);
return statearr_14562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6152__auto___14722 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_14692){var state_val_14693 = (state_14692[1]);if((state_val_14693 === 1))
{var inst_14651 = [];var inst_14652 = inst_14651;var inst_14653 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14692__$1 = (function (){var statearr_14694 = state_14692;(statearr_14694[7] = inst_14653);
(statearr_14694[8] = inst_14652);
return statearr_14694;
})();var statearr_14695_14723 = state_14692__$1;(statearr_14695_14723[2] = null);
(statearr_14695_14723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14693 === 2))
{var state_14692__$1 = state_14692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14692__$1,4,ch);
} else
{if((state_val_14693 === 3))
{var inst_14690 = (state_14692[2]);var state_14692__$1 = state_14692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14692__$1,inst_14690);
} else
{if((state_val_14693 === 4))
{var inst_14656 = (state_14692[9]);var inst_14656__$1 = (state_14692[2]);var inst_14657 = (inst_14656__$1 == null);var inst_14658 = cljs.core.not.call(null,inst_14657);var state_14692__$1 = (function (){var statearr_14696 = state_14692;(statearr_14696[9] = inst_14656__$1);
return statearr_14696;
})();if(inst_14658)
{var statearr_14697_14724 = state_14692__$1;(statearr_14697_14724[1] = 5);
} else
{var statearr_14698_14725 = state_14692__$1;(statearr_14698_14725[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14693 === 5))
{var inst_14656 = (state_14692[9]);var inst_14653 = (state_14692[7]);var inst_14660 = (state_14692[10]);var inst_14660__$1 = f.call(null,inst_14656);var inst_14661 = cljs.core._EQ_.call(null,inst_14660__$1,inst_14653);var inst_14662 = cljs.core.keyword_identical_QMARK_.call(null,inst_14653,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14663 = (inst_14661) || (inst_14662);var state_14692__$1 = (function (){var statearr_14699 = state_14692;(statearr_14699[10] = inst_14660__$1);
return statearr_14699;
})();if(cljs.core.truth_(inst_14663))
{var statearr_14700_14726 = state_14692__$1;(statearr_14700_14726[1] = 8);
} else
{var statearr_14701_14727 = state_14692__$1;(statearr_14701_14727[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14693 === 6))
{var inst_14652 = (state_14692[8]);var inst_14677 = inst_14652.length;var inst_14678 = (inst_14677 > 0);var state_14692__$1 = state_14692;if(cljs.core.truth_(inst_14678))
{var statearr_14703_14728 = state_14692__$1;(statearr_14703_14728[1] = 12);
} else
{var statearr_14704_14729 = state_14692__$1;(statearr_14704_14729[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14693 === 7))
{var inst_14688 = (state_14692[2]);var state_14692__$1 = state_14692;var statearr_14705_14730 = state_14692__$1;(statearr_14705_14730[2] = inst_14688);
(statearr_14705_14730[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14693 === 8))
{var inst_14656 = (state_14692[9]);var inst_14652 = (state_14692[8]);var inst_14660 = (state_14692[10]);var inst_14665 = inst_14652.push(inst_14656);var tmp14702 = inst_14652;var inst_14652__$1 = tmp14702;var inst_14653 = inst_14660;var state_14692__$1 = (function (){var statearr_14706 = state_14692;(statearr_14706[7] = inst_14653);
(statearr_14706[8] = inst_14652__$1);
(statearr_14706[11] = inst_14665);
return statearr_14706;
})();var statearr_14707_14731 = state_14692__$1;(statearr_14707_14731[2] = null);
(statearr_14707_14731[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14693 === 9))
{var inst_14652 = (state_14692[8]);var inst_14668 = cljs.core.vec.call(null,inst_14652);var state_14692__$1 = state_14692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14692__$1,11,out,inst_14668);
} else
{if((state_val_14693 === 10))
{var inst_14675 = (state_14692[2]);var state_14692__$1 = state_14692;var statearr_14708_14732 = state_14692__$1;(statearr_14708_14732[2] = inst_14675);
(statearr_14708_14732[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14693 === 11))
{var inst_14656 = (state_14692[9]);var inst_14660 = (state_14692[10]);var inst_14670 = (state_14692[2]);var inst_14671 = [];var inst_14672 = inst_14671.push(inst_14656);var inst_14652 = inst_14671;var inst_14653 = inst_14660;var state_14692__$1 = (function (){var statearr_14709 = state_14692;(statearr_14709[7] = inst_14653);
(statearr_14709[8] = inst_14652);
(statearr_14709[12] = inst_14672);
(statearr_14709[13] = inst_14670);
return statearr_14709;
})();var statearr_14710_14733 = state_14692__$1;(statearr_14710_14733[2] = null);
(statearr_14710_14733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14693 === 12))
{var inst_14652 = (state_14692[8]);var inst_14680 = cljs.core.vec.call(null,inst_14652);var state_14692__$1 = state_14692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14692__$1,15,out,inst_14680);
} else
{if((state_val_14693 === 13))
{var state_14692__$1 = state_14692;var statearr_14711_14734 = state_14692__$1;(statearr_14711_14734[2] = null);
(statearr_14711_14734[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14693 === 14))
{var inst_14685 = (state_14692[2]);var inst_14686 = cljs.core.async.close_BANG_.call(null,out);var state_14692__$1 = (function (){var statearr_14712 = state_14692;(statearr_14712[14] = inst_14685);
return statearr_14712;
})();var statearr_14713_14735 = state_14692__$1;(statearr_14713_14735[2] = inst_14686);
(statearr_14713_14735[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14693 === 15))
{var inst_14682 = (state_14692[2]);var state_14692__$1 = state_14692;var statearr_14714_14736 = state_14692__$1;(statearr_14714_14736[2] = inst_14682);
(statearr_14714_14736[1] = 14);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_14718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14718[0] = state_machine__6138__auto__);
(statearr_14718[1] = 1);
return statearr_14718;
});
var state_machine__6138__auto____1 = (function (state_14692){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_14692);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e14719){if((e14719 instanceof Object))
{var ex__6141__auto__ = e14719;var statearr_14720_14737 = state_14692;(statearr_14720_14737[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14692);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14738 = state_14692;
state_14692 = G__14738;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_14692){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_14692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_14721 = f__6153__auto__.call(null);(statearr_14721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___14722);
return statearr_14721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
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