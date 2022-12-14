// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Vec3 } from '../configs/vec3.js';


export class MapXDataRow {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):MapXDataRow {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsMapXDataRow(bb:flatbuffers.ByteBuffer, obj?:MapXDataRow):MapXDataRow {
  return (obj || new MapXDataRow()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsMapXDataRow(bb:flatbuffers.ByteBuffer, obj?:MapXDataRow):MapXDataRow {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new MapXDataRow()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

camp1(index: number, obj?:Vec3):Vec3|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new Vec3()).__init(this.bb!.__vector(this.bb_pos + offset) + index * 12, this.bb!) : null;
}

camp1Length():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

camp2(index: number, obj?:Vec3):Vec3|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new Vec3()).__init(this.bb!.__vector(this.bb_pos + offset) + index * 12, this.bb!) : null;
}

camp2Length():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startMapXDataRow(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, nameOffset, 0);
}

static addCamp1(builder:flatbuffers.Builder, camp1Offset:flatbuffers.Offset) {
  builder.addFieldOffset(2, camp1Offset, 0);
}

static startCamp1Vector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(12, numElems, 4);
}

static addCamp2(builder:flatbuffers.Builder, camp2Offset:flatbuffers.Offset) {
  builder.addFieldOffset(3, camp2Offset, 0);
}

static startCamp2Vector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(12, numElems, 4);
}

static endMapXDataRow(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createMapXDataRow(builder:flatbuffers.Builder, id:number, nameOffset:flatbuffers.Offset, camp1Offset:flatbuffers.Offset, camp2Offset:flatbuffers.Offset):flatbuffers.Offset {
  MapXDataRow.startMapXDataRow(builder);
  MapXDataRow.addId(builder, id);
  MapXDataRow.addName(builder, nameOffset);
  MapXDataRow.addCamp1(builder, camp1Offset);
  MapXDataRow.addCamp2(builder, camp2Offset);
  return MapXDataRow.endMapXDataRow(builder);
}
}
