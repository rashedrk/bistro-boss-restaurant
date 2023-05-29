import { Parallax } from 'react-parallax';

const Cover = ({img, title, subTitle}) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[700px]">
                
                <div className="hero-content text-center text-neutral-content">
                    <div className=" bg-black bg-opacity-60 py-20 px-56">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;