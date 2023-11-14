import { Parallax } from 'react-parallax';


const Cover = ({ img, title, body }) => {
    return (
        <Parallax
            blur={{ min: -75, max: 75 }}
            bgImage={img}
            bgImageAlt="the menu bg"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 text-xl font-semibold uppercase">{body}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;