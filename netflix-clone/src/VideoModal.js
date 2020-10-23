import React,{useState} from 'react';
import YouTube from "react-youtube";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

// Styles
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function VideoModal({trailerUrl, open, close}) {
    // const [open, setOpen] =useState(false);
    const [modalStyle] = useState(getModalStyle);

    // const handleClose=()=>{
    //     setOpen(false)
    // };
    // const handleOpen=()=>{
    //     setOpen(true)
    // };     
    const opts = {
        height: "520",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };
    
        return (
            <Modal 
            open
            onClose={close}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
              {/* <div> */}
              {trailerUrl
              ? <div style={modalStyle} >
                  <YouTube videoId={trailerUrl} opts={opts} /> 
                  </div>
              :  
              <div style={modalStyle} >
                  <h1>Erro Loading Video</h1>
                </div>
            }             
      </Modal>
    )
}

export default VideoModal
