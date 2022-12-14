// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Vec3 } from '../configs/vec3.js';


export class MapDataRow {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):MapDataRow {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsMapDataRow(bb:flatbuffers.ByteBuffer, obj?:MapDataRow):MapDataRow {
  return (obj || new MapDataRow()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsMapDataRow(bb:flatbuffers.ByteBuffer, obj?:MapDataRow):MapDataRow {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new MapDataRow()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
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

hero1(obj?:Vec3):Vec3|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new Vec3()).__init(this.bb_pos + offset, this.bb!) : null;
}

fire1(obj?:Vec3):Vec3|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new Vec3()).__init(this.bb_pos + offset, this.bb!) : null;
}

light1(obj?:Vec3):Vec3|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new Vec3()).__init(this.bb_pos + offset, this.bb!) : null;
}

wind1(obj?:Vec3):Vec3|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? (obj || new Vec3()).__init(this.bb_pos + offset, this.bb!) : null;
}

water1(obj?:Vec3):Vec3|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? (obj || new Vec3()).__init(this.bb_pos + offset, this.bb!) : null;
}

hero2(obj?:Vec3):Vec3|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new Vec3()).__init(this.bb_pos + offset, this.bb!) : null;
}

fire2(obj?:Vec3):Vec3|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? (obj || new Vec3()).__init(this.bb_pos + offset, this.bb!) : null;
}

light2(obj?:Vec3):Vec3|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? (obj || new Vec3()).__init(this.bb_pos + offset, this.bb!) : null;
}

wind2(obj?:Vec3):Vec3|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? (obj || new Vec3()).__init(this.bb_pos + offset, this.bb!) : null;
}

water2(obj?:Vec3):Vec3|null {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? (obj || new Vec3()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startMapDataRow(builder:flatbuffers.Builder) {
  builder.startObject(12);
}

static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, nameOffset, 0);
}

static addHero1(builder:flatbuffers.Builder, hero1Offset:flatbuffers.Offset) {
  builder.addFieldStruct(2, hero1Offset, 0);
}

static addFire1(builder:flatbuffers.Builder, fire1Offset:flatbuffers.Offset) {
  builder.addFieldStruct(3, fire1Offset, 0);
}

static addLight1(builder:flatbuffers.Builder, light1Offset:flatbuffers.Offset) {
  builder.addFieldStruct(4, light1Offset, 0);
}

static addWind1(builder:flatbuffers.Builder, wind1Offset:flatbuffers.Offset) {
  builder.addFieldStruct(5, wind1Offset, 0);
}

static addWater1(builder:flatbuffers.Builder, water1Offset:flatbuffers.Offset) {
  builder.addFieldStruct(6, water1Offset, 0);
}

static addHero2(builder:flatbuffers.Builder, hero2Offset:flatbuffers.Offset) {
  builder.addFieldStruct(7, hero2Offset, 0);
}

static addFire2(builder:flatbuffers.Builder, fire2Offset:flatbuffers.Offset) {
  builder.addFieldStruct(8, fire2Offset, 0);
}

static addLight2(builder:flatbuffers.Builder, light2Offset:flatbuffers.Offset) {
  builder.addFieldStruct(9, light2Offset, 0);
}

static addWind2(builder:flatbuffers.Builder, wind2Offset:flatbuffers.Offset) {
  builder.addFieldStruct(10, wind2Offset, 0);
}

static addWater2(builder:flatbuffers.Builder, water2Offset:flatbuffers.Offset) {
  builder.addFieldStruct(11, water2Offset, 0);
}

static endMapDataRow(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}
