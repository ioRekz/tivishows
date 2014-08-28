/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var FS = undefined
var errorFunc = function(e) { console.log(e) }

window.playVideo = function(path) {
  console.log("Trying to play "+path)
  window.plugins.webintent.startActivity(
    {
      action: window.plugins.webintent.ACTION_VIEW,
      url: 'smb://192.168.0.254/Disque dur/Videos/'+path,//'file:///sdcard/Movies/' + videoName,
      type: 'video/*'
    },
    function() {},
    function() {
      alert('Failed to open URL via Android Intent.');
      console.log("Failed to open URL via Android Intent. URL: " + theFile.fullPath)
    })
}

window.downloadSub = function(url, token, fileName, uploadId, addic7edurl) {

  var fileTransfer = new FileTransfer();

  var uploadSub = function(entry) {
    console.log("download complete: " + entry.fullPath);
    var fo = new FileUploadOptions();
    fo.headers = {"X-Fbx-App-Auth": token, Connection: "close"}
    fo.chunkedMode = false;
    fo.fileKey = "file";
    fo.fileName = fileName + ".srt";
    fo.mimeType = "text/plain";

    entry.file(function(f) {
      fileTransfer.upload(f.fullPath, encodeURI("http://88.124.156.100/api/v1/upload/" + uploadId + "/send"), function(suc) {
        console.log("success", suc)
      }, errorFunc, fo, true);
    }, errorFunc);
  }

  var onFs = function(fileSystem) {
    var uri = encodeURI(url);
    fileSystem.root.getFile("subtitles", {create: true, exclusive: false}, function(fileEntry) {
    fileTransfer.download(
      uri,
      fileEntry.fullPath,
      uploadSub,
      errorFunc,
      false,
      {
        headers: {
          "Referer": encodeURI(addic7edurl),//"http://www.addic7ed.com/serie/Breaking%20Bad/1/3/addic7ed",
          "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.46 Safari/537.36"
        }
      }
  )})}

  console.log("downloading subtitles for " + fileName + " - " + token + "-" + uploadId + " - ")

  window.requestFileSystem(LocalFileSystem.TEMPORARY, 0, onFs, fail);

}

window.downloadOnDevice = function(pathVideo, nameVideo, pathSrt, nameSrt, progress, token) {
  var fileTransfer = new FileTransfer();

  console.log("download on device "+nameVideo)
  fileTransfer.download(
    "http://88.124.156.100/api/v1/dl/" + pathVideo,
    "file:///sdcard/Movies/"+nameVideo,
    errorFunc,
    errorFunc,
    false,
    {
      headers: {"X-Fbx-App-Auth": token}
    }
  )

  console.log(fileTransfer)

  console.log("onP")

  console.log(progress)
  fileTransfer.onprogress = function(progEvent) {
    if(progEvent.lengthComputable) {
      progress(progEvent.loaded / progEvent.total)
    }
  }

  console.log("onp2")

  var srtTransfer = new FileTransfer();


  srtTransfer.download(
    "http://88.124.156.100/api/v1/dl/" + pathSrt,
    "file:///sdcard/Movies/"+nameSrt,
    errorFunc,
    errorFunc,
    false,
    {
      headers: {"X-Fbx-App-Auth": token}
    }
  )
}
// function onFileSystemSuccess(fileSystem) {
//   var fileTransfer = new FileTransfer();
//   var uri = encodeURI("http://www.addic7ed.com/original/7113/12");
//   fileSystem.root.getFile("subtitles", {create: true, exclusive: false}, function(fileEntry) {
//   fileTransfer.download(
//     uri,
//     fileEntry.fullPath,
//     function(entry) {
//       console.log("download complete: " + entry.fullPath);
//       console.log(entry)
//       var fo = new FileUploadOptions();
//       fo.headers = {"X-Fbx-App-Auth": "0cLbequeeKq31i6BUpK247yEqhYdYqFGqxBn0Z0alwPqRQ4GCEToQA5A2RwgGEJz", Connection: "close"}
//       fo.chunkedMode = false;
//       fo.fileKey = "file";
//       fo.fileName = "test.txt";
//       fo.mimeType = "text/plain";

//       entry.file(function(f) {
//         fileTransfer.upload(f.fullPath, encodeURI("http://mafreebox.freebox.fr/api/v1/upload/214813197/send"), function(suc) {
//           console.log("success", suc)
//         }, errorFunc, fo, true);
//       }, errorFunc);

//     },
//     errorFunc,
//     false,
//     {
//         headers: {
//             "Referer": "http://www.addic7ed.com/serie/Breaking%20Bad/1/3/addic7ed",
//           "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.46 Safari/537.36"
//         }
//     }
//      );
//   })}


function onResolveSuccess(fileEntry) {
  console.log(fileEntry.name);
}

function fail(evt) {
  console.log(evt.target.error.code);
}

var phonegapapp = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      phonegapapp.receivedEvent('deviceready');
      UserAgent.set("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36");
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
      console.log("trying file system")
    }
}

phonegapapp.initialize()
