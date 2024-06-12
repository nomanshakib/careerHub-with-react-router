import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl p-6">
      <figure><img className="w-28" src={logo} alt="logo"/></figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
              <div>
                  <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{ remote_or_onsite }</button>
                  <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{ job_type }</button>
              </div>
              <div className="my-3 flex">
                  <h2 className="flex mr-4"><CiLocationOn className="text-2xl mr-2"></CiLocationOn>{ location }</h2>
                  <h2 className="flex"><AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>{ salary }</h2>
              </div>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
