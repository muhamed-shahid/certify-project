import React, { useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";
import AdminHeader from "../../components/AdminHeader";
import axios from "axios";
import toast from "react-hot-toast"


const CompanyApproval = () => {
  const [companies, setCompanies] = useState([]);

  /* ---------- UPDATE STATUS ---------- */
  const updateStatus = (_id, newStatus) => {
    setCompanies((prev) =>
      prev.map((companies) =>
        companies._id === _id ? { ...companies, status: newStatus } : companies
      )
    );
  };

  /* ---------- BADGE STYLE ---------- */
  const badgeStyle = (status) => {
    if (status === "Approved") return "bg-green-100 text-green-800";
    if (status === "Rejected") return "bg-red-100 text-red-800";
    return "bg-yellow-100 text-yellow-800";
  };

  /* ---------- MODAL STATES ---------- */
  const [confirmBox, setConfirmBox] = useState(false);
  const [actionType, setActionType] = useState(null); // Approve | Reject
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [reason, setReason] = useState("");

  /* ---------- OPEN MODALS ---------- */
  const openApproveBox = (company) => {
    setSelectedCompany(company);
    setActionType("Approve");
    setConfirmBox(true);
  };

  const openRejectBox = (company) => {
    setSelectedCompany(company);
    setActionType("Reject");
    setReason("");
    setConfirmBox(true);
  };

  /* ---------- CONFIRM ACTION ---------- */
  const updateBox = () => {
    if (!selectedCompany) return closeBox();

    if (actionType === "Approve") {
      updateStatus(selectedCompany._id, "APPROVED");
    } else if (actionType === "Reject") {
      updateStatus(selectedCompany._id, "REJECTED");
    }

    closeBox();
  };

  /* ---------- CLOSE MODAL ---------- */
  const closeBox = () => {
    setConfirmBox(false);
    setActionType(null);
    setSelectedCompany(null);
    setReason("");
  };


  const fetchCompanies = async ()=>{
    try{
      const res = await axios.get("http://localhost:5055/api/companies",companies)

      setCompanies(res.data)
    }catch(err){
      toast.error("Server error! Please try again later.")
    }
  }

  return (
    <div className="flex">
      <AdminSideBar />

      <div className="flex-1 bg-slate-50 min-h-screen">
        <AdminHeader />

        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Company Approval Requests
          </h2>

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
                {companies.map((cmp) => (
                  <tr
                    key={cmp._id}
                    className="border-t hover:bg-slate-50"
                  >
                    <td className="px-4 py-3">{cmp.name}</td>
                    <td className="px-4 py-3">{cmp.email}</td>

                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${badgeStyle(
                          cmp.status
                        )}`}
                      >
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            background:
                              cmp.status === "Approved"
                                ? "#16a34a"
                                : cmp.status === "Rejected"
                                ? "#dc2626"
                                : "#d97706",
                          }}
                        />
                        {cmp.status}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      {cmp.status === "Pending" ? (
                        <div className="flex gap-2">
                          <button
                            onClick={() => openApproveBox(companies)}
                            className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-4 py-2 rounded-3xl shadow-md transition"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => openRejectBox(companies)}
                            className="bg-gradient-to-r from-rose-500 to-red-600
             hover:from-rose-600 hover:to-red-700
             text-white px-5 py-2 rounded-3xl
             shadow-md transition "
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
        </div>

        {/* ---------- MODAL ---------- */}
        {confirmBox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={closeBox}
            ></div>

            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6 z-10">
              <h3 className="text-lg font-semibold mb-2">
                {actionType === "Approve"
                  ? "Confirm Approval"
                  : "Confirm Rejection"}
              </h3>

              <p className="text-sm text-slate-600 mb-4">
                Are you sure you want to {actionType}{" "}
                <b>{selectedCompany?.name}</b>?
              </p>

              {actionType === "Reject" && (
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Optional rejection reason"
                  className="w-full border rounded p-2 mb-4"
                />
              )}

              <div className="flex justify-end gap-2">
                <button
                  onClick={closeBox}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={updateBox}
                  className="px-4 py-2 bg-rose-600 text-white rounded"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CompanyApproval
