
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mx-auto md:w-4/12 my-6">
            <p className="text-yellow-500">---{subHeading}---</p>
            <h3 className="text-4xl border-y-4 mt-3 py-4 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;