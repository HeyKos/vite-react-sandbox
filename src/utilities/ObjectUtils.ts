// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

const hasProperty = (object: unknown, propertyName: string): boolean =>
    Object.prototype.hasOwnProperty.call(object, propertyName);

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const ObjectUtils = {
    hasProperty,
};

export default ObjectUtils;

// #endregion Exports
