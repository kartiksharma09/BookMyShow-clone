import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const Alerts = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
      <div className="col-12">
        <div key={alert.id} className={`row bg-${alert.alertType} alerts p-4`}>
          <strong>{alert.msg}</strong>
        </div>
        </div>
  ));

Alerts.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alerts);
