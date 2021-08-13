export class User {
    constructor(
        private _email: string,
        private _token: string,
        private _localId: string,
        private _expirationDate: Date
    ) {}

    public get expirationDate() {
        return this._expirationDate;
    }

    public get token() {
        return this._token;
    }

    public get email() {
        return this._email;
    }

    public get localId() {
        return this._localId;
    }
}