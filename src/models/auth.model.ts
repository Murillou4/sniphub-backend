import { prop, } from "@typegoose/typegoose";
import { AuthProvider } from "../enums/auth-provider.enum";

export class Auth {
  @prop({ required: true })
  _id!: string;

  get id() {
    return this._id.toString(); // acessa como se fosse 'id'
  }

  @prop({ required: true })
  userId!: string;

  @prop({ required: true, enum: AuthProvider })
  provider!: AuthProvider;

  @prop({ required: true })
  providerUserId!: string;

  @prop()
  passwordHash?: string;

  @prop()
  passwordSalt?: string;

  @prop()
  passwordUpdatedAt?: Date;

  @prop()
  refreshTokenHash?: string;

  @prop()
  refreshTokenExpiresAt?: Date;

  @prop()
  accessToken?: string;

  @prop()
  accessTokenExpiresAt?: Date;

  @prop()
  refreshTokenOAuth?: string;

  @prop()
  idToken?: string;

  @prop({ required: true })
  mfaEnabled: boolean;

  @prop()
  mfaSecret?: string;

  @prop({ type: () => [String] })
  recoveryCodes?: string[];

  @prop()
  lastLoginAt?: Date;

  @prop()
  lastLoginIp?: string;

  @prop({ required: true })
  loginCount: number;

  @prop({ required: true })
  createdAt: Date;

  @prop({ required: true })
  updatedAt: Date;

  constructor(
    props: Omit<
      Auth,
      "createdAt" | "updatedAt" | "loginCount" | "mfaEnabled"
    > & {
      createdAt?: Date;
      updatedAt?: Date;
      loginCount?: number;
      mfaEnabled?: boolean;
    }
  ) {
    Object.assign(this, props);
    this.mfaEnabled = props.mfaEnabled ?? false;
    this.loginCount = props.loginCount ?? 0;
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }
}
