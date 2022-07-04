const Pets = ({pet}) => {

    const {name, alfa, email, date, symptoms} = pet

    return (
        <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase text-gray-700 mb-3"> Name: {""}
                <span className="font-normal normal-case">
                    {name}
                </span>
            </p>
            <p className="font-bold uppercase text-gray-700 mb-3"> Alfa's name: {""}
                <span className="font-normal normal-case">
                    {alfa}
                </span>
            </p>
            <p className="font-bold uppercase text-gray-700 mb-3"> Email: {""}
                <span className="font-normal normal-case">
                    {email}
                </span>
            </p>
            <p className="font-bold uppercase text-gray-700 mb-3"> Date start: {""}
                <span className="font-normal normal-case">
                    {date}
                </span>
            </p>
            <p className="font-bold uppercase text-gray-700 mb-3"> Symptoms: {""}
                <span className="font-normal normal-case">
                    {symptoms}
                </span>
            </p>
        </div>
    )
}

export default Pets