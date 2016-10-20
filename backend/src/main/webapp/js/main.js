/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

requirejs.config({
    baseUrl: "bower_components",
    urlArgs: "bust=" +  (new Date()).getTime(),
    paths: {
        "jquery": "AdminLTE/plugins/jQuery/jquery-2.2.3.min",
        "bootstrap": "AdminLTE/bootstrap/js/bootstrap.min",
        "jquery-slimscroll": "AdminLTE/plugins/slimScroll/jquery.slimscroll.min",
        "fastclick": "AdminLTE/plugins/fastclick/fastclick.min",
        // views
        "index": "../js/views/index"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        },
        "jquery-slimscroll": {
            deps: ["jquery"]
        },
        "fastclick": {
            deps: ["jquery"]
        }
    }
});

require(["index", "domReady/domReady"], function(index){
    index.render();
});