// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore
import { Jsonify } from "type-fest";

import { Identity as SdkIdentity } from "@bitwarden/sdk-internal";

import { EncString } from "../../../key-management/crypto/models/enc-string";
import Domain from "../../../platform/models/domain/domain-base";
import { SymmetricCryptoKey } from "../../../platform/models/domain/symmetric-crypto-key";
import { IdentityData } from "../data/identity.data";
import { IdentityView } from "../view/identity.view";

export class Identity extends Domain {
  title: EncString;
  firstName: EncString;
  middleName: EncString;
  lastName: EncString;
  address1: EncString;
  address2: EncString;
  address3: EncString;
  city: EncString;
  state: EncString;
  postalCode: EncString;
  country: EncString;
  company: EncString;
  email: EncString;
  phone: EncString;
  ssn: EncString;
  username: EncString;
  passportNumber: EncString;
  licenseNumber: EncString;

  constructor(obj?: IdentityData) {
    super();
    if (obj == null) {
      return;
    }

    this.buildDomainModel(
      this,
      obj,
      {
        title: null,
        firstName: null,
        middleName: null,
        lastName: null,
        address1: null,
        address2: null,
        address3: null,
        city: null,
        state: null,
        postalCode: null,
        country: null,
        company: null,
        email: null,
        phone: null,
        ssn: null,
        username: null,
        passportNumber: null,
        licenseNumber: null,
      },
      [],
    );
  }

  decrypt(
    orgId: string,
    context: string = "No Cipher Context",
    encKey?: SymmetricCryptoKey,
  ): Promise<IdentityView> {
    return this.decryptObj<Identity, IdentityView>(
      this,
      new IdentityView(),
      [
        "title",
        "firstName",
        "middleName",
        "lastName",
        "address1",
        "address2",
        "address3",
        "city",
        "state",
        "postalCode",
        "country",
        "company",
        "email",
        "phone",
        "ssn",
        "username",
        "passportNumber",
        "licenseNumber",
      ],
      orgId,
      encKey,
      "DomainType: Identity; " + context,
    );
  }

  toIdentityData(): IdentityData {
    const i = new IdentityData();
    this.buildDataModel(this, i, {
      title: null,
      firstName: null,
      middleName: null,
      lastName: null,
      address1: null,
      address2: null,
      address3: null,
      city: null,
      state: null,
      postalCode: null,
      country: null,
      company: null,
      email: null,
      phone: null,
      ssn: null,
      username: null,
      passportNumber: null,
      licenseNumber: null,
    });
    return i;
  }

  static fromJSON(obj: Jsonify<Identity>): Identity {
    if (obj == null) {
      return null;
    }

    const title = EncString.fromJSON(obj.title);
    const firstName = EncString.fromJSON(obj.firstName);
    const middleName = EncString.fromJSON(obj.middleName);
    const lastName = EncString.fromJSON(obj.lastName);
    const address1 = EncString.fromJSON(obj.address1);
    const address2 = EncString.fromJSON(obj.address2);
    const address3 = EncString.fromJSON(obj.address3);
    const city = EncString.fromJSON(obj.city);
    const state = EncString.fromJSON(obj.state);
    const postalCode = EncString.fromJSON(obj.postalCode);
    const country = EncString.fromJSON(obj.country);
    const company = EncString.fromJSON(obj.company);
    const email = EncString.fromJSON(obj.email);
    const phone = EncString.fromJSON(obj.phone);
    const ssn = EncString.fromJSON(obj.ssn);
    const username = EncString.fromJSON(obj.username);
    const passportNumber = EncString.fromJSON(obj.passportNumber);
    const licenseNumber = EncString.fromJSON(obj.licenseNumber);

    return Object.assign(new Identity(), obj, {
      title,
      firstName,
      middleName,
      lastName,
      address1,
      address2,
      address3,
      city,
      state,
      postalCode,
      country,
      company,
      email,
      phone,
      ssn,
      username,
      passportNumber,
      licenseNumber,
    });
  }

  /**
   * Maps Identity to SDK format.
   *
   * @returns {SdkIdentity} The SDK identity object.
   */
  toSdkIdentity(): SdkIdentity {
    return {
      title: this.title?.toJSON(),
      firstName: this.firstName?.toJSON(),
      middleName: this.middleName?.toJSON(),
      lastName: this.lastName?.toJSON(),
      address1: this.address1?.toJSON(),
      address2: this.address2?.toJSON(),
      address3: this.address3?.toJSON(),
      city: this.city?.toJSON(),
      state: this.state?.toJSON(),
      postalCode: this.postalCode?.toJSON(),
      country: this.country?.toJSON(),
      company: this.company?.toJSON(),
      email: this.email?.toJSON(),
      phone: this.phone?.toJSON(),
      ssn: this.ssn?.toJSON(),
      username: this.username?.toJSON(),
      passportNumber: this.passportNumber?.toJSON(),
      licenseNumber: this.licenseNumber?.toJSON(),
    };
  }
}
