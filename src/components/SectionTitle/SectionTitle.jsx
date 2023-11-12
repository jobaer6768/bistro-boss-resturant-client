

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-10">
            <p className="text-[#D99904] mb-4">---{subHeading}---</p>
            <p className="border-y-4 border-[#E8E8E8] border-opacity-30 py-4 text-4xl">{heading}</p>
        </div>
    );
};

export default SectionTitle;