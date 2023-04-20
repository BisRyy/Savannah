import { useRouter } from "next/router"

export default function Error(){
    
    const router = useRouter()
    router.push('/')
    return (
        <>
        </>
    )
}