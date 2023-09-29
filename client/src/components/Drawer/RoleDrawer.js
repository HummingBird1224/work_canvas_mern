import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import './Drawer.css';

const RoleDrawer = (props) => {

  const handleClose = () => {
    props.handleChange(false)
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      className='drawer__background'
    // onClick={toggleDrawer(anchor, false)}
    // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box className='drawer__body'>
        <h1 className='title__lv1'>役割について</h1>
        <section>
          <h2 className='title__lv2'>・管理者：</h2>
          <p>
            - WORKCANVASの契約代表者となります。<br />
            - サロンのメンバー追加の承認を実施できます（承認依頼のメールが送信されます。）<br />
            - 管理画面を編集できます。
          </p>
          <br />
          <p className='fs-sm'>
            ※複数人を指定できます。<br />
            ※管理者を変更できるのは現在の管理者だけになります。
          </p>
          <Divider />
          <h2 className='title__lv2'>・採用担当者：</h2>
          <p>
            - サロンのメンバー追加の承認を実施できます（承認依頼のメールが送信されます。）<br />
            - 管理画面を編集できます。
          </p>
          <br />
          <p className='fs-sm'>
            ※複数人を指定できます。
          </p>
        </section>
        <Button >キャンセル</Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor='bottom'
        open={props.open}
        onClose={handleClose}
        sx={{ height: '100%' }}
      >
        {list('bottom')}
      </Drawer>
    </div>
  );
}

export default RoleDrawer;