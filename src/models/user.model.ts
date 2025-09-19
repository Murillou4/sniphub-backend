import { prop, type Ref } from "@typegoose/typegoose";
import { Auth } from "./auth.model";

export class User {
  @prop({ required: true })
  _id!: string;

  get id() {
    return this._id.toString();
  }

  // Informações básicas
  @prop({ required: true })
  name!: string;

  @prop({ required: true, unique: true })
  email!: string;

  @prop()
  username?: string;

  @prop()
  bio?: string;

  @prop()
  avatarUrl?: string;

  // Contatos
  @prop()
  phone?: string;

  @prop()
  website?: string;

  // Preferências do usuário
  @prop({ default: "light" })
  theme!: "light" | "dark";

  @prop({ default: "en" })
  language!: string;

  // Relacionamento com autenticações
  @prop({ ref: () => Auth, type: () => [String] })
  auths!: Ref<Auth>[];

  // Auditoria
  @prop({ required: true })
  createdAt!: Date;

  @prop({ required: true })
  updatedAt!: Date;

  // Estatísticas e histórico
  @prop({ default: 0 })
  snippetCount!: number;

  @prop({ type: () => [String] })
  favoriteSnippetIds?: string[];

  constructor(props: Partial<User> & { name: string; email: string }) {
    Object.assign(this, props);
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
    this.snippetCount = props.snippetCount ?? 0;
    this.theme = props.theme ?? "light";
    this.language = props.language ?? "en";
    this.auths = props.auths ?? [];
  }
}
