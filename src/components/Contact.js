const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto grid grid-rows-6 grid-cols-3 gap-10">
      <h1 className="flex justify-center items-center font-bold text-xl col-span-3">
        Contact
      </h1>
      <div className="flex flex-col mr-[100px] items-center font-bold row-span-6">
        <p className="font-medium">Contact Details</p>
      </div>
      <div className="flex flex-col gap-10 row-span-6 col-span-2 items-center shadow-xl p-4 rounded-3xl">
        <p className="font-medium">Contact Form</p>

        <form className="flex flex-col gap-8">
          <div className="flex gap-3 justify-between">
            <label htmlFor="fullname">Name</label>
            <input
              className="border border-stone-500 rounded-lg focus:outline-none px-4 py-1"
              id="fullname"
              name="fullname"
              type="text"
            />
          </div>

          <div className="flex gap-3 justify-between">
            <label htmlFor="number">Contact Number</label>
            <input
              className="border border-stone-500 rounded-lg focus:outline-none px-4 py-1"
              id="number"
              name="number"
              type="text"
            />
          </div>

          <div className="flex gap-3 justify-between">
            <label htmlFor="email">Email</label>
            <input
              className="border border-stone-500 rounded-lg focus:outline-none px-4 py-1"
              id="email"
              name="email"
              type="text"
            />
          </div>

          <div className="flex gap-3 justify-between">
            <label htmlFor="message">Message</label>
            <textarea
              className="border border-stone-500 rounded-lg focus:outline-none px-4 py-1"
              cols={24}
              rows={6}
              id="message"
              name="message"
              type="text"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={(e) => handleSubmit(e)}
              className="bg-amber-200 px-2 py-2 transition-all duration-300 rounded-md text-amber-950 hover:bg-amber-100 inline-block focus:ring focus:ring-yellow-300 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
