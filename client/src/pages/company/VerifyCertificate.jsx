import { useState } from "react";
import axios from "axios";
import CompanySidebar from "../../components/CompanySidebar";
import CompanyHeader from "../../components/CompanyHeader";

const VerifyCertificate = () => {

  const [certificateNumber, setCertificateNumber] = useState("");
  const [result, setResult] = useState(null);

  const handleVerify = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5055/api/certificates/verify",
        { certificateNumber }
      );
      setResult(res.data);
    } catch (err) {

      if(err.response && err.response.data){
        setResult(err.response.data)
      }else{
      setResult({
        success: false,
        message: "Server error...! Please try again later.",
      });}
    }
  };

  return (
    <div className="flex">
      <CompanySidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">
        <CompanyHeader />

        <div className="p-6 max-w-xl">
          <h2 className="text-xl font-bold mb-4">
            Verify Certificate
          </h2>

          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <input
              type="text"
              placeholder="Enter Certificate Number"
              className="w-full border p-2 rounded"
              value={certificateNumber}
              onChange={(e) => setCertificateNumber(e.target.value)}
            />

            <button
              onClick={handleVerify}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg"
            >
              Verify
            </button>

            {result && (
              <div className="border-t pt-4">
                {result.success ? (
                  <div className="text-green-600 font-semibold">
                    ✅ {result.message}

                    <div className="mt-2 text-sm text-slate-600">
                      <p><b>Student:</b> {result.data.studentName}</p>
                      <p><b>Course:</b> {result.data.courseName}</p>
                      <p><b>University:</b> {result.data.universityName}</p>
                    </div>
                  </div>
                   ) : result.message === "Certificate is revoked" ? (
      <div className="text-red-600 font-semibold">
        🚫 Certificate is REVOKED

        <div className="mt-2 text-sm text-slate-600">
          <p>This certificate is no longer valid.</p>
        </div>
      </div>
                ) : (
                  <p className="text-red-600">
                    ❌ {result.message}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;
