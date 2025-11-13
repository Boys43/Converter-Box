export const metadata = {
  title: "Terms of Service - ConverterBox YouTube to MP3 Converter",
  description: "Terms of service for ConverterBox YouTube to MP3 converter. Read our terms and conditions for using our free service.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 pt-24">
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h1 className="text-4xl font-bold text-black mb-8">
            Terms of Service
          </h1>
          
          <div className="max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              By using ConverterBox, you agree to these terms of service. If you do not agree, please do not use our service.
            </p>
            
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              Service Description
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ConverterBox provides a free YouTube to MP3 conversion service. We convert publicly available YouTube videos to MP3 format for personal use only.
            </p>
            
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              User Responsibilities
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 leading-relaxed space-y-2">
              <li>Use the service only for personal, non-commercial purposes</li>
              <li>Respect copyright laws and intellectual property rights</li>
              <li>Do not attempt to overload or abuse our service</li>
              <li>Only convert content you have permission to use</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              Disclaimer
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ConverterBox is provided "as is" without warranties. We are not responsible for any copyright violations by users.
            </p>
            
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              Contact
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              For questions about these terms, contact us at legal@converterbox.online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
