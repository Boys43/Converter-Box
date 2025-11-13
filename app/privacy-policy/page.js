export const metadata = {
  title: "Privacy Policy - ConverterBox YouTube to MP3 Converter",
  description: "Privacy policy for ConverterBox YouTube to MP3 converter. Learn how we protect your privacy and handle your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 pt-24">
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h1 className="text-4xl font-bold text-black mb-8">
            Privacy Policy
          </h1>
          
          <div className="max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ConverterBox does not collect, store, or process any personal information. We do not require registration, 
              and we do not track users across sessions.
            </p>
            
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              How We Use Information
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We only process YouTube URLs temporarily to provide the conversion service. No URLs or converted files 
              are stored on our servers.
            </p>
            
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We use third-party APIs to process YouTube videos. These services may have their own privacy policies.
            </p>
            
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at privacy@converterbox.online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
