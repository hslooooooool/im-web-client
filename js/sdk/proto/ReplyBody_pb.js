// source: ReplyBody.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.vip.qsos.im.lib.model.proto.Model', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vip.qsos.im.lib.model.proto.Model = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vip.qsos.im.lib.model.proto.Model, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vip.qsos.im.lib.model.proto.Model.displayName = 'proto.vip.qsos.im.lib.model.proto.Model';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.toObject = function(opt_includeInstance) {
  return proto.vip.qsos.im.lib.model.proto.Model.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vip.qsos.im.lib.model.proto.Model} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vip.qsos.im.lib.model.proto.Model.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    code: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    dataMap: (f = msg.getDataMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vip.qsos.im.lib.model.proto.Model}
 */
proto.vip.qsos.im.lib.model.proto.Model.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vip.qsos.im.lib.model.proto.Model;
  return proto.vip.qsos.im.lib.model.proto.Model.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vip.qsos.im.lib.model.proto.Model} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vip.qsos.im.lib.model.proto.Model}
 */
proto.vip.qsos.im.lib.model.proto.Model.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 5:
      var value = msg.getDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vip.qsos.im.lib.model.proto.Model.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vip.qsos.im.lib.model.proto.Model} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vip.qsos.im.lib.model.proto.Model.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vip.qsos.im.lib.model.proto.Model} returns this
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vip.qsos.im.lib.model.proto.Model} returns this
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vip.qsos.im.lib.model.proto.Model} returns this
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vip.qsos.im.lib.model.proto.Model} returns this
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * map<string, string> data = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.getDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.vip.qsos.im.lib.model.proto.Model} returns this
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.clearDataMap = function() {
  this.getDataMap().clear();
  return this;};


goog.object.extend(exports, proto.vip.qsos.im.lib.model.proto);
