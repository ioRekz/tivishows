(ns app.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! chan >! put! timeout go-loop]]
            [ajax.core :as ajax]))

(enable-console-print!)
;; "poster_sizes": [
;;             "w92",
;;             "w154",
;;             "w185",
;;             "w342",
;;             "w500",
;;             "original"
;;         ],
;;         "backdrop_sizes": [
;;             "w300",
;;             "w780",
;;             "w1280",
;;             "original"
;;         ],

(def moviedb-api-key "15562982f4c622e75a7d89918c26e669")

(defn moviedb-show-details-url [show-id] (str "http://api.themoviedb.org/3/tv/" show-id "?api_key=" moviedb-api-key))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; apis ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;(defn http-get [url] (go (let [response (<! (http/get url {:with-credentials? false}))]
;      (js->clj (:body response)))))

;(go (prn (clj->js (http-get (moviedb-show-details-url "34469")))))

(defn parse-xml-shows [xml]
  (let [x2 (js/X2JS. nil)]
  (js->clj (.xml2json x2 (.parseXmlString x2 xml)))))

;"http://services.tvrage.com/feeds/search.php?show="
(defn findShows [e owner query]
  (do
    (.blur (om/get-node owner "show-name"))
    (.blur (.-activeElement js/document))
    (.preventDefault e)
  (go (let [response (<! (http/get (str "http://services.tvrage.com/feeds/search.php?show=" query) {:with-credentials? false}))
            data (parse-xml-shows (:body response))];show-query-sample)]
      (om/set-state! owner :shows (map (fn [sh] {:name (get sh "name") :id (get sh "showid")}) (flatten [(-> data (get "Results") (get "show"))])))))))

;http://services.tvrage.com/feeds/episode_list.php?sid=
(defn parse-episode-list [show callb]
  (go (let [response (<! (http/get (str "http://services.tvrage.com/feeds/episode_list.php?sid=" show) {:with-credentials? false}))
            data (parse-xml-shows (:body response))];show-episode-sample] ;http-get (str "http://services.tvrage.com/feeds/episode_list.php?sid=" show)]
  (callb (flatten [(-> data (get "Show") (get "Episodelist") (get "Season"))])))))

(defn format-number-zero [num] (if (< num 10) (str 0 num) (str num)))

(defn get-magnet-link [showw season episode]
  (go (let [s (format-number-zero season) e (format-number-zero episode)
            show (js/encodeURIComponent showw)
            response (<! (http/get (str "http://thepiratebay.se/search/" show " s" s "e" episode "/0/7/0") {:with-credentials? false}))
            el (.find (js/$ (:body response)) ".detName:first-child + a")
            magnet (.attr el "href")
            name-el (.find (js/$ (:body response)) ".detName a")
            file-name (.text (.first name-el))]
        {:magnet magnet :file-name file-name})))

(defn get-subtitle-link [show season episode]
  (go (let [response (<! (http/get (str "http://www.addic7ed.com/serie/" show "/" season "/" episode "/8")))
            linkel (.find (js/$ (:body response)) ".buttonDownload")
            compl (-> linkel .first .parent .prev .text .trim)
            link (.attr linkel "href")]
        (when (and link (= compl "Completed"))
          (str "http://www.addic7ed.com" link)))))


;;;;;;;;;;;;;;;;; themoviedb ;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn moviedb-image-url [id] (str "http://image.tmdb.org/t/p/w780" id))

(defn moviedb-search [show-name] (str "http://api.themoviedb.org/3/search/tv?api_key=15562982f4c622e75a7d89918c26e669&query="
                                      (let [idx (.indexOf show-name "(")]
                                        (prn idx)
                                        (if-not (= idx -1)
                                          (subs show-name 0 idx)
                                          show-name))))

