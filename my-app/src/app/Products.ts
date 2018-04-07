export class Products {
    items: any;
    product: string;
    quantity: number;

    constructor() {
        this.items = [{
            product: 'Tea',
            quantity: 0
        }, {
            product: 'Coffee',
            quantity: 0
        }
        ];
    }
}
