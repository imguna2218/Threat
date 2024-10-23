import HelixImage from './Landing/src/assets/images/helix2.png';
import EmojiImage from './Landing/src/assets/images/emojistar.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';

const ManualTest = () => {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Form state management
  const [formData, setFormData] = useState({
    email: '',
    zipUrl: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email) {
      toast.error('Please enter your email');
      return;
    }
    if (!formData.zipUrl) {
      toast.error('Please enter ZIP file URL');
      return;
    }


    setIsLoading(true);
    const loadingToast = toast.loading('Sending...');

    // Prepare email content
    const emailData = {
      email: formData.email,
      message: `ZIP File Submission:
      
Email: ${formData.email}
ZIP URL: ${formData.zipUrl}

This is an automated message from the Manual Testing form submission.`
    };

    // Send email using EmailJS
    emailjs.send(
      'service_gcljatf',
      'template_suoiidp',
      emailData,
      'szt_GS68F0QH8ZZgI'
    ).then((result) => {
      if (result.text === "OK") {
        toast.dismiss(loadingToast);
        toast.success("Submission successful!");
        setFormData({ email: '', zipUrl: '' }); // Clear form after submission
      } else {
        toast.dismiss(loadingToast);
        toast.error("Failed to submit");
      }
    }).catch((error) => {
      console.error('Submission error:', error);
      toast.dismiss(loadingToast);
      toast.error("Failed to submit. Please try again.");
    }).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <>
      <div className="bg-white text-black py-16 sm:py-24 min-h-screen flex items-center justify-center relative overflow-hidden" ref={containerRef}>
        <motion.div style={{ translateY }} className="absolute left-[16rem] top-1/2 transform -translate-y-1/2 hidden lg:block">
          <img src={HelixImage} alt="helix" width={200} height={200} />
        </motion.div>
        
        <motion.div style={{ translateY }} className="absolute right-[15rem] top-[7rem] transform -translate-y-1/2 hidden lg:block">
          <img src={EmojiImage} alt="emoji" width={200} height={200} />
        </motion.div>
        
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter text-center text-violet-600">Manual Testing</h2>
          <p className="text-lg sm:text-xl text-black/70 mt-5 text-center">Feel free to send<br />We never Mis-use..!</p>
          
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="h-12 bg-white text-black rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] w-full focus:ring-2 focus:ring-violet-500 focus:outline-none transition"
              disabled={isLoading}
              required
            />
            
            <input
              type="url"
              name="zipUrl"
              placeholder="ZIP File URL"
              value={formData.zipUrl}
              onChange={handleChange}
              className="h-12 bg-white text-black rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] w-full focus:ring-2 focus:ring-violet-500 focus:outline-none transition"
              disabled={isLoading}
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              className={`${
                isLoading ? 'bg-violet-400' : 'bg-violet-600 hover:bg-violet-700'
              } text-white h-12 rounded-lg px-5 w-full sm:w-auto transition-colors flex items-center justify-center gap-2`}
            >
              {isLoading ? (
                <>
                  <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                  <span>Sending...</span>
                </>
              ) : (
                'Submit ZIP URL'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ManualTest;
