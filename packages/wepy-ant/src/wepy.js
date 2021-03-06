// Hats off to the Alibaba Mini Program engineers.
import app from './app';
import page from './page';
import component from './component';
import event from './event';
import base from './base';
import util from './util';
import mixin from './mixin';


export default {
    event: event,
    app: app,
    component: component,
    page: page,
    mixin: mixin,

    $createApp: base.$createApp,
    $createPage: base.$createPage,

    $isEmpty: util.$isEmpty,
    $isEqual: util.$isEqual,
    $isDeepEqual: util.$isDeepEqual,
    $has: util.$has,
    $extend: util.$extend,
    $isPlainObject: util.$isPlainObject,
    $copy: util.$copy,
};


