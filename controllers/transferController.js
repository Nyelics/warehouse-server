const {con} = require("../databaseInstance");

/**
 *
 *
 */

exports.getTransferRequests = (req, res) => {
  try {
    const query = `
      SELECT * FROM fms_g20_transfer_requests
    `;
    con.query(query, (err, results) => {
      if (err) {
        console.error("Error occurred while fetching transfer requests:", err);
        return res
          .status(500)
          .json({message: "Failed to fetch transfer requests"});
      } else {
        console.log("Transfer requests fetched successfully");
        return res.status(200).json(results);
      }
    });
  } catch (err) {
    console.error("Error occurred while fetching transfer requests:", err);
    return res.status(500).json({message: "Failed to fetch transfer requests"});
  }
};

/**
 * METHOD POST
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.store = async (req, res) => {
  const {units, urgency, from_location, to_location, requester} = req.body;
  const status = "Pending";
  console.log(req.body);
  if (!units || !urgency || !from_location || !to_location || !requester) {
    return res.status(400).json({message: "All fields are required"});
  }

  try {
    const query = `
        INSERT INTO fms_g20_transfer_requests (units, urgency, from_location, to_location, status, requester)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
    con.query(
      query,
      [units, urgency, from_location, to_location, status, requester],
      (err, result) => {
        if (err) {
          console.error("Error occurred while creating transfer request:", err);
          return res
            .status(500)
            .json({message: "Failed to create transfer request"});
        } else {
          console.log("Transfer request created successfully");
          return res
            .status(201)
            .json({message: "Transfer request created successfully", result});
        }
      }
    );
  } catch (err) {
    console.error("Error occurred while creating transfer request:", err);
    return res.status(500).json({message: "Failed to create transfer request"});
  }
};

/**
 * METHOD PATCH
 */

exports.updateStatus = async (req, res) => {
  const {id} = req.params; // Assuming the ID of the transfer request is passed in the URL params
  const status = "Transferred"; // Assuming the new status is sent in the request body

  if (!status) {
    return res.status(400).json({message: "Status is required"});
  }

  try {
    const query = `
      UPDATE fms_g20_transfer_requests
      SET status = ?
      WHERE id = ?
    `;
    con.query(query, [status, id], (err, result) => {
      if (err) {
        console.error("Error occurred while updating transfer request:", err);
        return res
          .status(500)
          .json({message: "Failed to update transfer request"});
      } else {
        console.log("Transfer request updated successfully");
        return res
          .status(200)
          .json({message: "Transfer request updated successfully", result});
      }
    });
  } catch (err) {
    console.error("Error occurred while updating transfer request:", err);
    return res.status(500).json({message: "Failed to update transfer request"});
  }
};
