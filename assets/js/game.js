!function(e){var t={};function E(T){if(t[T])return t[T].exports;var L=t[T]={i:T,l:!1,exports:{}};return e[T].call(L.exports,L,L.exports,E),L.l=!0,L.exports}E.m=e,E.c=t,E.d=function(e,t,T){E.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:T})},E.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.t=function(e,t){if(1&t&&(e=E(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var T=Object.create(null);if(E.r(T),Object.defineProperty(T,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var L in e)E.d(T,L,function(t){return e[t]}.bind(null,L));return T},E.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return E.d(t,"a",t),t},E.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},E.p="",E(E.s=0)}([function(e,t,E){"use strict";E.r(t);const T=60,L=60,I=16,i=16;var _,r={LEVEL_WIDTH_TILES:T,LEVEL_HEIGHT_TILES:L,TILE_WIDTH_PIXELS:I,TILE_HEIGHT_PIXELS:i,LEVEL_WIDTH_PIXELS:I*T,LEVEL_HEIGHT_PIXELS:i*L,TILES_MAPPING:{LIGHT_GRASS_LAYER:{NAME:"LightGrassLayer",LEFT_TILE:19,RIGHT_TILE:17,BOTTOM_TILE:2,TOP_TILE:34,TOP_LEFT_TILE:4,TOP_RIGHT_TILE:5,BOTTOM_LEFT_TILE:20,BOTTOM_RIGHT_TILE:21,MIDDLE_TILE:[{index:0,weight:80},{index:16,weight:15},{index:32,weight:5}]}},SPRITESHEET:{NAME:"spritesheet",FILEPATH:"assets/img/grass_tileset_16x16.png"},TILESET:{NAME:"tileset",FILEPATH:"assets/img/grass_tileset_16x16.png"}};class a extends Phaser.Scene{constructor(){super("BootGame")}preload(){this.preloadSpriteSheet()}create(){this.scene.start("PlayGame")}preloadSpriteSheet(){this.load.spritesheet(r.SPRITESHEET.NAME,r.SPRITESHEET.FILEPATH,{frameWidth:r.TILE_WIDTH_PIXELS,frameHeight:r.TILE_HEIGHT_PIXELS})}preloadCSV(){this.load.image(r.TILESET.NAME,r.TILESET.FILEPATH),this.load.tilemapCSV("light","assets/apps/tiled/default_map_light.csv"),this.load.tilemapCSV("normal","assets/apps/tiled/default_map_normal.csv")}preloadJSON(){this.load.image(r.TILESET.NAME,r.TILESET.FILEPATH),this.load.tilemapTiledJSON("map","assets/apps/tiled/default_map_embedded_tileset.json")}preloadBlank(){this.load.image(r.TILESET.NAME,r.TILESET.FILEPATH)}}class n{constructor(e){this.weightedList=e,this.generateRandomInteger=function(e,t){return Math.floor(Math.random()*(t-e)+e)}}getNext(){var e=this.weightedList.reduce((e,t)=>e+t.weight,0);const t=this.generateRandomInteger(0,e);var E=0,T=0;do{E+=this.weightedList[T++].weight}while(E<t);return this.weightedList[--T].index}}class s extends Phaser.Scene{constructor(){super("PlayGame")}create(){this.createSpriteSheet()}createBorders(e,t){var E=r.TILES_MAPPING.LIGHT_GRASS_LAYER,T=r.LEVEL_HEIGHT_TILES-1,L=r.LEVEL_WIDTH_TILES-1;e.putTileAt(E.TOP_LEFT_TILE,0,0,t),e.putTileAt(E.TOP_RIGHT_TILE,L,0,t),e.putTileAt(E.BOTTOM_LEFT_TILE,0,T,t),e.putTileAt(E.BOTTOM_RIGHT_TILE,L,T,t),t.fill(E.TOP_TILE,1,0,r.LEVEL_WIDTH_TILES-2,1),t.fill(E.RIGHT_TILE,r.LEVEL_WIDTH_TILES-2,1,r.LEVEL_WIDTH_TILES-1,r.LEVEL_HEIGHT_TILES-2),t.fill(E.BOTTOM_TILE,1,r.LEVEL_HEIGHT_TILES-2,r.LEVEL_WIDTH_TILES-2,r.LEVEL_HEIGHT_TILES-1),t.fill(E.LEFT_TILE,0,1,1,r.LEVEL_HEIGHT_TILES-2)}createSpriteSheet(){const e=r.TILES_MAPPING.LIGHT_GRASS_LAYER,t=r.LEVEL_HEIGHT_TILES-1,E=r.LEVEL_WIDTH_TILES-1,T=new n(e.MIDDLE_TILE);for(let I=0;I<=E;I++)for(let i=0;i<=t;i++){const _=this.getTilePosition(I,i);var L=0;L=0===I&&0===i?e.TOP_LEFT_TILE:0===I&&i===t?e.TOP_RIGHT_TILE:0===I?e.TOP_TILE:I===E&&0===i?e.BOTTOM_LEFT_TILE:I===E&&i===t?e.BOTTOM_RIGHT_TILE:I===E?e.BOTTOM_TILE:0===i?e.LEFT_TILE:i===t?e.RIGHT_TILE:T.getNext(),this.add.sprite(_.x,_.y,r.SPRITESHEET.NAME,L)}}createBlank(){var e=this.make.tilemap({tileWidth:r.TILE_WIDTH_PIXELS,tileHeight:r.TILE_HEIGHT_PIXELS,width:r.LEVEL_WIDTH_PIXELS,height:r.LEVEL_HEIGHT_PIXELS}),t=e.addTilesetImage("tileset",null,r.TILE_WIDTH_PIXELS,r.TILE_HEIGHT_PIXELS),E=e.createBlankDynamicLayer(r.TILES_MAPPING.LIGHT_GRASS_LAYER.NAME,t);createBorders(e,E),e.weightedRandomize(1,1,r.LEVEL_WIDTH_TILES-2,r.LEVEL_HEIGHT_TILES-2,r.TILES_MAPPING.LIGHT_GRASS_LAYER.MIDDLE_TILE,E)}createJSON(){var e=this.make.tilemap({key:"map"}),t=e.addTilesetImage("grass","tileset");e.createDynamicLayer("light",t),e.createDynamicLayer("normal",t)}createCSV(){var e=this.make.tilemap({key:"light",tileWidth:r.TILE_WIDTH_PIXELS,tileHeight:r.TILE_HEIGHT_PIXELS}),t=this.make.tilemap({key:"normal",tileWidth:r.TILE_WIDTH_PIXELS,tileHeight:r.TILE_HEIGHT_PIXELS}),E=e.addTilesetImage("tileset",null,r.TILE_WIDTH_PIXELS,r.TILE_HEIGHT_PIXELS),T=t.addTilesetImage("tileset",null,r.TILE_WIDTH_PIXELS,r.TILE_HEIGHT_PIXELS);e.createDynamicLayer(0,E,0,0),t.createDynamicLayer(0,T,0,0)}getTilePosition(e,t){const E=r.TILE_WIDTH_PIXELS*(t+.5),T=r.TILE_HEIGHT_PIXELS*(e+.5);return new Phaser.Geom.Point(E,T)}}window.onload=function(){var e={type:Phaser.AUTO,width:r.LEVEL_WIDTH_PIXELS,height:r.LEVEL_HEIGHT_PIXELS,backgroundColor:"rgb(255, 255, 255)",pixelArt:!0,parent:"09ji2d0ijw",scene:[a,s]};_=new Phaser.Game(e),window.focus(),window.addEventListener("resize",()=>{var e=document.querySelector("canvas"),t=window.innerWidth,E=window.innerHeight,T=t/E,L=_.config.width/_.config.height;T<L?(e.style.width=t+"px",e.style.height=t/L+"px"):(e.style.width=E*L+"px",e.style.height=E+"px")})}}]);