import { ApiResult as ApiResultEnum, ApiMethod as ApiMethodEnum } from "enums";
import React from "react";
import firebase from "firebase";

// -----------------------------------------------------------------------------------------
// #region Authentication
// -----------------------------------------------------------------------------------------

export type AuthenticationContextProperties = {
    user: firebase.User | null;
    authenticated: boolean;
    setUser: React.Dispatch<React.SetStateAction<firebase.User | null>>;
    loadingAuthState: boolean;
};

// #endregion Authentication

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
