export interface Form {
  id: number;
  title: string;
  error?: string;
  fields: FormFields[];
}

export interface FormFields {
  id: number;
  type: string;
  order?: number;
  title: string;
  slug: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  options?: Options[];
}

export interface Options {
  id: number;
  value: string | number | undefined;
  slug?: string;
}
