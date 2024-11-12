import React from "react";

function Alert(props) {
  const captitalized = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{height:'40px'}}>
      {props.alertMesage && (
        <div
          className={`alert alert-${props.alertMesage.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{captitalized(props.alertMesage.type)}</strong>
          {props.alertMesage.messege}
        </div>
      )}
    </div>
  );
}

export default Alert;
