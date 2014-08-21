"use strict";

 angular.module("config", [])

.constant("ENV", {
  "name": "development",
  "apiEndpoint": "http://ffxiv-backend.herokuapp.com/"
})

;