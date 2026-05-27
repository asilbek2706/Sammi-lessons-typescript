enum Provider {
    payme = 1,
    uzum = 2,
    click = 3,
}

enum Status {
    Pending = 'Pending',
    Approved = 'Approved',
    Rejected = 'Rejected',
}

class Payment {
    id: number
    status: Status
    createdAt: Date
    updatedAt: Date
    providers: string[]

    constructor(id: Provider) {
        this.id = id
        this.status = Status.Pending
        this.createdAt = new Date()
        this.updatedAt = new Date()
        this.providers = []
    }

    getLifeTime() {
        return new Date().getTime() - this.createdAt.getTime()
    }

    rejectPayment(): void {
        if (this.status === Status.Approved) {
            throw new Error(`Payment is already approved`)
        }
        this.status = Status.Rejected
        this.updatedAt = new Date()
    }
    getProviders(provider: string): void
    getProviders(providers: string[]): void
    getProviders(providerOrProviders: string | string[]): void {
        if (typeof providerOrProviders === 'string') {
            this.providers.push(providerOrProviders)
        } else {
            this.providers = this.providers.concat(providerOrProviders)
        }
    }
}

const payme = new Payment(Provider.payme)
payme.getProviders('Payme')
console.log(payme.providers)
payme.getProviders(['Payme', 'Uzum'])
console.log(payme.providers)
