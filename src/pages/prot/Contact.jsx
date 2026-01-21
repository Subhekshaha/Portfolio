
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";


// const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_y6coxag",
//         "template_nyuvm22",
//         form.current,
//         "JWkCIqyND5f14-sUL"
//       )
//       .then((result) => {
//         console.log("Message sent successfully", result.text);
//         alert("Message sent successfully!");
//         form.current.reset();
//       })
//       .catch((error) => {
//         console.error("Failed to send message", error.text);
//         alert("Failed to send message.");
//       });
//   };

//   return (
//     <section className="min-h-screen text-white flex items-center justify-center px-4 sm:px-6 md:px-12 bg-[#1c1c1c]">
//       <div className="w-full max-w-xl lg:max-w-3xl px-4 lg:px-24 py-12 lg:py-24">
//         <h2 className="text-3xl sm:text-4xl font-anton text-center mb-6">
//           GET IN TOUCH
//         </h2>
//         <p className="text-center text-gray-400 mb-8 px-2 sm:px-6 md:px-12">
//           Let's work together — feel free to reach out.
//         </p>

//         <form ref={form} onSubmit={sendEmail} className="space-y-6">
//           <div>
//             <label className="block mb-2 text-sm font-bold tracking-widest">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-green-400"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-sm font-bold tracking-widest">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="your@email.com"
//               className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-green-400"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-sm font-bold tracking-widest">
//               Message
//             </label>
//             <textarea
//               name="message"
//               placeholder="Type your message here..."
//               rows="5"
//               className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-green-400 resize-none"
//               required
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-md transition duration-300 w-full"
//           >
//             Send Message
//           </button>
//         </form>

//         <p className="text-center text-2xl sm:text-20 text-gray-500 mt-6 px-2 sm:px-0">
//           Or email me directly at{" "}
//           <span className="text-white text-base">@subhekshaadhikari@gmail.com</span>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;