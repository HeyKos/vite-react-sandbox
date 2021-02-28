import { ApiMethod as ApiMethodEnum } from "enums";
import { ApiMethod, KeyValue } from "types";
import ObjectUtils from "./ObjectUtils";

export class ApiService {
    // -----------------------------------------------------------------------------------------
    // #region Private Members
    // -----------------------------------------------------------------------------------------

    private _headers: string[][] = [];
    private _method: ApiMethod = ApiMethodEnum.POST;

    // #endregion Private Members

    // -----------------------------------------------------------------------------------------
    // #region Constructor
    // -----------------------------------------------------------------------------------------

    constructor(private _authToken: string) {}

    // #endregion Constructor

    // -----------------------------------------------------------------------------------------
    // #region Properties
    // -----------------------------------------------------------------------------------------

    get authToken(): string {
        return this._authToken;
    }

    set authToken(newAuthToken: string) {
        this._authToken = newAuthToken;
    }

    get headers(): string[][] {
        return this._headers;
    }

    set method(newMethod: ApiMethod) {
        this._method = newMethod;
    }

    // #endregion Properties

    // -----------------------------------------------------------------------------------------
    // #region Public Functions
    // -----------------------------------------------------------------------------------------

    public request<T>(body: T): RequestInit {
        return {
            headers: this._headers,
            method: this._method,
            body: JSON.stringify(body),
        };
    }

    public resetHeaders(): void {
        this._headers = [];
    }

    public setHeaders(headers: KeyValue<string, string>[]): ApiService {
        for (const i in headers) {
            const header = headers[i];
            if (!this._isKeyValue(header)) {
                continue;
            }
            this._headers.push([header.key, header.value]);
        }
        return this;
    }

    public setMethod(newMethod: ApiMethod): ApiService {
        this._method = newMethod;
        return this;
    }

    // #endregion Public Functions

    // -----------------------------------------------------------------------------------------
    // #region Private Functions
    // -----------------------------------------------------------------------------------------

    private _isKeyValue(keyValue: KeyValue<string, string>): boolean {
        return (
            ObjectUtils.hasProperty(keyValue, "key") &&
            ObjectUtils.hasProperty(keyValue, "value")
        );
    }

    // #endregion Private Functions
}

export default ApiService;
