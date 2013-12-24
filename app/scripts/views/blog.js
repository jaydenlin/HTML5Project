/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var BlogView = Backbone.View.extend({
        template: JST['app/scripts/templates/blog.ejs']
    });

    return BlogView;
});
