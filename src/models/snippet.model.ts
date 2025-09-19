import { prop, type Ref } from "@typegoose/typegoose";
import { SnippetLanguage } from "../enums/snippet-language.enum";
import { Tag } from "./tag.model";
import { User } from "./user.model";

export class Snippet {
  @prop({ required: true })
  _id!: string;

  get id() {
    return this._id.toString();
  }

  @prop({ required: true })
  title!: string;

  @prop({ required: true })
  content!: string;

  @prop({ required: true, enum: SnippetLanguage })
  language!: SnippetLanguage;

  @prop({ ref: () => User, required: true })
  userId!: Ref<User>;

  @prop({ ref: () => Tag, type: () => [String], default: [] })
  tags!: Ref<Tag>[];

  @prop()
  description?: string;

  @prop({ default: false })
  isFavorite?: boolean;

  @prop({ default: 0 })
  viewsCount?: number;

  @prop()
  forkedFrom?: string;

  @prop({ default: () => new Date() })
  createdAt!: Date;

  @prop({ default: () => new Date() })
  updatedAt!: Date;

  @prop()
  deletedAt?: Date;

  constructor(props: Partial<Snippet>) {
    Object.assign(this, props);
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
    this.viewsCount = props.viewsCount ?? 0;
    this.isFavorite = props.isFavorite ?? false;
    this.tags = props.tags ?? [];
  }
}
