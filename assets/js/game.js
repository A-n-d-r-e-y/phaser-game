!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);class i{constructor(e){this.weightedList=e,this.generateRandomInteger=function(e,t){return Math.floor(Math.random()*(t-e)+e)}}getNext(){var e=this.weightedList.reduce((e,t)=>e+t.weight,0);const t=this.generateRandomInteger(0,e);var r=0,i=0;do{r+=this.weightedList[i++].weight}while(r<t);return this.weightedList[--i].index}}const n=60,E=60,T=16,s=16;var a,o={LEVEL_WIDTH_TILES:n,LEVEL_HEIGHT_TILES:E,TILE_WIDTH_PIXELS:T,TILE_HEIGHT_PIXELS:s,LEVEL_WIDTH_PIXELS:T*n,LEVEL_HEIGHT_PIXELS:s*E,TILES_MAPPING:{LIGHT_GRASS_LAYER:{NAME:"LightGrassLayer",LEFT_TILE:19,RIGHT_TILE:17,BOTTOM_TILE:2,TOP_TILE:34,TOP_LEFT_TILE:4,TOP_RIGHT_TILE:5,BOTTOM_LEFT_TILE:20,BOTTOM_RIGHT_TILE:21,MIDDLE_TILE:[{index:0,weight:80},{index:16,weight:15},{index:32,weight:5}]}},SPRITESHEET:{NAME:"spritesheet",FILEPATH:"assets/img/grass_tileset_16x16.png"},TILESET:{NAME:"tileset",FILEPATH:"assets/img/grass_tileset_16x16.png"}};window.onload=function(){var e={type:Phaser.AUTO,width:o.LEVEL_WIDTH_PIXELS,height:o.LEVEL_HEIGHT_PIXELS,backgroundColor:"rgb(255, 255, 255)",pixelArt:!0,parent:"09ji2d0ijw",scene:[L,I]};a=new Phaser.Game(e),window.focus(),_(),window.addEventListener("resize",_)};class L extends Phaser.Scene{constructor(){super("BootGame")}preload(){this.preloadSpriteSheet()}create(){this.scene.start("PlayGame")}preloadSpriteSheet(){this.load.spritesheet(o.SPRITESHEET.NAME,o.SPRITESHEET.FILEPATH,{frameWidth:o.TILE_WIDTH_PIXELS,frameHeight:o.TILE_HEIGHT_PIXELS})}preloadCSV(){this.load.image(o.TILESET.NAME,o.TILESET.FILEPATH),this.load.tilemapCSV("light","assets/apps/tiled/default_map_light.csv"),this.load.tilemapCSV("normal","assets/apps/tiled/default_map_normal.csv")}preloadJSON(){this.load.image(o.TILESET.NAME,o.TILESET.FILEPATH),this.load.tilemapTiledJSON("map","assets/apps/tiled/default_map_embedded_tileset.json")}preloadBlank(){this.load.image(o.TILESET.NAME,o.TILESET.FILEPATH)}}class I extends Phaser.Scene{constructor(){super("PlayGame")}create(){d.call(this)}}function _(){var e=document.querySelector("canvas"),t=window.innerWidth,r=window.innerHeight,i=t/r,n=a.config.width/a.config.height;i<n?(e.style.width=t+"px",e.style.height=t/n+"px"):(e.style.width=r*n+"px",e.style.height=r+"px")}function l(e,t){const r=o.TILE_WIDTH_PIXELS*(t+.5),i=o.TILE_HEIGHT_PIXELS*(e+.5);return new Phaser.Geom.Point(r,i)}var d=function(){const e=o.TILES_MAPPING.LIGHT_GRASS_LAYER,t=o.LEVEL_HEIGHT_TILES-1,r=o.LEVEL_WIDTH_TILES-1,n=new i(e.MIDDLE_TILE);for(let i=0;i<=r;i++)for(let T=0;T<=t;T++){const s=l(i,T);var E=0;E=0===i&&0===T?e.TOP_LEFT_TILE:0===i&&T===t?e.TOP_RIGHT_TILE:0===i?e.TOP_TILE:i===r&&0===T?e.BOTTOM_LEFT_TILE:i===r&&T===t?e.BOTTOM_RIGHT_TILE:i===r?e.BOTTOM_TILE:0===T?e.LEFT_TILE:T===t?e.RIGHT_TILE:n.getNext(),this.add.sprite(s.x,s.y,o.SPRITESHEET.NAME,E)}}}]);