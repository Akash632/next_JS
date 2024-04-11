import { useRouter } from "next/router";

function Review(){
    const router = useRouter();
    const { review_id, product_id} = router.query;
    console.log(review_id, product_id)
    console.log(router.query.product_id)
    return (
        <div>
            <h1>Products details {product_id} Review details {review_id}</h1>
        </div>
    )
}

export default Review;