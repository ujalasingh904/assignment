import { IoCheckmarkSharp } from "react-icons/io5";
import { useState } from "react";


const Notify = () => {

    const [formData, setFormData] = useState([]);
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
 

    const handlechange = (e) => {
        setEmail(e.target.value)
        setError(false)
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
        if (emailPattern.test(e.target.value)) {
            setValidEmail(true)
        } else {
            setValidEmail(false)
        }

    }

    console.log(loading)

    const handlesubmit = (e) => {
        e.preventDefault();
        if (error) return;
        setLoading(true);

        setTimeout(() => {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
            if (emailPattern.test(email)) {
                if (!formData.find(item => item === email)) {
                    setFormData([...formData, email]);
                    setEmail("");
                    setError(null);
                    setSuccess(true);
                } else {
                    setError("Email already exists");
                }
            } else {
                setError("Invalid email");
            }
            setLoading(false);
        }, 2000);

    }



    return (
        <div className="w-full flex flex-col items-center mt-2 sm:mt-4 px-4 md:px-0">
            <p className="text-center sm:text-lg text-sm ">
                Be the first to know! Share your email and we'll notify you when it's live
            </p>

            <div className="flex flex-col mt-4  space-y-2  sm:space-x-4 w-full max-w-[45rem]">
                <div className='flex flex-col sm:flex-row w-full space-y-2 sm:space-y-0 sm:space-x-4'>
                    <input
                        id='email'
                        type="email"
                        value={email}
                        onChange={handlechange}
                        placeholder="Enter your email"
                        className="border-2 border-gray-300 p-2 sm:p-3 rounded-lg focus:outline-none focus:border-purple-400 w-full sm:flex-1 z-10"
                    />

                    {!success && <button
                        disabled={!validEmail}
                        onClick={handlesubmit}
                        className={`${validEmail ? "" : "opacity-60 dark:opacity-40 cursor-not-allowed"} dark:bg-slate-900  font-semibold bg-black text-white px-6 p-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-all w-full sm:w-auto  flex  justify-center z-10`}
                    >
                        {loading ? <div className="loader   !text-white "></div> :
                            "Notify Me"}
                    </button>}

                    {success &&
                        <button
                            onClick={(e) => setSuccess(false)}
                        className={`${validEmail ? "" : "opacity-60 dark:opacity-40 cursor-not-allowed"}  dark:bg-slate-900  font-semibold bg-black text-white px-6 p-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-all w-full sm:w-auto flex  justify-center z-10`}>
                            <IoCheckmarkSharp fontSize={23} />
                        </button>
                    }

                </div>

                {error && <p className='text-red-600'>{error}</p>}

            </div>
        </div>

    )
}

export default Notify