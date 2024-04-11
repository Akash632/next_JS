import { useRouter } from "next/router";

function Details(){
    const router = useRouter();
    console.log(router.query.product_id)
    return (
        <div>
            <h1>Product details {router.query.product_id}</h1>
        </div>
    )
}

export default Details;