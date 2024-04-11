import { useRouter } from "next/router";

function Docs(){
    const router = useRouter();
    const {params=[]} = router.query;
    console.log(params);

    if(params.length == 2){
        return (
            <div>
                <h1>Reading {params[0]} and concepts {params[1]}</h1>
            </div>
        )
    }else{
        return (
            <div>
                <h1>Reading {params[0]}</h1>
            </div>
        )
    }
}

export default Docs;