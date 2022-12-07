export type Form = {
  id: number;
  title: string;
  fields: FormFields[];
};

export type FormFields = {
  id: number;
  type: string;
  title: string;
  slug: string;
  placeholder?: string;
  required?: boolean;
  options?: Options[];
};

export type Options = {
  id: number;
  value: string | number | undefined;
  slug?: string;
};
