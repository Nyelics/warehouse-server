const {con} = require("../databaseInstance");

exports.getDummyOrders = async (req, res) => {
  try {
    con.query("SELECT * FROM fms_g18_formdetails", async (err, data) => {
      if (err) {
        console.log("Error inserting quality reports:", err);
        return res.status(500).json({error: "Internal server error"});
      }

      return res.status(201).json({message: `Quality Reports`, data});
    });
  } catch (error) {
    console.log("Error inserting quality reports:", error);
    res.status(500).json({error: "Internal server error"});
  }
};
