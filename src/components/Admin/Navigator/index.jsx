import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import {useNavigate} from "react-router";
import { IconButton, SpeedDialIcon, StepIcon, SvgIcon } from '@mui/material';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import Man2TwoToneIcon from '@mui/icons-material/Man2TwoTone';
import HeadsetMicTwoToneIcon from '@mui/icons-material/HeadsetMicTwoTone';
import ViewStreamIcon from '@mui/icons-material/ViewStream';

const categories = [
    {
        id: 'Build',
        children: [
            {
                id: 'Quản lý quần áo',
                icon: <CheckroomIcon/>,
                active: false,
                url: '/admin/clothes'
            },
            {
                id: 'Áo nam',
                icon: <Man2TwoToneIcon/>,
                active: false,
                url: '/admin/manshirt'
            },
            {
                id: 'Quần nam',
                icon: <Man2TwoToneIcon/>,
                active: false,
                url: '/admin/mantrouser'
            },
            {
                id: 'Phụ kiện',
                icon: <ViewStreamIcon/>,
                active: false,
                url: '/admin/accessory'
         },
            {
                id: 'Liên hệ với chúng tôi',
                icon: <HeadsetMicTwoToneIcon/>,
                active: false,
                url: '/admin/contacts'
            },
            {
                id: 'Khác',
                icon: <SpeedDialIcon/>,
                active: false,
                url: '/admin/machine-learning'
            },
        ],
    }
];

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};

export default function Navigator(props) {
    const {...other} = props;
    const  navigate = useNavigate();

    const redirectPage = (url) => {
        navigate(url);
    }

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem sx={{...item, ...itemCategory, fontSize: 22, color: '#fff'}}>
                    Paperbase
                </ListItem>
                <ListItem sx={{...item, ...itemCategory}}>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText>Project Overview</ListItemText>
                </ListItem>
                {categories.map(({id, children}) => (
                    <Box key={id} sx={{bgcolor: '#101F33'}}>
                        <ListItem sx={{py: 2, px: 3}}>
                            <ListItemText sx={{color: '#fff'}}>{id}</ListItemText>
                        </ListItem>
                        {children.map(({id, icon, active, url}) => (
                            <ListItem disablePadding key={id}  >
                                <ListItemButton selected={active} sx={item} onClick={() => redirectPage(url)}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{id}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Divider sx={{mt: 2}}/>
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}