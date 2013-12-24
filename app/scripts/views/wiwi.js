/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var WiwiView = Backbone.View.extend({
        template: JST['app/scripts/templates/wiwi.hbs']
    });

    return WiwiView;
});
