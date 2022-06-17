import {BottomNavigation, BottomNavigationAction, Box} from "@mui/material";
import HandymanIcon from '@mui/icons-material/Handyman';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {Link, useLocation} from "react-router-dom";

export const Navigation = () => <Box marginBottom={2}>
    <BottomNavigation showLabels value={useLocation().pathname}>
        <BottomNavigationAction component={Link} to="/live" label="Live mode" value="/live" icon={<PlayCircleIcon/>}/>
        <BottomNavigationAction component={Link} to="/admin" label="Settings" value="/admin" icon={<HandymanIcon/>}/>
    </BottomNavigation>
</Box>;