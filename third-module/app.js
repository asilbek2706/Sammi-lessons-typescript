"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Provider;
(function (Provider) {
    Provider[Provider["payme"] = 1] = "payme";
    Provider[Provider["uzum"] = 2] = "uzum";
    Provider[Provider["click"] = 3] = "click";
})(Provider || (Provider = {}));
var Status;
(function (Status) {
    Status["Pending"] = "Pending";
    Status["Approved"] = "Approved";
    Status["Rejected"] = "Rejected";
})(Status || (Status = {}));
class Payment {
    id;
    status;
    createdAt;
    updatedAt;
    providers;
    constructor(id) {
        this.id = id;
        this.status = Status.Pending;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.providers = [];
    }
    getLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    rejectPayment() {
        if (this.status === Status.Approved) {
            throw new Error(`Payment is already approved`);
        }
        this.status = Status.Rejected;
        this.updatedAt = new Date();
    }
    getProviders(providerOrProviders) {
        if (typeof providerOrProviders === 'string') {
            this.providers.push(providerOrProviders);
        }
        else {
            this.providers = this.providers.concat(providerOrProviders);
        }
    }
}
const payme = new Payment(Provider.payme);
payme.getProviders('Payme');
console.log(payme.providers);
payme.getProviders(['Payme', 'Uzum']);
console.log(payme.providers);
//# sourceMappingURL=app.js.map