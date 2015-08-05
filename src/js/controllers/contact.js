'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');

router.route('contact', function () {

	$('.main-content').html(views['contact']);
  
});