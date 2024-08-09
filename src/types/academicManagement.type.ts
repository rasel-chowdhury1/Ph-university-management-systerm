export type TAcademicSemister = {
    _id: string;
    name: string;
    year: string;
    code: string;
    startMonth: string;
    endMonth: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  export type TQueryParams = {
    field: string,
    value: boolean | React.Key;
  }
  