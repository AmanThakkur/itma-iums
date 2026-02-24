import React from "react";
import "./AdvanceSearch.css";

const AdvanceSearch = ({ open, onClose, title = "Advance Search" }) => {
  if (!open) return null;

  return (
    <div className="advance-search-overlay" onClick={onClose}>
      <div className="advance-search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="as-header">
          <h3 className="as-title">{title}</h3>
          <button className="as-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="as-body">
          <div className="as-grid">
            <label>Location</label>
            <select>
              <option>Select Location</option>
            </select>

            <label>Employee Code/Name</label>
            <select>
              <option>Select Employee Code/Name</option>
            </select>

            <label>Effect Type</label>
            <select>
              <option>Select Effect Type</option>
            </select>

            <label>Insurance Name</label>
            <select>
              <option>Select Insurance Name</option>
            </select>

            <label>Installment Amount</label>
            <input type="text" placeholder="Enter Installment Amount" />

            <label>Date</label>
            <input type="date" />

            <label>Insurance Details</label>
            <input type="text" placeholder="Enter Insurance Details" />

            <label>Remarks</label>
            <input type="text" placeholder="Enter Remarks" />
          </div>

          <div className="as-actions">
            <button className="btn search-btn" type="button">
              Search
            </button>
            <button className="btn reset-btn" type="button" onClick={() => {}}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceSearch;
