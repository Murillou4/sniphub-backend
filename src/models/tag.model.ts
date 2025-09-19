import { prop, type Ref } from "@typegoose/typegoose";
import { User } from "./user.model"; // classe User

export class Tag {
  @prop({ required: true })
  _id!: string;

  get id() {
    return this._id.toString();
  }

  @prop({ required: true })
  name!: string;

  @prop({ ref: () => User, required: true })
  userId!: Ref<User>;

  @prop({ default: "#CCCCCC" }) // cor padrão para UI
  color?: string;

  @prop({ default: () => new Date() })
  createdAt!: Date;

  @prop({ default: () => new Date() })
  updatedAt!: Date;

  constructor(props: Partial<Tag>) {
    Object.assign(this, props);
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
    this.color = props.color ?? "#CCCCCC";
  }
}
