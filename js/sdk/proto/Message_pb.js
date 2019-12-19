// source: Message.proto
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
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    action: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sender: jspb.Message.getFieldWithDefault(msg, 4, ""),
    receiver: jspb.Message.getFieldWithDefault(msg, 5, ""),
    extra: jspb.Message.getFieldWithDefault(msg, 6, ""),
    title: jspb.Message.getFieldWithDefault(msg, 7, ""),
    format: jspb.Message.getFieldWithDefault(msg, 8, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiver(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtra(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormat(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
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
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReceiver();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getExtra();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFormat();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vip.qsos.im.lib.model.proto.Model} returns this
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string action = 2;
 * @return {string}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vip.qsos.im.lib.model.proto.Model} returns this
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vip.qsos.im.lib.model.proto.Model} returns this
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sender = 4;
 * @return {string}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vip.qsos.im.lib.model.proto.Model} returns this
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string receiver = 5;
 * @return {string}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.getReceiver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vip.qsos.im.lib.model.proto.Model} returns this
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.setReceiver = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string extra = 6;
 * @return {string}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.getExtra = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vip.qsos.im.lib.model.proto.Model} returns this
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.setExtra = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string title = 7;
 * @return {string}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vip.qsos.im.lib.model.proto.Model} returns this
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string format = 8;
 * @return {string}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vip.qsos.im.lib.model.proto.Model} returns this
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.setFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 timestamp = 9;
 * @return {number}
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.vip.qsos.im.lib.model.proto.Model} returns this
 */
proto.vip.qsos.im.lib.model.proto.Model.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


goog.object.extend(exports, proto.vip.qsos.im.lib.model.proto);