(defn moviedb-get-image-url [show-name]
  (let [ch (chan)]
    (ajax/GET (moviedb-search show-name)
              {:format (ajax/json-format {:keywords? true}) :handler #(put! ch (moviedb-image-url (:backdrop_path (first (:results %)))))})
    ch))

;;;;;;;;;;;;;;;;; freebox ;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def app_id "iorek.tivishows4")
(def dir-base "/Disque dur/Videos/")

(defn freebox-get [url token]
  (let [ch (chan)]
    (ajax/GET (str "http://88.124.156.100/api/v1/" url) {:format (ajax/json-format {:keywords? true})
                   :headers {:X-Fbx-App-Auth token}
                   :handler #(put! ch (-> % :result))})
    ch))

(defn freebox-autorize [do-with-token]
  (ajax/POST "http://88.124.156.100/api/v1/login/authorize/"
           {:params
               {:app_id app_id
                :app_name "tivishows"
                :app_version "1"
                :device_name "Nexus Pad"}
            :format (ajax/json-format {:keywords? true})
            :handler #(do-with-token (do (-> % :result)))}))

(defn freebox-session [app-token do-with-session]
  (ajax/GET "http://88.124.156.100/api/v1/login/"
             {:format (ajax/json-format {:keywords? true})
              :handler #(let [challenge (-> % :result :challenge)] (freebox-session-save (freebox-make-password challenge app-token) do-with-session))}))

(defn freebox-session-save [pass do-with-session]
  (ajax/POST "http://88.124.156.100/api/v1/login/session/"
             {:params {:app_id app_id :password pass}
              :format (ajax/json-format {:keywords? true})
              :handler #(do-with-session (-> % :result :session_token))}))

(defn freebox-track-id [id]
  (let [ch (chan)]
    (ajax/GET (str "http://88.124.156.100/api/v1/login/authorize/" id)
            {:format  (ajax/json-format {:keywords? true})
            :handler #(put! ch (-> % :result))}
              )
    ch))

;var hash = CryptoJS.HmacSHA1("Message", "Secret Passphrase");
(defn freebox-make-password [challenge token]
  (.toString (.HmacSHA1 js/CryptoJS challenge token)))

(defn freebox-create-dir [show]
      (cljs.core.async/map< (fn [r] (js/btoa (str dir-base show)))
                            (freebox-call ajax/POST "/fs/mkdir" :opts {:params {:parent (js/btoa dir-base) :dirname show}})))

(defn freebox-start-download [magnet download-dir session-token do-with-id do-with-session]
  (ajax/POST "http://88.124.156.100/api/v1/downloads/add"
             {:params {:download_url magnet :download_dir download-dir}
              :format (ajax/url-request-format)
              :headers {:X-Fbx-App-Auth session-token}
              :handler (fn [res]
                         (do-with-id (get (get res "result") "id") session-token))
              :error-handler (fn [res]
                               (do res)
                                 (when (= "auth_required" (get (:response res) "error_code"))
                                   (freebox-session (:app-token @app-state) (fn [new-sess] (do (do-with-session new-sess) (freebox-start-download magnet download-dir new-sess do-with-id do-with-session))))))}))

(defn freebox-call [method uri & {:keys [opts proj channel]}]
  (let [ch (or channel (chan))
        default-opts {:format (ajax/json-format {:keywords? true})
                      :headers {:X-Fbx-App-Auth (:session-token @app-state)}
                      :handler #(do (prn "handler")(put! ch (get-in % proj)))
                      :error-handler (fn [res]
                                       (when (= "auth_required" (-> res :response :error_code))
                                         (freebox-session (:app-token @app-state) #(do (swap! app-state assoc :session-token %)
                                                                                     (freebox-call method uri :opts opts :proj proj :channel ch)))))}]
    (method (str "http://88.124.156.100/api/v1" uri) (merge default-opts opts))
  ch))


(defn freebox-get-download-percent [id session-token do-with-percent]
  (freebox-get-download id session-token #(do-with-percent (/ (-> % :result :rx_pct) 100))))

;(defn freebox-get-download-details [id session-token do-with-percent]
;  (freebox-get-download id session token #(do-with-percent (:result %))))

(defn freebox-get-download-details [id session-token]
  (freebox-call ajax/GET (str "/downloads/" id)))

(defn freebox-get-download [id session-token handler]
  (ajax/GET (str "http://88.124.156.100/api/v1/downloads/" id)
            {:format (ajax/json-format {:keywords? true})
             :headers {:X-Fbx-App-Auth session-token}
             :handler handler}))

(defn freebox-get-upload-id [session-token dirname upname]
  (let [ch (chan)]
    (ajax/POST (str "http://88.124.156.100/api/v1/upload/")
             {:params {:dirname dirname :upload_name (str upname ".srt")}
              :format (ajax/json-format {:keywords? true})
              :headers {:X-Fbx-App-Auth session-token}
              :handler #(put! ch (-> % :result :id))})
    ch))

(defn freebox-get-file-info [path token]
  (freebox-get (str "fs/info/" path) token))


(defn freebox-ls-path [path token]
  (freebox-get (str "fs/ls/" path) token))

(ajax/GET "http://88.124.156.100/api/v1/login")
;;;;;;;;;;;;;;;;;;;;;;;; global ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn get-local [k defo]
  (let [local (.getItem (.-localStorage js/window) k)]
  (if local (cljs.reader/read-string local) defo)))

;, :watches {:current {:name \"Dexter\", :id :7926}, :7926 {:show-name \"Dexter\", :episodes [{:episode \"91\", :epnumrelative \"07\", :season 8, :title \"Dress Code\"} {:episode \"92\", :epnumrelative \"08\", :season 8, :title \"Are We There Yet?\"} {:episode \"93\", :epnumrelative \"09\", :season 8, :title \"Make Your Own Kind of Music\"} {:episode \"94\", :epnumrelative \"10\", :season 8, :title \"Goodbye Miami\"} {:episode \"95\", :epnumrelative \"11\", :season 8, :title \"Monkey in a Box\"} {:episode \"96\", :epnumrelative \"12\", :season 8, :title \"Remember the Monsters?\"}]}}}")
(def defo-state {:watches {:current {}} :shows #{}})
(def app-state (atom (get-local "state" defo-state)))
(add-watch app-state :state (fn [_ _ _ s]
                              (.setItem (.-localStorage js/window) "state" s)))

;(swap! app-state dissoc :app-token)


(defn topcoat-list-view [app owner]
  (reify
    om/IRenderState
    (render-state [_ _]
      (dom/div #js {:className (str "topcoat-list__container" (:listCls data))}
        (when (:header app) (dom/h3 #js {:className "topcoat-list__header"} (:header app)))
        (apply dom/ul #js {:className "topcoat-list list "}
          (map (fn [item] (dom/li #js {:className "topcoat-list__item" :onClick #(do ((:click app) item)) :onDoubleClick #((:db-click app) item)} ((:display app) item owner)))
               (:items app)))
               (when (:extra app) (:extra app))))))


;;;;;;;;;;;;;;;;;;;;;;;;;; views ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;; add show to watch list ;;;;;;;;;;;;;;

(defn save-show [e show app owner]
  (let [kshow show st (om/get-state owner) input (om/get-node owner "show-name")];{:name (:name show) :id (keyword (:id show))}]
    (.scrollTo js/window 0 0)
    (set! (.-value input) "")
    (prn kshow)
    (prn "aoidjisaojd")
    (om/set-state! owner :shows [])
    (om/update! app [:watches :current] kshow)
    (om/transact! app :shows (fn [shows] (conj shows kshow)))))

(defn add-show-view [app owner]
  (reify
    om/IRenderState
    (render-state [_ st]
      (dom/div #js {:className "topcoat-list"}
        (dom/h3 #js {:className "topcoat-list__header"} "Add Show")
        (dom/form #js {:className "add-show-input" :onSubmit #(findShows % owner (.-value (om/get-node owner "show-name")))}
          (dom/input #js {:type "text" :className "topcoat-text-input" :placeholder "show name" :ref "show-name"}))
        (apply dom/ul #js {:className "topcoat-list__container"}
          (map (fn [show] (dom/li #js {:className "topcoat-list__item" :onClick #(save-show % show app owner)} (:name show))) (:shows st)))))))


;;;;;;;;;;;;;;;;;;;;;;; action sheet ;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn action-sheet [app owner opts]
  (if (:show opts)
    (dom/div #js {:className "action-sheet-backdrop active" :onClick (:on-hide opts)}
      (dom/div #js {:className "action-sheet-wrapper action-sheet-up"}
        (dom/div #js {:className "action-sheet"}
          (dom/div #js {:className "action-sheet-group"}
            (dom/div #js {:className "action-sheet-title"} (:title opts))
            (apply dom/div nil
              (map
                (fn [button]
                  (dom/div #js {:className "button" :onClick #(do ((second button)) ((:on-hide opts)))} (first button)))
              (:buttons opts))))
          (dom/div #js {:className "action-sheet-group"}
            (dom/div #js {:className "button" :onClick (:on-hide opts)} "Cancel")))))
    (dom/div nil "")))


;;;;;;;;;;;;;;;;;;;;;;; show details ;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn display-show [app token]
  (if (contains? (:current app) :id)
    (if (contains? app (-> app :current :id))
      (om/build show-watch-list-view (get app (-> app :current :id)) {:init-state {:token token :current (:current app)}})
      (om/build show-select-last-view app)
      )
  (dom/div nil "")))


;;;;;;;;;;;; select last seen ;;;;;;;;;;;
(defn show-select-last-view [app owner]
  (reify
    om/IInitState
    (init-state [_] {:seasons [] :mark-chan (chan)})
    om/IWillMount
    (will-mount [_]
      (let [mark-chan (om/get-state owner :mark-chan)]
        (parse-episode-list (name (-> app :current :id)) #(om/set-state! owner :seasons %))
        (go (loop []
          (let [marked (<! mark-chan)]
            (mark-watched (:show marked) (map-indexed (fn [idx it] {:idx idx :episodes it}) (om/get-state owner :seasons)) (:episode marked) app)
            (recur))))))
    om/IRenderState
    (render-state [_ state]
     (om/build topcoat-list-view (om/graft
              {:items (reverse (map-indexed (fn [idx seas] {:idx idx :episodes seas}) (:seasons state)))
               :header (str (-> app :current :name) " - Click the next episode you want to see !")
               :display #(show-season-episodes app (:episodes %) (:idx %) (-> app :current) (:mark-chan state))} app)))))


(defn show-season-episodes [app season num show mark-chan]
  (om/build topcoat-list-view (om/graft
                               {:header (str "Season " (inc num))
                                :items (flatten [(get season "episode")])
                                :display #(dom/span nil (str "Episode " (get % "seasonnum") " - " (get % "title")) (dom/em #js {:className "download"} (get-air-delay (get % "airdate"))))
                                :click #(put! mark-chan {:season (inc num) :episode (cljs.reader/read-string (get % "epnum")) :show show})} app)))
;;; utils ;;;
(defn get-air-delay [string-date]
  (.fromNow (js/moment. string-date)))


(defn get-watch-list [seasons episode]
  (do
  (reduce (fn [acc curr]
            (concat acc
                    (remove #(< (:episode %) episode) (map #(parse-episode % (:idx curr)) (get (:episodes curr) "episode")))
                    )) [] seasons)))

(defn mark-watched [show seasons episode app]
  (let [eps (get-watch-list seasons episode)]
    (.scrollTo js/window 0 0)
    (om/transact! app (:id @show) (fn [_] {:show-name (:name @show) :show-id (:id @show) :episodes (into [] eps)}))))

(defn parse-episode [ep seas]
  {:episode (get ep "epnum") :epnumrelative (get ep "seasonnum") :season (inc seas) :title (get ep "title") :air-date (get ep "airdate")})
;;;;;;;;;; show watch list ;;;;;;;;

;; app is a show episode list {:id id :show show :episodes [{:episode 1 :season 2 :title toto}]}
(defn show-watch-list-view [app owner]
  (reify
    om/IDidMount
    (did-mount [_] (prn app))
    om/IWillMount
    (will-mount [_]
      (go
        (when (not (:image @app))
          (let [img (<! (moviedb-get-image-url (:show-name @app)))]
            (om/transact! app :image (fn [_] img))))))
        ;(om/transact! app :episodes (fn [xs] (vec (concat) (<! (find-new-shows @app))))))
    om/IRenderState
    (render-state [_ state]
      (dom/div nil
        (dom/div #js {:className (str "topcoat-list")}
        (dom/h3 #js {:className "topcoat-list__header"}
        (dom/img #js {:src (:image app) :height "30%" :className "picture"})  )
        (apply dom/ul #js {:className "topcoat-list__container"}
               (om/build-all episode-view (:episodes app) {:state {:show-name (:show-name app) :token (:token state)} :opts {:show-name (:show-name app)}})))
        (dom/button #js {:className "topcoat-button reset-show" :onClick #(put! reset-show-chan (:show-id @app))} "Reset shows")
        (dom/form #js {:className "add-show-input" :onSubmit (fn [e own]
                                                                        (let [newval (.-value (om/get-node owner "show-name-change"))] (
                                                                            (.preventDefault e)
                                                                            (swap! app-state update-in [:shows] (fn [shows] (map #(if (= (:name %) (:show-name @app))
                                                                                                                         (assoc % :name newval)
                                                                                                                          %) shows)))
                                                                                                                                        (prn @app)
                                                                            ;(prn (get-in @app-state [:watches :current :name]))
                                                                            (swap! app-state assoc-in [:watches :current :name] newval)
                                                                            ;(om/update! app [:show-name] newval)
                                                                            ;(swap! app-state assoc-in [:watches (:show-id @app) :show-name] newval)
                                                                            )))}
                                             (dom/input #js {:type "text" :className "topcoat-text-input" :value (:show-name app) :ref "show-name-change"
                                                             :onChange (fn [event] (let [newval (-> event .-target .-value)]
                                                                                     ((swap! app-state update-in [:shows] (fn [shows] (map #(if (= (:name %) (:show-name @app))
                                                                                                                         (assoc % :name newval)
                                                                                                                          %) shows)))
                                                                                      (swap! app-state assoc-in [:watches :current :name] newval)
                                                                                      (om/update! app [:show-name] newval)))) }))))))

;; (defn find-new-shows [app]
;;   (let [ch (chan)]
;;     (parse-episode-list (:show-id app) #(put! ch %))
;;     ch))0

(prn @app-state)

;(swap! app-state update-in [:shows] (fn [shows] (map #(if (= (:name %) "Sherlock") (assoc % :name "toto") % ) shows)))

;{:watches {:current {:name "CSI", :id "3183"}, "3183" {:show-name "CSI", :show-id "3183", :episodes [{:episode "310", :epnumrelative "15", :season 14, :title "Love For Sale", :air-date "2014-02-19", :subs-link "http://www.addic7ed.com/updated/8/84526/1"} {:episode "311", :epnumrelative "16", :season 14, :title "Killer Moves", :air-date "2014-03-05"} {:episode "312", :epnumrelative "17", :season 14, :title "Dear Mr. Fantasy", :air-date "0000-00-00", :subs-link nil}], :image "http://image.tmdb.org/t/p/w780/nXN4QpQV0KGU2ujRQtqoU2dIEUy.jpg"}}, :shows ({:name "New Girl", :id "28304"} {:name "CSI", :id "3183"}), :app-token "cdBeIzBKGxoheo7B9mbZvezZsKE1Lm5D9BtX+ThVF8wc8Ew4L00FFemFw8fwF/vl", :session-token "L1HCQSrrC/lkQnpb3YqtDBLABwgr996SVD/hQnLhdOm6qFTICTsQyGP4E/WV3JIP"}

(defn episode-view [app owner opts]
  (reify
    om/IInitState
    (init-state [_] {:update-chan (chan)})
    om/IWillMount
    (will-mount [_]
      (let [update-chan (om/get-state owner :update-chan) {:keys [season epnumrelative]} app st (om/get-state owner) show-name (:show-name st)]
        (when (and (:download-id app) (< (:percent app) 100))
          (get-download-percent (:download-id app) app (om/get-state owner :token) update-chan))
        (go (loop []
          (let [percent (<! update-chan) sub-link (:subs-link @app)]
            (om/transact! app :percent (fn [_] (int percent)))
            ;;need to check for subtitles when download started so we can have file and directory names
            (when (and (not (contains? @app :subs-downloaded)) sub-link (> (int percent) 0))
              (downloadSubs sub-link (:session-token @app-state) (:download-id @app) show-name season epnumrelative)
              (om/update! app [:subs-downloaded] true))
            (recur))))
        (go
           (when (and (not (:subs-link @app)) (not (in-future? (:air-date @app))))
             (om/update! app [:subs-link] (<! (get-subtitle-link show-name season epnumrelative)))))
        ))
        ;(on (js/Hammer. (om/get-node owner "cont"))) "doubletap" #(prn "double tap")))
    om/IRenderState
    (render-state [this state]
      (let [display-name (str "S" (:season app) "E" (:epnumrelative app) " - " (:title app)) display-size (count display-name)]
        (dom/div nil
                 (om/build action-sheet app {:opts {:title display-name
                                       :show (:action-sheet state)
                                       :on-hide #(om/set-state! owner :action-sheet false)
                                       :buttons [
                                                 ["Download" #(download app (:show-name state) (:token state) (:update-chan state))]
                                                 ["Download subtitles" #(when (:subs-link @app)
                                                                          (downloadSubs (:subs-link @app) (:session-token @app-state) (:download-id @app) (:show-name state) (:season @app) (:epnumrelative @app))
                                                                          (om/update! app [:subs-downloaded] true))]
                                                 ["Download on device" #(download-on-device app state display-size)]
                                                 ["Watch" #(play-on-device (:show-name state) (:download-id @app))
                                                  ;#(.playVideo js/window (:on-device @app))
                                                  ]]}})
        (dom/li #js {:className "topcoat-list__item" :ref "contz"
                   :onClick #(om/set-state! owner :action-sheet true)}
;;                      #(if (and (= 100 (:percent @app)) (:subs-link @app))
;;                                (if-not (:subs-downloaded @app)
;;                                  (do (downloadSubs (:subs-link @app) (:session-token @app-state) (:download-id @app) (:show-name state) (:season @app) (:epnumrelative @app))
;;                                    (om/update! app [:subs-downloaded] true))
;;                                  (if (:on-device @app) (.playVideo js/window (:on-device @app)) (download-on-device app state display-size)))
;;                                (download app (:show-name state) (:token state) (:update-chan state)))}
           (dom/span #js {:className "finished"} (subs display-name 0 (:on-device-progress app))) (dom/span nil (subs display-name (:on-device-progress app) display-size))
           (when (and (contains? app :air-date) (in-future? (:air-date app))) (dom/em #js {:className "download"} (get-air-delay (:air-date app))))
           (when (:download-id app) (dom/em #js {:className (str "download " (if (= (:percent app) 100) "finished" ""))} (str (:percent app) "%")))
           (when (contains? app :subs-link)
             (dom/em #js {:className (str "download episode__subtitles " (if (:subs-downloaded app) "finished" ""))}
                     (if (:subs-link app)
                       "S"
                       (dom/span #js {:className "strikethrough"} "S"))))

        ))))))

(defn in-future? [string-date]
  (.isAfter (js/moment. string-date)))

(defn download [app sn token update-chan]
  (go (let [{:keys [season epnumrelative]} @app
            magnet (<! (get-magnet-link sn season epnumrelative))
            link (<! (get-subtitle-link sn season epnumrelative))
            dl-dir (<! (freebox-create-dir sn))
            ]
        (freebox-start-download
          (:magnet magnet)
          dl-dir
          token
          (fn [id newtoken]
            (when id
              (get-download-percent id app newtoken update-chan)))
          #(swap! app-state assoc :session-token %)))))


(defn download-on-device [app state dn]
   (go (let [details (<! (freebox-get-download-details (:download-id @app) (:token state)))
             download-dir (-> details :result :download_dir)
             video-name (<! (find-downloaded-name download-dir details (:token state) show))
             file-name (subtitle-name-from-filename video-name)
             srt (str file-name ".srt")
             encoded-srt (goog.crypt.base64.encodeString srt)
             encoded-file (goog.crypt.base64.encodeString video-name)]
         (om/update! app [:on-device] video-name)
         (.downloadOnDevice js/window (str download-dir encoded-file) video-name (str download-dir encoded-srt) srt (on-progress-device app dn video-name) (:token state)))))

(defn on-progress-device [app size video]
  (fn [ratio] (let [idx (/ (int (* size ratio)) 2)]
                (when (> idx (or (:on-device-progress @app) 0)) (do (om/update! app [:on-device-progress] idx)
                                                                  ;;ye ratio 2 no joke bugg
                                                                  (when (= ratio 2) (om/update! app [:on-device] video)))))))

(defn play-on-device [show download-id]
  (go (let [token (:session-token @app-state)
            details (<! (freebox-get-download-details download-id token))
            download-dir (-> details :result :download_dir)
            video-name (<! (find-downloaded-name download-dir details token show))]
        (js/playVideo (str show "/" video-name)))))

(defn subtitle-name-from-filename [file-name]
  (if-not (= (.indexOf file-name ".") -1)
    (clojure.string/join "." (butlast (clojure.string/split file-name #"\.")))
    file-name))

(defn find-file-in-dir [path token]
  (go (let [path-infos (<! (freebox-ls-path path token))]
        (prn path-infos)
        (:name (first (filter #(= (:mimetype %) "video/mp4") path-infos))))))

(defn find-downloaded-name [path details token show]
  (go (if (= path (js/btoa (str dir-base show "/")))
    (-> details :result :name)
    (<! (find-file-in-dir path token)))))


(defn downloadSubs [link token download-id show season ep]
  (go (let [details (<! (freebox-get-download-details download-id token))
            download-dir (-> details :result :download_dir)
            video-name (<! (find-downloaded-name download-dir details token show))
            file-name (subtitle-name-from-filename video-name)
            upload-id (<! (freebox-get-upload-id token download-dir file-name))]
        (prn "download subbbbs")
        (.downloadSub js/window link token file-name upload-id (addic7ed-url show season ep)))))

(defn addic7ed-url [showname season episode]
  (str "http://www.addic7ed.com/serie/" showname "/" season "/" episode "/addic7ed"))

(defn get-download-percent [id app token update-chan]
  (do (om/transact! app :download-id (fn [_] id))
      (prn "download percent")
      (go
          (loop []
            (let [res (<! (freebox-get-download-details id token)) pct (/ (-> res :result :rx_pct) 100)]
              (if (:success res)
                (do
                  (<! (timeout 5000))
                  ;(prn res)
                  (put! update-chan pct)
                  (when  (< pct 100) (recur)))
                (om/transact! app :download-id (fn [_] nil))))))))

;;     (go (let [details (<! (freebox-get-download-details id token))]
;;           (if (:success details)
;;             (js/setInterval
;;                (fn [] (freebox-get-download-percent id token #(put! update-chan %)))
;;                  5000)
;;             (om/transact! app :download-id (fn [_] nil)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; admin ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn admin-actions [app state owner]
  (dom/div #js {:className "app__sidebar__admins"}
  (if (:admin state)
    (dom/div nil
      (dom/button #js {:className "topcoat-button" :onClick #(do (om/transact! app (fn [_] defo-state)) (check-freebox-status app))} "Clear all")
      (dom/br nil)
      (dom/button #js {:className "topcoat-button" :onClick #(do (om/update! app [:app-token] nil) (check-freebox-status app))} "Clear box")
      (dom/button #js {:className "topcoat-button" :onClick #(om/transact! app (fn [st] (assoc defo-state :app-token (:app-token st) :session-token (:session-token st))))} "Clear shows"))
    (dom/button #js {:className "topcoat-button" :onClick #(om/set-state! owner :admin true)} "Admin"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; main component ;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def reset-show-chan (chan))

(defn tivi-view [app owner]
  (reify
    om/IInitState
    (init-state [_] {:add (chan) :main (chan) :current {:kind :select :show "test"}})
    om/IWillMount
    (will-mount [_]
      (let [add (om/get-state owner :add) main (om/get-state owner :main)]
        (check-freebox-status app)
        (go (loop []
          (let [show (<! add)]
            (om/transact! app :shows conj show)
            (recur))))
        (go (loop []
          (let [current (<! main)]
            (om/transact! app :current (fn [c] current))
            (recur))))
        (go (loop []
                 (let [reset (<! reset-show-chan)]
                   (om/transact! app :watches (fn [w] (dissoc w reset)))
                   (recur))))))
    om/IRenderState
    (render-state [_ state]
      ;(prn app)
      (dom/div #js {:className "app"}
      (dom/aside #js {:className "app__sidebar"}
        (om/build topcoat-list-view
                  (om/graft {:items (sort-by :name (:shows app))
                             :display (fn [item container] (if (= (:id item) (:editing state))
                                         (dom/form #js {:className "add-show-input" :onSubmit (fn [e own]
                                                                                                (let [newval (.-value (om/get-node container "show-name-change"))] (
                                                                                                    (.preventDefault e)
                                                                                                    (om/transact! app :shows (fn [shows] (map #(if (= % item)
                                                                                                                                                 (assoc % :name newval) %) shows)))
                                                                                                    (om/set-state! owner :editing nil)
                                                                                                    (om/update! app [:watches :current :name] newval)
                                                                                                    (om/update! app [:watches (:id item) :show-name] newval)
                                                                                                    )))}
                                             (dom/input #js {:type "text" :className "topcoat-text-input" :defaultValue (:name item)  :ref "show-name-change"}))
                                          (:name item)))
                             :header "Shows" :listCls "shows"
                             :click #(om/update! app [:watches :current] %)
                             :db-click #(om/set-state! owner :editing (:id %))}
                            app))
        (om/build add-show-view app {:init-state {:add (:add state)}})
        (admin-actions app state owner))
      (dom/section #js {:className "app__details"}
        (display-show (:watches app) (:session-token app)))))))


;{:watches {:current {:name "CSI", :id "3183"}, "3183" {:show-name "CSI", :show-id "3183", :episodes [{:episode "310", :epnumrelative "15", :season 14, :title "Love For Sale", :air-date "2014-02-19", :subs-link "http://www.addic7ed.com/updated/8/84526/1"} {:episode "311", :epnumrelative "16", :season 14, :title "Killer Moves", :air-date "2014-03-05"} {:episode "312", :epnumrelative "17", :season 14, :title "Dear Mr. Fantasy", :air-date "0000-00-00", :subs-link nil}], :image "http://image.tmdb.org/t/p/w780/nXN4QpQV0KGU2ujRQtqoU2dIEUy.jpg"}}, :shows ({:name "New Girl", :id "28304"} {:name "CSI", :id "3183"}), :app-token "cdBeIzBKGxoheo7B9mbZvezZsKE1Lm5D9BtX+ThVF8wc8Ew4L00FFemFw8fwF/vl", :session-token "L1HCQSrrC/lkQnpb3YqtDBLABwgr996SVD/hQnLhdOm6qFTICTsQyGP4E/WV3JIP"}

(defn check-freebox-status [app]
  (if (:app-token app)
    (freebox-session (:app-token app) #(do (prn %) (om/transact! app :session-token (fn [_] %))))
    (freebox-autorize #(do

                         (check-track app %)))))

(defn check-track [app aut]
  (go (loop [res (<! (freebox-track-id (:track_id aut)))]
     (if (= "pending" (:status res))
       (do
         (<! (timeout 3000))
         (recur (<! (freebox-track-id (:track_id aut)))))
       (manage-pending (:status res) (:app_token aut) (:challenge res) app)
       ))))


(defn manage-pending [status app-token challenge app]
  (prn "manage pending")
  (if (= "granted" status)
    (do
      (ajax/GET "http://88.124.156.100/api/v1/login")
      (freebox-session-save (freebox-make-password challenge app-token) #(do
                                          (om/transact! app :session-token (fn [_] %))
                                          (om/transact! app :app-token (fn [_] app-token)))))
    (om/transact! app :app-token (fn [_] nil))))

(om/root
  tivi-view
  app-state
  {:target (. js/document (getElementById "app"))})

