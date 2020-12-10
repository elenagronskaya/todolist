import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const DeleteConfirmationDialog = ({
  open,
  onClose,
  onHandlerToRun,
  title,
}) => {


  

  return (
    <Dialog
      open={open}
      onClose={onClose}
      container={document.body}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Delete Todo List</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete <strong>{title}</strong> todo list?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          color="secondary"
          onClick={onHandlerToRun}
        >
          Delete {title}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DeleteConfirmationDialog;
