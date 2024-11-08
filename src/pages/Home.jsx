import { UploadNewFile } from "../components/UploadNewFile";

const Home = () => {
  return (
    <>
      <div className="bg-slate-100 shadow-lg rounded-lg p-6 text-center w-full lg:w-3/4 xl:w-1/2 mx-auto">
        <div className="text-lg mb-6 text-center text-gray-800 font-mono">
          Welcome to our Image Editor! I am giving you 3 reasons why you should
          consider using our app:
        </div>
        <div className="text-lg mb-8 text-left text-gray-800 font-mono">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>No sign up needed:</strong> Just upload the image and
              start editing
            </li>
            <li>
              <strong>Privacy First:</strong> Absolutely no data storage or
              cookies. Your privacy is our priority.
            </li>
            <li>
              <strong>Cross-Platform Compatibility:</strong> Works on any
              device, anywhere.
            </li>
          </ul>
        </div>
        <UploadNewFile />
      </div>
    </>
  );
};

export default Home;
