const NewsletterForm = () => {
  return (
    <form
      action="https://community.us12.list-manage.com/subscribe/post?u=fbc38b56d8472a51dedc41c3e&amp;id=0d2916afaa&amp;f_id=009fece0f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="w-full max-w-lg mx-auto"
      target="_self"
      noValidate
    >
      <p className="text-sm text-gray-600 mb-4">
        <span className="text-red-500">*</span> indicates required
      </p>
      
      <div className="mb-4">
        <label htmlFor="mce-EMAIL" className="block text-sm font-medium">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          required
          placeholder="name@example.com"
          className="mt-1 p-2 w-full border-b border-neutral-200 focus:ring focus:ring-blue-300"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="mce-FNAME" className="block text-sm font-medium">
          First Name
        </label>
        <input
          type="text"
          name="FNAME"
          id="mce-FNAME"
          placeholder="First Name"
          className="mt-1 p-2 w-full border-b border-neutral-200 focus:ring focus:ring-blue-300"
        />
      </div>
      
      <div className="invisible absolute left-[-5000px]">
        <input
          type="text"
          name="b_fbc38b56d8472a51dedc41c3e_0d2916afaa"
          tabIndex="-1"
          defaultValue=""
        />
      </div>
      
      <button
        type="submit"
        name="subscribe"
        className="w-full bg-blue-600 text-white py-2 hover:bg-blue-700 transition cursor-pointer"
      >
        Subscribe
      </button>
      
      <p className="text-center mt-4">
        <a
          href="http://eepurl.com/i4PC-c"
          title="Mailchimp - email marketing made easy and fun"
          className="inline-flex items-center justify-center"
        >
          <img
            className="w-56 h-10"
            src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
            alt="Intuit Mailchimp"
          />
        </a>
      </p>
    </form>
  );
};

export default NewsletterForm;
