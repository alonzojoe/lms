import Card from "@/components/UI/Card";
import Pagination from "@/components/UI/Pagination";

const Borrowers = () => {
  return (
    <div className="card mt-3">
      <Card title="Search Patient">
        <div className="row mt-4">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Account No.
              </label>
              <input
                type="text"
                className="form-control form-control-sm custom-font"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Last Name
              </label>
              <input
                type="text"
                className="form-control form-control-sm custom-font"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                First Name
              </label>
              <input
                type="text"
                className="form-control form-control-sm custom-font"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Middle Name
              </label>
              <input
                type="text"
                className="form-control form-control-sm custom-font"
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Date From
              </label>
              <input
                type="date"
                className="form-control form-control-sm custom-font"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Date To
              </label>
              <input
                type="date"
                className="form-control form-control-sm custom-font"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div
              className="d-flex gap-2 align-items-center"
              style={{
                marginTop: "1.7rem",
              }}
            >
              <button className="btn btn-primary">Search</button>
              <button className="btn btn-danger">Refresh</button>
            </div>
          </div>
        </div>
      </Card>

      <div className="table-responsive mt-3">
        <table className="table table-bordered table-hover">
          <thead>
            <tr style={{ textTransform: "capitalize !important" }}>
              <th className="text-center bg-primary text-white fw-bold p-1 m-0">
                Account No.
              </th>
              <th className="text-center bg-primary text-white fw-bold p-1 m-0">
                Transaction Date & Time
              </th>
              <th className="text-center bg-primary text-white fw-bold p-1 m-0">
                Client Name
              </th>
              <th className="text-center bg-primary text-white fw-bold p-1 m-0">
                Term
              </th>
              <th className="text-center bg-primary text-white fw-bold p-1 m-0">
                View Ledger
              </th>
              <th className="text-center bg-primary text-white fw-bold p-1 m-0">
                Options
              </th>
              <th className="text-center bg-primary text-white fw-bold p-1 m-0">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center align-middle fw-normal p-1 m-0">
                01-012724
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                June 27, 2024
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                CAPULONG, LUCHIE
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                5 Months
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-dark btn-sm">Account Ledger</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-warning btn-sm">Update</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                UPDATED
              </td>
            </tr>
            <tr>
              <td className="text-center align-middle fw-normal p-1 m-0">
                01-012725
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                June 28, 2024
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                GARCIA, JUAN
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                6 Months
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-dark btn-sm">Account Ledger</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-warning btn-sm">Update</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                UPDATED
              </td>
            </tr>

            <tr>
              <td className="text-center align-middle fw-normal p-1 m-0">
                01-012726
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                July 01, 2024
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                SMITH, JOHN
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                3 Months
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-dark btn-sm">Account Ledger</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-warning btn-sm">Update</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                UPDATED
              </td>
            </tr>

            <tr>
              <td className="text-center align-middle fw-normal p-1 m-0">
                01-012727
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                July 02, 2024
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                DIAZ, MICHAEL
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                9 Months
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-dark btn-sm">Account Ledger</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-warning btn-sm">Update</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                UPDATED
              </td>
            </tr>

            <tr>
              <td className="text-center align-middle fw-normal p-1 m-0">
                01-012728
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                July 03, 2024
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                BROWN, EMILY
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                5 Months
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-dark btn-sm">Account Ledger</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-warning btn-sm">Update</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                UPDATED
              </td>
            </tr>

            <tr>
              <td className="text-center align-middle fw-normal p-1 m-0">
                01-012729
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                July 04, 2024
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                JOHNSON, LUCAS
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                8 Months
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-dark btn-sm">Account Ledger</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-warning btn-sm">Update</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                UPDATED
              </td>
            </tr>

            <tr>
              <td className="text-center align-middle fw-normal p-1 m-0">
                01-012730
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                July 05, 2024
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                CLARK, LUCY
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                4 Months
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-dark btn-sm">Account Ledger</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-warning btn-sm">Update</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                UPDATED
              </td>
            </tr>

            <tr>
              <td className="text-center align-middle fw-normal p-1 m-0">
                01-012731
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                July 06, 2024
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                MARTINEZ, ISABEL
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                9 Months
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-dark btn-sm">Account Ledger</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-warning btn-sm">Update</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                UPDATED
              </td>
            </tr>

            <tr>
              <td className="text-center align-middle fw-normal p-1 m-0">
                01-012732
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                July 07, 2024
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                GONZALEZ, DAVID
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                7 Months
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-dark btn-sm">Account Ledger</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-warning btn-sm">Update</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                UPDATED
              </td>
            </tr>
            <tr>
              <td className="text-center align-middle fw-normal p-1 m-0">
                01-012733
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                July 08, 2024
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                SANTOS, ANA
              </td>{" "}
              {/* Filipino name */}
              <td className="text-center align-middle fw-normal p-1 m-0">
                2 Months
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-dark btn-sm">Account Ledger</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                <button className="btn btn-warning btn-sm">Update</button>
              </td>
              <td className="text-center align-middle fw-normal p-1 m-0">
                UPDATED
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default Borrowers;
