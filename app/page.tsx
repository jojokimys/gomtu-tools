"use client";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

enum Status {
  IDLE = "IDLE",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

export default function Home() {
  const [rowData, setRowData] = useState([
    {
      address: "0x7B20bC5328EF69fCE39779232321Bd33D60650F1",
      amount: "0.001",
      status: Status.IDLE,
      result: "",
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "address", width: 480 },
    { field: "amount" },
    { field: "Status", sortable: true },
    { field: "result" },
  ]);

  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  return (
    <main className="w-screen h-full min-h-screen flex">
      <Sidebar />

      <div className="w-full min-h-[200px] flex  m-4">
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-auto flex gap-2 my-2">
            <div>
              <p>Public Key</p>
              <input
                className=" text-black rounded-md"
                value={publicKey}
                onChange={e => setPublicKey(e.target.value)}
              />
            </div>
            <div>
              <p>Private Key</p>
              <input
                className=" text-black rounded-md"
                value={privateKey}
                onChange={e => setPrivateKey(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-1 w-full h-auto col">
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
              className="w-auto bg-gray-800 p-4 rounded-xl"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}
