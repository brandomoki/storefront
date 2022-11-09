import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { selectCategory } from '../../store/actions';

function MenuPopupState(props) {
  return (
    <PopupState sx={{ display: 'flex' }} variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            {props.categories.map((category, index) => (
              <MenuItem key={`category-${index}`} onClick={() => props.selectCategory(category.name)}>
                {category.displayName}
              </MenuItem>
            ))}
            <MenuItem onClick={popupState.close}>Profile</MenuItem>

          </Menu>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Cart
          </Button>
        </React.Fragment>
      )}
    </PopupState>
  );
}

const mapStateToProps = (store) => ({
  categories: store.categories,
});

const mapDispatchToProps = { selectCategory };

export default connect(mapStateToProps, mapDispatchToProps)(MenuPopupState);