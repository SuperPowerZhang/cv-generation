export type ContactType = {
  mobile?: string | undefined;
  mail?: string | undefined;
} | null;

export type BasicType = {
  gender?: string | undefined;
  name?: string | undefined;
  age?: string | undefined;
  expectation?: string | undefined;
  advantage?: string | undefined;
  specialization?: string | undefined;
} | null;

export type InfoType = {
  contact: ContactType;
  basic: BasicType;
};
