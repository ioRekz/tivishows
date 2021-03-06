goog.addDependency("string/string.js", ['goog.string', 'goog.string.Unicode'], []);
goog.addDependency("debug/error.js", ['goog.debug.Error'], []);
goog.addDependency("asserts/asserts.js", ['goog.asserts', 'goog.asserts.AssertionError'], ['goog.debug.Error', 'goog.string']);
goog.addDependency("array/array.js", ['goog.array', 'goog.array.ArrayLike'], ['goog.asserts']);
goog.addDependency("object/object.js", ['goog.object'], []);
goog.addDependency("string/stringbuffer.js", ['goog.string.StringBuffer'], []);
goog.addDependency("crypt/crypt.js", ['goog.crypt'], ['goog.array']);
goog.addDependency("useragent/useragent.js", ['goog.userAgent'], ['goog.string']);
goog.addDependency("crypt/base64.js", ['goog.crypt.base64'], ['goog.crypt', 'goog.userAgent']);
goog.addDependency("json/json.js", ['goog.json', 'goog.json.Serializer'], []);
goog.addDependency("structs/structs.js", ['goog.structs'], ['goog.array', 'goog.object']);
goog.addDependency("iter/iter.js", ['goog.iter', 'goog.iter.Iterator', 'goog.iter.StopIteration'], ['goog.array', 'goog.asserts']);
goog.addDependency("structs/map.js", ['goog.structs.Map'], ['goog.iter.Iterator', 'goog.iter.StopIteration', 'goog.object', 'goog.structs']);
goog.addDependency("uri/utils.js", ['goog.uri.utils', 'goog.uri.utils.ComponentIndex', 'goog.uri.utils.QueryArray', 'goog.uri.utils.QueryValue', 'goog.uri.utils.StandardQueryParam'], ['goog.asserts', 'goog.string', 'goog.userAgent']);
goog.addDependency("uri/uri.js", ['goog.Uri', 'goog.Uri.QueryData'], ['goog.array', 'goog.string', 'goog.structs', 'goog.structs.Map', 'goog.uri.utils', 'goog.uri.utils.ComponentIndex']);
goog.addDependency("disposable/idisposable.js", ['goog.disposable.IDisposable'], []);
goog.addDependency("disposable/disposable.js", ['goog.Disposable', 'goog.dispose'], ['goog.disposable.IDisposable']);
goog.addDependency("debug/entrypointregistry.js", ['goog.debug.EntryPointMonitor', 'goog.debug.entryPointRegistry'], ['goog.asserts']);
goog.addDependency("debug/errorhandlerweakdep.js", ['goog.debug.errorHandlerWeakDep'], []);
goog.addDependency("events/browserfeature.js", ['goog.events.BrowserFeature'], ['goog.userAgent']);
goog.addDependency("events/event.js", ['goog.events.Event', 'goog.events.EventLike'], ['goog.Disposable']);
goog.addDependency("events/eventtype.js", ['goog.events.EventType'], ['goog.userAgent']);
goog.addDependency("reflect/reflect.js", ['goog.reflect'], []);
goog.addDependency("events/browserevent.js", ['goog.events.BrowserEvent', 'goog.events.BrowserEvent.MouseButton'], ['goog.events.BrowserFeature', 'goog.events.Event', 'goog.events.EventType', 'goog.reflect', 'goog.userAgent']);
goog.addDependency("events/eventwrapper.js", ['goog.events.EventWrapper'], []);
goog.addDependency("events/listenable.js", ['goog.events.Listenable', 'goog.events.ListenableKey'], ['goog.events.EventLike']);
goog.addDependency("events/listener.js", ['goog.events.Listener'], ['goog.events.ListenableKey']);
goog.addDependency("events/events.js", ['goog.events', 'goog.events.Key'], ['goog.array', 'goog.debug.entryPointRegistry', 'goog.debug.errorHandlerWeakDep', 'goog.events.BrowserEvent', 'goog.events.BrowserFeature', 'goog.events.Event', 'goog.events.EventWrapper', 'goog.events.Listenable', 'goog.events.Listener', 'goog.object', 'goog.userAgent']);
goog.addDependency("events/eventtarget.js", ['goog.events.EventTarget'], ['goog.Disposable', 'goog.events', 'goog.events.Event', 'goog.events.Listenable', 'goog.events.Listener', 'goog.object']);
goog.addDependency("timer/timer.js", ['goog.Timer'], ['goog.events.EventTarget']);
goog.addDependency("structs/collection.js", ['goog.structs.Collection'], []);
goog.addDependency("structs/set.js", ['goog.structs.Set'], ['goog.structs', 'goog.structs.Collection', 'goog.structs.Map']);
goog.addDependency("debug/debug.js", ['goog.debug'], ['goog.array', 'goog.string', 'goog.structs.Set', 'goog.userAgent']);
goog.addDependency("debug/logrecord.js", ['goog.debug.LogRecord'], []);
goog.addDependency("debug/logbuffer.js", ['goog.debug.LogBuffer'], ['goog.asserts', 'goog.debug.LogRecord']);
goog.addDependency("debug/logger.js", ['goog.debug.LogManager', 'goog.debug.Logger', 'goog.debug.Logger.Level'], ['goog.array', 'goog.asserts', 'goog.debug', 'goog.debug.LogBuffer', 'goog.debug.LogRecord']);
goog.addDependency("net/errorcode.js", ['goog.net.ErrorCode'], []);
goog.addDependency("net/eventtype.js", ['goog.net.EventType'], []);
goog.addDependency("net/httpstatus.js", ['goog.net.HttpStatus'], []);
goog.addDependency("net/xmlhttpfactory.js", ['goog.net.XmlHttpFactory'], []);
goog.addDependency("net/wrapperxmlhttpfactory.js", ['goog.net.WrapperXmlHttpFactory'], ['goog.net.XmlHttpFactory']);
goog.addDependency("net/xmlhttp.js", ['goog.net.DefaultXmlHttpFactory', 'goog.net.XmlHttp', 'goog.net.XmlHttp.OptionType', 'goog.net.XmlHttp.ReadyState'], ['goog.net.WrapperXmlHttpFactory', 'goog.net.XmlHttpFactory']);
goog.addDependency("net/xhrio.js", ['goog.net.XhrIo', 'goog.net.XhrIo.ResponseType'], ['goog.Timer', 'goog.array', 'goog.debug.Logger', 'goog.debug.entryPointRegistry', 'goog.events', 'goog.events.EventTarget', 'goog.json', 'goog.net.ErrorCode', 'goog.net.EventType', 'goog.net.HttpStatus', 'goog.net.XmlHttp', 'goog.object', 'goog.structs', 'goog.structs.Map', 'goog.uri.utils']);
goog.addDependency("events/eventhandler.js", ['goog.events.EventHandler'], ['goog.Disposable', 'goog.array', 'goog.events', 'goog.events.EventWrapper']);
goog.addDependency("structs/queue.js", ['goog.structs.Queue'], ['goog.array']);
goog.addDependency("structs/pool.js", ['goog.structs.Pool'], ['goog.Disposable', 'goog.structs.Queue', 'goog.structs.Set']);
goog.addDependency("structs/node.js", ['goog.structs.Node'], []);
goog.addDependency("structs/heap.js", ['goog.structs.Heap'], ['goog.array', 'goog.object', 'goog.structs.Node']);
goog.addDependency("structs/priorityqueue.js", ['goog.structs.PriorityQueue'], ['goog.structs', 'goog.structs.Heap']);
goog.addDependency("structs/prioritypool.js", ['goog.structs.PriorityPool'], ['goog.structs.Pool', 'goog.structs.PriorityQueue']);
goog.addDependency("net/xhriopool.js", ['goog.net.XhrIoPool'], ['goog.net.XhrIo', 'goog.structs', 'goog.structs.PriorityPool']);
goog.addDependency("net/xhrmanager.js", ['goog.net.XhrManager', 'goog.net.XhrManager.Event', 'goog.net.XhrManager.Request'], ['goog.Disposable', 'goog.events', 'goog.events.Event', 'goog.events.EventHandler', 'goog.events.EventTarget', 'goog.net.EventType', 'goog.net.XhrIo', 'goog.net.XhrIoPool', 'goog.structs.Map']);