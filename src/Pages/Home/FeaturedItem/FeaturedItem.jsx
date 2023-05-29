import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg';
import './FeaturedItem.css'

const FeaturedItem = () => {
    return (
        <div className="feature-item mb-12 bg-fixed text-white ">
            <div className="bg-black bg-opacity-60 pt-8 pb-12">
                <SectionTitle
                    heading="Featured Item"
                    subHeading="check it out"
                >
                </SectionTitle>

                <div className="md:flex justify-center items-center px-36 pb-12 pt-10">
                    <div>
                        <img src={featured} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>March 20, 2023</p>
                        <p className="uppercase">where can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet inventore ut adipisci quos. Id, suscipit iste! Perspiciatis quibusdam nam voluptatem illo laborum reprehenderit consequuntur quasi! Id earum quasi quam.</p>
                        <button className="btn btn-outline border-0 border-b-2 border-white text-white mt-5">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;