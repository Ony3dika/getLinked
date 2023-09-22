import man from "../../assets/man.svg";
import woman from "../../assets/woman.svg";
import loader from "../../assets/loading.svg";
import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [category, setCategory] = useState("1");
  const [group, setGroup] = useState("1");
  const [policy, setPolicy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let baseUrl = "https://backend.getlinked.ai";

  const submitForm = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      phone_number: phone,
      team_name: name,
      group_size: group,
      project_topic: project,
      category: category,
      privacy_poclicy_accepted: policy,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    setIsLoading(true);

    fetch(`${baseUrl}/hackathon/registration`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setIsLoading(false);
        setTimeout(() => {
          props.pop();
        }, 2000);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <div className='lg:basis-[60%] basis-full lg:bg-[#1c162f] lg:shadow-xl rounded lg:p-16'>
      <p className='text-xl lg:block hidden text-alt:text-start font-semibold head text-alt'>
        Register
      </p>

      <div className='text-base body flex items-baseline mt-5'>
        <p>Be part of this movement!</p>
        <div className=' border-b-2 flex w-1/5 justify-center ml-2 items-baseline border-alt border-dashed'>
          <img src={woman} className='h-6' alt='woman walking' />
          <img src={man} className='h-8' alt='man walking' />
        </div>
      </div>

      <p className='text-2xl lg:text-start text-center lg:mt-5 mt-3'>
        CREATE YOUR ACCOUNT
      </p>

      <form onSubmit={submitForm} action=''>
        <section className='flex justify-between body lg:flex-row flex-col '>
          <div className='mt-5 basis-[48%]'>
            <p>Team&apos;s Name</p>
            <input
              type='text'
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter the name of your group'
              className='body mt-2 placeholder:text-[#5a5668] h-12 w-full text-white outline-none px-6 bg-transparent rounded border-2 border-white/70'
            />
          </div>

          <div className='mt-5 basis-[48%]'>
            <p>Phone</p>
            <input
              type='number'
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Enter your phone number'
              className='body mt-2 placeholder:text-[#5a5668] h-12 w-full text-white outline-none px-6 bg-transparent rounded border-2 border-white/70'
            />
          </div>
        </section>

        {/* Mail */}
        <section className='flex justify-between body lg:flex-row flex-col '>
          <div className='mt-5 basis-[48%]'>
            <p>Email</p>
            <input
              type='email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email address'
              className='body mt-2 placeholder:text-[#5a5668] h-12 w-full text-white outline-none px-6 bg-transparent rounded border-2 border-white/70'
            />
          </div>

          <div className='mt-5 basis-[48%]'>
            <p>Project Topic</p>
            <input
              type='text'
              value={project}
              required
              onChange={(e) => setProject(e.target.value)}
              placeholder='What is your group project topic'
              className='body mt-2 placeholder:text-[#5a5668] h-12 w-full text-white outline-none px-6 bg-transparent rounded border-2 border-white/70'
            />
          </div>
        </section>

        {/* Category */}
        <section className='flex justify-between body flex-row '>
          <div className='mt-5 lg:basis-[48%] basis-[64%]'>
            <p>Category</p>
            <select
              type='email'
              value={category}
              required
              onChange={(e) => setCategory(e.target.value)}
              className='body mt-2 placeholder:text-[#5a5668] h-12 w-full text-white outline-none px-6 bg-transparent rounded border-2 border-white/70'
            >
              <option defaultValue className='bg-main hover:bg-main' value='1'>
                Mobile
              </option>
              <option className='bg-main hover:bg-main' value='2'>
                Web
              </option>
              <option className='bg-main hover:bg-main' value='3'>
                Backend
              </option>
            </select>
          </div>

          <div className='mt-5 lg:basis-[48%] basis-[30%]'>
            <p>Groupsize</p>
            <select
              value={group}
              required
              onChange={(e) => setGroup(e.target.value)}
              className='body mt-2 placeholder:text-[#5a5668] h-12 w-full text-white outline-none px-6 bg-transparent rounded border-2 border-white/70'
            >
              <option defaultValue className='bg-main hover:bg-main' value='1'>
                1
              </option>
              <option className='bg-main hover:bg-main' value='2'>
                2
              </option>
              <option className='bg-main hover:bg-main' value='3'>
                3
              </option>
              <option className='bg-main hover:bg-main' value='4'>
                4
              </option>
              <option className='bg-main hover:bg-main' value='5'>
                5
              </option>
              <option className='bg-main hover:bg-main' value='6'>
                6
              </option>
              <option className='bg-main hover:bg-main' value='7'>
                7
              </option>
              <option className='bg-main hover:bg-main' value='8'>
                8
              </option>
              <option className='bg-main hover:bg-main' value='9'>
                9
              </option>
              <option className='bg-main hover:bg-main' value='10'>
                10
              </option>
            </select>
          </div>
        </section>

        <p className='mt-5 italic text-[#ff26b9] body lg:text-sm text-xs'>
          Please review your registration details before sending
        </p>

        <div className='flex items-center mt-3'>
          <input
            type='checkbox'
            value={policy}
            onChange={() => setPolicy(!policy)}
            className='bg-transparent accent-[#2DE100] outline-none'
            name=''
            id=''
          />

          <p className='ml-3 body lg:text-sm text-xs'>
            I agreed with the event terms and conditions and privacy policy
          </p>
        </div>

        <div className={`justify-center mt-5 ${isLoading ? "flex" : "hidden"}`}>
          <img src={loader} className='lg:h-20 h-12' alt='loading icon' />
        </div>

        <div className='flex justify-center mb-10'>
          <input
            type='submit'
            className='text-base body lg:w-full bg-gradient-to-r lg:px-10 px-8 py-4 mt-5 from-[#903AFF] to-[#FE34B9] rounded'
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
