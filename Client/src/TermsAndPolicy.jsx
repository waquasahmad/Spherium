import React from "react";
import LegalNav from "./components/LegalNav";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";

const TermsAndPolicy = () => {
  return (
    <div className="row policy-section">
      <div className="col-md-2 col-12 leftside web-view">
        <LegalNav />
      </div>

      <div className="col-md-10 col-12 right-side">
        <div className="termandservice col-12" id="section1">
          <TermsOfService />
        </div>

        <div className="policy col-12" id="section2">
          <PrivacyPolicy />
        </div>
      </div>
    </div>
  );
};

export default TermsAndPolicy;
