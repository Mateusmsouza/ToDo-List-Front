import React from 'react';
import { connect } from "react-redux";
import { Snackbar, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { cleanApiErrors } from "../store/ducks/card";

const SimpleSnackbar = props => {
  console.log(props);
  const { apiErrors, cleanApiErrors } = props;
  
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    cleanApiErrors();
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={apiErrors && apiErrors.length > 0}
        autoHideDuration={6000}
        onClose={handleClose}
        message={apiErrors}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}


const mapsStateToProps = state => {
  return {
    apiErrors: state.reducerCard.apiErrors
  }
}

export default connect(
  mapsStateToProps,
  { cleanApiErrors }
)(SimpleSnackbar)