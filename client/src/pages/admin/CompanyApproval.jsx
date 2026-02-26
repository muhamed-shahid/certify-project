import React, { useEffect, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";
import AdminHeader from "../../components/AdminHeader";
import axios from "axios";
import toast from "react-hot-toast";

const CompanyApproval = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [confirmBox, setConfirmBox] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [actionType, setActionType] = useState(null); // APPROVED / REJECTED
  const [reason, setReason] = useState("");

  const token = localStorage.getItem("token");

  /* ================= FETCH COMPANIES ================= */
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          "http://localhost:5055/api/admin/companies",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setCompanies(res.data.data);
      } catch (err) {
        toast.error(
          err.response?.data?.message || "Failed to fetch companies"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, [token]);

  /* ================= BADGE STYLE ================= */
  const badgeStyle = (status) => {
    if (status === "APPROVED")
      return "bg-green-100 text-green-800";
    if (status === "REJECTED")
      return "bg-red-100 text-red-800";
    return "bg-yellow-100 text-yellow-800";
  };

  /* ================= OPEN MODAL ================= */
  const openModal = (company, statusType) => {
    setSelectedCompany(company);
    setActionType(statusType);
    setReason("");
    setConfirmBox(true);
  };

  /* ================= CLOSE MODAL ================= */
  const closeModal = () => {
    setConfirmBox(false);
    setSelectedCompany(null);
    setActionType(null);
    setReason("");
  };

  /* ================= UPDATE STATUS ================= */
  const handleStatusUpdate = async () => {
    if (!selectedCompany) return;

    try {
      const res = await axios.put(
        `http://localhost:5055/api/admin/companies/:${selectedCompany._id}`,
        {
          status: actionType,
          reason,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message);

      // Update UI instantly
      setCompanies((prev) =>
        prev.map((company) =>
          company._id === selectedCompany._id
            ? { ...company, status: actionType }
            : company
        )
      );

      closeModal();
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to update status"
      );
    }
  };

  return (
    <div className="flex">
      <AdminSideBar />

      <div className="flex-1 bg-slate-50 min-h-screen">
        <AdminHeader />

        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Company Approval Requests
          </h2>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="text-left text-xs text-slate-500 uppercase">
                    <th className="px-4 py-3">Company</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {companies.map((company) => (
                    <tr
                      key={company._id}
                      className="border-t hover:bg-slate-50"
                    >
                      <td className="px-4 py-3">
                        {company.name}
                      </td>

                      <td className="px-4 py-3">
                        {company.email}
                      </td>

                      <td className="px-4 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${badgeStyle(
                            company.status
                          )}`}
                        >
                          {company.status}
                        </span>
                      </td>

                      <td className="px-4 py-3">
                        {company.status === "PENDING" ? (
                          <div className="flex gap-2">
                            <button
                              onClick={() =>
                                openModal(
                                  company,
                                  "APPROVED"
                                )
                              }
                              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-3xl shadow-md hover:from-emerald-600 hover:to-green-700 transition"
                            >
                              Approve
                            </button>

                            <button
                              onClick={() =>
                                openModal(
                                  company,
                                  "REJECTED"
                                )
                              }
                              className="bg-gradient-to-r from-rose-500 to-red-600 text-white px-4 py-2 rounded-3xl shadow-md hover:from-rose-600 hover:to-red-700 transition"
                            >
                              Reject
                            </button>
                          </div>
                        ) : (
                          <span className="text-sm text-slate-500">
                            No action available
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ================= MODAL ================= */}
        {confirmBox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={closeModal}
            ></div>

            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6 z-10">
              <h3 className="text-lg font-semibold mb-2">
                 {actionType === "APPROVED"?"Confirm Approval":"Confirm Rejection"}
              </h3>

              <p className="text-sm text-slate-600 mb-4">
                Are you sure you want to{" "} {actionType === "APPROVED"?"approve":"reject"}{" "}
                <b>{selectedCompany?.name}</b>?
              </p>

              {actionType === "REJECTED" && (
                <textarea
                  value={reason}
                  onChange={(e) =>
                    setReason(e.target.value)
                  }
                  placeholder="Optional rejection reason"
                  className="w-full border rounded p-2 mb-4"
                />
              )}

              <div className="flex justify-end gap-2">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={handleStatusUpdate}
                  className="px-4 py-2 bg-indigo-600 text-white rounded"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyApproval;