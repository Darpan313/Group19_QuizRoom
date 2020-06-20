import React from "react";

export const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <>
            <li key={i} className="text-danger">
              {fieldName} {formErrors[fieldName]}
            </li>
          </>
        );
      } else {
        return "";
      }
    })}
  </div>
);
