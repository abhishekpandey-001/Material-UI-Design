import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import GradeIcon from '@mui/icons-material/Grade';
import SearchIcon from '@mui/icons-material/Search';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PushPinIcon from '@mui/icons-material/PushPin';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ModeIcon from '@mui/icons-material/Mode';
import ListItem from '@mui/material/ListItem';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';

export default function Sidebar() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };


    const [checked, setChecked] = React.useState(['mode']);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <Box flex={1} sx={{
            display: {
                xs: 'none', md: 'block'
            }
        }}>
            <Box position={'sticky'} top={70}>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sent mail" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Spam" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <FolderCopyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Copies" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <GradeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Favorites" />
                    </ListItemButton>


                    <ListItemButton>
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary="Search" />
                    </ListItemButton>


                    <ListItemButton>
                        <ListItemIcon>
                            <WorkHistoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Recent Items" />
                    </ListItemButton>


                    <ListItemButton>
                        <ListItemIcon>
                            <PushPinIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pinned" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <LabelImportantIcon />
                        </ListItemIcon>
                        <ListItemText primary="Important" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <ModeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItemButton>


                    {/* Nested list with added handleClick function */}

                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    {/* Toggle button for dark and light mode */}


                    <ListItem>
                        <ListItemIcon>
                            <DarkModeIcon />
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-bluetooth" primary="Mode" />
                        <Switch
                            edge="end"
                            onChange={handleToggle('mode')}
                            checked={checked.includes('mode')}
                            inputProps={{
                                'aria-labelledby': 'switch-list-label-bluetooth',
                            }}
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}
