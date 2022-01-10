const Product = (props) => {
    return <>
        <div key={props.product.id} className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                    src={props.product.imageSrc}
                    alt={props.product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
            </div>
            <div>
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
            </div>
            <div className="mt-4 ">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={props.product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {props.product.name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{props.product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{props.product.price}</p>
            </div>
        </div>
    </>
}
export default Product;

