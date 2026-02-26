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
  const [actionType, setActionType] = useState(null);
  const [reason, setReason] = useState("");

  const token = localStorage.getItem("token");



  /* ================= FETCH COMPANIES ================= */

  useEffect(() => {

    if (!token) {
      toast.error("Unauthorized. Please login again.");
      return;
    }

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

        if (res.data.success) {
          setCompanies(res.data.data);
        }

      } catch (err) {

        console.error(err);

        toast.error(
          err.response?.data?.message ||
          "Failed to fetch companies"
        );

      } finally {
        setLoading(false);
      }

    };

    fetchCompanies();

  }, [token]);



  /* ================= BADGE STYLE ================= */

  const badgeStyle = (status) => {

    switch (status) {

      case "APPROVED":
        return "bg-green-100 text-green-800";

      case "REJECTED":
        return "bg-red-100 text-red-800";

      default:
        return "bg-yellow-100 text-yellow-800";

    }

  };



  /* ================= OPEN MODAL ================= */

  const openModal = (company, type) => {

    if (!company) return;

    setSelectedCompany(company);
    setActionType(type);
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
      `http://localhost:5055/api/admin/company/${selectedCompany._id}`,
      {
        status: actionType,
        reason: reason || ""
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    

    toast.success(res.data.message || "Status updated successfully");

    // Update UI
    setCompanies(prev =>
      prev.map(company =>
        company._id === selectedCompany._id
          ? { ...company, status: actionType }
          : company
      )
    );

    closeModal();

  } catch (err) {

    console.error(err);

    toast.error(
      err.response?.data?.message ||
      "Failed to update status"
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

                  {companies.map(company => (

                    <tr key={company._id} className="border-t">

                      <td className="px-4 py-3">
                        {company.name}
                      </td>

                      <td className="px-4 py-3">
                        {company.email}
                      </td>

                      <td className="px-4 py-3">

                        <span className={`px-3 py-1 rounded-full text-sm ${badgeStyle(company.status)}`}>
                          {company.status}
                        </span>

                      </td>

                      <td className="px-4 py-3">

                        {company.status === "PENDING" ? (

                          <div className="flex gap-2">

                            <button
                              onClick={() => openModal(company, "APPROVED")}
                              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-4 py-2 rounded-3xl shadow-md transition"
                            >
                              Approve
                            </button>

                            <button
                              onClick={() => openModal(company, "REJECTED")}
                              className='bg-gradient-to-r from-rose-500 to-red-600
             hover:from-rose-600 hover:to-red-700
             text-white px-5 py-2 rounded-3xl
             shadow-md transition mt-1'
                            >
                              Reject
                            </button>

                          </div>

                        ) : (

                          <span className="text-gray-400">
                            No action
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



        {/* MODAL */}

        {confirmBox && (

          <div className="fixed inset-0 flex items-center justify-center bg-black/40">

            <div className="bg-white p-6 rounded shadow w-96">

              <h3 className="text-lg font-bold">

                {actionType === "APPROVED"
                  ? "Confirm Approval"
                  : "Confirm Rejection"}

              </h3>

              <p className="mt-2">

                Are you sure you want to {" "}
                {actionType === "APPROVED" ? "approve" : "reject"} {" "}
                <b>{selectedCompany?.name}</b> ?

              </p>

              {actionType === "REJECTED" && (

                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full border mt-3 p-2"
                  placeholder="Optional rejection reason"
                />

              )}

              <div className="flex justify-end gap-3 mt-4">

                <button onClick={closeModal}>
                  Cancel
                </button>

                <button
                  onClick={handleStatusUpdate}
                  className="bg-indigo-600 text-white px-4 py-2 rounded"
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