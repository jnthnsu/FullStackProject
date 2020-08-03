import { connect } from "react-redux";
import SessionForm from "./session_form";
import {
  login,
  clearErrors
} from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: "sign up",
  };
};

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(login(user)),
  demoLogin: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
