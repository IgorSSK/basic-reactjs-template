import React from 'react';
import {
  AppBar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  IconButton,
  Slide,
  Toolbar,
  Typography
} from '@mui/material';
import { MdClose } from 'react-icons/md';
import { TransitionProps } from '@mui/material/transitions';
import Loading from 'components/Loading';
import { useUi } from 'hooks/useUi';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type ModalProps = {
  title: string;
  text?: string;
  action?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
} & Omit<DialogProps, 'open'>;

const Modal: React.FC<ModalProps> = ({
  title,
  text,
  action,
  isOpen = false,
  onClose,
  fullScreen,
  children,
  ...props
}) => {
  const { loading } = useUi();
  return (
    <Dialog {...props} fullScreen={fullScreen} open={isOpen} onClose={onClose} TransitionComponent={Transition}>
      {fullScreen ? (
        <>
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
                <MdClose />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {title}
              </Typography>
              {action}
            </Toolbar>
          </AppBar>
          <Loading isLoading={loading.active} />
        </>
      ) : (
        <DialogTitle>{title}</DialogTitle>
      )}

      <DialogContent>
        {<DialogContentText>{text}</DialogContentText>}
        {children}
      </DialogContent>
      {!fullScreen && <DialogActions>{action}</DialogActions>}
    </Dialog>
  );
};

export default Modal;
