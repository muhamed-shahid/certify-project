import { useEffect, useState } from "react";
import axios from "axios";
import UniversityHeader from "../../components/UniversityHeader";
import UniversitySidebar from "../../components/UniversitySidebar";

const ViewCertificate = () => {

  const [certificates, setCertificates] = useState([]);
  const [error, setError] = useState("");

  // 🔹 Fetch certificates on page load
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5055/api/certificates"
        );
        setCertificates(res.data);
      } catch (err) {
        setError("Server error! Please try again later.");
      }
    };

    fetchCertificates();
  }, []);

  // 🔹 Revoke certificate (UI only for now)
  const revokeCertificate = (id) => {
    const confirmRevoke = window.confirm(
      "Are you sure you want to revoke this certificate?"
    );

    if (!confirmRevoke) return;

    setCertificates((prev) =>
      prev.map((cert) =>
        cert._id === id ? { ...cert, status: "REVOKED" } : cert
      )
    );
  };

  // 🔹 Status badge helper
  const getStatusBadge = (status) => {
    return status === "ACTIVE"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  };

  return (
    <div className="flex">
      <UniversitySidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">
        <UniversityHeader />

        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">
            Issued Certificates
          </h2>

          {error && (
            <p className="text-red-600 mb-4">{error}</p>
          )}

          <div className="bg-white rounded-xl shadow overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-200">
                <tr>
                  <th className="p-3 text-left">Student</th>
                  <th className="p-3 text-left">Course</th>
                  <th className="p-3 text-left">Certificate ID</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {certificates.map((cert) => (
                  <tr key={cert._id} className="border-b">
                    <td className="p-3">{cert.studentName}</td>
                    <td className="p-3">{cert.courseName}</td>
                    <td className="p-3">{cert.certificateNumber}</td>

                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${getStatusBadge(
                          cert.status
                        )}`}
                      >
                        {cert.status}
                      </span>
                    </td>

                    <td className="p-3">
                      {cert.status === "ACTIVE" ? (
                        <button
                          onClick={() => revokeCertificate(cert._id)}
                          className="bg-gradient-to-r from-red-500 to-red-600
                                     hover:from-red-600 hover:to-red-700
                                     text-white px-4 py-1 rounded
                                     transition shadow-sm hover:shadow-md"
                        >
                          Revoke
                        </button>
                      ) : (
                        <span className="text-slate-500 text-sm">
                          Revoked
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewCertificate;
