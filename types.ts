// -----------------------------------------------------------------------------------------
// #region API Types
// -----------------------------------------------------------------------------------------

export type ApiError = {
  ErrorCode: string,
  Description: string,
};

export type ApiHeader = {
  key: string;
  value: string;
};

export type ApiMethod = "POST" | "GET";

export type ApiResponse<T> = {
  Result: ApiResult,
  Response: T | ApiError,
};

export type ApiResult = "success" | "failure";

// #endregion API Types

export type KeyValue<T, U> = {
  key: T,
  value: U,
};
