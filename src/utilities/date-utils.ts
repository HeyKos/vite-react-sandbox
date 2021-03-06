// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

const fromSeconds = (secs: number): Date => {
    const t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const DateUtils = {
    fromSeconds,
};

export default DateUtils;

// #endregion Exports
