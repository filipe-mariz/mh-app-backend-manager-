export const defaulTableSettings = {
    timestamps: true,
    underscored: true,
    paranoid: true,
    scopes: {
        defaultOptions: {
            where: {
                deleted_at: null,
            },
            paranoid: false,
            raw: true
        }
    }
};

export const primaryKey = {
    primaryKey: true,
    autoIncrement: true
}
