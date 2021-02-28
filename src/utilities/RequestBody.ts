export class RequestBody<T> {
    // -----------------------------------------------------------------------------------------
    // #region Constructor
    // -----------------------------------------------------------------------------------------

    constructor(private _requestBody: T) {}

    // #endregion Constructor

    // -----------------------------------------------------------------------------------------
    // #region Properties
    // -----------------------------------------------------------------------------------------

    get requestBody(): T {
        return this._requestBody;
    }

    set requestBody(newRequestBody: T) {
        this._requestBody = newRequestBody;
    }

    // #endregion Properties
}

export default RequestBody;
