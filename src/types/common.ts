export type Id =
    string
  | number;

export type GenericAction = {
  type: string;
  payload: any;
};

export type ApiError =
  | {
      data: any;
      statusCode: number;
      message: string;
    }
  | {};
