import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}-Electrician`;
    }, [title])
}
export default useTitle;