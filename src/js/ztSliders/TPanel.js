
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


const styles = {
    dialog: {
        width: '100%',
        bottom: '15px',
        position: 'absolute',
        left: '0',
        marginLeft: '50%',
    },
    modalBody: {
        padding: '0',
        position: 'relative',
        width: '400px',
        left: '-200px',
        padding: '10px',
    }
}

class TPanel extends React.Component {

    incrementT() {
        this.props.setT(this.props.theT + 1);
    }

    decrementT() {
        this.props.setT(this.props.theT - 1);
    }

    sliderChange(event) {
      this.props.setT(event.target.value);
    }

    onSlide(event) {
      this.props.setT(event.target.value, true);
    }

    render () {
      return (
          <div style={styles.dialog} className='modal-dialog'>
            <div style={styles.modalBody} className='modal-content'>
              T: {this.props.theT + 1}
              <Button
                onClick={this.incrementT.bind(this)}
                bsSize="small"
              >+</Button>
              <Button
                onClick={this.decrementT.bind(this)}
                bsSize="small"
              >-</Button>

              <input
                type='range'
                value={this.props.theT}
                min='0' max={this.props.sizeT -1}
                onMouseUp={this.sliderChange.bind(this)}
                onInput={this.onSlide.bind(this)}
              ></input>
            </div>
          </div>
      )
    }
}

// TPanel.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   active: PropTypes.bool.isRequired,
//   color: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired
// }

export default TPanel