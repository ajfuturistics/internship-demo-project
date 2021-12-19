import React from "react";
import { ImNewspaper } from "react-icons/im";
import { AiOutlineBars } from "react-icons/ai";
import "./sidebar.css";

const Sidebar = ({ active, setActive, activeContact, setActiveContact }) => {
  return (
    <div className="sidebar shadow2">
      <div className="">
        <div className="sidebar-profile mb-2">
          <div className="profile-div">
            <img
              className="sidebar-img"
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
              alt="profile"
            />
          </div>

          <div className="profile-div2">
            <h2 className="">Hi Reader,</h2>
            <p className="">Here's your News!</p>
          </div>
        </div>

        {!activeContact && (
          <div className="sidebar-toggle mb-2">
            <h2 className="text-center">Toggle View</h2>
            <div className="toggle">
              <div
                className={
                  !active
                    ? "toggle-btn rounded-left active"
                    : "toggle-btn shadow rounded-left"
                }
                onClick={() => setActive(false)}
              >
                <ImNewspaper size={40} />
              </div>
              <div
                className={
                  active
                    ? "toggle-btn rounded-right active"
                    : "toggle-btn shadow rounded-right"
                }
                onClick={() => setActive(true)}
              >
                <AiOutlineBars size={40} />
              </div>
            </div>
          </div>
        )}

        <div className="sidebar-toggle mb-2">
          <h2 className="text-center">Have a Feedback?</h2>
          <div className="toggle">
            <div
              className={
                activeContact
                  ? "form-btn-active text-center"
                  : "form-btn text-center"
              }
              onClick={() => setActiveContact(!activeContact)}
            >
              We are listening
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
