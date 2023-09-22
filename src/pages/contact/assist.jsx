import loader from "../../assets/loading.svg";
import { useState } from "react";

function Assist() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let baseUrl = "https://backend.getlinked.ai";

  const submitForm = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      email: email,
      first_name: firstName,
      message: message,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    setIsLoading(true);

    fetch(`${baseUrl}/hackathon/contact-form`, requestOptions)
      .then((response) => {
        return response.text();
      })
      .then((result) => {
        console.log(result);
        setSuccess("Message Sent");
        setErr("");
        setIsLoading(false);
        setTimeout(() => {
          setErr("");
          setSuccess("");
          setFirstName("")
          setEmail("")
          setMessage("")
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        setSuccess("");
        setErr("Error, try again");
        setIsLoading(false);
        setTimeout(() => {
          setErr("");
          setSuccess("");
        }, 3000);
      });
  };
  return (
    <div className='lg:basis-1/2 basis-full lg:mt-0 mt-10 lg:bg-[#1c162f] lg:shadow-xl rounded lg:p-12'>
      <p className='text-xl text-alt:text-start font-semibold head text-alt'>
        Questions or need assistance? <br />
        Let us know about it!
      </p>

      <p className='text-base body mt-5 lg:hidden'>
        Email us below to any question related to our event
      </p>

      <form onSubmit={submitForm}>
        <input
          type='text'
          placeholder='First Name'
          value={firstName}
          required
          onChange={(e) => setFirstName(e.target.value)}
          className='mt-8 body placeholder:text-white text-white outline-none w-full py-3 px-8 bg-transparent rounded border-2 border-white/70'
        />
        <input
          type='email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Mail'
          className='mt-10 body placeholder:text-white text-white outline-none w-full py-3 px-8 bg-transparent rounded border-2 border-white/70'
        />

        <textarea
          name='message'
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Message'
          className='mt-10 body placeholder:text-white resize-none outline-none h-40 text-white w-full py-3 px-8 bg-transparent rounded border-2 border-white/70'
        ></textarea>

        <p className='text-center body mt-3 text-[#2DE100] text-lg font-extrabold '>
          {success}
        </p>
        <p className='text-center body text-lg font-extrabold mt-3 text-red-600'>
          {err}
        </p>

        <div className={`justify-center ${isLoading ? "flex" : "hidden"}`}>
          <img src={loader} className='lg:h-20 h-12' alt='loading icon' />
        </div>

        <div className='flex justify-center'>
          <input
            type='submit'
            className='text-base body bg-gradient-to-r lg:px-10 lg:py-4 px-8 py-2.5 mt-5 lg:mt-6 from-[#903AFF] to-[#FE34B9] rounded'
          />
        </div>
      </form>
    </div>
  );
}

export default Assist;
