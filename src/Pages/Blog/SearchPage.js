import Banner from "../../Components/Banner/Banner";
import CategoriesBlog from "./CategoriesBlog"
import MoveToTop from "../../Components/MoveToTop/MoveToTop";
const SearchPage = () => {
    return (
        <>
            <MoveToTop />
            <Banner name={"Blogs"}></Banner>
            <CategoriesBlog />
        </>
    )
}
export default SearchPage