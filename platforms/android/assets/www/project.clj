(defproject app "0.1.0-SNAPSHOT"
  :description "Best tivi show app"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.5.0"]
                 [com.facebook/react "0.9.0"]
                 [cljs-http "0.1.4"]
                 [cljs-ajax "0.2.3"]]

  :plugins [[lein-cljsbuild "1.0.1"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "app"
              :source-paths ["src"]
              :compiler {
                :output-to "app.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
