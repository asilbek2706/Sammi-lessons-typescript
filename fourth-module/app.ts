//Partial
interface IProduct{
    id: number;
    name: string;
    price: number;
    excerpt?: string;
}

type ReadonlyProduct = Readonly<IProduct>;

const product: ReadonlyProduct = {
    name: 'Shoes',
    price: 200,
    id: 1,
    excerpt: 'This is a nice pair of shoes',
} // We cannot change our product

console.log(product);


/*
function createProduct(product: Required<IProduct>) {
    console.log(product)
}

createProduct(product);

function updateProduct(updatedProduct: Partial<IProduct>) {
    const updateProduct = { ...product, ...updatedProduct }
    console.log(updateProduct)
}

updateProduct({price: 300});
*/
