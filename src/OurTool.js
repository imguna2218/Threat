import React from 'react';
import {  toast } from 'react-hot-toast'; // Import Toaster and toast
import { FaClipboard } from 'react-icons/fa'; // Import clipboard icon
import Navbar from './components/Navbar';

const OurTool = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text); // Copy text to clipboard
    toast.success("Command copied to clipboard!"); // Show success notification
  };

  return (
    <div className="bg-gray-100 p-8 ml-[15vw] min-h-screen">
      <Navbar />
      <h2 className="text-3xl text-blue-500 font-bold mb-6">Threat Detectives Tool Setup</h2>
      <p className="text-gray-800 text-base mb-4">
        Follow the instructions below to clone the repository and run the tool on a Linux system:
      </p>

      <h3 className="text-2xl text-gray-700 font-semibold mb-4">Step 1: Clone the Repository</h3>
      <p className="text-gray-800 text-base mb-2">
        Run the following command in your terminal to clone the repository:
      </p>
      <div className="flex items-center mb-6">
        <pre className="bg-gray-800 text-white p-4 rounded flex-1">
          <code>git clone https://github.com/praveen8240/Threat.git</code>
        </pre>
        <FaClipboard
          className="text-gray-500 cursor-pointer ml-2"
          onClick={() => copyToClipboard("git clone https://github.com/praveen8240/Threat.git")}
          title="Copy to clipboard"
        />
      </div>

      <h3 className="text-2xl text-gray-700 font-semibold mb-4">Step 2: Navigate to the Project Directory</h3>
      <p className="text-gray-800 text-base mb-2">Use the following command to move into the project folder:</p>
      <div className="flex items-center mb-6">
        <pre className="bg-gray-800 text-white p-4 rounded flex-1">
          <code>cd Threat</code>
        </pre>
        <FaClipboard
          className="text-gray-500 cursor-pointer ml-2"
          onClick={() => copyToClipboard("cd Threat")}
          title="Copy to clipboard"
        />
      </div>

      <h3 className="text-2xl text-gray-700 font-semibold mb-4">Step 3: Set Up the Python Virtual Environment</h3>
      <p className="text-gray-800 text-base mb-2">
        Create and activate a virtual environment to manage dependencies. Run the following command:
      </p>
      <div className="flex items-center mb-6">
        <pre className="bg-gray-800 text-white p-4 rounded flex-1">
          <code>python3 -m venv myenv</code>
        </pre>
        <FaClipboard
          className="text-gray-500 cursor-pointer ml-2"
          onClick={() => copyToClipboard("python3 -m venv myenv")}
          title="Copy to clipboard"
        />
      </div>
      <p className="text-gray-800 text-base mb-2">If you encounter any permission issues, use:</p>
      <div className="flex items-center mb-6">
        <pre className="bg-gray-800 text-white p-4 rounded flex-1">
          <code>sudo python3 -m venv myenv</code>
        </pre>
        <FaClipboard
          className="text-gray-500 cursor-pointer ml-2"
          onClick={() => copyToClipboard("sudo python3 -m venv myenv")}
          title="Copy to clipboard"
        />
      </div>

      <h3 className="text-2xl text-gray-700 font-semibold mb-4">Step 4: Activate the Virtual Environment</h3>
      <p className="text-gray-800 text-base mb-2">
        Activate the virtual environment using the following command:
      </p>
      <div className="flex items-center mb-6">
        <pre className="bg-gray-800 text-white p-4 rounded flex-1">
          <code>source myenv/bin/activate</code>
        </pre>
        <FaClipboard
          className="text-gray-500 cursor-pointer ml-2"
          onClick={() => copyToClipboard("source myenv/bin/activate")}
          title="Copy to clipboard"
        />
      </div>

      <h3 className="text-2xl text-gray-700 font-semibold mb-4">Step 5: Install Dependencies</h3>
      <p className="text-gray-800 text-base mb-2">
        Install the required Python dependencies using:
      </p>
      <div className="flex items-center mb-6">
        <pre className="bg-gray-800 text-white p-4 rounded flex-1">
          <code>pip install -r requirements.txt</code>
        </pre>
        <FaClipboard
          className="text-gray-500 cursor-pointer ml-2"
          onClick={() => copyToClipboard("pip install -r requirements.txt")}
          title="Copy to clipboard"
        />
      </div>

      <h3 className="text-2xl text-gray-700 font-semibold mb-4">Step 6: Run the Tool</h3>
      <p className="text-gray-800 text-base mb-2">
        Finally, execute the tool by running the following script:
      </p>
      <div className="flex items-center mb-6">
        <pre className="bg-gray-800 text-white p-4 rounded flex-1">
          <code>./threat.sh</code>
        </pre>
        <FaClipboard
          className="text-gray-500 cursor-pointer ml-2"
          onClick={() => copyToClipboard("./threat.sh")}
          title="Copy to clipboard"
        />
      </div>

      <h3 className="text-2xl text-gray-700 font-semibold mb-4">Repository Link</h3>
      <a
        href="https://github.com/praveen8240/Threat.git"
        className="text-teal-500 font-semibold hover:text-teal-600"
      >
        https://github.com/praveen8240/Threat.git
      </a>
    </div>
  );
};

export default OurTool;
