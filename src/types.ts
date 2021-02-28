import { ApiResult as ApiResultEnum, ApiMethod as ApiMethodEnum } from "enums";

// -----------------------------------------------------------------------------------------
// #region API Types
// -----------------------------------------------------------------------------------------

export type ApiError = {
    ErrorCode: string;
    Description: string;
};

export type ApiHeader = {
    key: string;
    value: string;
};

export type ApiMethod = ApiMethodEnum.POST | ApiMethodEnum.GET;

export type ApiResponse<T> = {
    Result: ApiResult;
    Response: T | ApiError;
};

export type ApiResult = ApiResultEnum.SUCCESS | ApiResultEnum.FAILURE;

// #endregion API Types

export type KeyValue<T, U> = {
    key: T;
    value: U;
};
